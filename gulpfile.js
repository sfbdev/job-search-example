const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

sass.compiler = require('node-sass');

gulp.task('sass', () => gulp.src('./src/assets/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./src/assets/css')));

gulp.task('sass:watch', () => {
  gulp.watch('./src/assets/scss/**/*.scss', gulp.series('sass', 'minify-css'));
});

gulp.task('minify-css', () => gulp.src('./src/assets/css/main.css')
  .pipe(cleanCSS({ compatibility: 'ie8' }))
  .pipe(gulp.dest('./src/assets/css')));
