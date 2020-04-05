<!--公共-->
<template>
  <div id="app">
    <NavPage></NavPage>
    <router-view />
  </div>
</template>
<script>
import NavPage from './views/NavPage'
export default {
  components: {
    NavPage
  }
}
</script>
<style>
/* 引入基础样式 */
@import url("./assets/base.css");
</style>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
