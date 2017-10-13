<!--主界面-->
<script>
    export default {
        data () {
            return {
            }
        },
    }
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <!--<div class="col">-->
                <!--<button type="button" class="btn btn-primary">Primary</button>-->
                <!--<button type="button" class="btn btn-secondary">Secondary</button>-->
                <!--<button type="button" class="btn btn-success">Success</button>-->
                <!--<button type="button" class="btn btn-danger">Danger</button>-->
                <!--<button type="button" class="btn btn-warning">Warning</button>-->
                <!--<button type="button" class="btn btn-info">Info</button>-->
                <!--<button type="button" class="btn btn-light">Light</button>-->
                <!--<button type="button" class="btn btn-dark">Dark</button>-->
            <!--</div>-->
        </div>
    </div>
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

