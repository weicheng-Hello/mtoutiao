import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import setRem from "./utils/setRem"
Vue.config.productionTip = false
//执行函数
setRem()
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
