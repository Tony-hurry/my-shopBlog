import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        user:JSON.parse(sessionStorage.getItem('user')||'{}'),
        token:sessionStorage.getItem('token')||''
    },
    mutations:{
        saveUserToSession(state){
            sessionStorage.setItem('user',JSON.stringify(state.user))
        },
        updateUser(state,user){
            state.user = user
            this.commit('saveUserToSession')
            
        },
        saveTokenToSession(state){
            sessionStorage.setItem('token',state.token)
        },
        updateToken(state,token){
            state.token=token
            console.log(this)
            this.commit('saveTokenToSession')
        },
        clearUser(state){
            state.user = {}
        }
    },
    actions:{},
    getters:{

    },
    modules:{}
})
export default store