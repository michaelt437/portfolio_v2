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
	}
}

gulp.task('default', 
    gulp.series(
        html,
        styles,
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
function serve(){
    browserSync.init({
        server: root.dist
    })
}
function watch(){
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.styles.src, styles)
}