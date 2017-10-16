//这里是页面的路由管理
import Vue from 'vue'
import Router from 'vue-router'

//每次有新增的页面时候都应当在这里对页面进行注册
import login from './page/login.vue'
import home from './page/home.vue'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            redirect: '/home',
            component: home
        },{
            path:'/home',
            component: home,
        },{
            path:'/login',
            component: login,
        }
    ]
})