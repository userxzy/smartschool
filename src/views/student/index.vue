<template>
  <div class="school_major" @click="closeSet">
    <el-tabs type="border-card">
      <el-tab-pane v-for="(item, index) of teacherList" :label="item" :key="index">
        <div class="search_inner">
          <div class="left_input">
            <el-form ref="formInfo" :model="formInfo" label-width="120px">
              <el-form-item label="搜索关键词:">
                <el-input v-model="formInfo.search" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="专业名称:">
                <el-select v-model="formInfo.major" placeholder="请选择专业名称">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="学生姓名:">
                <el-input v-model="formInfo.name" placeholder="请输入"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="right_btn">
            <el-button type="primary" icon="el-icon-search">查询</el-button>
            <el-button type="primary" icon="el-icon-refresh-right">重置</el-button>
            <el-button type="warning" icon="el-icon-delete">删除</el-button>
            <el-button type="success" icon="el-icon-upload2">导入</el-button>
          </div>
        </div>
        <div class="search_down">
          <el-table
            :data="tableData"
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
            row-key="id"
            border
            height="600"
            :default-expand-all="false"
            tooltip-effect="dark"
            style="width: 100%;margin-bottom: 20px;">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column label="日期">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-popover
                  placement="bottom"
                  width="200"
                  trigger="click"
                  v-model="visible[Number(scope.row.id) - 1]"
                >
                  <div>
                    <p><el-button size="mini" type="text" @click="cheackFunc(scope.row.id, 0)">设置已报到</el-button></p>
                    <p><el-button size="mini" type="text" @click="cheackFunc(scope.row.id, 1)">修改招生员</el-button></p>
                    <p><el-button size="mini" type="text" @click="editFunc(scope.row.id)">编辑学生信息</el-button></p>
                    <p><el-button size="mini" type="text">删除学位</el-button></p>
                    <p><el-button size="mini" type="text" @click="cheackFunc(scope.row.id, 2)">更换专业</el-button></p>
                    <p><el-button size="mini" type="text" @click="cheackFunc(scope.row.id, 3)">退学费</el-button></p>
                  </div>
                </el-popover>
                <el-button size="mini" @click.stop="setShow(scope.row.id)">设置</el-button>
              </template>
              <template slot="empty">暂无数据</template>
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
      </el-tab-pane>
    </el-tabs>
    <tip-content ref="tip" :dialogVisible="dialogVisible" @closeFrom="closeFrom"></tip-content>
  </div>
</template>
<script>
import TipContent from './module/TipContent'
export default {
  components: {
    TipContent
  },
  data () {
    return {
      dialogVisible: false,
      formInfo: {
        search: '',
        major: '',
        name: ''
      },
      visible: [],
      teacherList: ['全部', '焊接技术应用系', '汽车技术', '定时任务补偿'],
      tableData: [{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  mounted () {
    this.closeSet()
  },
  methods: {
    editFunc () {
      this.$router.push('/edit/eidtstudent')
    },
    cheackFunc (index, it) {
      if (it === 0) {
        this.$refs.tip.titleName = '设置为已报到'
      } else if (it === 1) {
        this.$refs.tip.titleName = '变更招生员'
      } else if (it === 2) {
        this.$refs.tip.titleName = '更换专业'
      } else if (it === 3) {
        this.$refs.tip.titleName = '确认退费'
      }
      this.$refs.tip.types = it
      this.$refs.tip.ind = index
      this.dialogVisible = true
    },
    closeFrom () {
      this.dialogVisible = false
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    closeSet () {
      const  len = this.tableData.length
      this.visible = []
      for (let i = 0; i < len; i++) {
        this.visible.push(false)
      }
    },
    setShow (index) {
      this.$set(this.visible, index - 1, true)
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-tabs--border-card {
  border: none;
  box-shadow: none;
}
::v-deep .el-form-item__content {
  min-width: 120px;
  max-width: 180px;
}
::v-deep .el-form {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.page_list {
  text-align: right;
  margin-top: 20px;
}
.school_major {
  margin: 20px;
  height: 860px;
  min-width: 1200px;
  background: #fff;
  border-radius: 5px;
  overflow-y: scroll;
  .search_inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .left_input {
      width:70%;
    }
  }
}
</style>
