<template>
  <div id="app">
    <Tabbar></Tabbar>
    <router-view/>
  </div>
</template>

<script>
import Tabbar from '@/components/common/tabbar/Tabbar'
export default {
  name: 'App',
  components:{
    Tabbar
  }
}
</script>

<style lang="less">
@import './assets/css/base.css';
#app{
  padding-bottom: 80px;
}
</style>
