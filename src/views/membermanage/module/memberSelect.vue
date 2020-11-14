<template>
  <div class="role_select">
    <el-dialog
      title="新增角色"
      :visible.sync="dialogVisible"
      :before-close="cancleFunc"
      :close="cancleFunc"
      width="30%">
      <div class="inner_content">
        <div class="center_title"><i>*</i> 用户名:</div>
        <div class="input_center">
          <input type="text" v-model="dipInfo.name" placeholder="请输入" />
        </div>
      </div>
      <div class="inner_content">
        <div class="center_title"><i>*</i> 账户:</div>
        <div class="input_center">
          <el-input type="text" v-model="dipInfo.count" placeholder="请输入" />
        </div>
      </div>
      <div class="inner_content">
        <div class="center_title"><i>*</i> 密码:</div>
        <div class="input_center">
          <el-input type="text" v-model="dipInfo.password" placeholder="请输入" />
        </div>
      </div>
      <div class="inner_content">
        <div class="center_title"><i>*</i> 选择角色:</div>
        <div class="input_center">
          <el-select v-model="dipInfo.role" placeholder="请选择选择角色">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
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
      dipInfo: {
        name: '',
        count: '',
        password: '',
        role: ''
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
