import {request} from './request'

export function getList(){
    return request({
        url:'/default/getArticleList'
    })
}

export function getType(){
    return request({
        url:'/default/getTypeInfo'
    })
}

export function getListById(id){
    return request({
        url:`/default/getListById/${id}`
    })
}
export function getDetailById(id){
    return request({
        url:`/default/getArticleById/${id}`
    })
}