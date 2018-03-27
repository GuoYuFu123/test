// import { list } from '@/services';
import axios from "axios"
import fetchJsonp from "fetch-jsonp"

export  default  {
  state:{
    detailData:{},
    imgSwiper:[],     //轮播图
    goodsName:"",       //商品名
    promiseTag:[],      //商家承诺
    colorColor:[],      //颜色选择
    unionedData:[],     //组合套餐
    unionedAllPrice:[], //组合套餐价格
    goodsId:"",
    detailStore:"",     //店铺总数
    commentsData:[],     //评价数据
    dateData:[],         //日期数据
    itemCount:""         //评论的总数

  },
  //给组件提供的数据
  getters: {
    detailData:state=>state.detailData,
    imgSwiper:state=>state.imgSwiper,                 //轮播图
    goodsName:state=>state.goodsName,                 //商品名
    promiseTag:state=>state.promiseTag,               //商家承诺
    colorColor:state=>state.colorColor,               //颜色选择
    unionedData:state=>state.unionedData,             //组合套餐
    unionedAllPrice:state=>state.unionedAllPrice,     //组合套餐价格
    detailStore:state=>state.detailStore,             //店铺总数
    commentsData:state=>state.commentsData,           //评价数据
    itemCount:state=>state.itemCount                  //评论总数
  },
  mutations : {
    // 价格和销量
    DETAIL_DATA(state,{detailData}){
      state.detailData = detailData
    },
    // 产品信息
    DETAIL_INFO(state,{detailInfo}){
      state.imgSwiper = detailInfo.info.pics
      state.goodsName = detailInfo.info.goodsName
      state.promiseTag = detailInfo.info.promiseTag
      state.colorColor = detailInfo.models 
      state.unionedData = detailInfo.unioned
      state.unionedAllPrice = getAllPrice(detailInfo)
      function getAllPrice(detailInfo){
        let arr = []
        detailInfo.unioned.map((value,index)=>{
        //  console.log(value,index)
          let sum = 0;
          value.goods.map((value1,index)=>{
            sum+=value1.shopPrice*1
          })
          arr.push(sum)
        })
        return arr
      }      
    },
    DETAIL_STORE(state,{detailStore}){
      state.detailStore = detailStore
    },
    DETAIL_COMMENTS_DATA(state,{commentsAllData}){
  
      var commentsData = state.commentsData.length?state.commentsData.concat(commentsAllData.result):commentsAllData.result
      state.itemCount =commentsAllData.itemCount 

      // 将时间拼到commentsData中去
      state.commentsData = getDate(commentsData)
      function getDate(commentsData){
        let arr = [];
        commentsData.map((value,index)=>{
          let dateStr = ""
          let date = Number(value.comment.addTime+"000")
          var odate = new Date(date);
          dateStr = odate.getFullYear().toLocaleString()+"年"+toDouble(odate.getMonth().toLocaleString())+"月"+toDouble(odate.getDate().toLocaleString())+"日 "+toDouble(odate.getHours().toLocaleString())+":"+toDouble(odate.getMinutes().toLocaleString())+":"+toDouble(odate.getSeconds().toLocaleString());
          commentsData[index].comment.addTimeShow = dateStr
          // 数字转2位
          function toDouble(str){
            if(str.length==1){
                return "0"+str
            }else{
                return str
            }
          }                    
        })
        return commentsData
      }
      
    }  

  },
  //给组件提供的方法
  actions:{
    // 获取价格和销量
    getDetailData(context,{goodsId}){
      axios("loho/goodsInfo/"+goodsId).then(res=>{
      //  console.log(res.data)
        context.commit("DETAIL_DATA",{detailData:res.data.result})
      })
    },
    // 获取产品信息
    getDetailInfo(context,{goodsId}){
      axios("loho/goods/"+goodsId).then(res=>{
      //   console.log(res.data)
        context.commit("DETAIL_INFO",{detailInfo:res.data.result})
      })
    },
    // 获取店铺的总数    
    getStoreCount(context){
      axios("loho/store/count").then(res=>{
        // console.log(res.data)
        context.commit("DETAIL_STORE",{detailStore:res.data.result})
      })
    },  
    // 获取评价
    getCommentsData(context,{curPage,pageSize}){
      fetchJsonp(`http://user.loho88.com/comment/getGoodsComments.do?barcode=211312170316020&catId=8&curPage=${curPage}&pageSize=${pageSize}`,{
        jsonpCallback:"jsoncallback",
        credentials: "include"
      }).then(res=>res.json()).then(data=>{
        console.log(data)
        context.commit("DETAIL_COMMENTS_DATA",{commentsAllData:data})
      })
    }
  }

}