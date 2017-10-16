/**
 * Created by nocoolyoyo on 2017/10/12.
 * gulp配置，webpack需要gulp搭配来弥补打包中的不足，（只是我目前webpack挖掘的不够深）
 */

let gulp = require('gulp');
let concat = require('gulp-concat');
//gulp 输出文件的
let _outputPath = (dirname)=> {
    let path = "./src/gulp/";
    if(typeof dirname === 'undefined')
        return path;
    return path + dirname;
};
let _vendorPath = (dirname)=> {
    let path = "./src/module/vendor/";
    if(typeof dirname === 'undefined')
        return path;
    return path + dirname;
};

//输出最终编译版本stylesheet文件

gulp.task('vendor', function() {
    gulp.src([
        _vendorPath('jquery/jquery.min.js'),
        _vendorPath('jquery/semanticUI/semantic.min.css'),
        _vendorPath('jquery/semanticUI/semantic.min.js')])
        .pipe(
            concat('vendor.js'))
        .pipe(
            gulp.dest(_outputPath()))
});
//文件监听
// gulp.task('watch', function(){
//     gulp.watch('static/scss/**/*.scss', ['build']);
//     // Other watchers
// });
// // 输出全部文章文件
gulp.task('start', ['vendor']);
