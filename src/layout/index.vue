<template>
  <el-container>
  <el-aside width="200px"><Aside/></el-aside>
  <el-container>
    <el-header class="main-header">
      <span class="title-header">宿舍管理系统 </span>
      <User/>
    </el-header>
    <el-main><router-view></router-view></el-main>
  </el-container>
</el-container>
</template>

<script>
import Aside from './component/Aside'
import User from './component/User'

export default {
    name:'Layout',
    components:{
        Aside,
        User,
        }
}
</script>

<style scoped>
.el-container {
    height: 100%;
}
.main-header {
    position: relative;
    background-color: pink;
}
.title-header {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>