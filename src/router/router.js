import VueRouter from "vue-router"
import Vue from "vue"
Vue.use(VueRouter)
import routes from '@/router/routes'
export default new VueRouter({
  routes,
  linkActiveClass:"active"
})