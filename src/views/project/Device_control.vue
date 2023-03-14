<template>
  <div id="theBigest">
    <nav_home_login></nav_home_login>
    <div class="section">
      <div class="section-top">
        <h2> “城市轨道交通”背景下电气 设备联锁控制设计</h2>
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
                >本项目在学生完成自动化类专业基础课程后，为完成《城市轨道交通信号》 课程实验而设计，以深圳11号线真实数据为基础构建实验场景。实验项目具体 可从专业技能、资源共享、实验覆盖面和使用率三个目的来分析。</span
              >
            </div>
          </el-card>
        </div>
        <div>
          <h3>实验步骤（点击可展开）</h3>
        </div>
        <el-collapse v-model="activeNames" @change="handleChange" accordion>
          <el-collapse-item title="模块一" name="1">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>1 电气设备原理与拆装模块</span>
              </div>
              <div>
                <ul>
                  <li>1.1.1 转辙机子展示模块</li>
                  <li>1.1.2 转辙机子模块</li>
                  <li>1.2.1 出站兼调车信号机</li>
                  <li>1.2.2 调车信号机</li>
                  <li>1.2.3 矮型五灯位</li>
                  <li>1.2.4 高柱五灯位</li>
                </ul>
              </div>
            </el-card>
          </el-collapse-item>
          <el-collapse-item title="模块二" name="2">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>2 电气设备布置与命名模块</span>
              </div>
              <div>
                <ul>
                  <li>2.1 转辙机子模块设备安装</li>
                  <li>2.2 信号机子模块设备安装</li>
                  <li>2.3 转辙机子模块设备命名</li>
                  <li>2.4 信号机子模块设备命名</li>
                </ul>
              </div>
            </el-card>
          </el-collapse-item>
          <el-collapse-item title="模块三" name="3">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>3 电气设备逻辑电路设计模块</span>
              </div>
              <div>
                <ul>
                  <li>3.1 单动道岔（ZD6型）四线制控制电路</li>
                  <li>3.2 单动道岔（ZD6型）六线制控制电路</li>
                  <li>3.3 双动道岔（ZD6型）六线制控制电路</li>
                  <li>3.4 单动道岔（S700K型）控制电路</li>
                  <li>3.5 进站信号机控制电路</li>
                  <li>3.6 调车信号机控制电路</li>
                
                </ul>
              </div>
            </el-card>
          </el-collapse-item>
          <el-collapse-item title="模块四" name="4">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>4 联锁表编制模块</span>
              </div>
              <div>
                <ul>
                  <li>4.1 接车进路连锁表</li>
                  <li>4.2 发车进路连锁表</li>
                  <li>4.3 调车进路连锁表</li>
                  
                </ul>
              </div>
            </el-card>
          </el-collapse-item>
          <el-collapse-item title="模块五" name="5">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>5 设备室内控制设备主机布设实验</span>
              </div>
              <div>
                <ul>
                  <li>5.1 接车进路</li>
                  <li>5.2 发车进路</li>
                  <li>5.3 调车进路</li>
                </ul>
              </div>
            </el-card>
          </el-collapse-item>
          <el-collapse-item title="模块六" name="6">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>6  开放模块(暂时不支持网页运行，建议下载模块进行本地实验)</span>
              </div>
              <div>
                  <ul>
                  <li>6.1 正线模拟开放模块</li>
                  <li>6.2 车辆段模拟开放模块</li>
                </ul>
              </div>
            </el-card>
          </el-collapse-item>
         
         
        </el-collapse>
      </div>
      <div class="button">
        <el-button type="primary" @click="open">开始实验</el-button>
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
        { url:"http://119.23.189.220:666/photo/Device-control-photo1.png"},
        { url:"http://119.23.189.220:666/photo/Device-control-photo2.png"},
        { url:"http://119.23.189.220:666/photo/Device-control-photo3.png"},
        { url:"http://119.23.189.220:666/photo/Device-control-photo4.png"},
        { url:"http://119.23.189.220:666/photo/Device-control-photo5.png"},
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
      this.$alert(
        "该实验需要再次登录进行实验，账号密码及网址已给出",
        "注意！！",
        {
          confirmButtonText: "继续",
          center: true,
        }
      ).then(() => {
        this.$alert(
          "账号:201821095002 密码:gdjtxnfzsys 网址:http://82.157.25.61/users/login/",
          "注意！！",
          {
            confirmButtonText: "确认",
            center: true,
          }
        );
      });
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
.button{
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  margin-bottom:20vh ;
}
.button .el-button{
  padding: 4vh 4vw;
}
/deep/ .el-collapse *{
  background-color:rgba(2, 233, 233, 0.3);
}
h3{
  font-size: 25px;
}
/deep/ .el-collapse-item__header{
  font-size: 20px;
}
</style>
