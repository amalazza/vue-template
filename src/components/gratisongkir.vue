<template>
    <div>
        <section class="bg0 p-t-10">
            <div class="banner">
                <div class="mall-banner text-center">
                    <img src="https://www.eurekabookhouse.co.id/assets/uplod/promo/program/gratis-ongkir-seindonesia-min.jpg">
                </div>
            </div>
        </section>
        <section class="bg0 p-t-20">
            <div class="container p-tb-10">
                <div class="p-lr-200 p-lr-0-sm">
                    <div class="p-b-15 text-center">
                        <h3 class="session-title mtext-106 cl5">Gratis Ongkir ke Seluruh Indonesia</h3>
                        <span class="badge badge-primary">Pengiriman</span>
                    </div>
                    <div class="text-center">
                        <p class="stext-101">Belanja tanpa ongkir bikin dompet  engga khawatir</p>
                    </div>
                    <br>
                    <div class="row text-center stext-101">
                        <div class="col-md-4">
                            <div class="card m-b-5">
                                <div class="card-header">
                                    <span><b>Platform</b></span>
                                </div>
                                <div class="card-body">
                                    <span class="stext-107">Semua</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card m-b-5">
                                <div class="card-header">
                                    <span><b>Periode Promo</b></span>
                                </div>
                                <div class="card-body">
                                    <span class="stext-107">01 Apr 2019 - 01 Jan 2020	</span>					</div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card m-b-5">
                                <div class="card-header">
                                    <span><b>Minimum Pembelian</b></span>
                                </div>
                                <div class="card-body">
                                    <span class="stext-107">Rp.120.000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                                <div class="row">
                        <div class="col-12 col-md-6 ruang-kupon" >
                            <div class="text-center full-w">
                                <div class="">
                                    <div class="card bg1" >
                                        <div class="card-body text-center" style="background-color: #207dbb">
                                            <span class="card-title cl0 mtext-107">Gratis Ongkir EBH</span>
                                            <div class="p-tb-10">
                                                <button type="button" onclick="ambil_kupon(7,)" class="btn btn-block btn-warning mtext-106 cl2 bor1">KLAIM</button>
                                            </div>
                                            <div class="cl0 stext-107">
                                                <p>Potongan Rp.20.000</p>
                                                <span>Berlaku hingga 31 Dec 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <small><i>*Klik tombol diatas untuk mendapatkan 5 kupon gratis</i></small>
                            </div>
                        </div>
                    </div>
                            <br>
                    <div>
                        <div class="text-center mtext-106 cl5">
                            <h4><u>Syarat & Ketentuan</u></h4><br>
                        </div>
                        <div class="stext-107"><ol>
            <li>Minimal belanja Rp 120.000 (setelah diskon &amp; tidak termasuk ongkir)</li>
            <li>Subsidi ongkir Rp 20.000 (lebih dari Rp 20.000, sisa ditanggung oleh pembeli)</li>
            <li>Promo berlaku untuk pengiriman ke seluruh wilayah Indonesia&nbsp;&nbsp;</li>
            <li>Promo berlaku untuk pembelian via website (desktop/mobile) ataupun aplikasi android</li>
            <li>Periode promo selama tahun 2019</li>
            <li>Syarat dan ketentuan promo dapat berubah sewaktu-waktu tanpa pemberitahuan&nbsp;&nbsp;</li>
        </ol>
        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script scope>
    export default {
      name: "gratisongkirPage",
    }
    </script>

<style type="text/css">
    /*.banner{height: 300px;}*/
    @media (min-width: 767px) {
        .mall-banner{height: 300px;}
    }
    .mall-banner img{height: 100%;object-fit: contain;}
    .card-img-top{height:100%;object-fit: cover;}
    .ruang-kupon{margin: 0 auto;}
    .full-w{width: 100%}
    ol li{list-style-type:decimal;}
    </style>