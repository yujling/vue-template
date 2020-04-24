/*
 * @Author: xiaoling 
 * @Date: 2020-04-23 15:03:16 
 * @Last Modified by: xiaoling
 * @Last Modified time: 2020-04-24 10:18:41
 */
<template>
  <div class="hello">
    <h5>{{ msg }}</h5>
    <div class="loginBox">
      <el-input v-model="user" placeholder="请输入用户名"></el-input>
      <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
      <el-button type='primary' @click="postLogin">登录</el-button>  <el-button @click="cancel">取消</el-button>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'  //①先引入vuex中的辅助函数
export default {
  name: 'Login',
  data() {
    return {
      msg: '登录页面',
      user:'',
      password:''
    }
  },
  computed:{
    ...mapState({
      count:state=>state.app.count
    })
  },
  mounted() {
    // this.getList()
  },
  methods: {
    ...mapMutations(['aaa']),
    ...mapActions(['signIn']),
    //登录
    postLogin(){
      let obj = {};
      if(!this.user){
        this.$message.error('请输入用户名');
        return;
      }
       if(!this.password){
        this.$message.error('请输入用户密码');
        return;
      }
      obj.name = this.user;
      obj.password = this.password;
      // this.aaa();
      
      // this.$store.commit('aaa')
      // this.aaa()    //相当于this.$store.commit('aaa')
       this.signIn(obj).then(data=>{
          this.$message({
           message: '登录成功，欢迎登录Hui阅读后台管理系统！',
           type: 'success'
        })
          this.$router.push('index');
       }).catch(()=>{
         console.log('error submit');
         return false;
       })
     /*  res = await this.$http.login.login(obj);
      if(res.data.code === 1000){
        this.$message({
          message: '登录成功，欢迎登录Hui阅读后台管理系统！',
          type: 'success'
        })
        this.$router.push('index');
      }else{
        this.$message.error(res.data.result)
      } */
    },
    //取消
    cancel(){
      this.user = '';
      this.password = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.mr{margin-bottom: 2rem;}
.loginBox{
  width:30%;
  height:300px;
  margin: 0 auto;
}
</style>
