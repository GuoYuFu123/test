<template>
    <div>
        <ul class="pro-eva" v-if="commentsData.length">
            <li class="pro-item" v-for="(data,index) in commentsData" >
                <div class="pro-con">{{data.comment.content}}</div>
                <div class="pro-user">
                    <p>{{data.comment.customerId}}</p>
                    <p>{{data.comment.addTimeShow}}</p>
                </div>
                <div class="pro-store">店铺:{{data.location}}</div>
            </li>
            <p class="btn-more" @click="handleClick">查看更多评价 ( {{this.itemCount}} )</p>
        </ul>
        
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default{
    name:"ProEva",
    data(){
        return{
            curPage:1,
            pageSize:10
        }
    },
    computed:{
        ...mapGetters(["commentsData","itemCount"])
    },
    methods:{
        
        ...mapActions(["getCommentsData"]),
        handleClick(){       
            this.curPage++
            let curPage = this.curPage
            let pageSize = this.pageSize
            if(curPage <= Math.ceil(this.itemCount/pageSize)){             
                this.getCommentsData({curPage,pageSize})
            }else{
                let instance = this.Toast('亲,到底了');
                setTimeout(() => {
                    instance.close();
                }, 2000);
                
            }
        }
    },
    mounted(){
        // console.log(this.curPage)
        let curPage = this.curPage
        let pageSize = this.pageSize
        this.getCommentsData({curPage,pageSize})
    }

}
</script>

<style scoped>
.pro-eva .pro-item{padding:1rem;border-bottom:1px solid #ccc;font-size:8px;}
.pro-eva .pro-item .pro-con{padding:0.5rem 0;}
.pro-eva .pro-item .pro-user{padding:0.5rem 0;display:flex;justify-content:space-between;color:#CDC8B1}
.pro-eva .pro-item .pro-store{color:#CDC8B1}

.btn-more{padding:1rem 0;text-align:center;color:#222;font-size:12px;}
</style>