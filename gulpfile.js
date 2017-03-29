const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('js', function() {
  gulp.src(['./public/js/app.js', './public/js/**/*.js'])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./public/dist'));
});

gulp.task('css', function() {
  gulp.src([ 
    './public/reset.css', 
    './public/styles/*.css',
    './public/styles/*.scss'
    ])
  .pipe(sass())
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./public/dist'));  
});

gulp.task('default', ['js', 'css', 'watch']);

gulp.task('watch', function(){
  return gulp.watch(['./public/index.html', './public/js/**/*.js', './public/styles/**/*.css', './public/styles/**/*.scss'], ['js', 'css']);
})
