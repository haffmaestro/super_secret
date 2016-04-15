var gulp = require('gulp');
var reqDir = require('require-dir');

var tasks = reqDir('./bin', { recurse: true });
