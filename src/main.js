import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//注册全局工具包
import utils from "@/utils/utils"
Vue.prototype.$utils = utils

Vue.use(ElementUI);

Vue.config.productionTip = false


//打印当前所处开发环境
console.warn( process.env.VUE_APP_INTRODUCE);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
