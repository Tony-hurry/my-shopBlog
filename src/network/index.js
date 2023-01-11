import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL:"https://api-hmugo-web.itheima.net",
        timeout:5000
    })
    
    instance.interceptors.request.use((config)=>{
        /* this.$toast.show('数据加载中') */
        console.log('数据请求中',config)
        return config
    },(error)=>{
        return Promise.reject(error)
    })
    return instance(config)
}