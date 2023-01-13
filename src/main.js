import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Toast from '@/components/common/toast'
import MevonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import store from '@/store'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Toast)
Vue.use(MevonEditor)



/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

router.beforeEach((to, from, next) => {
  
  app.$toast.show("数据加载中",1000)
  next()
})