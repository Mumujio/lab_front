<template>
  <div>
    <div id="inducation">
      <div class="inducation-big">
        <div class="inducation-big-name">项目速览</div>
        <el-divider></el-divider>
        <div class="inducation-big-content">
          <div class="content7">
            <div class="div-img">
              <router-link to="/Smart">
                <img v-lazy="item.smartPhoto" alt="" />
              </router-link>

              <el-popover
                placement="top-start"
                title="项目介绍"
                width="200"
                trigger="hover"
                content="近些年来，我国交通事业不断发展，逐步由交通大国向交通强国迈进。培养与之需求相应的轨道交通方向的人才，多所高校已开设了轨道交通信号与控制专业。但就铁路方向而言，关键的ZD6型转辙机的教学存在：设备昂贵难得；操作场地受限；教学模式传统等问题。影响了教学质量。本系统以3D建模软件Blender对ZD6型转辙机进行细致建模，再由Unity3D为其搭建平台，最后与OculusVR设备进行连接，对应解决上述三个问题。"
              >
                <el-button
                  slot="reference"
                  icon="el-icon-view"
                  placement="right-end"
                ></el-button>
              </el-popover>
            </div>
          </div>
          <div class="content5">
            <div class="div-img">
              <router-link to="/ZD6">
                <img v-lazy="item.zd6Photo" alt=""
              /></router-link>
              <el-popover
                placement="top-start"
                title="项目介绍"
                width="200"
                trigger="hover"
                content="近些年来，我国交通事业不断发展，逐步由交通大国向交通强国迈进。培养与之需求相应的轨道交通方向的人才，多所高校已开设了轨道交通信号与控制专业。但就铁路方向而言，关键的ZD6型转辙机的教学存在：设备昂贵难得；操作场地受限；教学模式传统等问题。影响了教学质量。本系统以3D建模软件Blender对ZD6型转辙机进行细致建模，再由Unity3D为其搭建平台，最后与OculusVR设备进行连接，对应解决上述三个问题。"
              >
                <el-button
                  slot="reference"
                  icon="el-icon-view"
                  placement="right-end"
                ></el-button>
              </el-popover>
            </div>
          </div>
          <div class="content6">
            <div class="div-img">
              <router-link to="/Truck"
                ><img v-lazy="item.truckPhoto" alt=""
              /></router-link>
              <el-popover
                placement="top-start"
                title="项目介绍"
                width="200"
                trigger="hover"
                content="大型货车在转弯时容易发生卷人事故，但现有真正用于实际情况的解决方案主要以感应预警为主，存在防护不及时、不能有效阻止人员伤亡的问题。针对该问题，本系统利用热释电红外线(PIR,Passive Infra-Red)检测法实现人体检测， 并通过设计机械防护装置达到事故发生时物理隔绝人员卷入从而避免产生人员伤亡的目的。首先，本项目对大型货车转弯时发生卷人事故的主要原因进行分析与研究，得出本防护系统主要实现的功能与应用场所；其次，分析该防护系统所需人体识别功能的实现成本与检测精度，经综合原因确定基于热释电红外线法设计货车全盲区检测模块；然后，通过分析现有货车车体结构与事故场景设计可收放机械防护模块，并以人体检测模块数据为触发信号完成基于 STC89C52 单片机的控制模块设计，在发生事故时通过控制步进电机展开机械结构实现防护；最后， 基于现实数据利用 Unity3D 引擎搭建虚拟仿真实验场景，对防护系统的实时性、有效性进行分析与改进，并针对典型事故场景在真实环境中完成该防护系统有效性验证。实验结果表明：该系统在发生事故时，能有效防止人员卷入车底具有良好的防护效果。
