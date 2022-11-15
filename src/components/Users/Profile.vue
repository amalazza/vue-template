<template>
    <section class="bg6 p-t-15 p-b-10">
    
        <form id="form-cart" class="p-b-85" action="https://www.eurekabookhouse.co.id/frontend/account/detail" method="POST"
            enctype="multipart/form-data">
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
    
    
                    <div class="col-lg-7 col-xl-6 m-lr-auto m-b-50">
                        <h3 class="ltext-101 cl1 m-b-10 text-left">Profil Saya</h3>
                        <div class="bg0 bor10 p-all-15 m-b-15 p-lr-15-sm">
    
                            <div class="row text-left">
                                <div class="col-md-6 ">
                                    <div class="p-b-15">
                                        <p class="text-disabled stext-107">Nama Depan</p>
                                        <input name="firstname" class="stext-104 cl2 plh3 bor8 p-lr-20 m-r-10 m-tb-5"
                                            type="text"  style="height: 36px;width: 100%" value="TASYA">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="p-b-15">
                                        <p class="text-disabled stext-107">Nama Belakang</p>
                                        <input name="lastname" class="stext-104 cl2 plh3 bor8 p-lr-20 m-r-10 m-tb-5"
                                            type="text"  style="height: 36px;width: 100%" value="KHAERANI">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="p-b-15">
                                        <p class="text-disabled stext-107">Email</p>
                                        <input name="email" class="stext-104 cl2 plh3 bor8 p-lr-20 m-r-10 m-tb-5"
                                            type="text"  style="height: 36px;width: 100%"
                                            value="tasyakhaerani66@gmail.com" readonly>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="p-b-15">
                                        <p class="text-disabled stext-107">Telepon</p>
                                        <input name="telephone" class="stext-104 cl2 plh3 bor8 p-lr-20 m-r-10 m-tb-5"
                                            type="text"  style="height: 36px;width: 100%"
                                            value="085571942063">
                                    </div>
                                </div>
    
                            </div>
                            <button id="submit-bayar" type="submit"
                                class="flex-c-m stext-101 cl0 size-112 bg3 hov-btn3 p-lr-15 trans-04 pointer">
                                Update Profil
                            </button>
                        </div>
                    </div>
                    <div class="col-lg-2 col-xl-3 m-lr-auto m-b-50">
                        <div class="bg0 bor10 p-all-15 m-t-46 m-b-10 p-lr-15-sm">
                            <div class="ava-preview flex-c-m">
                                <img class="img-thumbnail"
                                    src="https://www.eurekabookhouse.co.id/assets/uplod/default-avatar.png">
                            </div>
                            <div class="edit-ava m-t-20">
                                <input type="file" name="foto">
                            </div>
                            <div style="color:red;font-size: 10px; ">
                                <span>File yang diizinkan berformat jpg / png</span>
                                <br />
                                <span>Ukuran file maksimal 100kb</span>
                                <br />
                                <span>Ukuran panjang dan lebar maksimal 500px</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>
<script scope>
export default {
    name: "ProfilePage",
}
</script>