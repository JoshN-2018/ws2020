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
      console.log("images starting");
});

// note this isn't working but the above is!

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


gulp.task('default', function() {
  gulp.watch(imgSrc, ['images-new']);
});
