import {request} from './index'
export const getSwiper=(data)=>{
   return request({
        url:'/api/public/v1/home/swiperdata',
        methods: "GET",
        data
    })
}
export const getCatitems=(data)=>{
    return request({
        url:'/api/public/v1/home/catitems',
        methods: "GET",
        data
    })
}
export const getFloorData=(data)=>{
    return request({
        url:'/api/public/v1/home/floordata',
        methods:'GET',
        data
    })
}
