<template>
  <div id="theBigest">
    <nav_home_login></nav_home_login>
    <div class="section">
      <div class="section-top">
        <h2>基于虚拟仿真技术的ZD6转辙机安装平台</h2>
      </div>

      <div class="section-middle">
        <div class="video-content1">
            <div class="text">货车右转事故展示动画</div>
            <video
          src="http://119.23.189.220:666/view/货车右转事故展示动画.mp4"
          style="width: 100%; height: 100%"
          controls="controls"
          loop="loop"
          muted="muted"
        ></video>
        </div>
        <div class="video-content2">
            <div class="text">机械结构运行原理展示动画</div>
            <video
          src="http://119.23.189.220:666/view/机械结构运作原理展示动画.mp4"
          style="width: 100%; height: 100%"
          controls="controls"
          loop="loop"
          muted="muted"
        ></video>
        </div>
        <div class="video-content3">
            <div class="text">实物系统展开视频</div>
            <video
          src="http://119.23.189.220:666/view/实物系统展开视频.mp4"
          style="width: 100%; height: 100%"
          controls="controls"
          loop="loop"
          muted="muted"
        ></video>
        </div>
        <div class="video-content4">
            <div class="text">系统流程仿真演示动画</div>
            <video
          src="http://119.23.189.220:666/view/系统流程仿真演示动画.mp4"
          style="width: 100%; height: 100%"
          controls="controls"
          loop="loop"
          muted="muted"
        ></video>
        </div>
        
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
                >大型货车在转弯时容易发生卷人事故，但现有真正用于实际情况的解决方案主要以感应预警为主，存在防护不及时、不能有效阻止人员伤亡的问题。针对该问题，本系统利用热释电红外线(PIR,Passive Infra-Red)检测法实现人体检测， 并通过设计机械防护装置达到事故发生时物理隔绝人员卷入从而避免产生人员伤亡的目的。首先，本项目对大型货车转弯时发生卷人事故的主要原因进行分析与研究，得出本防护系统主要实现的功能与应用场所；其次，分析该防护系统所需人体识别功能的实现成本与检测精度，经综合原因确定基于热释电红外线法设计货车全盲区检测模块；然后，通过分析现有货车车体结构与事故场景设计可收放机械防护模块，并以人体检测模块数据为触发信号完成基于 STC89C52 单片机的控制模块设计，在发生事故时通过控制步进电机展开机械结构实现防护；最后， 基于现实数据利用 Unity3D 引擎搭建虚拟仿真实验场景，对防护系统的实时性、有效性进行分析与改进，并针对典型事故场景在真实环境中完成该防护系统有效性验证。实验结果表明：该系统在发生事故时，能有效防止人员卷入车底具有良好的防护效果。
</span
              >
            </div>
          </el-card>
        </div>
      </div>
      <div class="button">
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
    display: grid;
    grid-template-columns: repeat(2,50%);
    grid-gap:7vh 2vw;
}
.text{
  font-size: 2.5vw;
  text-align: center;
  border:1px solid #fff;
  font-weight: 600;
}

</style>
