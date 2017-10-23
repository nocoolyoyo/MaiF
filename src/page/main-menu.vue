<!--菜单组件-->
<!--组件调用说明
    1. main主页里的左侧菜单栏，主要用在这，应该是不会有其他的作用了

    静态样式控制类：{

    }
-->
<script>
    import {openFrame}  from "./frame/frame"
    export default {

        methods: {
            openFrame (url){
                openFrame(url);
            }
        },
        mounted () {
            //菜单初始化
            $(this.$el).find('.ui.accordion').accordion({exclusive:false});
        }
    }
</script>

<template>
    <div class="ui vertical following fluid accordion text menu inverted">
        <div class="item">
            <a class="title active"><i class="dropdown icon"></i><b>大标题</b></a>
            <div class="content menu active">
                <a class="item" @click="openFrame('form')">表单</a>
                <a class="item" @click="openFrame('UI')">UI元素</a>
                <a class="item" @click="openFrame('tabDetail/12')">分隔</a>
                <div class="item">
                    <a class="title"><i class="dropdown icon"></i><b>大标题</b></a>
                    <div class="content menu">
                        <a class="item" @click="openFrame('form')">表单</a>
                        <a class="item" @click="openFrame('UI')">UI元素</a>
                        <a class="item" @click="openFrame('tabDetail/12')">分隔</a>
                        <a class="item" @click="openFrame('tabDetail/13')">分隔</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="item">
            <a class="title active"><i class="dropdown icon"></i> <b>大标题</b></a>
            <div class="content menu active">
                <a class="item" @click="openFrame('form')">表单</a>
                <a class="item" @click="openFrame('UI')">UI元素</a>
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
</template>
<style lang="scss">
    @import "../assets/scss/methods";

    .content.menu {
        margin-left: 1rem !important;
    }

</style>

