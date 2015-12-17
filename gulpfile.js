(function() {
    'use strict';

    let gulp  = require('gulp');
    let babel = require('gulp-babel');
    let maps  = require('gulp-sourcemaps');
    let watch = require('gulp-watch');

    gulp.task('compile:js', function () {
        return gulp.src('./src/*.es6')
            .pipe(maps.init())
            .pipe(babel())
            .pipe(maps.write())
            .pipe(gulp.dest('./src'));
    });

    gulp.task('watch', function () {
        watch('./src/*.es6', () => gulp.start('compile:js'));
    });

    gulp.task('compile', ['compile:js']);
    gulp.task('default', ['compile', 'watch']);

}());
