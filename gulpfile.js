// Plugins

const { series } = require('gulp');
const { parallel } = require('gulp');
const { src, dest, lastRun, watch } = require('gulp');
const gulpPngquant = require('gulp-pngquant');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const { gulp } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
// const htmlmin = require('gulp-htmlmin'); breaks everything
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;



// Clean & Prefix
function prefix(cb) {
   return src('resources/css/**/*.css') // will search through all sub folders
      .pipe(autoprefixer({ cascade: true }))
     .pipe(dest('public/resources/css'));

  cb();
}

function minCSS(cb) {
  return src('resources/css/**/*.css')
   .pipe(cleanCSS({compatibility: 'ie8'}))
   .pipe(dest('public/resources/css'));
  cb();
}

function minJS(cb) {
  return src('resources/js/**/*.js')
   .pipe(uglify())
   .pipe(dest('public/resources/js'));
  cb();
}

exports.prefix = prefix
exports.minCSS = minCSS
exports.minJS = minJS
exports.tidy = series(prefix, minCSS, minJS);



// WATCH & Compress
function compressChangedPng(cb) {
   return src('../_images-raw/*.png', { since: lastRun(compressChangedPng) })
      .pipe(gulpPngquant({
      quality: '65-80'
     }))
     .pipe(dest('resources/images'));

  cb();
}

function compressChangedImg(cb) {
   return src('../_images-raw/*.{svg,jpg,jpeg,gif}', { since: lastRun(compressChangedImg) })
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
  watch('../_images-raw/*.{svg,jpg,jpeg,gif}', compressChangedImg);
};

exports.watchPng = watchPng
exports.watchJpg = watchImg
exports.watcher = parallel(watchPng, watchImg);
