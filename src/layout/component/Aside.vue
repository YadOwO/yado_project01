<template>
  <el-col :span="12" class="nav">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo ul-box"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="2" @click="goWhere({
        path: '/layout/home'
      })">
          <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="3" @click="goWhere({
        path: '/layout/dormitory'
      })">
        <i class="el-icon-document"></i>
        <span slot="title">宿舍查看</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-opportunity"></i>
          <span>水电缴纳</span>
        </template>
        <el-menu-item-group>
          <template slot="title">电费管理</template>
          <el-menu-item index="1-1" @click="goWhere({path: '/layout/light'})">照明电费</el-menu-item>
          <el-menu-item index="1-2" @click="goWhere({path: '/layout/kongtiao'})">空调电费</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="水费管理">
          <el-menu-item index="1-3" @click="goWhere({path: '/layout/water'})">缴纳水费</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>报修</span>
        </template>
        <el-menu-item-group>
          <template slot="title">报修管理</template>
          <el-menu-item index="1-1" @click="goWhere({path: '/layout/fixList'})" :disabled="isDisabled">报修列表</el-menu-item>
          <el-menu-item index="1-2" @click="goWhere({path: '/layout/fixSub'})">申请报修</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="4" :disabled="isDisabled"  @click="goWhere({path: '/layout/person'})">
        <i class="el-icon-user-solid"></i>
        <span slot="title">人员管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'Aside',
    data() {
      return {
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      goWhere(route){
        // console.log(route,this);
        if(this.$route.fullpath !== route.path) this.$router.push(route)
      }
    },
    computed: {
      isDisabled({ token }) {
        return token === 'student'
      },
      ...mapGetters(['token'])
    }
  }
</script>

<style scoped>
.nav {
  height: 100%;
  width: 100%;
}
.ul-box {
  height: 100%;
  width: 100%;
}
</style>