// set up

const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const mozjpeg = require('imagemin-mozjpeg');


function imgCompressor() {
   return gulp
   .src("resources/images/*")
   .pipe(imagemin({optimizationLevel: 1}))
   .pipe(gulp.dest("public/resources/images"));
}


gulp.task("imgCompressor", imgCompressor);


gulp.task("watch", () => {
   gulp.watch("public/resources/images", imgCompressor);
});

gulp.task("default", gulp.series("imgCompressor","watch"));






// .pipe(plugins.rename({ extname: '.webp' }))
