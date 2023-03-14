<template>
  <div id="theBigest">
    <nav_home_login></nav_home_login>
    <div class="section">
      <div class="section-top">
        <h2> 基于Oculus的虚拟驾驶仿真系统</h2>
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
      
      <div class="section-add">
          <el-empty description="仍在建设中"></el-empty>
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
   
  },
};
</script>

<style lang="less" scoped>
#theBigest {
  background: url("http://119.23.189.220:666/photo/home-background8-photo.jpg")
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
.el-empty{
    margin: 0 auto;
    width: 70vw;
    height: 60vw;
    background-color: white;
    opacity: 0.6;
}
.section-add{
    margin: 10vh 0 20vh 0;
}
</style>
