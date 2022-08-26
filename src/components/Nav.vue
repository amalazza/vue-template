<template>
    <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
      style="background-color: #2b4b83 !important"
    >
      <div class="left-top-bar">
        <router-link :to="'/' " class=""><span>Home</span></router-link>
        <a href="https://www.eurekabookhouse.co.id/blog"><span>| Blog</span></a>
        <a href="https://www.eurekabookhouse.co.id/bantuan"><span>| Bantuan</span></a>
        <a href=""><span>| Ikuti Kami</span></a>
        <a class="icon-top-nav p-lr-5 bor1 bg0 cl1 m-lr-5" target="_blank" href="https://www.facebook.com/ebhcom"><i class="fa fa-facebook"></i></a>
						<a class="icon-top-nav p-lr-5 bor1 bg0 cl1 m-r-5" target="_blank" href="https://twitter.com/eurekabookhouse"><i class="fa fa-twitter"></i></a>
						<a class="icon-top-nav p-lr-5 bor1 bg0 cl1 m-r-5" target="_blank" href="https://www.instagram.com/eurekabookhouse/"><i class="fa fa-instagram"></i></a>
      </div>
      <div class="center-nav">
        <center>CS: 021 - 8779 6010 / WA: 087888337555</center>
      </div>
      
			<div class="right-top-bar flex-w h-full flex-c-m trans- p-lr-80">
<<<<<<< HEAD
        <router-link :to="'/daftar'" class="flex-c-m trans-07 p-lr-50"><span>Daftar</span></router-link>
        <router-link :to="'/login'"><span>Login</span></router-link>
=======
        <a href="https://www.eurekabookhouse.co.id/register" class="flex-c-m trans-07 p-lr-50"><span>Daftar</span></a>
        <router-link :to="'/login' " class="flex-c-m trans-07 p-lr-50"><span>Login</span></router-link>