"
              >
                <el-button
                  slot="reference"
                  icon="el-icon-view"
                  placement="right-end"
                ></el-button>
              </el-popover>
            </div>
          </div>

          <div class="content1">
            <div></div>
            <div class="div-img">
              <router-link to="/Automatic_control"
                ><img v-lazy="item.autoPhoto" alt=""
              /></router-link>
              <el-popover
                placement="top-start"
                title="项目介绍"
                width="200"
                trigger="hover"
                content="本项目在学生完成自动化类专业基础课程后，为完成《城市轨道交通信号》 课程实验而设计,以深圳11号线真实数据为基础构建实验场景。实验项目具体 可从专业技能、资源共享、实验覆盖面和使用率三个目的来分析。"
              >
                <el-button
                  slot="reference"
                  icon="el-icon-view"
                  placement="right-end"
                ></el-button>
              </el-popover>
            </div>
          </div>
          <div class="content2">
            <div></div>
            <div class="div-img">
              <router-link to="/Pedestrian_guidance">
                <img v-lazy="item.guidancePhoto" alt=""
              /></router-link>

              <el-popover
                placement="top-start"
                title="项目介绍"
                width="200"
                trigger="hover"
                content="本项目在学生完成自动化类专业基础课程后，为完成《城市轨道交通信号》 课程实验而设计，以深圳11号线真实数据为基础构建实验场景。实验项目具体 可从专业技能、资源共享、实验覆盖面和使用率三个目的来分析。"
              >
                <el-button
                  slot="reference"
                  icon="el-icon-view"
                  placement="right-end"
                ></el-button>
              </el-popover>
            </div>
          </div>
          <div class="content3">
            <div></div>
            <div class="div-img">
              <router-link to="/Device_control"
                ><img v-lazy="item.devicePhoto" alt=""
              /></router-link>
              <el-popover
                placement="top-start"
                title="项目介绍"
                width="200"
                trigger="hover"
                content="本项目在学生完成自动化类专业基础课程后，为完成《城市轨道交通信号》 课程实验而设计，以深圳11号线真实数据为基础构建实验场景。实验项目具体 可从专业技能、资源共享、实验覆盖面和使用率三个目的来分析。"
              >
                <el-button
                  slot="reference"
                  icon="el-icon-view"
                  placement="right-end"
                ></el-button>
              </el-popover>
            </div>
          </div>
          <div class="content4">
            <div></div>
            <div class="div-img">
              <router-link to="/Oculus"
                ><img v-lazy="item.OculusPhoto" alt=""
              /></router-link>
              <el-popover
                placement="top-start"
                title="项目介绍"
                width="200"
                trigger="hover"
                content="本项目在学生完成自动化类专业基础课程后，为完成《城市轨道交通信号》 课程实验而设计，以深圳11号线真实数据为基础构建实验场景。实验项目具体 可从专业技能、资源共享、实验覆盖面和使用率三个目的来分析。"
              >
                <el-button
                  slot="reference"
                  icon="el-icon-view"
                  placement="right-end"
                ></el-button>
              </el-popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      item: {
        smartPhoto: " http://119.23.189.220:666/photo/智能安防.png",
        zd6Photo: "http://119.23.189.220:666/photo/项目照片5.png",
        truckPhoto: "http://119.23.189.220:666/photo/项目图片6.png",
        autoPhoto: "http://119.23.189.220:666/photo/项目照片2.png",
        guidancePhoto: "http://119.23.189.220:666/photo/项目照片4.jpg",
        devicePhoto: "http://119.23.189.220:666/photo/项目照片1.jpg",
        OculusPhoto: "http://119.23.189.220:666/photo/项目照片3.jpg",
      },
    };
  },
};
</script>

<style lang="less" scoped>
#inducation {
  width: 100%;
}
.inducation-big {
  height: 100%;
  width: 80vw;
  margin: 10vh auto;
}
.inducation-big-name {
  height: 20vh;
  font-size: 3vw;
  font-family: "Microsoft YaHei";
  color: #0054a7;
  font-weight: 800;
  text-align: center;
  line-height: 15vh;
}
.inducation-big-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2.5vw;
}
img {
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: all 0.6s;
}
img:hover {
  transform: scale(1.4);
}
.div-img {
  height: 100%;
  position: relative;
}
.inducation-big-content div div:nth-child(1) {
  font-size: 1.5vw;
  text-align: center;
}
/deep/ .el-button {
  position: absolute;
  top: 50%;
  left: 0;
  background-color: rgb(223, 139, 139);
  opacity: 0.4;
  border: none;
}
/deep/ .el-button:hover {
  background-color: rgb(204, 186, 186);
  opacity: 0.8;
}
.inducation-big-content > div {
  border: 1px solid;
  border-radius: 5%;
  overflow: hidden;
}
</style>
