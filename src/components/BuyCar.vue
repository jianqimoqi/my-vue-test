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
    <div class="hasCloth"
         v-if="list.length">
      <ul class="clothBox">
        <li v-for="(item, index) in list"
            :key="index"
            class="cloth-tr">
          <el-col :span="6">
            <el-checkbox v-model="selectArrCloth"
                         :label="item.id"
                         @change="item.checked=! item.checked">{{item.name}}</el-checkbox>
          </el-col>
          <el-col :span="3">{{item.size}}/{{item.color}}</el-col>
          <el-col :span="3">{{item.price}}</el-col>
          <el-col :span="3"
                  class="ocloth-count cus-text">
            <span class="pointer"
                  @click=decrease(item)>-</span>
            {{item.count}}
            <span class="pointer"
                  @click=increase(item)>+</span>
          </el-col>
          <el-col :span="3">{{item.active}}</el-col>
          <el-col :span="3">{{item.active*item.price*item.count}}</el-col>
          <el-col :span="3">
            <img class="delCloth pointer"
                 src="@/assets/images/delIcon.png"
                 title="删除"
                 @click="del(item)">
          </el-col>
        </li>
      </ul>
    </div>
    <div v-else>购物车没有商品，快去逛逛吧</div>
    <div class="totalCount">
      <div class="checkAll">
        <el-checkbox v-model="checkAll"
                     @change="getAllCheck">全选</el-checkbox>
      </div>
      <div class="totalPrice">合计{{totalPrice}}元</div>
      <div class="clothCount">已选商品{{totalCount}}件</div>
    </div>
  </div>
</template>

<script>
// import bus from '@/assets/bus.js'
import { mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      checkAll: false,
      selectArrCloth: [],
      totalCount: 0,
      totalPrice: 0,
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    ...mapMutations([
      'changebuycarCount'
    ]),
    ...mapActions([
      'asyncchangebuycarCount'
    ]),
    getAllCheck (value) {
      let selectArrCloth = []
      if (value) {
        this.list.forEach(item => {
          item.checked = true
          selectArrCloth.push(item.id)
        })
        this.selectArrCloth = selectArrCloth
      } else {
        this.list.forEach(item => {
          item.checked = false
        })
        this.selectArrCloth = []
      }
      this.getTotalCount()
    },
    getTotalCount () {
      let totalPrice = 0
      let totalCount = 0
      this.list.forEach(item => {
        if (item.checked) {
          totalPrice = totalPrice + (parseFloat(item.price).toFixed(2) * parseFloat(item.active) * item.count)
          totalCount = totalCount + parseInt(item.count)
        }
      })
      this.totalCount = totalCount
      this.totalPrice = totalPrice
    },
    getList () {
      let arr = [
        {
          name: '款式1',
          count: '2',
          size: 's',
          color: '红色',
          price: '100',
          active: '0.5',
          id: '1'
        },
        {
          name: '款式2',
          count: '2',
          size: 's',
          color: '红色',
          price: '100',
          active: '0.5',
          id: '2'
        },
        {
          name: '款式3',
          count: '2',
          size: 's',
          color: '红色',
          price: '100',
          active: '0.5',
          id: '3'
        }
      ]
      arr.forEach(item => {
        item.checked = false
      })
      this.list = arr
    },
    decrease (value) {
      if (value.count === 0) return
      value.count--
      this.getTotalCount()
    },
    increase (value) {
      value.count++
      this.getTotalCount()
    },
    del (value) {
      let index = this.list.findIndex(item => {
        return item.id === value.id
      })
      this.list.splice(index, 1)
      this.getTotalCount()
    }
  },
  watch: {
    selectArrCloth () {
      this.getTotalCount()
      if (this.selectArrCloth.length === this.list.length) {
        this.checkAll = true
      } else {
        this.checkAll = false
      }
    },
    list: {
      handler: function () {
        let count = 0
        this.list.forEach(item => {
          count += parseInt(item.count)
        })
        // bus.$emit('buycarCountChange', count)
        // this.$store.commit('changebuycarCount', count)
        // this.changebuycarCount(count)
        // this.$store.dispatch('asyncchangebuycarCount', count)
        this.asyncchangebuycarCount(count)
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.haveCloth {
  position: relative;
  padding-top: 36px;
}
.noCloth {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -200px;
}
.noCloth img {
  width: 100px;
}
.el-col-3 img {
  width: 20px;
}
</style>
