<template>
    <div>
    <section class="bg6 p-t-10 p-b-10">
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
    
    
                    <div class="col-lg-10 col-xl-9 p-lr-0-sm text-left">
                        <h3 class="ltext-101 cl1 m-b-10">Notification</h3>
                        <div class="list-group">
                            <a href="https://www.eurekabookhouse.co.id/frontend/pemesanan/detail/pesanan/2147483647"
                                class="list-group-item ">
                                <div class="media">
                                    <img src="https://cdn.eurekabookhouse.co.id/ebh/icon/other/cancel.svg"
                                        class="mr-3 icon-notif" alt="...">
                                    <div class="media-body">
                                        <div class="d-flex w-100 justify-content-between">
                                            <p class="cl2 stext-101">Pesanan Settlement</p>
                                            <small class="text-muted"><i class="fa fa-history"></i> 5 hari</small>
                                        </div>
                                        <small class="text-muted">Pesanan anda dengan kode pesanan: 16668605995879832717111
                                            telah settlement</small>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.eurekabookhouse.co.id/frontend/pemesanan/detail/pesanan/2147483647"
                                class="list-group-item ">
                                <div class="media">
                                    <img src="https://cdn.eurekabookhouse.co.id/ebh/icon/other/cancel.svg"
                                        class="mr-3 icon-notif" alt="...">
                                    <div class="media-body">
                                        <div class="d-flex w-100 justify-content-between">
                                            <p class="cl2 stext-101">Pesanan Pending</p>
                                            <small class="text-muted"><i class="fa fa-history"></i> 5 hari</small>
                                        </div>
                                        <small class="text-muted">Pesanan anda dengan kode pesanan: 16668605995879832717111
                                            telah pending</small>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.eurekabookhouse.co.id/frontend/pemesanan/detail/pesanan/2147483647"
                                class="list-group-item ">
                                <div class="media">
                                    <img src="https://cdn.eurekabookhouse.co.id/ebh/icon/other/cancel.svg"
                                        class="mr-3 icon-notif" alt="...">
                                    <div class="media-body">
                                        <div class="d-flex w-100 justify-content-between">
                                            <p class="cl2 stext-101">Pesanan Settlement</p>
                                            <small class="text-muted"><i class="fa fa-history"></i> 5 hari</small>
                                        </div>
                                        <small class="text-muted">Pesanan anda dengan kode pesanan: 16668448465099832717093
                                            telah settlement</small>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.eurekabookhouse.co.id/frontend/pemesanan/detail/pesanan/2147483647"
                                class="list-group-item ">
                                <div class="media">
                                    <img src="https://cdn.eurekabookhouse.co.id/ebh/icon/other/cancel.svg"
                                        class="mr-3 icon-notif" alt="...">
                                    <div class="media-body">
                                        <div class="d-flex w-100 justify-content-between">
                                            <p class="cl2 stext-101">Pesanan Pending</p>
                                            <small class="text-muted"><i class="fa fa-history"></i> 5 hari</small>
                                        </div>
                                        <small class="text-muted">Pesanan anda dengan kode pesanan: 16668448465099832717093
                                            telah pending</small>
                                    </div>
                                </div>
                            </a>
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
    name: "notificationprofilePage",
}
</script>
