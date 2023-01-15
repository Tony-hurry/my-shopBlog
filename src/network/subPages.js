import {queryLocal} from './index'
export const postCommitBlog = (data)=>{
    return queryLocal({
        url:'/api/postCommitBlog',
        method:'POST',
        data
    })
}