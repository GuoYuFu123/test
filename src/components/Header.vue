<template>
  <div>
    <v-right-page v-if="flag"/>
    <ul class="header">
      <li class="header-btnl">
        <a href="javascript:window.history.go(-1);">
          <span class="iconfont icon-jiantou-left" style="color:#222 ; font-size:22px;"></span>
        </a>
      </li>
      <li class="header-tit">{{tit}}</li>
      <li class="header-btnr">
        <a href="#">
          <span class="iconfont icon-gouwuchekong" style="color:#222 ; font-size:22px;"></span>    
        </a>
      </li>
      <li class="header-btnr" @click="handleClick">
        <a href="javascript:;" >
          <span  class="iconfont icon-liebiao" style="color:#222 ; font-size:22px;"></span>    
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import vRightPage from './RightTopPage'
  export default {
    name:"Header",
    props:{
      tit:{
        type:String,
        default(){
          return ""
        }
      }
    },
    data(){
      return {
        flag:false
      }
    },
    methods:{
      handleClick(){
        this.flag=!this.flag
        // console.log(this.flag)
      }
    },
    components:{
      vRightPage
    }
  }
</script>

<style scoped>
  .header{position: fixed;height: 60px;width:100%;top:0;left: 0;background:#fff;color:#222;border-bottom:1px solid #ccc;z-index:10}
  .header li{float: left;height: 60px;text-align: center;line-height: 60px;font-size:16px;}
  .header li a,span{display:block;height:60px;font-size:22px}
  .header-tit{width: 40%}
  .header-btnl{width: 30%}
  .header-btnr{width: 15%}
</style>