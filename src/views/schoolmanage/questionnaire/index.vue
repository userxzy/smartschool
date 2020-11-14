<template>
  <div class="school_major">
    <div class="up_search">
      <el-form ref="formInfo" :model="formInfo" label-width="80px">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content">
              <el-form-item label="调查标题:">
                <el-input v-model="formInfo.title" placeholder="请输入"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <el-form-item label="调查状态:">
                <el-input v-model="formInfo.status" placeholder="请输入"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8"  v-if="upordown">
            <div class="grid-content">
              <el-form-item label="创建日期:">
                <el-date-picker
                  v-model="formInfo.date"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8" v-if="!upordown">
            <el-button type="primary">查询</el-button>
            <el-button type="info">重置</el-button>
            <el-button type="primary" @click="openAdd()"><i class="el-icon-plus"></i>添加</el-button>
            <span class="up_load" @click="UpLoad()">展开 <i class="el-icon-arrow-down"></i></span>
          </el-col>
        </el-row>
        <el-row :gutter="20" v-if="upordown">
          <el-col :span="8">
            <div class="grid-content">
              <el-form-item label="调查对象:">
                <el-input v-model="formInfo.obj" placeholder="请输入"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div class="down_btn" v-if="upordown">
        <el-button type="primary">查询</el-button>
        <el-button type="info">重置</el-button>
        <el-button type="primary" @click="openAdd()"><i class="el-icon-plus"></i>添加</el-button>
        <span class="up_load" @click="UpLoad()">收起 <i class="el-icon-arrow-up"></i></span>
      </div>
    </div>
    <!--问卷表格-->
    <div class="table_down">
      <el-table
        :data="tableData"
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
    <!-- 添加对话框 -->
    <el-dialog
      title="新建调查问卷"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form ref="qrestionInfo" :rules="rules" :model="qrestionInfo" label-width="120px">
        <el-form-item label="调查标题:" prop="mast">
          <el-input v-model="qrestionInfo.title" placeholder="请输入调查名称"></el-input>
        </el-form-item>
        <el-form-item label="调查对象:" prop="mast">
          <el-radio-group v-model="qrestionInfo.obj" @change="stdOrCom(qrestionInfo.obj)">
            <el-radio label="0">学生</el-radio>
            <el-radio label="1">企业</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注:">
          <el-input type="textarea" v-model="qrestionInfo.text"></el-input>
        </el-form-item>
        <el-form-item label="是否匿名:" prop="mast">
          <el-radio-group v-model="qrestionInfo.show" @change="isOrName(qrestionInfo.show)">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="发送对象:" prop="mast">
          <el-select v-model="qrestionInfo.send" placeholder="请选择发送对象">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      upordown: false,
      dialogVisible: false,
      rules: {
        mast: [
          { required: true, message: null, trigger: 'reset' }
        ]
      },
      qrestionInfo: {
        title: '',
        obj: '0',
        text: '',
        show: '0',
        send: '',
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
      }],
      formInfo: {
        title: '',
        status: '',
        date: '',
        obj: ''
      }
    }
  },
  methods: {
    openAdd () {
      this.dialogVisible = true
    },
    isOrName (val) {
      console.log(val)
    },
    stdOrCom (val) {
      console.log(val)
    },
    UpLoad () {
      this.upordown = !this.upordown
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  } 
}
</script>
<style lang="scss" scoped>
::v-deep .el-date-editor.el-input {
  width: 100%;
}
.page_list {
  text-align: right;
  margin-top: 20px;
}
.school_major {
  margin: 20px;
  height: 860px;
  background: #fff;
  border-radius: 5px;
  padding: 10px;
  min-width: 900px;
  overflow-y: scroll;
  .up_load {
    display: inline-block;
    color: #1890ff;
    margin-left: 15px;
    font-size: 14px;
  }
  .down_btn {
    text-align: right;
  }
}
</style>
