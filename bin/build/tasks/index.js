var gulp = require('gulp');

module.exports = function() {
  return gulp.src('./index.html').pipe(gulp.dest('dist/'));
};
