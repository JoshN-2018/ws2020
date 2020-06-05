// RUN

const { series } = require('gulp');
const { parallel } = require('gulp');
const { src, dest, lastRun, watch } = require('gulp');
const gulpPngquant = require('gulp-pngquant');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const { gulp } = require('gulp');



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



    // src: 'src/images/**/*.{jpg,jpeg,png}',

// WATCH


function compressChangedPng(cb) {
   return src('../_images-raw/*.png', { since: lastRun(compressChangedPng) })
      .pipe(gulpPngquant({
      quality: '65-80'
     }))
     .pipe(dest('resources/images'));

  cb();
}

function compressChangedImg(cb) {
   return src('../_images-raw/*.{svg,jpeg}', { since: lastRun(compressChangedImg) })
     .pipe(imagemin([
      imagemin.mozjpeg({quality: 65, progressive: true}),
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


function watchPng() {
  watch('../_images-raw/*.png', compressChangedPng);
};

function watchImg() {
  watch('../_images-raw/*.{svg,jpeg}', compressChangedImg);
};

exports.watchPng = watchPng
exports.watchJpg = watchImg
exports.watcher = parallel(watchPng, watchImg);
