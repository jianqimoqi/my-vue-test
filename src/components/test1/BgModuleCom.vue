<template>
  <div :class="parent">
    <h1>{{title}}</h1>
    <div v-html="bgBody"></div>
  </div>
</template>
<script>
export default {
  name: 'bgcom',
  props: {
    parent: {
      type: String,
      default: 'parent_bgcom'
    },
    bgBody: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="stylus">
.parent_bgcom {
  position: absolute;
  width: 300px;
  height: 200px;
  background-color: #ccc;
  // background-image: url('/assets/bgImg/kuang.png');
  background-size: contain;
  background-repeat: no-repeat;

  div {
    width: 100%;
    height: 100%;
  }

  h1 {
    height: 40px;
    text-align: right;
    padding-right: 30px;
    font-size: 12px;
    color: #eee;
  }
}
</style>
