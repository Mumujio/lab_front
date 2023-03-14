<template>
  <div class="theBiggest">
    <div class="contentLeft">
      <div class="leftTitle">科研动态</div>
      <div class="leftMain">
        <div class="leftRadiopoto">
          <el-carousel
            indicator-position="outside"
            arrow="always"
            :interval="6000"
            style="width: 100%"
            @change="leftChange"
          >
            <el-carousel-item v-for="(item, inedx) in imgwrapLeft" :key="inedx">
              <img v-lazy="item.url" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 左部分文字切换区域 -->
        <div class="leftInducation" v-if="leftNow == 0">
          <div class="leftInducation_name">2022-07-05</div>
          <div class="tit">
            <router-link to="#"
              >2022年中南民族大学大学生省级创新创业训练计划项目</router-link
            >
          </div>
          <p class="leftInducation_text">
            经专家评审，校内公示。由梅舒畅为负责人，张婕，毛俊飞，崔佳辉，刘少阳为成员的团队，以转辙机虚拟安装教学平台为课题，成功立项为省级2022年中南民族大学大学生创新创业训练计划项目。
          </p>
          <div><router-link to="#">查看更多</router-link></div>
        </div>
        <div class="leftInducation" v-if="leftNow == 1">
          <div class="leftInducation_name">2022-07-05</div>
          <div class="tit">
            <router-link to="#"
              >2022年中南民族大学大学生国家级创新创业训练计划项目</router-link
            >
          </div>
          <p class="leftInducation_text">
            经专家评审，校内公示。由王定坤为负责人，张婕，梅舒畅，段春平，牟海东为成员的团队，以基于“智慧城市”理念的智慧校园与可视化管理平台为课题，成功立项为国家级2022年中南民族大学大学生创新创业训练计划项目。
          </p>
          <div><router-link to="#">查看更多</router-link></div>
        </div>
        <div class="leftInducation" v-if="leftNow == 2">
          <div class="leftInducation_name">2022-07-05</div>
          <div class="tit">
            <router-link to="#"
              >2022年中南民族大学大学生省级创新创业训练计划项目</router-link
            >
          </div>
          <p class="leftInducation_text">
            经专家评审，校内公示。由牟俊华为负责人，牟海东，揭棋凯，李世龙，熊程琛为成员的团队，以一种货车内轮差防护的智能机械设计为课题，成功立项为省级2022年中南民族大学大学生创新创业训练计划项目。
          </p>
          <div><router-link to="#">查看更多</router-link></div>
        </div>
        <div class="leftInducation" v-else-if="leftNow == 3">
          <div class="leftInducation_name">2022-07-05</div>
          <div class="tit">
            <router-link to="#">光谷资产项目</router-link>
          </div>
          <div class="leftInducation_text">
            该项目是由本实验室承包的，为光谷资产房产开发的虚拟展示平台
          </div>
        </div>
        <div class="leftInducation" v-else-if="leftNow == 4">
          <div class="leftInducation_name">4</div>
          <div class="tit">
            <router-link to="#"
              >2022年中南民族大学大学生省级创新创业训练计划项目</router-link
            >
          </div>
          <div class="leftInducation_text"></div>
        </div>
      </div>
      <div class="leftFoter">
        <ul>
          <li>
            <div class="date">
              <b>10</b>
              2022-09
            </div>
            <h3>
              <router-link to="#">召开2022上半学年第二次全体会议</router-link>
            </h3>
            <p>
              2022年9月10日，召开中南民族大学虚拟仿真实验室第二次全体会议。主要检查了21级同学暑假的学习成果，并且进行项目进展的交流
            </p>
          </li>
          <li>
            <div class="date">
              <b>3</b>
              2022-09
            </div>
            <h3>
              <router-link to="#">召开2022上半学年第一次全体会议</router-link>
            </h3>
            <p>
              2022年9月3日，召开中南民族大学虚拟仿真实验室第二次全体会议。主要检查了21级同学暑假的学习成果，并且进行项目进展的交流
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="contentRight">
      <div class="rightTitle">成果动态</div>
      <div class="rightMain">
        <div class="leftRadiopoto">
          <el-carousel
            indicator-position="outside"
            arrow="always"
            :interval="6000"
            style="width: 100%"
            @change="rightChange"
          >
            <el-carousel-item
              v-for="(item, inedx) in imgwrapRight"
              :key="inedx"
            >
              <img v-lazy="item.url" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="rightFoter">
        <div class="rightInducation" v-if="rightNow == 0">
          <h2>喜获国家级三等奖！！</h2>
          <p>
            《一种货车内轮差防护的智能机械装置》为主题，喜获“华展物流杯”第十七届全国大学生交通运输科技大赛国家级三等奖！获奖实验室成员：牟海东、牟俊华、熊程琛、揭棋凯、李世龙
          </p>
        </div>
        <div class="rightInducation" v-if="rightNow == 1">
          <h2>喜获中南地区二等奖！！</h2>
          <p>
            《基于虚拟仿真技术的ZD6转辙机安装平台》为主题，喜获第十五届中国大学生计算机设计大赛中南地区赛贰等奖！获奖实验室成员：王定坤、梅舒畅、乔曜苓
          </p>
        </div>
        <div class="rightInducation" v-if="rightNow == 2">
          <h2>优秀结项！！！</h2>
          <p>
            《校园实景建模的虚拟仿真交互平台》为主题，喜获中南民族大学2022大学生创新创业训练计划“优秀项目奖”！获奖实验室成员：王定坤、李诺、牟海东、梅舒畅、张婕
          </p>
        </div>
        <div class="rightInducation" v-if="rightNow == 3">
          <h2>国家级创新训练项目顺利结项！！</h2>
          <p>
            《校园实景建模的虚拟仿真交互平台》为主题，中南民族大学2022大学生创新创业训练计划，国家级创新训练项目顺利结项！获奖实验室成员：王定坤、李诺、牟海东、梅舒畅、张婕
          </p>
        </div>
        <div class="rightInducation" v-if="rightNow == 4">
          <h2>校级创新训练项目顺利结项！！</h2>
          <p>
            《基于django的轨道交通虚拟仿真综合教育平台》为主题，中南民族大学2022大学生创新创业训练计划，校级创新训练项目顺利结项！获奖实验室成员：韦丽殿、戴一凡、杨海涛、方小丫
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftNow: "",
      rightNow: "",
      imgwrapLeft: [
        { url: "http://119.23.189.220:666/photo/梅书畅大创立项.png" },
        { url: "http://119.23.189.220:666/photo/王定坤大创立项.png" },
        { url: "http://119.23.189.220:666/photo/交科赛大创立项.jpg" },
        { url: "http://119.23.189.220:666/photo/光谷资产项目.png" },
        { url: "http://119.23.189.220:666/photo/home_radio_photo7.png" },
      ],
      imgwrapRight: [
        { url: "http://119.23.189.220:666/photo/交科赛.jpg" },
        { url: "http://119.23.189.220:666/photo/梅舒畅计赛.png" },
        { url: "http://119.23.189.220:666/photo/王定坤优秀结项.png" },
        { url: "http://119.23.189.220:666/photo/王定坤大创结项.png" },
        { url: "http://119.23.189.220:666/photo/方小丫大创结题.png" },
      ],
    };
  },
  methods: {
    // 幻灯片切换时，对应文字区域的切换
    leftChange(a) {
      this.leftNow = a;
    },
    rightChange(a) {
      this.rightNow = a;
    },
  },
};
</script>

