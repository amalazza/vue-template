<template>
<section class="bg6 p-t-15 p-b-10">
    <form id="form-cart" class="p-b-85">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-xl-3 m-lr-auto m-b-50 d-none d-lg-block text-left">
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
                    <h3 class="ltext-101 cl1 m-b-10">Terakhir Dilihat</h3>
                    <div class="bg0 bor10 p-all-15 m-b-10 p-lr-15-sm">
                        <div class="row p-lr-10">
                            <div class="col-md-3 p-lr-5">
                                <div class="block2 bg0">
                                    <div class="block2-pic hov-img0 label-new text-center" data-label="0%">
                                        <a href="https://www.eurekabookhouse.co.id/dashboard/product/21669"
                                            class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            <img class="img-responsive"
                                                src="http://eurekabookhouse.co.id/image/SPIRAL NOTEBOOK LA560.jpg">
                                        </a>
                                    </div>
                                    <div class="block2-txt flex-w flex-t p-all-8">
                                        <div class="block2-txt-child1 flex-col-l">
                                            <a href="https://www.eurekabookhouse.co.id/dashboard/product/21669"
                                                class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                DELI SPIRAL NOTEBOOK LA560 </a>
                                            <p class="stext-105">
                                                <s><small>Rp.20.000</small></s> <strong
                                                    class="cl13 fs-15">Rp.20.000</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 p-lr-5">
                                <div class="block2 bg0">
                                    <div class="block2-pic hov-img0 label-new text-center" data-label="20%">
                                        <a href="https://www.eurekabookhouse.co.id/dashboard/product/22589"
                                            class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            <img class="img-responsive"
                                                src="http://eurekabookhouse.co.id/image/BOARDBOOK PERTAMAKU HEWAN.jpg">
                                        </a>
                                    </div>
                                    <div class="block2-txt flex-w flex-t p-all-8">
                                        <div class="block2-txt-child1 flex-col-l">
                                            <a href="https://www.eurekabookhouse.co.id/dashboard/product/22589"
                                                class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Boardbook Pertamaku: Hewan </a>
                                            <p class="stext-105">
                                                <s><small>Rp.165.000</small></s> <strong
                                                    class="cl13 fs-15">Rp.132.000</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</section>
</template>

<script>
export default {
    name : "terakhirdilihatPage",
}
</script>