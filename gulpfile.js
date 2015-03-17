//see https://github.com/edravis/gulp-haml-sass/blob/master/gulpfile.js
var gulp =			require('gulp'),
	autoprefixer =	require('gulp-autoprefixer');
	haml =			require('gulp-haml'),
	minifycss =		require('gulp-minify-css');
	sass =			require('gulp-sass'),

gulp.task('haml', function() {
	gulp.src('haml/*.haml')
		.pipe(haml())
		.pipe(gulp.dest('./'));
});

gulp.task('sass', function() {
	return sass('sass/style.scss', { sourcemap: false })
		.on('error', function (err) { console.log("ERROR: " + err.message); })
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('css'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(gulp.dest('css'))
		.pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('watch', function() {
	gulp.watch('haml/*.haml', ['pages']);
	gulp.watch('sass/style.scss', ['scss']);
});

gulp.task('default', ['watch'], function() {
	gulp.start('haml', 'sass');
});
