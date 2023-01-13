import {queryLocal} from './index'
export const getAllBlog=(data)=>{
   return queryLocal({
        url:'/api/getAllBlog',
        method: "GET",
        data
    })
}
export const getBlogById=(index)=>{
    return queryLocal({
        url:'api/getBlogById',
        method:'GET',
        params:{'index':index}
    })
}
export const postPagination=(data)=>{
    return queryLocal({
        url:'api/postPagination',
        method:'post',
        data
    })
}