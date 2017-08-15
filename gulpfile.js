var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('src/tsconfig.json');
var tsProjectTest = ts.createProject('test/tsconfig.json');
var livereload = require('gulp-livereload');
var server = require('gulp-server-livereload');
const jasmine = require('gulp-jasmine');
const del = require('del');
 
gulp.task('transpile', () => {
    var tsResult = gulp.src('src/**/*.ts')
        .pipe(tsProject())
        return tsResult.js.pipe(gulp.dest('js')).pipe(livereload());
});

gulp.task('livereload', ['transpile'], function() {
  livereload.listen();
  gulp.watch(['src/*','index.html'], ['transpile']);
});

// this is the entry point for webserver with livereload
gulp.task('webserver', ['livereload'], function() {
  gulp.src('.')
    .pipe(server({
        livereload : true,
        directoryListing: false,
        open: false,
        port: 4000,
        fallback: 'index.html'
    }));
});

gulp.task('default',['webserver']);

// TESTS

// static

// transpile all tests
gulp.task('transpile-tests', function () {
    var tsResult = gulp.src(['test/specs/**/*.ts','src/**/*.ts'],{base: '.'})
        .pipe(tsProjectTest())
        return tsResult.js.pipe(gulp.dest('test/bin'));
});

// run the tests
gulp.task('run-all-test', () =>
    gulp.src('test/bin/test/specs/*')
        // gulp-jasmine works on filepaths so you can't have any plugins before it 
        .pipe(jasmine())
);

// cleanup test
gulp.task('cleanup-test', function () {
  return del(['test/bin/**/*','test/bin']);
});

gulp.task('tests', () => runSequential(['transpile-tests', 'run-all-test', 'cleanup-test']));

gulp.task('tests-live', ['tests'], function() {
  gulp.watch(['src/*','test/specs/*'], ['tests']);
});



/// helper functions

  function runSequential( tasks ) {
    if( !tasks || tasks.length <= 0 ) return;

    const task = tasks[0];
    gulp.start( task, () => {
        console.log( `${task} finished` );
        runSequential( tasks.slice(1) );
    } );
  }