import {_POST} from './request'
import {_GET} from './request'

//提交表单数据
export const submit = (data)=>{
    let req = {
        data,
        url:'news'
    }
    console.log(data)
    return _POST(req)
} 
//删除点击的数据
export const deleted = (id)=>{
    let req = {
        id,
        url:'delete'
    }
    return _GET(req)
}

//查询数据
export const finds = (id)=>{
    let req = {
        id,
        url:'finds'
    } 
    return _GET(req).then(res =>{
        console.log(res)
        return res
    })
}

//编辑
export const write = (data) =>{
    let req = {
        data,
        url:'write'
    }
    console.log(data)
    return _POST(req)
}