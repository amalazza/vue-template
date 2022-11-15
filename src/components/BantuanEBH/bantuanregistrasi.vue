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
        <section class="mt-3 bg0">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 bor9 text-left">
                        <div id="gede-saja" class="list-group">
                        <router-link :to="'/BantuanEBH/tentang'" class="list-group-item list-group-item-action">Tentang Eureka Bookhouse</router-link>
                        <router-link :to="'/BantuanEBH/bantuanregistrasi'" class="list-group-item list-group-item-action">Registrasi</router-link>
                        <router-link :to="'/BantuanEBH/akunmember'" class="list-group-item list-group-item-action">Akun Member</router-link>
                        <router-link :to="'/BantuanEBH/belanja'" class="list-group-item list-group-item-action">Belanja</router-link>
                        <router-link :to="'/BantuanEBH/pembayaran'" class="list-group-item list-group-item-action">Pembayaran</router-link>
                        <router-link :to="'/BantuanEBH/pengiriman'" class="list-group-item list-group-item-action">Pengiriman</router-link>
                        <router-link :to="'/BantuanEBH/produkditerima'" class="list-group-item list-group-item-action">Produk Diterima</router-link>
                        <router-link :to="'/BantuanEBH/kerjasama'" class="list-group-item list-group-item-action">Kerja Sama</router-link>
                        </div>
                    </div>
                    <div class="col-md-9 p-lr-0 text-left">
                        <div class="p-tb-15 p-lr-50">
                            <div class="media">
                                <img class="mr-3 bantuan-icon"
                                    src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ecommerce/007-customer-service.svg"
                                    alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5 class="mtext-101 mt-0">Registrasi</h5>
                                    <span class="stext-107">Sekilas tentang registrasi</span>
                                </div>
                            </div>
                        </div>
                        <hr class="m-tb-0">
                        <div class="p-tb-15 p-lr-50">
                            <ul>
                                <li class="m-tb-15">
                                    <a class="stext-101 cl2"
                                        href="registrasi-dan-akun-member/syarat-menjadi-member-eureka-bookhouse">Syarat menjadi
                                        member Eureka Bookhouse</a>
                                </li>
                            </ul>
                            <ul>
                                <li class="m-tb-15">
                                    <a class="stext-101 cl2"
                                        href="registrasi-dan-akun-member/biaya-mendaftar-di-eureka-bookhouse">Biaya mendaftar di
                                        Eureka Bookhouse</a>
                                </li>
                            </ul>
                            <ul>
                                <li class="m-tb-15">
                                    <a class="stext-101 cl2" href="registrasi-dan-akun-member/cara-daftar-dengan-e-mail">Cara
                                        Daftar Dengan E-mail</a>
                                </li>
                            </ul>
                            <ul>
                                <li class="m-tb-15">
                                    <a class="stext-101 cl2" href="registrasi-dan-akun-member/cara-daftar-dengan-gmail">Cara
                                        Daftar Dengan Gmail</a>
                                </li>
                            </ul>
                            <ul>
                                <li class="m-tb-15">
                                    <a class="stext-101 cl2" href="registrasi-dan-akun-member/cara-daftar-dengan-facebook">Cara
                                        Daftar Dengan Facebook</a>
                                </li>
                            </ul>
                            <ul>
                                <li class="m-tb-15">
                                    <a class="stext-101 cl2"
                                        href="registrasi-dan-akun-member/cara-login-ke-eureka-bookhouse">Cara Login ke Eureka
                                        Bookhouse</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="footer">
            <div class="container text-center">
                <span class="text-muted">Dikembangkan oleh Eureka IT Developer</span>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'bantuanregistrasiPage',
}
</script>
<style>
.wrap-icon-header {
    position: absolute;
}

.logo {
    position: relative;
    margin: 0 auto;
}

.logo img {
    height: 50px;
    margin-bottom: 10px;
}

.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
}

html {
    position: relative;
    min-height: 100%;
}

body {
    margin-bottom: 60px;
}

.sidenav {
    box-shadow: 5px 0 5px -2px #888;
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #eee;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.sidenav .menu a:hover {
    color: #000;
    background-color: yellow;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }

    .sidenav a {
        font-size: 18px;
    }
}

.burger {
    position: absolute;
    font-size: 30px;
    cursor: pointer;
    color: white
}

.navbar {
    background-color: #2C6B9B
}
</style>