'use strict'

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open');

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './build/**/*.html',
        dist: './public'
    }
};

gulp.task('connect', function() {
    connect.server({
        root: ['public'],
        port: config.port,
        base: config.devBaseUrl,
        liveReload: true
    });
});

gulp.task('html', function(){
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('open', ['connect'], function(){
   gulp.src('public/index.html')
       .pipe(open({url: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('default', ['html', 'open']);