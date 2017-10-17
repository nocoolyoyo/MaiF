const tab = resolve => require.ensure([],() => resolve(require('./tab.vue')), 'tab');
const tabDetail = resolve => require.ensure([],() => resolve(require('./tabDetail.vue')), 'tabDetail');


const FRAME = {
  "tab": {
    "title": "标签页面"
  },
  "tabDetail": {
    "title": "标签详情页面"
  }
};

/*-----------------------------------------------编译分割线---------------------------------------------------*/

/*
* created by nocoolyoyo on 2017/10/16
*
*
* FRAME静态页面注册列表
*
* 页面的url组织方式遵循restful设计，动词名词化依次简化为C(CREATE),R(READ),U(UPDATE),D(DELETE)，动词统一加在请求头
* 页面可以通过page的KEY值方式打开，但此时需要闯入对应的参数
* 只有当存在restful动词形式时候该页面才不唯一
*
* 所有类型的页面，同一个页面的下面name应该改成同一个
* name：helper.PAGE.XXX的具体注入名称
* title：页面名称，用于标签页头显示
* FRAME的键值名对应的就是该FRAME所对应的组件名字
*
* */
import Vue from "vue";
//页面预先注册，用于webpack识别时候打包成当个文件，引用时候通过异步请求加载后载入

//这里是组件的相关配置项目
const Config = {
    PATH: './frame/',               //相对加载路径
    USING_LOADING: true          //是否启用组件异步加载时的加载动画
};
//组件已经注册过的列表，防止多次重复注册
let UseList = {};

/**
 * 检查组件是否已注册过
 * @param frameName
 * @return {boolean}
 */

function checkUsing (frameName) {
    return !!UseList[frameName];
}

/**
 * 组件调度注册【注意：动态组件加载是异步，如果是一个列表页面中重复使用的动态组件，请务必使用require先将该包引入再构建界面，此时组件加载将变成同步的】
 * 加载顺序：
 * 1、未指定包名：
 * 1.1、默认从通用组件包加载
 * 1.2、通用组件包加载不到的，从CONST.COMPONENT配置中加载
 * 2、指定包名的：按照指定包名进行加载
 * @param frameName 组件名
 */
export function LoadFrame (frameName) {
    if(!frameName || checkUsing(frameName)){
        return;
    }
    Vue.component(frameName, eval(frameName));
}



