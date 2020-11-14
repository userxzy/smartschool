<template>
  <div class="school_major">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="content"
        label="问卷调查"
        width="180">
      </el-table-column>
      <el-table-column label="选项1">
        <template slot-scope="scope">
          <div class="select_line">
            <div class="select_text">{{scope.row.select1.text}}</div>
            <div class="select_core">{{scope.row.select1.core}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="选项2">
        <template slot-scope="scope">
          <div class="select_line">
            <div class="select_text">{{scope.row.select2.text}}</div>
            <div class="select_core">{{scope.row.select2.core}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="选项3">
        <template slot-scope="scope">
          <div class="select_line">
            <div class="select_text">{{scope.row.select3.text}}</div>
            <div class="select_core">{{scope.row.select3.core}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="选项4">
        <template slot-scope="scope">
          <div class="select_line">
            <div class="select_text">{{scope.row.select4.text}}</div>
            <div class="select_core">{{scope.row.select4.core}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="选项5">
        <template slot-scope="scope">
          <div class="select_line">
            <div class="select_text">{{scope.row.select5.text}}</div>
            <div class="select_core">{{scope.row.select5.core}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="选项6">
        <template slot-scope="scope">
          <div class="select_line">
            <div class="select_text">{{scope.row.select6.text}}</div>
            <div class="select_core">{{scope.row.select6.core}}</div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        content: '实习生调研',
        select1: {
          text: '住宿满意吗？(10)',
          core: 5
        },
        select2: {
          text: '住宿满意吗？(10)',
          core: 5
        },
        select3: {
          text: '住宿满意吗？(10)',
          core: 5
        },
        select4: {
          text: '住宿满意吗？(10)',
          core: 5
        },
        select5: {
          text: '住宿满意吗？(10)',
          core: 5
        },
        select6: {
          text: '住宿满意吗？(10)',
          core: 5
        }
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
.school_major {
  margin: 20px;
  background: #fff;
  border-radius: 5px;
  padding: 10px;
  min-width: 900px;
  overflow-y: scroll;
  .select_line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .select_text {
      height: 100%;
    }
    .select_core {
      height: 100%;
      width: 20%;
      text-align: center;
      border-left: solid 1px #ddd;
    }
  }
}
</style>
