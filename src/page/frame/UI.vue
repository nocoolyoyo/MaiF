<!--表单元素展示页面-->

<template title="表单元素展示">
    <div class="frame">
        <h2 class="frame-header ui header dividing">
            <span class="ui ">UI元素展示</span>
            <span class="ui label small"><i class="mail icon"></i>2017-05-23</span>
        </h2>
        <comments data="CommentsMock" title="热门评论"></comments>

    </div>

</template>

<script>
    //测试数据
    import CommentsMock from "../../component/comments/template"

    import EventBus from "../../module/custom/EventBus"
    import Comments from "../../component/comments/comments.vue"
    //這裏是頁面節點喧嚷完畢后的回調，相當於jquery的domReady
    function domReady(dom,$dom,Vm){


        console.log(CommentsMock)


    }
    //页面输出对象
    export default {
        components: {Comments},
        data () {
            return {
                CommentsMock:CommentsMock
            }
        },
        methods: {

        },
        mounted(){
            domReady(this.$el,$(this.$el),this);
        },
        created: function () {

        },
        beforeDestroy: function () {

        },
    };
</script>

<style lang="scss">

</style>

