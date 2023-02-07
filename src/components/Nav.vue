<template>
	<div>

			<div class="d-none d-md-block d-lg-block d-xl-block">
		<b-navbar toggleable="lg" type="dark" variant="info" style="background-color: #2b4b83 !important" >
			<div class="left-top-bar">
					<router-link :to="'/' "  class="
					-cl0 cl0 p-r-10">Home</router-link> |
					<router-link :to="'/blog'" class=""><span class="stext-107 hov-cl0 cl0 p-r-10"> Blog </span></router-link> |
					<router-link :to="'/BantuanEBH/bantuan'" class=""><span class="stext-107 hov-cl0 cl0 p-lr-10">Bantuan</span></router-link>
					|
					<span class="stext-107 cl0 m-l-5">Ikuti Kami
						<a class="icon-top-nav p-lr-5 bor1 bg0 cl1 m-lr-5" target="_blank" href="https://www.facebook.com/ebhcom"><i
								class="fa fa-facebook"></i></a>
						<a class="icon-top-nav p-lr-5 bor1 bg0 cl1 m-r-5" target="_blank" href="https://twitter.com/eurekabookhouse"><i
								class="fa fa-twitter"></i></a>
						<a class="icon-top-nav p-lr-5 bor1 bg0 cl1 m-r-5" target="_blank"
							href="https://www.instagram.com/eurekabookhouse/"><i class="fa fa-instagram"></i></a>
					</span>
				</div>
			<div class="center-nav">
				<center> CS: 021 - 8779 6010 / WA: 087888337555</center>
			</div>

			<div class="right-top-bar flex-w h-full flex-c-m trans- p-lr-20">
				<router-link :to="'/Users/Dashboarduser' " class="flex-c-m trans- p-lr-17">
					<img style="height: 30px;width: 30px;margin-right: 8px;border-radius: 60%;"
						src="https://www.eurekabookhouse.co.id/assets/uplod/default-avatar.png"
						class="img-circle img-thumbnail p-lr-20"> <span>tasyakhaerani66</span>
				</router-link>
				<router-link :to="'/UserEBH/Login' " class="flex-c-m trans- p-lr-17">Login</router-link>
				<router-link :to="'/UserEBH/Daftar' " class="flex-c-m trans- p-lr-17">Register</router-link>
						
			</div>



		</b-navbar>
		</div>

		
		
		<b-navbar toggleable="lg" type="dark" variant="info" style="background-color: #2b4b83 !important" >

			<div class="left-top-bar mr-5">
				<img class="img-fluid" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/logo/eurekabookhouse-white.png"
					alt="Vue Logo" width="190" height="70">
			</div>
			<div class="d-none d-md-block d-lg-block d-xl-block">
			<header class="header stext-106 ">
				<div class="catalog header__catalog">
					<div class="catalog__dropdown">
						<!-- <a class="catalog__dropdown-link" href="#">KATALOG    </a> -->
					</div>
					<div @mouseover="onOver" @mouseleave="onLeave">
						<b-dropdown dropright text="KATALOG" variant="link text-white" style="width: 14vw !important;"
							class="catalog__dropdown-link text-white" ref="dropdown">
							<li class="catalog__popover-item has-child"></li>
							<ul class="scrollable-menu position-relative mt-0 border-0">
							<b-dropdown-item style="width: 300px; height: 35px " v-for="(item, index) in kategoriMaster" :key="index" >
								
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg"
									class="img-fluid" style="width: 20px" />
								{{item.name}}
							</b-dropdown-item>
							</ul>
						</b-dropdown>
					</div>

					
				</div>
			</header>
			</div>


			<form class="col-md-4 ml-9" action="https://www.eurekabookhouse.co.id/cari/resultp" method="get">
				<div class="bor of-hidden pos-relative">
					<center>
						<input id="search-box" class="search-box stext-107 cl2 plh4 bg9 hov-bg0 size-111 p-l-28 p-r-55"
							type="text" name="keyword" autocomplete="off"
							placeholder="Cari dengan kode atau judul produk" required>
						<button
							class="btn-cari-header stext-100 cl2 bgu3 hov-btn3 ab-t-r fs-18 p-lr-15 hov-cl1 trans-04">
							<i class="fa fa-search fs-0"></i>
						</button>
					</center>
				</div>
				<div id="suggesstion-box" class="suggesstion-box"></div>
			</form>
			<!-- js-show-cart -->
			<router-link :to="'/Users/Dashboarduser' " class="flex-c-m trans- p-lr-17"></router-link>
			<div class="d-none d-md-block d-lg-block d-xl-block">
			<router-link :to="'/Users/notificationprofile'" class="ml-3 mr-3">
				<div id="cart" class="icon-header-item cl2 hov-cl1 trans-04 p-l-11 p-r-11">
					<i class="fa fa-bell cl0 fs-21"></i>
				</div>
			</router-link>
			</div>
			<div class="d-none d-md-block d-lg-block d-xl-block">
			<div style="width:150px ; height:55px ; border:1px solid #fff" pos-relative>
				<router-link :to="'/cart'" class="wrap-icon-header flex-c-m p-3" data-id="">
					<div id="cart" class="icon-header-item cl2 hov-cl1 trans-04 p-l-11 p-r-11">
						<i class="fa fa-shopping-cart cl0"></i>
					</div>
					<span class="stext-107 cl0">Keranjang <span id="cart_notify"
							class="badge badge-warning superscript m-t--16 m-l-5 fs-20"></span></span>
				</router-link>
			</div>
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
			kategoriMaster: []
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
		this.getKategori(),
			this.$root.$on('bv::dropdown::show', bvEvent => {
				if (bvEvent.componentId === 'dropdown-2') {
					this.isDropdown2Visible = true;
				}
			})
		this.$root.$on('bv::dropdown::hide', bvEvent => {
			if (bvEvent.componentId === 'dropdown-2') {
				this.isDropdown2Visible = false;
			}
			if (this.isDropdown2Visible) {
				bvEvent.preventDefault()
			}
		})
	},
	methods: {
		getKategori() {
			var requestOptions = {
				method: 'GET',
				redirect: 'follow'
			};

			fetch("https://elibx.jaja.id/bupel/category/get-categories", requestOptions)
				.then((response) => response.text())
				.then((result) => {
					const res = JSON.parse(result);
					this.kategoriMaster = res.data
				})
				.catch(error => console.log('error', error));
		},
		onOver() {
			this.$refs.dropdown.visible = true;
		},
		onLeave() {
			this.$refs.dropdown.visible = false;
		}
		// next() {
		//   this.$refs.flickity.next();
		// },

		// previous() {
		//   this.$refs.flickity.previous();
		// }
	}
};
</script>

