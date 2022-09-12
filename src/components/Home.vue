<template>
	<div>
		<carousel-3d :perspective="25" :space="700" :autoplay="true" :autoplay-timeout="1500"
			style="max-height: 100%; height: 65vh">
			<slide :index="0" style="width: 819px; height: auto; border-radius: 20px !important">
				<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/0_slider14_10_08.jpg" />
			</slide>
			<slide :index="1" style="width: 819px; height: auto; border-radius: 20px !important">
				<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/0_slider10_38_40.jpg" />
			</slide>
			<slide :index="2" style="width: 819px; height: auto; border-radius: 20px !important">
				<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/0_slider16_37_07.png" />
			</slide>
			<slide :index="3" style="width: 819px; height: auto; border-radius: 20px !important">
				<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/_slider16_37_41.png" />
			</slide>
			<slide :index="4" style="width: 819px; height: auto; border-radius: 20px !important">
				<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/_slider16_38_01.png" />
			</slide>
			<slide :index="5" style="width: 819px; height: auto; border-radius: 20px !important">
				<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/0_slider15_36_13.jpg" />
			</slide>
			<slide :index="6" style="width: 819px; height: auto; border-radius: 20px !important">
				<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/_slider14_55_56.jpeg" />
			</slide>
			<slide :index="7" style="width: 819px; height: auto; border-radius: 20px !important">
				<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/_slider15_36_34.jpg" />
			</slide>
			<slide :index="8" style="width: 819px; height: auto; border-radius: 20px !important">
				<img src="https://www.eurekabookhouse.co.id/assets/uplod/slider/_slider09_39_39.jpg" />
			</slide>
		</carousel-3d>


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
						<flickity ref="flickity" :options="flickityOptions">
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<router-link :to="'/detailproduk'"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/We bare bear POCKET BACKPACK BROWN.jpg"
											alt="we-bare-bears-pocket-backpack-black">
									</router-link>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/we-bare-bears-pocket-backpack-black"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											We Bare Bears Pocket Backpack Black </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.249.000</small></s><strong class="cl13">
												Rp.199.200</strong> <span class="badge bgu2 stext-106 cl0">20%
												OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/we-bare-bears-pocket-backpack-black"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/We bare bear POCKET BACKPACK BLACK.jpg"
											alt="we-bare-bears-pocket-backpack-black">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/we-bare-bears-pocket-backpack-black"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											We Bare Bears Pocket Backpack Black </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.249.000</small></s><strong class="cl13">
												Rp.199.200</strong> <span class="badge bgu2 stext-106 cl0">20%
												OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/we-bare-bears-large-backpack-grey"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/We bare bear LARGE BACKPACK GREY.jpg"
											alt="we-bare-bears-large-backpack-grey">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/we-bare-bears-large-backpack-grey"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											We Bare Bears Large Backpack Grey </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.279.000</small></s><strong class="cl13">
												Rp.223.200</strong> <span class="badge bgu2 stext-106 cl0">20%
												OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/powerpuff-girls-core-backpack-pink"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ppg back pink.jpg"
											alt="powerpuff-girls-core-backpack-pink">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/powerpuff-girls-core-backpack-pink"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Powerpuff Girls Core Backpack Pink </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.249.000</small></s><strong class="cl13">
												Rp.199.200</strong> <span class="badge bgu2 stext-106 cl0">20%
												OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/powerpuff-girls-core-backpack-purple"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ppg back purple.jpg"
											alt="powerpuff-girls-core-backpack-purple">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/powerpuff-girls-core-backpack-purple"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Powerpuff Girls Core Backpack Purple </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.249.000</small></s><strong class="cl13">
												Rp.199.200</strong> <span class="badge bgu2 stext-106 cl0">20%
												OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/bk-penilaian-tematik--bupetik--jl6b-klsvi-k13n"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/0023716120.jpg"
											alt="bk-penilaian-tematik-bupetik-jl-6b-kls-vi-k13n">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/bk-penilaian-tematik--bupetik--jl6b-klsvi-k13n"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Bk Penilaian Tematik (Bupetik) Jl.6B Kls.Vi/K13N </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.64.000</small></s><strong class="cl13">
												Rp.51.200</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/bk-penilaian-tematik--bupetik--jl6a-klsvi-k13n"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/0023716110.jpg"
											alt="bk-penilaian-tematik-bupetik-jl-6a-kls-vi-k13n">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/bk-penilaian-tematik--bupetik--jl6a-klsvi-k13n"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Bk Penilaian Tematik (Bupetik) Jl.6A Kls.Vi/K13N </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.64.000</small></s><strong class="cl13">
												Rp.51.200</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/bk-penilaian-tematik--bupetik--jl5b-klsv-k13n"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/0023716030.jpg"
											alt="bk-penilaian-tematik-bupetik-jl-5b-kls-v-k13n">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/bk-penilaian-tematik--bupetik--jl5b-klsv-k13n"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Bk Penilaian Tematik (Bupetik) Jl.5B Kls.V/K13N </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.64.000</small></s><strong class="cl13">
												Rp.51.200</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/bk-penilaian-tematik--bupetik--jl4b-klsiv-k13n"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/0023715940.jpg"
											alt="bk-penilaian-tematik-bupetik-jl-4b-kls-iv-k13n">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/bk-penilaian-tematik--bupetik--jl4b-klsiv-k13n"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Bk Penilaian Tematik (Bupetik) Jl.4B Kls.Iv/K13N </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.64.000</small></s><strong class="cl13">
												Rp.51.200</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/bk-penilaian-tematik--bupetik--jl4a-klsiv-k13n"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/0023715930.jpg"
											alt="bk-penilaian-tematik-bupetik-jl-4a-kls-iv-k13n">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/bk-penilaian-tematik--bupetik--jl4a-klsiv-k13n"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Bk Penilaian Tematik (Bupetik) Jl.4A Kls.Iv/K13N </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.74.000</small></s><strong class="cl13">
												Rp.59.200</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
						</flickity>
					</div>
				</div>

			</div>
		</section>


		<section class="sec-relate-product bg6 mb-4">
			<div class="container bg0 p-tb-15 p-lr-15 p-lr-5-sm bs1 text-left">
				<div>
					<h3 class="fs">Buku Erlangga Terbaru </h3>
					<div>
						<flickity ref="flickity" :options="flickityOptions">
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<router-link :to="'/kartuangka'"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/2014005020.jpg"
											alt="kartu-angka-dan-huruf-hijaiah">
									</router-link>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<router-link :to="'/kartuangka'"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Kartu Angka & Huruf Hijaiah </router-link>
										<div class="stext-105">
											<s><small class="fs-9">Rp.65.000</small></s><strong class="cl13">
												Rp.52.000</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/kartu-angka-erlangga-eurekabookhouse.co.id"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/2014005000.jpg"
											alt="kartu-angka">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/kartu-angka-erlangga-eurekabookhouse.co.id"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Kartu Angka </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.65.000</small></s><strong class="cl13">
												Rp.52.000</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/kartu-bentuk--warna-erlangga-eurekabookhouse.co.id"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/2014005040.jpg"
											alt="kartu-bentuk-dan-warna">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/kartu-bentuk--warna-erlangga-eurekabookhouse.co.id"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Kartu Bentuk & Warna </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.65.000</small></s><strong class="cl13">
												Rp.52.000</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/ips-smp-mts-kls7-km-erlangga-eurekabookhouse.co.id-N. Suparno-T.D. Haryo Tamtomo"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/0033000640.jpg"
											alt="ips-smp-mts-kls-7-km">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/ips-smp-mts-kls7-km-erlangga-eurekabookhouse.co.id-N. Suparno-T.D. Haryo Tamtomo"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Ips Smp/Mts Kls.7/Km </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.98.000</small></s><strong class="cl13">
												Rp.78.400</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/ips-smp-klsviii-k13n-revisi, erlangga, eurekabookhouse.co.id, T.D. Haryo Tamtomo-N. Suparno"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/81-33-077-2.jpg"
											alt="ips-smp-kls-viii-k13n-revisi">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/ips-smp-klsviii-k13n-revisi, erlangga, eurekabookhouse.co.id, T.D. Haryo Tamtomo-N. Suparno"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Ips Smp Kls.Viii/K13N/Revisi </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.111.000</small></s><strong class="cl13">
												Rp.88.800</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/pend-agama-islam--budi-pekerti-sd-kls4-km-merdeka-erlangga-eurekabookhouse.co.id"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/0022970440.jpg"
											alt="pend-agama-islam-dan-budi-pekerti-sd-kls-4-km">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/pend-agama-islam--budi-pekerti-sd-kls4-km-merdeka-erlangga-eurekabookhouse.co.id"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Pend. Agama Islam & Budi Pekerti Sd Kls.4/Km </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.62.000</small></s><strong class="cl13">
												Rp.49.600</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/grow-with-english-4-km-merdeka-online-erlangga-eurekabookhouse.co.id-mukarto"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/0024200350.jpg"
											alt="grow-with-english-4-km">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/grow-with-english-4-km-merdeka-online-erlangga-eurekabookhouse.co.id-mukarto"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Grow With English 4/Km </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.91.000</small></s><strong class="cl13">
												Rp.72.800</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/esps-pendidikan-pancasila-sd-mi-kls4-km-merdeka-erlangga-dwi-tyas-eurekabookhouse.co.id"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/0023230160.jpg"
											alt="esps-pendidikan-pancasila-sd-mi-kls-4-km">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/esps-pendidikan-pancasila-sd-mi-kls4-km-merdeka-erlangga-dwi-tyas-eurekabookhouse.co.id"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Esps Pendidikan Pancasila Sd/Mi Kls.4/Km </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.79.000</small></s><strong class="cl13">
												Rp.63.200</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/esps-pendidikan-pancasila-sd-mi-kls1-km-merdeka-erlangga-buku-online-eurekabookhouse.co.id"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/0023230130.jpg"
											alt="esps-pendidikan-pancasila-sd-mi-kls-1-km">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/esps-pendidikan-pancasila-sd-mi-kls1-km-merdeka-erlangga-buku-online-eurekabookhouse.co.id"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Esps Pendidikan Pancasila Sd/Mi Kls.1/Km </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.76.000</small></s><strong class="cl13">
												Rp.60.800</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/esps-matematika-sd-mi-kls1-km-merdeka"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/0025100700.jpg"
											alt="esps-matematika-sd-mi-kls-1-km">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/esps-matematika-sd-mi-kls1-km-merdeka"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Esps Matematika Sd/Mi Kls.1/Km </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.88.000</small></s><strong class="cl13">
												Rp.70.400</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
						</flickity>
					</div>
				</div>

			</div>
		</section>
		<section class="sec-relate-product bg6 mb-4">
			<div class="container bg0 p-tb-15 p-lr-15 p-lr-5-sm bs1 text-left">
				<div>
					<h3 class="mtext-105 cl5 mb-2">Terbaru</h3>
					<div>
						<flickity ref="flickity" :options="flickityOptions">
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0  text-center" data-label="100%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/alligator-cloth-tape-36mm-black"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/KB-(2020) ALLIGATOR CLOTH TAPE 36MM BLACK.jpg"
											alt="alligator-cloth-tape-36mm-black">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/alligator-cloth-tape-36mm-black"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											ALLIGATOR CLOTH TAPE 36MM BLACK </a>
										<div class="stext-105">
											<strong class="cl13 fs-15">Rp.12.000</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0  text-center" data-label="100%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/autoclick-05mm-white-barrel-blister"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/auto clic.jpg"
											alt="autoclick-0-5mm-white-barrel-blister">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/autoclick-05mm-white-barrel-blister"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											AUTOCLICK 0.5MM WHITE BARREL BLISTER </a>
										<div class="stext-105">
											<strong class="cl13 fs-15">Rp.23.000</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0  text-center" data-label="100%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/corrtape-qar-506-yellow-barrel-fancy"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/CORR.TAPE QAR-506 LIGHT yellow BARREL FANCY.png"
											alt="corr-tape-qar-506-yellow-barrel-fancy">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/corrtape-qar-506-yellow-barrel-fancy"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											CORR.TAPE QAR-506 YELLOW BARREL FANCY </a>
										<div class="stext-105">
											<strong class="cl13 fs-15">Rp.18.000</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0  text-center" data-label="100%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/corrtape-qar-506-light-pink-barrel-fancy"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/CORR.TAPE QAR-506 LIGHT PINK BARREL FANCY.png"
											alt="corr-tape-qar-506-light-pink-barrel-fancy">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/corrtape-qar-506-light-pink-barrel-fancy"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											CORR.TAPE QAR-506 LIGHT PINK BARREL FANCY </a>
										<div class="stext-105">
											<strong class="cl13 fs-15">Rp.18.000</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0  text-center" data-label="100%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/uhu-stick-82-gr-bts-version"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/KB-(2020) UHU STICK 8.2 GR BTS VERSION.jpg"
											alt="uhu-stick-8-2-gr-bts-version">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/uhu-stick-82-gr-bts-version"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											UHU STICK 8.2 GR BTS VERSION </a>
										<div class="stext-105">
											<strong class="cl13 fs-15">Rp.8.400</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0  text-center" data-label="100%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/faber-castell-uhu-stic-21-gr-bts-version"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/KB-(2020) UHU STIC 21 GR BTS VERSION.jpg"
											alt="faber-castell-uhu-stic-21-gr-bts-version">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/faber-castell-uhu-stic-21-gr-bts-version"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											FABER CASTELL UHU STIC 21 GR BTS VERSION </a>
										<div class="stext-105">
											<strong class="cl13 fs-15">Rp.15.500</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/rahasia-keluarga"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/RAHASIA%20KELUARGA.jpg"
											alt="rahasia-keluarga">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/rahasia-keluarga"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Rahasia Keluarga </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.85.000</small></s><strong class="cl13">
												Rp.68.000</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/catatan-kronik--free-totebag-"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/KB-(1196) CATATAN KRONIK.jpg"
											alt="catatan-kronik-free-totebag">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/catatan-kronik--free-totebag-"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Catatan Kronik (Free totebag) </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.99.000</small></s><strong class="cl13">
												Rp.79.200</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/classics-1984"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/1984_cov.jpg"
											alt="classics-1984">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/classics-1984"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Classics: 1984 </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.99.000</small></s><strong class="cl13">
												Rp.79.200</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/marketing-50-teknologi-untuk-kemanusiaan"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/KB-(1196) MARKETING 5.0 TEKNOLOGI UNTUK KEMANUSIAAN.jpg"
											alt="marketing-5-0-teknologi-untuk-kemanusiaan">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/marketing-50-teknologi-untuk-kemanusiaan"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Marketing 5.0: Teknologi untuk Kemanusiaan </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.98.000</small></s><strong class="cl13">
												Rp.78.400</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/pasar-dan-karier-kembali-ke-akar-rekontruksi-pasar-dan-dunia"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/KB-(1196) PASAR DAN KARIER KEMBALI KE AKAR-REKONSTRUKSI PASAR DAN DUNIA.jpg"
											alt="pasar-dan-karier-kembali-ke-akar-rekontruksi-pasar-dan-dunia">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/pasar-dan-karier-kembali-ke-akar-rekontruksi-pasar-dan-dunia"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Pasar Dan Karier Kembali Ke Akar-Rekontruksi Pasar Dan Dunia </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.98.000</small></s><strong class="cl13">
												Rp.78.400</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/will-grayson-will-grayson"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/WILL GRAYSON, WILL GRAYSON.jpg"
											alt="will-grayson-will-grayson">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/will-grayson-will-grayson"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Will Grayson, Will Grayson </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.87.000</small></s><strong class="cl13">
												Rp.69.600</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/misi-lima-puluh--refleksi-setegah-abad"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/KB-(1196) MISI LIMA PULUH! REFLEKSI SETENGAH ABAD.jpg"
											alt="misi-lima-puluh-refleksi-setegah-abad">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/misi-lima-puluh--refleksi-setegah-abad"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Misi: Lima Puluh! Refleksi Setegah Abad </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.119.000</small></s><strong class="cl13">
												Rp.95.200</strong> <span class="badge bgu2 stext-106 cl0">20% OFF</span>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/technical-analysis-for-mega-profit"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/KB-(1196) TECHNICAL ANALYSIS FOR MEGA PROFIT (HC).jpg"
											alt="technical-analysis-for-mega-profit">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/technical-analysis-for-mega-profit"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Technical Analysis For Mega Profit </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.225.000</small></s><strong class="cl13">
												Rp.180.000</strong> <span class="badge bgu2 stext-106 cl0">20%
												OFF</span>
										</div>
									</div>
								</div>
							</div>

						</flickity>
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
						<div class="col-6 col-md-3 pic-todaypromo m-b-10">
							<router-link :to="'/gratisongkir'">
								<img class="bor7"
									src="https://cdn.eurekabookhouse.co.id/ebh/promo/index/todaypromo/gratis_ongkir_promoi-min.jpg"
									style="width: 250px; height: 125px">
							</router-link>
						</div>
						<div class="col-6 col-md-3 pic-todaypromo m-b-10">
							<a href="https://www.eurekabookhouse.co.id/cari/result/?category=mainan-dan-hobi">
								<img class="bor7"
									src="https://cdn.eurekabookhouse.co.id/ebh/promo/index/todaypromo/mainan-min.jpg"
									style="width: 250px; height: 125px">
							</a>
						</div>
						<div class="col-6 col-md-3 pic-todaypromo m-b-10">
							<router-link :to="'/erlanggadiskon'">
								<img class="bor7"
									src="https://cdn.eurekabookhouse.co.id/ebh/promo/index/todaypromo/buku-erlangga-min.jpg"
									style="width: 250px; height: 125px">
							</router-link>
						</div>
						<div class="col-6 col-md-3 pic-todaypromo m-b-10">
							<router-link :to="'/noveldiskon'">
								<img class="bor7"
									src="https://cdn.eurekabookhouse.co.id/ebh/promo/index/todaypromo/semua-novel-min.jpg"
									style="width: 250px; height: 125px">
							</router-link>
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
						<flickity ref="flickity" :options="flickityOptions">
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="5%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/hand-sanitizer-bath--body-works---sweet-pea-cleansing-hand-gel"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ebh-hand-sanitizer-bath--body-works---sweet-pea-cleansing-hand-gel.png"
											alt="hand-sanitizer-bath-dan-body-works-sweet-pea-cleansing-hand-gel">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/hand-sanitizer-bath--body-works---sweet-pea-cleansing-hand-gel"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Hand Sanitizer Bath & Body Works - Sweet Pea Cleansing Hand gel </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.50.000</small></s><strong class="cl13">
												Rp.47.500</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="5%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/hand-sanitizer-bath--body-works---french-lavender-cleansing-hand-gel"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ebh-hand-sanitizer-bath--body-works---french-lavender-cleansing-hand-gel.png"
											alt="hand-sanitizer-bath-dan-body-works-french-lavender-cleansing-hand-gel">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/hand-sanitizer-bath--body-works---french-lavender-cleansing-hand-gel"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Hand Sanitizer Bath & Body Works - French Lavender Cleansing Hand gel </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.50.000</small></s><strong class="cl13">
												Rp.47.500</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="5%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/hand-sanitizer-bath--body-works---beautiful-day-cleansing-hand-gel"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ebh-hand-sanitizer-bath--body-works---beautiful-day-cleansing-hand-gel.png"
											alt="hand-sanitizer-bath-dan-body-works-beautiful-day-cleansing-hand-gel">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/hand-sanitizer-bath--body-works---beautiful-day-cleansing-hand-gel"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Hand Sanitizer Bath & Body Works - Beautiful Day Cleansing Hand gel </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.50.000</small></s><strong class="cl13">
												Rp.47.500</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="5%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/hand-soap-bath--body-works---italian-lavender-creamy-luxe"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ebh-hand-soap-bath--body-works---italian-lavender-creamy-luxe.png"
											alt="hand-soap-bath-dan-body-works-italian-lavender-creamy-luxe">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/hand-soap-bath--body-works---italian-lavender-creamy-luxe"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Hand Soap Bath & Body Works - Italian Lavender Creamy Luxe </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.160.000</small></s><strong class="cl13">
												Rp.152.000</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="5%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/hand-soap-bath--body-works---eucalyptus-tea-foaming-soap"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ebh-hand-soap-bath--body-works---eucalyptus-tea-foaming-soap.png"
											alt="hand-soap-bath-dan-body-works-eucalyptus-tea-foaming-soap">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/hand-soap-bath--body-works---eucalyptus-tea-foaming-soap"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Hand Soap Bath & Body Works - Eucalyptus Tea Foaming Soap </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.160.000</small></s><strong class="cl13">
												Rp.152.000</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="5%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/hand-soap-bath--body-works---cactus-blossom-foaming-soap"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ebh-hand-soap-bath--body-works---cactus-blossom-foaming-soap.png"
											alt="hand-soap-bath-dan-body-works-cactus-blossom-foaming-soap">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/hand-soap-bath--body-works---cactus-blossom-foaming-soap"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Hand Soap Bath & Body Works - Cactus Blossom Foaming Soap </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.160.000</small></s><strong class="cl13">
												Rp.152.000</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="5%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/hand-soap-bath--body-works---rose-water-ivy-foaming-soap"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ebh-hand-soap-bath--body-works---rose-water-ivy-foaming-soap.png"
											alt="hand-soap-bath-dan-body-works-rose-water-ivy-foaming-soap">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/hand-soap-bath--body-works---rose-water-ivy-foaming-soap"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Hand Soap Bath & Body Works - Rose Water Ivy Foaming Soap </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.160.000</small></s><strong class="cl13">
												Rp.152.000</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/so-klin-lantai-refill-800ml"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ebh-so-klin-lantai-refill-780ml-.jpg"
											alt="so-klin-lantai-refill-800ml">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/so-klin-lantai-refill-800ml"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											SO KLIN LANTAI REFILL 800ML </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.18.000</small></s><strong class="cl13">
												Rp.14.400</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/sunlight-anti-bau-jeruk-nipis--mint-pouch-refill-755ml"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ebh-sunlight-anti-bau-jeruk-nipis--mint-pouch-refill-755ml.jpg"
											alt="sunlight-anti-bau-jeruk-nipis-dan-mint-pouch-refill-755ml">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/sunlight-anti-bau-jeruk-nipis--mint-pouch-refill-755ml"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Sunlight Anti Bau Jeruk Nipis & Mint Pouch Refill 755Ml </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.19.000</small></s><strong class="cl13">
												Rp.15.200</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/mitu-baby--tissue-basah-wet-wipes-50-s---pink"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ebh-mitu-baby--tissue-basah-wet-wipes-50-s---pink.jpg"
											alt="mitu-baby-tissue-basah-wet-wipes-50-s-pink">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/mitu-baby--tissue-basah-wet-wipes-50-s---pink"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Mitu Baby- Tissue Basah-wet wipes 50.s - pink </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.33.000</small></s><strong class="cl13">
												Rp.26.400</strong>
										</div>
									</div>
								</div>
							</div>

						</flickity>
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
						<flickity ref="flickity" :options="flickityOptions">
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/perfect-couple"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ebh-BE-094.jpg"
											alt="perfect-couple">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/perfect-couple"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Perfect Couple </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.69.000</small></s><strong class="cl13">
												Rp.55.200</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/the-choice"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ebh-571810037.jpg"
											alt="the-choice">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/the-choice"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											The choice </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.85.000</small></s><strong class="cl13">
												Rp.68.000</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/am-i-there-yet-"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ebh-BI-091.jpg"
											alt="am-i-there-yet">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/am-i-there-yet-"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Am I There Yet? </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.89.000</small></s><strong class="cl13">
												Rp.71.200</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/pacor-story--seberapa-berat-sih-hidup-lo-"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ebh-produk10_16_52_Pacor-Story--Seberapa-Berat-Sih-Hidup-Lo-.jpg"
											alt="pacor-story-seberapa-berat-sih-hidup-lo">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/pacor-story--seberapa-berat-sih-hidup-lo-"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Pacor Story; Seberapa Berat Sih Hidup Lo? </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.85.000</small></s><strong class="cl13">
												Rp.68.000</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/pacor-story--susah-senang-senang-terus-"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ebh-produk10_11_58_Pacor-Story--Susah-Senang-Senang-Terus-.jpg"
											alt="pacor-story-susah-senang-senang-terus">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/pacor-story--susah-senang-senang-terus-"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Pacor Story; Susah Senang Senang Terus! </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.75.000</small></s><strong class="cl13">
												Rp.60.000</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/novel-athlas"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/athlas.jpg"
											alt="athlas">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/novel-athlas"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											ATHLAS </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.85.000</small></s><strong class="cl13">
												Rp.68.000</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/15397"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/off the record.jpg"
											alt="off-the-record">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/15397"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											OFF THE RECORD </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.98.000</small></s><strong class="cl13">
												Rp.78.400</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/15357"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/Love Book - Diary Books-min.jpg"
											alt="love-book-diari-love-is">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/15357"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											LOVE BOOK: Diari Love Is </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.125.000</small></s><strong class="cl13">
												Rp.100.000</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/inestable"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/inestable-min.jpg"
											alt="inestable">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/inestable"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											INESTABLE </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.65.000</small></s><strong class="cl13">
												Rp.52.000</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="carousel-cell wd-15 block2 bg0">
								<div class="block2-pic hov-img0 label-new text-center" data-label="20%">
									<div class="label-original badge badge-primary">100% Original</div>
									<img class="img-official"
										src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
									<a href="https://www.eurekabookhouse.co.id/product/bad-reputation"
										class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
										<img class="lazy img-responsive"
											src="https://cdn.eurekabookhouse.co.id/ebh/product/all/bad reputation-min.jpeg"
											alt="bad-reputation">
									</a>
								</div>
								<div class="block2-txt flex-w flex-t p-all-8">
									<div class="block2-txt-child1 flex-col-l">
										<a href="https://www.eurekabookhouse.co.id/product/bad-reputation"
											class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
											Bad Reputation </a>
										<div class="stext-105">
											<s><small class="fs-9">Rp.75.000</small></s><strong class="cl13">
												Rp.60.000</strong>
										</div>
									</div>
								</div>
							</div>

						</flickity>
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
				<h3 class="fs">Toko Online</h3>
				<div class="mb-3">
					<div style="display:flex; margin:0 auto; width:60%">
						<div class="mall_index">
							<a href="https://shopee.co.id/eurekabookhouse?categoryId=16049&itemId=6607522365">
								<img class="lazy mall_img_index mr-5" style="width:120px"
									src="https://www.eurekabookhouse.co.id/assets/image/tokoonline/shope.png">
							</a>
						</div>
						<div class="mall_index">
							<a
								href="https://www.bukalapak.com/eureka-bookhouse-official?from=omnisearch&from_keyword_history=false&search_source=omnisearch_brand&source=navbar">
								<img class="lazy mall_img_index mr-5" style="width:120px"
									src="https://www.eurekabookhouse.co.id/assets/image/tokoonline/bukalapak.png">
							</a>
						</div>
						<div class="mall_index">
							<a href="https://www.istyle.id/di/displayView/Eureka-Bookhouse/000000131969/view.do">
								<img class="lazy mall_img_index mr-5" style="width:120px"
									src="https://www.eurekabookhouse.co.id/assets/image/tokoonline/tokped.png">
							</a>
						</div>
						<div class="mall_index">
							<a href="https://www.istyle.id/di/displayView/Eureka-Bookhouse/000000131969/view.do">
								<img class="lazy mall_img_index" style="width:150px"
									src="https://www.eurekabookhouse.co.id/assets/image/tokoonline/istyle.png">
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="sec-blog bg6 p-tb-15">
			<div class="container p-lr-5-sm text-left">
				<div class="">
					<router-link :to="'/blog'" class="float-right">Lihat semua </router-link>

					<h3 class="fs">Blog </h3>

				</div>
				<div class="p-all-10">
					<div class="row">
						<div class="col-6 col-sm-3 col-md-3 p-b-5 p-lr-5-sm">
							<div class="block2 blog-item bg0">
								<div class="blog-pic hov-img0">
									<router-link :to="'/kisahkasih'">
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
										<router-link :to="'/kisahkasih'" class="stext-105 cl2 hov-cl1 trans-04">
											KISAH KASIH - JUARA FAVORIT 10 LOMBA CERPEN EUREKA BOOKHOUSE </router-link>
									</h4>
								</div>
							</div>
						</div>
						<div class="col-6 col-sm-3 col-md-3 p-b-5 p-lr-5-sm">
							<div class="block2 blog-item bg0">
								<div class="blog-pic hov-img0">
									<router-link :to="'/rahasiadelia'">
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
										<router-link :to="'/rahasiadelia'" class="stext-105 cl2 hov-cl1 trans-04">
											RAHASIA DELIA - JUARA FAVORIT 9 LOMBA CERPEN EUREKA BOOKHOUSE </router-link>
									</h4>
								</div>
							</div>
						</div>
						<div class="col-6 col-sm-3 col-md-3 p-b-5 p-lr-5-sm">
							<div class="block2 blog-item bg0">
								<div class="blog-pic hov-img0">
									<router-link :to="'/pohonmangga'">
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
										<router-link :to="'/pohonmangga'" class="stext-105 cl2 hov-cl1 trans-04">
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
									<router-link :to="'/malaikat'">
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
										<router-link :to="'/malaikat'" class="stext-105 cl2 hov-cl1 trans-04">
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
export default {
	name: "navBar",
	components: {
		Flickity
	},
	data() {
		return {
			name: 'BootstrapVue',
			isDropdown2Visible: false,
			flickityOptions: {
				initialIndex: 3,
				prevNextButtons: true,
				pageDots: false,
				wrapAround: true

				// any options from Flickity can be used
			}
		}
	},
	mounted() {
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