>>>>>>> d72df91959e45504419a53976800ba809f2f0e61
			</div>

    
    </b-navbar>
    <!-- ====== -->
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
      style="background-color: #2b4b83 !important"
    >
      <div class="left-top-bar mr-5">
        <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/logo/eurekabookhouse-white.png"
  alt="Vue Logo" width="190" height="70">
      </div>
 <b-dropdown text="KATALOG " variant="primary" class="m-2">
 <ul class="catalog__popover-list"></ul>
       <li class="catalog__popover-item has-child"></li>
    <b-dropdown-item>
      <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg" class="img-fluid" style="width: 20px; height: 20px"/>
      Buku Pelajaran
      <b-dropdown id ="dropdown-2" text="" class="m-md-2"  style="margin-left: 100px"  >
        <b-dropdown-item> Buku SD</b-dropdown-item> 
        <b-dropdown-item> Buku SMP</b-dropdown-item>
        <b-dropdown-item> Buku SMA</b-dropdown-item>
        <b-dropdown-item> Buku SMK</b-dropdown-item>
        <b-dropdown-item> Buku TK</b-dropdown-item>
        <b-dropdown-item> Buku Tematik</b-dropdown-item>
        <b-dropdown-item> Buku MI</b-dropdown-item>
    </b-dropdown>
    </b-dropdown-item>
    <b-dropdown-item>
      <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/009-microscope.svg" class="img-fluid" style="width: 20px; height: 20px"/>
      Perguruan Tinggi
      <b-dropdown id ="dropdown-2" text="" class="m-md-2"  style="margin-left: 10px"  >
        <b-dropdown-item> Administrasi</b-dropdown-item>
        <b-dropdown-item> Akutansi</b-dropdown-item>
        <b-dropdown-item> At a Glance</b-dropdown-item>
        <b-dropdown-item> Bahasa dan Sastra </b-dropdown-item>
        <b-dropdown-item> Ekonomi</b-dropdown-item>
        <b-dropdown-item> Hukum</b-dropdown-item>
        <b-dropdown-item> Kedokteran</b-dropdown-item>
         <b-dropdown-item> Keperawatan</b-dropdown-item>
        <b-dropdown-item> Lecture Notes</b-dropdown-item>
        <b-dropdown-item> Manajemen</b-dropdown-item>
        <b-dropdown-item> MIPA </b-dropdown-item>
        <b-dropdown-item> Teknik </b-dropdown-item>
        <b-dropdown-item> Psikologi</b-dropdown-item>
        <b-dropdown-item> Sospol</b-dropdown-item>
        <b-dropdown-item> Stastistik</b-dropdown-item>
        <b-dropdown-item> Schaum Outline </b-dropdown-item>
        <b-dropdown-item> Jurnalistik</b-dropdown-item>
        <b-dropdown-item> Islam</b-dropdown-item>
         <b-dropdown-item> Komputer</b-dropdown-item>
        
    </b-dropdown>
    </b-dropdown-item>
    <b-dropdown-item>
      <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/023-planet.svg" class="img-fluid" style="width: 20px; height: 20px"/>
      Buku Umum
      <b-dropdown id ="dropdown-2" text="" class="m-md-2"  style="margin-left: 10px"  >
        <b-dropdown-item> Buku Agama</b-dropdown-item>
        <b-dropdown-item> Makanan dan Minuman</b-dropdown-item>
        <b-dropdown-item> Hobi dan Hastakarya</b-dropdown-item>
        <b-dropdown-item> Komputer </b-dropdown-item>
        <b-dropdown-item> Parenting </b-dropdown-item>
        <b-dropdown-item> Buku Seri</b-dropdown-item>
        <b-dropdown-item> Kamus dan Bahasa</b-dropdown-item>
        <b-dropdown-item> Seri Karakter</b-dropdown-item>
        <b-dropdown-item> Komik </b-dropdown-item>
        <b-dropdown-item> Peta dan Atlas</b-dropdown-item>
        <b-dropdown-item> Pendidikan Umum </b-dropdown-item>
        <b-dropdown-item> Fashion dan Kecantikan</b-dropdown-item>
        <b-dropdown-item> Buku Umum lainnya</b-dropdown-item>
    </b-dropdown>
    </b-dropdown-item>
    <b-dropdown-item>
      <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/044-blackboard.svg" class="img-fluid" style="width: 20px; height: 20px"/>
      Buku Soal
      <b-dropdown id ="dropdown-2" text="" class="m-md-2"  style="margin-left: 10px"  >
        <b-dropdown-item> Soal SD</b-dropdown-item>
        <b-dropdown-item> Soal SMP</b-dropdown-item>
        <b-dropdown-item> Soal SMA</b-dropdown-item>
        <b-dropdown-item> Buku Soal Ujian UN </b-dropdown-item>
        <b-dropdown-item> Soal SMK</b-dropdown-item>
    </b-dropdown>
    </b-dropdown-item>
       <b-dropdown-item>
      <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/022-masks.svg" class="img-fluid" style="width: 20px; height: 20px"/>
      Novel
      <b-dropdown id ="dropdown-2" text="" class="m-md-2"  style="margin-left: 10px"  >
        <b-dropdown-item> Novel Remaja</b-dropdown-item>
        <b-dropdown-item> Novel Romance</b-dropdown-item>
        <b-dropdown-item> Novel Horor </b-dropdown-item>
        <b-dropdown-item> Terjemahan </b-dropdown-item>
        <b-dropdown-item> Lainnya</b-dropdown-item>
    </b-dropdown>
    </b-dropdown-item>
    <b-dropdown-item>
      <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/030-doll.svg" class="img-fluid" style="width: 20px; height: 20px"/>
      Buku Anak
      <b-dropdown id ="dropdown-2" text="" class="m-md-2"  style="margin-left: 10px"  >
        <b-dropdown-item> Seri Karakter</b-dropdown-item>
        <b-dropdown-item> Buku Seri</b-dropdown-item>
        <b-dropdown-item> Creativity Series</b-dropdown-item>
        <b-dropdown-item> Cerita Anak </b-dropdown-item>
        <b-dropdown-item> Edukasi Anak </b-dropdown-item>
        <b-dropdown-item> Buku Anak Lainnya </b-dropdown-item>
        <b-dropdown-item> Membaca dan Menulis </b-dropdown-item>
        <b-dropdown-item> Atlas dan Geografi</b-dropdown-item>
        <b-dropdown-item> Buku Stiker </b-dropdown-item>
        <b-dropdown-item> Cerita Rakyat Nusantara</b-dropdown-item>
        <b-dropdown-item> Creative Writing </b-dropdown-item>
        <b-dropdown-item> Keterampilan Anak </b-dropdown-item>
        <b-dropdown-item> Lift The Flap</b-dropdown-item>
        <b-dropdown-item> Menggambar dan Mewarnai </b-dropdown-item>
        <b-dropdown-item> Paket Buku Spesial </b-dropdown-item>
        <b-dropdown-item> Ensiklopedia </b-dropdown-item>
        <b-dropdown-item> Seri Ulysses Moore </b-dropdown-item>
    </b-dropdown>
    </b-dropdown-item>
    <b-dropdown-item>
      <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/007-control.svg" class="img-fluid" style="width: 20px; height: 20px"/>
      Mainan & Hobi
      <b-dropdown id ="dropdown-2" text="" class="m-md-2"  style="margin-left: 10px"  >
        <b-dropdown-item> Perlengkapan Menggambar </b-dropdown-item>
        <b-dropdown-item> Puzzle </b-dropdown-item>
        <b-dropdown-item> Diecast & Model Kit </b-dropdown-item>
        <b-dropdown-item> Figur </b-dropdown-item>
    </b-dropdown>
    </b-dropdown-item>
    <b-dropdown-item>
      <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/038-battery.svg" class="img-fluid" style="width: 20px; height: 20px"/>
      Gaya Hidup
      <b-dropdown id ="dropdown-2" text="" class="m-md-2"  style="margin-left: 10px"  >
        <b-dropdown-item> Tas </b-dropdown-item>
        <b-dropdown-item> Sepatu </b-dropdown-item>
        <b-dropdown-item> Tumbler </b-dropdown-item>
        <b-dropdown-item> Aksesoris </b-dropdown-item>
        <b-dropdown-item> Voucher</b-dropdown-item>
    </b-dropdown>
    </b-dropdown-item>
    <b-dropdown-item>
      <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg" class="img-fluid" style="width: 20px; height: 20px"/>
      Buku Import
      <b-dropdown id ="dropdown-2" text="" class="m-md-2"  style="margin-left: 10px"  >
        <b-dropdown-item> Fiction</b-dropdown-item>
    </b-dropdown>
    </b-dropdown-item>
    <b-dropdown-item>
      <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg" class="img-fluid" style="width: 20px; height: 20px"/>
      Buku Murah
      <b-dropdown id ="dropdown-2" text="" class="m-md-2"  style="margin-left: 10px"  >
        <b-dropdown-item> Agro Group </b-dropdown-item>
        <b-dropdown-item> Bhuana lmu Populer</b-dropdown-item>
        <b-dropdown-item> Elax Media </b-dropdown-item>
        <b-dropdown-item> Mizan Media Utama </b-dropdown-item>
        <b-dropdown-item> Promo Sales </b-dropdown-item>
    </b-dropdown>
    </b-dropdown-item>
    <b-dropdown-item>
      <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/046-football-award.svg" class="img-fluid" style="width: 20px; height: 20px"/>
      Olahraga dan Outdoor
      <b-dropdown id ="dropdown-2" text="" class="m-md-2"  style="margin-left: 10px"  >
        <b-dropdown-item> Gym dan Fitness</b-dropdown-item>
        <b-dropdown-item> Basket </b-dropdown-item>
        <b-dropdown-item> Sepak Bola dan Futsal </b-dropdown-item>
        
    </b-dropdown>
    </b-dropdown-item>
    <b-dropdown-item>
      <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg" class="img-fluid" style="width: 20px; height: 20px"/>
      ATK
      <b-dropdown id ="dropdown-2" text="" class="m-md-2"  style="margin-left: 10px"  >
        <b-dropdown-item> Alat dan Buku Tulis </b-dropdown-item>
        <b-dropdown-item> Perlengkapan Kantor </b-dropdown-item>
        <b-dropdown-item> IT Supply </b-dropdown-item>
    </b-dropdown>
    </b-dropdown-item>
    <b-dropdown-item>
      <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg" class="img-fluid" style="width: 20px; height: 20px"/>
      Sayuran Organik
      <b-dropdown id ="dropdown-2" text="" class="m-md-2"  style="margin-left: 10px"  >
        
    </b-dropdown>
    </b-dropdown-item>
    <b-dropdown-item>
      <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/024-confetti.svg" class="img-fluid" style="width: 20px; height: 20px"/>
      Buku Flat
      <b-dropdown id ="dropdown-2" text="" class="m-md-2"  style="margin-left: 10px"  >
    </b-dropdown>
    </b-dropdown-item>
     <b-dropdown-item>
      <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg" class="img-fluid" style="width: 20px; height: 20px"/>
      Off.Merchandise
      <b-dropdown id ="dropdown-2" text="" class="m-md-2"  style="margin-left: 10px"  >
        <b-dropdown-item> Local Merch </b-dropdown-item>
        <b-dropdown-item> Import Merch </b-dropdown-item>
    </b-dropdown>
    </b-dropdown-item>
     <b-dropdown-item>
      <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg" class="img-fluid" style="width: 20px; height: 20px"/>
      Actione Figure
      <b-dropdown id ="dropdown-2" text="" class="m-md-2"  style="margin-left: 10px"  >
    </b-dropdown>
    </b-dropdown-item>
     <b-dropdown-item>
      <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg" class="img-fluid" style="width: 20px; height: 20px"/>
      eBook
      <b-dropdown id ="dropdown-2" text="" class="m-md-2"  style="margin-left: 10px"  >
        <b-dropdown-item> Majalah </b-dropdown-item>
        <b-dropdown-item> Koran </b-dropdown-item>
        <b-dropdown-item> Buku Sekolah </b-dropdown-item>
        <b-dropdown-item> Buku Umum </b-dropdown-item>

    </b-dropdown>
    </b-dropdown-item>
  </b-dropdown>
	
                      <form class="col-md-4 ml-5" action="https://www.eurekabookhouse.co.id/cari/resultp" method="get">
					<div class="bor8 of-hidden pos-relative">
						<input id="search-box" class="search-box stext-107 cl2 plh4 bg9 hov-bg0 size-111 p-l-28 p-r-55" type="text" name="keyword" autocomplete="off" placeholder="Cari dengan kode atau judul produk" required>
						<button class="btn-cari-header stext-106 cl2 bgu3 hov-btn3 ab-t-r fs-18 p-lr-15 hov-cl1 trans-04">
							<i class="fa fa-search fs-21"></i>
						</button>
					</div>
					<div id="suggesstion-box" class="suggesstion-box"></div>
				</form>
        <!-- js-show-cart -->
				<router-link :to="'/notification'" class="ml-3 mr-3">
					<div id="cart" class="icon-header-item cl2 hov-cl1 trans-04 p-l-11 p-r-11">
						<i class="fa fa-bell cl0 fs-21"></i>
					</div>
				</router-link>
        <div style="width:15%; border:1px solid #fff">
        <router-link :to="'/cart'" class="wrap-icon-header flex-c-m p-3" data-id="">
					<div id="cart" class="icon-header-item cl2 hov-cl1 trans-04 p-l-11 p-r-11">
						<i class="fa fa-shopping-cart cl0"></i>
					</div>
					<span class="stext-107 cl0">Keranjang <span id="cart_notify" class="badge badge-warning superscript m-t--16 m-l-5 fs-20"></span></span>
        </router-link>
        </div>
    </b-navbar>
 
	
    </div>
  </template>


