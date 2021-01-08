var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var ts = require("gulp-typescript");
var browserSync = require("browser-sync").create();

var paths = {
    css: {
        src: "./scss/*.scss",
        dest: "./css/"
    },
    ts: {
        src: "./src/*.ts",
        dest: "./js/"
    }
};

function style() {
    return (
        gulp
        .src(paths.css.src).pipe(sass())
        .on("error", sass.logError)
    //     .pipe(postcss([autoprefixer({
    //         browsers: ['last 99 versions'],
    //         cascade: false
    // }), cssnano()]))
        .pipe(gulp.dest(paths.css.dest))
        .pipe(browserSync.stream())
    );
}
function typescript() {
    return (
        gulp
        .src(paths.ts.src).pipe(ts({"noImplicityAny": true}))
        .pipe(gulp.dest(paths.ts.dest))
        .pipe(browserSync.stream())
    );
}

function watch(cb) {
    browserSync.init({
        server: { baseDir: "./"
    }
});
    gulp.watch(paths.css.src, style);
    gulp.watch(paths.ts.src, typescript);
    gulp.watch("*.html").on('change', browserSync.reload);
} 

exports.default = watch;