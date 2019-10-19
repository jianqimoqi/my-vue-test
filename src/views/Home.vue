<!--首页-->
<template>
  <div class="home">
    <Nav :NavActiveIndex="activeIndex"></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'home',
  components: {
    Nav
  },
  data () {
    return {
      activeIndex: 'aaa'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
