import Vue from 'vue'
import App from './App.vue'
//适配方案:屏幕10等分
import 'lib-flexible/flexible'
// 加载路由
import router from "@/router/router"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
