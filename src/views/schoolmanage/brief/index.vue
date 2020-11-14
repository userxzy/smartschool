<template>
  <div class="school_brief">
    <div v-if="!isedit" class="right_edit">
      <el-button type="primary" @click="OnEdit()">编辑</el-button>
    </div>
    <div v-if="isedit" class="right_edit">
      <el-button @click="cancelSave()">取消</el-button>
      <el-button type="primary" @click="SaveData()">保存</el-button>
    </div>
    <!-- 编辑状态 -->
    <div v-if="isedit" class="inner_form">
      <div class="inner_item">
        <div class="item_title"><span class="red_star">*</span>学校LOGO</div>
        <div class="up_data">
          <el-upload
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :on-remove="handleRemove"
            :before-upload="beforeAvatarUpload"
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
      <div class="inner_item">
        <div class="item_title"><span class="red_star">*</span>学校名称</div>
        <div class="item_put">
          <el-input v-model="schoolInfo.schoolName" type="text" placeholder="请输入学校名称" />
        </div>
      </div>
      <!-- 联系人 -->
      <div class="inner_item">
        <div class="item_title"><span class="red_star">*</span>联系人</div>
        <div class="item_put">
          <el-input v-model="schoolInfo.name" type="text" placeholder="请输入联系人" />
        </div>
      </div>
      <!-- 联系电话 -->
      <div class="inner_item">
        <div class="item_title"><span class="red_star">*</span>联系电话</div>
        <div class="item_put">
          <el-input v-model="schoolInfo.phone" type="text" placeholder="请输入联系电话" />
        </div>
      </div>
      <!-- 学校地址 -->
      <div class="inner_item">
        <div class="item_title"><span class="red_star">*</span>学校地址</div>
        <div class="item_put">
          <el-select v-model="schoolInfo.address" placeholder="请输入学校地址">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </div>
      </div>
      <!-- 学校详细地址 -->
      <div class="inner_item">
        <div class="item_title"><span class="red_star">*</span>学校详细地址</div>
        <div class="item_put">
          <el-input v-model="schoolInfo.phone" type="text" placeholder="请输入学校详细地址" />
        </div>
      </div>
      <!-- 学校简介 -->
      <div class="inner_item">
        <div class="item_title"><span class="red_star">*</span>学校简介</div>
        <div class="item_put">
          <markdown-editor ref="markdownEditor" v-model="schoolInfo.brief" :options="{hideModeSwitch:true, previewStyle:'tab'}" />
        </div>
      </div>
      <!-- 学校荣誉 -->
      <div class="inner_item">
        <div class="item_title">学校荣誉</div>
        <div class="item_put">
          <el-upload
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :limit="3"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </div>
      </div>
      <!-- 校园风景 -->
      <div class="inner_item">
        <div class="item_title">校园风景</div>
        <div class="item_put">
          <el-upload
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :limit="3"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </div>
      </div>
    </div>
    <!--预览状态-->
    <div v-if="!isedit" class="inner_form">
      <div class="inner_item">
        <div class="item_title"><span class="red_star">*</span>学校logo</div>
        <div class="up_data">
          <img src="/" />
        </div>
      </div>
      <div class="inner_item">
        <div class="item_title"><span class="red_star">*</span>学校名称</div>
        <div class="item_put">萨发哈发</div>
      </div>
      <div class="inner_item">
        <div class="item_title"><span class="red_star">*</span>联系人</div>
        <div class="item_put">萨发哈发</div>
      </div>
      <div class="inner_item">
        <div class="item_title"><span class="red_star">*</span>联系电话</div>
        <div class="item_put">萨发哈发</div>
      </div>
      <div class="inner_item">
        <div class="item_title"><span class="red_star">*</span>学校地址</div>
        <div class="item_put">萨发哈发</div>
      </div>
      <div class="inner_item">
        <div class="item_title"><span class="red_star">*</span>学校详细地址</div>
        <div class="item_put">萨发哈发</div>
      </div>
      <div class="inner_item">
        <div class="item_title"><span class="red_star">*</span>学校简介</div>
        <div class="item_put">萨发哈发</div>
      </div>
      <div class="inner_item">
        <div class="item_title">学校荣誉</div>
        <div class="up_data">
          <img src="/" />
        </div>
      </div>
      <div class="inner_item">
        <div class="item_title">校园风景</div>
        <div class="up_data">
          <img src="/" />
        </div>
      </div>
    </div>
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
      dialogImageUrl: '', // 学校荣誉图
      dialogVisible: false,
      imageUrl: '', // logo
      isedit: false,
      schoolInfo: {
        image: '',
        schoolName: '',
        name: '',
        phone: '',
        address: '',
        detailAddress: '',
        brief: '',
        honorUrlList: [],
        viewsUrlList: []
      }
    }
  },
  methods: {
    OnEdit () {
      this.isedit = true
    },
    cancelSave () {
      this.isedit = false
    },
    SaveData () {
      this.cancelSave()
    },
    // 学校荣誉图
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    // logo
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    handleRemove(file) {
      console.log(file)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-select {
  width: 100%;
}
.school_brief {
  margin: 20px;
  height: 860px;
  min-width: 1200px;
  background: #fff;
  border-radius: 5px;
  padding: 10px;
  overflow-y: scroll;
  .right_edit {
    margin: 0 auto;
    width: 700px;
    text-align: right;
  }
  .inner_form {
    margin: 0 auto;
    margin-top: 20px;
    width: 700px;
    .inner_item {
      margin-top: 10px;
      .item_put {
        width: 100%;
        margin-top: 10px;
        font-size: 14px;
        color: #999;
      }
      // 头像
      .up_data {
        width: 120px;
        height: 120px;
        border: 1px solid #d9d9d9;
        border-radius: 6px;
        margin-top: 10px;
      }
      .avatar-uploader .el-upload {
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
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
      }
      .avatar {
        width: 120px;
        height: 120px;
        display: block;
      }
      .item_title {
        color: #333;
        font-size: 14px;
        .red_star {
          color: red;
        }
      }
    }
  }
}
</style>
