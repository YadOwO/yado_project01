<template>
    <el-dropdown trigger="click" class="user-box">
      <span class="el-dropdown-link">
        User下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-user-solid">个人中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-back">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
</template>

<script scoped>
export default {
    name:'User',
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