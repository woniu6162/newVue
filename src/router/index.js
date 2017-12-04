// 引入vue框架
import Vue from 'vue'
// 引入路由依赖
import Router from 'vue-router'
// 引入页面组件，命名为HelloWorld
import login from '@/components/login'

// 使用路由依赖
Vue.use(Router)

// 定义路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
