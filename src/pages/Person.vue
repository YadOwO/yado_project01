  <template>
    <el-table
      :data="userList"
      style="width: 100%">
      <el-table-column
        prop="userId"
        label="学号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="rank"
        label="权限"
        width="180">
      </el-table-column>
      <el-table-column
        prop="userDorm"
        label="所属宿舍">
      </el-table-column>
    </el-table>
  </template>

  <script>
  import { mapState } from 'vuex'

    export default {
      name:'Person',
      computed:{
        ...mapState('users',['userList','test'])
      }
    }
  </script>