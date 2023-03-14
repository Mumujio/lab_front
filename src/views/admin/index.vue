<template>
  <div class="index">
    <el-container style="height:100%">
      <el-aside width="auto">
        <admin_aside></admin_aside>
      </el-aside>
      <el-container>
        <el-header>
          <admin_header></admin_header>
        </el-header>
        <el-main>
          <admin_mainMain></admin_mainMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import admin_aside from '@/components/admin/admin_aside.vue'
import admin_header from '@/components/admin/admin_header.vue'
import admin_mainMain from '@/components/admin/admin_indexMain.vue'
export default {
  components:{
    admin_aside,
    admin_header,
    admin_mainMain
  }
};
</script>

<style lang='less' scoped>
.el-header{
  background-color: #333;
}
.el-main{
  padding-top: 0;
}

</style>
