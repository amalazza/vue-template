<template>
	<div>
		<div class="d-none d-lg-block">
			<section class="pt-4 pb-2">
				<div class="container ">
					<carousel-3d :perspective="25" :space="700" :autoplay="true" :autoplay-timeout="1500"
						style="max-height: 50%; height: 58vh;">
						<slide :index="0" style="width: 230%; height: auto; border-radius: 20px ">
							<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/0_slider14_10_08.jpg"
								class="img-fluid" alt="Responsive image" />
						</slide>
						<slide :index="1" style="width: 230%; height: auto; border-radius: 20px">
							<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/0_slider10_38_40.jpg"
								class="img-fluid" alt="Responsive image" />
						</slide>
						<slide :index="2" style="width: 230%; height: auto; border-radius: 20px">
							<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/0_slider16_37_07.png"
								class="img-fluid" alt="Responsive image" />
						</slide>
						<slide :index="3" style="width: 230%; height: auto; border-radius: 20px">
							<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/_slider16_37_41.png"
								class="img-fluid" alt="Responsive image" />
						</slide>
						<slide :index="4" style="width: 230%; height: auto; border-radius: 20px">
							<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/_slider16_38_01.png"
								class="img-fluid" alt="Responsive image" />
						</slide>
						<slide :index="5" style="width: 230%; height: auto; border-radius: 20px">
							<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/0_slider15_36_13.jpg"
								class="img-fluid" alt="Responsive image" />
						</slide>
						<slide :index="6" style="width: 230%; height: auto; border-radius: 20px">
							<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/_slider14_55_56.jpeg"
								class="img-fluid" alt="Responsive image" />
						</slide>
						<slide :index="7" style="width: 230%; height: auto; border-radius: 20px">
							<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/_slider15_36_34.jpg"
								class="img-fluid" alt="Responsive image" />
						</slide>
						<slide :index="8" style="width: 230%; height: auto; border-radius: 20px">
							<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/_slider09_39_39.jpg"
								class="img-fluid" alt="Responsive image" />
						</slide>
					</carousel-3d>
				</div>
			</section>
		</div>
		<div class="d-lg-none">
		<section class="pt-4 pb-2">
			<div class="container ">
		<b-carousel id="carousel-1" v-model="slide" :interval="1500" img-width="1024" img-height="480" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
		<b-carousel-slide img-src="https://www.eurekabookhouse.co.id/assets/uplod/slider/0_slider14_10_08.jpg"></b-carousel-slide>
		<b-carousel-slide img-src="https://www.eurekabookhouse.co.id/assets/uplod/slider/0_slider10_38_40.jpg"></b-carousel-slide>
		<b-carousel-slide img-src="https://www.eurekabookhouse.co.id/assets/uplod/slider/0_slider16_37_07.png"></b-carousel-slide>
		<b-carousel-slide img-src="https://www.eurekabookhouse.co.id/assets/uplod/slider/_slider16_37_41.png"></b-carousel-slide>
		<b-carousel-slide img-src="https://www.eurekabookhouse.co.id/assets/uplod/slider/_slider16_38_01.png"></b-carousel-slide>
		<b-carousel-slide img-src="https://www.eurekabookhouse.co.id/assets/uplod/slider/0_slider15_36_13.jpg"></b-carousel-slide>
		<b-carousel-slide img-src="https://www.eurekabookhouse.co.id/assets/uplod/slider/_slider14_55_56.jpeg"></b-carousel-slide>
		<b-carousel-slide img-src="https://www.eurekabookhouse.co.id/assets/uplod/slider/_slider15_36_34.jpg"></b-carousel-slide>
		<b-carousel-slide img-src="https://www.eurekabookhouse.co.id/assets/uplod/slider/_slider09_39_39.jpg"></b-carousel-slide>
		</b-carousel>
		</div>
	</section>
	</div>

		<section class="py-3">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-left">
						<h3 class="fs">Kategori </h3>
						<div class="kategoir row p-lr-3">
							<div class="col-3 col-md-2 px-2 mb-2 text-center">
								<router-link :to="'/kategori'">
									<div class="card ">
										<div class="card-body p-3">
											<div class="">
												<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg"
													class="img-fluid" style="height: 40px">
											</div>
										</div>
									</div>
									<small class="cl5">Buku Pelajaran</small>
								</router-link>
							</div>
							<div class="col-3 col-md-2 px-2 mb-2 text-center">
								<a href="https://www.eurekabookhouse.co.id/category/menu/buku-umum">
									<div class="card ">
										<div class="card-body p-3">
											<div class="">
												<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/023-planet.svg"
													class="img-fluid" style="height: 40px">
											</div>
										</div>
									</div>
									<small class="cl5">Buku Umum</small>
								</a>
							</div>
							<div class="col-3 col-md-2 px-2 mb-2 text-center">
								<a href="https://www.eurekabookhouse.co.id/category/menu/buku-soal">
									<div class="card ">
										<div class="card-body p-3">
											<div class="">
												<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/044-blackboard.svg"
													class="img-fluid" style="height: 40px">
											</div>
										</div>
									</div>
									<small class="cl5">Buku Soal</small>
								</a>
							</div>
							<div class="col-3 col-md-2 px-2 mb-2 text-center">
								<a href="https://www.eurekabookhouse.co.id/category/menu/mainan-dan-hobi">
									<div class="card ">
										<div class="card-body p-3">
											<div class="">
												<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/007-control.svg"
													class="img-fluid" style="height: 40px">
											</div>
										</div>
									</div>
									<small class="cl5">Mainan & Hobi</small>
								</a>
							</div>
							<div class="col-3 col-md-2 px-2 mb-2 text-center">
								<a href="https://www.eurekabookhouse.co.id/category/menu/buku-anak">
									<div class="card ">
										<div class="card-body p-3">
											<div class="">
												<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/030-doll.svg"
													class="img-fluid" style="height: 40px">
											</div>
										</div>
									</div>
									<small class="cl5">Buku Anak</small>
								</a>
							</div>
							<div class="col-3 col-md-2 px-2 mb-2 text-center">
								<a href="https://www.eurekabookhouse.co.id/category/menu/novel">
									<div class="card ">
										<div class="card-body p-3">
											<div class="">
												<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/022-masks.svg"
													class="img-fluid" style="height: 40px">
											</div>
										</div>
									</div>
									<small class="cl5">Novel</small>
								</a>
							</div>
							<div class="col-3 col-md-2 px-2 mb-2 text-center">
								<a href="https://www.eurekabookhouse.co.id/category/menu/perguruan-tinggi">
									<div class="card ">
										<div class="card-body p-3">
											<div class="">
												<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/009-microscope.svg"
													class="img-fluid" style="height: 40px">
											</div>
										</div>
									</div>
									<small class="cl5">Perguruan Tinggi</small>
								</a>
							</div>
							<div class="col-3 col-md-2 px-2 mb-2 text-center">
								<a href="https://www.eurekabookhouse.co.id/category/menu/atk">
									<div class="card ">
										<div class="card-body p-3">
											<div class="">
												<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg"
													class="img-fluid" style="height: 40px">
											</div>
										</div>
									</div>
									<small class="cl5">ATK</small>
								</a>
							</div>
							<div class="col-3 col-md-2 px-2 mb-2 text-center">
								<a href="https://www.eurekabookhouse.co.id/category/menu/serba-15rb">
									<div class="card ">
										<div class="card-body p-3">
											<div class="">
												<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/024-confetti.svg"
													class="img-fluid" style="height: 40px">
											</div>
										</div>
									</div>
									<small class="cl5">Buku Flat</small>
								</a>
							</div>
							<div class="col-3 col-md-2 px-2 mb-2 text-center">
								<a href="https://www.eurekabookhouse.co.id/category/menu/ebook">
									<div class="card ">
										<div class="card-body p-3">
											<div class="">
												<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg"
													class="img-fluid" style="height: 40px">
											</div>
										</div>
									</div>
									<small class="cl5">eBook</small>
								</a>
							</div>
							<div class="col-3 col-md-2 px-2 mb-2 text-center">
								<a href="https://www.eurekabookhouse.co.id/eurekamart">
									<div class="card ">
										<div class="card-body p-3">
											<div class="">
												<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/logo/eurekamart-color.jpg"
													class="img-fluid" style="height: 40px">
											</div>
										</div>
									</div>
									<small class="cl5">Mart</small>
								</a>
							</div>
							<div class="col-3 col-md-2 px-2 mb-2 text-center">
								<a href="https://www.eurekabookhouse.co.id/dashboard/all_kategori">
									<div class="card ">
										<div class="card-body p-3">
											<div class="">
												<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/021-puzzle.svg"
													class="img-fluid" style="height: 40px">
											</div>
										</div>
									</div>
									<small class="cl5">Semua Kategori</small>
								</a>
							</div>
						</div>
					</div>
					<div class="col-md-6">

					</div>
				</div>
			</div>
		</section>

		<section class="bg6 p-b-15">
			<div class="container p-lr-0">
				<a href="https://www.eurekabookhouse.co.id/cari/result?category=ebook" target="_blank">
					<img src="https://www.eurekabookhouse.co.id/assets/uplod/promo/horizontal/hori_banner-min1.png"
						style="width:100%;height: auto; display:block"></a>
			</div>
		</section>

		<section class="sec-relate-product bg6 mb-4">
			<div class="container bg0 p-tb-15 p-lr-15 p-lr-5-sm bs1 text-left">
				<div>
					<h3 class="fs">Produk TAB </h3>
					<div>
						<cardProdukPage />
					</div>
				</div>

			</div>
		</section>


		<section class="sec-relate-product bg6 mb-4">
			<div class="container bg0 p-tb-15 p-lr-15 p-lr-5-sm bs1 text-left">
				<div>
					<h3 class="fs">Buku Erlangga Terbaru </h3>
					<div>
						<cardProdukPage />
					</div>
				</div>

			</div>
		</section>
		<section class="sec-relate-product bg6 mb-4">
			<div class="container bg0 p-tb-15 p-lr-15 p-lr-5-sm bs1 text-left">
				<div>
					<h3 class="mtext-105 cl5 mb-2">Terbaru</h3>
					<div>
						<cardProdukPage />
					</div>
				</div>

			</div>
		</section>

		<section class="sec-relate-product bg6 mb-4 d-none">
			<div class="container bg0 p-tb-15 p-lr-15 p-lr-5-sm  bs1">
				<div class="">
					<a class="stext-101 pull-right"
						href="https://www.eurekabookhouse.co.id/category/menu/serba-15rb">Lihat Lainnya >></a>
					<h3 class="mtext-105 cl5 mb-2">Serba 15rb</h3>
					<div class="list_serba"></div>
				</div>
			</div>
		</section>

		<section class="sec-relate-product bg6">
			<div class="container p-tb-15 text-left">
				<div class="">
					<h3 class="fs">Promo Hari Ini </h3>
					<div class="row">
						<div class="col-6 col-sm-3 col-md-3 p-b-5 p-lr-5-sm br7">
							<div class="block2 blog-item bg0">
								<div class="hov-img0">
							<router-link :to="'/gratisongkir'">
								<img class="bor7 img-fluid"
									src="https://cdn.eurekabookhouse.co.id/ebh/promo/index/todaypromo/gratis_ongkir_promoi-min.jpg"
									style="width: 250px; height: 125px" alt="Responsive image">
							</router-link>
							</div>
						</div>
						</div>
						<div class="col-6 col-sm-3 col-md-3 p-b-5 p-lr-5-sm">
							<div class="block2 blog-item bg0">
								<div class="hov-img0">
							<a href="https://www.eurekabookhouse.co.id/cari/result/?category=mainan-dan-hobi">
								<img  class="img-fluid"
									src="https://cdn.eurekabookhouse.co.id/ebh/promo/index/todaypromo/mainan-min.jpg"
									style="width: 250px; height: 125px" alt="Responsive image">
							</a>
							</div>
						</div>
						</div>
						<div class="col-6 col-sm-3 col-md-3 p-b-5 p-lr-5-sm">
							<div class="block2 blog-item bg0">
								<div class="hov-img0">
							<router-link :to="'/erlanggadiskon'">
								<img class="img-fluid"
									src="https://cdn.eurekabookhouse.co.id/ebh/promo/index/todaypromo/buku-erlangga-min.jpg"
									style="width: 250px; height: 125px" alt="Responsive image">
							</router-link>
							</div>
						</div>
						</div>
						<div class="col-6 col-sm-3 col-md-3 p-b-5 p-lr-5-sm">
							<div class="block2 blog-item bg0">
								<div class="hov-img0">
							<router-link :to="'/noveldiskon'">
								<img class="img-fluid"
									src="https://cdn.eurekabookhouse.co.id/ebh/promo/index/todaypromo/semua-novel-min.jpg"
									style="width: 250px; height: 125px" alt="Responsive image">
							</router-link>
						</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="sec-relate-product bg6 mb-4">
			<div class="container bg0 p-tb-15 p-lr-15 p-lr-5-sm bs1 text-left">
				<div>
					<a class="a.stext-101 pull-right"
						href="https://www.eurekabookhouse.co.id/cari/result/?category=novel">Lihat Lainnya >></a>
					<h3 class="fs">Kesehatan </h3>
					<div>
						<cardProdukPage />
					</div>
				</div>

			</div>
		</section>

		<section class="sec-relate-product bg6 mb-4">
			<div class="container bgu1 p-tb-15 p-lr-15 p-lr-5-sm bs1">
				<div>
					<a class="a.stext-101 cl0 pull-right"
						href="https://www.eurekabookhouse.co.id/cari/result/?category=novel">Lihat Lainnya >></a>
					<h3 class="fs mtext-105 cl0 mb-2 text-left">Novel </h3>
					<div>
						<cardProdukPage />
					</div>
				</div>

			</div>
		</section>


		<section class="sec-relate-product bg6 p-b-15">
			<div class="container p-tb-15 bg0 p-lr-5-sm bs1 text-left">
				<h3 class="fs">Mall </h3>
				<div>
					<flickity ref="flickity" :options="flickityOptions">
						<div class="carousel-cell wd-mall p-lr-10 eurekabookhouse is-selected ">
							<div class="mall_index">
								<a href="https://www.eurekabookhouse.co.id/eurekamart">
									<img class="lazy mall_img_index"
										src="https://www.eurekabookhouse.co.id/assets/front/images/icons/logo/eurekamart-color.jpg">
								</a>
							</div>
							<div class="brand-name stext-101 text-center m-b-5">
								<a href="https://www.eurekabookhouse.co.id/eurekamart"><span class="cl2 no-data">Eureka
										Mart</span></a>
							</div>
						</div>
						<div class="carousel-cell wd-mall p-lr-10 eurekabookhouse ">
							<div class="mall_index">
								<a href="https://www.eurekabookhouse.co.id/mall/detail/eurekabookhouse">
									<img class="lazy mall_img_index"
										src="https://cdn.eurekabookhouse.co.id/ebh/mall/EurekaBookhouse_foto18_37_57.png">
								</a>
							</div>
							<div class="brand-name stext-101 text-center m-b-5">
								<router-link :to="'/ebh'"><span class="cl2 no-data">EurekaBookhouse</span></router-link>
							</div>
						</div>
						<div class="carousel-cell wd-mall p-lr-10 bukuerlangga ">
							<div class="mall_index">
								<a href="https://www.eurekabookhouse.co.id/mall/detail/bukuerlangga">
									<img class="lazy mall_img_index"
										src="https://cdn.eurekabookhouse.co.id/ebh/mall/Buku-Erlangga_icon_mall10_18_24.png">
								</a>
							</div>
							<div class="brand-name stext-101 text-center m-b-5">
								<router-link :to="'/erlangga'"><span class="cl2 no-data">Buku Erlangga</span>
								</router-link>
							</div>
						</div>
						<div class="carousel-cell wd-mall p-lr-10 ilikegap ">
							<div class="mall_index">
								<a href="https://www.eurekabookhouse.co.id/mall/detail/ilikegap">
									<img class="lazy mall_img_index"
										src="https://cdn.eurekabookhouse.co.id/ebh/mall/iLikegap-com_foto17_33_46.png">
								</a>
							</div>
							<div class="brand-name stext-101 text-center m-b-5">
								<a href="https://www.eurekabookhouse.co.id/mall/detail/ilikegap"><span
										class="cl2 no-data">iLikegap.com</span></a>
							</div>
						</div>
						<div class="carousel-cell wd-mall p-lr-10 belanja-organik ">
							<div class="mall_index">
								<a href="https://www.eurekabookhouse.co.id/mall/detail/belanja-organik">
									<img class="lazy mall_img_index"
										src="https://cdn.eurekabookhouse.co.id/ebh/mall/BelanjaOrganik-com_foto08_53_10.png">
								</a>
							</div>
							<div class="brand-name stext-101 text-center m-b-5">
								<a href="https://www.eurekabookhouse.co.id/mall/detail/belanja-organik"><span
										class="cl2 no-data">BelanjaOrganik.com</span></a>
							</div>
						</div>
						<div class="carousel-cell wd-mall p-lr-10 toko-buku-eureka ">
							<div class="mall_index">
								<a href="https://www.eurekabookhouse.co.id/mall/detail/toko-buku-eureka">
									<img class="lazy mall_img_index"
										src="https://cdn.eurekabookhouse.co.id/ebh/mall/toko-buku-eureka_foto18_38_25.png">
								</a>
							</div>
							<div class="brand-name stext-101 text-center m-b-5">
								<a href="https://www.eurekabookhouse.co.id/mall/detail/toko-buku-eureka"><span
										class="cl2 no-data">Toko Buku Eureka</span></a>
							</div>
						</div>
						<div class="carousel-cell wd-mall p-lr-10 forester ">
							<div class="mall_index">
								<a href="https://www.eurekabookhouse.co.id/mall/detail/forester">
									<img class="lazy mall_img_index"
										src="https://cdn.eurekabookhouse.co.id/ebh/mall/Forester-Adventure_icon_mall15_04_34.jpg">
								</a>
							</div>
							<div class="brand-name stext-101 text-center m-b-5">
								<a href="https://www.eurekabookhouse.co.id/mall/detail/forester"><span
										class="cl2 no-data">Forester Adventure</span></a>
							</div>
						</div>
					</flickity>
				</div>
			</div>

		</section>
		<section class="sec-relate-product bg6 p-b-15">
			<div class="container p-tb-15 bg0 p-lr-5-sm bs1 text-left">
				<h3 class="fs">Toko Online </h3>
				<div style=" justify-content: center;">
					<flickity ref="flickity" :options="flickityOptions" sty>
						<div class="carousel-cell wd-mall p-lr-10 eurekabookhouse is-selected ">
							<div class="mall_index">
								<a href="https://shopee.co.id/eurekabookhouse?categoryId=16049&itemId=6607522365">
									<img class="lazy mall_img_index"
										src="https://www.eurekabookhouse.co.id/assets/image/tokoonline/shope.png">
								</a>
							</div>
							<div class="brand-name stext-101 text-center m-b-5">
								<a href="https://shopee.co.id/eurekabookhouse?categoryId=16049&itemId=6607522365"><span class="cl2 no-data">Shopee</span></a>
							</div>
						</div>
						<div class="carousel-cell wd-mall p-lr-10 eurekabookhouse ">
							<div class="mall_index">
								<a href="https://www.bukalapak.com/eureka-bookhouse-official?from=omnisearch&from_keyword_history=false&search_source=omnisearch_brand&source=navbar">
									<img class="lazy mall_img_index"
										src="https://www.eurekabookhouse.co.id/assets/image/tokoonline/bukalapak.png">
								</a>
							</div>
							<div class="brand-name stext-101 text-center m-b-5">
								<a href="https://www.bukalapak.com/eureka-bookhouse-official?from=omnisearch&from_keyword_history=false&search_source=omnisearch_brand&source=navbar"><span
										class="cl2 no-data">Bukalapak</span></a>
							</div>
						</div>
						<div class="carousel-cell wd-mall p-lr-10 bukuerlangga ">
							<div class="mall_index">
								<a href="https://www.istyle.id/di/displayView/Eureka-Bookhouse/000000131969/view.do">
									<img class="lazy mall_img_index"
										src="https://www.eurekabookhouse.co.id/assets/image/tokoonline/tokped.png">
								</a>
							</div>
							<div class="brand-name stext-101 text-center m-b-5">
								<a
									href="https://www.istyle.id/di/displayView/Eureka-Bookhouse/000000131969/view.do"><span
										class="cl2 no-data">Tokopedia</span></a>
							</div>
						</div>
						<div class="carousel-cell wd-mall p-lr-10 ilikegap ">
							<div class="mall_index">
								<a href="https://www.istyle.id/di/displayView/Eureka-Bookhouse/000000131969/view.do">
									<img class="lazy mall_img_index"
										src="https://www.eurekabookhouse.co.id/assets/image/tokoonline/istyle.png">
								</a>
							</div>
							<div class="brand-name stext-101 text-center m-b-5">
								<a href="https://www.istyle.id/di/displayView/Eureka-Bookhouse/000000131969/view.do"><span
										class="cl2 no-data">Tokopedia</span></a>
							</div>
						</div>
						
					</flickity>
				</div>
			</div>
		
		</section>
		
		<section class="sec-blog bg6 p-tb-15">
			<div class="container p-lr-5-sm text-left">
				<div class="">
					<router-link :to="'/Blog'" class="float-right">Lihat semua </router-link>

					<h3 class="fs">Blog </h3>

				</div>
				<div class="p-all-10">
					<div class="row">
						<div class="col-6 col-sm-3 col-md-3 p-b-5 p-lr-5-sm">
							<div class="block2 blog-item bg0">
								<div class="blog-pic hov-img0">
									<router-link :to="'/Blog/kisahkasih'">
										<img class="lazy" src="https://cdn.eurekabookhouse.co.id/ebh/blog/13-min.jpg">
									</router-link>
								</div>
								<div class="blog-text">
									<div>
										<div>
											<span class="badge badge-primary">Sahabat Eureka</span>
										</div>
									</div>
									<h4 class="title m-b-5">
										<router-link :to="'/Blog/kisahkasih'" class="stext-105 cl2 hov-cl1 trans-04">
											KISAH KASIH - JUARA FAVORIT 10 LOMBA CERPEN EUREKA BOOKHOUSE </router-link>
									</h4>
								</div>
							</div>
						</div>
						<div class="col-6 col-sm-3 col-md-3 p-b-5 p-lr-5-sm">
							<div class="block2 blog-item bg0">
								<div class="blog-pic hov-img0">
									<router-link :to="'/Blog/rahasiadelia'">
										<img class="lazy" src="https://cdn.eurekabookhouse.co.id/ebh/blog/12-min.jpg">
									</router-link>
								</div>
								<div class="blog-text">
									<div>
										<div>
											<span class="badge badge-primary">Sahabat Eureka</span>
										</div>
									</div>
									<h4 class="title m-b-5">
										<router-link :to="'/Blog/rahasiadelia'" class="stext-105 cl2 hov-cl1 trans-04">
											RAHASIA DELIA - JUARA FAVORIT 9 LOMBA CERPEN EUREKA BOOKHOUSE </router-link>
									</h4>
								</div>
							</div>
						</div>
						<div class="col-6 col-sm-3 col-md-3 p-b-5 p-lr-5-sm">
							<div class="block2 blog-item bg0">
								<div class="blog-pic hov-img0">
									<router-link :to="'/Blog/pohonmangga'">
										<img class="lazy" src="https://cdn.eurekabookhouse.co.id/ebh/blog/11-min.jpg">
									</router-link>
								</div>
								<div class="blog-text">
									<div>
										<div>
											<span class="badge badge-primary">Sahabat Eureka</span>
										</div>
									</div>
									<h4 class="title m-b-5">
										<router-link :to="'/Blog/pohonmangga'" class="stext-105 cl2 hov-cl1 trans-04">
											POHON MANGGA ITU BERBUAH KEMBALI - JUARA FAVORIT 8 LOMBA CERPEN EUREKA
											BOOKHOUSE
										</router-link>
									</h4>
								</div>
							</div>
						</div>
						<div class="col-6 col-sm-3 col-md-3 p-b-5 p-lr-5-sm">
							<div class="block2 blog-item bg0">
								<div class="blog-pic hov-img0">
									<router-link :to="'/Blog/malaikat'">
										<img class="lazy" src="https://cdn.eurekabookhouse.co.id/ebh/blog/10-min.jpg">
									</router-link>
								</div>
								<div class="blog-text">
									<div>
										<div>
											<span class="badge badge-primary">Sahabat Eureka</span>
										</div>
									</div>
									<h4 class="title m-b-5">
										<router-link :to="'/Blog/malaikat'" class="stext-105 cl2 hov-cl1 trans-04">
											MALAIKAT PENJAGAKU - JUARA FAVORIT 7 LOMBA CERPEN EUREKA BOOKHOUSE
										</router-link>
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="sec-blog bg6 p-tb-15">
			<div class="container p-lr-5-sm text-left">
				<div class="">
					<h3 class="fs">Game </h3>
				</div>
				<div class="p-all-10">
					<div class="row">
						<div class="col-6 col-sm-3 col-md-3 p-b-5 p-lr-5-sm">
							<div class="block2 blog-item bg0">
								<div class="hov-img0">
									<a href="https://www.eurekabookhouse.co.id/game/play/eurekabookhouse/kitir-kitir">
										<img class="lazy" src="https://cdn.eurekabookhouse.co.id/game/kitir-kitir.png">
									</a>
								</div>
							</div>
						</div>

						<div class="col-6 col-sm-3 col-md-3 p-b-5 p-lr-5-sm">
							<div class="block2 blog-item bg0">
								<div class="hov-img0">
									<a href="https://www.eurekabookhouse.co.id/game/play/eurekabookhouse/si-momon">
										<img class="lazy" src="https://cdn.eurekabookhouse.co.id/game/si-momon.png">
									</a>
								</div>
							</div>
						</div>

						<div class="col-6 col-sm-3 col-md-3 p-b-5 p-lr-5-sm">
							<div class="block2 blog-item bg0">
								<div class="hov-img0">
									<a href="https://www.eurekabookhouse.co.id/game/play/eurekabookhouse/kolian">
										<img class="lazy" src="https://cdn.eurekabookhouse.co.id/game/kolian.png">
									</a>
								</div>
							</div>
						</div>

						<div class="col-6 col-sm-3 col-md-3 p-b-5 p-lr-5-sm">
							<div class="block2 blog-item bg0">
								<div class="hov-img0">
									<a href="https://www.eurekabookhouse.co.id/game/play/eurekabookhouse/upstairs">
										<img class="lazy" src="https://cdn.eurekabookhouse.co.id/game/upstairs.png">
									</a>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>


		</section>
	</div>
