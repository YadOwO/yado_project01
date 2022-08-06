<template>
    <el-dropdown :hide-on-click="false" class="user-box">
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>个人中心</el-dropdown-item>
    <el-dropdown-item divided @click="exit">退出登录</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</template>

<script scoped>
export default {
    name:'User',
    methods:{
      exit(){
        this.$router.push('/login')
        console.log('123');
      }
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