import {queryLocal} from './index'
export const postLoginUser = (data)=>{
    return queryLocal({
        url:'/api/postLoginUser',
        method:'POST',
        data
    })
}