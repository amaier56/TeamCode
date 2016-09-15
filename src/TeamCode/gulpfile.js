/// <binding AfterBuild='clean, default, lib, elm-init, elm-bundle, less' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');
var elm = require('gulp-elm');
var less = require('gulp-less');
var path = require('path');

var paths = {
    scripts: ['scripts/**/*.js', 'scripts/**/*.ts', 'scripts/**/*.map'],
    libs: ['node_modules/materialize-css/dist/js/materialize.min.js'],
           /*'node_modules/angular2/bundles/angular2-polyfills.js',
           'node_modules/systemjs/dist/system.src.js',
           'node_modules/rxjs/bundles/Rx.js'],*/
    csslibs: ['node_modules/materialize-css/dist/css/materialize.min.css'],
    fontlibs: ['node_modules/materialize-css/dist/fonts/**/*']
};

gulp.task('elm-init', elm.init);

gulp.task('elm-bundle', ['elm-init'], function () {
    return gulp.src('elm/*.elm')
      .pipe(elm.bundle('bundle.js'))
      .pipe(gulp.dest('scripts/'));
});

gulp.task('lib', function () {
    gulp.src(paths.libs).pipe(gulp.dest('wwwroot/scripts/lib'))
    gulp.src(paths.csslibs).pipe(gulp.dest('wwwroot/css/lib'))
    gulp.src(paths.fontlibs).pipe(gulp.dest('wwwroot/css/fonts'))
});

gulp.task('less', function () {
    return gulp.src('less/**/*.less')
      .pipe(less({
          paths: [path.join(__dirname, 'less', 'includes')]
      }))
      .pipe(gulp.dest('css'));
});

gulp.task('clean', function () {
    del(['wwwroot/css/**/*']);
    return del(['wwwroot/scripts/**/*']);
});

gulp.task('default', function () {
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts'))
    gulp.src('css/**/*.css').pipe(gulp.dest('wwwroot/css'))
});