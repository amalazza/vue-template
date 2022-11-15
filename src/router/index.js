import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../components/Home.vue'
import aboutPage from '../components/About.vue'
import daftarPage from '../components/UserEBH//Daftar.vue'
import loginPage from '../components/UserEBH/Login.vue'
import cartPage from '../components/Cart.vue'
import notificationPage from '../components/Notification.vue'
import kategoriPage from '../components/KategoriTerkait.vue'
import detailprodukPage from '../components/detailproduk.vue'
import gratisongkirPage from '../components/gratisongkir.vue'
import erlanggadiskonPage from '../components/erlanggadiskon.vue'
import noveldiskonPage from '../components/noveldiskon.vue'
import blogPage from '../components/Blog'
import bantuanPage from '../components/BantuanEBH/bantuan'
import kisahkasihPage from '../components/Blog/kisahkasih.vue'
import jejakPage from '../components/Blog/jejak.vue'
import promosiPage from '../components/Blog/promosi.vue'
import checkoutPage from '../components/checkout.vue'
import rahasiadeliaPage from '../components/Blog/rahasiadelia.vue'
import acaratokoPage from '../components/Blog/acaratoko.vue'
import rekomondasiPage from '../components/Blog/rekomondasi.vue'
import allblogPage from '../components/Blog/allblog.vue'
import kauayahPage from '../components/Blog/kauayah.vue'
import trivaPage from '../components/Blog/triva.vue'
import senjaPage from '../components/Blog/senja.vue'
import heroPage from '../components/Blog/hero.vue'
import snackPage from '../components/Blog/snack.vue'
import friedPage from '../components/Blog/fried.vue'
import datePage from '../components/Blog/date.vue'
import ttgayahPage from '../components/Blog/ttgayah.vue'
import merahPage from '../components/Blog/merah.vue'
import pohonmanggaPage from '../components/Blog/pohonmangga.vue'
import reviewPage from '../components/Blog/review.vue'
import fiksiPage from '../components/Blog/fiksi.vue'
import nonfiksiPage from '../components/Blog/nonfiksi.vue'
import pejuangPage from '../components/Blog/pejuang.vue'
import malaikatPage from '../components/Blog/malaikat.vue'
import kartuangkaPage from '../components/kartuangka.vue'
import pesananPage from '../components/pesanan.vue'
import pesananbatalPage from '../components/pesananbatal.vue'
import ebhPage from '../components/ebh.vue'
import erlanggaPage from '../components/erlangga.vue'
import DashboarduserPage from '../components/Users/Dashboarduser.vue'
import bukusdPage from '../components/bukusd.vue'
import tiPage from '../components/ti.vue'
import semuakaetgoriPage from '../components/semuakategori.vue' 
import ProfilePage from '../components/Users/Profile.vue' 
import terakhirdilihatPage from '../components/Users/terakhirdilihat.vue' 
import alamatPage from '../components/Users/alamat.vue' 
import editalamatPage from '../components/Users/editalamat.vue' 
import tambahalamatPage from '../components/Users/tambahalamat.vue' 
import metodebayarPage from '../components/Users/metodebayar.vue'
import notificationprofilePage from '../components/Users/notificationprofile.vue' 
import tentangPage from '../components/BantuanEBH/tentang.vue' 
import bantuanregistrasiPage from '../components/BantuanEBH/bantuanregistrasi.vue' 
import akunmemberPage from '../components/BantuanEBH/akunmember.vue' 
import belanjaPage from '../components/BantuanEBH/belanja.vue' 
import pembayaranPage from '../components/BantuanEBH/pembayaran.vue' 
import pengirimanPage from '../components/BantuanEBH/pengiriman.vue' 
import produkditerimaPage from '../components/BantuanEBH/produkditerima.vue' 
import kerjasamaPage from '../components/BantuanEBH/kerjasama.vue' 
import responsive from 'vue-responsive'

