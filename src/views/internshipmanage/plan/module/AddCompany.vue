<template>
  <div class="add_plan">
    <el-dialog
      title="添加企业"
      :visible.sync="dialogTableVisible"
      :before-close="closeDialog"
      :close="closeDialog"
    >
      <div class="line_company">
        <div class="company_name"><span>公司名称:</span> <input class="company_put" type="text" placeholder="请输入"/></div>
        <div class="company_btn">
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
        </div>
      </div>
      <el-table :data="gridData" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
      <div class="page_list">
        <el-pagination
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000"
          @current-change="handleCurrentChange">
        </el-pagination>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog()">取 消</el-button>
        <el-button type="primary" @click="closeDialog()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ['dialogTableVisible'],
  data () {
    return {
      multipleSelection: [],
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods: {
    closeDialog () {
      this.$emit('closeFunc')
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="scss" scoped>
  .page_list {
    text-align: right;
    margin-top: 20px;
  }
.line_company {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 20px;
  .company_name {
    .company_put {
      height: 40px;
      width: 300px;
      padding-left: 10px;
      border: solid 1px #ddd;
      border-radius: 5px;
    }
  }
  .company_btn {
    padding-left: 10px;
  }
}
</style>
