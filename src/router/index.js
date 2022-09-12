import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../components/Home.vue'
import aboutPage from '../components/About.vue'
import daftarPage from '../components/Daftar.vue'
import loginPage from '../components/Login.vue'
import cartPage from '../components/Cart.vue'
import notificationPage from '../components/Notification.vue'
import kategoriPage from '../components/KategoriTerkait.vue'
import detailprodukPage from '../components/detailproduk.vue'
import gratisongkirPage from '../components/gratisongkir.vue'
import erlanggadiskonPage from '../components/erlanggadiskon.vue'
import noveldiskonPage from '../components/noveldiskon.vue'
import blogPage from '../components/blog.vue'
import bantuanPage from '../components/bantuan.vue'
import kisahkasihPage from '../components/kisahkasih.vue'
import checkoutPage from '../components/checkout.vue'
import rahasiadeliaPage from '../components/rahasiadelia.vue'
import pohonmanggaPage from '../components/pohonmangga.vue'
import malaikatPage from '../components/malaikat.vue'
import kartuangkaPage from '../components/kartuangka.vue'
import pesananPage from '../components/pesanan.vue'
import pesananbatalPage from '../components/pesananbatal.vue'
import ebhPage from '../components/ebh.vue'
import erlanggaPage from '../components/erlangga.vue'
import userPage from '../components/user.vue'
import bukusdPage from '../components/bukusd.vue'
import tiPage from '../components/ti.vue'
import semuakaetgoriPage from '../components/semuakategori.vue'

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
    path: '/login',
    name: 'login',
    component: loginPage
  },
  {
    path: '/kategori',
    name: 'kategori',
    component: kategoriPage
  },
  {
    path: '/detailproduk',
    name: 'detailproduk',
    component: detailprodukPage
  },
  {
    path: '/gratisongkir',
    name: 'gratisongkir',
    component: gratisongkirPage
  },
  {
    path: '/erlanggadiskon',
    name: 'erlanggadiskon',
    component: erlanggadiskonPage
  },
  {
    path: '/noveldiskon',
    name: 'noveldiskon',
    component: noveldiskonPage
  },
  {
    path: '/blog',
    name: 'blog',
    component: blogPage
  },
  {
    path: '/bantuan',
    name: 'bantuan',
    component: bantuanPage
  },
  {
    path: '/kisahkasih',
    name: 'kisahkasih',
    component: kisahkasihPage
  },
  {
    path: '/rahasiadelia',
    name: 'rahasiadelia',
    component: rahasiadeliaPage
  },
  {
    path: '/pohonmangga',
    name: 'pohonmangga',
    component: pohonmanggaPage
  },
  {
    path: '/malaikat',
    name: 'malaikat',
    component: malaikatPage
  },

  {
    path: '/checkout',
    name: 'checkout',
    component: checkoutPage
  },
  {
    path: '/kartuangka',
    name: 'kartuangka',
    component: kartuangkaPage
  },
  {
    path: '/pesanan',
    name: 'pesanan',
    component: pesananPage
  },
  {
    path: '/pesananbatal',
    name: 'pesananbatal',
    component: pesananbatalPage
  },
  {
    path: '/ebh',
    name: 'ebh',
    component: ebhPage
  },
  {
    path: '/erlangga',
    name: 'erlangga',
    component: erlanggaPage
  },
  {
    path: '/user',
    name: 'user',
    component: userPage
  },
  {
    path: '/bukusd',
    name: 'bukusd',
    component: bukusdPage
  },
  {
    path: '/ti',
    name: 'ti',
    component: tiPage
  },

  {
    path: '/semuakategori',
    name: 'semuakategori',
    component: semuakaetgoriPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
