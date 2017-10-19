<!--上传组件-->
<!--组件调用说明
    1. 基于webUploader集成的上传组件
    2. UI部分參考Semantic,但是爲了今後可能脫離semantic組件，故作獨立樣式編寫



    静态样式控制类：{

        大小：{size-md, size-lg, size-sm}
        形状：{square, round}

    }
-->
<script>
//    const WebUploader = require("../../module/vendor/webuploader/module");
    import WebUploader from "webuploader"
    let uploader = null;     //生成的WebUploader实例对象
    let PickerId = "UploadPicker" + new Date().getTime();


    let init = function () {
        uploader = WebUploader.create({
            // 文件接收服务端。
            server: 'http://webuploader.duapp.com/server/fileupload.php',

            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: '#' + PickerId,

            // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
            resize: false
        });
    };



    export default {
        data () {
            return {
                //WebUploader需要替换的id
                pickerId: PickerId
            }
        },
        prop: {
            skins: ["default"],
            server: String,
        },
        method: {

        },
        mounted: function () {
            init();
        }
    }
</script>

<template>
    <div class="uploader-container">

        <!--用来存放文件信息-->
        <ul class="preview-container">
            <li>
                <img class="gallery-box" src="../../assets/image/avatar.jpg">
            </li>
            <li>
                <img class="gallery-box" src="../../assets/image/avatar.jpg">
            </li>
            <li>
                <img class="gallery-box" src="../../assets/image/avatar.jpg">
            </li>
            <li>
                <img class="gallery-box" src="../../assets/image/avatar.jpg">
            </li>
            <li>
                <img class="gallery-box" src="../../assets/image/avatar.jpg">
            </li>

            <li>
                <img class="gallery-box" src="../../assets/image/avatar.jpg">
            </li>
            <li>
                <img class="gallery-box" src="../../assets/image/avatar.jpg">
            </li>


            <!--<li>-->
                <!--<div class="gallery-box" style="background-image:url('../../assets/image/avatar.jpg')"></div>-->
            <!--</li>-->
            <!--<li>-->
                <!--<div class="gallery-box" style="background-image:url('../../assets/image/avatar.jpg')"></div>-->
            <!--</li>-->
            <!--<li>-->
                <!--<div class="gallery-box" style="background-image:url('../../assets/image/avatar.jpg')"></div>-->
            <!--</li>-->
            <!--<li>-->
                <!--<div class="gallery-box" style="background-image:url('../../assets/image/avatar.jpg')"></div>-->
            <!--</li>-->
            <!--<li>-->
                <!--<div class="gallery-box" style="background-image:url('../../assets/image/avatar.jpg')"></div>-->
            <!--</li>-->
        </ul>
        <div class="buttons-container">
            <div :id="pickerId">选择文件</div>
            <button class="ui primary basic button">上传</button>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../../assets/scss/methods";
    $uploader-space-normal:0.5rem;
    img{
        max-width: 100%;
    }
    .uploader-container {
        background-color: white;
        /*margin: $uploader-space-normal;*/
        padding: $uploader-space-normal;
        border-radius: $Border-radius-normal;
        border: $Border-normal;
        min-height: 200px;
        width: auto;
        .preview-container {
            @include gallery(6)
        }

    }
</style>

