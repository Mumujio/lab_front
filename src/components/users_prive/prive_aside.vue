<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <h3>个人中心</h3>
      <el-menu-item index="1" @click="jump_index">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2" @click="jump_myProject">
        <i class="el-icon-user"></i>
        <span slot="title">项目管理</span>
      </el-menu-item>
      <el-submenu index="3" disabled>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">待补充</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <span slot="title">选项4</span>
          <el-menu-item index="3-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="4" @click="jump_set">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    name:'aside',
    data() {
      return {
        navMain:'prive_mainMain'
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      jump_index(){
         /*  this.$router.push('/prive') */
        this.navMain='prive_mainMain'
        this.$emit('change',this.navMain)
      },
      jump_myProject(){
        this.navMain='prive_myProjectMain'
        this.$emit('change',this.navMain)
      },
      jump_set(){
        this.navMain='prive_setMain'
        this.$emit('change',this.navMain)
      }
    }
  }
</script>

<style lang="less" scoped>
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
   
  }
  .el-menu{
      width: auto;
      height: 100%;
      border: none;
       height: 100vh;
  }
  h3{
      color: white;
      text-align: center;
      line-height: 48px
  }
</style>
