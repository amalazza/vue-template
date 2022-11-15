<template>
    <div>
        <section class="bg6 p-t-10 p-b-10">
            <div class="container">
                <!-- 		<form id="payment_cancel" class="payment-form p-b-85"> -->
                            <input type="hidden" name="order_id" value="2209060002">
                <div class="row">
                    <div class="col-lg-10 col-xl-8 m-b-15 p-lr-0-sm text-left">
                        <div class="card m-b-10 bs1">
                            <div class="card-body">
    
                                <p class="mtext-101 cl2 p-tb-10">Pesanan #2209060002</p>
                                <hr>
                                <p class="mtext-101 cl2 p-tb-10">Alamat Pengiriman</p>
                                <p class="stext-101 cl2 m-b-5">Tasya Khaerani</p>
                                <p class="stext-102 cl2 m-b-5">
                                    JL PENGADEGAN UTARA NO 20A PANCORAN, JAKARTA SELATAN							</p>
                                <p class="stext-102 cl2">Pancoran , Jakarta Selatan Kota , DKI Jakarta, 12770<br>085771942063</p>
                            </div>
                        </div>
                        
                            <h5 class="card-title"></h5>
                            <ul id="tblProducts" class="bg0 bs1 list-group list-group-flush m-b-10">
                                <li class="list-group-item cl2 stext-107 active">
                                    <div class="stext-107">
                                        <h4 class="mtext-101"><i class="fs-28 fa fa-diamond"></i> New Order</h4>
                                        <p>Segera lakukan pembayaran dengan mengikuti <b>petujuk pembayaran</b></p>
                                        <p>Klik <b>Tombol Konfirmasi Bayar</b> pada Home lalu lengkapi form yang tersedia</p>
                                        <p> | <b>Nomor Order:</b> 16975</p>
                                    </div>
                                </li>
                                                                <li class="list-group-item cl2 stext-107">
                                        <div class="media">
                                            <div class="img-produk-cart">
                                                <img src="https://cdn.eurekabookhouse.co.id/ebh/product/all/2014005020.jpg" alt="IMG" onerror="this.src='https://www.eurekabookhouse.co.id/assets/front/images/eureka-bookhouse-bg-grey.jpg';">
                                            </div>
                                            <div class="media-body m-l-15">
                                                <a class="cl2" href="https://www.eurekabookhouse.co.id/product/kartu-angka--huruf-hijaiah-erlangga-efk-eurekabookhouse.co.id">
                                                    <h6 class="m-b-5 text1l">Kartu Angka & Huruf Hijaiah</h6>
                                                </a>
                                                <p class="card-text">1x <s> Rp.65.000</s> <span class="fs-16 cl1"><b>Rp.52.000</b></span></p>
                                            </div>
                                        </div>
                                    </li>
                                                                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <span>Sub-Total</span>
                                        <span>Rp.52.000</span>
                                    </li>
                                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <span>JNE - Jakarta Selatan Kota </span>
                                        <span>Rp.9.000</span>
                                    </li>
                                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <span>Free-Ongkir</span>
                                        <span>Rp.0</span>
                                    </li>
                                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <span>Total</span>
                                        <span>Rp.61.000</span>
                                    </li>
                                                            <li class="list-group-item">
                                    <div class="text-center">
                                                                                <center><br><span class="p-all-10 stext-102">Pengiriman dapat anda lacak setelah barang anda berstatus <a href="#"><b>"Dikirim oleh Penjual"</b> <i class="fa fa-info-circle"></i></a></span></center>
                                                                        </div>
                                </li>
                            </ul>
                            <input type="hidden" id="waybill_1" value="">
                            <input type="hidden" id="courier_1" value="jne">
                            <br>
                                        </div>
                    <div class="col-sm-10 col-lg-7 col-xl-4 p-lr-0-sm">
                                                <div class="card p-all-15 p-lr-15-sm mb-3 bgu3 bs1">
                                <div class="text-center">
                                    <p class="stext-103">Dibuat pada</p>
                                    <p class="mtext-101"><b>06 Sep 2022 13:13:58</b></p>
                                    <small><i>Pembayaran aktif sampai 24 jam setelah pemesanan dibuat</i></small>
                                </div>
                            </div>
                                            <div class="card p-all-15 p-lr-15-sm bs1 text-left">
                            <p class="stext-102 cl2 p-tb-8">
                               <b> Rincian Bayar</b>
                            </p>
                            <div class="flex-w flex-t p-tb-8">
                                <div class="size-208">
                                    <span class="stext-110 cl2">
                                        Subtotal
                                    </span>
                                </div>
                                <div class="size-209 text-right">
                                    <span class="mtext-110 cl2">
                                        Rp.52.000								</span>
                                </div>
                            </div>
                            <div class="flex-w flex-t p-tb-8">
                                <div class="size-208">
                                    <span class="stext-110 cl2">
                                        Ongkos Kirim
                                    </span>
                                </div>
                                <div class="size-209 text-right">
                                    <span class="mtext-110 cl2">
                                        Rp.9.000								</span>
                                </div>
                            </div>
    
                            
    
                                                                            <div class="flex-w flex-t p-tb-8">
                                <div class="size-208">
                                    <span class="stext-110 cl2">
                                        <b>Grand Total</b>
                                    </span>
                                </div>
                                <div class="size-209 text-right">
                                    <span class="mtext-108 cl1">
                                        <b>Rp.61.000</b>
                                    </span>
                                </div>
                            </div>
                                                        <button onclick="bayar_orderan(2209060002)"  v-b-modal.modal-1 class="desktop-only flex-c-m stext-101 cl0 size-116 bg1 hov-btn1 p-lr-15 trans-04 pointer">
                                    Pembayaran
                                </button>
                                <router-link :to="'/pesananbatal'" class="desktop-only flex-c-m stext-101 cl0 size-116 bgu2 hov-btn1 p-lr-15 trans-04 pointer">
                                    Batalkan pesanan
                                </router-link>
    
                                                    
                        </div>
                        <b-modal id="modal-1">
                            <b-link href="https://app.sandbox.midtrans.com/snap/v3/redirection/0c5123d1-6de0-4fcf-ba75-378f9b528c9f"></b-link>
                        </b-modal>
                        <div class="text-center m-t-10">
                            <span class="stext-107"><b>Informasi:</b> 087888337555 (WA)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script scope>
    export default {
      name: "pesananPage",
    }
    </script>