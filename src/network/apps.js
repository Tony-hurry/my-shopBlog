import {queryLocal} from './index'
export const getAllBlog=(data)=>{
   return queryLocal({
        url:'/api/getAllBlog',
        method: "GET",
        data
    })
}
export const postBlogById=(data)=>{
    return queryLocal({
        url:'api/postBlogById',
        method:'POST',
        data
    })
}
export const postPagination=(data)=>{
    return queryLocal({
        url:'api/postPagination',
        method:'post',
        data
    })
}