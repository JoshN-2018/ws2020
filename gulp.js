const
  // modules
  gulp = require('gulp'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),

  // folders
src = 'resources/images/*',
build = 'public/resources/images'
;

// image processing
function images() {

  const out = build + 'images/';

  return gulp.src(src + 'images/**/*')
    .pipe(newer(out))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(out));

});

// public images task (calls the function)
exports.images = images;
