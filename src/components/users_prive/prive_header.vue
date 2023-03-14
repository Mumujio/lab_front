<template>
  <div class="head">
    <div class="l-content">
      <h3 style="color: #fff">首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown trigger="hover" szie="mini">
        <span>
          <img :src="imgpath" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="noLogin">退出登录</el-dropdown-item>
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
    noLogin() {
      localStorage.removeItem("token")
      location.reload()
      this.$alert('退出登录成功', '提示', {
          confirmButtonText: '确定',
          center: true
      })
    },
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
