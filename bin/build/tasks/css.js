var _ = require('underscore');
var es = require('event-stream');

var gulp = require('gulp');
var sass = require('gulp-sass');
var order = require("gulp-order");
var concat = require('gulp-concat');

const baseConfig = {
  dest: './dist'
};

function css(opts) {
  opts = opts || {};

  var config = _.defaults(opts, baseConfig);

  return function() {
    return es.merge(gulp.src('./app.scss'))
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(config.dest));
  };
};

module.exports = css;
