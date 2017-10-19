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


    let initDimmer = function (el) {
        console.log($(el));
        console.log($(el).find('.image'));
        $(el).find('.image').eq(0).dimmer({on:'hover'});


    };

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

        // 当有文件添加进来的时候
        uploader.on( 'fileQueued', function( file ) {
            console.log(file)
            let template = `<li><img class="gallery-box" src="../../assets/image/avatar.jpg"></li>`;
//            var $li = $(
//                '<div id="' + file.id + '" class="file-item thumbnail">' +
//                '<img>' +
//                '<div class="info">' + file.name + '</div>' +
//                '</div>'
//                ),
//                $img = $li.find('img');
//
//
//            // $list为容器jQuery实例
//            $list.append( $li );
//
//            // 创建缩略图
//            // 如果为非图片文件，可以不用调用此方法。
//            // thumbnailWidth x thumbnailHeight 为 100 x 100
//            uploader.makeThumb( file, function( error, src ) {
//                if ( error ) {
//                    $img.replaceWith('<span>不能预览</span>');
//                    return;
//                }
//
//                $img.attr( 'src', src );
//            }, thumbnailWidth, thumbnailHeight );
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
            initDimmer(this.$el);
        }
    }
</script>

<template>
    <div class="uploader-container">
        <!--用来存放文件信息-->
        <!--<ul class="preview-container">-->
            <!--<li>-->
                <!--<img class="gallery-box" src="../../assets/image/avatar.jpg">-->
            <!--</li>-->
            <!--<li>-->
                <!--<img class="gallery-box" src="../../assets/image/avatar.jpg">-->
            <!--</li>-->
            <!--<li>-->
                <!--<img class="gallery-box" src="../../assets/image/avatar.jpg">-->
            <!--</li>-->
            <!--<li>-->
                <!--<img class="gallery-box" src="../../assets/image/avatar.jpg">-->
            <!--</li>-->
            <!--<li>-->
                <!--<img class="gallery-box" src="../../assets/image/avatar.jpg">-->
            <!--</li>-->
            <!--<li>-->
                <!--<img class="gallery-box" src="../../assets/image/avatar.jpg">-->
            <!--</li>-->
            <!--<li>-->
                <!--<img class="gallery-box" src="../../assets/image/avatar.jpg">-->
            <!--</li>-->
        <!--</ul>-->


        <div class="preview-container ui six doubling cards">
            <div class="card">
                <div class="blurring dimmable image">
                    <div class="ui dimmer transition hidden">
                        <div class="content">
                            <div class="center">
                                <div class="ui inverted button">Add Friend</div>
                            </div>
                        </div>
                    </div>
                    <img src="../../assets/image/avatar.jpg">
                </div>
                <div class="content">
                    <a class="header">Team Fu</a>
                    <div class="meta">
                        <span class="date">Create in Sep 2014</span>
                    </div>
                </div>
                <div class="extra content">
                    <a><i class="users icon"></i> 2 Members </a>
                </div>
            </div>
            <div class="card">
                <div class="blurring dimmable image">
                    <div class="ui dimmer transition hidden">
                        <div class="content">
                            <div class="center">
                                <div class="ui inverted button">Add Friend</div>
                            </div>
                        </div>
                    </div>
                    <img src="../../assets/image/avatar.jpg">
                </div>
                <div class="content">
                    <a class="header">Team Fu</a>
                    <div class="meta">
                        <span class="date">Create in Sep 2014</span>
                    </div>
                </div>
                <div class="extra content">
                    <a><i class="users icon"></i> 2 Members </a>
                </div>
            </div>
            <div class="card">
                <div class="blurring dimmable image">
                    <div class="ui dimmer transition hidden">
                        <div class="content">
                            <div class="center">
                                <div class="ui inverted button">Add Friend</div>
                            </div>
                        </div>
                    </div>
                    <img src="../../assets/image/avatar.jpg">
                </div>
                <div class="content">
                    <a class="header">Team Fu</a>
                    <div class="meta">
                        <span class="date">Create in Sep 2014</span>
                    </div>
                </div>
                <div class="extra content">
                    <a><i class="users icon"></i> 2 Members </a>
                </div>
            </div>
            <!--<div class="card">-->
                <!--<div class="image">-->
                    <!--<img src="../../assets/image/avatar.jpg">-->
                <!--</div>-->
            <!--</div>-->
      <!---->
            <!--<div class="card">-->
                <!--<div class="image">-->
                    <!--<img src="../../assets/image/avatar.jpg">-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="card">-->
                <!--<div class="image">-->
                    <!--<img src="../../assets/image/avatar.jpg">-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="card">-->
                <!--<div class="image">-->
                    <!--<img src="../../assets/image/avatar.jpg">-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="card">-->
                <!--<div class="image">-->
                    <!--<img src="../../assets/image/avatar.jpg">-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="card">-->
                <!--<div class="image">-->
                    <!--<img src="../../assets/image/avatar.jpg">-->
                <!--</div>-->
            <!--</div>-->
        </div>
        <div class="action-container">
            <div :id="pickerId"></div>
            点击选择文件或者拖拽到此处
        </div>
    </div>
</template>

<style lang="scss">
    @import "../../assets/scss/methods";
    $uploader-space-normal:0.5rem;
    $uploader-height-action-container: 200px;
    $uploader-border-action-container: 5px dashed $c-themeGray;
    img{
        max-width: 100%;
    }
    .uploader-container {
        background-color: white;
        /*margin: $uploader-space-normal;*/
        padding: $uploader-space-normal;
        border-radius: $Border-radius-normal;
        border: $Border-normal;
        width: auto;
        .preview-container {
            /*@include gallery(6)*/
        }
        .action-container {
            user-select: none;
            height: $uploader-height-action-container;
            cursor: pointer;;
            border: $uploader-border-action-container;
            color: $c-themeGray;
            font-size: 1.4em;
            text-align: center;
            line-height: $uploader-height-action-container;
            input[type="file"] {
                display: none;
            }
            label {
                display: none;
            }
        }

    }
</style>

