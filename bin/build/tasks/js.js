var _ = require('underscore');
var es = require('event-stream');

var gulp = require('gulp');
var gutil = require('gulp-util');
var babel = require('gulp-babel');

var components = require('./helpers/components');

var getConfig = function(opts) {
  const DEFAULT_DEST = './dist';

  opts = _.defaults(opts || {}, {
    dest: DEFAULT_DEST,
    components: true
  });

  return opts;
};


function js(opts) {
  var config = getConfig(opts);

  return function() {
    var componentFiles = components(config);

    gutil.log('Making '+gutil.colors.red('hot')+' Javascript with', config);

    return componentFiles
          .pipe(gulp.dest(config.dest));
  };
}


module.exports = js;
