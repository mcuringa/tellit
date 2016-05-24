var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var webserver = require('gulp-webserver');
var riot = require('gulp-riot');
var inject = require('gulp-inject');

// Starts webserver
gulp.task('webserver', function() {
	return gulp.src('dev')
		.pipe(webserver({
			livereload: true,
			open: true
		}));
});

// Triggers the page reload via livereload
gulp.task('reload', function() {
	return gulp.pipe(livereload());
});

// Watches for changes
gulp.task('watch', ['webserver'], function() {
	livereload.listen();

	// Watches changes to index.html, triggers reload
	gulp.watch('dev/index.html', function() {
		livereload.reload();
	});
});
