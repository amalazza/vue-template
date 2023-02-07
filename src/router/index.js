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

import addbarangPage from '../components/BantuanEBH/allbelanja/addbarang.vue'
import addcheckoutPage from '../components/BantuanEBH/allbelanja/addcheckout.vue'
import masalahpromoPage from '../components/BantuanEBH/allbelanja/masalahpromo.vue'

import menerimapesananaPage from '../components/BantuanEBH/allditerima/menerimapesanana.vue'
import racecoinPage from '../components/BantuanEBH/allditerima/racecoin.vue'

import jadiofficePage from '../components/BantuanEBH/allkerjasama/jadioffice.vue'
import layananofficePage from '../components/BantuanEBH/allkerjasama/layananoffice.vue'
import produkdilarangPage from '../components/BantuanEBH/allkerjasama/produkdilarang.vue'

import aturkirimPage from '../components/BantuanEBH/allmember/aturkirim.vue'
import editalamatmemberPage from '../components/BantuanEBH/allmember/editalamatmember.vue'
import fotoakunPage from '../components/BantuanEBH/allmember/fotoakun.vue'
import hapusalamatPage from '../components/BantuanEBH/allmember/hapusalamat.vue'
import kebijakanprivasiPage from '../components/BantuanEBH/allmember/kebijakanprivasi.vue'
import namaakunPage from '../components/BantuanEBH/allmember/namaakun.vue'
import passwordakunPage from '../components/BantuanEBH/allmember/passwordakun.vue'
import usernameakunPage from '../components/BantuanEBH/allmember/usernameakun.vue'

import konfrimpaymentPage from '../components/BantuanEBH/allpembayaran/konfrimpayment.vue'
import pesananbelumdiprosesPage from '../components/BantuanEBH/allpembayaran/pesananbelumdiproses.vue'
import transfertidaksesuaiPage from '../components/BantuanEBH/allpembayaran/transfertidaksesuai.vue'

import belumditerimaPage from '../components/BantuanEBH/allpengiriman/belumditerima.vue'
import melacakPage from '../components/BantuanEBH/allpengiriman/melacak.vue'
import resiPage from '../components/BantuanEBH/allpengiriman/resi.vue'

import biayadaftarPage from '../components/BantuanEBH/allregistrasi/biayadaftar.vue'
import emailPage from '../components/BantuanEBH/allregistrasi/email.vue'
import facebookPage from '../components/BantuanEBH/allregistrasi/facebook.vue'
import gmailPage from '../components/BantuanEBH/allregistrasi/gmail.vue'
import loginebhPage from '../components/BantuanEBH/allregistrasi/loginebh.vue'
import syaratmemberPage from '../components/BantuanEBH/allregistrasi/syaratmember.vue'



import satuPage from '../components/Blog/rekomondasibuku/1.vue'
import duaPage from '../components/Blog/rekomondasibuku/2.vue'
import tigaPage from '../components/Blog/rekomondasibuku/3.vue'
import empatPage from '../components/Blog/rekomondasibuku/4.vue'
import limaPage from '../components/Blog/rekomondasibuku/5.vue'
import enamPage from '../components/Blog/rekomondasibuku/6.vue'
import tujuhPage from '../components/Blog/rekomondasibuku/7.vue'
import delapanPage from '../components/Blog/rekomondasibuku/8.vue'
import sembilanPage from '../components/Blog/rekomondasibuku/9.vue'
import sepuluhPage from '../components/Blog/rekomondasibuku/10.vue'

import aPage from '../components/Blog/alltrivia/a.vue'
import bPage from '../components/Blog/alltrivia/b.vue'
import cPage from '../components/Blog/alltrivia/c.vue'
import dPage from '../components/Blog/alltrivia/d.vue'
import ePage from '../components/Blog/alltrivia/e.vue'
import fPage from '../components/Blog/alltrivia/f.vue'
import gPage from '../components/Blog/alltrivia/g.vue'
import hPage from '../components/Blog/alltrivia/h.vue'

import bestsellernovelPage from '../components/Blog/allfiksi/bestsellernovel.vue'
import fiksiterbaikPage from '../components/Blog/allfiksi/fiksiterbaik.vue'
import sayuranorganikPage from '../components/Blog/allfiksi/sayuranorganik.vue'

import avangerPage from '../components/Blog/allnonfiksi/avanger.vue'
import snmptnPage from '../components/Blog/allnonfiksi/snmptn.vue'

