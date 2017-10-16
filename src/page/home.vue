<!--主界面-->
<script>
//    import Avatar from "../component/avatar.vue";
    import PageList from "./PageList";
    import Sup from '../supply'     //页面辅助方法类
    /*
     *   frames用于记录当前窗口中打开的页面，后期可根据需求写入localStorage做断电保存
     *   frame只记录当前url, url组织方式与普通url一样
     */
    let frames = {

    };


    //tab标签页事件管理
    let TabsEventHandler = {
        _functions: {
            //激活tab
            active: () => {

            },
            //关闭
            add: () =>{

            },
            //删除页面
            del: () => {

            }
        },
        //点击事件管理
        ClickHandler: (e) => {
            console.log(e);
            console.log(this);
            //this._functions.active();
        }

    };

    //Page页面事件管理
    let PagesEventHandler = {
        //激活页面
        on: () => {

        },
        //新增页面
        add: () =>{

        },
        //删除页面
        del: () => {

        }
    };

    //模块页面事件管理
    let EventsHander = {
        openPage:(obj)=>{
            Sup.openFrame(obj);
        },
        closePage: (obj)=> {

        }
    };


    export default {
//        components: {Avatar},
        data () {
            return {
            }
        },
        methods: {
            //tab标签页点击事件管理
            tabClickHandler: (e)=>{
                TabsEventHandler.ClickHandler(e)
            },
            //打开页面，缺省方法，包含on和add判断调用
            openPage: (obj)=>{
                console.log(obj)
                EventsHander.openPage(obj)
            },
            closePage: (obj)=>{
                EventsHander.closePage(obj)
            }
        },
        mounted: function () {
            console.log(this)
            //下拉框初始化
            $('.ui.dropdown').dropdown();
        }
    }
</script>

<template>
    <div class="layout">
        <nav class="layout-menu ui inverted vertical menu">
            <a class="item" @click="openPage('READ/tab/1?id=1&item=2')">菜单1<i class="angle right icon"></i></a>
            <a class="item" @click="openPage({name: 'tabDetail/12', params: {}})">菜单2<i class="angle right icon"></i></a>
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
                    <input type="text" placeholder="Search...">
                    <i class="circular search link icon"></i>
                </div>
            </header>
            <main class="frame-container">
                <nav class="frame-tabs ui">
                    <div class="tabs-home">
                        <i class="home icon"></i>
                    </div>
                    <!--@click="tabClickHandler(event)"-->
                    <ul class="tabs-list" >
                        <li class="item active">
                            <label @click="openPage()">标签页</label>
                            <i class="remove circle icon"></i>
                        </li>
                        <li class="item">
                            <label @click="openPage()">标签页</label>
                            <i class="remove circle icon"></i>
                        </li>
                        <li class="item">
                            <label>标签页</label>
                            <i class="remove circle icon"></i>
                        </li>
                        <li class="item">
                            <label>标签页</label>
                            <i class="remove circle icon"></i>
                        </li>
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
                    <div class="page active">

                    </div>
                    <div class="page">

                    </div>
                    <div class="page">

                    </div>
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
                        opacity: 0.9;
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
                                margin-bottom: 3px;
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

