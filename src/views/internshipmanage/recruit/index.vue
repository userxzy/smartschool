<template>
  <div class="manage_member">
    <div class="member_table">
      <el-form ref="fromInfo" :model="fromInfo" label-width="80px">
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form-item label="企业名称:">
              <el-input v-model="fromInfo.name" placeholder="请输入企业名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="职位名称:">
              <el-input v-model="fromInfo.jobName" placeholder="请输入职位名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-button type="primary">查询</el-button>
            <el-button type="info">重置</el-button>
            <el-button type="primary" @click="addFunc(null, false)"><i class="el-icon-plus"></i>添加</el-button>
          </el-col>
        </el-row>
      </el-form>
      <div class="table_item">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <div class="options_re">
                <span @click="stopFunc(0)">暂停</span> | <span @click="addFunc(scope.row.id, true)">编辑</span> | <span @click="stopFunc(1)">删除</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
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
    <member-select ref="dialog" :dialogVisible="dialogVisible" @deleteFunc="deleteFunc"></member-select>
    <tip-select ref="tip" :tipVisible="tipVisible" @colseTip="colseTip"></tip-select>
  </div>
</template>
<script>
import MemberSelect from './module/memberSelect'
import TipSelect from './module/tipSelect'
export default {
  components: {
    MemberSelect,
    TipSelect
  },
  data () {
    return {
      dialogVisible: false,
      tipVisible: false,
      fromInfo: {
        name: '',
        jobName: ''
      },
      tableData: [{
        id: 0,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 1,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 2,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        id: 3,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    addFunc (id, is) {
      this.$refs.dialog.ind = id
      this.$refs.dialog.isedit = is
      this.dialogVisible = true
    },
    stopFunc (index) {
      this.$refs.tip.ind = index
      if (index === 0) {
        this.$refs.tip.title = '暂停职位'
        this.$refs.tip.text = '确定暂停该职位'
      }
      if (index === 1) {
        this.$refs.tip.title = '删除职位'
        this.$refs.tip.text = '确定删除该职位'
      }
      this.tipVisible = true
    },
    colseTip () {
      this.tipVisible = false
    },
    deleteFunc () {
      this.dialogVisible = false
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-select {
  width: 100%;
}
.manage_member {
  max-height: 900px;
  min-width: 1200px;
  border-radius: 5px;
  overflow-y: scroll;
  .manage_text {
    color: rgba(0,0,0,.65);
    font-size: 14px;
    padding: 20px;
    background: #fff;
  }
  .member_table {
    margin: 20px;
    padding-top: 20px;
    background: #fff;
    border-radius: 5px;
    padding-bottom: 20px;
    .page_list {
      text-align: right;
      margin-top: 20px;
    }
    .table_item {
      margin: 20px;
      .options_re {
        color: #409EFF;
        cursor: pointer;
      }
    }
  }
}
</style>

