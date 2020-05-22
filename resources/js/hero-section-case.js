var heroCaseFill = document.getElementById("hero-section");

function heroCaseFiller() {
   if(screenBase > 1){
      heroCaseFill.classList.add("hang-from-top");
      console.log(screenBase);
   }
   else {
      heroCaseFill.classList.remove("hang-from-top");
   }
}


window.addEventListener('resize', heroCaseFiller);

heroCaseFiller();
