

const { series } = require('gulp');
const { parallel } = require('gulp');
const { src, dest, lastRun, watch } = require('gulp');
const gulpPngquant = require('gulp-pngquant');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const { gulp } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

// Prefix
function prefix(cb) {
   return src('resources/css/**/*.css')
      .pipe(autoprefixer({
          cascade: true
      }))
     .pipe(dest('public/resources/css'));

  cb();
}

exports.prefix = prefix

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
   return src('../_images-raw/*.{svg,jpg,jpeg}', { since: lastRun(compressChangedImg) })
     .pipe(imagemin([
      imagemin.mozjpeg({quality: 75, progressive: true}),
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
  watch('../_images-raw/*.{svg,jpg,jpeg}', compressChangedImg);
};

exports.watchPng = watchPng
exports.watchJpg = watchImg
exports.watcher = parallel(watchPng, watchImg);
