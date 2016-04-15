var gulp = require('gulp');
var es = require('event-stream');
var concat = require('gulp-concat');
var iife = require('gulp-iife');
var babel = require('gulp-babel');
var getOrderedConstructs = require('./js-globs.js');

var templateCache = require('gulp-angular-templatecache');

var config = {
  templateCache: {
    module: 'onboardingTemplates',
    standalone: true
  },
  iife: {
    useStrict: false,
    trimCode: false,
    prependSemicolon: false,
    bindThis: false
  },
  babel: {
    presets: [ 'es2015' ]
  }
};

var components = function() {
  var globs = getOrderedConstructs();

  var componentJs = gulp
        .src(globs)
        .pipe(iife(config.iife))
        .pipe(concat('main.js'))
        .pipe(babel(config.babel));

  var templateJs = gulp
        .src('{views,components,libs}/**/*.html')
        .pipe(templateCache(config.templateCache))
        .pipe(iife(config.iife));

  return es.merge(templateJs, componentJs)
    .pipe(concat('main.js'))
    .pipe(iife(config.iife));
};

module.exports = components;
