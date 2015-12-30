'use strict'

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream'),
    concat = require('gulp-concat');

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './build/**/*.html',
        js: './build/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        module: './build/module.js',
        dist: './public'
    }
};

gulp.task('connect', function() {
    connect.server({
        root: ['public'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('html', function(){
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('css', function(){
    gulp.src(config.paths.css)
        .pipe(concat('style.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(connect.reload());
});

gulp.task('module', function() {
    browserify(config.paths.module)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('module.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('open', ['connect'], function(){
   gulp.src('public/index.html')
       .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.css, ['css']);
    gulp.watch(config.paths.module, ['module']);
});

gulp.task('default', ['html', 'css', 'module', 'open', 'watch']);