<template>
  <div class="manage_sign">
    <div class="search_line">
      <el-form ref="formInfo" :model="formInfo" label-width="80px">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="院系专业:">
              <el-cascader
                v-model="formInfo.marjor"
                :options="options"
                placeholder="请选择院系专业"
                :show-all-levels="false"></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="班级:">
              <el-input v-model="formInfo.class" placeholder="请选择班级"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="学生姓名:">
              <el-input v-model="formInfo.name" placeholder="请选择学生姓名"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="状态:">
              <el-select v-model="formInfo.status" placeholder="请选择状态">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8" :push="8">
            <el-button type="primary">查询</el-button>
            <el-button type="primary" plain>重置</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="btn_list">
      <div class="down_load">
        <el-button type="primary"><i class="el-icon-bottom"></i>下载</el-button>
      </div>
      <div class="right_btn">
        <el-button-group>
          <el-button @click="tabChange(0)" :type="pri[0]">全部</el-button>
          <el-button @click="tabChange(1)" :type="pri[1]">未报名</el-button>
          <el-button @click="tabChange(2)" :type="pri[2]">未审核</el-button>
          <el-button @click="tabChange(3)" :type="pri[3]">已审核</el-button>
          <el-button @click="tabChange(4)" :type="pri[4]">已拒绝</el-button>
        </el-button-group>
      </div>
    </div>
    <div class="table_room">
      <el-table
        :data="tableData"
        border
        @selection-change="handleSelectionChange"
        style="width: 100%">
        <el-table-column
          fixed="left"
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="province"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="300">
          <template slot-scope="scope">
            <el-button type="text" size="small">详情</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">删除</el-button>
            <span class="open_sx"><el-switch v-model="opensx[scope.row.id]" active-text="开启实习"></el-switch></span>
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
</template>
<script>
export default {
  data () {
    return {
      ind: null,
      pri: ['primary', '', '', '', ''],
      opensx: [],
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }]
        }
      ],
      formInfo: {
        marjor: '',
        class: '',
        name: '',
        status: ''
      },
      multipleSelection: [],
      tableData: [{
        id: 0,
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        id: 1,
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        id: 2,
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        id: 3,
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }]
    }
  },
  mounted () {
    this.tableData.forEach((item, index) => {
      this.opensx.push(false)
    })
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    tabChange(index) {
      this.pri.forEach((item, ind) => {
        index === ind ? this.$set(this.pri, ind, 'primary') : this.$set(this.pri, ind, '')
      })
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-row{
  margin-right: 0px!important;
}
::v-deep .el-select {
  width: 100%;
}
::v-deep .el-cascader {
  width: 100%;
}
::v-deep .el-switch__label {
  color: #3a8ee6;
}
.page_list {
  text-align: right;
  margin-top: 20px;
}
.manage_sign {
  margin: 20px;
  max-height: 900px;
  min-width: 1200px;
  border-radius: 5px;
  overflow-y: scroll;
  background: #fff;
  .table_room {
    margin: 20px;
    .open_sx {
      color: #3a8ee6;
      font-size: 13px;
      display: inline-block;
      margin-left: 10px;
    }
  }
  .btn_list {
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .search_line {
    margin: 20px;
  }
}
</style>
