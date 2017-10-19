<!--头像UI组件-->
<!--组件调用说明
    1. 第一个样式是默认的样式;
    2. 集成头像懒加载和无头像默认置底图片



    静态样式控制类：{
        大小：{size-md, size-lg, size-sm}
        形状：{square, round}

    }
-->
<template>
    <div class="avatar">
    </div>
</template>
<style lang="scss" scoped>
    @import "../assets/scss/methods";
    $avatar-border : 2px solid  $theme-color-hr;
    $avatar-size:  50px !default;
    $avatar-size-sm:  50px;
    $avatar-size-md:  75px;
    $avatar-size-lg:  125px;
    .avatar {
        background-image: url("../assets/image/avatar.jpg") ;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-color:  $theme-color-bg;
        border:  $avatar-border;
        height: $avatar-size;
        width: $avatar-size;
    }



    //尺寸
    .size-sm {
        height: $avatar-size-sm;
        width:  $avatar-size-sm;
    }
    .size-md {
        height: $avatar-size-md;
        width:  $avatar-size-md;
    }
    .size-lg {
        height: $avatar-size-lg;
        width:  $avatar-size-lg;
    }
    .round {
        border-radius:  50%;
    }
</style>
<script>
    export default {
        data () {
            return {
                SimgSrc: function () {
                    console.log(this.imgSrc)
                    return this.imgSrc;
                }
            }
        },
        props: {
            //传入的图片尺寸
            imgSrc: String
        }
    }
</script>