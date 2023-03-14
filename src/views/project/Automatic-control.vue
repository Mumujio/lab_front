<template>
  <div id="theBigest">
    <nav_home_login></nav_home_login>
    <div class="section">
      <div class="section-top">
        <h2>2020城市轨道交通正线列车自动控制系统综合设计</h2>
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
                课程实验而设计，以深圳11号线真实数据为基础构建实验场景。实验项目具体可从专业技能、资源共享、实验覆盖面和使用率三个目的来分析</span
              >
            </div>
          </el-card>
        </div>
        <div>
          <h3>实验步骤（点击可展开）</h3>
        </div>
        <el-collapse v-model="activeNames" @change="handleChange" accordion>
          <el-collapse-item title="步骤一" name="1">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>1 列车自动控制原理与计算实验</span>
              </div>
              <div>
                <ul>
                  <li>1.1 站间闭塞原理与计算实验</li>
                  <li>1.2 固定闭塞原理与计算实验</li>
                  <li>1.3 移动闭塞原理与计算实验</li>
                </ul>
              </div>
            </el-card>
          </el-collapse-item>
          <el-collapse-item title="步骤二" name="2">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>2 线路运营能力计算实验</span>
              </div>
              <div>
                <ul>
                  <li>2.1 线路主要运营能力的计算</li>
                </ul>
              </div>
            </el-card>
          </el-collapse-item>
          <el-collapse-item title="步骤三" name="3">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>3 轨行区自动控制设备布设实验</span>
              </div>
              <div>
                <ul>
                  <li>3.1 计轴设备布设实验</li>
                  <li>3.2 转辙机设备布设实验</li>
                  <li>3.3 信号机设备布设实验</li>
                  <li>3.4 应答器设备布设实验</li>
                  <li>3.5 计轴设备编号与命名实验</li>
                  <li>3.6 信号机设备编号与命名实验</li>
                  <li>3.7 应答器设备编号与命名实验</li>
                </ul>
              </div>
            </el-card>
          </el-collapse-item>
          <el-collapse-item title="步骤四" name="4">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>4 功能区自动控制设备布设实验</span>
              </div>
              <div>
                <ul>
                  <li>4.1 紧急停车按钮布设实验</li>
                  <li>4.2 发车计时器布设实验</li>
                  <li>4.3 紧急停车按钮编号与命名实验</li>
                  <li>4.4 发车计时器编号与命名实验</li>
                </ul>
              </div>
            </el-card>
          </el-collapse-item>
          <el-collapse-item title="步骤五" name="5">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>5 设备室内控制设备主机布设实验</span>
              </div>
              <div>
                <ul>
                  <li>5.1 控制室设备布设实验</li>
                  <li>5.2 车控室设备布设实验</li>
                  <li>5.3 设备线缆路径实验</li>
                </ul>
              </div>
            </el-card>
          </el-collapse-item>
          <el-collapse-item title="步骤六" name="6">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>6 列车自动控制逻辑多层流程图实验</span>
              </div>
              <div></div>
            </el-card>
          </el-collapse-item>
          <el-collapse-item title="步骤七" name="7">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>7 列车自动控制连锁表编制实验</span>
              </div>
              <div>
                <ul>
                  <li>7.1 接车进路</li>
                  <li>7.2 发车进路</li>
                  <li>7.3 调车进路</li>
                </ul>
              </div>
            </el-card>
          </el-collapse-item>
          <el-collapse-item title="步骤八" name="8">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>8 工作站台控制界面与控制流程认识实验</span>
              </div>
              <div>
                <ul></ul>
              </div>
            </el-card>
          </el-collapse-item>
          <el-collapse-item title="步骤九" name="9">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>9 工作站常用调度命令下发与操作实验</span>
              </div>
              <div>
                <ul>
                  <li>9.1 折返命令</li>
                  <li>9.2 临时车站扣车命令</li>
                  <li>9.3 临时区间限制命令</li>
                </ul>
              </div>
            </el-card>
          </el-collapse-item>
          <el-collapse-item title="步骤十" name="10">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>10 常见故障分析与处理办法</span>
              </div>
              <div>
                <ul>
                  <li>10.1 降级模式切换</li>
                  <li>10.2 转辙机功率曲线分析</li>
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
      activeNames: ["1"],
      imgwrap: [
        { url:"http://119.23.189.220:666/photo/Automatic-control-photo1.png"},
        { url:"http://119.23.189.220:666/photo/Automatic-control-photo2.png"},
        { url:"http://119.23.189.220:666/photo/Automatic-control-photo3.png"},
        { url:"http://119.23.189.220:666/photo/Automatic-control-photo4.png"},
        { url:"http://119.23.189.220:666/photo/Automatic-control-photo5.png"},
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
  background: url("http://119.23.189.220:666/photo/home-background4-photo.png")
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
