<template>
  <div>
<section class="bg6 p-t-10 p-b-10">
                        <form id="form-cart" class="p-b-85">
                          <div class="container">
                            <div class="row">
                                    <div class="col-lg-7 col-xl-3 m-lr-auto m-b-50 d-none d-lg-block">
                              <div class="bg0 bor10 p-all-15 m-b-10 p-lr-15-sm">
                                <p class="stext-102 cl2 text-left">
                                  Halo, <b>tasyakhaerani66</b>
                                </p>
                                <hr>
                                <p class="stext-101 cl2 p-b-6 text-left"><b>Akun</b></p>
                                <div class="flex-w flex-t bor12 p-b-13 stext-102 text-left">
                                  <ul>
                                    <li><a class="cl1" href="https://www.eurekabookhouse.co.id/account/">Dashboard</a></li>
                                    <li><a class="cl1" href="https://www.eurekabookhouse.co.id/frontend/account/detail">Profil Saya</a></li>
                      <!-- 							<li><a class="cl1" href="">Alamat Akun</a></li> -->
                                    <li><a class="cl1" href="https://www.eurekabookhouse.co.id/frontend/account/dilihat">Terakhir Dilihat</a></li>
                                    <li><a class="cl1" href="https://www.eurekabookhouse.co.id/crowdfunding/main/mydonasi">Penggalangan Dana</a></li>
                                    <li><a class="cl1" href="https://www.eurekabookhouse.co.id/frontend/account/donasi">Donasi</a></li>
                                  </ul>
                                </div>
                                <p class="stext-101 cl2 p-tb-6 text-left"><b>Transaksi</b></p>
                                <div class="flex-w flex-t bor12 p-b-13 stext-102 text-left">
                                  <ul>
                                    <li><a class="cl1" href="https://www.eurekabookhouse.co.id/frontend/account/alamat">Alamat Kirim</a></li>
                                    <li><a class="cl1" href="https://www.eurekabookhouse.co.id/account/bayar">Metode Bayar</a></li>
                                    <li><a class="cl1" href="https://www.eurekabookhouse.co.id/frontend/account/kupon">Kupon</a></li>
                                    <!-- <li><a class="cl1" href="">Eureka! Poin</a></li> -->
                                  </ul>
                                </div>
                                <p class="stext-101 cl2 p-t-6 p-b-6 text-left"><b>Pesanan</b></p>
                                <div class="flex-w flex-t p-b-13 stext-102 text-left">
                                  <ul>
                                    <li><a class="cl1" href="https://www.eurekabookhouse.co.id/frontend/account/history/get/0">History Pesanan</a></li>
                                    <li><a class="cl1" href="https://www.eurekabookhouse.co.id/frontend/account/produkdigital">Produk Digital</a></li>
                                    <li><a class="cl1" href="https://www.eurekabookhouse.co.id/frontend/account/ticket">Pesanan Tiket</a></li>
                                    <li><a class="cl1" href="https://www.eurekabookhouse.co.id/frontend/account/notification/">Pemberitahuan</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                      
                      
                                    <div class="col-lg-10 col-xl-9 p-lr-0-sm">
                                <h3 class="ltext-101 cl1 m-b-10 text-left">Notification</h3>
                                <div class="list-group">
									<router-link :to="'/pesananbatal'" class="list-group-item ">
										<div class="media">
											<img src="https://cdn.eurekabookhouse.co.id/ebh/icon/other/cancel.svg" class="mr-3 icon-notif" alt="...">
										<div class="media-body">
								<p class="cl2 stext-101 "><b>Pesanan  Kadaluarsa</b></p>
</div>
<small class="text-muted"><i class="fa fa-history"></i> seminggu</small>
							</div>
							<p class="cl2 stext-101  text-muted"><small> Pesanan anda dengan invoice: 2208260001 telah kadaluarsa </small></p>
							
									</router-link>
								</div>
                              </div>
                            </div>
                          </div>
                        </form>
</section>
</div>
                      </template>


<script scope>
export default {
  name: "notificationPage",
}
</script>

<style type="text/css">
  .icon-notif{height: 50px}
  .bg-belum{background: #fff9cc;}
  .list-group-item{padding: 5px}
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
  <style type="text/css">
    .btn-navbawah.active {
      background: #207DBB;
      color: #fff
    }
  
    .bg-tematik {
      /* background-color: #351106 !important; */
      /* background-color: -webkit-linear-gradient(to right, #93291E, #ED213A); 
          background-color: linear-gradient(to right, #93291E, #ED213A);
          background-image: url('./assets/uplod/tema/imlek/texture-tema.png'); */
    }
  
    /* .bg-tematik h3, .bg-tematik p, .bg-tematik span, .bg-tematik small,{
        color: black !important;
      }
      .bg-tematik .icon-top-nav{display: inline-block;color: #0f90dd;width: 25px;text-align: center} */
  </style>