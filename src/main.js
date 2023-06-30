import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import router from "./router"
import store from "./store"
import Vuesax from 'vuesax'
import ElementUI from 'element-ui'
import echarts from 'echarts'

import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.scss'
import 'moment/locale/zh-cn'
import './permission'

Vue.prototype.$echarts = echarts


Vue.use(Vuesax, {
  // options here
})

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  moment,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
