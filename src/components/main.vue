<template>
  <div>
    <router-view/>
    <el-container>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        :before-close="handleClose">
        <span>
          <el-form :inline="true" action='http://127.0.0.1:2020/news' method="POST" class="demo-form-inline" size="mini" >
            <el-divider content-position="left">基本信息</el-divider>
            <el-form-item label="学号">
              <el-input v-model="addstudent.snumber" placeholder="学号" style="width:200px" name='snumber'></el-input>
            </el-form-item>
            <el-form-item label="班级">
              <el-input v-model="addstudent.class" placeholder="班级" style="width:200px" name='class'></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="addstudent.name" placeholder="姓名" style="width:200px" name='name'></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="resource">
              <el-radio-group v-model="addstudent.sex" style="width:200px;margin-left=40px">
                <el-radio label="男"  name='sex'></el-radio>
                <el-radio label="女"  name='sex'></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-divider content-position="left">各科成绩</el-divider><br/>
            <el-form-item label="c语言">
              <el-input v-model="addstudent.Clang" placeholder="c语言" style="width:100px" name='Clang'></el-input>
            </el-form-item>
            <el-form-item label="JAVA">
              <el-input v-model="addstudent.Java" placeholder="JAVA" style="width:100px" name='Java'></el-input>
            </el-form-item>
            <el-form-item label="数据库">
              <el-input v-model="addstudent.serve" placeholder="数据库" style="width:100px" name='serve'></el-input>
            </el-form-item>
          </el-form>
          </span>
           <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false" size="mini">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false;onSubmit('addstudent')" size="mini">确 定</el-button>
            </span>
      </el-dialog>
      <el-header><i class="el-icon-edit">学生成绩管理系统</i></el-header>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
        <el-form-item label="学号">
          <el-input v-model="formInline.user" placeholder="学号"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formInline.region" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="finds()">查询</el-button>
          <el-button type="success" @click="dialogVisible = true">录入</el-button>
        </el-form-item>
      </el-form>
      <el-main>
      <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="snumber"
            label="学号"  
            >
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            >
          </el-table-column>
          <el-table-column
            prop="class"
            label="班级"
            >
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别"
            >
          </el-table-column>
          <el-table-column
            prop="Clang"
            label="C语言"
            >
          </el-table-column>
          <el-table-column
            prop="Java"
            label="JAVA"
            >
            </el-table-column>
          <el-table-column
          prop="serve"
          label="数据库"
          >
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            >
        <template slot-scope="scope">
            <a href="/write"><el-button type="primary" @click="write(scope.$index)" size="small">编辑</el-button></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-button type="danger" @click="deleted(scope.$index)" size="small">删除</el-button>
        </template>
        </el-table-column>
      </el-table>
    </el-main>
    </el-container>
  </div>
</template>

<script>

import {getData} from '@/network/response'
import {submit,deleted,finds} from '@/network/api'
import {_GET} from '@/network/request'
export default {
   data() {
     //查询弹窗的表格数据
      return {
         addstudent: {
          snumber: '',
          name: '',
          class: '',
          sex:'',
          Clang: '',
          Java: '',
          serve: '',
        },
        rules:{
          snumber:{message:"",require:true},
          class:{message:"",require:true},
          name:{message:"", require:true},
          sex:{message:"",require:true},
          Clang:{message:"",require:true},
          Java:{message:"",require:true},
          serve:{message:"",require:true},
        },
        //学号和姓名
        formInline: {
          user: '',
          region: ''
        },
        tableData: [],
        dialogVisible: false,
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      }
    },
    created(){
      this.getDatas()
    },
    methods: {
      //请求数据
      getDatas(){
        getData().then(res =>{
          return  this.tableData = res
        })
      },
      //提交数据
      onSubmit() {
        for(let i in this.addstudent){
            if(this.addstudent[i] === ''){
                return alert('数据不能有空！')
            }
        }
        let addstudent = this.addstudent
        submit(addstudent).then(res =>{
          console.log(res)
          return res.config.data
        })
        location.reload(true)
      },
      //删除数据
      deleted(index){
        let id = 0;
        for(var i=0;i<this.tableData.length;i++){
          if(i == index){
            console.log(this.tableData[i]._id)
            id = this.tableData[i]._id
          }
        }
        deleted(id).then(res =>{
          // console.log(res)
        })
        location.reload(true)
      },
      //查询数据
      finds(){
        if(this.formInline.user === '' && this.formInline.region === ''){
            return alert('请输入需要查询的学号和姓名')
        }
        for(var i = 0;i<this.tableData.length;i++){
          //判断需要查询的数据是否存在
            if(this.tableData[i].snumber === this.formInline.user && this.tableData[i].name === this.formInline.region){
              // console.log(this.tableData[i]._id)
              const writes = finds(this.tableData[i]._id).then(res =>{
                this.tableData = []
                this.tableData.push(res)
              }).catch(err =>{
                  console.log('该数据不存在！')
              })
          }
        }
      },
      //修改数据
      write(index){
        console.log(this.tableData[index])
        // localStorage.removeItem('addstudents')
        localStorage.setItem('addstudent',JSON.stringify(this.tableData[index]))
      },
       handleClick(row) {
        console.log(row);
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  }
}
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}
.el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    margin-bottom: 10px;
  }

  .el-form{
    text-align: center;
    justify-content: center;

  }
</style>
