<template>
<ul>
    <li class="service">
        <i class="iconfont icon-kefu"></i>
        <span>客服</span>        
    </li>
    <li class="collect">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span> 
    </li>
    <li class="cart">加入购物车</li>
    <li class="appointment">预约附近验光点</li>
</ul>
</template>

<script>
export default{
    name:"Footer"
} 
</script>

<style scoped>
ul{position:fixed;bottom:0;left:0;height:60px;width:100%;background:white;border-top:1px solid #ccc}
li{float:left;text-align:center;height:100%}
.service,.collect{width:20%;padding-top:0.6rem}
.service,.collect i,span{display:block}
.cart,.appointment{width:30%;padding-top:1.4rem;color:white}
.cart{background:#FF9500}
.appointment{background:#e8343b}
</style>
