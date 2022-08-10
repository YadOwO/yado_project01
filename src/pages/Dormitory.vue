<template>
    <el-table
      :data="dormList"
      style="width: 100%">
      <el-table-column
        prop="dormId"
        label="宿舍号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="dormBoss"
        label="寝室长"
        width="200">
      </el-table-column>
      <el-table-column
        prop="dormPerson"
        label="宿舍成员"
        width="300">
      </el-table-column>
      <el-table-column
        prop="light"
        label="照明电费"
        width="200">
      </el-table-column>
      <el-table-column
        prop="kongtiao"
        label="空调电费"
        width="200">
      </el-table-column>
      <el-table-column
        prop="water"
        label="水费"
        width="200">
      </el-table-column>
      <el-table-column
        prop="isGood"
        label="优秀宿舍">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
    </el-table>
  </template>

  <script>
  import { mapState } from 'vuex'

    export default {
      name:'Dormitory',
      //   return {
      //     tableData: [{
      //       dormId: '330',
      //       dormBoss: '王小虎',
      //       dormPerson: '上海市普陀区金沙江路 1518 弄',
      //       light:'20',
      //       kongtiao:'20',
      //       water:'20',
      //       isGood:'yes'
      //     }, {
      //       dormId: '331',
      //       dormBoss: '王小虎',
      //       dormPerson: '上海市普陀区金沙江路 1517 弄',
      //       light:'20',
      //       kongtiao:'20',
      //       water:'20',
      //       isGood:'yes'
      //     }, {
      //       dormId: '332',
      //       dormBoss: '王小虎',
      //       dormPerson: '上海市普陀区金沙江路 1519 弄',
      //       light:'20',
      //       kongtiao:'20',
      //       water:'20',
      //       isGood:'yes'
      //     }, {
      //       dormId: '333',
      //       dormBoss: '王小虎',
      //       dormPerson: '上海市普陀区金沙江路 1516 弄',
      //       light:'20',
      //       kongtiao:'20',
      //       water:'20',
      //       isGood:'yes'
      //     }]
      //   }
      // },
      computed:{
        // ...mapState('users',['userList','test']),
        ...mapState('dormitorys',['dormList']),
      },
      mounted() {
        // console.log(this.dormList)
      },
    }
  </script>