<template>
  <div class="hello">
    <el-dialog
        title="编辑"
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
            </el-form-item><br/>
            <!-- <button type="submit" >录入</button> -->
          </el-form>
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false" size="mini"><a href="/">取 消</a></el-button>
            <a href="/"><el-button type="primary" @click="dialogVisible = false;onSubmit('addstudent')" size="mini">确 定</el-button></a>
            </span>
      </el-dialog>
    </div>
</template>

<script>
import {write} from '@/network/api'
export default {
    data(){
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
        dialogVisible: true,
      }
    },
    created(){
      this.addstudent = JSON.parse(localStorage.getItem('addstudent'))
      localStorage.removeItem('addstudent')
    },
    methods:{
      //提交数据
      onSubmit() {
        console.log(this.addstudent)
        let addstudent = this.addstudent
        write(addstudent)
      },
      handleClose() {
        window.location.href='/'
      }
    }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>
