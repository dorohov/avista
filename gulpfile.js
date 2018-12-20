'use strict'
// Browser Sync
var gulp = require('gulp'),
    sass = require('gulp-sass'),                    // Компилятор SASS в CSS
    autoprefixer = require('gulp-autoprefixer'),    // Добавление префиксов CSS
    minifyCSS = require('gulp-csso'),               // Минификация CSS
    watch = require('gulp-watch'),                  // Наблюдение за файлами
    svgSprite = require('gulp-svg-sprite'),         // Создание карты спрайтов svg
    imagemin = require('gulp-imagemin'),            // Сжатие изображений
    fileInclude = require('gulp-file-include'),     // Include HTML файлов с передачей параметров
    browserSync = require('browser-sync').create(), // Автообновление браузера
    plumber = require('gulp-plumber'),              // 
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');

    var assets = {
        sass:       'src/scss/*.scss',
        svg:        'src/svg/*.svg',
        images:     'src/images/*',
        html:       'src/html/*.html',
        js:         'src/js/*.js'
    }

/*
*   1. Компиляция sass
*   2. Минификация css
*   3. Добавление префиксов
*/
function css() {
    return gulp.src(assets.sass)
            .pipe(plumber())
            .pipe(sass())
            .pipe(minifyCSS())
            .pipe(autoprefixer({browsers: ['> 2% in RU', 'last 4 version', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']}))
            .pipe(gulp.dest('dist/css'))
            .on('end', browserSync.reload)
}

/*
*   1. Создание карты спрайтов
*/
function svgMap() {
    return gulp.src(assets.svg)
            .pipe(svgSprite({mode: {stack: {dest: '', sprite: 'sprites.svg', example: true}}}))
            .pipe(gulp.dest('img/svg'))
}

/*
*   1. Сжатие изображений
*/
function imageMinify() {
    return gulp.src(assets.images)
                .pipe(imagemin())
                .pipe(gulp.dest('img'))
                .on('end', browserSync.reload)
}

/*
*   1. Рендер HTML
*/
function html() {
    return gulp.src(assets.html)
                .pipe(fileInclude())
                .pipe(gulp.dest('./'))
                .on('end', browserSync.reload)
}

function js() {
    return gulp.src(assets.js)
                .pipe(sourcemaps.init())
                .pipe(concat('main.js'))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest('dist/js'))
                .on('end', browserSync.reload)
}

/*
*   1. browserSync
*/
function browser_sync() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    browserSync.watch('./', browserSync.reload)
}

gulp.task('css', css)
gulp.task('svgMap', svgMap)
gulp.task('imageMinify', imageMinify)
gulp.task('html', html)
gulp.task('js', js)
gulp.task('browser_sync', browser_sync)

gulp.task('build', function() {
    gulp.watch('src/html/**/*.html', gulp.series('html'))
    gulp.watch(assets.sass, gulp.series('css'))
    gulp.watch(assets.js, gulp.series('js'))
    gulp.watch(assets.svg, gulp.series('svgMap'))
    gulp.watch(assets.images, gulp.series('imageMinify'))
})

gulp.task('default', gulp.series(
    gulp.parallel('html', 'css', 'js', 'svgMap', 'imageMinify'),
    gulp.parallel('build', 'browser_sync')
))