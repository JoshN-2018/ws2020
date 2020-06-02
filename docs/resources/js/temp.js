

////////////////////   Anim load hero   ////////////////////


//  Prep   //

//collect animation containers
var animContSmall = document.getElementById('hero-anim-small')
var animContMedium = document.getElementById('hero-anim-medium')
var animContLarge = document.getElementById('hero-anim-large')

//collect containers in an array
var displayedContainers = document.getElementsByClassName("anim");


// turn off other regions
function turnOffOtherRegions() {
   for (var i = 0; i < displayedContainers.length; i++) {
      displayedContainers[i].classList.add("off");
   }
   console.log("later anim containers off");
}

turnOffOtherRegions();



//  Determine breakpoint & switch  //


// breakpoint determining variable
var screenBase

// screen break points
var breakOne = 720
var breakTwo = 1100
var breakThree = 1440


function breakHandler() {

   // determine screen breakpoints and assign base values
   if(window.innerWidth <= breakOne) {
      screenBase = 1
      console.log("region-small")
      turnOffOtherRegions();
      animContSmall.classList.toggle("off");

      // load region small animation
      var animSmall = lottie.loadAnimation({
         container: document.getElementById('hero-anim-small'),
         renderer: 'svg',
         loop: false,
         autoplay: true,
         path: 'resources/anim/region-small.json'
      })

   }
   else if(window.innerWidth >= breakOne && window.innerWidth <= breakTwo) {
      screenBase = 2
      console.log("region-medium")
      turnOffOtherRegions();
      animContMedium.classList.toggle("off");

      // load region medium animation
      var animMedium = lottie.loadAnimation({
         container: document.getElementById('hero-anim-medium'),
         renderer: 'svg',
         loop: false,
         autoplay: true,
         path: 'resources/anim/region-medium.json'
      })

   }
   else if(window.innerWidth >= breakTwo && window.innerWidth <= breakThree) {
      screenBase = 3
      console.log("region-large")
      turnOffOtherRegions();
      animContLarge.classList.toggle("off");

      // load region large animation
      var animLarge = lottie.loadAnimation({
         container: document.getElementById('hero-anim-large'),
         renderer: 'svg',
         loop: false,
         autoplay: true,
         path: 'resources/anim/region-large.json'
      })
   }
   else if(window.innerWidth >= breakThree) {
      screenBase = 3
      console.log("region-large")
      turnOffOtherRegions();
      animContLarge.classList.toggle("off");
   }
      // also load region large animation
      var animLarge = lottie.loadAnimation({
         container: document.getElementById('hero-anim-large'),
         renderer: 'svg',
         loop: false,
         autoplay: true,
         path: 'resources/anim/region-large.json'
      })
 }

// add event listener
 document.addEventListener("DOMContentLoaded", function(event) {
 breakHandler();
 });

// call on resize
 window.addEventListener('resize', breakHandler);



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


var debouncedBreakHandler = debounce(function() {
	console.log("fired!");
}, 250);


window.addEventListener('resize', debouncedBreakHandler);
