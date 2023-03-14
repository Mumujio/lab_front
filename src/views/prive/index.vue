<template>
  <div class="index">
    <el-container style="height:100%">
      <el-aside width="auto">
        <prive_aside  @change='changeNavMain'></prive_aside>
      </el-aside>
      <el-container>
        <el-header>
          <prive_header></prive_header>
        </el-header>
        <el-main>
          <component :is="nav_Main"></component>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import prive_aside from '@/components/users_prive/prive_aside.vue'
import prive_header from '@/components/users_prive/prive_header.vue'
import prive_mainMain from '@/components/users_prive/prive_indexMain.vue'
import prive_myProjectMain from '@/components/users_prive/prive_myProjectMain.vue'
import prive_setMain from '@/components/users_prive/prive_setMain.vue'
export default {
  data(){
    return{
      nav_Main:'prive_myProjectMain'
    }
  },
  components:{
    prive_aside,
    prive_header,
    prive_mainMain,
    prive_myProjectMain,
    prive_setMain
  },
  methods:{
    changeNavMain(val){
      this.nav_Main = val
    }
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
