
////////////////////   Anim load hero   ////////////////////


//  Prep   //

//collect animation containers
var animContSmall = document.getElementById('hero-anim-small')
var animContMedium = document.getElementById('hero-anim-medium')
var animContLarge = document.getElementById('hero-anim-large')

//collect containers in an array
var displayedContainers = document.getElementsByClassName("anim");

// turn off other region containers
function turnOffOtherRegions() {
   for (var i = 0; i < displayedContainers.length; i++) {
      displayedContainers[i].classList.add("off");
   }
   console.log("later anim containers off");
}

//initial call
turnOffOtherRegions();

//debounce function
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// load region small animation
var animSmall = lottie.loadAnimation({
   container: document.getElementById('hero-anim-small'),
   renderer: 'svg',
   loop: true,
   autoplay: false,
   path: 'resources/anim/region-small_hero.json'
})


// load region medium animation
var animMedium = lottie.loadAnimation({
   container: document.getElementById('hero-anim-medium'),
   renderer: 'svg',
   loop: true,
   autoplay: false,
   path: 'resources/anim/region-medium_hero.json'
})

// load region large animation
var animLarge = lottie.loadAnimation({
   container: document.getElementById('hero-anim-large'),
   renderer: 'svg',
   loop: true,
   autoplay: false,
   path: 'resources/anim/region-large_hero.json'
})


//  Determine breakpoint & call loader  //


// breakpoint variable
var screenBase

// screen break points
var breakOne = 720
var breakTwo = 1100
var breakThree = 1440


// Break determiner and load caller (debounced)
var debouncedBreakDeterminer = debounce(function() {

      // determine screen breakpoints and assign base values
      if(window.innerWidth <= breakOne) {
         screenBase = 1
         console.log("region-small")
         animPlayer();
      }

      else if(window.innerWidth >= breakOne && window.innerWidth <= breakTwo) {
         screenBase = 2
         console.log("region-medium")
         animPlayer();
      }

      else if(window.innerWidth >= breakTwo && window.innerWidth <= breakThree) {
         screenBase = 3
         console.log("region-large")
         animPlayer();
      }

      else if(window.innerWidth > breakThree) {
         screenBase = 4
         console.log("region-oversize")
         animPlayer();
      }

 }, 250);

// call on resize
window.addEventListener('resize', debouncedBreakDeterminer);

debouncedBreakDeterminer();



//  Animation player //


function animPlayer() {

   if(screenBase === 1) {
      turnOffOtherRegions();
      animContSmall.classList.toggle("off");
      animSmall.playSegments([[0,525],[145,525]], true);
      }

   else if(screenBase === 2) {
      turnOffOtherRegions();
      animContMedium.classList.toggle("off");
      animMedium.playSegments([[0,525],[145,525]], true);
   }

   else if(screenBase === 3) {
      turnOffOtherRegions();
      animContLarge.classList.toggle("off");
      animLarge.setSpeed(0.75);
      animLarge.playSegments([[0,525],[145,525]], true);
   }

   else if(screenBase === 4) {
      turnOffOtherRegions();
      animContLarge.classList.toggle("off");
      animLarge.playSegments([[0,525],[145,525]], true);
   }
}

animPlayer();
