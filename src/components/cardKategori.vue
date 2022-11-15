<template>
    <div>
        <div class="row">
            <div class="carousel-cell wd-18 block2 bg0" v-for="(item, index) in kategoriMaster" :key="index">
                <div class="block2-pic hov-img0 label-new text-center" data-label="20%">
                    <div class="label-original badge badge-primary">100% Original</div>
                    <img class="img-official" src="https://www.eurekabookhouse.co.id/assets/image/mall_badge.png">
                    <router-link :to="'/detailproduk'" class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
                        <img class="img-responsive"
                            :src="'https://cdn.eurekabookhouse.co.id/ebh/product/all/'+item.image"
                            alt="we-bare-bears-pocket-backpack-black">
                    </router-link>
                </div>
                <div class="block2-txt flex-w flex-t p-all-8">
                    <div class="block2-txt-child1 flex-col-l">
                        <a href="https://www.eurekabookhouse.co.id/product/we-bare-bears-pocket-backpack-black"
                            class="stext-105 cl2 hov-cl1 trans-04 js-name-b2 p-b-6">
                            {{item.name}} </a>
                        <div class="stext-105"><strong class="cl13">
                                {{item.priceFormatted}}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script scope>
// import Flickity from 'vue-flickity';
export default {
    name: "cardKategoriPage",
    // components: {
    //     Flickity
    // },
    data() {
        return {
            // flickityOptions: {
            //     initialIndex: 0,
            //     prevNextButtons: false,
            //     pageDots: false,
            //     cellAlign: "left",
            //     wrapAround: false,
            //     freeScroll: false,
            // },
            kategoriMaster: []
        }
    },
    mounted() {
        this.getProduk()
    },
    methods:
    {
        getProduk() {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("https://elibx.jaja.id/bupel/product/get-product?page=1&limit=10", requestOptions)
                .then(response => response.text())
                .then(result => {
                    const res = JSON.parse(result);
                    this.kategoriMaster = res.data.data
                    // console.log('kategoriMaster', res);
                })
                .catch(error => console.log('error', error));
        },
    }
};
</script>

<style>
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    padding-left: 8px;
}
</style>