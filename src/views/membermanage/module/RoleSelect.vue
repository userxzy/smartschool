<template>
  <div class="role_select">
    <el-dialog
      title="新增角色"
      :visible.sync="dialogVisible"
      :before-close="cancleFunc"
      :close="cancleFunc"
      width="30%">
      <div class="inner_content">
        <div class="center_title"><i>*</i> 角色名称:</div>
        <div class="input_center">
          <input type="text" placeholder="请输入" />
        </div>
      </div>
      <div class="inner_content">
        <div class="center_title"><i>*</i> 角色描述:</div>
        <div class="input_center">
          <el-input type="textarea" placeholder="请输入" />
        </div>
      </div>
      <div class="inner_content">
        <div class="center_title"> 权限:</div>
        <div class="input_center_list">
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-checked-keys="[0]"
            :props="defaultProps">
          </el-tree>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancleFunc()">取 消</el-button>
        <el-button type="primary" @click="okFunc()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ['dialogVisible'],
  data () {
    return {
      ind: null,
      isEdit: false,
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    cancleFunc() {
      this.$emit('deleteFunc')
    },
    okFunc() {
      this.cancleFunc()
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .input_center {
  width: 220px;
}
input::-webkit-input-placeholder {
  color: #999
}
input::-moz-placeholder {
  color: #999
}
input:-moz-placeholder {
  color: #999
}
input:-ms-input-placeholder {
  color: #999
}
.inner_content {
  text-align: center;
  display: flex;
  width: 300px;
  margin: 0 auto;
  margin-top: 10px;
  .center_title {
    text-align: right;
    width: 70px;
    line-height: 35px;
    i {
      color: red;
    }
  }
  .input_center_list {
    text-align: left;
    width: 250px;
    padding-left: 10px;
    padding-top: 10px;
  }
  .input_center {
    margin-left: 10px;
    input {
      height: 35px;
      width: 220px;
      border: solid 1px #ddd;
      border-radius: 5px;
      padding-left: 10px;
    }
  }
}
</style>
