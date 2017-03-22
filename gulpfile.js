(function ($) {

  'use strict';

  // NOTE: backend mock startup task
  $.gulp.task('backend-start', function (callback) {

    var started = false;

    return $.nodemon({
             script: './sources/backend/main/application.js'
           })
           .on('start', function () {
             if (!started) {
               callback();
               started = true; 
             } 
           });
   });
})({

  gulp: require('gulp'),
  nodemon: require('gulp-nodemon')
});
