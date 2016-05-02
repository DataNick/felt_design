var gulp = require('gulp'),
    rubysass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    pngquant = require('imagemin-pngquant'),
    del = require('del');


gulp.task('hello', function(){
  console.log("Hello There");
});



gulp.task('sass', function(){
  return gulp.src('./source/stylesheets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('./source/stylesheets'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// gulp.task('sass', function(){
//   gulp.src('./source/stylesheets/**/*.scss')
//     .pipe(sourcemaps.init())
//     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//     .pipe(autoprefixer('last 2 version'))
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('./source/stylesheets'));
// })

gulp.task('watch', function(){
  livereload.listen();

  gulp.watch('./source/stylesheets/**/*.scss', ['sass']);
  gulp.watch( './source/stylesheets/style.css', function(files){
    livereload.changed(files)
  });
});