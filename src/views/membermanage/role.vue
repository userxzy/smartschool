<template>
  <div class="manage_role">
    <div class="manage_text">
      说明：实习就业管理系统的权限管理基于RBAC模型，这意味着您要首先创建具有某项权限的角色，再将角色与某个账户进行绑定。这样，这个账户就具有了这个角色所拥有的全部权限。 系统默认设置了：“学校管理员”、“班主任”，“实习带队班主任”、“企业管理员”、“学生”5个角色。您可以随时按照需要添加具有任一权限的角色。
    </div>
    <div class="role_list">
      <div class="role_in_s" @click="addRole()">
        <i class="el-icon-plus"></i><span>新增角色</span>
      </div>
      <div class="role_in" v-for="(item, index) of roleList" :key="index">
        <div class="up_room">
          <div class="up_img">
            <i class="el-icon-user-solid" :style="randomRgb()"></i>
          </div>
          <div class="up_text">
            <div class="name_text">{{item.name}}</div>
            <div class="desc_text">{{item.limit}}</div>
          </div>
        </div>
        <div class="down_room">
          <div class="left_room" @click="editRole(index)">编辑角色</div>
          <div class="right_room" @click="cancelRole(index)">删除角色</div>
        </div>
      </div>
    </div>
    <role-select ref="role" :dialogVisible="dialogVisible" @deleteFunc="deleteFunc"></role-select>
  </div>
</template>
<script>
import RoleSelect from './module/RoleSelect'
export default {
  components: {
    RoleSelect
  },
  data () {
    return {
      dialogVisible: false,
      roleList: [
        {
          id: '001',
          name: 'super',
          limit: '学校管理员拥有所有权限'
        },
        {
          id: '002',
          name: 'super',
          limit: '学校管理员拥有所有权限'
        },
        {
          id: '003',
          name: 'super',
          limit: '学校管理员拥有所有权限'
        },
        {
          id: '004',
          name: 'super',
          limit: '学校管理员拥有所有权限'
        }
      ]
    }
  },
  methods: {
    addRole () {
      this.dialogVisible =  true
    },
    cancelRole (index) {
      this.roleList.splice(index, 1)
    },
    editRole (index) {
      this.$refs.role.ind = index
      this.$refs.role.isEdit = true
      this.addRole()
    },
    deleteFunc () {
      this.dialogVisible =  false
    },
    randomRgb() {
      let R = Math.floor(Math.random() * 255)
      let G = Math.floor(Math.random() * 255)
      let B = Math.floor(Math.random() * 255)
      return {
        color: 'rgb(' + R + ',' + G + ',' + B + ')'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-row {
 margin-right: 0px!important;
}
.manage_role {
  border-radius: 5px;
  min-width: 1200px;
  .grid-content {
    background: #fff;
  }
  .manage_text {
    color: rgba(0,0,0,.65);
    font-size: 14px;
    padding: 20px;
    background: #fff;
  }
  .role_list {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    .role_in_s:hover {
      color:#409eff;
      border: dotted 2px #409eff;
    }
    .role_in_s {
      text-align: center;
      height: 210px;
      width: 32%;
      line-height: 210px;
      background: #fff;
      border: dotted 2px #ddd;
      border-radius: 5px;
      color: #999;
      font-size: 14px;
      margin: 0 0.65%;
      span {
        display: inline-block;
        margin-left: 10px;
      }
    }
    .role_in {
      width: 32%;
      height: 210px;
      background: #fff;
      border: solid 1px #ddd;
      border-radius: 5px;
      margin: 5px 0.65%;
      .up_room {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        height: 75%;
        .up_text {
          padding-top: 22px;
          width: 80%;
          height: 65px;
          display: flex;
          flex-direction:column;
          align-items: flex-start;
          justify-content: space-between;
          .name_text {
            font-weight: bold;
            color: #666;
          }
          .name_text:hover {
            color: #409eff;
          }
          .desc_text {
            color: #999;
            font-size: 14px;
          }
        }
        .up_img {
          width: 20%;
          height: 70px;
          padding-top: 20px;
          text-align: center;
          font-size: 45px;
        }
      }
      .down_room {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 25%;
        background: #f5f5f5;
        color: #999;
        font-size: 14px;
        .left_room, .right_room {
          width: 50%;
          height: 100%;
          padding: 20px;
          text-align: center;
        }
        .right_room {
          border-left: solid 1px #ddd;
        }
        .left_room:hover, .right_room:hover {
          color: #409eff;
        }
      }
    }
  }
  .inner_content {
    text-align: center;
  }
}
</style>
