(function() {
    'use strict';

    require('babel-core/register');

    let gulp       = require('gulp');
    let babel      = require('gulp-babel');
    let concat     = require('gulp-concat');
    let uglify     = require('gulp-uglify');
    let jasmine    = require('gulp-jasmine');
    let browserify = require('gulp-browserify');
    let cssmin     = require('gulp-cssmin');
    let htmlmin    = require('gulp-htmlmin');
    let replace    = require('gulp-html-replace');
    let watch      = require('gulp-watch');

    gulp.task('compile:js', function () {
        return gulp.src('./src/main.js')
            .pipe(browserify({debug: true, transform: ['babelify']}))
            .pipe(concat('index.js'))
            .pipe(gulp.dest('./run'));
    });

    gulp.task('build:js', function () {
        return gulp.src('./run/index.js').pipe(uglify()).pipe(gulp.dest('./build'));
    });

    gulp.task('build:css', function () {
        return gulp.src('./run/index.css').pipe(cssmin()).pipe(gulp.dest('./build'));
    });

    gulp.task('build:html', function () {
        return gulp.src('./run/index.html')
            .pipe(replace({js: 'index.js', css: 'index.css'}))
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest('./build'));
    });

    gulp.task('test', function () {
        return gulp.src('./spec/*.js').pipe(jasmine());
    });

    gulp.task('watch', function () {
        watch('./src/*.js', () => gulp.start('compile:js'));
    });

    gulp.task('compile', ['compile:js']);
    gulp.task('build'  , ['compile', 'build:js', 'build:css', 'build:html']);
    gulp.task('default', ['compile', 'watch']);

}());
