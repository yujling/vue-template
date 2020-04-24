<template>
  <div class="hello">
    <h6>{{ msg }}</h6>
    <el-row>
      <el-button>默认按钮</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      msg: '我是主页面'
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async  getList() {
      const res = await this.$http.article.articleList()
      // const res =  await this.$http.login.signIn({name:"guoxiao",password:"123456"})
      console.log(res)
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
</style>