<script scope>
// import Flickity from 'vue-flickity';
export default {
  name: "navBar",
  data() {
      return {
        name: 'BootstrapVue',
        isDropdown2Visible: false,
        // flickityOptions: {
        //   initialIndex: 3,
        //   prevNextButtons: true,
        //   pageDots: false,
        //   wrapAround: false
          
        //   // any options from Flickity can be used
        // }
      }
    },
    components: {
    //   Flickity
    },
    mounted() {
      this.$root.$on('bv::dropdown::show', bvEvent => {
        if(bvEvent.componentId === 'dropdown-2') {
          this.isDropdown2Visible = true;
        }
        })
      this.$root.$on('bv::dropdown::hide', bvEvent => {
        if(bvEvent.componentId === 'dropdown-2') {
          this.isDropdown2Visible = false;
        }
        if(this.isDropdown2Visible) {
          bvEvent.preventDefault()
        }
        })
    },
    methods: {
    // next() {
    //   this.$refs.flickity.next();
    // },
    
    // previous() {
    //   this.$refs.flickity.previous();
    // }
  }
};
</script>

<style type="text/css">
	.popUpBannerBox {
	position: fixed;
	background: rgba(0,0,0,0.9);
	width: 100%;
	height: 100%;
	top: 100%;
	left: 100%;
	color: #FFF;
	z-index: 999999;
	display: none;
}
.popUpBannerInner {
	max-width: 36px;
	margin: 0 auto;
}
.popUpBannerContent {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.gambar-pop{
	max-height: 500px;
}
@media (max-width: 575px) {
	.gambar-pop{
	height: 300px;
	width: 300px;
	object-fit: contain;
}
}
.closeButton {
	position: absolute;
	right: -15px;
	top: -15px;
	color: red;
	text-decoration: none;
	font-size: 18px;
}
.closeButton img{
	height: 45px;
}
</style>

<style scoped>
body { padding: 1rem; }
.left-top-bar {
    line-height: 1.8;
    margin-left: 10rem;
}
.left-top-bar a span {
    font-family: Poppins-Regular;
    font-size: 13px;
    line-height: 1.8;
    color: #fff;
    margin-right: 10px;
}

.right-top-bar{
  margin-left: 10rem;
}

.right-top-bar a span{
  font-size: 13px;
}

.center-nav {
    margin-left: 10rem;
    font-size: 13px;
    color: #fff;
}
.dropdown-menu.show {
    display: block;
    margin-left: 100px;
}
</style>

<style >
	.sobatgrosir{display: none;}
	.v-slider img{width: 100%;}
	.gbr-inspirasi{height: 70px}
	.flickity-page-dots{bottom: 45px !important}
	.main-carousel .flickity-prev-next-button{top: 40% !important}
	@media (max-width: 575px) {
		.ban_3{display: none;}
		.gbr-inspirasi{height: 40px}
		.flickity-page-dots{bottom: 15px !important}
	}
	.bgu4{background-color: #C4D9E9}
	.{border-radius: 3px}
	.ava-promo-img img{position: absolute;bottom:;width: 100%;height: auto;object-fit: contain;}
	.ads-pic{height: 332px;}
	.product-sec{height: 342px;}
	.ads-pic img{height: 50%;width: 50%;}
	.pic-todaypromo img{width: 100%}
</style>	

<style type="text/css">
	/**/

	.header {
		position: relative;
		z-index: 2;
		display: flex;
	}
/*	.header__catalog {
		width: 250px;
		height: 64px;
		}*/

		.catalog {
			position: relative;
		}
		.catalog__dropdown {
			height: inherit;
/*			background-color: #1d5987;*/
			padding: 8px 1px;
			border-radius: 5px;
		}
		.catalog__dropdown:hover {
			opacity: 0.85;
			background-color: #254a6f;
		}
		.catalog__dropdown-link {
			display: flex;
			height: inherit;
			padding: 0 15px;
			text-decoration: none;
			text-transform: uppercase;
			color: #ffffff;
			align-items: center;
			justify-content: center;
		}
		.catalog__dropdown-link:hover{
			color: #fff;
			text-decoration: none;
		}
		.catalog__dropdown-link::before, .catalog__dropdown-link::after {
			content: "";
			background-repeat: no-repeat;
			background-position: 0 0;
			background-size: contain;
		}
		.catalog__dropdown-link::before {
			content: "";
			width: 24px;
			height: 18px;
			margin-right: 4px;
			background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGc+ICA8dGl0bGU+YmFja2dyb3VuZDwvdGl0bGU+ICA8cmVjdCBmaWxsPSJub25lIiBpZD0iY2FudmFzX2JhY2tncm91bmQiIGhlaWdodD0iNDAyIiB3aWR0aD0iNTgyIiB5PSItMSIgeD0iLTEiLz4gPC9nPiA8Zz4gIDx0aXRsZT5MYXllciAxPC90aXRsZT4gIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGlkPSJzdmdfMiIgZD0ibTQxNy40LDIyNGwtMzIyLjgsMGMtMTYuOSwwIC0zMC42LDE0LjMgLTMwLjYsMzJjMCwxNy43IDEzLjcsMzIgMzAuNiwzMmwzMjIuOCwwYzE2LjksMCAzMC42LC0xNC4zIDMwLjYsLTMyYzAsLTE3LjcgLTEzLjcsLTMyIC0zMC42LC0zMnoiLz4gIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGlkPSJzdmdfMyIgZD0ibTQxNy40LDk2bC0zMjIuOCwwYy0xNi45LDAgLTMwLjYsMTQuMyAtMzAuNiwzMmMwLDE3LjcgMTMuNywzMiAzMC42LDMybDMyMi44LDBjMTYuOSwwIDMwLjYsLTE0LjMgMzAuNiwtMzJjMCwtMTcuNyAtMTMuNywtMzIgLTMwLjYsLTMyeiIvPiAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgaWQ9InN2Z180IiBkPSJtNDE3LjQsMzUybC0zMjIuOCwwYy0xNi45LDAgLTMwLjYsMTQuMyAtMzAuNiwzMmMwLDE3LjcgMTMuNywzMiAzMC42LDMybDMyMi44LDBjMTYuOSwwIDMwLjYsLTE0LjMgMzAuNiwtMzJjMCwtMTcuNyAtMTMuNywtMzIgLTMwLjYsLTMyeiIvPiA8L2c+PC9zdmc+);
		}
		.catalog__dropdown-link::after {
			content: "";
			width: 12px;
			height: 12px;
			margin-left: 6px;
			background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGc+ICA8dGl0bGU+YmFja2dyb3VuZDwvdGl0bGU+ICA8cmVjdCBmaWxsPSJub25lIiBpZD0iY2FudmFzX2JhY2tncm91bmQiIGhlaWdodD0iNDAyIiB3aWR0aD0iNTgyIiB5PSItMSIgeD0iLTEiLz4gPC9nPiA8Zz4gIDx0aXRsZT5MYXllciAxPC90aXRsZT4gIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGlkPSJzdmdfMSIgZD0ibTI1NiwyOTguM2wwLDBsMCwwbDE3NC4yLC0xNjcuMmM0LjMsLTQuMiAxMS40LC00LjEgMTUuOCwwLjJsMzAuNiwyOS45YzQuNCw0LjMgNC41LDExLjMgMC4yLDE1LjVsLTIxMi43LDIwNC4yYy0yLjIsMi4yIC01LjIsMy4yIC04LjEsM2MtMywwLjEgLTUuOSwtMC45IC04LjEsLTNsLTIxMi43LC0yMDQuMmMtNC4zLC00LjIgLTQuMiwtMTEuMiAwLjIsLTE1LjVsMzAuNiwtMjkuOWM0LjQsLTQuMyAxMS41LC00LjQgMTUuOCwtMC4ybDE3NC4yLDE2Ny4yeiIvPiA8L2c+PC9zdmc+);
		}
		.catalog__popover {
			position: absolute;
			z-index: 1;
			top: 100%;
			display: none;
			/*width: 100%;*/
			width: 210px;
			border-radius: 0 0 2px 2px;
			background: #ffffff;
			box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
		}
		.catalog__popover.is-visible {
			display: block;
		}
		.catalog__popover-list {
			height: 100%;
			margin: 0;
			padding: 0;
			list-style: none;
		}
		.catalog__popover-link {
			font-size: 14px;
			line-height: 20px;
			position: relative;
			display: block;
			padding: 8px 16px;
			text-decoration: none;
			color: #333333;
		}
		.catalog__popover-link--view-all {
			border-top: 1px solid #e2e2e2;
		}
		.catalog__popover-popup {
			position: absolute;
			z-index: 1;
			top: 0;
			bottom: 0;
			left: calc(100% - 1px);
			display: none;
			width: 210px;
			height: 100%;
			border-radius: 0 0 2px 2px;
			background: #ffffff;
			box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
		}
		.catalog__popover-popup .catalog__popover-list {
			overflow-y: auto;
			height: 100%;
			border-radius: 0 0 0 2px;
		}
		.catalog__popover-item.is-hover {
			background-color: rgba(0, 0, 0, 0.12);
		}
		.has-child.is-hover > .catalog__popover-popup {
			display: block;
		}
		.catalog__popover-item.has-child > .catalog__popover-link::after {
			content: "";
			position: absolute;
			top: 50%;
			right: 2px;
			width: 16px;
			height: 16px;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
			opacity: 0.5;
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cG9seWdvbiBwb2ludHM9IjE2MCwxMTUuNCAxODAuNyw5NiAzNTIsMjU2IDE4MC43LDQxNiAxNjAsMzk2LjcgMzEwLjUsMjU2ICIvPjwvc3ZnPg==);
			background-repeat: no-repeat;
			background-position: 0 0;
			background-size: contain;
		}

		.fade-page {
			position: fixed;
			z-index: 1;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
			opacity: 0.6;
			display: none;
			background-color: #000000;
			transition: opacity 1s ease-out;
		}
		.fade-page.is-active {
			display: block;
			-webkit-animation: fadeIn 1s;
			animation: fadeIn 1s;
		}
		.size-icon{height: 21px;}
	</style>