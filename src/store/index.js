import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        user:{
            avator:'https://pic.imgdb.cn/item/63c0f8d4be43e0d30eb140ac.jpg',
            name:'tony'
            
        }
    },
    mutations:{},
    actions:{},
    getters:{

    },
    modules:{}
})
export default store