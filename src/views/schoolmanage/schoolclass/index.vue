<template>
  <div class="school_major">
    <!--查询项-->
    <div class="top_sreach">
      <div class="left_word">
        <el-row :gutter="24">
          <el-form ref="formInfo" :model="formInfo" label-width="120px">
            <el-col :span="7">
              <div class="grid-content">
                <el-form-item label="院系名称：">
                  <el-select v-model="formInfo.SchoolName" placeholder="请选择院系名称">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="grid-content">
                <el-form-item label="班级名称：">
                  <el-select v-model="formInfo.ClassName" placeholder="请选择班级名称">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="grid-content">
                <el-form-item label="班主任:">
                  <el-input v-model="formInfo.Teacher" placeholder="请选择班主任"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-form>
        </el-row>
      </div>
      <div class="right_word">
        <el-button type="primary">查询</el-button>
        <el-button type="primary">重置</el-button>
        <el-button type="success" @click="addClass()">添加</el-button>
      </div>
    </div>
    <!--表格-->
    <div class="bottom_table">
      <el-table
        :data="tableData"
        @selection-change="handleSelectionChange"
        height="580"
        row-key="id"
        border
        style="width: 100%;margin-bottom: 20px;"
      >
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
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
          prop="address"
          label="操作">
          <template slot-scope="{row, $index}">
            <el-button type="primary" size="mini" @click="handleUpdate(row)">编辑</el-button>
            <el-button type="danger" size="mini" @click="handleUpdate(row)">删除</el-button>
            <el-button size="mini" type="primary" @click="handleDelete(row,$index)">班主任</el-button>
          </template>
        </el-table-column>
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
    </div>
    <!--对话框-->
    <el-dialog
      title="新建班级"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <div>
        <el-form ref="classInfo" :rules="rules" :model="classInfo" label-width="120px">
          <el-form-item label="院系/专业:" prop="mast">
            <el-cascader v-model="classInfo.school" :options="options" :show-all-levels="false" placeholder="请选族"></el-cascader>
          </el-form-item>
          <el-form-item label="班级名称:" prop="mast">
            <el-input v-model="classInfo.className" placeholder="请输入班级名称"></el-input>
          </el-form-item>
          <el-form-item label="年级:" prop="mast">
            <el-date-picker
              v-model="classInfo.class"
              type="year"
              placeholder="请选择年级">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="毕业日期:" prop="mast">
            <el-date-picker
              v-model="classInfo.date"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="timestamp">
            </el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancleAdd()">取 消</el-button>
        <el-button type="primary" @click="sureAdd()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rules: {
        mast: [
          { required: true, message: null, trigger: 'reset' }
        ]
      },
      options: [{
        value: 'zhinan',
        label: '指南',
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
      }],
      classInfo: { // 班级
        school: '',
        className: '',
        class: '',
        date: ''
      },
      multipleSelection: [],
      dialogVisible: false,
      tableData: [{
        id: '1',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '2',
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: '3',
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      }, {
        id: '4',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      formInfo: {
        SchoolName: '',
        ClassName: '',
        Teacher: ''
      }
    }
  },
  methods: {
    handleDelete (row, index) {},
    handleUpdate(row) {},
    addClass () {
      this.dialogVisible = true
    },
    cancleAdd () {
      this.dialogVisible = false
      this.isSm = '0'
      this.newSchoolInfo = {
        ormajor: '0',
        name: '',
        brief: '',
        pop: ''
      }
      this.newMajorInfo = {
        ormajor: '1',
        school: '',
        names: '',
        major: '',
        briefs: '',
        pops: ''
      }
    },
    sureAdd () {
      this.cancleAdd()
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
::v-deep .el-select {
  width: 100%!important;
}
.el-row {
  margin-top: 30px;
}
.school_major {
  margin: 20px;
  height: 860px;
  background: #fff;
  border-radius: 5px;
  padding: 10px;
  overflow: scroll;
  .bottom_table {
    margin: 0 20px;
    .page_list {
      text-align: right;
      margin-top: 20px;
    }
  }
  .top_sreach {
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left_word {
      width: 70%;
    }
    .right_word {
      text-align: right;
      width: 30%;
    }
  }
}
</style>

