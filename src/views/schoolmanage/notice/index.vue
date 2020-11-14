<template>
  <div class="school_major">
    <!--查询项-->
    <div class="top_sreach">
      <div class="left_word">
        <el-row :gutter="24">
          <el-form ref="formInfo" :model="formInfo" label-width="120px">
            <el-col :span="7">
              <div class="grid-content">
                <el-form-item label="公告标题：">
                  <el-input v-model="formInfo.title" placeholder="请输入公告标题"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="grid-content">
                <el-form-item label="创建时间：">
                  <el-date-picker
                    v-model="formInfo.time"
                    type="date"
                    placeholder="选择创建时间">
                  </el-date-picker>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="grid-content">
                <el-form-item label="状态:">
                  <el-select v-model="formInfo.status" placeholder="请选择状态">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
          </el-form>
        </el-row>
      </div>
      <div class="right_word">
        <el-button type="primary">查询</el-button>
        <el-button type="primary">重置</el-button>
        <el-button type="success" @click="addSchool()">添加</el-button>
        <el-button type="warning">删除</el-button>
      </div>
    </div>
    <!--表格-->
    <div class="bottom_table">
      <el-table
        :data="tableData"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        @selection-change="handleSelectionChange"
        height="580"
        row-key="id"
        border
        :default-expand-all="false"
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
            <el-button type="primary" size="mini" @click="handleUpdate(row)" :plain="changeMajor(row)"> 
              <span v-if="!changeMajor(row)">编辑院系</span>
              <span v-if="changeMajor(row)">编辑专业</span>
            </el-button>
            <el-button size="mini" type="danger" @click="handleDelete(row,$index)" :plain="changeMajor(row)">
              <span v-if="changeMajor(row)">删除专业</span>
              <span v-if="!changeMajor(row)">删除院系</span>
            </el-button>
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
      title="添加公告"
      :visible.sync="dialogVisible"
      width="50%"
    >
      <div>
        <el-form ref="NoticeInfo" :rules="rules" :model="NoticeInfo" label-width="120px">
          <el-form-item label="公告标题:" prop="mast">
            <el-input v-model="NoticeInfo.title" placeholder="请输入公告标题"></el-input>
          </el-form-item>
          <el-form-item label="公告内容:" prop="mast">
            <markdown-editor ref="markdownEditor" v-model="NoticeInfo.content" :options="{hideModeSwitch:true, previewStyle:'tab'}" />
          </el-form-item>
          <el-form-item label="发送对象:" prop="mast">
            <el-select v-model="NoticeInfo.send" placeholder="请选择发送对象">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
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
import MarkdownEditor from '@/components/MarkdownEditor'
export default {
  components: {
    MarkdownEditor
  },
  data () {
    return {
      rules: {
        mast: [
          { required: true, message: null, trigger: 'reset' }
        ]
      },
      NoticeInfo: { // 院校
        title: '',
        content: '',
        send: ''
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
        children: [{
            id: '3-1',
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: '3-2',
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }]
      }, {
        id: '4',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      formInfo: {
        title: '',
        time: '',
        status: ''
      }
    }
  },
  methods: {
    changeMajor (row) {
      console.log(row)
      const contain = row.id.indexOf("-")
      if (contain === 1) {
        return true
      } else {
        return false
      }
    },
    handleDelete (row, index) {},
    handleUpdate(row) {},
    addSchool () {
      this.dialogVisible = true
    },
    cancleAdd () {
      this.dialogVisible = false
      this.NoticeInfo = {
        title: '',
        content: '',
        send: ''
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
::v-deep .el-date-editor.el-input {
  width: 100%;
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
  min-width: 900px;
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


