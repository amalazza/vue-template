import Vue from 'vue'
import VueRouter from 'vue-router'
import cartPage from '../components/Cart.vue'
import notificationPage from '../components/Notification.vue'
import homePage from '../components/Home.vue'
import loginPage from '../components/login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/notification',
    name: 'notification',
    component: notificationPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: cartPage
  },
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path: '/login',
    name: 'login',
    component: loginPage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
