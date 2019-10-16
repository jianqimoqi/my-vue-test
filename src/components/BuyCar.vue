<template>
  <div id="buyCar">
    <div class="havaCloth">
      <div class="cloth-thead">
        <el-col :span="6">商品信息</el-col>
        <el-col :span="3">尺码/颜色</el-col>
        <el-col :span="3">吊牌价</el-col>
        <el-col :span="3">数量</el-col>
        <el-col :span="3">折扣</el-col>
        <el-col :span="3">总金额</el-col>
        <el-col :span="3">操作</el-col>
      </div>
    </div>
    <div class="hasCloth">
      <ul class="clothBox">
        <li class="cloth-tr">
          <el-col :span="6">商品信息</el-col>
          <el-col :span="3">尺码/颜色</el-col>
          <el-col :span="3">吊牌价</el-col>
          <el-col :span="3">数量</el-col>
          <el-col :span="3">折扣</el-col>
          <el-col :span="3">总金额</el-col>
          <el-col :span="3">
            <img class="delCloth" src="@/assets/images/delIcon.png" title="删除">
          </el-col>
        </li>
      </ul>
    </div>
    <div class="totolCount">
      <div class="checkAll">全选</div>
      <div class="totalPrice">合计</div>
      <div class="clothCount">已选商品</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
div {
  background-color: #f5de19
}
</style>
