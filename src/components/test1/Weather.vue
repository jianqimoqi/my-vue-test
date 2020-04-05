<template>
  <div class="weather">
    <BgModuleCom :title="title"
                 @click="enlargeCpn()" />
    <div class="weatherAqi"><span>{{fomatFloat(this.weatherData.aqi, 1)}}</span></div>
    <div class="weatherDj"
         :class="{'green': activeColor==1, 'orange': activeColor==2, 'red': activeColor==3}">
      <span>&nbsp;{{dj}}&nbsp;</span>
    </div>
    <div class="weatherPm25">PM2.5：&nbsp;{{fomatFloat(this.weatherData.pm25, 1)}}</div>
    <div class="weatherPm10">PM10&nbsp;：&nbsp;{{fomatFloat(this.weatherData.pm10, 1)}}</div>
    <div class="weatherSd">湿度：&nbsp;{{fomatFloat(this.weatherData.humidity, 1)}}%</div>
    <div class="weatherWd">温度：&nbsp;{{fomatFloat(this.weatherData.temperature, 1)}}℃</div>
    <div class="weatherZy">噪音：&nbsp;{{fomatFloat(this.weatherData.noise, 1)}}dB</div>
    <div class="weatherQy">气压：&nbsp;{{fomatFloat(this.weatherData.airPressure, 1)}}hPa</div>
    <div class="weatherFx">风向：&nbsp;{{fomatFloat(this.weatherData.avgWindDirection, 1)}}</div>
    <div class="weatherFl">风力：&nbsp;{{fl}}级</div>
  </div>
</template>
<script>
import BgModuleCom from './BgModuleCom.vue'
export default {
  name: 'Weather',
  props: {
    title: {
      type: String,
      default: '天气'
    }
  },
  data () {
    return {
      weatherData: {
        'aqi': '50',
        'dj': '良',
        'pm25': '40',
        'pm10': '40',
        'humidity': '50',
        'temperature': '30',
        'noise': '50',
        'airPressure': '1008',
        'avgWindDirection': '20'
      },
      dj: '优',
      fl: '1',
      activeColor: 1
    }
  },
  mounted () {
    this.dataPost()
  },
  methods: {
    dataPost () {
      this.aqiJudge(this.weatherData.aqi, this.activeColor)
      this.windLevel(parseInt(this.weatherData.avgWindSpeed))

      // this.$http.fetchPost('/weather/count_cri_code?criCode=440300').then((data) => {
      //   if (data.data.data !== '') {
      //     this.weatherData = data.data.data
      //     this.aqiJudge(this.weatherData.aqi, this.activeColor)
      //     this.windLevel(parseInt(this.weatherData.avgWindSpeed))
      //   }
      // }).catch(err => {
      //   console.log(err)
      // })
    },
    aqiJudge (aqi) {
      if (aqi >= 0 && aqi < 50) {
        this.dj = '优'
        this.activeColor = 1
      } else if (aqi < 100) {
        this.dj = '良'
        this.activeColor = 1
      } else if (aqi < 150) {
        this.dj = '轻度污染'
        this.activeColor = 2
      } else if (aqi < 200) {
        this.dj = '中度污染'
        this.activeColor = 2
        console.log(this.activeColor, '判断')
      } else if (aqi < 300) {
        this.dj = '重度污染'
        this.activeColor = 3
      } else if (aqi >= 300) {
        this.dj = '严重污染'
        this.activeColor = 3
      }
    },
    windLevel (i) {
      if (i < 1) {
        this.fl = 0
      } else if (i >= 1 && i <= 5) {
        this.fl = 1
      } else if (i >= 6 && i <= 11) {
        this.fl = 2
      } else if (i >= 12 && i <= 19) {
        this.fl = 3
      } else if (i >= 20 && i <= 28) {
        this.fl = 4
      } else if (i >= 29 && i <= 38) {
        this.fl = 5
      } else if (i >= 39 && i <= 49) {
        this.fl = 6
      } else if (i >= 50 && i <= 61) {
        this.fl = 7
      } else if (i >= 62 && i <= 74) {
        this.fl = 8
      } else if (i >= 75 && i <= 88) {
        this.fl = 9
      } else if (i >= 89 && i <= 102) {
        this.fl = 10
      } else if (i >= 103 && i <= 117) {
        this.fl = 11
      } else if (i >= 118 && i <= 133) {
        this.fl = 12
      } else if (i >= 134 && i <= 149) {
        this.fl = 13
      } else if (i >= 150 && i <= 166) {
        this.fl = 14
      } else if (i >= 167 && i <= 183) {
        this.fl = 15
      } else if (i >= 184 && i <= 201) {
        this.fl = 16
      } else if (i >= 202) {
        this.fl = 17
      }
    },
    fomatFloat (num, n) {
      let f = parseFloat(num)
      if (isNaN(f)) {
        return false
      }
      f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n) // n 幂
      let s = f.toString()
      let rs = s.indexOf('.')

      // 判定如果是整数，增加小数点再补0
      if (rs < 0) {
        rs = s.length
        s += '.'
      }
      while (s.length <= rs + n) {
        s += '0'
      }
      return s
    },
    enlargeCpn () {
      console.log('被点击了')
    }
  },
  components: {
    BgModuleCom
  }
}
</script>
<style scoped lang="stylus">
.weather {
  margin-left: 100px;
  width: 300px;
  height: 200px;
  position: relative;
  // background-color: #ccc;
}

.weatherAqi {
  width: 100px;
  color: #10c1f7;
  font-size: 30px;
  position: absolute;
  top: 10%;
  left: 5%;
}

.weatherAqi span {
  position: absolute;
  right: 10%;
}

.weatherDj {
  min-width: 100px;
  height: 50px;
  position: absolute;
  top: 10%;
  left: 130px;
  border-radius: 15px;
}

.weatherDj span {
  color: #FFFFFF;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
}

.green {
  background: #3eba58;
}

.orange {
  background: orange;
}

.red {
  background: red;
}

.weatherPm25 {
  width: 120px;
  color: #FFFFFF;
  font-size: 18px;
  position: absolute;
  top: 40%;
  right: 20px;
  text-align: left;
}

.weatherPm10 {
  width: 120px;
  color: #FFFFFF;
  font-size: 18px;
  position: absolute;
  top: 50%;
  right: 20px;
  text-align: left;
}

.weatherSd {
  width: 150px;
  color: #FFFFFF;
  font-size: 18px;
  position: absolute;
  top: 40%;
  left: 5%;
  text-align: left;
}

.weatherWd {
  width: 150px;
  color: #FFFFFF;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 5%;
  text-align: left;
}

.weatherZy {
  width: 150px;
  color: #FFFFFF;
  font-size: 18px;
  position: absolute;
  top: 60%;
  left: 5%;
  text-align: left;
}

.weatherQy {
  width: 150px;
  color: #FFFFFF;
  font-size: 18px;
  position: absolute;
  top: 60%;
  right: 20px;
  text-align: left;
}

.weatherFx {
  width: 150px;
  color: #FFFFFF;
  font-size: 18px;
  position: absolute;
  top: 70%;
  left: 5%;
  text-align: left;
}

.weatherFl {
  width: 150px;
  color: #FFFFFF;
  font-size: 18px;
  position: absolute;
  top: 70%;
  right: 20px;
  text-align: left;
}
</style>
