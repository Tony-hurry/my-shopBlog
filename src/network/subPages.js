
import {request,queryLocal} from './index'

export const postCommitBlog = (data)=>{
    return queryLocal({
        url:'/api/postCommitBlog',
        method:'POST',
        data
    })
}
export const getShopDetail = (data)=>{
    return request({
        url:'/api/public/v1/goods/detail',
        method:"GET",
        params:{
            goods_id:data
        }
    })    
    

}
export const getShopList = (data)=>{
    return request({
        url:'/api/public/v1/goods/search',
        method:'GET',
        params:data
    })
}