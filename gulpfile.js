'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    browserify = require('gulp-browserify');
 
gulp.task('styles', function () {
  return gulp.src('./src/sass/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
    gulp.src('./src/js/app.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./js'))
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['styles']);
  gulp.watch('./src/js/**/*.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);
