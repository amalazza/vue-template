<template>
    <section class="bg6 p-t-35 p-b-10">
        <div class="container">
                        
                                        <input type="hidden" id="terpilih" name="terpilih" value="90671">
                    
                    <div class="row">
                        <div class="col-lg-10 col-xl-12 m-lr-auto m-b-50 text-left" style="margin-bottom: 0px!important;">
                                                        <div class="bg1 p-all-15 m-b-10 p-lr-15-sm cl0">
                                    <h4 class="stext-110"><i class="fa fa-info-circle"></i> Pemesanan anda hampir selesai!</h4>
                                    <p>Pilih cara termudah anda untuk melakukan transaksi dengan berbagai pilihan</p>
                                    <small>Periksa kembali sebelum melanjutkan ke proses berikutnya</small>
                                </div>
                                                    <div class="row">
                                <div class="col-md-8">
                                                                        <div class="bg0 bor10 p-all-15 m-b-10 p-lr-15-sm text-left">
                                            <button type="button" class="btn btn-sm bg1 pull-right cl0" onclick="ubah_alamat()"><i class="fa fa-pencil"></i> Ubah</button>
                                            <p class="mtext-101 cl2 p-b-10">Alamat Kirim</p>
                                            <div class="stext-107">
                                                <input type="hidden" id="id_rajong" name="id_rajong" value="2108">
                                                <input type="hidden" id="alamat" name="alamat" value="96991">
                                                <div id="alamat_text">
                                                    <p>Tasya Khaerani</p>
                                                    <p>JL PENGADEGAN UTARA NO 20A PANCORAN, JAKARTA SELATAN</p>
                                                    <p>Pancoran , Jakarta Selatan Kota , DKI Jakarta</p>
                                                    <p>085771942063</p>
                                                </div>
                                            </div>
                                            <input type="hidden" id="provinsi" value="DKI Jakarta">
                                        </div>
                                                                                                        <input type="hidden" name="count_mall" id="count_mall" value="1">
                                                                                                                    <ul class="list-group m-b-10 ">
                                                <li class="list-group-item active">Buku Erlangga</li>
                                                <input type="hidden" name="mall_id[]" value="1">
                                                <input type="hidden" id="asal_1" name="toko[]" value="154">
                                                                                                                                                <li class="list-group-item">
                                                        <div class="media">
                                                            <div class="img-produk-cart m-auto p-l-10">
                                                                <img src="https://cdn.eurekabookhouse.co.id/ebh/product/all/2014005020.jpg" alt="kartu-angka-dan-huruf-hijaiah" onerror="this.src='https://www.eurekabookhouse.co.id/assets/front/images/eureka-bookhouse-bg-grey.jpg';">
                                                            </div>
                                                            <div class="media-body m-l-20 stext-101">
                                                                <a href="https://www.eurekabookhouse.co.id/product/kartu-angka--huruf-hijaiah-erlangga-efk-eurekabookhouse.co.id">
                                                                    <h6 class="m-b-5 text1l cl2">Kartu Angka & Huruf Hijaiah</h6>
                                                                </a>
                                                                <span>1x </span>
                                                                <div class="embuh">
                                                                                                                                    <input type="hidden" class="kategori" value="0">
                                                                    <input type="hidden" name="qty[]" value="1">
                                                                    <input type="hidden" class="harga" value="65000">
                                                                    <input type="hidden" class="harga_diskon harga_diskon_mall_1" value="52000" byank="1">
                                                                    <span class="stext-101 cl1 harga_diskon_teks">Rp.52.000</span>
                                                                </div>
    
                                                            </div>
                                                        </div>
                                                    </li>
                                                                                            
                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <span>Pengiriman</span>
                                                        <select id="ekspedisi_1" class="form-control" name="kurir[]" onchange="get_ongkir_per_mall( 1)">
                                                            <option value="jne">JNE</option>
                                                            <!-- <option value="tiki">TIKI</option> -->
                                                            <!-- <option value="J&T">J&T</option>
                                                            <option value="sicepat">SICEPAT</option>
                                                            <option value="ninja">NINJA</option>
                                                            <option value="rajacepat">RajaCepat</option> -->
                                                            <!-- 														<option value="rpx">RPX</option> -->
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <h5 id="biayakirim_1"></h5>
                                                        <input id="biayakirim_text_1" type="hidden" name="biayakirim[]" class="biayakirim">
                                                        <p id="edt_1"></p>
                                                    </div>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    Pesan
                                                    <textarea style="width: 70%" class="form-control" rows="1" name="pesan[]"></textarea>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-center bgu4">
                                                    <span class="cl2"><b>Subtotal Pesanan</b></span>
                                                    <b><span class="cl2 stext-101 subtot_b_grand" id="subtot_1"></span></b>
                                                    <input type="hidden" id="subtots_1" name="subtots[]" class="subtots" value="52000">
                                                    <input type="hidden" id="subtots_asli_1" name="subtots_asli[]" value="52000">
                                                    <input type="hidden" id="berattotal_1" name="berat_mall[]" class="berat_mall" value="0.15">
                                                    <input type="hidden" id="subtot_akhir_1" name="subtot_akhir[]" class="subtot_akhir">
                                                    <input type="hidden" id="subtot_akhir_ori_1" class="subtot_akhir_ori">
                                                    <input type="hidden" id="free_ongkir_1" name="freeongkir[]" class="freeongkir" value="0">
                                                </li>
                                            </ul>
    
                                        
                                                                                                                        <!-- <ul class="list-group m-b-10 ">
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <p class="m-b-10"><b>Metode Pembayaran</b></p>
                                            <select id="payment_pilihan" class="form-control" name="payment_pilihan" style="width: 400px;">
                                                <option value="bank_bca">
                                                    Transfer Bank BCA
                                                </option>
                                                <option value="bank_mandiri">
                                                    Transfer Bank Mandiri
                                                </option>
                                                <option value="credit_card">
                                                    Kartu Kredit
                                                </option>
                                                </select>
                                            </li>
                                        </ul> -->
                                </div>
                                <div class="col-md-4">
                                    <h4 class="mtext-101 cl2 m-tb-10 text-center">Ringkasan Pesanan</h4>
                                    <ul class="list-group m-b-10 ">
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <span><b>Subtotal Produk</b></span>
                                            <span id="subtot_brg"></span>
                                            <input type="hidden" id="subtot_brg_input" name="subtot_brg_input">
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                                <span><b>Subtotal Pengiriman</b></span>
                                                <span id="subtot_ongkir"></span>
                                                <input type="hidden" name="subtot_ongkir_input" id="subtot_ongkir_input">
                                            </li>


                                        <li class="list-group-item d-flex justify-content-between align-items-center" id="li_kupon">
                                            <span><b>Free Ongkir</b></span>
                                            <div class="text-center">
                                                <button id="gratis_ongkir_btn" onclick="freeOngkir()" class="btn btn-sm btn-primary stext-107" type="button"><i class="fa fa-truck"></i> Aktifkan Kupon</button>
                                                <br><small><b><i class="infoTombol">Klik tombol diatas</i></b></small>
                                            </div>
                                        </li>
                                        <div id="listPotonganOngkir" class="d-none">
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                <span class="text-danger"><b>Diskon Pengiriman</b></span>
                                                <b>
                                                    <h3 id="freeongkir" class="text-danger mtext-109"></h3>
                                                </b>
                                            </li>
                                        </div>
                                        
                                        
                                        <!-- <li class="list-group-item d-flex justify-content-between align-items-center" id="li_kupon">
                                        <div>
                                            <h5 id="freeongkir"></h5>
                                            <input type="text" name="freeongkir" class="freeongkir">
                                        </div>
                                        </li> -->
                                        
                                        
                                        <div id="buat_kupon"></div>
                                        <li class="list-group-item d-flex justify-content-between align-items-center" id="li_kupon">
                                            <span><b>Kupon</b></span>
                                            <div class="input-group" style="width: 65%">
                                                <input id="form_potongan" type="text" class="form-control" placeholder="Kode kupon" name="kupon_tulis">
                                                <div class="input-group-append">
                                                    <button onclick="tulis_kupon()" class="btn btn-primary" type="button" id="tulis_kupon_btn"><i class="fa fa-send"></i></button>
                                                </div>
                                            </div>
                                        </li>
                                        <div id="buat_kupon2"></div>
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <span class="cl1"><b>Total Pembayaran</b></span>
                                            <b>
                                                <h3 id="grandtot" class="cl1 mtext-109"></h3>
                                            </b>
                                        </li>
                                    </ul>
                                    <div id="form_action_bank">
                                        <router-link :to="'/pesanan'" button class="btn btn-block btn-warning mtext-101"><i class="fa fa-check-square-o p-r-5"></i> BUAT PESANAN</router-link>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
    
                <input id="kode_ext" type="hidden" value="1">
                <div class="mobile-nav-page">
                    <div id="submit-bayar" class="fixed-bottom bg-light bs2 p-lr-15 p-tb-10 stext-101 submit-bayar">
                        
                        <router-link :to="'/pesanan'" button class="btn btn-block btn-warning mtext-101"><i class="fa fa-check-square-o p-r-5"></i> BUAT PESANAN</router-link>
                    </div>
                </div>
    
                <input type="hidden" name="grandtot_val" id="grandtot_val" />
                <input type="hidden" id="grandtot_val_asli">
        </div>
        </section>
       
</template>

<script scope>
    export default {
      name: "checkoutPage",
    }
    </script>
