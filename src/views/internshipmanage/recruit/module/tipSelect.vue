<template>
  <div class="tip_select">
    <el-dialog
      :title="title"
      :visible.sync="tipVisible"
      :before-close="cancleFunc"
      :close="cancleFunc"
      width="30%">
      <div>{{text}}<i class="el-icon-question"></i></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancleFunc()">取 消</el-button>
        <el-button type="primary" style="margin-top: 12px;" @click="okFunc()">确认</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ['tipVisible'],
  data () {
    return {
      ind: null,
      title: '',
      text: ''
    }
  },
  methods: {
    cancleFunc() {
      this.$emit('colseTip')
    },
    okFunc() {
      this.cancleFunc()
    }
  }
}
</script>
<style lang="scss" scoped>
.el-icon-question {
  color: #e6a23c;
}
</style>
