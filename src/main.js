import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Axios from 'axios'
import router from '@/router/routers.js'

//往源函数中添加一个axios方法
Vue.prototype.$axios = Axios
//设置默认api就是vue.config.js中的target路径
Axios.defaults.baseURL = '/api'
//默认响应
Axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
