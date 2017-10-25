<!--主界面-->
<script>


    import EventBus from '../utils/eventBus'
    import Avatar from "../component/avatar/avatar.vue"
    import MainMenu from "./main-menu.vue"
    import Home from "./frame/home.vue"
    import {initFrames, openFrame,closeFrame, closeOtherFrames}  from "./frame/frame"

    //检测
    function checkMenuUpdate() {

    }


    //节点渲染后（mounted）的初始化
    function initAfterRender() {
        //菜单初始化
        $('.ui.accordion').accordion({exclusive:false});
        //下弹框初始化
        $('.ui.dropdown').dropdown();

        initFrames();
    }

    //页面输出对象
    export default  {
        components: {MainMenu, Home, Avatar},
        data () {
            return {
                imgSrc: "http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=0&spn=0&di=113392779830&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=594559231%2C2167829292&os=2394225117%2C7942915&simid=3436308227%2C304878115&adpicid=0&lpn=0&ln=1993&fr=&fmq=1508314826003_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120727%2F201995-120HG1030762.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bpw5rtv_z%26e3Bv54AzdH3Fejvp56AzdH3Fda8da0AzdH3Fdanll9_z%26e3Bip4s&gsm=&rpstart=0&rpnum=0"
            }
        },
        methods: {
            //打开页面，缺省方法，包含on和add判断调用
            openFrame (url){
                openFrame(url);
            },
            //关闭其他页面
            closeOtherFrames(){
                closeOtherFrames()
            },
            //定位到当前页面
            location(){

            }
        },
        mounted () {
            initAfterRender();
        }
    };
</script>

