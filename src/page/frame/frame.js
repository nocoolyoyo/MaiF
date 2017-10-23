const form = resolve => require.ensure([],() => resolve(require('./form.vue')), 'form');
const home = resolve => require.ensure([],() => resolve(require('./home.vue')), 'home');
const tab = resolve => require.ensure([],() => resolve(require('./tab.vue')), 'tab');
const tabDetail = resolve => require.ensure([],() => resolve(require('./tabDetail.vue')), 'tabDetail');
const UI = resolve => require.ensure([],() => resolve(require('./UI.vue')), 'UI');
const FRAME = {
  "form": {
    "title": "表单元素展示"
  },
  "home": {
    "title": "主页"
  },
  "tab": {
    "title": "标签页面"
  },
  "tabDetail": {
    "title": "标签详情页面"
  },
  "UI": {
    "title": "表单元素展示"
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
import Vue from "vue"
import {getUrlParams, isUrl} from '../../utils/assist'     //页面辅助方法类
//页面预先注册，用于webpack识别时候打包成当个文件，引用时候通过异步请求加载后载入

//这里是组件的相关配置项目
const Config = {
    PATH: './frame/',               //相对加载路径
    USING_LOADING: true          //是否启用组件异步加载时的加载动画
};

/*
 *   openedFrames用于记录当前窗口中打开的页面，后期可根据需求写入localStorage做断电保存
 *   已经注册的组件vue对象
 */
let VmList = {};
/*
 *   openedFrames用于记录当前窗口中打开的页面，后期可根据需求写入localStorage做断电保存
 *   openedFrames只记录当前url, url组织方式与普通url一样
 */
let openedFrames = ["home"];

/*
 *   记录当前激活状态的id,默认是主页
 */
let activeFrameId = "home";
/**
 * 检查组件是否已注册过
 * @param frameName
 * @return {boolean}
 */

// function checkUsing (frameName) {
//     return !!UseList[frameName];
// }

/**
 * 根据页面名字获取页面数据
 * @param frameName 组件名
 */
const GetTemplate = function  (frameName) {
    // if(!frameName || checkUsing(frameName)){
    //     return;
    // }
    return eval(frameName);
};



//tab标签页事件管理
/**
 * tab标签管理（标签依赖于frame窗口，故作集成管理，如果之后标签也附件功能较多，可考虑单独分离）
 */
const Tabs = {
    active (frameId)  {
        let $tabList = document.querySelector('.tabs-list');
        if($tabList.querySelector('.active'))
            $tabList.querySelector('.active').classList.remove("active");
        $tabList.querySelector(`[data-id="${frameId}"]`).classList.add("active");
        activeFrameId = frameId;
    },
    //新增标签
    create (frameId,frameTitle) {
        let $tabList = document.querySelector('.tabs-list');
        // let title = FRAME[frameName].title;
        let $li = document.createElement("li");
        $li.dataset.id = frameId;
        $li.innerHTML = ` <label>${frameTitle}</label>
                              <i class="remove circle icon"></i>`;
        $tabList.appendChild($li);
    },
    //删除标签
    delete (frameId)  {
        console.log(frameId);
        let $tabList = document.querySelector('.tabs-list');
        if($tabList.querySelector(`[data-id="${frameId}"]`))
            $tabList.removeChild($tabList.querySelector(`[data-id="${frameId}"]`));
    }
};

/**
 * 工具类-判断窗口是否存在
 * @param frameId{string} 窗口的id
 */
const _frameExist = function(frameId){
    for(let i = 0; i < openedFrames.length; i++){

        if(frameId === openedFrames[i]) return true;
    }

    return false;
};


/**
 * 激活窗口 && 冻结窗口
 * @param frameId{string} 需要激活窗口的注册id
 */
const Active = function (frameId) {
    if(activeFrameId === frameId) return;

    let $frameList = document.querySelector('.frame-pages');
    //获取需要激活的窗口对象
    let $activeFrame = $frameList.querySelector('#'+frameId);
    $activeFrame.classList.add("active");
    if($frameList.querySelector("#"+activeFrameId))
        $frameList.querySelector("#"+activeFrameId).classList.remove("active");

    //激活也绑定Tabs操作
    Tabs.active(frameId)

};

/**
 * 新建窗口,新建的时候默认跳转
 * @param type{number}  需要打开的窗口类型，0表示外链的iframe，1表示内联唯一窗口，2表示内联多窗口类型
 * @param url{string|{name,id}}   需要打开的窗口的url,同时也是窗口的注册id，详情页面则是一个对象，对象包含name是窗口的frame模板,id则是详情页的单独id
 * @param params{object}  需要传递进窗口的参数
 */
const Create = function (type = 1, url, params=null) {
    let $frameList = document.querySelector('.frame-pages'),
        pageTemplate = document.createElement('div'),
        frameId = "", frameName="";
    pageTemplate.classList.add("page");

    if(type === 0){
        frameId = params;
        frameName = url;
        pageTemplate.id = frameId;
        pageTemplate.innerHTML = `<iframe class="page-iframe" frameborder="no" border="0" marginwidth="0" marginheight="0" src="${url}"></iframe>`;
        openedFrames.push(frameId);
        //插入标签模板
        Tabs.create(frameId,frameName);
        //插入页面模板
        $frameList.appendChild(pageTemplate);
    }else{
        if(type === 1){
            frameId = url;
            pageTemplate.id = frameId;
            openedFrames.push(frameId);
            frameName = url;
        }else{
            frameId = url.name + url.id;
            pageTemplate.id = frameId;
            openedFrames.push(frameId);
            frameName = url.name;
        }

        let RandName = "page" + new Date().getMilliseconds();
        pageTemplate.innerHTML = `<${RandName}></${RandName}>`;
        //插入标签模板
        Tabs.create(frameId,FRAME[frameName].title);
        //插入页面模板
        $frameList.appendChild(pageTemplate);

        //添加vue实例
        VmList[frameId] = new Vue({
            el: RandName,
            render: h => h(GetTemplate(frameName))
        });
    }

    //手动激活
    Active(frameId);
};

/**
 * 打开新窗口
 * @param obj{string|object}  需要打开的窗口对象，可以是url，也可以是窗口组织对象
 */
//Todo:这里写的易读性差，之后来改
export function openFrame (obj = false) {
    if(obj === false)return;
    //打开方式一：如果传入参数为字符串，则是默认用url方式打开页面
    if(typeof obj === "string"){
        let frameId = "";

        if(isUrl(obj)) {
            console.log(obj)
            //iframeId为时间戳组成
            frameId = 'iframe' + new Date().getTime();
            //打开iframe外链,
            if(_frameExist(frameId)){
                Active(obj);
            }else{
                Create(0,obj,frameId);
            }
        }else{
            let params = getUrlParams(obj);
            obj = obj.split("?");

            if(/\//.test(obj[0])){
                //打开可重复页
                obj = obj[0].split("/");
                frameId = obj[0] + obj[1];

                if(_frameExist(frameId)){
                    Active(frameId);
                }else{
                    Create(2, {
                        name:obj[0],
                        id: obj[1],
                        params:params
                    })
                }
            }else{
                //打开唯一页
                frameId = obj[0];
                if(_frameExist(frameId)){
                    Active(frameId);
                }else{
                    Create(1,obj[0],params)
                }

            }
        }
        return;
    }

    //打开方式二：如果传入参数为对象，则默认是以name , id方式打开一个新页面
    if(typeof obj === "object"){
        //如果name中带/，则表明是详情页，取出详情页D的ID
        if(/\//.test(obj)){

        }else{

        }
    }
}

/**
 * 关闭窗口（注销）
 * @param frameId(string) 需要关闭窗口的注册id
 */
export function closeFrame(frameId) {
    let $frameList = document.querySelector('.frame-pages'),
        needActiveId = "",
        index = openedFrames.indexOf(frameId);

    //记录下当前窗口的上一个id
    if(openedFrames.length === (index+1)){
        needActiveId = openedFrames[index-1];
        //不是最后一个
    }else{
        needActiveId = openedFrames[index+1];
    }

    //移除标签模板
    Tabs.delete(frameId);
    //移除vue实例

    // console.log(VmList[frameId].$listeners)
    // console.log(VmList[frameId].$off)
    // VmList[frameId].$off("frm-form_test");
    if(VmList[frameId]){


        VmList[frameId].$destroy();
        VmList[frameId] = null;
    }

    //移除模板
    $frameList.removeChild($frameList.querySelector("#"+frameId));
    openedFrames.remove(frameId);
    Active(needActiveId);

}

/**
 * 关闭其他窗口（注销）
 */

export function closeOtherFrames() {
    let $frameList = document.querySelector('.frame-pages');
    for(let i = 1; i < openedFrames.length; i++){

        if(openedFrames[i] !== activeFrameId){
            //移除标签模板
            Tabs.delete(openedFrames[i]);
            //移除vue实例
            if(VmList[openedFrames[i]]){
                VmList[openedFrames[i]].$destroy();
                VmList[openedFrames[i]] = null;
            }
            //移除模板
            if($frameList.querySelector("#"+openedFrames[i]))
                $frameList.removeChild($frameList.querySelector("#"+openedFrames[i]));

        }
    }
    if(activeFrameId === "home")
        openedFrames= ["home"];
    openedFrames= ["home",activeFrameId ];
    Active(activeFrameId);
}