Vue.use(responsive)
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
    path: '/UserEBH/daftar',
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
    path: '/UserEBH/login',
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
    path: '/BantuanEBH/bantuan',
    name: 'bantuan',
    component: bantuanPage
  },
  {
    path: '/Blog/kisahkasih',
    name: 'kisahkasih',
    component: kisahkasihPage
  },
  {
    path: '/Blog/promosi',
    name: 'promosi',
    component: promosiPage
  },
  {
    path: '/Blog/review',
    name: 'review',
    component: reviewPage
  },
  {
    path: '/Blog/date',
    name: 'date',
    component: datePage
  },
  {
    path: '/Blog/rekomondasi',
    name: 'rekomondasi',
    component: rekomondasiPage
  },
   {
    path: '/Blog/snack',
    name: 'snack',
    component: snackPage
  },
  {
    path: '/Blog/fiksi',
    name: 'fiksi',
    component: fiksiPage
  },
  {
    path: '/Blog/nonfiksi',
    name: 'nonfiksi',
    component: nonfiksiPage
  },
  {
    path: '/Blog/allblog',
    name: 'allblog',
    component: allblogPage
  },
 {
    path: '/Blog/fried',
    name: 'fried',
    component: friedPage
  },
   {
    path: '/Blog/kauayah',
    name: 'kauayah',
    component: kauayahPage
  },
  {
    path: '/Blog/triva',
    name: 'triva',
    component: trivaPage
  },
  {
    path: '/Blog/ttgayah',
    name: 'ttgayah',
    component: ttgayahPage
  }, 
   {
    path: '/Blog/senja',
    name: 'senja',
    component: senjaPage
  }, 
  {
    path: '/Blog/hero',
    name: 'hero',
    component: heroPage
  }, 
  {
    path: '/Blog/acaratoko',
    name: 'acaratoko',
    component: acaratokoPage
  }, 
  {
    path: '/Blog/merah',
    name: 'merah',
    component: merahPage
  },
  {
    path: '/Blog/rahasiadelia',
    name: 'rahasiadelia',
    component: rahasiadeliaPage
  },
  {
    path: '/Blog/jejak',
    name: 'jejak',
    component: jejakPage
  },
  {
    path: '/Blog/pejuang',
    name: 'pejuang',
    component: pejuangPage
  },
  {
    path: '/Blog/pohonmangga',
    name: 'pohonmangga',
    component: pohonmanggaPage
  },
  {
    path: '/Blog/malaikat',
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
    path: '/Users/Dashboarduser',
    name: 'Dashboarduser',
    component: DashboarduserPage
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
  {
    path: '/Users/Profile',
    name: 'Profile',
    component: ProfilePage
  },
  {
    path: '/Users/terakhirdilihat',
    name: 'terakhirdilihat',
    component: terakhirdilihatPage
  },
  {
    path: '/Users/alamat',
    name: 'alamat',
    component: alamatPage
  },
  {
    path: '/Users/editalamat',
    name: 'editalamat',
    component: editalamatPage
  },
  {
    path: '/Users/tambahalamat',
    name: 'tambahalamat',
    component: tambahalamatPage
  },
  {
    path: '/Users/metodebayar',
    name: 'metodebayar',
    component: metodebayarPage
  },
  {
    path: '/Users/notificationprofile',
    name: 'notificationprofile',
    component: notificationprofilePage
  },
  {
    path: '/BantuanEBH/tentang',
    name: 'tentang',
    component: tentangPage
  },
  {
    path: '/BantuanEBH/bantuanregistrasi',
    name: 'bantuanregistrasi',
    component: bantuanregistrasiPage
  },
  {
    path: '/BantuanEBH/akunmember',
    name: 'akunmember',
    component: akunmemberPage
  },
  {
    path: '/BantuanEBH/belanja',
    name: 'belanja',
    component: belanjaPage
  },
  {
    path: '/BantuanEBH/pembayaran',
    name: 'pembayaran',
    component: pembayaranPage
  },
   {
    path: '/BantuanEBH/pengiriman',
    name: 'pengiriman',
    component: pengirimanPage
  },
  {
    path: '/BantuanEBH/produkditerima',
    name: 'produkditerima',
    component: produkditerimaPage
  },
   {
    path: '/BantuanEBH/kerjasama',
    name: 'kerjasama',
    component: kerjasamaPage
  },
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
