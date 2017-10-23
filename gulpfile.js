/**
 * Created by nocoolyoyo on 2017/10/12.
 * gulp配置，webpack需要gulp搭配来弥补打包中的不足，（只是我目前webpack挖掘的不够深）
 */

let gulp = require('gulp');
let concat = require('gulp-concat');
let watchPath = './src/page/frame/';

import makeEntry from "./makeEntry"


//目录配置生成
gulp.task('build', function(){
    makeEntry();
});
//文件监听
gulp.task('watch', function(){
    gulp.watch(watchPath, ['build']);
    // Other watchers
});
// // 输出全部文章文件
gulp.task('start', ['build',"watch"]);
