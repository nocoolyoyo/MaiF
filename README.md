#基于vue模块化后台构建系统框架

## 部署和开始

1. 项目运行前确保安装node环境，然后在目录地下运行`npm install`安装项目依赖包
2. 然后运行npm run start进入开发

## 开发说明

1. 新建一个页面时候只要在`page/frame`目录下新建一个.vue文件即可，文件的结构参照目录下from.vue的结构

## frame页面说明
### 1. 页面结构
    <template title="表单元素展示">
         //这里是页面的html模板，写入模板的数据应该是
         <avatar></avatar>
    </template>
    <style lang="scss" scoped>
       
        //如果想用sass来写，需要在style标签中加入lang="scss"的属性对
         //需要引入scss主题变量和方法可以引入@import "../../assets/scss/methods";
         //如果多人开发，怕本页面的样式影响到其他页面，最好在style标签中加上scoped属性使样式支队当前模块页起作用
         
    </style>   
    <script>
        import EventBus from "../../module/custom/EventBus"
        import Uploader from "../../component/uploader/uploader.vue"
        import {getUrlParams, isUrl} from '../../utils/assist'     //页面辅助方法类
       //因为是做模块化管理，有些像$和Vue已经定义在全局的则不需要在页面单独引入，
       //所以当你需要用到一些其他模块或者组件时候，就像上方import 变量名 from 模块路径引入
       //有些模块提供多方法要像上面页面页面辅助方法类引入

   
        //因为可能大部分分还是依赖于jquery的节点操作，所以这里封装了一个domReady方法，
        //因为是单页模拟多页架构，如果用以往HTML根文档取节点，在页面多时候肯定会造成一定性能上的影响（虽然可以忽略），
        //所以用dom替代document, $dom.find()取节点替代$()取节点,Vm则是vue对象
        //這裏是頁面節點喧嚷完畢后的回調，相當於jquery的domReady
        
       
        function domReady(dom,$dom,Vm){
   
            dom.querySelector("#exp");
            $dom.find("#exp").on("click", function () {
         
            })
        }
        
        function frmFormTest(data){
               console.log(123213)
        }
        //页面输出对象，这里就是页面的输出，结构可以参照vue对象结构说明，
        //如果并不熟悉VUE或者不想用vue方法，只要记住一下模块输出是的必要注册就行
        export default {
            //当页面需要用到vue组件时候，import组件的同时也需要在这里对组件进行注册
            components: { Uploader },
            data () { 
            },
            //这里就是vue组件节点渲染后的回调，所以domReady在这封装
            mounted(){
                domReady(this.$el,$(this.$el),this);
            },
            //这里是vue页面组件生成的回调用，dom准备前的事件注册都卸载这
            created: function () {
                //这里注册了一个通信事件'frm-form_test',当其他页面发出一个'frm-form_test'时候会调用frmFormTest方法
                EventBus.on('frm-form_test', frmFormTest);
            },
            //这里是vue页面组件销毁后的回调
            beforeDestroy: function () {
                //这里对注册过的frm-form_test事件注销，需要注意页面EventBus.on注册过的事件一定要在这里对其进行注销，否则frmFormTest还会存在内存中
                EventBus.off('frm-form_test',frmFormTest);
            },
        };
    </script>
  



