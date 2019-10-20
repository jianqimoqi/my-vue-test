<!--首页-->
<template>
  <div class="home">
    <NavPage v-if="navOpen" :NavActiveIndex="activeIndex" @fromNavVal="fromNavVal"></NavPage>
    <div v-else>折叠{{activeIndex2}}</div>
    <router-view/>
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
      activeIndex: '/home/buyCar',
      // activeIndex2: '1234',
      navOpen: true
    }
  },
  methods: {
    fromNavVal (val) {
      this.activeIndex2 = val
      this.navOpen = false
    }
  }
}
</script>
