<template>
  <div :class="parent" @click="showClick()">
    <h1>{{title}}</h1>
    <div class="SurveillanceCameras">
      <div class="SurveillanceCamerasTop">
        <b><b class="colorGreen">●&nbsp;</b>共运行&nbsp;<span
          class="colorGreen">{{SurveillanceCameras.allEquipment}}台</span></b>
        <b style="margin-left: 40px"><b class="colorRed">●&nbsp;</b>故障设备&nbsp;
          <span class="colorRed">{{SurveillanceCameras.faultyEquipment}}台</span>
        </b>
      </div>
      <!-- <div class="SurveillanceCamerasMiddle">
        <span>街道名</span>
        <span style="margin-left: 30px">运行数量</span>
        <span style="margin-left: 40px">故障数量</span>
      </div> -->
      <el-table
        class="SurveillanceCamerasTable"
        :data="SurveillanceCamerasData"
        height="30vh">
        <el-table-column label="街道名" prop="jdm"
          class="SurveillanceCamerasTableTd1"></el-table-column>
        <el-table-column label="运行数量" prop="yxsl"
          class="SurveillanceCamerasTableTd2"></el-table-column>
        <el-table-column label="故障数量" prop="gzsl"
          class="SurveillanceCamerasTableTd3"></el-table-column>
      </el-table>
      <!-- <table class="SurveillanceCamerasTable">
        <tr v-for="(item,index) in SurveillanceCamerasData.slice(0,6) " :key="index">
          <td class="SurveillanceCamerasTableTd1">
            <span class="itemSpan" @click.stop="itemClick(item.code)">{{item.jdm.substring(0,6)}}</span>
          </td>
          <td class="SurveillanceCamerasTableTd2">
            <span>{{item.yxsl}}</span>
          </td>
          <td class="SurveillanceCamerasTableTd3">
            <span style="color: red">{{item.gzsl}}</span>
          </td>
        </tr>
      </table> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'SurveillanceCameras',
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
      default: '标题'
    }
  },
  data () {
    return {
      SurveillanceCameras: {
        allEquipment: 999,
        faultyEquipment: 12
      },
      SurveillanceCamerasData: [{
        code: '1001',
        jdm: '南园街道',
        yxsl: 10,
        gzsl: 2
      }, {
        code: '1002',
        jdm: '福田街道',
        yxsl: 10,
        gzsl: 2
      }, {
        code: '2001',
        jdm: '南天街道',
        yxsl: 100,
        gzsl: 22
      }, {
        code: '2002',
        jdm: '东门街道',
        yxsl: 10,
        gzsl: 2
      }, {
        code: '2003',
        jdm: '东门街道1',
        yxsl: 10,
        gzsl: 2
      }, {
        code: '2004',
        jdm: '东门街道2',
        yxsl: 10,
        gzsl: 2
      }, {
        code: '2005',
        jdm: '东门街道3',
        yxsl: 10,
        gzsl: 2
      }, {
        code: '2006',
        jdm: '东门街道4',
        yxsl: 10,
        gzsl: 2
      }, {
        code: '2007',
        jdm: '东门街道5',
        yxsl: 10,
        gzsl: 2
      }, {
        code: '2008',
        jdm: '东门街道6',
        yxsl: 10,
        gzsl: 2
      }, {
        code: '2009',
        jdm: '东门街道7',
        yxsl: 10,
        gzsl: 2
      }, {
        code: '2010',
        jdm: '东门街道8',
        yxsl: 10,
        gzsl: 2
      }]
    }
  },
  mounted () {
    // this.$http.fetchPost('/test4', '').then((data) => {
    //     this.SurveillanceCameras = data.data
    // });
    // this.$http.fetchPost('/test5', '').then((data) => {
    //     this.SurveillanceCamerasData = data.data
    // });

    setInterval(() => {
      this.SurveillanceCamerasData.push(this.SurveillanceCamerasData.shift())
    }, 2000)
  },
  methods: {
    // showClick () {
    //   this.$store.commit('set_showId', 1005)
    //   this.code = 0
    // },
    // itemClick (value) {
    //   this.$store.commit('set_showId', 1009)
    //   this.$store.commit('set_clickId', 1005)
    //   this.code = value
    //   this.$store.commit('set_codeFalse')
    //   console.log(this.code, '首页点击的街道code')
    // },
    // getRowClass ({ row, column, rowIndex, columnIndex }) {
    //   let str = 'background:#3f5c6d2c;font-size:16px;text-align:center;'
    //   if (columnIndex === 0) {
    //     str += 'color:#04D7f6;'
    //   } else {
    //     str += 'color:#fff;'
    //   }
    //   return str
    // },
    // getHeadRowClass ({ row, column, rowIndex, columnIndex }) {
    //   return `background:#3f5c6d2c;
    //   font-size:0.06rem;
    //   font-weight:bold;
    //   font-size:15px;
    //   color:#fff;
    //   text-align:center;`
    // }
  },
  components: {
  }
}
</script>
<style scoped>
.parent_bgcom {
  position:absolute;
  width: 400px;
  height: 263px;
  background-color: rgba(9, 98, 199, 0.596);
  background-image: url('../assets/bgImg/kuang.png');
  background-size: contain;
  background-repeat: no-repeat;
}
h1 {
  height: 40px;
  text-align: right;
  padding-right: 50px;
  font-size: 0.10rem;
  color: #eee;
  }
.SurveillanceCameras {
  width: 380px;
  height: 230px;
}
.SurveillanceCamerasTop {
  width: 340px;
  position: absolute;
  top: 43px;
  left: 40px;
  border-bottom-style: solid;
  border-color: #82ebfc;
  border-width: 2.5px;
  font-size: 18px;
  line-height: 26px;
  color: #FFFFFF;
}
.SurveillanceCamerasTop b {
  width: 150px;
}

.colorGreen {
  color: #59ff00;
}

.colorRed {
  color: red;
}

.SurveillanceCamerasMiddle {
  width: 340px;
  position: absolute;
  top: 75px;
  left: 40px;
  border-bottom-style: solid;
  border-color: #82ebfc;
  border-width: 2.5px;
  font-size: 18px;
  line-height: 28px;
  color: #FFFFFF;
}

.SurveillanceCamerasTable {
  width: 340px;
  height: 150px;
  position: absolute;
  bottom: 7px;
  left: 35px;
  font-size: 16px;
}

.SurveillanceCamerasTableTd1 {
  color: #00e7fc;
  width: 120px;
}

.SurveillanceCamerasTableTd2 {
  color: #FFFFFF;
  width: 100px;
  font-weight: bold;
}

.SurveillanceCamerasTableTd3 {
  width: 95px;
  color: red;
  font-weight: bold;
}

.SurveillanceCamerasTableTd3 span {
  margin-left: 30px;
}
.itemSpan:hover {
  cursor: pointer;
  color: #04a7ff;
}
</style>
<style>
.el-table th, .el-table tr {
  background-color: transparent;
}
</style>
