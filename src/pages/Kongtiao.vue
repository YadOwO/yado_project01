<template>
  <el-form :inline="true" class="demo-form-inline">
  <el-form-item label="空调充值">
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in dormList"
      :key="item.dormId"
      :label="item.dormId"
      :value="item.dormId">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="充值金额">
    <el-input v-model.number="money" placeholder="充值金额"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">充值</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  import { mapState , mapActions } from 'vuex'

  export default {
    data() {
      return {
        value: '',
        money:'',
      }
    },
    methods: {
      onSubmit() {
        this.$confirm(`确定给宿舍${this.value}充值空调费${this.money}元`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //提交充值信息
          this.pay({
            payWay:'Kongtiao',
            payDorm:this.value,
            payNum:this.money
          })
          this.$message({
            type: 'success',
            message: '充值成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消充值'
          });          
        });
      },
      ...mapActions('dormitorys',['pay'])
    },
    computed:{
      ...mapState('dormitorys',['dormList'])
    }
  }
</script>

<style scoped>
::v-deep .el-form-item__label {
  color: #000;
}
</style>