<template>
  <div class="internship_plan">
    <div class="inner_top">
      <div>基本列表</div>
      <el-button-group>
        <el-button type="primary" icon="el-icon-date" :plain="!ind[0]" @click="activeInd(0)">全部</el-button>
        <el-button type="primary" icon="el-icon-loading" :plain="!ind[1]" @click="activeInd(1)">进行中</el-button>
        <el-button type="primary" icon="el-icon-mouse" :plain="!ind[2]" @click="activeInd(2)">已暂停</el-button>
      </el-button-group>
    </div>
    <div class="add_plan">
      <el-button type="primary" @click="addPlanFunc()"><i class="el-icon-plus"></i>添加</el-button>
    </div>
    <div class="line_list">
      <div class="list_item" v-for="(item, index) of listInfo" :key="index">
        <div class="list_l">
          <div class="list_a">
            <div class="list_img">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"/>
            </div>
            <div class="list_text">
              <div class="up_text">动感计划</div>
              <div class="down_text">工学交替</div>
            </div>
          </div>
          <div class="list_b">
            <div class="up_text">联系人</div>
            <div class="down_text">动感超人</div>
          </div>
          <div class="list_b">
            <div class="up_text">联系电话</div>
            <div class="down_text">13549282547</div>
          </div>
          <div class="list_b">
            <div class="up_text">开始时间</div>
            <div class="down_text">2020-08-07</div>
          </div>
          <div class="list_b">
            <div class="up_text">结束时间</div>
            <div class="down_text">2020-08-07</div>
          </div>
          <div class="list_b">
            <div class="up_text">参与企业</div>
            <div class="down_text">5家</div>
          </div>
          <div class="list_b">
            <div class="up_text">状态</div>
            <div class="down_text">正在进行</div>
          </div>
          <div class="list_c">
            <span @click="companyOpen(index)">企业</span> | <span @click="eidtOpen(index)">编辑</span> | <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><span @click="stopOpen(index)">暂停</span></el-dropdown-item>
                <el-dropdown-item><span @click="deleteOpen(index)">删除</span></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            
          </div>
        </div>
      </div>
      <div class="page_list">
        <el-pagination
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000"
          @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>
    <add-plan :dialogFormVisible="dialogFormVisible" @closeFunc="closeFunc" :isedit="isedit" :editId="editId"></add-plan>
    <add-company :dialogTableVisible="dialogTableVisible" @closeFunc="closeFunc"></add-company>
    <tip-plan ref="tip" :dialogVisible="dialogVisible" @closeTip="closeTip"></tip-plan>
  </div>
</template>
<script>
import AddCompany from './module/AddCompany.vue'
import AddPlan from './module/AddPlan'
import TipPlan from './module/TipPlan'
export default {
  components: {
    AddPlan,
    AddCompany,
    TipPlan
  },
  data () {
    return {
      ind: [true, false, false],
      listInfo: [1, 2],
      dialogFormVisible: false,
      dialogTableVisible: false,
      dialogVisible: false,
      isedit: false,
      editId: null
    }
  },
  methods: {
    activeInd (index) {
      this.ind.forEach((item, i) => {
        i === index ? this.$set(this.ind, i, true) : this.$set(this.ind, i, false)
      })
    },
    eidtOpen (index) {
      this.editId = index
      this.isedit = true
      this.dialogFormVisible = true
    },
    companyOpen () {
      this.dialogTableVisible = true
    },
    closeFunc () {
      this.dialogFormVisible = false
      this.dialogTableVisible = false
    },
    deleteOpen (index) {
      this.dialogVisible = true 
      this.$refs.tip.content = '确定删除该实习计划吗'
      this.$refs.tip.title = '删除实习'
      this.$refs.tip.ind = index
    },
    stopOpen (index) {
      this.dialogVisible = true
      this.$refs.tip.content = '确定暂停该实习计划'
      this.$refs.tip.title = '暂停实习'
      this.$refs.tip.ind = index
    },
    closeTip () {
      this.dialogVisible = false
    },
    addPlanFunc () {
      this.isedit = false
      this.dialogFormVisible = true
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.internship_plan {
  margin: 20px;
  background: #fff;
  border-radius: 3px;
  min-width: 1200px;
  .add_plan {
    padding: 0 20px;
  }
  .line_list {
    margin: 20px;
    .page_list {
      text-align: right;
      margin-top: 20px;
    }
    .list_item {
      .list_l {
        padding: 20px 0;
        border-bottom: solid 1px #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 14px;
        color: #999;
        .list_a {
          width: 30%;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .list_text {
            height: 100%;
            padding-left: 10px;
            max-width: 320px;
            .up_text, .down_text {
              height: 50%;
              line-height: 24px;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
              color: #666;
            }
            .down_text {
              color: #999;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
            }
          }
          .list_img {
            width: 48px;
            height: 48px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .list_b {
          width: 10%;
          height: 48px;
          .up_text, .down_text {
            height: 50%;
            line-height: 24px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
        }
        .list_c {
          width: 10%;
          height: 48px;
          line-height: 48px;
          color: #409EFF;
          cursor: pointer;
          .el-dropdown-link {
            color: #409EFF;
          }
        }
      }
    }
  }
  .inner_top {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
