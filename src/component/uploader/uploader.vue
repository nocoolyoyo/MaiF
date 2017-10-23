<!--上传组件-->
<!--组件调用说明
    1. 基于webUploader集成的上传组件
    2. UI部分參考Semantic,但是爲了今後可能脫離semantic組件，故作獨立樣式編寫

    静态样式控制类：{}
-->
<script>
//    const WebUploader = require("../../module/vendor/webuploader/module");
    import WebUploader from "webuploader"
    import A_imgHolder from "../../assets/image/holder.png"
    import {getFileType} from "../../utils/assist"


    let uploader = null;     //生成的WebUploader实例对象

    //获取preview模板
    const getfileTemplate = function(fileType,params){
        let result = "";

        let fileTypeColor,
            fileTypeActionPanel;
        let fileTypePreview = A_imgHolder;
        let fileName = params.name;

        switch (fileType) {
            case "image":   fileTypeColor = "teal";
                            fileTypePreview = params.src;
                            fileTypeActionPanel = `<button class="ui  ${fileTypeColor}  compact button tiny">放大</button>
                                                   <button class="ui  red compact button tiny">删除</button>`;break;

            case "word":    fileTypeColor = "blue";
                            fileTypeActionPanel = `<button class="ui  red compact button tiny">删除</button>`;break;

            case "excel":   fileTypeColor = "green";
                            fileTypeActionPanel = `<button class="ui  red compact button tiny">删除</button>`;break;

            case "ppt":     fileTypeColor = "orange";
                            fileTypeActionPanel = `<button class="ui  red compact button tiny">删除</button>`;break;

            case "zip":     fileTypeColor = "violet";
                            fileTypeActionPanel = `<button class="ui  red compact button tiny">删除</button>`;break;

            default:        fileTypeColor = "grey";
                            fileTypeActionPanel = `<button class="ui  red compact button tiny">删除</button>`;
        }


        result = `<div class="card">
                        <div class="blurring dimmable image">
                            <div class="ui dimmer transition hidden">
                                <div class="content">
                                    <div class="center">
                                        ${fileTypeActionPanel}
                                    </div>
                                </div>
                            </div>
                            <img src="${fileTypePreview}">
                        </div>
                        <div class="floating ui ${fileTypeColor} label"><i class="file ${fileType} outline icon"></i></div>
                        <div class="content">

                            <div class="meta">
                                <span class="date">${fileName}</span>
                            </div>
                        </div>
                    </div>`;

        return result;
    };


    //组织构造uploader参数
    const buildUploaderOptions = function (vm) {
        let options = vm.$attrs.options;
        options.pick = '#' + vm.pickerId;
        return options;
    };


    let initUI = function (vm) {
        $(vm.$el).find('.image').dimmer({on:'hover'});
    };

    let initUploader = function (vm) {

        uploader = WebUploader.create(buildUploaderOptions(vm));

        // 当有文件添加进来的时候
        uploader.on( 'fileQueued', function( file ) {
            let $container =  $(vm.$el).find(".preview-container");
            let fileType = getFileType(file.ext);
            let template = "";
            if(fileType === "image"){
                let imgSrc = "";
                // 创建缩略图
                // 如果为非图片文件，可以不用调用此方法。
                // thumbnailWidth x thumbnailHeight 为 100 x 100
                uploader.makeThumb( file, function( error, src ) {
                    if ( error ) {
                        imgSrc = "";
                        return;
                    }
                    imgSrc = src;
                    template = getfileTemplate(fileType,{
                        name:file.name,
                        src: imgSrc
                    });
                    $container.prepend(template);
                    initUI(vm);
                }, 300, 300 );

                vm.hasFile = true;
            }else{
                template = getfileTemplate(fileType,{
                    name:file.name
                });
                $container.prepend(template);
                initUI(vm);
                vm.hasFile = true;
            }
        });


    };



    export default {
        name: "uploader",
        data () {
            return {
                //WebUploader需要替换的id
                pickerId:  "UploadPicker" + new Date().getTime(),
                hasFile: false,     //是否有文件
            }
        },
        prop: {
            skins: String,
            //uploader的配置项
            options: {
                type: Object,
                required: true,
//                default () {
//                    pick :"#" + this.pickerId;
//                }
            },
        },
        created(){
            this.$on('on-form-up-load', (field) => {
                if (field) this.fields.push(field);
                return false;
            });
        },
        methods: {
            chooseFile() {
                $(this.$el).find("input").click();
            },
            upload(){

            },
            clear(){

            }
        },
        mounted () {
            initUploader(this);
        }
    }
</script>

<template>
    <div class="uploader-container">
        <!--用来存放文件信息-->
        <div class="preview-container ui six doubling cards" v-show="hasFile">
            <div class="card" @click="chooseFile">
                <i class="btn-add plus icon"></i>
            </div>
        </div>
        <div class="action-container" v-show="!hasFile" @click="chooseFile">
            <div :id="pickerId"></div>
            点击选择文件或者拖拽到此处
        </div>
        <div class="ui clearing divider" v-show="hasFile"></div>
        <div class="operation-container" v-show="hasFile">
            <button class="ui red button small" @click="clear">清空</button>
            <button class="ui green button small" @click="upload">上传</button>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../../assets/scss/methods";
    $uploader-space-normal:0.5rem;
    $uploader-height-action-container: 200px;
    $uploader-border-action-container: 2px dashed $c-themeGray;
    $uploader-height-card: 150px;
    $uploader-height-preview-img: 120px;
    $uploader-height-add-btn: 120px;
    $uploader-fontSize-action-container: 1.4em;


    img{
        max-width: 100%;
    }
    .uploader-container {
        background-color: white;
        /*margin: $uploader-space-normal;*/
        padding: $uploader-space-normal;
        border-radius: $border-radius-normal;
        border: $border-normal;
        width: auto;
        .preview-container {
            /*@include gallery(6)*/
            .card>.content {
                padding: 0.4em;
                &>div {
                    @include ellipsis();
                }

            }
            .card {
                height: $uploader-height-card;
                img {
                    height: $uploader-height-preview-img !important;
                }
            }
            .ui.floating.label{
                margin: 0;
                padding: 0.6em;
                top: -0.4em;
                &>.icon {
                    margin: 0;
                }
            }

            .btn-add {

                height: $uploader-height-add-btn;
                cursor: pointer;
                font-size: 2.6em;
                width: 100%;
                text-align: center;
                line-height: $uploader-height-card;
                margin: 0;
                &:hover {
                    opacity: 0.8;
                    transition: $transition-normal;
                }
            }

        }
        .action-container {
            user-select: none;
            height: $uploader-height-action-container;
            cursor: pointer;;
            border: $uploader-border-action-container;
            color: $c-themeGray;
            font-size: $uploader-fontSize-action-container;
            text-align: center;
            line-height: $uploader-height-action-container;
            input[type="file"] {
                display: none;
            }
            label {
                display: none;
            }
        }
        .operation-container {
            @include display-flex( center,flex-end)
        }

    }
</style>

