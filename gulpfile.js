const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')

gulp.task('css', () => {
  const postcss = require('gulp-postcss')
  return gulp.src('assets/css/main.css')
    .pipe(postcss([
      require('postcss-import'),
      require('postcss-mixins'),
      require('postcss-simple-vars'),
      require('postcss-nested'),
      require('autoprefixer')
    ]))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', () => {
  gulp.watch('assets/css/**/*.css', gulp.series('css'))
});

gulp.task('server', () => {
  const connect = require('gulp-connect')

  connect.server({
    livereload: true,
    port: 8888,
    root: './'
  })
});

gulp.task('default', gulp.series('css', 'watch'));