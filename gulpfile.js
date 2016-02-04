const gulp = require('gulp')
const browserSync = require('browser-sync').create()

gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(gulp.dest('./tmp'))
})

gulp.task('html-watch', ['html'], browserSync.reload)

gulp.task('server', ['html'], function() {
  browserSync.init({
    server: {
      baseDir: './tmp'
    }
  })
  return gulp.watch('index.html', ['html-watch'])
})

gulp.task('default', ['server'])
