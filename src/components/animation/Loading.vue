<!--交错动画，设置不同的延迟时间  -->
<template>
<div class="loading">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
</template>
<script>
export default {
  name: 'Loading',
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>
<style scoped lang="stylus">
.loading {
  display: flex;
  width 100%
  justify-content: center;
  align-items: center;
  animation-delay: 1s;

  .dot {
    position relative
    width 2em
    height 2em
    margin 0.8em
    border-radius 50%

    &::before {
      position: absolute;
      content: '';
      width 100%
      height 100%
      display flex
      justify-content center
      background inherit
      border-radius: inherit;
      animation: wave 2s ease-out infinite;
    }

    colors = #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;

    for color,i in colors {
      &:nth-child({i+1}) {
        background color

        &::before {
          animation-delay: i * 0.2s;
        }
      }
    }
  }
}

@keyframes wave {
  50%,75% {
    transform scale(2.5)
  }
  80%,100% {
    opacity 0
  }
}

</style>
