// set up
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const mozjpeg = require('imagemin-mozjpeg');

minify function
function imgCompressor() {
   return gulp
   .src("resources/images/*")
   .pipe(imagemin())
   .pipe(gulp.dest("public/resources/images"));
}


gulp.task("imgCompressor", imgCompressor);


gulp.task("watch", () => {
   gulp.watch("public/resources/images", imgCompressor);
});

gulp.task("default", gulp.series("imgCompressor","watch"));



// // minify function
// gulp.task('default', function(done) => {
//   gulp.src('resources/images/*')
//     .pipe(imagemin([
//       pngquant({quality: [0.5, 0.5]}),
//       mozjpeg({quality: 50})
//     ]))
//     .pipe(gulp.dest("public/resources/images"))
// });

// .pipe(plugins.rename({ extname: '.webp' }))
