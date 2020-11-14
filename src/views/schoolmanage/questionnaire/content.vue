<template>
  <div class="school_major">
    <div class="top_btn">
      <el-button type="primary" @click="addFunc()"><i class="el-icon-plus"></i>添加</el-button>
    </div>
    <div class="down_table">
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
     <el-dialog
      title="新建调查内容"
      :visible.sync="isVisible"
      width="30%"
    >
      <div class="content_qa">
        <div class="up_content">
          <span><i>*</i> 调查内容:</span>
          <input class="content_q" type="text" v-model="contentInfo.question" placeholder="请输入调查内容" />
        </div>
        <el-divider>调查内容选项</el-divider>
        <div class="down_content">
          <div class="top_title">
            <div class="option_title">选项</div>
            <div class="core_title">分数</div>
          </div>
          <div class="down_item" v-for="(item, index) of exampleText" :key="index">
            <input class="_option" type="text" v-model="contentInfo.itemList[index].text" :placeholder="`选项${index + 1}`"/>
            <input class="_core" type="text" v-model="contentInfo.itemList[index].core" :placeholder="`分数${index + 1}`" />
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isVisible = false">取 消</el-button>
        <el-button type="primary" @click="isVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isVisible: false,
      exampleText: [1,2,3,4,5,6],
      contentInfo: {
        question: '',
        itemList: [
          {
            text: '',
            core: ''
          },
          {
            text: '',
            core: ''
          },
          {
            text: '',
            core: ''
          },
          {
            text: '',
            core: ''
          },
          {
            text: '',
            core: ''
          },
          {
            text: '',
            core: ''
          }
        ]
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
  mounted () {
    // const item = {
    //   text: '',
    //   core: ''
    // }
    // for (let i = 0; i < 6; i++) {
    //   this.contentInfo.itemList.push(item)
    // }
  },
  methods: {
    addFunc () {
      this.isVisible = true
    },
    handleCurrentChange(val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss" scoped>
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
  .down_table {
    margin-top: 20px;
  }
  .down_content {
    .down_item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 5px 0;
      ._option {
        height: 35px;
        width: 80%;
        border: solid 1px #ddd;
        border-radius: 3px;
        padding-left: 10px;
        color: #999;
      }
      ._core {
        height: 35px;
        width: 18%;
        border: solid 1px #ddd;
        border-radius: 3px;
        padding-left: 5px;
        color: #999;
      }
    }
    .top_title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .option_title {
        width: 80%;
      }
      .core_title {
        width: 18%;
      }
    }
  }
  .content_qa {
    margin: 0 20px;
    .up_content {
      text-align: center;
      i {
        color: red;
      }
      .content_q {
        margin-left: 10px;
        height: 35px;
        width: 65%;
        border: solid 1px #ddd;
        border-radius: 3px;
      }
    }
  }
}
</style>
