<template>
  <div class="edit_student">
    <div class="edit_info">
      编辑学生信息
      <el-button type="primary" class="right_btn" @click="backFunc()">返回</el-button>
    </div>
    <div class="edit_from">
      <div class="basic_title">
        <div class="line_left"></div>
        <div class="text_w">基本信息</div>
      </div>
      <div class="info_title">
        <el-row :gutter="20" class="top_room">
          <el-col :span="8"><div class="grid-content"><i>*</i> 姓名</div></el-col>
          <el-col :span="8"><div class="grid-content"><i>*</i> 性别</div></el-col>
          <el-col :span="8"><div class="grid-content"><i>*</i> 电话</div></el-col>
        </el-row>
        <el-row :gutter="20" class="top_room">
          <el-col :span="8"><el-input type="text" placeholder="请输入姓名"></el-input></el-col>
          <el-col :span="8"><el-input type="text" placeholder="请输入性别"></el-input></el-col>
          <el-col :span="8"><el-input type="text" placeholder="请输入电话"></el-input></el-col>
        </el-row>
        <el-row :gutter="20" class="top_room">
          <el-col :span="8"><div class="grid-content"><i>*</i> 出生日期</div></el-col>
          <el-col :span="8"><div class="grid-content"><i>*</i> 学历</div></el-col>
          <el-col :span="8"><div class="grid-content"><i>*</i> 身高</div></el-col>
        </el-row>
        <el-row :gutter="20" class="top_room">
          <el-col :span="8"><el-date-picker type="date" placeholder="请输入出生日期"></el-date-picker></el-col>
          <el-col :span="8"><el-input type="text" placeholder="请输入学历"></el-input></el-col>
          <el-col :span="8"><el-input type="text" placeholder="请输入身高"></el-input></el-col>
        </el-row>
        <el-row :gutter="20" class="top_room">
          <el-col :span="8"><div class="grid-content"><i>*</i> 体重</div></el-col>
          <el-col :span="8"><div class="grid-content"><i>*</i> 户口地区</div></el-col>
          <el-col :span="8"><div class="grid-content"><i>*</i> 身份证号码</div></el-col>
        </el-row>
        <el-row :gutter="20" class="top_room">
          <el-col :span="8"><el-input type="text" placeholder="请输入体重"></el-input></el-col>
          <el-col :span="8">
            <el-cascader
              v-model="basicInfo.value"
              :options="options"
              placeholder="请选择户口地区"
              @change="handleChange">
            </el-cascader>
          </el-col>
          <el-col :span="8"><el-input type="text" placeholder="请输入身份证号码"></el-input></el-col>
        </el-row>
        <el-row :gutter="20" class="top_room">
          <el-col :span="8"><div class="grid-content"><i>*</i> 监督人姓名</div></el-col>
          <el-col :span="8"><div class="grid-content"><i>*</i> 监督人电话</div></el-col>
          <el-col :span="8"><div class="grid-content"><i>*</i> 家庭地址</div></el-col>
        </el-row>
        <el-row :gutter="20" class="top_room">
          <el-col :span="8"><el-input type="text" placeholder="请输入监督人姓名"></el-input></el-col>
          <el-col :span="8"><el-input type="text" placeholder="请输入电话"></el-input></el-col>
          <el-col :span="8">
            <el-cascader
              v-model="basicInfo.value"
              :options="options"
              placeholder="请选择家庭地址"
              @change="handleChange">
            </el-cascader>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="top_room">
          <el-col :span="8"><div class="grid-content"><i>*</i> 家庭详细地址</div></el-col>
        </el-row>
        <el-row :gutter="20" class="top_room">
          <el-col :span="8"><el-input type="text" placeholder="请输入家庭详细地址"></el-input></el-col>
        </el-row>
      </div>
      <div class="basic_title">
        <div class="line_left"></div>
        <div class="text_w">毕业信息</div>
      </div>
      <div class="info_title">
        <el-row :gutter="20" class="top_room">
          <el-col :span="8"><div class="grid-content"><i>*</i> 毕业院校</div></el-col>
          <el-col :span="8"><div class="grid-content"><i>*</i> 毕业地址</div></el-col>
        </el-row>
        <el-row :gutter="20" class="top_room">
          <el-col :span="8"><el-input type="text" placeholder="请输入毕业院校"></el-input></el-col>
          <el-col :span="8"><el-input type="text" placeholder="请输入毕业地址"></el-input></el-col>
        </el-row>
      </div>
      <div class="basic_title">
        <div class="line_left"></div>
        <div class="text_w">报名信息</div>
      </div>
      <div class="info_title">
        <el-row :gutter="20" class="top_room">
          <el-col :span="8"><div class="grid-content"><i>*</i> 年份季度</div></el-col>
          <el-col :span="8"><div class="grid-content"><i>*</i> 院系</div></el-col>
          <el-col :span="8"><div class="grid-content"><i>*</i> 专业</div></el-col>
        </el-row>
        <el-row :gutter="20" class="top_room">
          <el-col :span="8">
            <el-select v-model="basicInfo.year" placeholder="请选择年份季度">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <el-select v-model="basicInfo.year" placeholder="请选择院系">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <el-select v-model="basicInfo.year" placeholder="请选择专业">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="top_room">
          <el-col :span="8"><div class="grid-content"><i>*</i> 培养层次</div></el-col>
          <el-col :span="8"><div class="grid-content"><i>*</i> 班级</div></el-col>
          <el-col :span="8"><div class="grid-content"><i>*</i> 学号</div></el-col>
        </el-row>
        <el-row :gutter="20" class="top_room">
          <el-col :span="8">
            <el-select v-model="basicInfo.level" placeholder="请选择培养层次">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col :span="8"><el-input type="text" placeholder="请输入班级"></el-input></el-col>
          <el-col :span="8"><el-input type="text" placeholder="请输入学号"></el-input></el-col>
        </el-row>
      </div>
      <div class="basic_title">
        <div class="line_left"></div>
        <div class="text_w">头像照片</div>
      </div>
      <div class="info_title">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="basicInfo.logo" :src="basicInfo.logo" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="basic_title">
        <div class="line_left"></div>
        <div class="text_w">身份证正反面</div>
      </div>
      <div class="info_title">
        <el-row :gutter="20" class="top_room">
          <el-col :span="8"><div class="grid-content"><i>*</i> 身份证正面</div></el-col>
          <el-col :span="8"><div class="grid-content"><i>*</i> 身份证反面</div></el-col>
        </el-row>
      </div>
      <div class="info_title">
        <el-row :gutter="20" class="top_room">
          <el-col :span="8">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="basicInfo.logo" :src="basicInfo.logo" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-col>
          <el-col :span="8">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="basicInfo.logo" :src="basicInfo.logo" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-col>
        </el-row>
      </div>
      <div class="left_btn">
        <el-button type="primary">提交</el-button>
        <el-button type="primary" plain @click="backFunc()">取消</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      basicInfo: {
        value: [],
        year: '',
        level: [],
        logo: ''
      },
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'yizhi',
          label: '一致'
        }, {
          value: 'fankui',
          label: '反馈'
        }, {
          value: 'xiaolv',
          label: '效率'
        }, {
          value: 'kekong',
          label: '可控'
        }]
      }]
    }
  },
  methods: {
    backFunc () {
      this.$router.go(-1)
    },
    handleChange(value) {
      console.log(value);
    },
    handleAvatarSuccess(res, file) {
      this.basicInfo.logo = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isLt2M
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-date-editor.el-input {
  width: 100%;
}
::v-deep .el-cascader {
  width: 100%;
}
::v-deep .el-select {
  width: 100%;
}
::v-deep .el-upload {
  border: dashed 1px #ddd;
  border-radius: 5px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.edit_student {
  height: auto;
  .edit_info {
    background: #fff;
    padding: 20px 20px 20px 30px;
    font-weight: bold;
    .right_btn {
      float: right;
      margin-top: -10px;
    }
  }
  .edit_from {
    margin: 20px;
    background: #fff;
    border-radius: 3px;
    padding: 10px 0;
    .left_btn {
      margin: 20px;
    }
    .info_title {
      margin: 10px 20px;
      .top_room {
        margin-top: 10px;
      }
      .grid-content {
        color: #333;
        font-size: 15px;
        i {
          color: red;
        }
      }
    }
    .basic_title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 30px;
      margin-left: 20px;
      .line_left {
        height: 20px;
        width: 3px;
        background: #3080fe;
      }
      .text_w {
        margin-left: 5px;
      }
    }
  }
}
</style>
