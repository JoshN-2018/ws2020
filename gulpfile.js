// set up

var gulp = require("gulp"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    browserSync = require("browser-sync").create();


 var paths = {
     styles: {
         // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
         src: "public/resources/css/*.css",
         // Compiled files will end up in whichever folder it's found in (partials are not compiled)
         dest: "public/resources/css"
     }
 };

 function style() {
     return gulp
         // Use postcss with autoprefixer and compress the compiled file using cssnano
         .pipe(postcss([autoprefixer()]))
         // Add browsersync stream pipe after compilation
         .pipe(browserSync.stream());
 }



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
