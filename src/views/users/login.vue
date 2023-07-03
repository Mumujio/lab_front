<template>
  <div>
    <div class="login-name">
      <h1>中南民族大学</h1>
      <h2>轨道交通虚拟仿真实验室</h2>
    </div>

    <body>
      <div class="loginBox">
        <h2>登录</h2>
        <form action="">
          <div class="item">
            <input type="text" v-model.trim="username" />
            <label for="">userName</label>
          </div>
          <div class="item">
            <input type="password" v-model.trim="password" />
            <label for="">password</label>
          </div>
          <button class="btn" @click="login" type="button">
            login
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button class="btn1" @click="enroll" type="button">注册</button>
        </form>
      </div>
    </body>

    <div class="video-source">
      <h2>背景视频来源于本实验室UE4作品</h2>
    </div>

    <video
      src="@/assets/view/ue5Video.mp4"
      style="
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      "
      autoplay="autoplay"
      loop="loop"
      muted="muted"
    ></video>
  </div>
</template>

<script>
import axios from "axios";
//qs 模块可以将js对象转换为字符串
import qs from "qs";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    //登录验证
    async login() {
      //后台登陆验证
      if (this.username === "mumujioadmin" && this.password === "qpzm7913..@") {
        this.$router.push("/admin/index");
        localStorage.setItem("token", "Bearer adminmumujiologing");
        this.$alert("登陆成功", "提示", {
          confirmButtonText: "确定",
          center: true,
        });
        return;
      }
      //用户登陆验证
      //res为后台返回的登录信息
      const { data: res } = await axios({
        method: "POST",
        url: "http://119.23.189.220:3007/api/login",
        //配置 application/x-www-form-urlencoded格式请求 参考（https://www.cnblogs.com/edwardwzw/p/11694903.html）
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: qs.stringify({
          username: this.username,
          password: this.password,
        }),
      });
      //登陆成功
      if (res.status === 0) {
        localStorage.setItem("token", res.token);
        this.$router.push("/");
        //this.$alert为element-ui组件 MessageBox 弹框
        this.$alert("登陆成功", "提示", {
          confirmButtonText: "确定",
          center: true,
        });
      }
      //登陆失败
      else {
        localStorage.removeItem("token");
        //this.$alert为element-ui组件 MessageBox 弹框
        this.$alert(res.message, "登陆失败", {
          confirmButtonText: "确定",
          center: true,
        });
        (this.username = ""), (this.password = "");
      }
    },
    //注册功能
    enroll() {
      this.$router.push("/enroll");
    },
  },
};
</script>

<style scoped>
/* 以下为标题部分 */
h1 {
  text-align: center;
  color: rgb(240, 46, 21);
  font-family: "Times New Roman", Times, serif;
  font-size: 4vw;
}
.login-name h2 {
  text-align: center;
  color: #b8d5f1;
  font-size: 2.5vw;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.login-name {
  position: absolute;
  top: 10%;
  left: 36%;
}

/* 以下为底部字体样式 */
.video-source {
  position: absolute;
  right: 3%;
  bottom: 2%;
  color: rgb(114, 29, 148);
  border-bottom: 1px solid red;
}

video-source
/* 以下为登录模块样式 */
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

input,
button {
  background: transparent;
  border: 0;
  outline: none;
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #03e9f4;
}

.loginBox {
  width: 400px;
  height: 364px;
  background-color: #1e3653;
  opacity: 0.8;
  margin: 100px auto;
  border-radius: 10px;
  box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.6);
  padding: 40px;
  box-sizing: border-box;
}

.loginBox h2 {
  text-align: center;
  color: aliceblue;
  margin-bottom: 30px;
  font-family: "Courier New", Courier, monospace;
}

.item {
  height: 45px;
  border-bottom: 1px solid #fff;
  margin-bottom: 40px;
  position: relative;
}

.item input {
  width: 100%;
  height: 100%;
  color: #fff;
  padding-top: 20px;
  box-sizing: border-box;
}

.item input:focus + label,
.item input:valid + label {
  top: 0px;
  font-size: 2px;
}

.item label {
  position: absolute;
  left: 0;
  top: 12px;
  transition: all 0.5s linear;
}

.btn {
  padding: 10px 20px;
  margin-top: 30px;
  color: #03e9f4;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 2px;
  left: 35%;
}
.btn1 {
  padding: 10px 20px;
  margin-top: 30px;
  color: #03e9f4;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 2px;
  left: 49%;
}

.btn:hover,
.btn1:hover {
  border-radius: 5px;
  color: #fff;
  background: #03e9f4;
  box-shadow: 0 0 5px 0 #03e9f4, 0 0 25px 0 #03e9f4, 0 0 50px 0 #03e9f4,
    0 0 100px 0 #03e9f4;
  transition: all 1s linear;
}

.btn > span {
  position: absolute;
}

.btn > span:nth-child(1) {
  width: 100%;
  height: 2px;
  background: -webkit-linear-gradient(left, transparent, #03e9f4);
  left: -100%;
  top: 0px;
  animation: line1 1s linear infinite;
}

@keyframes line1 {
  50%,
  100% {
    left: 100%;
  }
}

.btn > span:nth-child(2) {
  width: 2px;
  height: 100%;
  background: -webkit-linear-gradient(top, transparent, #03e9f4);
  right: 0px;
  top: -100%;
  animation: line2 1s 0.25s linear infinite;
}

@keyframes line2 {
  50%,
  100% {
    top: 100%;
  }
}

.btn > span:nth-child(3) {
  width: 100%;
  height: 2px;
  background: -webkit-linear-gradient(left, #03e9f4, transparent);
  left: 100%;
  bottom: 0px;
  animation: line3 1s 0.75s linear infinite;
}

@keyframes line3 {
  50%,
  100% {
    left: -100%;
  }
}

.btn > span:nth-child(4) {
  width: 2px;
  height: 100%;
  background: -webkit-linear-gradient(top, transparent, #03e9f4);
  left: 0px;
  top: 100%;
  animation: line4 1s 1s linear infinite;
}

@keyframes line4 {
  50%,
  100% {
    top: -100%;
  }
}
img {
  height: 100%;
}
</style>
