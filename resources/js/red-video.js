var c = document.getElementById('red-video')

var v = document.createElement("video");
v.src = '../resources/video/red-loop_s.mp4'
v.controls = false;
v.autoplay = true;
v.play();

c.appendChild (v);




















/*

// var source = document.createElement('source');
var breakOne = 720

function videoLoader() {

   if(window.innerWidth <= breakOne) {
       // video.src = '../resources/video/red-loop_s.mp4'
       // video.setAttribute('src', '../resources/video/red-loop_s.mp4');
       // video.appendChild(source);
        // video.setAttribute("src", "nameOfVideo");

       video.play();
       console.log("small video");
       console.log(window.innerWidth);

      }
   else {
       //It is a big screen or desktop
       // video.appendChild(source);
       console.log("big video");
   }
}

videoLoader();

window.addEventListener('resize', videoLoader);

*/
// var video = document.getElementById('video');
// var source = document.createElement('source');
//
// source.setAttribute('src', 'http://www.tools4movies.com/trailers/1012/Kill%20Bill%20Vol.3.mp4');
//
// video.appendChild(source);
