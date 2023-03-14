<template>
  <div class="theBiggest">
    <component :is="navName"></component>
    <div class="iframe-content">
      <h2>ZD6转辙机拆装实验台</h2>
      <iframe
        id="unity-infame"
        ref="iframeDom"
        src="http://119.23.189.220:666/view/unity/ZD6webgl/index.html"
        frameborder="0"
        scrolling="no"
        width="100%"
        height="100%"
      ></iframe>
    </div>

    <foter_home></foter_home>
  </div>
</template>

<script>
import nav_home from "@/components/nav_home.vue";
import nav_home_login from "@/components/nav_home_login.vue";
import foter_home from "@/components/foter_home.vue";
export default {
  data() {
    return {
      navName: "nav_home",
    };
  },
  components: {
    nav_home,
    nav_home_login,
    foter_home,
  },
  mounted() {
    //相当于 window.onload
    this.$nextTick(() => {
      // 获取token值 判断渲染nav
      const token = localStorage.getItem("token");
      if (token) this.navName = "nav_home_login";
      else this.navName = "nav_home";
    });
  },
};
</script>

<style lang="less" scoped>

.theBiggest {
  background: url("http://119.23.189.220:666/photo/home-background5-photo.png")
    no-repeat center center fixed;
  background-size: cover;
}
.iframe-content{
  margin: 0 auto;
  height: 150vh;
  text-align: center;
  h2{
    font-size:2vw
  }
}
</style>
