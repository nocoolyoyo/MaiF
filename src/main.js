//main.js这是项目的核心文件。全局的配置都在这个文件里面配置
import Vue from 'vue'
import App from './app.vue'
import router from './router'

import './utils/extend'    //自定拓展库
import './assets/scss/style.scss'       //引入模块全局scss，会打包进全局文件

Vue.config.debug = true;//开启错误提示



//渲染根节点
new Vue({
    router,
    el: 'app',
    render: h => h(App)
});