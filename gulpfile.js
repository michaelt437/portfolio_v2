var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

var root = {
	src: "./app/src/",
	dist: "./app/dist/"
}
var paths = {
	html: {
		src: root.src + "/**/*.html",
		dist: root.dist
	},
	styles: {
		src: root.src + "/sass/**/*.scss",
		dist: root.dist + "css/"
	},
    scripts: {
        src: root.src + "/js/**/*.js",
        dist: root.dist + 'js/'
    },
    images: {
        src: root.src + "/img/**/*",
        dist: root.dist + "img/"
    },
}

gulp.task('default', 
    gulp.series(
        html,
        styles,
        scripts,
        images,
        gulp.parallel(serve, watch)
    )
);

function html(){
    return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dist))
    .pipe(browserSync.stream())
}
function styles(){
    return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(browserSync.stream())
}
function images(){
    return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dist))
    .pipe(browserSync.stream())
}
function scripts(){
    return gulp.src(paths.scripts.src)
    .pipe(gulp.dest(paths.scripts.dist))
    .pipe(browserSync.stream())
}
function serve(){
    browserSync.init({
        server: root.dist,
        browser: ['firefox']
    })
}
function watch(){
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
}