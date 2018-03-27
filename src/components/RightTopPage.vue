<template>
    <ul>
        <li>
            <span class="jiantou"></span>
        </li>
        <li>
            <router-link to="/mine">
                <span class="iconfont icon-wo icon"></span>会员中心
            </router-link>
        </li>
        <li>
            <router-link to="/index">
                <span class="iconfont icon-shouye icon"></span>首页
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default{
        name:"RightTop",
    }
</script>

<style scoped>
ul{position:fixed;top:65px;right:1rem;width:8rem;height:5rem;z-index:5;background:white;border:1px solid #ccc;padding:0.8rem;font-size:14px;}
ul .jiantou{border:6px inset;border-color:transparent transparent #ccc;border-bottom-style: solid;height:12px;width:12px;display:block;position:absolute;top:-12px;right:10px;}
ul li{line-height:1.5}
ul li a {color:#222}
ul li .icon{padding-right:0.5rem}
</style>