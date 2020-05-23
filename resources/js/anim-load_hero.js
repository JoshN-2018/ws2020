

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
         animLoader();
      }

      else if(window.innerWidth >= breakOne && window.innerWidth <= breakTwo) {

         screenBase = 2
         console.log("region-medium")
         animLoader();
      }

      else if(window.innerWidth >= breakTwo && window.innerWidth <= breakThree) {

         screenBase = 3
         console.log("region-large")
         animLoader();
      }

      else if(window.innerWidth > breakThree) {

         screenBase = 4
         console.log("region-oversize")
         animLoader();
      }

 	console.log("determiner fired!");
 }, 250);

// call on resize
window.addEventListener('resize', debouncedBreakDeterminer);

debouncedBreakDeterminer();


//  Animation loader  //


function animLoader() {

   if(screenBase = 1) {

      // load region small animation
      var animSmall = lottie.loadAnimation({
         container: document.getElementById('hero-anim-small'),
         renderer: 'svg',
         loop: false,
         autoplay: true,
         path: 'resources/anim/region-small.json'
      })

      turnOffOtherRegions();
      animContSmall.classList.toggle("off");
   }

   else if(screenBase = 2) {

      // load region medium animation
      var animMedium = lottie.loadAnimation({
         container: document.getElementById('hero-anim-medium'),
         renderer: 'svg',
         loop: false,
         autoplay: true,
         path: 'resources/anim/region-medium.json'
      })

      turnOffOtherRegions();
      animContMedium.classList.toggle("off");
   }

   else if(screenBase = 3) {

      // load region medium animation
      var animLarge = lottie.loadAnimation({
         container: document.getElementById('hero-anim-large'),
         renderer: 'svg',
         loop: false,
         autoplay: true,
         path: 'resources/anim/region-large.json'
      })

      turnOffOtherRegions();
      animContlarge.classList.toggle("off");
   }

   else if(screenBase = 4) {

      // load region large animation
      var animLarge = lottie.loadAnimation({
         container: document.getElementById('hero-anim-large'),
         renderer: 'svg',
         loop: false,
         autoplay: true,
         path: 'resources/anim/region-large.json'
      })

      turnOffOtherRegions();
      animContlarge.classList.toggle("off");
   }
}

animLoader();
