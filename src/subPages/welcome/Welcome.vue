<template>
    <div class='welcome' >
        <MaskDoor></MaskDoor>
        <InfoList></InfoList>
    </div>
</template>
<script>
import MaskDoor from './childPages/MaskDoor.vue'
import InfoList from './childPages/InfoList.vue'
export default {
    name: 'Welcome',
    components:{
        MaskDoor,
        InfoList
    }
}
</script>
<style scoped lang="less">
.welcome{
    width:100%;
    height:100vh;
    overflow-y: auto;
    background-size: cover;
    background-image: url('../../assets/img/welcome/background.png');
}
</style>