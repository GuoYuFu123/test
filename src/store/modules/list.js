// import { list } from '@/services';
import axios from "axios"
export  default  {
  state:{
    listData:[],
  },
  //给组件提供的数据
  // getters: {
  //   listData:state=>state.listData.listData,
  // },
  mutations : {
    LIST_DATA(state,{listData}){
      //修改数据
      state.listData = listData;
    }
  },
  //给组件提供的方法
  actions:{
    getListData(context){
      axios("loho/search/?e=222&page="+1).then(res=>{
        console.log(res.data.result)
        context.commit("LIST_DATA",{listData:res.data.result.data})
      })
    }
  }

}