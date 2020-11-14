<template>
  <div class="add_plan">
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :before-close="closeDialog"
      :close="closeDialog"
      width="30%"
    >
      <div class="inner_add">{{content}}<i class="el-icon-question"></i></div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog()">取 消</el-button>
        <el-button type="primary" @click="sureDialog()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ['dialogVisible'],
  data () {
    return {
      title: '',
      content: '',
      ind: null
    }
  },
  methods: {
    closeDialog () {
      this.$emit('closeTip')
    },
    sureDialog () {
      this.closeDialog()
    }
  }
}
</script>
<style lang="scss" scoped>
.add_plan {
  .inner_add {
    font-size: 16px;
    i {
      color: #e6a23c;
      font-size: 18px;
    }
  }
}
</style>
