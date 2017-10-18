<!--frame页面-->
<!--这里frame也面中的title用于生成标签页面之后的标签头部-->
<template title="标签页面">

    <div class="test-container">
        <div class="avatar size-md">
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import "../../assets/scss/methods";
    .test-container {
        height:1500px;
    }
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
    export default {
        data () {
            return {
            }
        }
    }
</script>