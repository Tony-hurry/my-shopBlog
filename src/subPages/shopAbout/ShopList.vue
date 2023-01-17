<template>
    <div class='shopList' id="dotTest" v-if="Object.keys(shopList).length !== 0">
        <div class="container" :style="{ height: H + 'px' }" v-for="(item, index) in shopList" :key=index @click="gotoShopDetail(item.goods_id)">
            <div class="shop-left">
                <img :src="item.goods_big_logo || 'https://pic.imgdb.cn/item/63c671dcbe43e0d30e010d91.png'" alt="">
            </div>
            <div class="shop-right">
                <div class="shopName">
                    {{ item.goods_name }}
                </div>
                <div class="price">
                    ￥{{ item.goods_price }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getShopList } from '@/network/subPages.js'
import GetH from '@/mixins/GetH.js'
import TouchBottom from '@/mixins/TouchBottom.js'
export default {
    name: 'ShopList',
    mixins: [GetH,TouchBottom],
    data() {
        return {
            shopList: {
                type: Array,
                default() {
                    return []
                }
            },
            options: {
                query: this.$route.params.query,
                pagesize: 10,
                pagenum: 0,
                total:0
            }

        }
    },

    methods: {

        gotoShopDetail(goods_id){
            this.$router.push('/api/shopDetail/'+goods_id)
        },
        async getList() {
            console.log('加载数据')
            this.$toast.show('数据加载中')
            getShopList(this.options).then(res => {
                console.log(res)
                this.options.total = res.data.message.total
                this.shopList = [...this.shopList, ...res.data.message.goods]
                this.options.pagenum++
                if (this.shopList.length === this.options.pagesize*this.options.pagenum) {
                    this.isLoding = false
                    if(this.shopList.length >= this.options.total){
                        this.$toast.show('数据加载完毕！')
                    }
                }

            })
        }
    },
    created() {
        this.getList()
    },
    destroyed() {
        this.clearScroll()
    }
}
</script>
<style scoped lang="less">
.shopList {

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin-top:10px;
        .shop-left {
            flex: 1;
            overflow: hidden;
            padding: 2px;

            img {
                width: 100%;
            }
        }

        .shop-right {
            flex: 3;
            margin-left: 5px;
            padding: 5px;
            height: 100%;
            border-bottom: 1px solid #f0f0f0;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: space-between;
            text-align: left;

            .shopName {
                font-size: 1vw;
                font-weight: bold;
            }

            .price {

                color: #f00;
                font-size: 12px;
            }
        }
    }

}
</style>