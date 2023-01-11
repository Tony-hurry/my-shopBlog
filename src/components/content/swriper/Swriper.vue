<template>
    <div class='swriper' v-if="info.length != 0">
        <el-carousel :interval="4000" type="card" :height="H + 'px'" :loop="true">
            <el-carousel-item v-for="(item , index) in info" :key="index">
                <img :src="item.image_src" alt="">
            </el-carousel-item>
        </el-carousel>
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
        }
    },
    mixins:[GetH],
    data(){
        return {
           
        }
    },
    mounted(){   
        console.log(this.H)
    }
}
</script>
<style scoped lang="less">
.swriper{
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
    
    img{
        height: 100%;
        margin: auto;
    }
}
</style>