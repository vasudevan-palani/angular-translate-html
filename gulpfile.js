gulp = require('gulp');
browserSync = require('browser-sync');

gulp.task('dist',()=>{
  gulp.src('./src/angular-translate-html.js')
    .pipe(require('gulp-uglifyjs')('angular-translate-html.min.js',{outSourceMap:true}))
    .pipe(gulp.dest('./dist'));

});

gulp.task('build',()=>{
  gulp.src('./dist/angular-translate-html.min.js')
    .pipe(gulp.dest('./test/'));
});


gulp.task('serve', ['build'], function() {

    browserSync.init({
        server: "./test",
        port:8000,
        open : false
    });
});
