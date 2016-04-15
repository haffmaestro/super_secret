var gulp = require('gulp');
var livereload = require('gulp-livereload');

var jsDist = require('./tasks/js.js')();
var cssDist = require('./tasks/css.js')();
var indexDist = require('./tasks/index.js');

var orderedGlobs = require('./tasks/helpers/js-globs.js');

var config = {
  dest: './dist'
};

gulp.task('watch', function() {
  jsDist();
  cssDist();
  indexDist();

  gulp.watch('./views/**/*.scss', [ 'css' ]);
  gulp.watch(orderedGlobs(), jsDist);
  gulp.watch('./index.html', indexDist);
});

gulp.task('default', [ 'dist', 'watch' ]);
