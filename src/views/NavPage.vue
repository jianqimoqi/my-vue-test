<template>
  <div>
    <el-menu :default-active="NavActiveIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             router>
      <!-- router: 在导航栏中以index作为path进行路由跳转 -->
      <el-menu-item index="/buyCar">购物车{{buycarCount}}</el-menu-item>
      <el-submenu index="2">
        <template slot="title">工作台</template>
        <el-menu-item index="about">about</el-menu-item>
        <el-menu-item index="carousel">element轮播</el-menu-item>
        <el-menu-item index="animation">动画</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="/weather">weather</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3"
                    disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me"
           target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <button class="pointer"
            @click="click">折叠菜单</button>
    <span>{{userName}}</span>
  </div>
</template>

<script>
// import bus from '@/assets/bus.js'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'navPage',
  props: {
    NavActiveIndex: String
  },
  components: {},
  data () {
    return {
      // activeIndex: '1'
      activeIndex2: '+'
      // buycarCount: 0
    }
  },
  computed: {
    ...mapState(['buycarCount']),
    ...mapGetters(['userName'])
  },
  created () {
    // bus.$on('buycarCountChange', (num) => {
    //   this.buycarCount = num
    // })
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    click () {
      this.$emit('fromNavVal', this.activeIndex2)
    }
  }
}
</script>

<style>
</style>
