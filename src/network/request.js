import axios from 'axios'
import config from '../../vue.config'

const baseUrl = config.baseURL
export function request(){
    const instance = axios.create(
       {baseURL:baseUrl,
        withCredentials: true, // 允许跨域 cookie
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        maxContentLength: 2000,
        // transformResponse:[function (data) {
        //     try{
        //         data = JSON.parse(data)
        //     }catch(e){
        //         data = {}
        //     }
        //     if(data.stutas == 403){
        //         router.push('/')
        //     }
        // }]
    }
        
        )
    return instance
}

export const requestion = (res)=>{
    return axios.get('/')
}

export const _POST = (req) =>{
    let data = req.data
    return axios.post(`/${req.url}`,{data})
}
// {method:'post',url:`/${req.url}`,data:req.data}

export const _GET = (req) =>{
    let id = req.id
    return axios.get(`/${req.url}`,{params:id}).then(res =>{
        console.log(res)
        return res.data.result
    })
}