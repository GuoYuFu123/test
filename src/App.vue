<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @media screen and (max-width:320px ) {
    html{font-size: 12px;}

  }
  @media screen and (min-width:321px) and (max-width:375px ) {
    html{font-size: 14px;}

  }
  @media screen and (min-width:376px ) {
    html{font-size: 16px;}
  }
  *{box-sizing:border-box;}
  html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,input,section,nav,article,aside,header,footer,figure,figcaption,main{margin:0;padding:0;}
  ul,ol,li{list-style:none;}
  ul,ol,li{list-style:none;}
  a,u{text-decoration:none;}
  b,strong{font-weight:100;}
  i,em{font-style:normal;}
  h1,h2,h3,h4,h5,h6{font-size:16px;font-weight:100;}
  img{display:block;border:0;width: 100%;height: 100%;}
  html,body{height: 100%}
  body{display:flex;flex-direction: column;align-content: flex-start;}
</style>
