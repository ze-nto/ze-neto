const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();


function buildStyles() {
    return gulp.src('./assets/style/scss/**/*.scss')
      .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./assets/style/css'))
      .pipe(browserSync.stream());
  };

  function browser(){
    bSync.init({
      server:{
        baseDir: './'
      }
    })
  }

 
function watch(){
  gulp.watch('./assets/style/scss/**/*.scss', buildStyles)
}
  

gulp.task('compile', buildStyles);
gulp.task('watch', watch);
gulp.task('sync', browser);
gulp.task('default', gulp.parallel('watch', 'sync'));