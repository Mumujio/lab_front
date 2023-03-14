<template>
  <div id="homebgr-photo" v-lazy:background-image="img">
    <component :is="navName"></component>
    <radiophoto></radiophoto>
    <dynamic></dynamic>
    <inducation_home></inducation_home>
    <foter_home></foter_home>
  </div>
</template>

<script>
import nav_home from "@/components/nav_home.vue";
import radiophoto from "@/components/radiopoto._home.vue";
import inducation_home from "@/components/inducation_home.vue";
import el_calendar_home from "@/components/el_calendar_home.vue";
import foter_home from "@/components/foter_home.vue";
import nav_home_login from "@/components/nav_home_login.vue";
import dynamic from "@/components/dynamic.vue";
export default {
  data() {
    return {
      navName: "nav_home",
      // img: "http://119.23.189.220:666/photo/背景图.png",
      img: "http://119.23.189.220:666/photo/onbackground.jpg",
    };
  },
  components: {
    nav_home,
    radiophoto,
    inducation_home,
    el_calendar_home,
    foter_home,
    nav_home_login,
    dynamic,
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

<style>
#homebgr-photo {
  /* background:url("@/assets/home-backgroundPhoto/home-background2-photo.png") no-repeat center center fixed; */
  background: no-repeat center center fixed;
  background-size: cover;
  background-color: #f5f5f5;
}
</style>
