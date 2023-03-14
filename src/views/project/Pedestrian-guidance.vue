<template>
  <div id="theBigest">
    <nav_home_login></nav_home_login>
    <div class="section">
      <div class="section-top">
        <h2>杨家湾行人引导虚拟仿真项目</h2>
      </div>

      <div class="section-middle">
        <el-carousel :interval="4000" type="card" height="50vh">
          <el-carousel-item v-for="item in imgwrap" :key="item">
            <img :src="item.url" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="section-Collapse">
        <div class="inducation">
          <el-card class="box-card">
            <div>
              <h2>实验简介</h2>

              <span
                >本项目在学生完成自动化类专业基础课程后，为完成《城市轨道交通信号》
                课程实验而设计，以深圳11号线真实数据为基础构建实验场景。实验项目具体
                可从专业技能、资源共享、实验覆盖面和使用率三个目的来分析。</span
              >
            </div>
          </el-card>
        </div>
      </div>
      <div class="button">
        <a href='http://119.23.189.220:666/view/行人引导.zip'>下载项目</a>
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
      imgwrap: [
        {
          url:"http://119.23.189.220:666/photo/Pedestrian-guidance-photo1.png",
        },
        {
          url:"http://119.23.189.220:666/photo/Pedestrian-guidance-photo2.png",
        },
        {
          url:"http://119.23.189.220:666/photo/Pedestrian-guidance-photo3.png",
        },
        {
          url:"http://119.23.189.220:666/photo/Pedestrian-guidance-photo4.png",
        },
        {
          url:"http://119.23.189.220:666/photo/Pedestrian-guidance-photo5.png",
        },
      ],
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
a{
  text-decoration: none;
  color: black;
  font-size: 20px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10%;
}
a:hover{
  background-color: rgb(81, 130, 209);
}
</style>
