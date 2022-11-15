<template>
  <div>
    <section class="bg6 p-t-10 p-b-10">
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
                                    <li><a class="cl1" href="https://www.eurekabookhouse.co.id/account/">Dashboard</a></li>
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
    
    
                <div class="col-lg-10 col-xl-9 m-b-25">
                    <div class="bg4 m-b-10">
                        <p class="mtext-101 cl2 p-tb-10 text-left">Alamat Pengiriman</p>
                        <div class="card m-b-5">
                            <div class="card-body">
                                <div class="btn-group pull-right" role="group" aria-label="Basic example">
                                    <router-link :to="'/Users/editalamat' "
                                        type="button" class="btn btn-sm btn-primary"><i class="fa fa-pencil"></i></router-link>
                                    <a href="https://www.eurekabookhouse.co.id/frontend/account/alamat/alamat_remove/97039"
                                        type="button" class="btn btn-sm btn-danger"
                                        onclick='return confirm("Yakin Hapus?")'><i class="fa fa-times"></i></a>
                                    
                                </div>
                                <h5 class="card-title text-left">Tasya Khaerani </h5>
                                <h6 class="card-subtitle mb-2 text-muted text-left">085771942063</h6>
                                <p class="card-text text-left">JL Pengadegan Utara no 20A Pancoran Jakarta Selatan</p>
                                <p class="card-text text-left">Cengkareng , Jakarta Barat Kota , DKI Jakarta, 12770</p>
                            </div>
                        </div>
                        <br>

                        <router-link :to="'/Users/tambahalamat'"
                            class="btn btn-lg btn-block btn-success" role="button"><i class="fa fa-plus"></i> Tambah Alamat
                            Pengiriman Lain</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
export default {
    name: "alamatPage",
}
</script>
