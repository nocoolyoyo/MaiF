<!--头像UI组件-->
<template title="标签详情页面">
    <div>123123132</div>
</template>
<style lang="scss"  scoped>
    @import "../../assets/scss/methods";
    $avatar-border : 2px solid  $c-grayEyes;
    $avatar-size:  50px !default;
    $avatar-size-md:  75px;
    .avatar {
        background-image: url("../../assets/image/avatar.jpg") ;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-color:  $c-huiyuan;
        border:  $avatar-border;
        height: $avatar-size;
        width: $avatar-size;
    }
    .size-md {
        height: $avatar-size-md;
        width:  $avatar-size-md;
    }
    .round {
        border-radius:  50%;
    }
</style>
<script>
    import EventBus from "../../module/custom/EventBus"




    let frmFormTest = function (data) {
        console.log(data)
    };

    export default {
        data () {
            return {
            }
        },
        methods: {
        },
        created: function () {
            EventBus.on('frm-form_test', frmFormTest);
        },
        //这里是節點渲染完需要进行初始化操作
        mounted () {

            //下拉菜单初始化
//            $('.ui.dropdown').dropdown();
//            //菜单初始化
//            $('.ui.accordion').accordion({exclusive:false});
        },
        beforeDestroy: function () {
            EventBus.off('frm-form_test',frmFormTest);
        },
    }
</script>