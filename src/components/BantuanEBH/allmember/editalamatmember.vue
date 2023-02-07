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
                            <router-link :to="'/BantuanEBH/tentang'" class="list-group-item list-group-item-action">
                                Tentang
                                Eureka Bookhouse
                            </router-link>
                            <router-link :to="'/BantuanEBH/bantuanregistrasi'"
                                class="list-group-item list-group-item-action">
                                Registrasi
                            </router-link>
                            <router-link :to="'/BantuanEBH/akunmember'" class="list-group-item list-group-item-action">
                                Akun
                                Member</router-link>
                            <router-link :to="'/BantuanEBH/belanja'" class="list-group-item list-group-item-action">
                                Belanja
                            </router-link>
                            <router-link :to="'/BantuanEBH/pembayaran'" class="list-group-item list-group-item-action">
                                Pembayaran</router-link>
                            <router-link :to="'/BantuanEBH/pengiriman'" class="list-group-item list-group-item-action">
                                Pengiriman</router-link>
                            <router-link :to="'/BantuanEBH/produkditerima'"
                                class="list-group-item list-group-item-action">
                                Produk Diterima
                            </router-link>
                            <router-link :to="'/BantuanEBH/kerjasama'" class="list-group-item list-group-item-action">
                                Kerja Sama
                            </router-link>
                        </div>
                    </div>
                    <div class="col-md-9 p-lr-0">
                        <div class="p-tb-15 p-lr-50">
                            <div class="media">
                                <img class="mr-3 bantuan-icon"
                                    src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ecommerce/007-customer-service.svg"
                                    alt="Generic placeholder image">
                                <div class="media-body text-left">
                                    <h5 class="mtext-101 mt-0 ">Tentang Eureka Bookhouse</h5>
                                    <span class="stext-107">Sekilas tentang tentang eureka bookhouse</span>
                                </div>
                            </div>
                        </div>
                        <hr class="m-tb-0">
                        <div class="p-tb-15 p-lr-50 text-left">
                            <ul>
                                <li class="m-tb-15">
                                    <a class="stext-101 cl2" href="tentang-buka-lapak/tentang-eureka-bookhouse">Sekilas
                                        Eureka
                                        Bookhouse</a>
                                </li>
                            </ul>
                            <ul>
                                <li class="m-tb-15">
                                    <a class="stext-101 cl2" href="tentang-buka-lapak/hubungi-eureka-bookhouse">Hubungi
                                        Eureka
                                        Bookhouse</a>
                                </li>
                            </ul>
                            <ul>
                                <li class="m-tb-15">
                                    <a class="stext-101 cl2"
                                        href="tentang-buka-lapak/keuntungan-menjadi-member-eureka-bookhouse">Keuntungan
                                        menjadi
                                        member Eureka Bookhouse</a>
                                </li>
                            </ul>
                            <ul>
                                <li class="m-tb-15">
                                    <a class="stext-101 cl2" href="tentang-buka-lapak/syarat-layanan">Syarat Layanan</a>
                                </li>
                            </ul>
                            <ul>
                                <li class="m-tb-15">
                                    <a class="stext-101 cl2" href="tentang-buka-lapak/return-policy">Return Policy</a>
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
    name: "editalamatmemberPage",
}
</script>