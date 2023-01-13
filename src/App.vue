<template>
  <div id="app" :class="{appPadding:!this.$route.path.includes('/api')}">
    <Tabbar v-if="!this.$route.path.includes('/api')"></Tabbar>
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
.appPadding{
  padding-bottom: 80px;
}
</style>
