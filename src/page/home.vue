<!--主界面-->
<script>
    import Avatar from "../component/avatar.vue";

    export default {
        components: {Avatar},
        data () {
            return {
            }
        },
    }
</script>

<template>
    <div class="layout">
        <nav class="layout-menu">
            <avatar class="center">

            </avatar>
        </nav>
        <div class="layout-main">
            <header>

            </header>
            <nav>

            </nav>
            <main>

            </main>
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
    $home-width-menu:  200px;

    .layout {
        height:100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        .layout-menu {
            width: $home-width-menu;
            background-color:  $c-nightlight;
        }
        .layout-main {
            flex:1;
        }
    }

</style>

