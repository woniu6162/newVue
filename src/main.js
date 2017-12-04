// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入Vue框架
import Vue from 'vue'
// 引入根组件
import App from './App'
// 引入路由设置
import router from './router'
// 引入‘饿了么’ui框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 关闭生产模式下给出的提示
Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
// 定义实例
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
