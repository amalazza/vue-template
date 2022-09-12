<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="info" style="background-color: #2b4b83 !important">
			<div class="left-top-bar">
				<router-link :to="'/' " class="stext-105"><span>Home</span></router-link>
				<router-link :to="'/blog'" class=""><span>| Blog</span></router-link>
				<router-link :to="'/bantuan'" class=""><span>| Bantuan</span></router-link>
				<a href=""><span>| Ikuti Kami</span></a>
				<a class="icon-top-nav p-lr-9 bor1 bg0 cl1 m-lr-8" target="_blank"
					href="https://www.facebook.com/ebhcom"><i class="fa fa-facebook"></i></a>
				<a class="icon-top-nav p-lr-9 bor1 bg0 cl1 m-r-8" target="_blank"
					href="https://twitter.com/eurekabookhouse"><i class="fa fa-twitter"></i></a>
				<a class="icon-top-nav p-lr-9 bor1 bg0 cl1 m-r-8" target="_blank"
					href="https://www.instagram.com/eurekabookhouse/"><i class="fa fa-instagram"></i></a>

			</div>
			<div class="center-nav">
				<center> CS: 021 - 8779 6010 / WA: 087888337555</center>
			</div>

			<div class="right-top-bar flex-w h-full flex-c-m trans- p-lr-20">
				<router-link :to="'/user' " class="flex-c-m trans- p-lr-17">
					<img style="height: 30px;width: 30px;margin-right: 8px;border-radius: 60%;"
						src="https://www.eurekabookhouse.co.id/assets/uplod/default-avatar.png"
						class="img-circle img-thumbnail p-lr-20"> <span>tasyakhaerani66</span>
				</router-link>

				<router-link :to="'/daftar'" class="flex-c-m trans- p-lr-17"><span>Daftar</span></router-link>
				<router-link :to="'/login' " class="flex-c-m trans-07 p-lr-17"><span>Login</span></router-link>
			</div>



		</b-navbar>
		<!-- ====== -->
		<b-navbar toggleable="lg" type="dark" variant="info" style="background-color: #2b4b83 !important">

			<div class="left-top-bar mr-5">
				<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/logo/eurekabookhouse-white.png"
					alt="Vue Logo" width="190" height="70">
			</div>



			<header class="header stext-106 ">
				<div class="catalog header__catalog">
					<div class="catalog__dropdown">
						<!-- <a class="catalog__dropdown-link" href="#">KATALOG    </a> -->
					</div>
					<div @mouseover="onOver" @mouseleave="onLeave">
						<b-dropdown dropright text="KATALOG" variant="link text-white" style="width: 14vw !important;"
							class="catalog__dropdown-link text-white" ref="dropdown">
							<ul class="catalog__popover-list"></ul>
							<li class="catalog__popover-item has-child"></li>
							<b-dropdown-item style="width: 300px">
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg"
									class="img-fluid" style="width: 20px; height: 20px" />
								Buku Pelajaran
								<b-dropdown id="dropdown-2" text="" class="custom-drop- m-md-2"
									style="margin-left: 10px; background:#fff;">
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
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/009-microscope.svg"
									class="img-fluid" style="width: 20px; height: 20px" />
								Perguruan Tinggi
								<b-dropdown id="dropdown-2" text="" class="custom-drop-2 m-md-2"
									style="margin-left: 10px">
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
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/023-planet.svg"
									class="img-fluid" style="width: 20px; height: 20px" />
								Buku Umum
								<b-dropdown id="dropdown-2" text="" class="custom-drop-2 m-md-2"
									style="margin-left: 10px">
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
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/044-blackboard.svg"
									class="img-fluid" style="width: 20px; height: 20px" />
								Buku Soal
								<b-dropdown id="dropdown-2" text="" class="custom-drop-2 m-md-2"
									style="margin-left: 10px">
									<b-dropdown-item> Soal SD</b-dropdown-item>
									<b-dropdown-item> Soal SMP</b-dropdown-item>
									<b-dropdown-item> Soal SMA</b-dropdown-item>
									<b-dropdown-item> Buku Soal Ujian UN </b-dropdown-item>
									<b-dropdown-item> Soal SMK</b-dropdown-item>
								</b-dropdown>
							</b-dropdown-item>
							<b-dropdown-item>
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/022-masks.svg"
									class="img-fluid" style="width: 20px; height: 20px" />
								Novel
								<b-dropdown id="dropdown-2" text="" class="custom-drop-2 m-md-2"
									style="margin-left: 10px">
									<b-dropdown-item> Novel Remaja</b-dropdown-item>
									<b-dropdown-item> Novel Romance</b-dropdown-item>
									<b-dropdown-item> Novel Horor </b-dropdown-item>
									<b-dropdown-item> Terjemahan </b-dropdown-item>
									<b-dropdown-item> Lainnya</b-dropdown-item>
								</b-dropdown>
							</b-dropdown-item>
							<b-dropdown-item>
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/030-doll.svg"
									class="img-fluid" style="width: 20px; height: 20px" />
								Buku Anak
								<b-dropdown id="dropdown-2" text="" class="custom-drop-2 m-md-2"
									style="margin-left: 10px">
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
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/007-control.svg"
									class="img-fluid" style="width: 20px; height: 20px" />
								Mainan & Hobi
								<b-dropdown id="dropdown-2" text="" class="custom-drop-2 m-md-2"
									style="margin-left: 10px">
									<b-dropdown-item> Perlengkapan Menggambar </b-dropdown-item>
									<b-dropdown-item> Puzzle </b-dropdown-item>
									<b-dropdown-item> Diecast & Model Kit </b-dropdown-item>
									<b-dropdown-item> Figur </b-dropdown-item>
								</b-dropdown>
							</b-dropdown-item>
							<b-dropdown-item>
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/038-battery.svg"
									class="img-fluid" style="width: 20px; height: 20px" />
								Gaya Hidup
								<b-dropdown id="dropdown-2" text="" class="custom-drop-2 m-md-2"
									style="margin-left: 10px">
									<b-dropdown-item> Tas </b-dropdown-item>
									<b-dropdown-item> Sepatu </b-dropdown-item>
									<b-dropdown-item> Tumbler </b-dropdown-item>
									<b-dropdown-item> Aksesoris </b-dropdown-item>
									<b-dropdown-item> Voucher</b-dropdown-item>
								</b-dropdown>
							</b-dropdown-item>
							<b-dropdown-item>
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg"
									class="img-fluid" style="width: 20px; height: 20px" />
								Buku Import
								<b-dropdown id="dropdown-2" text="" class="custom-drop-2 m-md-2"
									style="margin-left: 10px">
									<b-dropdown-item> Fiction</b-dropdown-item>
								</b-dropdown>
							</b-dropdown-item>
							<b-dropdown-item>
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg"
									class="img-fluid" style="width: 20px; height: 20px" />
								Buku Murah
								<b-dropdown id="dropdown-2" text="" class="custom-drop-2 m-md-2"
									style="margin-left: 10px">
									<b-dropdown-item> Agro Group </b-dropdown-item>
									<b-dropdown-item> Bhuana lmu Populer</b-dropdown-item>
									<b-dropdown-item> Elax Media </b-dropdown-item>
									<b-dropdown-item> Mizan Media Utama </b-dropdown-item>
									<b-dropdown-item> Promo Sales </b-dropdown-item>
								</b-dropdown>
							</b-dropdown-item>
							<b-dropdown-item>
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/046-football-award.svg"
									class="img-fluid" style="width: 20px; height: 20px" />
								Olahraga
								<b-dropdown id="dropdown-2" text="" class="custom-drop-2 m-md-2"
									style="margin-left: 10px">
									<b-dropdown-item> Gym dan Fitness</b-dropdown-item>
									<b-dropdown-item> Basket </b-dropdown-item>
									<b-dropdown-item> Sepak Bola dan Futsal </b-dropdown-item>

								</b-dropdown>
							</b-dropdown-item>
							<b-dropdown-item>
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg"
									class="img-fluid" style="width: 20px; height: 20px" />
								ATK
								<b-dropdown id="dropdown-2" text="" class="custom-drop-2 m-md-2"
									style="margin-left: 10px">
									<b-dropdown-item> Alat dan Buku Tulis </b-dropdown-item>
									<b-dropdown-item> Perlengkapan Kantor </b-dropdown-item>
									<b-dropdown-item> IT Supply </b-dropdown-item>
								</b-dropdown>
							</b-dropdown-item>
							<b-dropdown-item>
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg"
									class="img-fluid" style="width: 20px; height: 20px" />
								Sayuran Organik
								<b-dropdown id="dropdown-2" text="" class="custom-drop-2 m-md-2"
									style="margin-left: 10px">

								</b-dropdown>
							</b-dropdown-item>
							<b-dropdown-item>
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/024-confetti.svg"
									class="img-fluid" style="width: 20px; height: 20px" />
								Buku Flat
								<b-dropdown id="dropdown-2" text="" class="custom-drop-2 m-md-2"
									style="margin-left: 10px">
								</b-dropdown>
							</b-dropdown-item>
							<b-dropdown-item>
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg"
									class="img-fluid" style="width: 20px; height: 20px" />
								Off.Merchandise
								<b-dropdown id="dropdown-2" text="" class="custom-drop-2 m-md-2"
									style="margin-left: 10px">
									<b-dropdown-item> Local Merch </b-dropdown-item>
									<b-dropdown-item> Import Merch </b-dropdown-item>
								</b-dropdown>
							</b-dropdown-item>
							<b-dropdown-item>
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg"
									class="img-fluid" style="width: 20px; height: 20px" />
								Actione Figure
								<b-dropdown id="dropdown-2" text="" class="custom-drop-2 m-md-2"
									style="margin-left: 10px">
								</b-dropdown>
							</b-dropdown-item>
							<b-dropdown-item>
								<img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg"
									class="img-fluid" style="width: 20px; height: 20px" />
								eBook
								<b-dropdown id="dropdown-2" text="" class="custom-drop-2 m-md-2"
									style="margin-left: 10px">
									<b-dropdown-item> Majalah </b-dropdown-item>
									<b-dropdown-item> Koran </b-dropdown-item>
									<b-dropdown-item> Buku Sekolah </b-dropdown-item>
									<b-dropdown-item> Buku Umum </b-dropdown-item>

								</b-dropdown>
							</b-dropdown-item>
						</b-dropdown>
					</div>
				</div>
			</header>


			<!-- <header class="header stext-106">
		<div class="catalog header__catalog">
			<div class="catalog__dropdown"><a class="catalog__dropdown-link" href="#">KATALOG    </a></div>
			<nav class="catalog__popover">
				<ul class="catalog__popover-list">
											<li class="catalog__popover-item has-child">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=buku-pelajaran">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg">
								<span class="ml-2">Buku Pelajaran</span>
							</a>
															<div class="catalog__popover-popup">
									<ul class="catalog__popover-list">
										
											<li class="catalog__popover-item has-child"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/buku-sd">Buku SD</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/kurikulum-2013-sd">Kurikulum 2013,K13N SD</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/agama-islam-sd">Agama Islam SD</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/matematika-sd">Matematika SD</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seni-budaya-sd">Seni Budaya SD</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/kewarganegaraan-sd">Kewarganegaraan SD</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seni-rupa-sd">Seni Rupa SD</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/penjas-sd">Penjas SD</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/ti-dan-komunikasi-sd">TI & Komunikasi SD</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/ips-sd">IPS SD</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/ipa-sd">IPA SD</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/bahasa-inggris-sd">Bahasa Inggris SD</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/bilingual-sd">Bilingual SD</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/bahasa-indonesia-sd">Bahasa Indonesia SD</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/sains-sd">SAINS SD</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/plh-sd">PLH SD</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/plbj-sd">PLBJ SD</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/mandarin-sd">MANDARIN SD</a></li>
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item has-child"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/buku-smp">Buku SMP</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/kurikulum-2013-smp">Kurikulum 2013,K13N SMP</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/agama-islam-smp">Agama Islam SMP</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/agama-kristen-dan-katolik-smp">Agama Kristen & Katolik SMP</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/matematika-smp">Matematika SMP</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/kewarganegaraan-smp">Kewarganegaraan SMP</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/penjas-smp">Penjas SMP</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/bahasa-dan-sastra-smp">Bahasa & Sastra SMP</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seni-musik-smp">Seni Musik SMP</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/sejarah-smp">Sejarah SMP</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seni-budaya-smp">Seni Budaya SMP</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/ti-dan-komunikasi-smp">Ti & Komunikasi SMP</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/bhs-inggris-smp">Bhs Inggris SMP</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/ipa-smp">IPA SMP</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/ips-smp">IPS SMP</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/bimb-konseling-smp">Bimb.Konseling SMP</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/bilingual-smp">Bilingual SMP</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/plh-smp">PLH SMP</a></li>
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item has-child"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/buku-sma">Buku SMA</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/bahasa--indonesia-sma">Bahasa  Indonesia SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/akuntansi-sma">Akuntansi SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/antropologi-sma">Antropologi SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/agama-islam-sma">Agama Islam SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/sma-kurikulum-2013-/-k13n">SMA Kurikulum 2013 / K13N</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/biologi-sma">Biologi SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/ekonomi-sma">Ekonomi SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/geografi-sma">Geografi SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/matematika-sma">Matematika SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/fisika-sma">Fisika SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/kimia-sma">Kimia SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seni-budaya-sma">Seni Budaya SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/sejarah-sma">Sejarah SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/bahasa--inggris-sma">Bahasa  Inggris SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/kewarganegaraan-sma">Kewarganegaraan SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seni-musik-sma">Seni Musik SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/penjaskes-sma">Penjaskes SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/bilingual-sma">Bilingual SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/bimb-konseling-sma">Bimb.Konseling SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/bhs-mandarin-sma">Bhs Mandarin SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/sosiologi-sma">Sosiologi SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/ti-dan-komunikasi-sma">Ti & Komunikasi SMA</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seni-rupa-sma">Seni Rupa SMA</a></li>
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item has-child"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/buku-smk">Buku SMK</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/bahasa--indonesia-smk">Bahasa  Indonesia SMK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/biologi-smk">Biologi SMK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/smk-kurikulum-2013">Kurikulum 2013,K13N SMK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/fisika-smk">Fisika SMK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/bahasa--inggris-smk">Bahasa  Inggris SMK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/ipa-smk">IPA SMK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/ilmu-komputer-smk">Ilmu Komputer SMK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/kewarganegaraan-smk">Kewarganegaraan SMK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/kewirausahaan-smk">Kewirausahaan SMK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/kimia-smk">Kimia SMK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/matematika-smk">Matematika SMK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/agama-islam-smk">Agama Islam SMK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/komputer-akuntansi-smk">Komputer Akuntansi SMK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/penjaskes-smk">Penjaskes SMK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/kompetensi-inti-dan-kompetensi-dasar-(-kikd17-)">Kompetensi Inti dan Kompetensi Dasar ( KIKD17 )</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/modul-smk">Modul SMK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/ips-smk">IPS SMK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seni-budaya-smk">Seni Budaya SMK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/sejarah-smk">Sejarah SMK</a></li>
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/buku-tk">Buku TK</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/buku-tematik">Buku Tematik</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/buku-mi">Buku MI</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
																			</ul>
								</div>
													</li>
											<li class="catalog__popover-item has-child">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=perguruan-tinggi">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/009-microscope.svg">
								<span class="ml-2">Perguruan Tinggi</span>
							</a>
															<div class="catalog__popover-popup">
									<ul class="catalog__popover-list">
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/administrasi">Administrasi</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/akuntansi">Akuntansi</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/at-a-glance">At a Glance</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/bahasa-dan-sastra">Bahasa &amp; Sastra</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/ekonomi">Ekonomi</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/hukum">Hukum</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/kedokteran">Kedokteran</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/keperawatan">Keperawatan</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/lecture-notes">Lecture Notes</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/manajamen">Manajamen</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item has-child"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/mipa">MIPA</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/matematika">Matematika</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/biologi">Biologi</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/fisika">Fisika</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/kimia">Kimia</a></li>
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item has-child"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/teknik">Teknik</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/komputer">Komputer</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/arsitektur">Arsitektur</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/mesin">Mesin</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/sipil">Sipil</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/teknik-umum">Teknik Umum</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/teknik-sipil">Teknik Sipil</a></li>
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/psikologi">Psikologi</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/sospol">Sospol</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/statistik">Statistik</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/schaum-outline">Schaum Outline</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/jurnalistik">Jurnalistik</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/islam">Islam</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/komputer">Komputer</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/manajemen">Manajemen</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/mesin">Mesin</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/perti-lainnya">PERTI Lainnya</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
																			</ul>
								</div>
													</li>
											<li class="catalog__popover-item has-child">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=buku-umum">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/023-planet.svg">
								<span class="ml-2">Buku Umum</span>
							</a>
															<div class="catalog__popover-popup">
									<ul class="catalog__popover-list">
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/buku-agama">Buku Agama</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/masakan-dan-minuman">Masakan dan Minuman</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item has-child"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/hobi-dan-hastakarya">Hobi dan Hastakarya</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/agro-bisnis">Agro Bisnis</a></li>
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/komputer">Komputer</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/parenting">Parenting</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/buku-seri">Buku Seri</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/kamus-dan-bahasa">Kamus dan Bahasa</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-karakter">Seri Karakter</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/komik">Komik</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/peta-dan-atlas">Peta Dan Atlas</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/pendidikan-umum">Pendidikan Umum</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/fashion-dan-kecantikan">Fashion dan kecantikan</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/buku-umum-lainnya">Buku Umum Lainnya</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
																			</ul>
								</div>
													</li>
											<li class="catalog__popover-item has-child">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=buku-soal">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/044-blackboard.svg">
								<span class="ml-2">Buku Soal</span>
							</a>
															<div class="catalog__popover-popup">
									<ul class="catalog__popover-list">
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/soal-sd">Soal SD</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/soal-smp">Soal SMP</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/soal-sma">Soal SMA</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/buku-soal-ujian">Buku Soal Ujian UN</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/soal-smk">Soal SMK</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
																			</ul>
								</div>
													</li>
											<li class="catalog__popover-item has-child">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=novel">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/022-masks.svg">
								<span class="ml-2">Novel</span>
							</a>
															<div class="catalog__popover-popup">
									<ul class="catalog__popover-list">
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/novel-remaja">Novel Remaja</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/novel-romance">Novel Romance</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/novel-horor">Novel Horor</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/terjemahan">Terjemahan</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/lainnya">Lainnya</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
																			</ul>
								</div>
													</li>
											<li class="catalog__popover-item has-child">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=buku-anak">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/030-doll.svg">
								<span class="ml-2">Buku Anak</span>
							</a>
															<div class="catalog__popover-popup">
									<ul class="catalog__popover-list">
										
											<li class="catalog__popover-item has-child"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-karakter">Seri Karakter</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-thomas-dan-friends">Seri Thomas &amp; Friends</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-strawberry-shortcake">Seri Strawberry Shortcake</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-go-diego-go">Seri Go Diego Go!</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-mickey-mouse">Seri Mickey Mouse</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-nihao-kai-lan">Seri Nihao, Kai-Lan</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/little-einsteins">Little Einsteins</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-kung-fu-panda">Seri Kung Fu Panda</a></li>
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item has-child"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/buku-seri">Buku Seri</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-pengenalan-profesi">Seri Pengenalan Profesi</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-bilingual">Seri Bilingual</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-apa-pendapatmu">Seri Apa Pendapatmu</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-natal-istimewa">Seri Natal Istimewa</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-mewarnai">Seri Mewarnai</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-disney">Seri Disney</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-ayo-berkreasi">Seri Ayo Berkreasi</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-picture-books-dan-kreativitas">Seri Picture Books &amp; Kreativitas</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-buku-ajaib">Seri Buku Ajaib</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-mini-library">Seri Mini Library</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-ensiklopedia-mini">Seri Ensiklopedia Mini</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-fakta-top">Seri Fakta Top</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-harimau-cilik">Seri Harimau Cilik</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-hewan-peliharaan">Seri Hewan Peliharaan</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-pengembangan-diri">Seri Pengembangan Diri</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-julie">Seri Julie</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-just-the-facts">Seri Just The Facts</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/kisah-si-pemberani">Kisah si Pemberani</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-mania">Seri Mania</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-maukah-kamu">Seri Maukah Kamu</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-kisah-nabi-as">Seri Kisah Nabi AS</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-dive-olly-dive">Seri Dive Olly Dive</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-opi">Seri Opi</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-pop-up-junior">Seri POP-UP Junior</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/segala-hal-tentang-uang">Segala Hal Tentang Uang</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/segala-hal-tentang-alam">Segala Hal Tentang Alam</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-toffee">Seri Toffee</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-zoe">Seri Zoe</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-pertualangan">Seri Pertualangan</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-pemanasan-global">Seri Pemanasan Global</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-puzzle">Seri Puzzle</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-puzzle-raksasa">Seri Puzzle Raksasa</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-ruby">Seri Ruby</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-see-inside">Seri See Inside</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-anak-sehat">Seri Anak Sehat</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-pak-jk">Seri Pak JK</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-pendidikan-karakter">Seri Pendidikan Karakter</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-stiker-baju-boneka">Seri Stiker Baju Boneka</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-tiger">Seri Tiger</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-topik-seru">Seri Topik Seru</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-yuk-menempel">Seri Yuk Menempel</a></li>
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/creativity-series">Creativity Series</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item has-child"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/cerita-anak">Cerita Anak</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/cerita-anak">Cerita Anak</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/populer-lainnya">Populer Lainnya</a></li>
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/edukasi-anak">Edukasi Anak</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/buku-anak-lainnya">Buku Anak Lainnya</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/membaca-dan-menulis">Membaca Dan Menulis</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/atlas-dan-geografi">Atlas dan Geografi</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/buku-stiker">Buku Stiker</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/cerita-rakyat-nusantara">Cerita Rakyat Nusantara</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/creative-writing">Creative Writing</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/keterampilan-anak">Keterampilan Anak</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/lift-the-flap">Lift The Flap</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/menggambar-dan-mewarnai">Menggambar Dan Mewarnai</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/paket-buku-spesial">Paket Buku Spesial</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/ensiklopedia">Ensiklopedia</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/seri-ulysses-moore">Seri Ulysses Moore</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
																			</ul>
								</div>
													</li>
											<li class="catalog__popover-item has-child">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=mainan-dan-hobi">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/007-control.svg">
								<span class="ml-2">Mainan & Hobi</span>
							</a>
															<div class="catalog__popover-popup">
									<ul class="catalog__popover-list">
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/perlengkapan-menggambar">Perlengkapan Menggambar</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/puzzle">Puzzle</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/diecast-dan-model-kit">Diecast & Model Kit</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/figur">Figur</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
																			</ul>
								</div>
													</li>
											<li class="catalog__popover-item has-child">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=gaya-hidup">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/038-battery.svg">
								<span class="ml-2">Gaya Hidup</span>
							</a>
															<div class="catalog__popover-popup">
									<ul class="catalog__popover-list">
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/tas">Tas</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/sepatu">Sepatu</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/tumbler">Tumbler</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item has-child"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/aksesoris">Aksesoris</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/">Masker anak</a></li>
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/voucher">Voucher</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
																			</ul>
								</div>
													</li>
											<li class="catalog__popover-item has-child">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=buku-import">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg">
								<span class="ml-2">Buku Import</span>
							</a>
															<div class="catalog__popover-popup">
									<ul class="catalog__popover-list">
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/fiction">Fiction</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
																			</ul>
								</div>
													</li>
											<li class="catalog__popover-item has-child">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=buku-murah">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg">
								<span class="ml-2">Buku Murah</span>
							</a>
															<div class="catalog__popover-popup">
									<ul class="catalog__popover-list">
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/agro-group">Agro Group</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/bhuana-lmu-populer">Bhuana lmu Populer</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/elex-media">Elex Media</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/gramedia">Gramedia</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/mizan-media-utama">Mizan Media Utama</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item has-child"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/promo-sales">Promo Sales</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/promo-buku-paket-25">Promo Buku Paket 25%</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/spesial-hari-kartini">Spesial Hari Kartini</a></li>
																											</ul>
												</div>
											</li>
																			</ul>
								</div>
													</li>
											<li class="catalog__popover-item has-child">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=olahraga-dan-outdoor">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/046-football-award.svg">
								<span class="ml-2">Olahraga dan Outdoor</span>
							</a>
															<div class="catalog__popover-popup">
									<ul class="catalog__popover-list">
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/gym-dan-fitness">Gym & Fitness</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/basket">Basket</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/sepakbola-dan-futsal">Sepakbola dan Futsal</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
																			</ul>
								</div>
													</li>
											<li class="catalog__popover-item has-child">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=atk">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg">
								<span class="ml-2">ATK</span>
							</a>
															<div class="catalog__popover-popup">
									<ul class="catalog__popover-list">
										
											<li class="catalog__popover-item has-child"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/perlengkapan-sekolah">Alat dan buku tulis</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/buku-tulis">Buku tulis</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/penghapus-dan-penggaris">Penghapus dan penggaris</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/pulpen-dan-pensil">Pulpen dan pensil</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/atk-lainnya">Lainnya</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/">buku agenda</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/correction-tape">Correction tape</a></li>
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item has-child"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/perlengkapan-kantor">Perlengkapan Kantor</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/penyimpanan">Penyimpanan</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/penjilidan">Penjilidan</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/kertas">Kertas</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/lainnnyaa">Lainnya</a></li>
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item has-child"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/organizer">IT Supply</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/lainnya3">Lainnya</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/mouse">Mouse</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/monitor">Monitor</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/flashdisk">flashdisk</a></li>
																													<li class="catalog__popover-item"><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/printer">Printer</a></li>
																											</ul>
												</div>
											</li>
																			</ul>
								</div>
													</li>
											<li class="catalog__popover-item ">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=sayuran-organik">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg">
								<span class="ml-2">Sayuran Organik</span>
							</a>
													</li>
											<li class="catalog__popover-item ">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=serba-15rb">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/024-confetti.svg">
								<span class="ml-2">Buku Flat</span>
							</a>
													</li>
											<li class="catalog__popover-item has-child">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=off-merchandise">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg">
								<span class="ml-2">Off. Merchandise</span>
							</a>
															<div class="catalog__popover-popup">
									<ul class="catalog__popover-list">
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/local-merch">Local Merch</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/import-merch">Import Merch</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
																			</ul>
								</div>
													</li>
											<li class="catalog__popover-item ">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg">
								<span class="ml-2">ACTION FIGURE</span>
							</a>
													</li>
											<li class="catalog__popover-item has-child">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=ebook">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg">
								<span class="ml-2">eBook</span>
							</a>
															<div class="catalog__popover-popup">
									<ul class="catalog__popover-list">
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/majalah">Majalah</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/koran">Koran</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/buku-sekolah">Buku Sekolah</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
										
											<li class="catalog__popover-item "><a class="catalog__popover-link" href="https://www.eurekabookhouse.co.id/category/menu/buku-umum-elib">Buku Umum</a>

												<div class="catalog__popover-popup">
													<ul class="catalog__popover-list">
																											</ul>
												</div>
											</li>
																			</ul>
								</div>
													</li>
											<li class="catalog__popover-item ">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg">
								<span class="ml-2">DIY</span>
							</a>
													</li>
											<li class="catalog__popover-item ">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg">
								<span class="ml-2"></span>
							</a>
													</li>
											<li class="catalog__popover-item ">
							<a class="catalog__popover-link flex-l" href="https://www.eurekabookhouse.co.id/cari/result/?category=ebook-elib">
								<img class="img-fluid size-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/nerd/010-book.svg">
								<span class="ml-2">ebook-elib</span>
							</a>
													</li>
									</ul>
			</nav>
		</div>
	</header> -->
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
			<router-link :to="'/notification'" class="ml-3 mr-3">
				<div id="cart" class="icon-header-item cl2 hov-cl1 trans-04 p-l-11 p-r-11">
					<i class="fa fa-bell cl0 fs-21"></i>
				</div>
			</router-link>
			<div style="width:13%; height:10; border:1px solid #fff">
				<router-link :to="'/cart'" class="wrap-icon-header flex-c-m p-3" data-id="">
					<div id="cart" class="icon-header-item cl2 hov-cl1 trans-04 p-l-11 p-r-11">
						<i class="fa fa-shopping-cart cl0"></i>
					</div>
					<span class="stext-107 cl0">Keranjang <span id="cart_notify"
							class="badge badge-warning superscript m-t--16 m-l-5 fs-20"></span></span>
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