import Vue from 'vue'
import Router from 'vue-router'

//懒加载导入模块
const Home = ()=> import('@/pages/home/Home')
const Apps = ()=> import('@/pages/apps/Apps')
const Personal = ()=> import('@/pages/personal/Personal')
const Mblog = ()=>import('@/subPages/mblog/Mblog')
const BlogEditor = ()=>import('@/subPages/blogeditor/BlogEditor')
const Welcome = ()=>import('@/subPages/welcome/Welcome')
const ShopDetail = ()=>import('@/subPages/shopAbout/ShopDetail')
const ShopList = ()=>import('@/subPages/shopAbout/ShopList')
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
    component: Apps,
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal
  },
  {
    path:'/api/mblog/:index',
    name:'mblog',
    component:Mblog
  },
  {
    path:'/api/openEditor',
    name:BlogEditor,
    component:BlogEditor
  },
  {
    path:'/api/gotoWelcome',
    name:Welcome,
    component:Welcome
  },
  {
    path:'/api/shopDetail/:goods_id',
    name:ShopDetail,
    component:ShopDetail
  },
  {
    path:'/api/shopList/:query',
    name:ShopList,
    component:ShopList
  }
]

export default new Router({
  routes: router
})
