<template>
<div>
  <el-container>
    <!-- header -->
    <el-header>
      <el-row>
        <el-col :span="20" :offset="2">
          <span class="demonstration">轮播图1</span>
          <el-carousel
            trigger="click"
            arrow="always"
            height="300px"
            :autoplay="false"
            class="el-carousel">
            <el-carousel-item
              v-for="(item, index) in imgSource" :key="index"
              :label="item.name"
              class="el-carousel-item">
              <!-- 此处可替换图片 -->
              <!-- <h3 class="small">{{item.name}}</h3> -->
              <img :src="item.src" alt="">
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="20" :offset="2">
          <span class="demonstration">轮播图2</span>
          <el-carousel
            trigger="click"
            arrow="always"
            height="300px"
            :autoplay="false"
            class="el-carousel">
            <el-carousel-item
              v-for="(item, index) in imgSource" :key="index">
              <div>
                <img class="el-carousel-img2" :src="item.src" alt="">
                <h3 class="small">{{item.name}}</h3>
              </div>
              <!-- 此处可替换图片 -->
              <!-- <h3 class="small">{{item.name}}</h3> -->
              <!-- <img :src="item.src" alt=""> -->
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </el-header>

  </el-container>
</div>
</template>
<script>
// 测试：element走马灯（轮播图）carousel
// 功能：轮播图片
export default {
  name: 'ElementCarouselTest',
  data () {
    return {
      imgSource: [
        {
          src: require('../../assets/images/row1.jpg'),
          name: '群像'
        },
        {
          src: require('../../assets/images/row2.jpg'),
          name: '熊本熊'
        },
        {
          src: require('../../assets/images/col1.jpg'),
          name: '猫女'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
// @media screen and (max-width:500px){
//   .el-carousel {
//     height: 150px;
//   }
//   .el-carousel-item img {
//     object-fit: contain;
//     object-position: top;
//     width: 100%;
//     height 100%
//   }
// }
.el-carousel__item img {
  object-fit: contain;
  object-position: top;
  width: 100%;
  height 100%
}
.el-carousel .el-carousel-img2 {
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
}
.el-carousel
  margin-bottom: 100px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.0855);
  border-radius: 6px;

  &:hover
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);

  /deep/ .el-carousel__arrow
    background-color: #545c648a;

/* .el-carousel__item h3 {
  color: #000;
  font-size: 14px;
  // opacity: .75;
  line-height: 150px;
  margin: 0;
} */
/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
} */
</style>
