<template>
  <div class="add_plan">
    <el-dialog
      title="实习计划添加"
      :visible.sync="dialogFormVisible"
      :before-close="closeDialog"
      :close="closeDialog"
      width="30%"
    >
      <el-form :model="formInfo" :rules="rules">
        <el-form-item label="院系:" label-width="120px" prop="mast">
          <el-select v-model="formInfo.department" placeholder="请选择院系">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专业:" label-width="120px" prop="mast">
          <el-select v-model="formInfo.major" placeholder="请选择专业">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级:" label-width="120px" prop="mast">
          <el-select v-model="formInfo.className" placeholder="请选择班级">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="名称:" label-width="120px" prop="mast">
          <el-input v-model="formInfo.name" autocomplete="off" placeholder="请输入名称"></el-input>
        </el-form-item>
        <el-form-item label="类型:" label-width="120px" prop="mast">
          <el-select v-model="formInfo.type" placeholder="请选择班级">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="参与企业数量:" label-width="120px">
          <el-input v-model="formInfo.num" autocomplete="off" placeholder="请输入企业数量"></el-input>
        </el-form-item>
        <el-form-item label="开始时间:" label-width="120px" prop="mast">
          <el-date-picker
            v-model="formInfo.stateDate"
            type="date"
            placeholder="选择开始时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间:" label-width="120px" prop="mast">
          <el-date-picker
            v-model="formInfo.endDate"
            type="date"
            placeholder="选择开始时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="联系人:" label-width="120px">
          <el-input v-model="formInfo.pop" autocomplete="off" placeholder="请输入联系人"></el-input>
        </el-form-item>
        <el-form-item label="联系人电话:" label-width="120px">
          <el-input v-model="formInfo.phone" autocomplete="off" placeholder="请输入联系人电话"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog()">取 消</el-button>
        <el-button type="primary" @click="sureDialog()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ['dialogFormVisible', 'isedit', 'editId'],
  data () {
    return {
      rules: {
        mast: [
          { required: true, message: null, trigger: 'reset' }
        ]
      },
      formInfo: {
        department: '',
        major: '',
        name: '',
        className: '',
        type: '',
        num: 0,
        stateDate: '',
        endDate: '',
        pop: '',
        phone: ''
      }
    }
  },
  watch: {
    dialogFormVisible(newName, oldName) {
      console.log(this.isedit)
    }
  },
  methods: {
    sureDialog () {
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('closeFunc')
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-date-editor.el-input {
  width: 100%;
}
.el-select {
  width: 100%;
}
</style>
