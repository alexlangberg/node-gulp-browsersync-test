'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

// Static server
gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: "./"
    },
    browser: ['google-chrome'],
    notify: false
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch("*.html", ['bs-reload']);
});