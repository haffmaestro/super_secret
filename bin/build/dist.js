var gulp = require('gulp');

var js = require('./tasks/js.js');
var css = require('./tasks/css.js');
var indexDist = require('./tasks/index.js');
var assets = require('./tasks/assets.js');

const DEST = './dist';

const jsDist = js();
const cssDist = css();
const assetsDist = assets();

gulp.task('js', jsDist);
gulp.task('css', cssDist);
gulp.task('assets', assetsDist);
gulp.task('index', indexDist);

gulp.task('dist', [ 'js', 'css', 'assets', 'index' ]);

module.exports = {
  js: jsDist
};