import bayarPage from '../components/Blog/allupdate/bayar.vue'
import racePage from '../components/Blog/allupdate/race.vue'


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
    path: '/Blog/allnonfiksi/avanger',
    name: 'avanger',
    component: avangerPage
  },
   {
    path: '/Blog/allnonfiksi/snmptn',
    name: 'snmptn',
    component: snmptnPage
  },

  {
    path: '/Blog/allupdate/bayar',
    name: 'bayar',
    component: bayarPage
  },
  {
    path: '/Blog/allupdate/race',
    name: 'race',
    component: racePage
  },

  {
    path: '/Blog/allfiksi/bestsellernovel',
    name: 'bestsellernovel',
    component: bestsellernovelPage
  },
 {
    path: '/Blog/allfiksi/fiksiterbaik',
    name: 'fiksiterbaik',
    component: fiksiterbaikPage
  },
  {
    path: '/Blog/allfiksi/sayuranorganik',
    name: 'sayuranorganik',
    component: sayuranorganikPage
  },
  
  {
    path: '/Blog/rekomondasibuku/1',
    name: '1',
    component: satuPage
  },
  {
    path: '/Blog/rekomondasibuku/2',
    name: '2',
    component: duaPage
  },
{
    path: '/Blog/rekomondasibuku/3',
    name: '3',
    component: tigaPage
  },
  {
    path: '/Blog/rekomondasibuku/4',
    name: '4',
    component: empatPage
  },
  {
    path: '/Blog/rekomondasibuku/5',
    name: '5',
    component: limaPage
  },
  {
    path: '/Blog/rekomondasibuku/6',
    name: '6',
    component: enamPage
  },
  {
    path: '/Blog/rekomondasibuku/7',
    name: 'tujuh',
    component: tujuhPage
  },
  {
    path: '/Blog/rekomondasibuku/8',
    name: '8',
    component: delapanPage
  },
  
  {
    path: '/Blog/rekomondasibuku/9',
    name: 'sembilan',
    component: sembilanPage
  },
   {
    path: '/Blog/rekomondasibuku/10',
    name: 'sepuluh',
    component: sepuluhPage
  },

  {
    path: '/Blog/alltrivia/a',
    name: 'a',
    component: aPage
  },
   {
    path: '/Blog/alltrivia/b',
    name: 'b',
    component: bPage
  },
   {
    path: '/Blog/alltrivia/c',
    name: 'c',
    component: cPage
  },
   {
    path: '/Blog/alltrivia/d',
    name: 'd',
    component: dPage
  },
   {
    path: '/Blog/alltrivia/e',
    name: 'e',
    component: ePage
  },
   {
    path: '/Blog/alltrivia/f',
    name: 'f',
    component: fPage
  },
   {
    path: '/Blog/alltrivia/g',
    name: 'g',
    component: gPage
  },
   {
    path: '/Blog/alltrivia/h',
    name: 'h',
    component: hPage
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

  {
    path: '/BantuanEBH/allbelanja/addbarang',
    name: 'addbarang',
    component: addbarangPage
  },
  {
    path: '/BantuanEBH/allbelanja/addcheckout',
    name: 'addcheckout',
    component: addcheckoutPage
  },
   {
    path: '/BantuanEBH/allbelanja/masalahpromo',
    name: 'masalahpromo',
    component: masalahpromoPage
  },

  {
    path: '/BantuanEBH/allditerima/menerimapesanana',
    name: 'menerimapesanana',
    component: menerimapesananaPage
  },
    {
    path: '/BantuanEBH/allditerima/racecoin',
    name: 'racecoin',
    component: racecoinPage
  },

  {
    path: '/BantuanEBH/allditerima/jadioffice',
    name: 'jadioffice',
    component: jadiofficePage
  },
  {
    path: '/BantuanEBH/allditerima/layananoffice',
    name: 'layananoffice',
    component: layananofficePage
  },
  {
    path: '/BantuanEBH/allditerima/produkdilarang',
    name: 'produkdilarang',
    component: produkdilarangPage
  },

  {
    path: '/BantuanEBH/allmember/aturkirim',
    name: 'aturkirim',
    component: aturkirimPage
  },
  
  {
    path: '/BantuanEBH/allmember/editalamatmember',
    name: 'editalamatmember',
    component: editalamatmemberPage
  },
  {
    path: '/BantuanEBH/allmember/fotoakun',
    name: 'fotoakun',
    component: fotoakunPage
  },
  {
    path: '/BantuanEBH/allmember/hapusalamat',
    name: 'hapusalamat',
    component: hapusalamatPage
  },
  {
    path: '/BantuanEBH/allmember/kebijakanprivasi',
    name: 'kebijakanprivasi',
    component: kebijakanprivasiPage
  },
  {
    path: '/BantuanEBH/allmember/namaakun',
    name: 'namaakun',
    component: namaakunPage
  },
  {
    path: '/BantuanEBH/allmember/passwordakun',
    name: 'passwordakun',
    component: passwordakunPage
  },
  {
    path: '/BantuanEBH/allmember/usernameakun',
    name: 'usernameakun',
    component: usernameakunPage
  },

  {
    path: '/BantuanEBH/allpembayaran/konfrimpayment',
    name: 'konfrimpayment',
    component: konfrimpaymentPage
  },
  {
    path: '/BantuanEBH/allpembayaran/pesananbelumdiproses',
    name: 'pesananbelumdiproses',
    component: pesananbelumdiprosesPage
  },
  {
    path: '/BantuanEBH/allpembayaran/transfertidaksesuai',
    name: 'transfertidaksesuai',
    component: transfertidaksesuaiPage
  },
  
 {
    path: '/BantuanEBH/allpengiriman/belumditerima',
    name: 'belumditerima',
    component: belumditerimaPage
  },
  {
    path: '/BantuanEBH/allpengiriman/melacak',
    name: 'melacak',
    component: melacakPage
  },
  {
    path: '/BantuanEBH/allpengiriman/resi',
    name: 'resi',
    component: resiPage
  },

    {
    path: '/BantuanEBH//allregistrasi/biayadaftar',
    name: 'biayadaftar',
    component: biayadaftarPage
  },
   {
    path: '/BantuanEBH//allregistrasi/email',
    name: 'email',
    component: emailPage
  },
  {
    path: '/BantuanEBH//allregistrasi/facebook',
    name: 'facebook',
    component: facebookPage
  },
  {
    path: '/BantuanEBH//allregistrasi/gmail',
    name: 'gmail',
    component: gmailPage
  },
   {
    path: '/BantuanEBH//allregistrasi/loginebh',
    name: 'loginebh',
    component: loginebhPage
  },
  {
    path: '/BantuanEBH//allregistrasi/syaratmember',
    name: 'syaratmember',
    component: syaratmemberPage
  },

  
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
