<template>
  <div class="role_select">
    <el-dialog
      title="发布职位"
      :visible.sync="dialogVisible"
      :before-close="cancleFunc"
      :close="cancleFunc"
      width="45%">
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="活动配置"></el-step>
        <el-step title="职位信息"></el-step>
        <el-step title="岗位职责"></el-step>
        <el-step title="工作地点"></el-step>
        <el-step title="薪酬待遇"></el-step>
      </el-steps>
      <div v-show="active === 0">
        <div class="inner_content">
          <div class="center_title"><i>*</i> 所属实习计划:</div>
          <div class="input_center">
            <el-select v-model="dipInfo.plan" placeholder="请选择所属实习计划" @change="planChange()">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </div>
        </div>
        <div class="inner_content" v-if="showCompany">
          <div class="center_title"><i>*</i> 所属企业:</div>
          <div class="input_center">
            <el-select v-model="dipInfo.company" placeholder="请选择所属企业" @change="companyChange()">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div v-show="active === 1">
        <div class="inner_content">
          <div class="center_title"><i>*</i> 职位名称:</div>
          <div class="input_center">
            <el-input v-model="dipInfo.name" placeholder="请输入职位名称" @blur="nameChange()"></el-input>
          </div>
        </div>
        <div class="inner_content">
          <div class="center_title"><i>*</i> 招聘人数:</div>
          <div class="input_center">
            <el-input type="number" v-model="dipInfo.num" placeholder="请输入招聘人数" @blur="numChange()"></el-input>
          </div>
        </div>
        <div class="inner_content">
          <div class="center_title">行业领域:</div>
          <div class="input_center">
            <el-select v-model="dipInfo.area" placeholder="请选择行业领域" @change="areaChange()">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </div>
        </div>
        <div class="inner_content">
          <div class="center_title"><i>*</i> 学历要求:</div>
          <div class="input_center">
            <el-select v-model="dipInfo.education" placeholder="请选择学历要求" @change="educationChange()">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </div>
        </div>
        <div class="inner_content">
          <div class="center_title"><i>*</i> 工作经验:</div>
          <div class="input_center">
            <el-select v-model="dipInfo.experience" placeholder="请选择工作经验" @change="experienceChange()">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div v-show="active === 2">
        <div class="inner_content">
          <div class="center_title"><i>*</i> 工作职责:</div>
          <div class="input_center">
            <quill-editor class="editor"
              ref="myTextEditor"
              v-model="dipInfo.duty"
              :options="editorOption"
              @blur="jobDuty($event)">
            </quill-editor>
          </div>
        </div>
        <div class="inner_content">
          <div class="center_title"><i>*</i> 职位要求:</div>
          <div class="input_center">
            <quill-editor class="editor"
              ref="myTextEditor"
              v-model="dipInfo.job"
              :options="editorOption"
              @blur="jobEditor($event)">
            </quill-editor>
          </div>
        </div>
      </div>
      <div v-show="active === 3">
        <div class="inner_content">
          <div class="center_title">工作城市:</div>
          <div class="input_center">
            <el-input v-model="dipInfo.city" placeholder="请输入工作城市"></el-input>
          </div>
        </div>
        <div class="inner_content">
          <div class="center_title">工作详情地址:</div>
          <div class="input_center">
            <el-input v-model="dipInfo.address" placeholder="请输入工作详情地址"></el-input>
          </div>
        </div>
        <div class="inner_content">
          <div class="center_title">联系人:</div>
          <div class="input_center">
            <el-input v-model="dipInfo.pop" placeholder="请输入联系人"></el-input>
          </div>
        </div>
        <div class="inner_content">
          <div class="center_title">联系电话:</div>
          <div class="input_center">
            <el-input v-model="dipInfo.phone" placeholder="请输入联系电话"></el-input>
          </div>
        </div>
      </div>
      <div v-show="active === 4">
        <div class="inner_content">
          <div class="center_title"><i>*</i> 月薪:</div>
          <div class="input_center">
            <el-select v-model="dipInfo.pay" placeholder="请选择月薪" @change="payChange()">
              <el-option v-for="(item, index) of payList" :label="item" :value="item" :key="index"></el-option>
            </el-select>
          </div>
        </div>
        <div class="inner_content">
          <div class="center_title">福利标签:</div>
          <div class="input_center">
             <el-select v-model="dipInfo.welfare" placeholder="请输入福利标签">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancleFunc()">取 消</el-button>
        <el-button type="primary" style="margin-top: 12px;" @click="upstep()" plain>上一步</el-button>
        <el-button type="primary" style="margin-top: 12px;" @click="next()">下一步</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { tools } from '@/components/QuillEditor/index'
