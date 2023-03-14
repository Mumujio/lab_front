<template>
  <div id="theBigest">
    <nav_home_login></nav_home_login>
    <div class="section">
      <div class="section-top">
        <h2>基于虚拟仿真技术的ZD6转辙机安装平台</h2>
      </div>

      <div class="section-middle">
        <video
          src="http://119.23.189.220:666/view/ZD6项目演示视频.mp4"
          style="width: 100%; height: 100%"
          controls="controls"
          loop="loop"
          muted="muted"
           autoplay="autoplay"
        ></video>
        <!-- 轮播图区域 -->
        <!-- <el-carousel :interval="4000" type="card" height="50vh">
          <el-carousel-item v-for="item in imgwrap" :key="item">
            <img :src="item.url" />
          </el-carousel-item>
        </el-carousel> -->
      </div>

      <div class="section-Collapse">
        <div class="inducation">
          <el-card class="box-card">
            <div>
              <h2>实验简介</h2>

              <span
                >近些年来，我国交通事业不断发展，逐步由交通大国向交通强国迈进。培养与之需求相应的轨道交通方向的人才，多所高校已开设了轨道交通信号与控制专业。但就铁路方向而言，关键的ZD6型转辙机的教学存在：设备昂贵难得；操作场地受限；教学模式传统等问题。影响了教学质量。本系统以3D建模软件Blender对ZD6型转辙机进行细致建模，再由Unity3D为其搭建平台，最后与OculusVR设备进行连接，对应解决上述三个问题。</span
              >
            </div>
          </el-card>
        </div>
      </div>
      <div class="button">
        <a href="http://119.23.189.220:666/view/ZD6项目.zip">下载项目</a>
      </div>
    </div>
    <fooer_home></fooer_home>
  </div>
</template>

<script>
import nav_home_login from "@/components/nav_home_login.vue";
import fooer_home from "@/components/foter_home.vue";
export default {
  data() {
    return {
      data() {
        return {};
      },
      activeNames: ["1"],
      /* imgwrap: [
        {
          url: require("@/assets/Pedestrian-guidance-photo/Pedestrian-guidance-photo1.png"),
        },
        {
          url: require("@/assets/Pedestrian-guidance-photo/Pedestrian-guidance-photo2.png"),
        },
        {
          url: require("@/assets/Pedestrian-guidance-photo/Pedestrian-guidance-photo3.png"),
        },
        {
          url: require("@/assets/Pedestrian-guidance-photo/Pedestrian-guidance-photo4.png"),
        },
        {
          url: require("@/assets/Pedestrian-guidance-photo/Pedestrian-guidance-photo5.png"),
        },
      ], */
    };
  },
  components: {
    nav_home_login,
    fooer_home,
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    open() {
      this.$alert("运行文件已开始下载", "提示", {
        confirmButtonText: "继续",
        center: true,
      });
    },
  },
};
</script>

<style lang="less" scoped>
#theBigest {
  background: url("http://119.23.189.220:666/photo/home-background7-photo.jpg")
    no-repeat center center fixed;
  background-size: cover;
}
img {
  height: 100%;
  width: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.section-top h2 {
  text-align: center;
  margin: 5vh 0 10vh 0;
}
.section-Collapse {
  margin: 10vh auto 0 auto;
  width: 70vw;
}
.section-Collapse h3 {
  text-align: center;
  margin: 10vh auto;
}
.section-top {
  margin: 0 auto;
  width: 70vw;
  font-size: 30px;
}
.button {
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  margin-bottom: 20vh;
}
.button .el-button {
  padding: 4vh 4vw;
}
/deep/ .el-collapse * {
  background-color: rgba(2, 233, 233, 0.3);
}
h3 {
  font-size: 25px;
}
/deep/ .el-collapse-item__header {
  font-size: 20px;
}
a {
  text-decoration: none;
  color: black;
  font-size: 20px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10%;
}
a:hover {
  background-color: rgb(81, 130, 209);
}
.section-middle{
    width: 70vw;
    margin: 0 auto;
}

</style>
