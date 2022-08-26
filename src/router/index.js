import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../components/Home.vue'
import aboutPage from '../components/About.vue'
import daftarPage from '../components/Daftar.vue'
import loginPage from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path: '/about',
    name: 'about',
    component: aboutPage
  },
  {
    path: '/daftar',
    name: 'daftar',
    component: daftarPage
  },
  {
    path: '/login',
    name: 'login',
    component: loginPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
