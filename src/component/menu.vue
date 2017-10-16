<!--主界面菜单条-->
<script>
    export default {
        data () {
            return {
            }
        },
    }
</script>

<template>
    <ul class="menu-tabs">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</template>

<style lang="scss">
    @import "../assets/scss/methods";
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

