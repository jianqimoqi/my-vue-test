<!--首页-->
<template>
  <div class="home">
    <NavPage v-if="navOpen"
             :NavActiveIndex="activeIndex"
             @fromNavVal="fromNavVal"></NavPage>
    <div class="pointer"
         v-else
         @click="menuOpen()">展开{{activeIndex2}}</div>
    <router-view />
  </div>
</template>

<script>
import NavPage from './NavPage.vue'

export default {
  name: 'home',
  components: {
    NavPage
  },
  data () {
    return {
      activeIndex: '/buyCar',
      // activeIndex2: '1234',
      navOpen: true
    }
  },
  methods: {
    fromNavVal (val) {
      this.activeIndex2 = val
      this.navOpen = false
    },
    menuOpen () {
      this.navOpen = true
    }
  }
}
</script>
<style scoped lang="stylus"></style>
