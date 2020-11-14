<template>
  <div class="student_tip">
    <el-dialog
      :title="titleName"
      :visible.sync="dialogVisible"
      :before-close="cancleFunc"
      :close="cancleFunc"
      width="35%">
      <!-- 报到 -->
      <div v-if="types == 0">确定学生报到状态设置为已报到么</div>
      <!-- 修改招生员 -->
      <div v-if="types == 1">
        <div class="pop"><span class="pop_inner">所属招生员:</span> <span>无招生员</span></div>
        <el-form :label-position="labelPosition" label-width="92px">
          <el-form-item label="变更招生员:">
            <el-select v-model="recruiter" placeholder="请选择招生员">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div v-if="types == 2">
        <el-form :label-position="labelPosition" :rules="rules" label-width="110px">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="选择季度:" prop="mast">
                <el-select v-model="recruiter" placeholder="请选择季度">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
             </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="选择院系:" prop="mast">
                <el-select v-model="recruiter" placeholder="请选择院系">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="选择专业:" prop="mast">
                <el-select v-model="recruiter" placeholder="请选择专业">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
             </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="选择招生对象:" prop="mast">
                <el-select v-model="recruiter" placeholder="请选择院系">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="选择培养层次:" prop="mast">
                <el-select v-model="recruiter" placeholder="请选择专业">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
             </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="选择班级:" prop="mast">
                <el-select v-model="recruiter" placeholder="请选择院系">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="学号:" prop="mast">
                <el-select v-model="recruiter" placeholder="请选择专业">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
             </el-col>
          </el-row>
        </el-form>
      </div>
      <div v-if="types == 3">
        <el-form :label-position="labelPosition" :rules="rules" label-width="110px">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="联系人:" prop="mast">
                <el-input type="text" placeholder="请输入联系人"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="联系电话:" prop="mast">
                <el-input type="text" placeholder="请输入联系电话"></el-input>
              </el-form-item>
             </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="退费时间:" prop="mast">
                <el-date-picker
                  type="date"
                  placeholder="选择退费时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="退费地址:" prop="mast">
                <el-input type="text" placeholder="请输入退费地址"></el-input>
              </el-form-item>
             </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="注意事项:">
                <el-input class="notice_put" type="textarea" placeholder="请输入注意事项"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
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
      rules: {
        mast: [
          { required: true, message: null, trigger: 'reset' }
        ]
      },
      labelPosition: 'right',
      recruiter: '',
      titleName: '',
      types: null,
      ind: null
    }
  },
  methods: {
    cancleFunc() {
      this.$emit('closeFrom')
    },
    okFunc() {
      this.cancleFunc()
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-form-item__label {
  padding-right: 8px;
}
::v-deep .el-select {
  width: 100%;
}
::v-deep .el-date-editor.el-input {
  min-width: 120px;
  max-width: 180px;
}
::v-deep .el-dialog {
  min-width: 550px;
}
.notice_put {
  width: 400px;
}
.pop {
  padding: 10px;
  .pop_inner {
    display: inline-block;
    font-weight: bold;
    width: 88px;
  }
  span {
    font-weight: normal;
  }
}
</style>
