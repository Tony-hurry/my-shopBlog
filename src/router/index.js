import Vue from 'vue'
import Router from 'vue-router'

//懒加载导入模块
const Home = ()=> import('@/pages/home/Home')
const Apps = ()=> import('@/pages/apps/Apps')
const Personal = ()=> import('@/pages/personal/Personal')

Vue.use(Router)

const router=[
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/apps',
    name: 'Apps',
    component: Apps
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal
  }
]

export default new Router({
  routes: router
})
