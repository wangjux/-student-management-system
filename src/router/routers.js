import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  export default new VueRouter({
    mode: 'history',
    routes:[
      {path:'/',name:'主页',component: () =>import('@/components/main')},
      {path:'/write',name:'编辑',component:() =>import('@/components/write')}
    ]
})