<template>
    <div class='floorData'>
        <div class="container" :style="{ height: H *2 + 'px' }" v-for="(item,index) in info" :key="index">
            <div class="title">
                <img :src="item.floor_title.image_src" alt="">
            </div>
            <div class="product">
                <div class="shopLeft">
                    <img @click="gotoShopList(item.product_list[0].navigator_url)" :src="item.product_list[0].image_src" alt="">
                </div>
                <div class="shopRight">
                    <div  class="product-item" v-for="(item2, index2) in item.product_list" :key="index2" v-if="index2 != 0">
                        <img  @click="gotoShopList(item2.navigator_url)" :src="item2.image_src" alt="">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import GetH from '@/mixins/GetH'
export default {
    name: 'FloorData',
    props: {
        info: {
            type: Array,
            default() {
                return []
            }
        }
    },
    mixins: [GetH],
    methods: {
        gotoShopList(strUrl){
            const query = strUrl.split('=')[1]
            this.$router.push('/api/shopList/'+query)
        }
    }
}
</script>
<style scoped lang="less">
.floorData {

    .container {
        padding: 0 5px;
        margin-top: 10px;
        div{
            border: 1px solid #fff;
        }
        .title {
            height: 20%;
            padding: 5px;

            img {
                height: 100%;
            }
        }

        .product {
            display: flex;
            height: 80%;
            justify-content: center;
            .shopLeft {
                flex: 2;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }

            .shopRight {
                flex: 3;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                align-items: center;

                .product-item {
                    width:50%;
                    height:50%;
                    overflow: hidden;
                    img {
                        width: 100%;
                        
                    }
                }

            }
        }
    }
}
</style>