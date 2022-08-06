<template>
    <el-dropdown :hide-on-click="false" class="user-box">
  <span class="el-dropdown-link">
    {{currentUser.username || '未登录'}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>个人中心</el-dropdown-item>
    <!--组件无click事件,需要.native -->
    <el-dropdown-item divided @click.native="exitHandler">退出登录</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</template>

<script scoped>
import { mapActions, mapGetters } from 'vuex'
export default {
    name:'User',
    methods:{
      exitHandler() {
        this.$confirm('您确定要退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.userExit()
        }).catch(() => {       
        });
      },
      ...mapActions('users', ['userExit'])
    },
    computed:{
      ...mapGetters(['currentUser'])
    }
}
</script>

<style scpoed>
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .user-box {
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>