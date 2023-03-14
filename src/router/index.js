import Vue from "vue";
import VueRouter from "vue-router";

import login from "@/views/users/login.vue";
import Home from "@/views/users/home.vue";
import progressIndex from "@/views/progress/index.vue";
import Automatic_control from "@/views/project/Automatic-control.vue";
import enroll from "@/views/users/enroll.vue";
import Pedestrian_guidance from "@/views/project/Pedestrian-guidance.vue";
import Device_control from "@/views/project/Device_control.vue";
import Oculus from "@/views/project/Oculus.vue";
import admin from "@/views/admin/index.vue";
import userControl from "@/views/admin/userControl.vue";
import prive from "@/views/prive/index.vue";
import techTeam from "@/views/techTeam/index.vue";
import ZD6 from "@/views/project/ZD6.vue";
import Truck from "@/views/project/Truck-collision-avoidance.vue";
import Smart from "@/views/project/smart-security.vue";
import ExperienceSmart from "@/views/experience/smart-security.vue";
import Introduce from "@/views/introduce/index.vue";
import progressZd6 from "@/views/progress/progress_ZD6.vue";
import progressSmart from "@/views/progress/progeress_Smart.vue";
Vue.use(VueRouter);
/* const login = () =>
    import ("@/views/users/login.vue");
const Home = () =>
    import ("@/views/users/home.vue");
const progressIndex = () =>
    import ("@/views/progress/index.vue");
const Automatic_control = () =>
    import ("@/views/project/Automatic-control.vue");
const enroll = () =>
    import ("@/views/users/enroll.vue");
const Pedestrian_guidance = () =>
    import ("@/views/project/Pedestrian-guidance.vue");
const Device_control = () =>
    import ("@/views/project/Device_control.vue");
const Oculus = () =>
    import ("@/views/project/Oculus.vue");
const admin = () =>
    import ("@/views/admin/index.vue");
const userControl = () =>
    import ("@/views/admin/userControl.vue");
const prive = () =>
    import ("@/views/prive/index.vue");
const techTeam = () =>
    import ("@/views/techTeam/index.vue");
const ZD6 = () =>
    import ("@/views/project/ZD6.vue");
const Truck = () =>
    import ("@/views/project/Truck-collision-avoidance.vue");
const Smart = () =>
    import ("@/views/project/smart-security.vue");
const ExperienceSmart = () =>
    import ("@/views/experience/smart-security.vue");
const Introduce = () =>
    import ("@/views/introduce/index.vue");
const progressZd6 = () =>
    import ("@/views/progress/progress_ZD6.vue");
const progressSmart = () =>
    import ("@/views/progress/progeress_Smart.vue"); */

const router = new VueRouter({
    /* mode: "history",
    base: process.env.BASE_URL, */
    //routes 是一个数组，作用：定义 Hash 与 组件的对应关系
    routes: [{
            path: "/login",
            component: login,
        },
        {
            path: "/",
            component: Home,
        },
        {
            path: "/progress/index",
            component: progressIndex,
        },
        {
            path: "/progress/ZD6",
            component: progressZd6,
        },
        {
            path: "/progress/Smart",
            component: progressSmart,
        },
        {
            path: "/Automatic_control",
            component: Automatic_control,
        },
        {
            path: "/enroll",
            component: enroll,
        },
        {
            path: "/Pedestrian_guidance",
            component: Pedestrian_guidance,
        },
        {
            path: "/Device_control",
            component: Device_control,
        },
        {
            path: "/Oculus",
            component: Oculus,
        },
        {
            path: "/admin/index",
            component: admin,
        },
        {
            path: "/admin/userControl",
            component: userControl,
        },
        {
            path: "/prive",
            component: prive,
        },
        {
            path: "/techTeam",
            component: techTeam,
        },
        {
            path: "/ZD6",
            component: ZD6,
        },
        {
            path: "/Truck",
            component: Truck,
        },
        {
            path: "/Smart",
            component: Smart,
        },
        {
            path: "/experience/smart",
            component: ExperienceSmart,
        },
        {
            path: "/Introduce",
            component: Introduce,
        },
    ],
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {y:0}
      }
});

/* 路由异常错误处理，尝试解析一个异步组件时发生错误，重新渲染目标页面 */
/* router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    const targetPath = router.history.pending.fullPath;
    if (isChunkLoadFailed) {
      router.replace(targetPath);
    }
  }); */
  
//导航守卫
router.beforeEach((to, from, next) => {
    if (
        to.path === "/Automatic_control" ||
        to.path === "/Device_control" ||
        to.path === "/Pedestrian_guidance" ||
        to.path === "/Oculus" ||
        to.path === "/admin" ||
        to.path === "/prive" ||
        to.path === "/ZD6" ||
        to.path === "/Truck" ||
        to.path === "/Smart" ||
        to.path === "/experience" ||
        to.path === "/progress/ZD6" ||
        to.path === "/progress/Smart"
    ) {
        const token = localStorage.getItem("token");
        if (token) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
});

export default router;