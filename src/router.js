//这里是页面的路由管理
import Vue from 'vue'
import Router from 'vue-router'

import login from './page/login.vue'
import main from './page/main.vue'


Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            redirect: '/main',
            component: main
        },{
            path:'/main',
            component: main
        },{
            path:'/login',
            component: login,
        }
    ]
})