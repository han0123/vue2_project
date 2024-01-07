import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'

import Footer from './components/Footer'
import Header from './components/Header'
import TypeNav from './components/TypeNav'

// 使用ui的时候还要使用对应的css
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";

// import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false

// 这里注册的时候最好是使用名字
Vue.component(Header.name,'Header')
Vue.component(TypeNav.name,'TypeNav')
Vue.component(Footer.name,'Footer')

Vue.use(ElementUI)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
