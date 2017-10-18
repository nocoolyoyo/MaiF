<!--主界面-->
<script>
    import Vue from "vue"
    import Avatar from "../component/avatar.vue"
    import { LoadComponent } from "../component/_component"
    import { LoadFrame } from "./frame/maif"
    import { isUrl } from '../utils/assist'     //页面辅助方法类



    /*
     *   frames用于记录当前窗口中打开的页面，后期可根据需求写入localStorage做断电保存
     *   frame只记录当前url, url组织方式与普通url一样
     */
    //记录已经打开窗口列表对象，记录的是frame的url
    let frames = [];


    //tab标签页事件管理
    const TabsEvH = {
        on ()  {

        },
        //新增标签
        add (url,title) {
            let $tabList = document.querySelector('.tabs-list');
            let $activeItem = $tabList.querySelector('.active');
            let template = `<li class="item active"  data-url="${url}">
                                            <label>${title}</label>
                                            <i class="remove circle icon"></i>
                                      </li>`;
            $tabList.appendChild(template);
            $activeItem.classList.remove('active');

        },
        //删除标签
        del ()  {

        }
    };

    //Frames页面事件管理
    const FramesEvH = {
        //激活页面
        on ()  {

        },
        //新增页面
        add (type = 1, url, params=null, uniId) {
            //如果type为0，则打开的是页面组件；如果为1，则根据url用iframe打开

            let $frameList = document.querySelector('.frame-pages');
            let $activeItem = $frameList.querySelector('.active');
            let frameName = url;

            new Vue(LoadFrame(frameName));
//            Vue.component('avatar', Avatar);
//                let paramsTemp = "";
//                for(let k in params){
//                    console.log(k);
//                    paramsTemp += k +"=" + params[k];
//                }
//                let template = document.createElement('div');
//                    template.innerHTML = `<avatar></avatar>`;
//                console.log($frameList);
//
//                    template.classList.add("page","active");
//
//                $frameList.appendChild(template);
               // $activeItem.classList.remove('active');
//            Vue.component(eval(frameName), function (resolve) {
//                console.log(resolve)
//                // 这个特殊的 require 语法告诉 webpack
//                // 自动将编译后的代码分割成不同的块，
//                // 这些块将通过 Ajax 请求自动下载。
//
//                // require([`${frameName}`], function () {
//                //     console.log(`${Config.PATH}${frameName}`)
//                //     console.log(1)
//                // })
//            });

            console.log(LoadFrame(frameName))
//            LoadFrame(url);

//        , function () {
//                let paramsTemp = "";
//                for(let k in params){
//                    console.log(k)
//                    paramsTemp += k +"=" + params[k];
//                }
//                let page = `<${frameName} ${paramsTemp}></${frameName}>`;
//                let template = `<div class="page active">${page}</div>`;
//                $frameList.appendChild(template);
//                $activeItem.classList.remove('active');
//            }
        },
        //删除页面
        del () {

        }
    };

    //打开窗口方法
    function openFrame (obj = false) {

        //打开方式一：如果传入参数为字符串，则是默认用url方式打开页面
        if(typeof obj === "string"){
            if(isUrl(obj)) {
                //打开iframe外链,
                FramesEvH.add(0, obj)
            }else{
                obj = obj.split("?");
                if(/\//.test(obj[0])){
                    obj = obj[0].split("/");
                    //打开可重复页
                    FramesEvH.add(0, obj[0], obj[1])
                }else{
                    //打开唯一页
                    FramesEvH.add(0, obj[0]);
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
    //关闭窗口
    function  closeFrame(frameId) {

    }

    //激活窗口
    function  activeFrame(frameId){

    }

    //标签页点击事件管理
    function tabClickHandler (e)  {
        if(e.target.nodeName === "LABEL"){

            return;
        }
        if(e.target.nodeName === "I"){

        }
    }

    //节点渲染后（mounted）的初始化
    function initAfterRender() {
        //下拉菜单初始化
        $('.ui.dropdown').dropdown();
    }

    //页面输出对象
    export default  {
        components: {Avatar},
        data () {
            return {
            }
        },
        methods: {
            //tab标签页点击事件管理
            tabClickHandler (e){
                tabClickHandler(e)
            },
            //打开页面，缺省方法，包含on和add判断调用
            openFrame (obj){
                openFrame(obj);
                console.log(this)
            },
            //关闭页面
            closeFrame(frameId){
                closeFrame(frameId)
            }
        },
        mounted () {
            initAfterRender();
        }
    };
</script>

<template>
    <div class="layout">
        <nav class="layout-menu ui inverted vertical menu">
            <a class="item" @click="openFrame('tab')">菜单1<i class="angle right icon"></i></a>
            <a class="item" @click="openFrame({name: 'tab-detail/12'})">菜单2<i class="angle right icon"></i></a>
            <a class="item">
                菜单3<i class="angle down icon"></i>
            </a>
            <nav class="ui inverted vertical menu">
                <a class="item">菜单1<i class="angle right icon"></i></a>
                <a class="item">菜单2<i class="angle right icon"></i></a>
                <a class="item">
                    菜单3<i class="angle down icon"></i>
                    <a class="item">菜单2</a>
                </a>
            </nav>
        </nav>
            <!--<avatar class="center">-->

            <!--</avatar>-->
        <div class="layout-main">
            <header class="top-tools">
                <div class="ui icon input">
                    <input type="text" placeholder="输入想要查询的内容">
                    <i class="circular search link icon"></i>
                </div>
            </header>
            <main class="frame-container">
                <nav class="frame-tabs ui">
                    <div class="tabs-home">
                        <i class="home icon"></i>
                    </div>

                    <ul class="tabs-list" @click="tabClickHandler($event)">
                        <!--<li class="item active"  data-url="">-->
                            <!--<label>标签页</label>-->
                            <!--<i class="remove circle icon"></i>-->
                        <!--</li>-->
                        <!--<li class="item">-->
                            <!--<label>标签页</label>-->
                            <!--<i class="remove circle icon"></i>-->
                        <!--</li>-->
                        <!--<li class="item">-->
                            <!--<label>标签页</label>-->
                            <!--<i class="remove circle icon"></i>-->
                        <!--</li>-->
                        <!--<li class="item">-->
                            <!--<label>标签页</label>-->
                            <!--<i class="remove circle icon"></i>-->
                        <!--</li>-->
                    </ul>
                    <div class="tabs-tools">
                        <div class="ui icon dropdown">
                            <i class="clone icon"></i>
                            <div class="menu">
                                <div class="item">定位当前页</div>
                                <div class="item">关闭当前页</div>
                                <div class="item">关闭其他页</div>
                            </div>
                        </div>
                        <div><i class="sign out icon"></i></div>
                    </div>
                </nav>
                <div class="frame-pages">
                    <!--<div class="page active">-->

                    <!--</div>-->
                    <!--<div class="page">-->

                    <!--</div>-->
                    <!--<div class="page">-->

                    <!--</div>-->
                </div>
            </main>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../assets/scss/methods";
    $home-width-menu:  200px;
    $home-height-top-tools:  50px;
    $home-height-frame-tabs:  50px;
    $home-border-height-slim: 1px;
    $home-border-height-bold: 2px;
    $home-border-frame-tabs: $home-border-height-bold solid $c-smt-night;
    $home-border-tabs-list-li: $home-border-height-slim solid $c-huiyuan;
    $home-transition-tabs:  all 0.3s ease;
    $home-tab-max-size:  200px;
    .layout {
        height:100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        .layout-menu {
            height: inherit;
            width: $home-width-menu;
            border-radius: 0;
        }
        .layout-main {
            flex:1;
            //顶部工具条
            .top-tools {
                padding: 5px;
                height: $home-height-top-tools;
                display: flex;
                align-items: center;
                justify-content: space-between;

            }
            //frame框架样式
            .frame-container {
                height:100%;
                display: flex;
                flex-direction: column;
                .frame-tabs {
                    user-select: none;
                    background-color: white;
                    height: $home-height-frame-tabs;
                    box-sizing: border-box;
                    border-top:$home-border-tabs-list-li;
                    border-bottom: $home-border-frame-tabs;
                    display: flex;
                    align-items: stretch;
                    &>div, &>ul{
                        user-select: none;
                        height: $home-height-frame-tabs - $home-border-height-bold - $home-border-height-slim;
                    }
                    .tabs-home,.tabs-tools>div {
                        box-sizing: border-box;
                        cursor: pointer;
                        width: 50px;
                        font-size: large;
                        line-height: $home-height-frame-tabs - $home-border-height-bold - $home-border-height-slim;
                        text-align: center;
                        background-color: $c-silkgray;
                        i {
                            margin-right: 0;
                        }
                    }
                    .tabs-list {
                        flex: 1;
                        li {
                            cursor: pointer;
                            border-right:  $home-border-tabs-list-li;
                            height:inherit;
                            display: inline-flex;
                            align-items: center;
                            justify-content: space-between;
                            line-height: $home-height-frame-tabs - $home-border-height-bold - $home-border-height-slim;
                            padding: 0 8px;
                            transition:$home-transition-tabs;
                            label {
                                cursor: pointer;
                                font-weight: bold;
                                overflow: hidden;
                                text-overflow:ellipsis;
                                white-space: nowrap;
                                max-width: $home-tab-max-size;
                            };
                            i {
                                $home-width-i: 25px;
                                width: $home-width-i;
                                margin-right: 0;
                                &:hover {
                                    color: $c-danger;
                                }
                            }
                            &.active {
                                color: white;
                                background-color: $c-smt-night;
                            }
                            &:hover {
                                opacity: 0.5;
                            }
                        }
                    }
                    .tabs-tools {
                        &>div {
                            display: inline-block;
                            border-left: $home-border-tabs-list-li;
                            width: 50px;
                        }
                    }
                }
                .frame-pages {
                    flex: 1;
                    .page {
                        display: none;
                        height:100%;
                        &.active {
                            display: block;
                        }
                    }
                }
            }
        }
    }

</style>

