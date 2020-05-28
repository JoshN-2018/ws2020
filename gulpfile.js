// set up
// const gulp = require('gulp');
// const imagemin = require('gulp-imagemin');
//
// exports.default = () => (
//     gulp.src('resources/images/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('public/resources/images'))
// );


// set up
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const mozjpeg = require('imagemin-mozjpeg');

// minify function
function imgCompressor() {
   return gulp
   .src("resources/images/*")
   .pipe(imagemin())
   .pipe(gulp.dest("public/resources/images"));
}

// function call
gulp.task("imgCompressor", imgCompressor);

//watch function
gulp.task("watch", () => {
   gulp.watch("public/resources/images", imgCompressor);
});

gulp.task("default", gulp.series("imgCompressor","watch"));


// custom code
/*
.pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
]))
*/


// var gulp = require("gulp"),
//     postcss = require("gulp-postcss"),
//     autoprefixer = require("autoprefixer"),
//     browserSync = require("browser-sync").create();
//
//
//  var paths = {
//      styles: {
//          // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
//          src: "public/resources/css/*.css",
//          // Compiled files will end up in whichever folder it's found in (partials are not compiled)
//          dest: "public/resources/css"
//      }
//  };
//
//  function style() {
//      return gulp
//          // Use postcss with autoprefixer and compress the compiled file using cssnano
//          .pipe(postcss([autoprefixer()]))
//          // Add browsersync stream pipe after compilation
//          .pipe(browserSync.stream());
//  }



// function imgCompressor() {
//    return gulp
//    .src("resources/images/*")
//    .pipe(imagemin({optimizationLevel: 1}))
//    .pipe(gulp.dest("public/resources/images"));
// }
//
//
// gulp.task("imgCompressor", imgCompressor);
//
//
// gulp.task("watch", () => {
//    gulp.watch("public/resources/images", imgCompressor);
// });
//
// gulp.task("default", gulp.series("imgCompressor","watch"));






// .pipe(plugins.rename({ extname: '.webp' }))
