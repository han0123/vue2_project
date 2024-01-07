import Vue from 'vue'

import VueRouter from 'vue-router'

//一旦注册了路由插件，就会给vue提供两个全局组件和全局对象
// 全局组件：RouterLink和RouterView
// 全局对象：$route,$router
Vue.use(VueRouter)

// 创建路由规则

const routes = [{
    path:'/',
    redirect:'/Home',
},{
    path:'/home',
    components:()=>import('@/view/Home')
}

]


// 创建实例
const router =  new VueRouter({
    
    routes
})

export default router