/**
 * Created by nocoolyoyo on 2017/10/16.
 * vue组件配置调度包
 */

import Vue from "vue";

//这里是组件的注册列表，需要手动添加
// const List = [
//     "loading-comm",                 //组件加载中的动画
//     "avatar",                       //头像组件
// ];

//这里是组件的相关配置项目
const Config = {
    PATH: '../..',               //相对加载路径
    USING_LOADING: true     //是否启用组件异步加载时的加载动画
};
//组件已经注册过的列表，防止多次重复注册
let UseList = {};


/**
 * 检查组件是否已注册过
 * @param componentName
 * @return {boolean}
 */
function checkUsing (componentName) {
    return !!UseList[componentName];
}

/**
 * 组件调度注册【注意：动态组件加载是异步，如果是一个列表页面中重复使用的动态组件，请务必使用require先将该包引入再构建界面，此时组件加载将变成同步的】
 * 加载顺序：
 * 1、未指定包名：
 * 1.1、默认从通用组件包加载
 * 1.2、通用组件包加载不到的，从CONST.COMPONENT配置中加载
 * 2、指定包名的：按照指定包名进行加载
 * @param componentName 组件名
 */
export function LoadComponent (componentName, resolve) {
    if(!componentName || checkUsing(componentName, packageName)){
        return;
    }
    Vue.component(componentName, function (resolve) {
        // 这个特殊的 require 语法告诉 webpack
        // 自动将编译后的代码分割成不同的块，
        // 这些块将通过 Ajax 请求自动下载。
        require([`${Config.PATH}${componentName}`], resolve)
    });
}