// Function to collect and render hero animation

var animation = lottie.loadAnimation({
   container: document.getElementById('hero-anim'),
   renderer: 'svg',
   loop: false,
   autoplay: true,
   path: './resources/js/data.json'
})
lottie.setSpeed(1); // Lottie plays at 60fps (animation was set up at 30fps)
