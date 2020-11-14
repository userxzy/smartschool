<template>
  <div class="school_major">
    <!--查询项-->
    <div class="top_sreach">
      <div class="left_word">
        <el-row :gutter="24">
          <el-form ref="formInfo" :model="formInfo" label-width="120px">
            <el-col :span="7">
              <div class="grid-content">
                <el-form-item label="搜索关键词：">
                  <el-input v-model="formInfo.Search" placeholder="请输入关键词"></el-input>
                </el-form-item>
              </div>
            </el-col>
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
                <el-form-item label="专业名称">
                  <el-select v-model="formInfo.MajorName" placeholder="请选择专业名称">
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
            <!-- <el-button type="primary" size="mini" @click="handleUpdate(row)" :plain="changeMajor(row)"> 
              <span v-if="changeMajor(row)">查看班级</span>
              <span v-if="!changeMajor(row)">添加专业</span>
            </el-button> -->
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
      title="新建院系专业"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <div>
        <el-form ref="isSm" :rules="rules" :model="isSm" label-width="120px">
          <el-form-item label="院系/专业：" prop="mast">
            <el-radio-group v-model="isSm" @change="schoolOrMajor(isSm)">
              <el-radio label="0">院系</el-radio>
              <el-radio label="1">专业</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form v-if="isSm == 0" ref="newSchoolInfo" :rules="rules" :model="newSchoolInfo" label-width="120px">
            <el-form-item label="名称:" prop="mast">
              <el-input v-model="newSchoolInfo.name" placeholder="请输入名称"></el-input>
            </el-form-item>
            <el-form-item label="简介:">
              <el-input type="textarea" v-model="newSchoolInfo.brief"  placeholder="请输入简介"></el-input>
            </el-form-item>
            <el-form-item label="负责人:" prop="mast">
              <el-input v-model="newSchoolInfo.pop" placeholder="请输入负责人"></el-input>
            </el-form-item>
          </el-form>
          <el-form v-if="isSm == 1" ref="newMajorInfo" :rules="rules" :model="newMajorInfo" label-width="120px">
            <el-form-item label="院系:" prop="mast">
              <el-select v-model="newMajorInfo.school" placeholder="请选择院系">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="名称:" prop="mast">
              <el-input v-model="newSchoolInfo.names" placeholder="请输入名称"></el-input>
            </el-form-item>
            <el-form-item label="专业:" prop="mast">
              <el-select v-model="newMajorInfo.major" placeholder="请选择专业">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="简介:">
              <el-input type="textarea" v-model="newMajorInfo.briefs"  placeholder="请输入简介"></el-input>
            </el-form-item>
            <el-form-item label="负责人:" prop="mast">
              <el-input v-model="newMajorInfo.pops" placeholder="请输入负责人"></el-input>
            </el-form-item>
          </el-form>
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
      isSm: '0',
      newMajorInfo: { // 专业
        ormajor: '1',
        school: '',
        names: '',
        major: '',
        briefs: '',
        pops: ''
      },
      newSchoolInfo: { // 院校
        ormajor: '0',
        name: '',
        brief: '',
        pop: ''
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
        Search: '',
        SchoolName: '',
        MajorName: ''
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
    schoolOrMajor (val) {},
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
