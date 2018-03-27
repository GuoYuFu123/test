<template>
  <div>
    <v-header></v-header>

    <div class= "content">
      <!--轮播图-->
      <div class="swiper-box">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="data in imgSwiper">
            <img :src="'http://image.loho88.com/'+data" />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!--商品的细节-->
      <div class="glass-detail">
        <div class="glass-detail-top">
          <p class="detail-name">{{goodsName}}</p>
          <p class="detail-share">
            <span class="iconfont icon-fenxiang icon"></span>
            <span>分享</span>
          </p>
        </div>
        <div class="glass-detail-bottom">
          <p class="glass-price">￥ {{detailData.price}}</p>
          <p v-text="detailData.expressFee?'快递 : ￥'+detailData.expressFee:'快递 : 免运费'"></p>
          <p>{{detailData.salesNum}}人已买</p>
        </div>        
      </div>
      <!--店家承诺-->
      <ul class = "glass-promise">
        <li v-for="data in promiseTag"><span class="iconfont icon-duihao"></span>{{data}}</li>
      </ul>
      <!--颜色选择-->
      <div class="color-select">
        <p class="color-tit">颜色选择</p>
        <ul class="color-btns">
        <!--class="active"-->
          <li  v-for="(data,index) in colorColor" @click=handleClick(index,data.goodsId) :class="selectGoodsId==data.goodsId?'active':''">{{data.color}}</li>
        </ul>
      </div>
      <!--眼镜套餐-->
      <div class="glass-meal" v-if="unionedData.length"> 
        <div class="meal-img">
          <img :src="'http://image.loho88.com/'+unionedData[0].goods[0].goodsThumbMin">
        </div>
        <div class="meal-jia">+</div>
        <div class="meal-img">
          <img :src="'http://image.loho88.com/'+unionedData[0].goods[0].goodsThumbMin">
        </div>
        <div class="meal-info">
          <p class="meal-info-tit">{{unionedData[0].tname}}</p>
          <p>
            <span class="meal-info-price">￥ {{unionedData[0].price}}</span><s>￥{{unionedAllPrice[0]}}</s>
          </p>
        </div>
        <div>
          <span class="iconfont icon-jiantou-copy-copy icon"></span>
        </div>
      </div>
      <!--眼镜店地址-->      
      <div class="glass-store">   
        <div class="store-box">   
          <h6>APM购物中心店</h6>
          <p class="store-dis">
            <span class="iconfont icon-ditu"></span>
            <span>1.06km</span>
            <span class="store-order">免费预约直营店验光</span>
          </p>
          <div class="store-adds">
            <p class="store-adds-ads">地址:北京市东城区巨大了快速就送达胜多负少</p>
            <span class="iconfont icon-dianhua1 icon"></span>
          </div>
          <p class="store-global">
            <span>查看北京17家门店(全国<em>{{detailStore}}</em>家)</span>
            <span class="iconfont icon-jiantou-copy-copy"></span>
          </p>
        </div>
      </div>
      <v-sub-header />
    </div>

    <v-footer />
  </div>

</template>

<script>
  import {mapGetters,mapActions} from "vuex"

  import vHeader from '@/components/Header'
  import vSubHeader from "./SubHeader"
  import vFooter from "./Footer"

  export default {
    name:"Detail",
    components:{
      vHeader,
      vSubHeader,
      vFooter
    },
    data(){
      return{
        selectGoodsId:"",
        goodsId:0,
      }
    },
    computed:{
      ...mapGetters(["detailData","imgSwiper","goodsName","promiseTag","colorColor","unionedData","unionedAllPrice","detailStore"])
    },
    methods:{
      ...mapActions(["getDetailData","getDetailInfo","getStoreCount"]),
      handleClick(index,goodsId){
        // console.log(index,goodsId)
        this.selectGoodsId = goodsId;
        this.getDetailInfo({goodsId})
        this.getDetailData({goodsId})
      }
    },
    mounted(){
      this.selectGoodsId =this.$route.params.goodsId
      this.goodsId = this.$route.params.goodsId
      console.log(this.$route.params.goodsId)
      this.getDetailData({goodsId:this.goodsId})
      this.getDetailInfo({goodsId:this.goodsId})
      this.getStoreCount()
      // console.log(this.$store)
      //this.$store.dispatch("getListData",{callback})
    },
    updated(){
      // console.log(this.unionedData)
    }
  }
  
</script>

<style scoped>
.content{padding:60px 0 60px;}
.swiper-box{width:100vw;height:80vw;}
.swiper-box img{width:100%;height:10rem;margin-top:5rem}

.glass-detail{padding-top:0.5rem;background:#f0f0f0}
.glass-detail .glass-detail-top{padding:1rem;background:white;display:flex;border-bottom:1px solid #ccc;justify-content:space-between}
.glass-detail .glass-detail-top .detail-name{line-height:1.5;width:85%;overflow:hidden;border-right:1px solid #ccc;height:3rem}
.glass-detail .glass-detail-top .detail-share{width:15%;padding-left:5%}
.glass-detail .glass-detail-top .detail-share .icon{display:block}
.glass-detail .glass-detail-bottom{padding:1rem 1rem;display:flex;justify-content:space-between;border-bottom:1px solid #ccc; font-size:12px;color:#4e4e4e;background:white;line-height:1.2}
.glass-detail .glass-detail-bottom .glass-price{color:red;font-size:18px;font-weight:700}

.glass-promise{padding:1rem;font-size:8px;color:block;display:flex;justify-content:space-between;background:#f0f0f0}

.color-select{padding:1rem;color:#222;font-size:8px;border-bottom:1px solid #ccc}
.color-select .color-btns{margin-top:1.5rem;}
.color-select .color-btns li{margin-right:0.5rem;padding:0.5rem;background:#ccc;border-radius:4px;display:inline-block;margin-top:0.5rem}
.color-select .color-btns .active{background:#f60;color:#fff;}

.glass-meal{padding:1rem;background:white;display:flex;line-height:5rem}
.glass-meal .meal-img{border:1px solid #ccc;width:5.5rem;height:5.5rem;padding-top:1rem}
.glass-meal .meal-img img{height:3rem;}
.glass-meal .meal-jia{padding:0 0.5rem}
.glass-meal .meal-info{padding-left:0.5rem;width:10rem;line-height:1.5;font-size:8px;text-align:center;padding-top:0.5rem;margin-right:0.5rem}
.glass-meal .meal-info .meal-info-price{font-size:14px;font-weight:600;color:red}

.glass-store{padding:1rem 0;background:#f0f0f0;font-size:12px;}
.glass-store .store-box{background:#fff;padding:0 1rem}
.store-box h6{font-weight:600;color:black;padding-top:0.5rem;font-size:12px;}
.store-box .store-dis{padding:0.8rem 0;font-size:8px;}
.store-box .store-dis span{margin-right:0.8rem}
.store-box .store-dis .store-order{color:#ff9800}
.store-box .store-adds{display:flex;line-height:1.5;padding:0.5rem 0;border-bottom:1px solid #ccc}
.store-box .store-adds .store-adds-ads{width:80%;overflow:hidden;}
.store-box .store-adds .icon{font-size:24px;color:red;width:20%;padding-left:3%}

.store-box .store-global{padding:1rem;display:flex;justify-content:space-between}
.store-box .store-global em{color:red}


</style>