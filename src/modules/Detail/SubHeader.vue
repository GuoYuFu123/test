<template>
<div>
    <ul class="sub-header">    
        <li v-for="(data,index) in titData" @click="handleClick(data.comp,index)" :class="selectIndex == index?'active':''">{{data.name}}</li>
    </ul>
    <keep-alive>
        <component :is="list"></component>
    </keep-alive>
</div>
</template>

<script>
    import vProInfo from './ProInfo'
    import vProEva from './ProEva'
    import vProParams from './ProParams'
    export default{
        name:"SubHeader",
        data(){
            return {
                titData:[
                    {name:"图文详情",comp:"v-pro-info"},
                    {name:"商品评价",comp:"v-pro-eva"},
                    {name:"商品参数",comp:"v-pro-params"}
                ],
                list:"v-pro-info",
                selectIndex:0
            }
        },
        methods:{
            handleClick(comp,index){
                this.list = comp;
                this.selectIndex = index
            }
        },
        components:{
            vProInfo,
            vProEva,
            vProParams
        }
    }
</script>

<style scoped>
.sub-header{padding:1rem 0;display:flex;width:100% ;border-top:1px solid #ccc;border-bottom:1px solid #ccc}
.sub-header li{width:33.3%;text-align:center;font-size:14px;border-right:1px solid #ccc}
.active {color:red}

</style>

