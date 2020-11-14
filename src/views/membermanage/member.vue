<template>
  <div class="manage_member">
    <div class="manage_text">
      说明：成员意味者哪些账户可以访问管理后台，成员列表只会显示管理员用户
    </div>
    <div class="member_table">
      <el-form ref="fromInfo" :model="fromInfo" label-width="80px">
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form-item label="姓名:">
              <el-input v-model="fromInfo.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="账号:">
              <el-input v-model="fromInfo.code" placeholder="请输入账号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-button type="primary">查询</el-button>
            <el-button type="info">重置</el-button>
            <el-button type="primary" @click="addFunc()"><i class="el-icon-plus"></i>添加</el-button>
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
    <member-select :dialogVisible="dialogVisible" @deleteFunc="deleteFunc"></member-select>
  </div>
</template>
<script>
import MemberSelect from './module/memberSelect'
export default {
  components: {
    MemberSelect
  },
  data () {
    return {
      dialogVisible: false,
      fromInfo: {
        name: '',
        code: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    addFunc () {
      this.dialogVisible = true
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
    }
  }
}
</style>
