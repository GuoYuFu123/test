<template>
<a class="scroll-top" v-if="flag" @click="returnTop">
    <span class="iconfont icon-jiantoushang scroll-top-icon"></span>
</a>
</template>
<script>
export default{
    name:"ScrollTop",
    data(){
        return {
            flag:true
        }
    },
    methods:{
        returnTop(){
            document.documentElement.scrollTop?document.documentElement.scrollTop=0: document.body.scrollTop=0
        }
    },
    mounted(){
        // console.log("mounted")
        window.addEventListener('scroll',()=>{
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(scrollTop)
            if(scrollTop>500){
            //判断当滚到高度大于500时候
                this.flag = true
            //这里写要触发的事件
            }else{
                this.flag = false
            }
        },true)
    }


}
</script>
<style scoped>
.scroll-top{position:fixed;bottom:1rem;right:1rem;width:4rem;height:4rem;border-radius:4rem;background:white;border:1px solid #ccc;text-align:center}
.scroll-top-icon{line-height:4rem;font-size:1.5rem}
</style>