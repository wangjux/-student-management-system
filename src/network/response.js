import {requestion, _GET} from './request'

export function getData(){
    return Promise.all([requestion()])
    .then(res =>{
        console.log(res[0].data.result) 
        return res[0].data.result
    }).catch(err =>{
        console.log(err)
        return err
    })
}