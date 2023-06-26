import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
import router from "./router"
import store from "./store"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.scss'

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  moment,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
