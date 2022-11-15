<template>
<div>
<header>
    <nav class="navbar">
        <div class="container">
            <ul class="nav navbar-nav navbar-logo mx-auto">
                <li class="nav-item">
                    <a href="https://www.eurekabookhouse.co.id/" class="logo">
                        <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ebhcom-header_new.png"
                            alt="IMG-LOGO">
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</header>
    <section class="mb-4">
        <div class="container">
            <div class="text-center">
                <h3 class="mtext-103 cl2 mt-4 mb-4"><u><b>Cara Berbelanja di eurekabookhouse.co.id</b></u></h3>
            </div>
            <div class="row">
                            <div class="col-md-3 cl2">
                    <img class="bantuan-icon m-b-15" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ecommerce/007-customer-service.svg">
                    <router-link :to="'/BantuanEBH/bantuanregistrasi'" class=""><h4 class="mtext-101 m-b-10 cl2">Registrasi</h4></router-link>
                    <ul class="stext-107 ">
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/registrasi-dan-akun-member/syarat-menjadi-member-eureka-bookhouse">Syarat menjadi member Eureka Bookhouse</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/registrasi-dan-akun-member/biaya-mendaftar-di-eureka-bookhouse">Biaya mendaftar di Eureka Bookhouse</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/registrasi-dan-akun-member/cara-daftar-dengan-e-mail">Cara Daftar Dengan E-mail</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/registrasi-dan-akun-member/cara-daftar-dengan-gmail">Cara Daftar Dengan Gmail</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/registrasi-dan-akun-member/cara-daftar-dengan-facebook">Cara Daftar Dengan Facebook</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/registrasi-dan-akun-member/cara-login-ke-eureka-bookhouse">Cara Login ke Eureka Bookhouse</a></li>
                                        </ul>
                </div>
                            <div class="col-md-3 cl2">
                    <img class="bantuan-icon m-b-15" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ecommerce/007-customer-service.svg">
                    <router-link :to="'/BantuanEBH/akunmember'" class=""><h4 class="mtext-101 m-b-10 cl2">Akun Member</h4></router-link>
                    <ul class="stext-107">
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/akun-member/mengubah-nama-akun">Mengubah Nama Akun</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/akun-member/mengubah-foto-akun">Mengubah Foto Akun</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/akun-member/tentang-username-akun">Tentang username akun</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/akun-member/mengubah-password-akun">Mengubah Password Akun</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/akun-member/cara-menambah-atau-mengubah-alamat-akun">Cara Menambah atau Mengubah Alamat Kirim</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/akun-member/cara-mengatur-alamat-utama-akun">Mengatur Alamat Utama Kirim</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/akun-member/cara-menghapus-alamat-akun">Cara Menghapus Alamat Kirim</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/akun-member/kebijakan-privasi">Kebijakan Privasi</a></li>
                                        </ul>
                </div>
                            <div class="col-md-3 cl2 text-center">
                    <img class="bantuan-icon m-b-15" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ecommerce/023-gift.svg">
                    <router-link :to="'/BantuanEBH/belanja'" class=""><h4 class="mtext-101 m-b-10 cl2">Belanja</h4></router-link>
                    <ul class="stext-107">
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/belanja/ada-masalah-pada-promo--cashback--voucher">Ada masalah pada promo/ cashback/ voucher</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/belanja/menambahkan-barang-ke-keranjang">Menambahkan barang ke keranjang</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/belanja/melakukan-checkout">Melakukan Checkout</a></li>
                                        </ul>
                </div>
                            <div class="col-md-3 cl2 text-center">
                    <img class="bantuan-icon m-b-15" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ecommerce/048-bill.svg">
                    <router-link :to="'/BantuanEBH/pembayaran'" class=""><h4 class="mtext-101 m-b-10 cl2">Pembayaran</h4></router-link>
                    <ul class="stext-107">
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/pembayaran/konfirmasi-pembayaran">Konfirmasi Pembayaran</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/pembayaran/transfer-tidak-sesuai-tagihan">Transfer Tidak Sesuai Tagihan</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/pembayaran/pesanan-saya-belum-diproses-penjual">Pesanan saya belum diproses penjual</a></li>
                                        </ul>
                </div>
                            <div class="col-md-3 cl2 text-center">
                    <img class="bantuan-icon m-b-15" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ecommerce/037-delivery.svg">
                    <router-link :to="'/BantuanEBH/pengiriman'" class=""><h4 class="mtext-101 m-b-10 cl2">Pengiriman</h4></router-link>
                    <ul class="stext-107">
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/pengiriman/pesanan-belum-diterima">Pesanan Belum Diterima</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/pengiriman/resi-tidak-valid---update">Resi Tidak Valid / Update</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/pengiriman/saya-tidak-bisa-melacak-pengiriman">Saya tidak bisa melacak pengiriman</a></li>
                                        </ul>
                </div>
                            <div class="col-md-3 cl2 text-center">
                    <img class="bantuan-icon m-b-15" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ecommerce/026-delivery-1.svg">
                    <router-link :to="'/BantuanEBH/produkditerima'" class=""><h4 class="mtext-101 m-b-10 cl2">Produk Diterima</h4></router-link>
                    <ul class="stext-107">
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/produk-diterima/apa-itu-race-coin">Apa itu Race Coin</a></li>
                                            <li><a class="cl2" href="https://www.eurekabookhouse.co.id/bantuan/detail/produk-diterima/saya-telah-menerima-pesanan">Saya telah menerima pesanan</a></li>
                                        </ul>
                </div>
                        </div>
        </div>
    </section>
    <section class="pt-5 pb-5 bg2">
        <div class="container p-tb-30">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="ltext-105 cl2 m-b-30 text-left"><b>Menjawab pertanyaan anda</b></h2>
                    <h4 class="mtext-108 cl3 text-left">Pada halaman bantuan, kami menampilkan pertanyaan-pertanyaan yang sering disampaikan pelanggan. Semoga membantu dan selamat berbelanja.</h4>
                </div>
                <div class="col-md-6">
                    <img class="img-fluid" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/bantuan/Untitled-1-min.jpg">
                </div>
            </div>
        </div>
    </section>
    <section class="m-tb-40">
        <div class="container">
            <div class="text-center m-b-30">
                <h4 class="mtext-103 cl2 mt-4 mb-4">Semua Topik Bantuan</h4>
            </div>
            <div class="row text-left">
                                <div class="col-md-4 p-tb-10">
                        <router-link :to="'/BantuanEBH/tentang'" class="">
                        <div class="card">
                            <div class="card-body">
                                <div class="media">
                                    <img class="mr-3 bantuan-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ecommerce/007-customer-service.svg" alt="Generic placeholder image">
                                    <div class="media-body cl2">
                                        <h5 class="mt-0">Tentang Eureka Bookhouse</h5>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    </div>
                                <div class="col-md-4 p-tb-10">
                            <router-link :to="'/BantuanEBH/bantuanregistrasi'" class="">
                            
                        <div class="card">
                            <div class="card-body">
                                <div class="media">
                                    <img class="mr-3 bantuan-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ecommerce/007-customer-service.svg" alt="Generic placeholder image">
                                    <div class="media-body cl2">
                                        <h5 class="mt-0">Registrasi</h5>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    </div>
                                <div class="col-md-4 p-tb-10">
                        <router-link :to="'/BantuanEBH/akunmember'" class="">
                        <div class="card">
                            <div class="card-body">
                                <div class="media">
                                    <img class="mr-3 bantuan-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ecommerce/007-customer-service.svg" alt="Generic placeholder image">
                                    <div class="media-body cl2">
                                        <h5 class="mt-0">Akun Member</h5>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        </router-link>
                    </div>
                                <div class="col-md-4 p-tb-10">
                    <router-link :to="'/BantuanEBH/belanja'" class="">
                        <div class="card">
                            <div class="card-body">
                                <div class="media">
                                    <img class="mr-3 bantuan-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ecommerce/023-gift.svg" alt="Generic placeholder image">
                                    <div class="media-body cl2">
                                        <h5 class="mt-0">Belanja</h5>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        </router-link>
                    </div>
                                <div class="col-md-4 p-tb-10">
                        <router-link :to="'/BantuanEBH/pembayaran'" class="">
                        <div class="card">
                            <div class="card-body">
                                <div class="media">
                                    <img class="mr-3 bantuan-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ecommerce/048-bill.svg" alt="Generic placeholder image">
                                    <div class="media-body cl2">
                                        <h5 class="mt-0">Pembayaran</h5>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        </router-link>
                    </div>
                                <div class="col-md-4 p-tb-10">
                        <router-link :to="'/BantuanEBH/pengiriman'" class="">
                        <div class="card">
                            <div class="card-body">
                                <div class="media">
                                    <img class="mr-3 bantuan-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ecommerce/037-delivery.svg" alt="Generic placeholder image">
                                    <div class="media-body cl2">
                                        <h5 class="mt-0">Pengiriman</h5>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        </router-link>
                    </div>
                                <div class="col-md-4 p-tb-10">
                        <router-link :to="'/BantuanEBH/produkditerima'" class="">
                        <div class="card">
                            <div class="card-body">
                                <div class="media">
                                    <img class="mr-3 bantuan-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ecommerce/026-delivery-1.svg" alt="Generic placeholder image">
                                    <div class="media-body cl2">
                                        <h5 class="mt-0">Produk Diterima</h5>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        </router-link>
                    </div>
                                <div class="col-md-4 p-tb-10">
                        <a href="https://www.eurekabookhouse.co.id/bantuan/detail/kerja-sama">
                        <div class="card">
                            <div class="card-body">
                                <div class="media">
                                    <img class="mr-3 bantuan-icon" src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ecommerce/026-delivery-1.svg" alt="Generic placeholder image">
                                    <div class="media-body cl2">
                                        <h5 class="mt-0">Kerja Sama</h5>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>
                        </div>
        </div>
    </section>
    <section class="pt-3 pb-3 mt-4 bg1">
        <div class="container text-light">
            <div class="text-center mb-5">
                <h3 class="mtext-103 cl0"><b>Ada Pertanyaan Lain?</b></h3>
                <h4 class="stext-107 cl0">Customer Care kami siap membantu</h4>
            </div>
            <div class="row p-lr-150 flex-sa">
                <div class="col-md-4 p-all-20">
                    <div class="ktkbwh-img p-b-5">
                        <h1 class="cl0"><i class="fa fa-phone"></i></h1>
                    </div>
                    <div class="ktkbwh-text">
                        <span class="stext-111 cl12">Kami siap membantu 24 jam selama 365 hari</span>
                    </div>
                    <h4 class="stext-101 cl0">021 - 8779 6010</h4>
                    <h4 class="stext-101 cl0">087888337555</h4>
                </div>
                <div class="col-md-4 p-all-20">
                    <div class="ktkbwh-img p-b-5">
                        <h1 class="cl0"><i class="fa fa-envelope-o"></i></h1>
                    </div>
                    <div class="ktkbwh-text">
                        <span class="stext-111 cl12">Kami akan membalas email Anda sesegera mungkin</span>
                    </div>
                    <h4 class="stext-101 cl0">info@eurekabookhouse.co.id</h4>
                </div>
                <div class="col-md-4 p-all-20">
                    <div class="ktkbwh-img p-b-5">
                        <h1 class="cl0"><i class="fa fa-comments-o"></i></h1>
                    </div>
                    <div class="ktkbwh-text">
                        <span class="stext-111 cl12">Chat langsung dengan Customer Care kami</span>
                    </div>
                    <h4 class="stext-101 cl0">Live Chat</h4>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script scope>
    export default {
      name: "bantuanPage",
    }
    </script>


<style>
.bantuan-icon{
        width: 60px;
    }
    .side-bantuan li{
        padding-top: 5px;
        padding-bottom: 5px;
    }   
    .section-banner{
        background-image: url('https: //images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80');
    }
    ul,li{
        list-style-type: none;
    }
    ul{
        padding: 0
    }
    .centering {
      float:none;
      margin:0 auto;
    }
    .row-fluid {height: 100%; display:table-cell; vertical-align: middle;}
    .section-banner{
          height:100%;
      display:table;
      width: 100%;
      padding: 0;
    }
    .cl2{color: black}
    .bg1{background-color: #207DBB}
    .bg2{background-color: #eee;}
</style>
    
 