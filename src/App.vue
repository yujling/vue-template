<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
    margin: 0;
    padding:0
    }
    a{
    text-decoration: none;
    }
    ol,ul,li{
    list-style: none;
    }
    html,body{
    height: 100%;
    }
    textarea{ /* 文本域拉伸，根据需求而定 */
    resize: none；
    }
    
    input,button,textarea{
    outline: none;
    }
    
    img{
    max-width: 100%;
    height: auto;
    width: auto\9;
    -ms-interpolation-mode: bicubic;
    }
    input,input[type=submit],
    [type=reset],[type=button]{
    -webkit-appearance: none;
    resize: none;
    }
    
    .clear_fix::after{
    content: " ";
    display: block;
    visibility: hidden;
    height: 0;
    clear: both;
    }
    /* 设置背景文字颜色 */
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder{
    color: #ccc;
    }
    /* 单行溢出 */
    .spill{
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    }
    /* 多行溢出 */
    .spills{
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
    }
</style>
