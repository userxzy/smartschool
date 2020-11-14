<template>
  <div class="top-data">
    <el-row :gutter="24">
      <el-col :span="24"><div class="data_title">数据概览</div></el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col v-for="item in dataList" :key="item.id" :span="6">
        <div class="data_inner">
          <div>{{ item.text }}</div>
          <div class="data_num">{{ item.num }}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          id: '001',
          text: '学生总人数',
          num: '1185人'
        },
        {
          id: '002',
          text: '实习打卡完成率',
          num: '0%'
        },
        {
          id: '003',
          text: '今日新增岗位',
          num: '0个'
        },
        {
          id: '004',
          text: '今日投递人数',
          num: '0人'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.top-data {
  box-sizing: border-box;
  margin: 0;
  color: rgba(0,0,0,.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  background: #fff;
  border-radius: 2px;
  transition: all .3s;
  .data_inner {
    padding: 24px;
    .data_num {
      margin-top: 4px;
      color: rgba(0,0,0,.85);
      font-size: 24px;
    }
  }
  .data_title {
    min-height: 48px;
    line-height: 48px;
    border-bottom: solid 1px #f5f5f5;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-size: 16px;
    padding: 0 24px;
  }
}
</style>
