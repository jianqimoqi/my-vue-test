<template>
<div>
  <div class="block">
    <span class="demonstration">轮播图</span>
    <el-carousel
      trigger="click"
      height="300px"
      :autoplay="false">
      <el-carousel-item v-for="(item, index) in imgSource" :key="index">
        <!-- 此处可替换图片 -->
        <img :src="item.src">
        <!-- <h3 class="small">{{item}}</h3> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>
<script>
export default {
  name: 'ElementCarouselTest',
  data () {
    return {
      imgSource: [
        {
          // src: `url('../../assets/images/row1.jpg')`
          src: require('../../assets/images/row1.jpg')
        },
        {
          src: require('../../assets/images/row2.jpg')
        },
        {
          src: require('../../assets/images/col1.jpg')
        }
      ]
    }
  }
}
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: .75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  /* background-color: #99a9bf; */
}
.el-carousel__item:nth-child(2n+1) {
  /* background-color: #d3dce6; */
}
.el-carousel__item:nth-child(1) {
  background-image: url("../../assets/images/delIcon.png")
}
</style>