<template>
    <div class="layout">
        <nav class="layout-menu">
            <div class="information-card">
                <avatar class="round size-md"
                        img-src="http://images2015.cnblogs.com/blog/1103730/201703/1103730-20170301141110548-1837926342.png"></avatar>
                <h2>啊实打实的</h2>
            </div>
            <!--菜单有于可能单独配置，故作抽离-->
            <main-menu></main-menu>
        </nav>

        <div class="layout-main">
            <header class="top-tools">
                <div class="ui icon input">
                    <input type="text" placeholder="输入想要查询的内容">
                    <i class="circular search link icon"></i>
                </div>
            </header>
            <nav class="frame-tabs ui">
                <!--<div class="tabs-left-tools">-->
                    <!--<div class="prev-tab"><i class="angle double left icon"></i></div>-->
                <!--</div>-->
                <div class="tab-list-container swiper-container">
                    <ul class="tabs-list swiper-wrapper">
                        <li class="swiper-slide active" data-id="home">
                            <i class="home icon"></i>
                        </li>
                    </ul>
                </div>
                <div class="tabs-right-tools">
                    <!--<div class="next-tab"><i class="angle double right icon"></i></div>-->
                    <div class="ui icon dropdown">
                        <i class="clone icon"></i>
                        <div class="menu">
                            <div class="item" @click="location">定位当前页</div>
                            <div class="item" @click="closeOtherFrames">关闭其他页</div>
                        </div>
                    </div>
                    <div><i class="sign out icon"></i></div>
                </div>
            </nav>
            <main class="frame-pages">
                    <div id="home" class="page active">
                        <home></home>
                    </div>
            </main>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../assets/scss/methods";
    $home-width-menu:  200px;
    $home-height-top-tools:  50px;
    $home-height-frame-tabs:  40px;
    $home-font-size-frame-tabs: 14px;
    $home-border-height-slim: 1px;
    $home-border-height-bold: 2px;
    $home-border-frame-tabs: $home-border-height-bold solid $theme-color-main;
    $home-border-tabs-list-li: 0.5px solid $theme-color-hr;
    $home-transition-tabs:  all 0.3s ease;
    $home-tab-max-size:  200px;
    $home-width-i: 25px;
    .layout {
        height:100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        .layout-menu {
            height: inherit;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            will-change: scroll-position;
            contain: size style layout;
            width: $home-width-menu;
            background-color: $theme-color-main;
            padding: 0 20px;
            border-radius: 0;
            .information-card {
                margin: 20px 0;
                color: $theme-color-text;
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                h2 {
                    margin-top: 10px;
                }
            }
        }
        .layout-main {

            height: 100%;
            overflow:hidden;
            flex:1;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            contain: layout size style;
            //顶部工具条
            .top-tools {
                padding: 5px;
                height: $home-height-top-tools;
                min-height: $home-height-top-tools;
                display: flex;
                align-items: center;
                justify-content: space-between;

            }

            $height-scrollerBar: $home-height-frame-tabs - $home-border-height-bold - $home-border-height-slim;

            .frame-tabs {
                user-select: none;
                background-color: $theme-color-text;
                height: $home-height-frame-tabs;
                min-height: $home-height-frame-tabs;
                box-sizing: border-box;
                border-top:$home-border-tabs-list-li;
                border-bottom: $home-border-frame-tabs;
                display: flex;
                align-items: stretch;
                &>div, &>ul{
                    user-select: none;
                    height: $height-scrollerBar;
                }
                .tabs-home,.tabs-left-tools>div,.tabs-right-tools>div {
                    box-sizing: border-box;
                    cursor: pointer;
                    width: $home-height-frame-tabs;
                    font-size: large;
                     line-height: $home-height-frame-tabs - $home-border-height-bold - $home-border-height-slim;
                    text-align: center;
                    background-color: $theme-color-bg;
                    i {
                        margin-right: 0;
                    }
                }
                .tabs-left-tools {
                    &>div {
                        display: inline-block;
                        border-right: $home-border-tabs-list-li;
                    }
                }
                .tabs-right-tools {
                    &>div {
                        border-left: $home-border-tabs-list-li;
                        display: inline-block;
                    }
                }
                .tab-list-container {
                    overflow: hidden;
                    flex: 1;
                    width: 940px;
                    position: relative;
                }

                .tabs-list {
                    /*overflow:hidden;*/
                    /*overflow-y: hidden;*/
                    /*overflow-x: auto;*/
                    /*-webkit-overflow-scrolling: touch;*/
                    /*will-change: scroll-position;*/
                    /*contain: size style layout;*/
                    height: inherit;
                    li[data-id="home"] {
                        border-left:  $home-border-tabs-list-li;
                        width:40px;
                        max-width:40px;
                    }
                    li {
                        cursor: pointer;
                        border-right:  $home-border-tabs-list-li;
                        height:inherit;
                        max-width: $home-tab-max-size;
                        padding: 0 8px;
                        /*padding :0;*/
                        /*margin: 0;*/
                        line-height: $height-scrollerBar;
                        transition:$home-transition-tabs;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: nowrap;
                        label {

                            flex:1;
                            cursor: pointer;
                            /*font-weight: bold;*/
                            font-size:  $home-font-size-frame-tabs;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                            width: $home-tab-max-size - $home-width-i - 10px;
                            max-width: $home-tab-max-size - $home-width-i - 10px;
                        };
                        i {

                            width: $home-width-i;
                            margin-right: 0;
                            &:hover {
                                color: $theme-color-danger;
                            }
                        }
                        &.active {
                            color: white;
                            background-color: $theme-color-main;
                        }
                        &:hover {
                            opacity: 0.8;
                        }
                    }
                }
            }
            .frame-pages {
                /*height: 100%;*/
                flex: 1;
                .page {
                    display: none;
                    right: 0;
                    bottom: 0;
                    z-index: 1;
                    overflow-x: hidden;
                    overflow-y: auto;
                    -webkit-overflow-scrolling: touch;
                    will-change: scroll-position;
                    contain: size style layout;
                    top: 0;
                    left: 0;
                    position: relative;
                    height:100%;
                    &.active {
                        display: block;
                    }
                    .page-iframe {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }

</style>

