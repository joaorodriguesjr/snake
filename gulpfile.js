var gulp  = require('gulp');
var babel = require('gulp-babel');
var maps  = require('gulp-sourcemaps');
var watch = require('gulp-watch');

gulp.task('compile:js', function () {
    return gulp.src('./src/*.es6')
        .pipe(maps.init())
        .pipe(babel())
        .pipe(maps.write())
        .pipe(gulp.dest('./src'));
});

gulp.task('watch', function () {
    watch('./src/*.es6', function () {
        gulp.start('compile:js');
    });
});

gulp.task('compile', ['compile:js']);
gulp.task('default', ['compile', 'watch']);
