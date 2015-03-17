//see https://github.com/edravis/gulp-haml-sass/blob/master/gulpfile.js
'use strict'

var gulp =			require('gulp'),
	autoprefixer =	require('gulp-autoprefixer'),
	haml =			require('gulp-haml'),
	postcss =		require('gulp-postcss'),
	sass =			require('gulp-sass'),
	sourcemaps =	require('gulp-sourcemaps'),
	stylus =		require('gulp-stylus');

gulp.task('haml', function() {
	gulp.src('./haml/**/*.haml')
		.pipe(haml())//{ compiler: 'creationix' }))
		.pipe(gulp.dest('./html'));
});

gulp.task('sass', function() {
	gulp.src('./sass/style.scss')
		.pipe(sass())//{ style: 'compressed' }))
		.pipe(sourcemaps.init())
			.pipe(postcss([ autoprefixer({ browsers: ['last 2 version'] }) ]))
		.pipe(sourcemaps.write('./css/'))
		.pipe(gulp.dest('./css/'));
});

gulp.task('stylus', function() {
	gulp.src('./stylus/style.styl')
		.pipe(stylus())
		.pipe(sourcemaps.init())
			.pipe(postcss([ autoprefixer({ browsers: ['last 2 version'] }) ]))
		.pipe(sourcemaps.write('./css/'))
		.pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
	gulp.watch('./sass/style.scss',		['sass']);
	gulp.watch('./stylus/style.styl',	['stylus']);
	gulp.watch('./haml/**/*.haml',		['haml']);
});

gulp.task('default', ['sass', 'haml'])
