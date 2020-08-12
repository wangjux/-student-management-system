var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var router = require('./router')
// var cors = require('cors')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(router)
// app.use(cors())

//app.js
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

app.listen(2020,()=>{
    console.log('http://127.0.0.1:2020')
})