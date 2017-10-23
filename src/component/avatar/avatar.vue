<!--头像UI组件-->
<!--组件调用说明
    1. 第一个样式是默认的样式;
    2. 集成头像懒加载和无头像默认置底图片
    静态样式控制类：{
        大小：{size-md(默认), size-lg, size-sm}
        形状：{square(默认), round, circle}
    }
    调用示例：<avatar class="size-md round" img-src="图片" img-alt="图片alt的信息" is-bind="true"></avatar>
-->
<template>
    <div class="avatar">
        <img :src="CimgSrc">
    </div>
</template>
<style lang="scss" scoped>
    @import "../../assets/scss/methods";
    $avatar-border : 2px solid  $theme-color-hr;
    $avatar-size:  50px !default;
    $avatar-size-sm:  50px;
    $avatar-size-md:  75px;
    $avatar-size-lg:  125px;
    .avatar {
        /*background-image: url("../../assets/image/avatar.jpg") ;*/
        /*background-position: center;*/
        /*background-repeat: no-repeat;*/
        /*background-size: contain;*/

        background-color:  $theme-color-bg;
        border:  $avatar-border;
        height: $avatar-size;
        width: $avatar-size;
        img {
            width: 100%;
            height:auto
        }
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
        border-radius: $border-radius-normal;
        img {
            border-radius:  $border-radius-normal;
        }
    }
    .circle {
        border-radius:  50%;
        img {
            border-radius:  50%;
        }
    }
</style>
<script>
    import testImg from "../../assets/image/avatar.jpg";
    import A_imgHolder from "../../assets/image/holder.png";

    export default {
        data () {
            return {

            }
        },
        computed: {
            CimgSrc: function () {
                return this.imgSrc
            }
        },
        props: {
            //是否启用图片的数据绑定，即在组件存在的生命周期期间，传入组件参数的变化时显示的图片也会自动替换，比较好性能，静态情况下默认不器用响应式头像
            isBind: {
                type: Boolean,
                defaults: false,
            },
            //传入的图片尺寸
            imgSrc: String
        }
    }
</script>