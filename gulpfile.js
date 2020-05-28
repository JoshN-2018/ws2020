// set up
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const gulpPngquant = require('gulp-pngquant');

// image function
function imgCompressor() {
   return gulp
   .src("resources/images/*.png")
   .pipe(gulpPngquant({
    quality: '65-80'
   }))

   .pipe(gulp.dest("public/resources/images"));
}

// function call
gulp.task("imgCompressor", imgCompressor);

//watch function
gulp.task("watch", () => {
   gulp.watch("public/resources/images", imgCompressor);
});

gulp.task("default", gulp.series("imgCompressor","watch"));
