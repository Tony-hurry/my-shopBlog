<template>
    <div class='shopDetail' v-if="Object.keys(shopDetail).length !== 0">
        <Swriper :info="shopDetail.pics" :swiperType="2"></Swriper>
        <div class="shopInfo">
            <div class="shopWays">
                <div class="price">￥{{ shopDetail.goods_price }}</div>
                <div class="shopName">{{ shopDetail.goods_name }}</div>
                <div class="service">快递 免运费</div>
            </div>
            <div class="moreInfo" >
                <p v-html="shopDetail.goods_introduce">  
                </p>
            </div>
        </div>

    </div>
</template>
<script>
import { getShopDetail } from '@/network/subPages.js'
import Swriper from '@/components/content/swriper/Swriper.vue'
export default {
    name: 'ShopDetail',
    components: {
        Swriper
    },

    data() {
        return {
            shopDetail: {
                type: Object,
                default() {
                    return {}
                }
            },
            content:'<a>点击打开百度</a>'
        }
    },
    created() {
        console.log(this.$route.params.goods_id)
        getShopDetail(this.$route.params.goods_id).then(res => {
            this.shopDetail = res.data.message
        })
    }
}
</script>
<style scoped lang="less">
.shopDetail {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .shopInfo{
        width:90%;
        .shopWays{
            padding: 0 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
            border-radius: 5px;
            div{
                margin-top:10px;
                height:50px;
                line-height: 50px; 
            }
            .price{
                color:#f00;
                font-size:18px;
            }
            .shopName{
                font-weight: bold;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
        .moreInfo{
            margin-top:10px;
            padding:0px 5px;
            width:100%;
            p{
                width:100%
            }
        }
    }
}
</style>