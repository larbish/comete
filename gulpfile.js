var streamqueue = require('streamqueue');
var eventStream = require('event-stream');
var preprocess = require('gulp-preprocess');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var ngtemplates = require('gulp-angular-templatecache');
var rimraf = require('gulp-rimraf');
var livereload = require('gulp-livereload');

var components = 'bower_components';
var app = 'app';
var dist = 'dist';

var paths = {
	scripts: {
		libs: [
			components + '/angular/angular.js',
			components + '/angular-ui-router/release/angular-ui-router.js'
		],
		src: [
			app + '/**/*-module.js',
			app + '/app-module.js',
			app + '/**/*.js',
		]
	},
	partials: [
		app + '/**/*.html',
		'!' + app + '/index.html'
	],
	css: [
		components + '/bootstrap/dist/css/bootstrap.css',
		app + '.css',
		app + '/**/*.css'
	],
	images: app + '/img/*/*.{png,jpg,svg,gif,ico}',
	misc: [{
		src: [
			app + '/index.html'
		],
		dest: dist + '/',
		replace: true
	}]
};

function handleError(err) {
	console.warn(err.message);
	this.emit('end');
}

gulp.task('scripts', [], function () {
	var stream = streamqueue({
		objectMode: true
	});

  stream.queue(
		gulp.src(paths.scripts.libs)
			// .pipe(uglify())
	);

	stream.queue(
		gulp.src(paths.scripts.src)
			// .pipe(preprocess())
			// .pipe(concat('src.js'))
			// .pipe(uglify())
	);

	stream.queue(
		gulp.src(paths.partials)
			.pipe(htmlmin({
				collapseWhitespace: true,
				removeComments: true
			}).on('error', handleError))
			.pipe(ngtemplates({
				module: 'app'
			}))
	);

	return stream.done()
		.pipe(concat('app-concat.js'))
		.pipe(gulp.dest(dist + '/js'))
		.pipe(livereload());
});

gulp.task('styles', [], function () {
	var stream = streamqueue({
		objectMode: true
	});

	stream.queue(
		gulp.src(paths.css)
			.pipe(concat('styles.css'))
	);

	// stream.queue(
	// 	gulp.src(paths.sass.src)
	// 		.pipe(concat('styles.scss'))
	// 		.pipe(sass({
	// 			loadPath: components + '/bootstrap-sass/assets/stylesheets/'
	// 		}).on('error', env !== 'development' ? handleError : sass.logError))
	// );

	stream.on('error', handleError);

	return stream.done()
		// .pipe(concat('app-' + hashedAppVersion + '.css'))
		// .pipe(gulpif(env !== 'development', cleanCss({compatibility: 'ie8'})))
		.pipe(gulp.dest(dist + '/css'))
		.pipe(livereload());
});

gulp.task('images', [], function () {
	return gulp.src(paths.images)
		// .pipe(imagemin())
		.pipe(gulp.dest(dist + '/img'))
		.pipe(livereload());
});

gulp.task('misc', [], function () {
	return eventStream.merge.apply(null, paths.misc.map(function (item) {
		return gulp.src(item.src)
			.pipe(gulp.dest(item.dest));
	}));
});

gulp.task('clean', [], function () {
	return gulp.src(dist, {
		read: false
	}).pipe(rimraf({
		force: true
	}));
});

gulp.task('watch', [], function () {
	livereload.listen();
	[
		gulp.watch([paths.scripts.src, paths.partials], ['scripts']),
		gulp.watch([paths.css], ['styles']),
		gulp.watch(paths.images, ['images']),
		gulp.watch(paths.misc.map(function (item) {
			return item.src;
		}), ['misc'])
	].forEach(function (watch) {
		watch.on('change', function (event) {
			console.log('File %s was %s, running tasks...', event.path, event.type);
		});
	});
});

gulp.task('default', [
	'scripts',
	'styles',
	'misc',
	'images'
]);
