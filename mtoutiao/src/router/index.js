import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import Index from "../components/index/Index.vue"
let routes = [{
    path:"/",
    name:"index",
    component:Index
}]
export default new VueRouter({
    routes
})