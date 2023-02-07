<template>
    <div>
    <div class="bg1">
        <div class="">
            <div class="p-t-3 p-b-5">
                <nav class="">
                    <router-link :to="'/Blog/pejuang'" class="center">
                        <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ebhcom-header_new.png"
                            alt="IMG-LOGO" class="center">
                    </router-link>
                </nav>
            </div>
        </div>
    </div>
    <section class="bg0 p-t-20 text-left" style="min-height: 100%">
        <div class="container">
            <h3 class="text-101 p-tb-20">Fiksi</h3>
            <div class="row">
                <div class="col-sm-6 col-md-3 p-b-20">
                    <div class="blog-item bg0 bor8">
                        <div class="blog-pic hov-img0">
                            <router-link :to="'/Blog/allfiksi/bestsellernovel'">
                                <img class="blog-read-pic"
                                    src="https://cdn.eurekabookhouse.co.id/ebh/blog/4_Novel_Best_Seller_Indonesia,_Bacaan_Wajib_di_Tahun_2019!.jpg">
                            </router-link>
                        </div>
                        <div class="p-all-15">
                            <div class="stext-112 flex-w p-b-14 cl1"><router-link :to="'/Blog/allfiksi/bestsellernovel'">Fiksi</router-link></div>
                            <h4 class="p-b-32">
                                <router-link :to="'/Blog/allfiksi/bestsellernovel'"
                                    class="mtext-101 cl2 hov-cl1 trans-04">
                                    4 Novel Best Seller Indonesia, Bacaan Wajib di Tahun 2019! </router-link>
                            </h4>
                            <span class="stext-102 m-t-20">12 November 2022</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 p-b-20">
                    <div class="blog-item bg0 bor8">
                        <div class="blog-pic hov-img0">
                        <router-link :to="'/Blog/allfiksi/fiksiterbaik'">
                                <img class="blog-read-pic"
                                    src="https://cdn.eurekabookhouse.co.id/ebh/blog/Wajib_dibaca!_Ini_Dia_Novel_Fiksi_Terbaik_Indonesia.jpg">
                            </router-link>
                        </div>
                        <div class="p-all-15">
                            <div class="stext-112 flex-w p-b-14 cl1"><router-link :to="'/Blog/allfiksi/fiksiterbaik'">Fiksi</router-link></div>
                            <h4 class="p-b-32">
                                <router-link :to="'/Blog/allfiksi/fiksiterbaik'"
                                    class="mtext-101 cl2 hov-cl1 trans-04">
                                    Wajib dibaca! Ini Dia Novel Fiksi Terbaik Indonesia </router-link>
                            </h4>
                            <span class="stext-102 m-t-20">14 November 2022</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 p-b-20">
                    <div class="blog-item bg0 bor8">
                        <div class="blog-pic hov-img0">
                            <router-link :to="'/Blog/allfiksi/sayuranorganik'">
                                <img class="blog-read-pic"
                                    src="https://cdn.eurekabookhouse.co.id/ebh/blog/imgBlogs9_131345.png">
                            </router-link>
                        </div>
                        <div class="p-all-15">
                            <div class="stext-112 flex-w p-b-14 cl1"><router-link :to="'/Blog/allfiksi/sayuranorganik'">Fiksi</router-link></div>
                            <h4 class="p-b-32">
                                <router-link :to="'/Blog/allfiksi/sayuranorganik'"
                                    class="mtext-101 cl2 hov-cl1 trans-04">
                                    Cari Sayuran Organik sekarang lebih mudah, ada di eurekabookhouse.co.id </router-link>
                            </h4>
                            <span class="stext-102 m-t-20">11 November 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="bgu1 p-t-15 p-b-15">
        <div class="container">
            <div class="p-t-10">
                <p class="stext-107 cl0 txt-center">
                    Copyright &copy;Dikembangkan oleh Eureka IT Developer
                </p>
            </div>
        </div>
    </footer>
    </div>
</template>
<script>
export default {
    name : "fiksiPage",
}
</script>