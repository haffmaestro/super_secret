var gulp = require('gulp');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

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
  gulp.watch(orderedGlobs(), [ 'js' ,'reloadJs']);
  gulp.watch('./index.html', [ 'index','reloadIndex' ]);
  gulp.watch('./assets/**/*', [ 'assets' ]);
});

gulp.task('default', [ 'dist', 'watch' ,'connect']);

gulp.task('connect', function(){
  connect.server({
    root: '.',
    livereload: true,
    port: 9000
  })
});

gulp.task('reloadJs', function(){
  gulp.src('./dist/main.js')
    .pipe(connect.reload());
});

gulp.task('reloadIndex', function(){
  gulp.src('./index.html')
    .pipe(connect.reload());
});