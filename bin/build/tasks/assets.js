var _ = require('underscore');

var gulp = require('gulp');


const baseConfig = {
  dest: './dist'
};

function css(opts) {
  opts = opts || {};

  var config = _.defaults(opts, baseConfig);

  return function() {
    return gulp
      .src([ './assets/**/*' ])
      .pipe(gulp.dest(config.dest + '/assets'));
  };
};

module.exports = css;
