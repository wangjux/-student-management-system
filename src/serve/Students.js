//步骤
//1.导入需要用到的模块
var express = require('express')
var app = express()
var mongooes = require('mongoose')
var bodyParser = require('body-parser')

//2.解析post请求的中间件
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

mongooes.connect('mongodb://localhost/itcast',{ useNewUrlParser: true,useUnifiedTopology: true })
mongooes.connection.on('open',()=>{
    console.log('数据库连接成功')
})
mongooes.connection.on('error',(err)=>{
    throw err;
})

var studentSchame = new mongooes.Schema({
        snumber:{type:String,require:true},
        class:{type:String,require:true},
        name:{ type:String, require:true},
        sex:{type:String,require:true},
        Clang:{type:Number,require:true},
        Java:{type:Number,require:true},
        serve: {type:Number,require:true}
})

var Students = mongooes.model('Student',studentSchame)

module.exports = Students

