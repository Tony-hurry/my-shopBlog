<template>
    <div class='swriper' v-if="info.length != 0">
        <div class="style1" v-if="swiperType === 1">
            <el-carousel :interval="4000" type="card" :height="H + 'px'" :loop="true">
                <el-carousel-item v-for="(item, index) in info" :key="index">
                    <img :src="item.image_src || item.pics_big_url" alt="" @click="gotoShopDetail(item.goods_id)">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="style2" v-else-if="swiperType === 2">
            <el-carousel :interval="5000" arrow="always" :height="H*2 + 'px'" :loop="true">
                <el-carousel-item v-for="(item, index) in info" :key="index">
                    <img v-image-preview :src="item.pics_big_url" alt=""  >
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
import GetH from '@/mixins/GetH'
export default {
    name: 'Swriper',
    props: {
        info: {
            type: Array,
            default() {
                return []
            }
        },
        swiperType: {
            type: Number,
            default() {
                return 1
            }
        }
    },
    mixins: [GetH],
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        gotoShopDetail(goods_id) {
            this.$router.push('/api/shopDetail/' + goods_id)
        }
    }
}
</script>
<style scoped lang="less">
.swriper {
    text-align: center;
    width:100%;
    border-bottom: 1px solid #f0f0f0;
    z-index: 1;
    img {
        height: 100%;
        margin: auto;
        
    }


}
</style>