var express = require('express')
var Students = require('./Students')
const bodyParser = require('body-parser')
const { json } = require('body-parser')
const students = require('../../../node/crud-express-mongodb/crud-express/students')
const router = express.Router()

//查询
router.get('/',(req,res)=>{
    Students.find((err,ret) =>{
        if(err){
            console.log('error')
        }
        // res.statusCode = 200;
        // res.setHeader('Content-Type','text/html;charset=UTF-8');
        // var result = JSON.stringify(ret)
        // res.end(result)
        res.setHeader('Content-Type', 'text/plain')
        res.json({
            statu:200,
            result:ret
        })
    })
})

//录入
router.post('/news',(req,res)=>{
    new Students(req.body.data).save((err) =>{
        if(err){
            console.log('error')
            return res.status(500).send('Server error')
        }else{
            console.log('保存成功')
        }
    }) 
    console.log(req.body.data)
})

//删除
router.get('/delete',(req,res) =>{
    console.log(req.query[0])
    Students.findByIdAndRemove(req.query[0],err =>{
        if(err){
            console.log('err')
        }else{
            console.log('删除成功！')
        }
    })
})

//查询
router.get('/finds',(req,res)=>{
    Students.findById(req.query[0],(err,ret) =>{
        if(err){
            console.log('err')
        }else{
            res.setHeader('Content-Type', 'text/plain')
            res.json({
                statu:200,
                result:ret
            })
        }
    })
})

//提交编辑数据
router.post('/write',(req,res) =>{
    Students.findByIdAndUpdate(req.body.data._id,req.body.data,(err,ret) =>{
        if(err){
            console.log('error')
        }else{
            res.json({
                statu:200,
                result:ret
            })
        }
    })
    console.log('修改成功！')
})
module.exports = router