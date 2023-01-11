<template>
    <div class='catItem' :style="{height:H + 'px'}">
        <div class="navCard" v-for="(item,index) in info" :key="index">
            <img :src="item.image_src" alt="">
        </div>
    </div>
</template>
<script>
import GetH from '@/mixins/GetH'
export default {
    name: 'CatItem',
    props:{
        info:{
            type:Array,
            default(){
                return []
            }
        }
    },
    mixins:[GetH],
    mounted(){
        console.log('catitem',this.H)
    }
}
</script>
<style scoped lang="less">
.catItem{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
    .navCard{
        height: 100%;
        img{
            height: 100%;
        }
    }
}
</style>