<template>
  <div id="app" :class="{appPadding:!this.$route.path.includes('/api')}">
    <Tabbar v-show="!this.$route.path.includes('/api')"></Tabbar>
    <keep-alive :include="Object.keys(this.$store.state.user).length === 0 ? '':'Apps'">
      <router-view/>
    </keep-alive>
    
    <BackArrow v-if="this.$route.path.includes('/api')"></BackArrow>
  </div>
</template>

<script>
import Tabbar from '@/components/common/tabbar/Tabbar'
import BackArrow from '@/components/common/backArrow/BackArrow'
export default {
  name: 'App',
  components:{
    Tabbar,
    BackArrow
  },
  created(){
   
  }
}
</script>

<style lang="less">
@import './assets/css/base.css';
.appPadding{
  padding-bottom: 80px;
}
</style>
