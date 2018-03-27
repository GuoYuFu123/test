<template>
  <div>
    <v-header tit="太阳镜"></v-header>
    <v-content></v-content>
    <v-scroll-top></v-scroll-top>
  </div>
</template>

<script>
  import vHeader from '@/components/Header'
  import vContent from './Content'
  import vScrollTop from '@/components/ScrollTop'

  export default {
    name:"List",
    components:{
      vHeader,
      vContent,
      vScrollTop
    }
  }
  
</script>

<style scoped>

</style>