<style lang="less" scoped>
.theBiggest {
  display: flex;
  width: 70vw;
  height: 100%;
  margin: 10vh auto;
  .contentLeft {
    display: flex;
    flex-direction: column;
    flex: 1.5;
    margin-right: 2vw;
    .leftTitle {
      height: 100%;
      font-size: 1.5vw;
      font-family: "Microsoft YaHei";
      color: #0054a7;
      padding-bottom: 4vh;
      font-weight: 800;
    }
    .leftMain {
      width: 100%;
      display: flex;
      margin-bottom: 2vh;
      .leftRadiopoto {
        flex: 1;
      }
      .leftInducation {
        flex: 1.2;
        padding-left: 2vw;
        .leftInducation_name {
          color: #808080;
          padding-top: 2vh;
          font-size: 1.1vw;
        }
        .tit {
          font-weight: bold;
          font-size: 1.4vw;
          text-decoration: none;
          color: #333333;
          padding-bottom: 2vh;
          border-bottom: 1px solid #ebebeb;
          a {
            color: #333333;
          }
        }
        .leftInducation_text {
          margin: 3vh 0;
          color: #808080;
          font-size: 1vw;
          line-height: 2.2vh;
        }
      }
    }
    .leftFoter {
      li:hover {
        .date b {
          background-color: #0054a7;
        }
      }
      li {
        position: relative;
        height: 15vh;
        padding-left: 8vw;
        .date {
          position: absolute;
          left: 0;
          width: 5.5vw;
          border: 1px solid #cccccc;
          text-align: center;
          line-height: 2.5vh;
          font-size: 1vw;
          color: #666666;
          b {
            display: block;
            color: #fff;
            background: #cccccc;
            font-size: 3vw;
            height: 5.5vw;
            line-height: 5.5vw;
            font-weight: bold;
          }
        }
        h3 {
          font-weight: bold;
          font-size: 1.4vw;
          a {
            color: #333333;
          }
          margin-bottom: 2vh;
        }
        p {
          color: #808080;
          font-size: 1vw;
          line-height: 2.2vh;
        }
      }
    }
  }
  .contentRight {
    flex: 1;
    flex-direction: column;
    .rightTitle {
      font-size: 1.5vw;
      font-family: "Microsoft YaHei";
      color: #0054a7;
      padding-bottom: 4vh;
      font-weight: 800;
    }
    .rightFoter {
      .rightInducation {
        padding-top: 2vh;
        h2 {
          margin-bottom: 2vh;
          font-size: 1.5vw;
          text-align: center;
          color: rgb(202, 14, 14);
        }
        p {
          font-size: 1vw;
          line-height: 3vh;
          color: #808080;
        }
      }
    }
  }
}
ul,
li,
h3,
h2 {
  list-style: none;
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

router-link {
  text-decoration: none;
}
</style>
