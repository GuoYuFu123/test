import Vue from 'vue'
import Router from 'vue-router'

//导入组件
import ListPage from '@/modules/List'
import DetailPage from "@/modules/Detail"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'List',
      component: ListPage
    },
    {
      path:'/detail/:goodsId',
      name:'Detail',
      component:DetailPage
    },
    {
      path:"*",
      name:"404",
      component:{template:"<div>404</div>"}
    }
  ]
})
