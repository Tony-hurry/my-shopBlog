<template>
    <div class="personal">
        <BaseInfo @loging="changeLogin"></BaseInfo>
        <LoginCard v-show="isLogin"  @cancel="compeletedLogin"></LoginCard>
    </div>
</template>
<script>
import BaseInfo from './childPages/BaseInfo.vue'
import LoginCard from './childPages/LoginCard.vue'
export default{
 name:'Personal',
 components:{
    BaseInfo,
    LoginCard
 },
 data(){
    return {
        isLogin:false
    }
 },
 methods:{
    changeLogin(){
        console.log('登录中。。。')
        this.isLogin = true
    },
    compeletedLogin(){
        this.isLogin = false
    }
 }
}
</script>
<style scoped>
</style>