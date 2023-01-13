import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL:"https://api-hmugo-web.itheima.net",
        timeout:5000
    })
    
    instance.interceptors.request.use((config)=>{
        /* this.$toast.show('数据加载中') */
        
        return config
    },(error)=>{
        return Promise.reject(error)
    })
    return instance(config)
}
export function queryLocal(config){
    const instance = axios.create({
        baseURL:"http://127.0.0.1:8089",
        timeout:5000
    })
    return instance(config)
}