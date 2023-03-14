<template>
  <div>
    <div class="zhanwei">
      <div id="nav">
        <div class="nav_head">
          <div class="nav_left">
            <img src="@/assets/headlogo.png" />
          </div>
          <div class="nav_right">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              text-color="#000000"
            >
              <el-menu-item index="1" @click="jump_home">首页</el-menu-item>
              <el-submenu index="2">
                <template slot="title">实验室项目</template>
                <el-submenu index="2-1">
                  <template slot="title">2019年度</template>
                  <el-menu-item index="2-1-1" @click="jump_project_Device_control"
                    >电气设备控制仿真实验</el-menu-item
                  >
                </el-submenu>
                <el-submenu index="2-2">
                  <template slot="title">2020年度</template>
                  <el-menu-item index="2-2-1" @click='jump_Pedestrian_guidance'
                    >杨家湾行人引导虚拟仿真</el-menu-item
                  >
                  <el-menu-item
                    index="2-2-2"
                    @click="jump_project_Automatic_control"
                    >城市轨道综合控制综合设计</el-menu-item
                  >
                </el-submenu>
                <el-submenu index="2-3">
                  <template slot="title">2021年度</template>
                  <el-menu-item index="2-3-1" @click="jump_Oculus"
                    >基于Oculus的虚拟驾驶系统</el-menu-item
                  >
                </el-submenu>
                <el-submenu index="2-4">
                  <template slot="title">2022年度</template>
                  <el-menu-item index="2-4-1" @click="jump_ZD6"
                    >基于虚拟仿真技术的ZD6转辙机安装平台</el-menu-item
                  >
                   <el-menu-item index="2-4-2" @click="jump_Truck"
                    >一种货车内轮差防护的智能机械装置其他材料</el-menu-item
                  >
                  <el-menu-item index="2-4-3" @click="jump_Smart"
                    >智能安防系统</el-menu-item
                  >
                </el-submenu>
              </el-submenu>

              <el-menu-item index="3" @click="jump_introduce">实验室介绍</el-menu-item>
              <el-menu-item index="4" @click="jump_progress"
                >成果在线体验</el-menu-item
              >
              <el-menu-item index="5" @click="jump_techTeam">师资队伍</el-menu-item>
             <!--  <el-menu-item index="6">问题反馈</el-menu-item> -->
              <div class="privePhoto">
                <el-dropdown trigger="hover">
                  <span>
                    <img :src="imgpath" class="user" />
                  </span>
                  <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item @click.native="jump_prive">个人中心</el-dropdown-item>
                    <el-dropdown-item @click.native="noLogin">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <el-row>
                <button class="loginButton" @click="noLogin">退出登录</button>
              </el-row>
            </el-menu>
          </div>

          <nav class="nav_menu"></nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgpath: require("@/assets/unlogin_photo.jpg"),
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    jump_techTeam(){
      this.$router.push("/introduce");
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    noLogin() {
      this.$router.push("/")
      localStorage.removeItem("token")
      
      location.reload()
      this.$alert('退出登录成功', '提示', {
          confirmButtonText: '确定',
          center: true
      })
      
    },
    jump_home() {
      this.$router.push("/");
    },
    jump_progress() {
      this.$router.push("/progress/index");
    },
    jump_project_Automatic_control() {
      this.$router.push("/Automatic_control");
    },
    jump_project_Device_control(){
      this.$router.push("/Device_control");
    },
    jump_Pedestrian_guidance(){
      this.$router.push("/Pedestrian_guidance");
    },
    jump_Oculus(){
      this.$router.push("/Oculus");
    },
    jump_prive(){
      this.$router.push("/prive");
    },
    jump_ZD6(){
      this.$router.push("/ZD6");
    },
    jump_Truck(){
     this.$router.push("/Truck");
    },
    jump_Smart(){
      this.$router.push("/Smart");
    },
    jump_introduce(){
      this.$router.push("/Introduce");
    }
    
  },
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.zhanwei {
  height: 120px;
  width: 100%;
}
#nav {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
}
.nav_head {
  display: flex;
  justify-content: center;
  height: 120px;
}
.nav_left {
  max-width: 30vw;
  min-width: 400px;
  display: flex;
  align-items: center;
}
.nav_left img {
  height: 70%;
  width: 100%;
  font-size: 0px;
}
.nav_right {
  width: 60vw;
}
.nav_right ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  height: 100%;
  text-decoration: none;
}
.nav_right ul .router-link-active {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
.privePhoto {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding-right: 0.5vw;
  }
  .user:hover {
    opacity: 0.5;
    cursor: pointer;
  }
}
.loginButton{
  padding: 6px 10px;
}

</style>
