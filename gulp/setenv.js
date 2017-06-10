'use strict';

var path = require('path');
var gulp = require('gulp');
var argv = require('yargs').argv;
var rename = require("gulp-rename");

var ngConstant = require('gulp-ng-constant');

var enviroment = argv.env || 'dev';

gulp.task('set-env', function() {
  console.log('Configuring for environment : ' + enviroment);
  var config = gulp.src('environments/' + enviroment + '/config.json');
  config.pipe(ngConstant({name: 'SoftOne.config', wrap: false}))
    .pipe(rename('env.js'))
    .pipe(gulp.dest('src/app'));
});