<template>
  <div>
    <component :is="navName"></component>
    <div class="mainContent">
      <div class="topPhoto">
        <img src="http://119.23.189.220:666/photo/home_radio_photo2.png" alt="" />
      </div>
      <div class="content">
        <div class="no1">
          <img src="http://119.23.189.220:666/photo/项目照片5.png" alt="" />
          <div class="icon">
            <el-button  type="primary" icon="el-icon-video-play" @click.native="goZD6">进入体验</el-button>
          </div>
        </div>
        <div class="no2">
          <img src="http://119.23.189.220:666/photo/智能安防.png" alt="" />
          <div class="icon">
            <el-button type="primary" icon="el-icon-video-play" @click.native="goSmart">进入体验</el-button>
          </div>
        </div>
        <div class="no3">
          <img src="http://119.23.189.220:666/photo/SCUEC生活馆.png" alt="" />
          
          <div class="icon">
            <el-button type="primary" icon="el-icon-video-play" @click.native="goWX">进入体验</el-button>
          </div>
        </div>
      </div>
    </div>
    <div></div>
    <fooer_home></fooer_home>
  </div>
</template>

<script>
import nav_home from "@/components/nav_home.vue";
import fooer_home from "@/components/foter_home.vue";
import nav_home_login from "@/components/nav_home_login.vue";
export default {
  data() {
    return {
      navName: "nav_home",
    };
  },
  components: {
    nav_home_login,
    fooer_home,
    nav_home,
  },
  methods: {
    goZD6(){
        this.$router.push('/progress/ZD6')
    },
    goSmart(){
        this.$router.push('/progress/Smart')
    },
    goWX(){
      const token = localStorage.getItem("token");
      if(token){
        this.$alert('<img src="http://119.23.189.220:666/photo/SCUEC生活馆二维码.png" alt="" style="height:100%;width:100%;"/>',{
        dangerouslyUseHTMLString: true,
        showConfirmButton:false
      })
      }
      else{
        this.$router.push('/login')
      }
      
    }
  },
  mounted() {
    //相当于 window.onload
    this.$nextTick(() => {
      // 获取token值 判断渲染nav
      const token = localStorage.getItem("token");
      if (token) this.navName = "nav_home_login";
      else this.navName = "nav_home";
    });
  },
  updated() {},
};
</script>

<style lang="less" scoped>
.mainContent {
  height: 100%;
  .topPhoto {
    height: 60vh;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: 0 auto;

    .no1 {
      position: relative;
      height: 60vh;
      margin: 2.5vh 0;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .no2 {
      position: relative;
      height: 60vh;
      margin: 2.5vh 0;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .no3{
      position: relative;
      height: 60vh;
      margin: 2.5vh 0;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .icon {
      position: absolute;
      right: 0;
      top: 50%;
    }
  }
}
</style>