</template>
<script scope>
import Flickity from 'vue-flickity';
import cardProdukPage from "@/components/cardProduk.vue";
export default {
	name: "navBar",
	components: {
		Flickity, cardProdukPage,
	},
	data() {
		return {
			name: 'BootstrapVue',
			isDropdown2Visible: false,
			flickityOptions: {
				initialIndex: 0,
				prevNextButtons: false,
				pageDots: false,
				cellAlign: "left",
				
				wrapAround: false,
				freeScroll: false,
			},

			produkMaster: []
		}
	},
	mounted() {
		this.getProduk(),
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
	methods:
	{
		getProduk() {
			var requestOptions = {
				method: 'GET',
				redirect: 'follow'
			};

			fetch("https://elibx.jaja.id/bupel/product/get-product?page=1&limit=10", requestOptions)
				.then(response => response.text())
				.then(result => {
					const res = JSON.parse(result);
					this.produkMaster = res.data.data
				})
				.catch(error => console.log('error', error));
		},
		next() {
			this.$refs.flickity.next();
		},

		previous() {
			this.$refs.flickity.previous();
		}
	}
};
</script>
<style scoped>
/* position dots in carousel */
.flickity-page-dots {
	bottom: 0px;
}

/* white circles */
.flickity-page-dots .dot {
	width: 12px;
	height: 12px;
	opacity: 1;
	background: transparent;
	border: 2px solid white;
}

/* fill-in selected dot */
.flickity-page-dots .dot.is-selected {
	background: white;
}
</style>
<style>
.dot {
	height: 25px;
	width: 25px;
	background-color: #bbb;
	border-radius: 50%;
	display: inline-block;
}
</style>\
<style lang="scss" scoped>
.carousel-3d-slide.current {
	opacity: 1 !important;
	visibility: visible !important;
	transform: none !important;
	z-index: 999;
	position: relative;
	background-repeat: no-repeat;
}

.carousel-3d-slide {
	opacity: 0.5 !important;
	border-color: transparent;
}

.carousel-3d-container {
	.carousel-3d-slide {
		margin-left: -65%;
	}
}
</style>
