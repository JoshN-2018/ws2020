// RUN

const { series } = require('gulp');
const { parallel } = require('gulp');
const { src, dest } = require('gulp');
const gulpPngquant = require('gulp-pngquant');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const { watch } = require('gulp');

function compress(cb) {
   return src('../_images-raw/*.png')
     .pipe(gulpPngquant({
      quality: '65-80'
     }))
     .pipe(dest('resources/images'));

  cb();
}

// exposing the task
exports.compress = compress

// exposing a task called build which calls whatever tasks are placed in the folder

exports.build = series(compress);



// WATCH

function compressChangedPng(cb) {
   return src('../_images-raw/*.png')
      // filtering pipe to 'changed; files
     .pipe(changed('../_images-raw/*.png'))
     .pipe(gulpPngquant({
      quality: '65-80'
     }))
     .pipe(dest('resources/images'));

  cb();
}

function compressChangedSvg(cb) {
   return src('../_images-raw/*.svg')
      // filtering pipe to 'changed; files
     .pipe(changed('../_images-raw/*.svg'))
     .pipe(imagemin([
      imagemin.svgo({
          plugins: [
              {removeViewBox: false},
              {cleanupIDs: false}
          ]
      })
  ]))
     .pipe(dest('resources/images'));

  cb();
}

function compressChangedJpg(cb) {
   return src('../_images-raw/*.jpg')
      // filtering pipe to 'changed; files
     .pipe(changed('../_images-raw/*.jpg'))
     .pipe(imagemin([
          imagemin.mozjpeg({quality: 65, progressive: true}),
      ]))
     .pipe(dest('resources/images'));

  cb();
}

function watchPng() {
  watch('../_images-raw/*.png', compressChangedPng);
};

function watchSvg() {
  watch('../_images-raw/*.svg', compressChangedSvg);
};

function watchJpg() {
  watch('../_images-raw/*.jpg', compressChangedJpg);
};

exports.watchPng = watchPng
exports.watchSvg = watchSvg
exports.watchJpg = watchJpg
exports.watcher = parallel(watchPng, watchSvg, watchJpg);
