<!--主界面-->
<script>
    import EventBus from '../module/custom/EventBus'
    import Avatar from "../component/avatar.vue"
    import {openFrame,closeFrame, closeOtherFrames}  from "./frame/frame"


    //标签页点击事件管理
    function tabClickHandler (e)  {
        let frameId = (e.target.nodeName === "LI")?
                        e.target.dataset.id:
                        e.target.parentNode.dataset.id;
        if(e.target.classList.contains("remove")){
            closeFrame(frameId);
        }else{
            openFrame(frameId);
        }
    }

    //节点渲染后（mounted）的初始化
    function initAfterRender() {
        console.log( $)
        console.log( $('.ui.dropdown'))
//        //下拉菜单初始化
//        $('.ui.dropdown').eq(0).dropdown();
        //菜单初始化
        $('.ui.accordion').accordion({exclusive:false});

    }

    //页面输出对象
    export default  {
        components: {Avatar},
        data () {
            return {
                imgSrc: "http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=0&spn=0&di=113392779830&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=594559231%2C2167829292&os=2394225117%2C7942915&simid=3436308227%2C304878115&adpicid=0&lpn=0&ln=1993&fr=&fmq=1508314826003_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120727%2F201995-120HG1030762.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bpw5rtv_z%26e3Bv54AzdH3Fejvp56AzdH3Fda8da0AzdH3Fdanll9_z%26e3Bip4s&gsm=&rpstart=0&rpnum=0"
            }
        },
        methods: {
            //tab标签页点击事件管理
            tabClickHandler (e){
                tabClickHandler(e)
            },
            //打开页面，缺省方法，包含on和add判断调用
            openFrame (url){
                openFrame(url);
            },
            //关闭页面
            closeFrame(frameId){
                closeFrame(frameId)
            },
            //关闭其他页面
            closeOtherFrames(){
                closeOtherFrames()
            },
            //定位到当前页面
            location(){

            },
            triggerTestEvent(){
                EventBus.emit('frm-form_test', {params:12332});
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
            <!--<a class="item" @click="openFrame('tab')">菜单1<i class="angle right icon"></i></a>-->
            <!--<a class="item" @click="openFrame('tabDetail/12')">菜单2<i class="angle right icon"></i></a>-->
            <!--<a class="item" @click="openFrame('tabDetail/12')">菜单2<i class="angle right icon"></i></a>-->
            <!--<a class="item">-->
                <!--菜单3<i class="angle down icon"></i>-->
            <!--</a>-->
            <!--<nav class="ui inverted vertical menu">-->
                <!--<a class="item">菜单1<i class="angle right icon"></i></a>-->
                <!--<a class="item">菜单2<i class="angle right icon"></i></a>-->
                <!--<a class="item">-->
                    <!--菜单3<i class="angle down icon"></i>-->
                    <!--<a class="item">菜单2</a>-->
                <!--</a>-->
            <!--</nav>-->

            <div class="information-card">
                <avatar class="round size-md"></avatar>
                <h2>啊实打实的</h2>
            </div>
            <div class="ui vertical following fluid accordion text menu inverted">
                <div class="item active">
                    <a class="title active"><i class="dropdown icon"></i> <b>大标题</b></a>
                    <div class="content menu active">
                        <a class="item active" @click="openFrame('form')">表单</a>
                        <a class="item" @click="openFrame('tabDetail/1')">分隔</a>
                        <a class="item" @click="openFrame('tabDetail/12')">分隔</a>
                        <a class="item" @click="openFrame('tabDetail/13')">分隔</a>
                    </div>
                </div>
                <div class="item">
                    <a class="title active"><i class="dropdown icon"></i><b>表单</b></a>
                    <div class="content menu active">
                        <a class="item" @click="openFrame('tabDetail/143')">分隔</a>
                        <a class="item" @click="openFrame('tabDetail/1453')">分隔</a>
                        <a class="item" @click="openFrame('tabDetail/14353')">分隔</a>
                    </div>
                </div>
                <div class="item">
                    <a class="title active"><i class="dropdown icon"></i> <b>States</b></a>
                    <div class="content menu active">
                        <a class="item" @click="openFrame('tabDetail/12143')">分隔</a>
                        <a class="item" @click="openFrame('tabDetail/1412353')">分隔</a>
                        <a class="item" @click="openFrame('tabDetail/14123353')">分隔</a>
                    </div>
                </div>
                <div class="item">
                    <a class="title active"><i class="dropdown icon"></i> <b>Variations</b></a>
                    <div class="content menu active">
                        <a class="item" @click="openFrame('tabDetail/14412333')">分隔</a>
                        <a class="item" @click="openFrame('tabDetail/145212343')">分隔</a>
                        <a class="item" @click="openFrame('http://www.baidu.com')">分隔</a>
                    </div>
                </div>
            </div>
        </nav>



        <div class="layout-main">
            <header class="top-tools">
                <div class="ui icon input">
                    <input type="text" placeholder="输入想要查询的内容">
                    <i class="circular search link icon"></i>
                </div>
            </header>
            <main class="frame-container">
                <nav class="frame-tabs ui">
                    <div class="tabs-left-tools">
                        <div><i class="angle double left icon"></i></div>
                    </div>
                    <div class="tab-list-container">
                        <ul class="tabs-list" @click="tabClickHandler($event)">
                            <li class="active"  data-id="homePage">
                                <i class="home icon"></i>
                            </li>
                        </ul>
                    </div>

                    <div class="tabs-right-tools">
                        <div><i class="angle double right icon"></i></div>
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
                <div class="frame-pages">
                    <div id="homePage" class="page active">
                        <div class="frame">
                            <div class="ui card">
                                <div class="content">
                                    <div class="header">Project Timeline</div>
                                    <button class="ui facebook button" @click="triggerTestEvent"><i class="facebook icon"></i> 事件傳播 </button>
                                </div>
                                <div class="content">
                                    <h4 class="ui sub header">活动</h4>
                                    <div class="ui small feed">
                                        <div class="event">
                                            <div class="content">
                                                <form class="ui form">
                                                    <div class="field">
                                                        <label>First Name</label>
                                                        <input type="text" name="first-name" placeholder="First Name">
                                                    </div>
                                                    <div class="field">
                                                        <label>Last Name</label>
                                                        <input type="text" name="last-name" placeholder="Last Name">
                                                    </div>
                                                    <div class="field">
                                                        <div class="ui checkbox">
                                                            <input type="checkbox" tabindex="0" class="hidden">
                                                            <label>我同意本条款和条件</label>
                                                        </div>
                                                    </div>
                                                    <button class="ui button" type="submit">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="event">
                                            <div class="content">
                                                <div class="summary"><a>Stevie Feliciano</a> was added as an <a>Administrator</a> </div>
                                            </div>
                                        </div>
                                        <div class="event">
                                            <div class="content">
                                                <div class="summary"><a>Helen Troy</a> added two pictures </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="extra content">
                                    <button class="ui button">Join Project</button>
                                </div>
                            </div>
                            <div class="ui card">
                                <div class="content">
                                    <div class="header">Project Timeline</div>
                                </div>
                                <div class="content">
                                    <h4 class="ui sub header">活动</h4>
                                    <div class="ui small feed">
                                        <div class="event">
                                            <div class="content">
                                                <form class="ui form">
                                                    <div class="field">
                                                        <label>First Name</label>
                                                        <input type="text" name="first-name" placeholder="First Name">
                                                    </div>
                                                    <div class="field">
                                                        <label>Last Name</label>
                                                        <input type="text" name="last-name" placeholder="Last Name">
                                                    </div>
                                                    <div class="field">
                                                        <div class="ui checkbox">
                                                            <input type="checkbox" tabindex="0" class="hidden">
                                                            <label>我同意本条款和条件</label>
                                                        </div>
                                                    </div>
                                                    <button class="ui button" type="submit">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="event">
                                            <div class="content">
                                                <div class="summary"><a>Stevie Feliciano</a> was added as an <a>Administrator</a> </div>
                                            </div>
                                        </div>
                                        <div class="event">
                                            <div class="content">
                                                <div class="summary"><a>Helen Troy</a> added two pictures </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="extra content">
                                    <button class="ui button">Join Project</button>
                                </div>
                            </div>
                            <div class="ui card">
                                <div class="content">
                                    <div class="header">Project Timeline</div>
                                </div>
                                <div class="content">
                                    <h4 class="ui sub header">活动</h4>
                                    <div class="ui small feed">
                                        <div class="event">
                                            <div class="content">
                                                <form class="ui form">
                                                    <div class="field">
                                                        <label>First Name</label>
                                                        <input type="text" name="first-name" placeholder="First Name">
                                                    </div>
                                                    <div class="field">
                                                        <label>Last Name</label>
                                                        <input type="text" name="last-name" placeholder="Last Name">
                                                    </div>
                                                    <div class="field">
                                                        <div class="ui checkbox">
                                                            <input type="checkbox" tabindex="0" class="hidden">
                                                            <label>我同意本条款和条件</label>
                                                        </div>
                                                    </div>
                                                    <button class="ui button" type="submit">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="event">
                                            <div class="content">
                                                <div class="summary"><a>Stevie Feliciano</a> was added as an <a>Administrator</a> </div>
                                            </div>
                                        </div>
                                        <div class="event">
                                            <div class="content">
                                                <div class="summary"><a>Helen Troy</a> added two pictures </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="extra content">
                                    <button class="ui button">Join Project</button>
                                </div>
                            </div>
                            <div class="ui card">
                                <div class="content">
                                    <div class="header">Project Timeline</div>
                                </div>
                                <div class="content">
                                    <h4 class="ui sub header">活动</h4>
                                    <div class="ui small feed">
                                        <div class="event">
                                            <div class="content">
                                                <form class="ui form">
                                                    <div class="field">
                                                        <label>First Name</label>
                                                        <input type="text" name="first-name" placeholder="First Name">
                                                    </div>
                                                    <div class="field">
                                                        <label>Last Name</label>
                                                        <input type="text" name="last-name" placeholder="Last Name">
                                                    </div>
                                                    <div class="field">
                                                        <div class="ui checkbox">
                                                            <input type="checkbox" tabindex="0" class="hidden">
                                                            <label>我同意本条款和条件</label>
                                                        </div>
                                                    </div>
                                                    <button class="ui button" type="submit">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="event">
                                            <div class="content">
                                                <div class="summary"><a>Stevie Feliciano</a> was added as an <a>Administrator</a> </div>
                                            </div>
                                        </div>
                                        <div class="event">
                                            <div class="content">
                                                <div class="summary"><a>Helen Troy</a> added two pictures </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="extra content">
                                    <button class="ui button">Join Project</button>
                                </div>
                            </div>
                        </div>
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
    $home-height-frame-tabs:  40px;
    $home-font-size-frame-tabs: 14px;
    $home-border-height-slim: 1px;
    $home-border-height-bold: 2px;
    $home-border-frame-tabs: $home-border-height-bold solid $theme-color-main;
    $home-border-tabs-list-li: $home-border-height-slim solid $theme-color-hr;
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
            display: flex;
            height: 100%;
            overflow:hidden;
            flex-direction: column;
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
                /*height:100%;*/
                flex: 1;
                display: flex;
                flex-direction: column;




                .frame-tabs {
                    user-select: none;
                    background-color: $theme-color-text;
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
                        position: relative;
                    }

                    .tabs-list {
                        overflow-y: hidden;
                        overflow-x: auto;

                        height: 100%;
                        li[data-id="homePage"] {
                            position: sticky;
                            left:0;
                            top:0;
                        }
                        li {
                            cursor: pointer;
                            border-right:  $home-border-tabs-list-li;
                            height:inherit;
                            display: inline-flex;
                            flex-wrap: nowrap;
                            /*float: left;*/
                            align-items: center;
                            justify-content: space-between;

                            padding: 0 8px;
                            transition:$home-transition-tabs;
                            label {
                                cursor: pointer;
                                /*font-weight: bold;*/
                                font-size:  $home-font-size-frame-tabs;
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
                    height: 100%;
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
                            height: 99%;
                        }
                    }
                }
            }
        }
    }

</style>

