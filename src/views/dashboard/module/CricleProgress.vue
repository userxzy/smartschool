<template>
  <div class="cricle_main">
    <div class="left_room">
      <div class="progress_title">实习生资格占比</div>
      <div class="progress_item">
        <circle-progress :width="100" :radius="10" :progress="30" :isAnimation="true" :isRound="false">
          <slot>
            <span class="progress_text">实习生50%</span>
          </slot>
        </circle-progress>
      </div>
    </div>
    <div class="right_room">
      <div class="progress_title">热门数据</div>
      <div id="myChart" class="right_charts"></div>
    </div>
  </div>
</template>
<script>
import CircleProgress from 'vue-circleprogressbar'
import echarts from 'echarts'
export default {
  components: {
    CircleProgress
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      const myChart = echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: '',
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.progress_text {
  font-size: 14px!important;
}
.cricle_main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
  .left_room, .right_room {
    width: 48%;
    height: 200px;
    background: #fff;
    .right_charts {
      width: 100%;
      height: 100%;
    }
    .progress_title{
      padding: 10px;
      padding-left: 20px;
      border-bottom: solid 1px #f5f5f5;
    }
    .progress_item {
      width: 120px;
      padding: 20px 0 0 20px;
    }
  }
}
</style>
