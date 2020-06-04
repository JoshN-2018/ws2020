// RUN

const { series } = require('gulp');
const { src, dest } = require('gulp');
const gulpPngquant = require('gulp-pngquant');
const changed = require('gulp-changed');
const { watch } = require('gulp');

function compress(cb) {
   return src('resources/images/*.png')
     .pipe(gulpPngquant({
      quality: '65-80'
     }))
     .pipe(dest('dist/resources/images'));

  cb();
}

// exposing the task
exports.compress = compress

// exposing a task called build which calls whatever tasks are placed in the folder

exports.build = series(compress, watchImages);



// WATCH

function compressChanged(cb) {
   return src('resources/images/*.png')
      // filtering pipe to 'changed; files
     .pipe(changed('docs/resources/images'))
     .pipe(gulpPngquant({
      quality: '65-80'
     }))
     .pipe(dest('docs/resources/images'));

  cb();
}

function watchImages() {
  watch('docs/resources/images', compressChanged);
};

exports.watchImages = watchImages
exports.watcher = series(watchImages);




// old code
  // watch('docs/resources/images').on("change", compress);









//
// const { src, dest } = require('gulp');
// const uglify = require('gulp-uglify');
// const rename = require('gulp-rename');
//
// exports.default = function() {
//   return src('src/*.js')
//     // The gulp-uglify plugin won't update the filename
//     .pipe(uglify())
//     // So use gulp-rename to change the extension
//     .pipe(rename({ extname: '.min.js' }))
//     .pipe(dest('output/'));
// }










































/*

// setup

var gulp = require('gulp');
const changed = require('gulp-changed');
const gulpPngquant = require('gulp-pngquant');

var imgSrc = 'resources/images/*.png';
var imgDest = 'public/resources/images';


// Minify images
gulp.task('images', function() {

  return gulp.src(imgSrc)
      .pipe(gulpPngquant({
       quality: '65-80'
      }))
      .pipe(gulp.dest(imgDest));
});


gulp.task('default', function() {
  gulp.watch(imgSrc, ['images-new']);
});



// compress video (in theory!)

const abraia = require('gulp-abraia')

gulp.task('video', () => {

  return gulp.src('resources/videos/*')
    .pipe(abraia([
      { height: 600, output: '{name}.mp4' }
    ]))
    .pipe(gulp.dest('public/resources/videos'))
})



/*








// note this isn't working but the above is!

/*
// Minify any new images
gulp.task('images-new', function() {

  // Add the newer pipe to pass through newer images only
  return gulp.src(imgSrc)
      .pipe(changed(imgDest))
      .pipe(gulpPngquant({
       quality: '65-80'
      }))
      .pipe(gulp.dest(imgDest));
      console.log("images-new starting")
});



*/
