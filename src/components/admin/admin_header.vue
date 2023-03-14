<template>
  <div class="head">
    <div class="l-content">
      <el-button icon="el-icon-menu" size="mini" @click="changeAside"></el-button>
      <h3 style="color: #fff">首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" szie="mini">
        <span>
          <img :src="imgpath" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgpath: require("@/assets/admin_photo.png"),
    }
  },
  methods:{
    changeAside(){
      this.$store.commit('changeCollapse')
    }
  }
};
</script>

<style lang='less' scoped>
.head{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.l-content{
  display: flex;
  align-items: center;
  .el-button{
    margin-right: 20px;
  }
}
.r-content{
  .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 2vw;
  }
  .user:hover{
    opacity: 0.5;
    cursor:pointer
  }
}
</style>
