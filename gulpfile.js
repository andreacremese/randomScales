var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('src/tsconfig.json');
var livereload = require('gulp-livereload');
var server = require('gulp-server-livereload');
 
gulp.task('transpile', function () {
    var tsResult = gulp.src('src/**/*.ts')
        .pipe(tsProject())
        return tsResult.js.pipe(gulp.dest('js'));
});

gulp.task('watch', ['transpile'], function() {
    gulp.watch('src/*', ['transpile']);
});

gulp.task('livereload', ['watch'], function() {
  livereload.listen();
  gulp.watch('src/*', ['watch']);
});

// this is the entry point for webserver with livereload
gulp.task('webserver', ['livereload'], function() {
  gulp.src('.')
    .pipe(server({
        livereload : true,
        directoryListing: false,
        open: true,
        port: 4000,
        fallback: 'index.html'
    }));
});

gulp.task('default',['webserver']);

// testing

// fluent

// static