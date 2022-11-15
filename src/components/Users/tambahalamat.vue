<template>
    <div>
<section class="bg6 p-t-25 p-b-20">
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


            <div class="col-lg-10 col-xl-9 m-lr-auto m-b-50 text-left">
                <h3 class="ltext-101 cl1 m-b-10">Tambah Alamat</h3>
                <div class="bg0 bor10 p-all-15 m-b-10 p-lr-15-sm">

                    <form id="form_alamat_add" method="POST" action="fu_alamat_add">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="p-b-15">
                                    <p class="text-disabled stext-107">Nama Depan</p>
                                    <input class="stext-104 textonly cl2 plh3 bor8 p-lr-20 m-r-10 m-tb-5" type="text"
                                        name="firstname" style="height: 36px;width: 100%" placeholder="Nama depan"
                                        required autofocus>
                                    <input type="hidden" name="idx" value="">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="p-b-15">
                                    <p class="text-disabled stext-107">Nama Belakang</p>
                                    <input name="lastname"
                                        class="stext-104 textonly cl2 plh3 bor8 p-lr-20 m-r-10 m-tb-5" type="text"
                                         style="height: 36px;width: 100%" placeholder="Nama belakang"
                                        required>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="p-b-15">
                                    <p class="text-disabled stext-107">Telepon</p>
                                    <input name="telephone"
                                        class="stext-104 textonly cl2 plh3 bor8 p-lr-20 m-r-10 m-tb-5" type="text"
                                         style="height: 36px;width: 100%" placeholder="Telepon"
                                        required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="p-b-15">
                                    <p class="text-disabled stext-107">Provinsi</p>
                                    <select class="form-control select2 getvalue_provinsi" style="width: 100%;"
                                        name="propinsi_tujuan" id="propinsi_tujuan"
                                        onchange="kotaasal('propinsi_tujuan','destination')">
                                        <option value="" selected="" disabled="">Pilih Provinsi</option>
                                        <option value="1">Bali</option>
                                        <option value="2">Bangka Belitung</option>
                                        <option value="3">Banten</option>
                                        <option value="4">Bengkulu</option>
                                        <option value="5">DI Yogyakarta</option>
                                        <option value="6">DKI Jakarta</option>
                                        <option value="7">Gorontalo</option>
                                        <option value="8">Jambi</option>
                                        <option value="9">Jawa Barat</option>
                                        <option value="10">Jawa Tengah</option>
                                        <option value="11">Jawa Timur</option>
                                        <option value="12">Kalimantan Barat</option>
                                        <option value="13">Kalimantan Selatan</option>
                                        <option value="14">Kalimantan Tengah</option>
                                        <option value="15">Kalimantan Timur</option>
                                        <option value="16">Kalimantan Utara</option>
                                        <option value="17">Kepulauan Riau</option>
                                        <option value="18">Lampung</option>
                                        <option value="19">Maluku</option>
                                        <option value="20">Maluku Utara</option>
                                        <option value="21">Nanggroe Aceh Darussalam (NAD)</option>
                                        <option value="22">Nusa Tenggara Barat (NTB)</option>
                                        <option value="23">Nusa Tenggara Timur (NTT)</option>
                                        <option value="24">Papua</option>
                                        <option value="25">Papua Barat</option>
                                        <option value="26">Riau</option>
                                        <option value="27">Sulawesi Barat</option>
                                        <option value="28">Sulawesi Selatan</option>
                                        <option value="29">Sulawesi Tengah</option>
                                        <option value="30">Sulawesi Tenggara</option>
                                        <option value="31">Sulawesi Utara</option>
                                        <option value="32">Sumatera Barat</option>
                                        <option value="33">Sumatera Selatan</option>
                                        <option value="34">Sumatera Utara</option>
                                    </select>
                                    <input type="hidden" name="province" class="input_hide_provinsi">
                                    <input type="hidden" name="city" class="input_hide_kabupaten">
                                    <input type="hidden" name="zone_1" class="input_hide_kecamatan">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="p-b-15">
                                    <p class="text-disabled stext-107">Kabupaten</p>
                                    <select class="form-control select2 getvalue_kabupaten" style="width: 100%;"
                                        name="destination" id="destination"
                                        onchange="getkecamatan('destination','kecamatan_tujuan')">
                                        <option value="" selected="" disabled="">Pilih Kota</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="p-b-15">
                                    <p class="text-disabled stext-107">Kecamatan</p>
                                    <select class="form-control select2 getvalue_kecamatan" onchange="getvalue()"
                                        style="width: 100%;" name="kecamatan_tujuan" id="kecamatan_tujuan">
                                        <option value="" selected="" disabled="">Pilih kecamatan</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="p-b-15">
                                    <p class="text-disabled stext-107">Kode Pos</p>
                                    <input class="stext-104 cl2 numberonly plh3 bor8 p-lr-20 m-r-10 m-tb-5" id="kodepos"
                                        type="text" name="kodepos" style="height: 36px;width: 100%"
                                        placeholder="Kode Pos" required autofocus>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="p-b-15" id="locationField">
                                    <p class="text-disabled stext-107"><i class="fa fa-home"></i> Alamat Lengkap (Nama
                                        Jalan, No Rumah, RT/RW, Desa/Komplek, Kelurahan, Kecamatan)</p>
                                    <input class="stext-104 cl2 textonly plh3 bor8 p-lr-20 m-r-10 m-tb-5" type="text"
                                        name="address_2"
                                        placeholder="(Nama Jalan, No Rumah, RT/RW, Desa/Komplek, Kelurahan, Kecamatan)"
                                        required style="height: 36px;width: 100%">
                                </div>
                            </div>
                        </div>
                        <button id="submit-form" type="submit"
                            class="flex-c-m stext-101 cl0 size-112 bg3 hov-btn3 p-lr-15 trans-04 pointer m-t-10">
                            <span><i class="fa fa-plus"></i> Tambah Alamat</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
</template>
<script>
export default {
    name: "tambahalamatPage",
}
</script>