'use strict';


var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean');
const sass = require('gulp-sass')(require('sass'));


gulp.task('clean-css', function () {
  return gulp.src('./css/*.*', {read: false})
    .pipe(clean({force: true}));
});

gulp.task('sass', gulp.parallel('clean-css', function(){
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'));
}));

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', gulp.series(['sass']));
});

gulp.task('default', gulp.series(['watch']));
  

