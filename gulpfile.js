var gulp = require('gulp');
var sass = require('gulp-sass');

//html
gulp.task("copy-html",async()=>{
    gulp.src('*.html')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\YSL'));
});
//img
gulp.task('copy-images',async()=>{
    gulp.src('img/*.{jpg,png,tmp,gif}')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\YSL\\img'));
});
//js
gulp.task('copy-js',async()=>{
    gulp.src('js/*.js')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\YSL\\js'));
});
//css
gulp.task('copy-css',async()=>{
    gulp.src('css/*.css')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\YSL\\css'));
});
 //php
gulp.task('copy-php',async()=>{
    gulp.src('php/*.php')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\YSL\\php'));
});
//sass
gulp.task('copy-scss', async()=>{
    return gulp.src('scss/*.scss')
     .pipe(sass())
     .pipe(gulp.dest('D:\\phpStudy\\WWW\\YSL\\css'));
 });
gulp.task("watchall",async()=>{
    //监视所有文件是否有变化，如果有变化，就执行任务：copy
    gulp.watch("*.html",gulp.series("copy-html"));
    gulp.watch('img/*.{jpg,png,tmp,gif}',gulp.series("copy-images"));
    gulp.watch('js/*.js',gulp.series("copy-js"));
    gulp.watch('css/*.css',gulp.series("copy-css"));
    gulp.watch('php/*.php',gulp.series("copy-php"));
    gulp.watch('scss/*.scss',gulp.series("copy-scss"));
});
