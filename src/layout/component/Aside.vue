<template>
  <el-col :span="12" class="nav">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo ul-box"
      @open="handleOpen"
      @close="handleClose">
      <template v-for="route of arrRoutes">
        <el-menu-item :index="route.name" v-if="!route.children" :key="route.name" @click="goWhere({ name: route.name })">
          <i v-if="route.meta && route.meta.icon" :class="route.meta.icon"></i>
          <span slot="title">{{route.meta.title}}</span>  
        </el-menu-item>
        <el-submenu v-else :index="route.name" :key="route.name">
             <template slot="title">
              <i v-if="route.meta && route.meta.icon" :class="route.meta.icon"></i>
              <span slot="title">{{route.meta.title}}</span>  
            </template>
            <el-menu-item v-for="r of route.children" :index="r.name" :key="r.name" @click="goWhere({ name: r.name })">
              <i v-if="r.meta && r.meta.icon" :class="r.meta.icon"></i>
              <span slot="title">{{r.meta.title}}</span>
            </el-menu-item>
        </el-submenu>
      </template>
      <!-- <el-menu-item index="2" @click="goWhere({
        path: '/'
      })">
          <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="3" @click="goWhere({
        path: '/dormitory'
      })">
        <i class="el-icon-document"></i>
        <span slot="title">宿舍查看</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-opportunity"></i>
          <span>水电缴纳</span>
        </template>       
          <el-menu-item index="1-1" @click="goWhere({path: '/pay/light'})">照明电费</el-menu-item>
          <el-menu-item index="1-2" @click="goWhere({path: '/pay/kongtiao'})">空调电费</el-menu-item>
          <el-menu-item index="1-3" @click="goWhere({path: '/pay/water'})">缴纳水费</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>报修</span>
        </template>
          <el-menu-item index="1-1" @click="goWhere({path: '/fixList'})" >报修列表</el-menu-item>
          <el-menu-item index="1-2" @click="goWhere({path: '/fixSub'})">申请报修</el-menu-item>
      </el-submenu>
      <el-menu-item index="4"   @click="goWhere({path: '/person'})">
        <i class="el-icon-user-solid"></i>
        <span slot="title">人员管理</span>
      </el-menu-item> -->
    </el-menu>
  </el-col>
</template>

<script>
import { mapGetters } from 'vuex'
import { arrRoutes } from '@/router'
console.log('@@@',arrRoutes);

export default {
    name:'Aside',
    data() {
      return {
        arrRoutes,
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
        console.log(route,this);
        if(this.$route.name !== route.name) this.$router.push(route)
      }
    },
    computed: {
      isDisabled({ token }) {
        return !token === 'student'
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