<template>
    <div>
        <section style="background-color: #1f5781">
            <div class="container">
                <div class="p-tb-30">
                    <div class="flex-m stext-102">
                        <div class="avatar-profil p-r-20">
                            <img class="img-thumbnail" src="https://www.eurekabookhouse.co.id/assets/uplod/default-avatar.png">
                        </div>
                        <div class="profil-biodata cl0">
                            <h5 class="m-b-5">tasyakhaerani66 </h5>
                            <p class="m-b-5 text1l"><i class="fa fa-envelope m-r-10 fs-20"></i> tasyakhaerani66@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>	
        </section>
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
                                    <li><router-link :to="'/Users/Dashboarduser'">Dashboard</router-link></li>
                                    <li><router-link :to="'/Users/Profile'">Profil Saya</router-link></li>
        <!-- 							<li><a class="cl1" href="">Alamat Akun</a></li> -->
                                    <li><router-link :to="'/Users/terakhirdilihat'">Terakhir Dilihat</router-link></li>
                                    <li>
                                        <router-link :to="'/Users/notificationprofile'">Pemberitahuan</router-link>
                                    </li>
                                </ul>
                            </div>
                            <p class="stext-101 cl2 p-tb-6"><b>Transaksi</b></p>
                            <div class="flex-w flex-t bor12 p-b-13 stext-102 text-left">
                                <ul>
                                    <li><router-link :to="'/Users/alamat'">Alamat Kirim</router-link></li>
                                    <li><router-link :to="'/Users/metodebayar'">Metode Bayar</router-link></li>
                                    <!-- <li><a class="cl1" href="https://www.eurekabookhouse.co.id/frontend/account/kupon">Kupon</a></li> -->
                                    <!-- <li><a class="cl1" href="">Eureka! Poin</a></li> -->
                                </ul>
                            </div>
                        </div>
                    </div>
        
        
                                    <div class="col-lg-10 col-xl-9 p-lr-0-sm">
                                        <div class="bg0 bor10 p-all-15 m-b-10 p-lr-15-sm">
                                <p class="mtext-101 cl2 p-b-10">History Pemesanan</p>
                                <div class="row p-lr-15">
                                    <div class="card col-3 p-lr-0-sm p-tb-8">
                                        <a href="https://www.eurekabookhouse.co.id/frontend/account/history/get/0" class="card-body p-all-0 text-center">
                                            <p class="card-title m-b-0">
                                                <i class="fa fa-shopping-cart cl fa-2x"></i>
                                                <span class="badge badge-primary superscript">1</span>
                                            </p>
                                            <p class="card-text stext-107">Dipesan</p>
                                        </a>
                                    </div>
                                    <div class="card col-3 p-lr-0-sm p-tb-5">
                                        <a href="https://www.eurekabookhouse.co.id/frontend/account/history/get/2" class="card-body p-all-0 text-center">
                                            <p class="card-title m-b-0">
                                                <i class="fa fa-dropbox cl fa-2x"></i>
                                                <span class="badge badge-primary superscript"></span>
                                            </p>
                                            <p class="card-text stext-107">Diproses</p>
                                            
                                        </a>
                                    </div>
                                    <div class="card col-3 p-lr-0-sm p-tb-5">
                                        <a href="https://www.eurekabookhouse.co.id/frontend/account/history/get/3" class="card-body p-all-0 text-center">
                                            <p class="card-title m-b-0">
                                                <i class="fa fa-truck cl fa-2x"></i>
                                                <span class="badge badge-primary superscript"></span>
                                            </p>
                                            <p class="card-text stext-107">Dikirim</p>
                                            
                                        </a>
                                    </div>
                                    <div class="card col-3 p-lr-0-sm p-tb-5">
                                        <a href="https://www.eurekabookhouse.co.id/frontend/account/history/get/5" class="card-body p-all-0 text-center">
                                            <p class="card-title m-b-0">
                                                <i class="fa fa-thumbs-up cl fa-2x"></i>
                                                <span class="badge badge-primary superscript"></span>
                                            </p>
                                            <p class="card-text stext-107">Diterima</p>
                                            
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="m-b-10 d-md-none">
                                <div class="list-group stext-102">
                                    <a href="https://www.eurekabookhouse.co.id/account" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <span><i class="fa fa-dashboard p-r-10"></i> Dashboard</span>
                                            <span class="text-muted"><i class="fa fa-chevron-right"></i></span>
                                        </div>
                                    </a>
                                    <a href="https://www.eurekabookhouse.co.id/frontend/account/detail" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <span><i class="fa fa-user p-r-10"></i> Profil Saya</span>
                                            <span class="text-muted"><i class="fa fa-chevron-right"></i></span>
                                        </div>
                                    </a>
                                    <a href="https://www.eurekabookhouse.co.id/frontend/account/alamat" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <span><i class="fa fa-map-marker p-r-10"></i> Alamat kirim</span>
                                            <span class="text-muted"><i class="fa fa-chevron-right"></i></span>
                                        </div>
                                    </a>
                                    <a href="https://www.eurekabookhouse.co.id/account/bayar" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <span><i class="fa fa-credit-card p-r-10"></i> Metode Pembayaran</span>
                                            <span class="text-muted"><i class="fa fa-chevron-right"></i></span>
                                        </div>
                                    </a>
                                    <a href="https://www.eurekabookhouse.co.id/frontend/account/kupon" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <span><i class="fa fa-tag p-r-10"></i> Kupon</span>
                                            <span class="text-muted"><i class="fa fa-chevron-right"></i></span>
                                        </div>
                                    </a>
                                    <a href="https://www.eurekabookhouse.co.id/frontend/account/history/get/0" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <span><i class="fa fa-history p-r-10"></i> History Pemesanan</span>
                                            <span class="text-muted"><i class="fa fa-chevron-right"></i></span>
                                        </div>
                                    </a>
                                    <a href="https://www.eurekabookhouse.co.id/frontend/account/notification" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <span><i class="fa fa-bell p-r-10"></i> Pemberitahuan</span>
                                            <span class="text-muted"><i class="fa fa-chevron-right"></i></span>
                                        </div>
                                    </a>
                                    <a href="https://www.eurekabookhouse.co.id/login/logout" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <span><i class="fa fa-sign-out p-r-10"></i> Logout</span>
                                            <span class="text-muted"><i class="fa fa-chevron-right"></i></span>
                                        </div>
                                    </a>
                                </div> 
                            </div>
        
                            <div class="row">
                                <div class="d-none d-lg-block mr-4 ">
                                    <div class=" bg0 bor10 p-all-15 m-b-15 p-lr-15-sm" style="height: 210px">
                                        <router-link :to="'/Users/Profile' " class="btn btn-sm btn-primary pull-right"><i class="fa fa-pencil"></i></router-link>
                                        <p class="mtext-101 cl2 p-b-10">Akun</p>
                                        <p class="stext-102 cl2">tasyakhaerani66 </p>
                                        <p class="stext-102 cl2">tasyakhaerani66@gmail.com</p>
                                    </div>
                                </div>
                                <div class="d-none d-lg-block">
                                    <div class="bg0 bor10 p-all-15 m-b-10 p-lr-15-sm" style="height: 210px">
                                        <router-link :to="'/Users/alamat' " class="btn btn-sm btn-primary pull-right"><i class="fa fa-pencil"></i></router-link>
                                            <p class="mtext-101 cl2 p-b-10">Alamat Utama</p>
                                            <p class="stext-102 cl2">Tasya Tasya</p>
                                            <p class="stext-102 cl2">JL PENGADEGAN UTARA NO 20A RT 03/ RW 008 PANCORAN, JAKARTA SELATAN </p>
                                            <p class="stext-102 cl2">Pancoran , Jakarta Selatan Kota , DKI Jakarta</p>
                                            <p class="stext-102 cl2">085771942063</p>
                                                                    </div>
                                </div>
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
name: "DashboarduserPage",
}
</script>