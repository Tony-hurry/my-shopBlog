<template>
    <div class='backArrow' @click="routerBack">
        <i class="el-icon-back"></i>
        <span>返回</span>
    </div>
</template>
<script>
export default {
    name: 'BackArrow',
    methods:{
        routerBack(){
            this.$router.back()
        }
    }
}
</script>
<style scoped lang="less">
.backArrow{
    position:fixed;
    bottom:30px;
    right:10px;
    width:45px;
    height:45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
    background-color: #f0f0f0;
    font-weight: bold;
    cursor: pointer;
    span{
        font-size: 12px;
    }
    
}
</style>