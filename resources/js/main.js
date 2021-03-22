// Overlay functionality

var overlay = document.getElementById("overlay");

function on() {
   overlay.classList.remove("overlayShift");
   overlay.classList.remove("overlayOff");
   overlay.style.transition = "opacity 0.5s ease";
   overlay.classList.add("overlayOn");
   document.getElementById("menu-button").style.display = "none";
   document.getElementById("menu-button-off").style.display = "block";
}

// function to be called after set time period
function delay() {
   overlay.classList.add("overlayShift");
}

function off() {
   overlay.classList.remove("overlayOn");
   overlay.classList.add("overlayOff");
   overlay.style.transition = "opacity 0.5s ease";
   setTimeout(function(){delay(); }, 500);

   document.getElementById("menu-button-off").style.display = "none";
   document.getElementById("menu-button").style.display = "block";
}



//Above the line animate!!!

   //check DOM is loaded before animating
document.addEventListener("DOMContentLoaded", function(event) {

   // Get elements
      // Active properites
   var anProps = document.getElementsByClassName("offset-an-props");
   var anOne = document.getElementsByClassName("offsetAn1");
   var anTwo = document.getElementsByClassName("offsetAn2");
   var anThree = document.getElementsByClassName("offsetAn3");
   var anFour = document.getElementsByClassName("offsetAn4");


   // Remove offsets from elements (to trigger animation)
   function delay1() {
      while (anOne[0]) {
         anOne[0].classList.remove("offsetAn1");
      }
   }

   function delay2() {
      while (anTwo[0]) {
         anTwo[0].classList.remove("offsetAn2");
      }
   }

   function delay3() {
      while (anThree[0]) {
         anThree[0].classList.remove("offsetAn3");
      }
   }

   function delay4() {
      while (anFour[0]) {
         anFour[0].classList.remove("offsetAn4");
      }
   }

   function removeProps() {
     while (anProps[0]) {
        anProps[0].classList.remove('offset-an-props');      }
   }


      //functions called at set times

   // setTimeout(function(){addProps(); }, 50);
   setTimeout(function(){delay1(); }, 100);
   setTimeout(function(){delay2(); }, 200);
   setTimeout(function(){delay3(); }, 300);
   setTimeout(function(){delay4(); }, 400);
   setTimeout(function(){removeProps(); }, 1000);
});



// Text line by line animate

var lineOnes = document.getElementsByClassName("line-1");
var lineTwos = document.getElementsByClassName("line-2");
var lineThrees = document.getElementsByClassName("line-3"); //highlights and about pages
var lineAnimate = document.getElementsByClassName("line-animate");

function lineOneAnimater() {
   for (var i = 0; i < lineOnes.length; i++) {
      lineOnes[i].classList.add("line-animate");
      lineOnes[i].classList.remove("line-1");
   }
}

function lineTwoAnimater() {
   for (var i = 0; i < lineTwos.length; i++) {
      lineTwos[i].classList.add("line-animate");
      lineTwos[i].classList.remove("line-2");
   }
}

function lineThreeAnimater() {
   for (var i = 0; i < lineThrees.length; i++) {
      lineThrees[i].classList.add("line-animate");
      lineThrees[i].classList.remove("line-3");
   }
}

function LineAnimRemover() {
   for (var i = 0; i < lineAnimate.length; i++) {
      lineAnimate[i].classList.remove("line-animate");
   }
}

setTimeout(function(){lineThreeAnimater(); }, 100);
setTimeout(function(){lineOneAnimater(); }, 2000);
setTimeout(function(){lineTwoAnimater(); }, 2100);
setTimeout(function(){LineAnimRemover(); }, 2600);


 //
