<template>
    <div class="home">
        <Swriper :info="swriperData"></Swriper>
        <CatItems :info="catItems"></CatItems>
        <FloorData :info="floorData"></FloorData>
    </div>
</template>
<script>
import Swriper from '@/components/content/swriper/Swriper'
import CatItems from './childePages/CatItems.vue'
import FloorData from './childePages/FloorData.vue'
import {getSwiper,getCatitems,getFloorData} from '@/network/home'
export default{
 name:'Home',
 components:{
    Swriper,
    CatItems,
    FloorData
 },
 mounted(){
    
    /* this.$toast.show('数据加载中') */
    getSwiper().then(res=>{
        
        this.swriperData=res.data.message
    })
    getCatitems().then(res=>{
        this.catItems=res.data.message
    })
    getFloorData().then(res=>{
        this.floorData = res.data.message
    })
 },
 data(){
    return {
        swriperData:[],
        catItems:[],
        floorData:[]
    }
    
 }
}
</script>
<style scoped lang="less">
.home{
    
}
</style>