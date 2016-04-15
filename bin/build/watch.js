var gulp = require('gulp');
var livereload = require('gulp-livereload');

var js = require('./tasks/js.js');
var css = require('./tasks/css.js');
var indexDist = require('./tasks/index.js');
var assets = require('./tasks/assets.js');

const jsDist = js();
const cssDist = css();
const assetsDist = assets();

var orderedGlobs = require('./tasks/helpers/js-globs.js');

var config = {
  dest: './dist'
};

gulp.task('watch', [ 'dist' ], function() {
  gulp.watch('./{global-sass,components,views}/**/*.scss', [ 'css' ]);
  gulp.watch(orderedGlobs(), [ 'js' ]);
  gulp.watch('./index.html', [ 'index' ]);
  gulp.watch('./assets/**/*', [ 'assets' ]);
});

gulp.task('default', [ 'dist', 'watch' ]);
