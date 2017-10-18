<!--上传组件-->
<!--组件调用说明
    1. 基于webUploader集成的上传组件



    静态样式控制类：{

        大小：{size-md, size-lg, size-sm}
        形状：{square, round}

    }
-->
<script>
    export default {
        data () {
            return {
            }
        },
    }
</script>

<template>
    <div>

    </div>
</template>

<style lang="scss">
    @import "../../assets/scss/methods";
    $widthMenu:  200px;
    .layout {
        border: $b-box;
        background: $c-milka;
        position: relative;;
        .layout-main {
            height: auto;
        }
        .layout-menu {
            position: fixed;
            left:0;
            top:0;
            min-height: 100vh ;
            width:  $widthMenu !important;
            &>ul {
                width: inherit !important;
                min-height: inherit !important;
            }
        }

        .layout-main {
            margin-left: $widthMenu;
            .point-item {
                padding: $s-small;
                width: 100%;
                height: auto;
                min-height: 99.5vh;
                box-sizing: border-box;
            }
        }
    }

</style>