<style type="text/css" scoped>
.scrollable-menu {
	height: auto;
	max-height: 80vh;
	overflow-y: auto;
	overflow-x: hidden;
}

.rounded-lg {
	border-radius: 2rem !important;
}
.catalog__dropdown-link {
	color: white !important;
	content: "";
	width: 24px;
	height: 18px;
	margin-right: 4px;
}

.b-dropdown {
	float: right;
}

.dropdown-menu {
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 1000;
	display: none;
	float: left;
	min-width: 20rem;
	padding: 0.5rem 0;
	margin: 0.125rem 0 0;
	font-size: 1rem;
	color: #212529;
	text-align: left;
	list-style: none;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid rgba(0, 0, 0, 0.15);
	width: 350px !important;
	border-radius: 0.25rem;
}

.dropdown-menu.show {
	width: 350px !important;

}

.ul.dropdown-menu.show {
	width: 350px !important;
}

.popUpBannerBox {
	position: fixed;
	background: rgba(0, 0, 0, 0.9);
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
	transform: translate(-50%, -50%);
}

.gambar-pop {
	max-height: 500px;
}

@media (max-width: 575px) {
	.gambar-pop {
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

.closeButton img {
	height: 45px;
}

body {
	padding: 1rem;
}

.left-top-bar {
	line-height: 1.8;
	margin-left: 10rem;
}

.left-top-bar a span {
	font-family: sans-serif;
	font-size: 13px;
	line-height: 1.8;
	color: #fff;
	margin-right: 10px;
}

.right-top-bar {
	margin-left: 10rem;
}

.right-top-bar a span {
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
	width: 350px !important;
}

.sobatgrosir {
	display: none;
}

.v-slider img {
	width: 100%;
}

.gbr-inspirasi {
	height: 70px
}

.flickity-page-dots {
	bottom: 45px !important
}

.main-carousel .flickity-prev-next-button {
	top: 40% !important
}

@media (max-width: 575px) {
	.ban_3 {
		display: none;
	}

	.gbr-inspirasi {
		height: 40px
	}

	.flickity-page-dots {
		bottom: 15px !important
	}
}

.bgu4 {
	background-color: #C4D9E9
}

.ava-promo-img img {
	position: absolute;
	width: 100%;
	height: auto;
	object-fit: contain;
}

.ads-pic {
	height: 332px;
}

.product-sec {
	height: 342px;
}

.ads-pic img {
	height: 50%;
	width: 50%;
}

.pic-todaypromo img {
	width: 100%
}

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

.catalog__dropdown-link:hover {
	color: #fff;
	text-decoration: none;
}

.catalog__dropdown-link::before,
.catalog__dropdown-link::after {
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

.has-child.is-hover>.catalog__popover-popup {
	display: block;
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

.size-icon {
	height: 21px;
}
</style>