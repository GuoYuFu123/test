<template>
  <div class="wrap">
    <ul class="sub-header">
      <li v-for="(data,index) in classData" :key="index" @click="changeList(data.condition,index)" :class="selectIndex == index?'active':''">{{data.name}}</li>
    </ul>
    <!--加载更多-->    
    <div class="loadmore-wrap" >        
      <div class="loadmore-box">  
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">     
          <ul class="glass-content">
            <li class="item" v-for="(data,index) in listData" :key="index">
              <div class="glass-box">
                <span class="glass-hot" v-text="data.isHot?'HOT':data.isNew?'NEW':''"></span>
                <router-link :to="'/detail/'+data.goodsId">
                  <p class="glass-img"><img :src="'http://image.loho88.com/'+data.img" /></p>
                </router-link>
                <p class="glass-name">{{data.title}}</p>
                <p  class="glass-detail">
                  <span class="glass-price">￥ {{data.price}}</span>
                  <span class="glass-count">{{data.salesNum}}人已买</span>
                </p>
              </div>
            </li>
          </ul>
        </mt-loadmore>  
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    name:"Content",
    data(){
      return {
        classData:[
          {name:"综合",condition:""},
          {name:"销量",condition:"o1"},
          {name:"价格",condition:"o5"},
          {name:"筛选",condition:""}
          ],
        listData:[],
        allLoaded:false,
        page:1,
        selectIndex:0,  //默认选中的subheader
        loadCon:"" ,   //刷新条件
        flag:false    //回到顶部箭头
      }
    },
    methods:{
      loadTop(){
        console.log("下拉刷新")
        this.page=1
        this.allLoaded = false
        this.getListData(()=>{
          console.log("下拉刷新完成")
          this.$refs.loadmore.onTopLoaded();
        },this.loadCon)

      },
      loadBottom(){
        console.log("加载更多")
        this.page++;
        this.getListData(()=>{
          console.log("加载更多完成")
          this.$refs.loadmore.onBottomLoaded();      
        },this.loadCon)
      },
      getListData(callback,condition){
      //  console.log(condition,this.page)
        var urlStr = "loho/search/?e=222&page="+this.page;
        if(condition){
          urlStr ="loho/search/?e=222&page="+this.page+"&sort="+condition ;
        }
      //  console.log(urlStr)
        this.axios(urlStr).then(res=>{
          // console.log(res.data)
          if(this.page>1){
            //说明获取更多资源
            this.listData = this.listData.concat(res.data.result.data)
          }else{
            this.listData = res.data.result.data
          }
          if(this.page*20>=res.data.result.count){
            this.allLoaded = true
          }
        //  console.log(this.listData)
          callback&&callback()
        })
      },
      changeList(condition,index){
        // console.log(condition)
        this.selectIndex = index
        this.loadCon = condition
        this.getListData(()=>{},condition)        
        if(condition == "o5"){
          this.classData[2].condition = "o3"
        }
        if(condition == "o3"){
          this.classData[2].condition = "o5"
        } 
              
      },
    },
    // computed:{
    //   listData(){
    //     return this.$store.state.list.listData
    //   }
    // },
    mounted(){
      // console.log(this.$store.state.list.listData)
      // console.log(this.$store)
      //this.$store.dispatch("getListData",{callback})
      this.getListData()
         
    }
  }
</script>

<style scoped>
.wrap{color:#222;height:100vh;width:100%;padding-top:111px;}

.wrap .sub-header{height:50px;position:fixed;top:60px;left:0;width:100%;z-index:10;background:white}
.wrap .sub-header li{width:25%;line-height:50px;text-align:center;font-size:14px;float:left;border-bottom:1px solid #ccc}

.wrap .glass-content{width:100%;background:#f0f0f0}
.wrap .glass-content  .item{width:49%;height:15rem;display:inline-block;padding:12px;margin-top:5px;background:white;margin-right:3px;}
.wrap .glass-content  .item .glass-box{position:relative;}
.wrap .glass-content  .item .glass-box .glass-hot{position:absolute;top:5px;left:0;color:#E51C23;font-size:12px;}
.wrap .glass-content  .item .glass-img{width:100%;height:9rem;padding-top:2rem}
.wrap .glass-content  .item .glass-img img{height:auto;display: inline-block;vertical-align: middle;}
.wrap .glass-content  .item .glass-name{height:2.5rem;line-height:1.2;font-size:15px;overflow:hidden}
.wrap .glass-content  .item .glass-detail{display:flex;justify-content:space-between;margin-top:4px;}
.wrap .glass-content .item .glass-detail .glass-price{color:#E51C23;font-weight:700}
.wrap .glass-content .item .glass-detail .glass-count{color:#c1c1c1;font-weight:400;font-size:10px;}

.loadmore-wrap{ width:100%;height:90vh;  width:100%;padding-bottom:50px;}


.active{color:red}

</style>