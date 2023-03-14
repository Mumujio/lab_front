<template>
  <div id="main">
    <h2>注册</h2>
    <div class="mainForm">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input
            type="text"
            v-model="ruleForm.userName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="name">
          <el-input v-model.number="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="enroll">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <video
      src="http://119.23.189.220:666/view/UE5制作别墅.mp4"
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
import qs from "qs";
export default {
  data() {
    var checkUserName = (rule, value, callback) => {
      const reg = /^(?![^A-Za-z]+$)(?![^0-9]+$)[0-9A-Za-z_]{4,15}$/;
      if (!value) {
        callback(new Error("用户名不能为空"));
      }
      //   验证用户名  用户名要求 数字、字母、下划线的组合，其中数字和字母必须同时存在*
      else if (reg.test(value)) {
        callback(new Error("输入正确"));
      } else
        callback(
          new Error(
            "用户名要求 数字、字母、下划线的组合，其中数字和字母必须同时存在"
          )
        );
    };
    var validatePass = (rule, value, callback) => {
      // 验证密码   密码，以字母开头，长度在8~18之间，只能包含字母、数字和下划线
      const reg = /^[a-zA-Z]\w{8,18}$/;
      if (!value) {
        callback(new Error("密码不能为空"));
      } else if (reg.test(value)) {
        callback(new Error("输入正确"));
      } else
        callback(
          new Error("以字母开头，长度在8~18之间，只能包含字母、数字和下划线")
        );
    };

    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback(new Error("输入正确"));
      }
    };
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      callback(new Error("输入正确"));
    };

    return {
      imageUrl: "",
      ruleForm: {
        userName: "",
        pass: "",
        checkPass: "",
        name: "",
        avatar: "",
      },
      rules: {
        userName: [
          { validator: checkUserName, trigger: "blur", required: true },
        ],
        pass: [{ validator: validatePass, trigger: "blur", required: true }],
        checkPass: [
          { validator: validatePass2, trigger: "blur", required: true },
        ],
        name: [{ validator: checkName, trigger: "blur", required: true }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    async enroll() {
      //res为后台返回的登录信息
      const { data: res } = await axios({
        method: "POST",
        url: "http://119.23.189.220:3007/api/reguser",
        //配置 application/x-www-form-urlencoded格式请求 参考（https://www.cnblogs.com/edwardwzw/p/11694903.html）
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: qs.stringify({
          username: this.ruleForm.userName,
          password: this.ruleForm.pass,
          name: this.ruleForm.name,
        }),
      });
      //注册成功
      if (res.status === 0) {
        this.$router.push("/login");
        //this.$alert为element-ui组件 MessageBox 弹框
        this.$alert("注册成功", "提示", {
          confirmButtonText: "确定",
          center: true,
        });
      }
      //注册失败
      else {
        //this.$alert为element-ui组件 MessageBox 弹框
        this.$alert(res.message, "注册失败", {
          confirmButtonText: "确定",
          center: true,
        });
        this.username = "";
        this.password = "";
      }
    },

    
  },
};
</script>

<style lang="less" scoped>
.mainForm {
  width: 90%;
}
h2 {
  font-size: 50px;
  color: rgb(138, 8, 108);
  text-align: center;
  padding-bottom: 20px;
}
#main {
  height: 60vh;
  background-color: rgba(1, 27, 11, 0.5);
  border: 1px solid rgb(197, 134, 134);
  width: 40vw;
  margin: 25vh auto 0 auto;
  border-radius: 10px;
  height: 100%;
}
.el-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.el-form-item {
  padding-bottom: 2vh;
}
/deep/ .el-form-item__label {
  color: rgb(146, 175, 98);
  font-weight: 800;
}


</style>