export default {
  props: ['dialogVisible'],
  data () {
    return {
      active: 0,
      editorOption: tools,
      showCompany: false,
      ind: null,
      isedit: false,
      payList: ['面议', '3000元以下', '3000元~5000元', '5000元~8000元', '8000元~12000元', '12000元~15000元', '15000元~20000元', '20000以上'],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      dipInfo: {
        company: '', // 所属企业
        plan: '', // 所属实习计划
        name: '', // 职位名称
        num: '', // 职位人数
        area: '', // 行业领域
        education: '', // 学历要求
        experience: '', // 工作经验
        duty: '', // 工作职责
        job: '', // 职位要求
        city: '', // 工作城市
        address: '', // 详细地址
        pop: '', // 联系人
        phone: '', // 联系电话
        pay: '', // 月薪
        welfare: '' // 福利标签
      }
    }
  },
  mounted () {
    console.log(this.editorOption)
  },
  methods: {
    payChange () {
      if (this.dipInfo.pay.length > 0) {
        return true
      } else {
        this.$message({
          message: '警告哦，请选择月薪',
          type: 'warning'
        })
        return false    
      }
    },
    planChange () { // 所属实习计划值验证
      if (this.dipInfo.plan.length > 0) {
        this.showCompany = true
        return true
      } else {
        this.$message({
          message: '警告哦，所属实习计划不能为空',
          type: 'warning'
        })
        this.showCompany = false
        return false
      }
    },
    companyChange () { // 所属企业
      if (this.dipInfo.company.length > 0) {
        return true
      } else {
        this.$message({
          message: '警告哦，所属企业不能为空',
          type: 'warning'
        })
        return false
      }
    },
    nameChange () { // 职位名称
      if (this.dipInfo.name.length > 0) {
        return true
      } else {
        this.$message({
          message: '警告哦，职位名称不能为空',
          type: 'warning'
        })
        return false
      }
    },
    numChange () { // 职位人数
      if (this.dipInfo.num.length > 0) {
        return true
      } else {
        this.$message({
          message: '警告哦，职位人数不能为空',
          type: 'warning'
        })
        return false
      }
    },
    areaChange () { // 行业领域
      if (this.dipInfo.area.length > 0) {
        return true
      } else {
        this.$message({
          message: '警告哦，行业领域不能为空',
          type: 'warning'
        })
        return false
      }
    },
    educationChange () { // 学历要求
      if (this.dipInfo.education.length > 0) {
        return true
      } else {
        this.$message({
          message: '警告哦，学历要求不能为空',
          type: 'warning'
        })
        return false
      }
    },
    experienceChange () { // 工作经验
      if (this.dipInfo.experience.length > 0) {
        return true
      } else {
        this.$message({
          message: '警告哦，工作经验不能为空',
          type: 'warning'
        })
        return false
      }
    },
    jobDuty (editor) {
      if (this.dipInfo.duty.length > 0) {
        return true
      } else {
        this.$message({
          message: '警告哦，工作职责不能为空',
          type: 'warning'
        })
        return false
      }
    },
    jobEditor (editor) {
      if (this.dipInfo.job.length > 0) {
        return true
      } else {
        this.$message({
          message: '警告哦，职位要求不能为空',
          type: 'warning'
        })
        return false
      }
    },
    cancleFunc() {
      this.active = 0
      this.dipInfo.company = ''
      this.dipInfo.plan = ''
      this.dipInfo.name = ''
      this.dipInfo.area = ''
      this.dipInfo.education = ''
      this.dipInfo.experience = ''
      this.dipInfo.duty = ''
      this.dipInfo.job = ''
      this.showCompany = false
      this.$emit('deleteFunc')
    },
    okFunc() {
      this.cancleFunc()
    },
    upstep () {
      if (this.active-- <= 0) this.active = 0
    },
    next() {
      if (this.active === 0) {
        if (!this.planChange()) { return }
        if (!this.companyChange()) { return }
      }
      if (this.active === 1) {
        if (!this.nameChange()) { return }
        if (!this.numChange()) { return }
        if (!this.educationChange()) { return }
        if (!this.experienceChange()) { return }
      }
      if (this.active === 2) {
        if (!this.jobDuty()) { return }
        if (!this.jobEditor()) { return }
      }
      if (this.active === 4) {
        if (!this.payChange()) { return }
      }
      if (this.active++ > 3) {
        this.active = 0
        this.$message({
          message: '恭喜你, 添加成功！',
          type: 'success'
        })
        this.showCompany = false
        this.$emit('deleteFunc')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .input_center {
  width: 60%;
}
::v-deep .el-step__title.is-process {
  color: #333;
  font-weight: normal;
}
::v-deep .el-step__title {
  font-size: 15px;
}
::v-deep .el-step__icon-inner {
  font-weight: normal;
}
::v-deep .el-step__icon.is-text {
  height: 26px;
  width: 26px;
  border: solid 1px;
}
::v-deep .ql-container.ql-snow {
  height: 180px;
  border: solid 1px #ddd;
  border-radius: 0 0 5px 5px;
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
  margin: 0 auto;
  margin-top: 30px;
  .center_title {
    text-align: right;
    width: 20%;
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
