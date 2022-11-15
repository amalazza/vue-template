<template>
    <div>
        <section class="bg6 p-t-15 p-b-10">
	<form id="form-cart" class="p-b-85">
		<div class="container">
			<div class="row">
            <div class="col-lg-7 col-xl-3 m-lr-auto m-b-50 d-none d-lg-block">
                <div class="bg0 bor10 p-all-15 m-b-10 p-lr-15-sm">
                    <p class="stext-102 cl2">
                        Halo, <b>tasyakhaerani66</b>
                    </p>
                    <hr>
                    <p class="stext-101 cl2 p-b-6"><b>Akun</b></p>
                    <div class="flex-w flex-t bor12 p-b-13 stext-102 text-left">
                        <ul>
                        <li>
                            <router-link :to="'/Users/Dashboarduser'">Dashboard</router-link>
                        </li>
                            <li>
                                <router-link :to="'/Users/Profile'">Profil Saya</router-link>
                            </li>
                            <!-- 							<li><a class="cl1" href="">Alamat Akun</a></li> -->
                            <li>
                                <router-link :to="'/Users/terakhirdilihat'">Terakhir Dilihat</router-link>
                            </li>
                            <li>
                                <router-link :to="'/Users/notificationprofile'">Pemberitahuan</router-link>
                            </li>
                        </ul>
                    </div>
                    <p class="stext-101 cl2 p-tb-6"><b>Transaksi</b></p>
                    <div class="flex-w flex-t bor12 p-b-13 stext-102 text-left">
                        <ul>
                            <li>
                                <router-link :to="'/Users/alamat'">Alamat Kirim</router-link>
                            </li>
                            <li>
                                <router-link :to="'/Users/metodebayar'">Metode Bayar</router-link>
                            </li>
                            <!-- <li><a class="cl1" href="https://www.eurekabookhouse.co.id/frontend/account/kupon">Kupon</a></li> -->
                            <!-- <li><a class="cl1" href="">Eureka! Poin</a></li> -->
                        </ul>
                    </div>
                </div>
            </div>


							<div class="col-lg-10 col-xl-9 m-lr-auto m-b-50 text-left">
					<div class="bg1 p-all-15 m-b-10 p-lr-15-sm cl0">
						<h4 class="stext-110"><i class="fa fa-truck"></i> Akun anda aktif</h4>
						<p>Tidak terjadi masalah dengan akun anda</p>
						<p>Kode User: 328493AS3</p>
					</div>
					<div class="bg0 bor10 p-all-15 m-b-10 p-lr-14-sm" style="min-height: 240px">
						<p class="mtext-101 cl2 p-b-10">Metode Pembayaran</p>
						<div class="text-center m-t-30">
							<i class="fa fa-credit-card fa-2x"></i>
							<p>Anda belum memiliki metode pembayaran</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
</section>
    </div>
</template>
<script>
export default {
    name : "metodebayarPage",
}
</script>