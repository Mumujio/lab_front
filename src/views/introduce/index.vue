<template>
  <div>
    <component :is='navName'></component>
    <div class="mainContent">
        <div class="mainContent_left">
          <div class="Overview">实验室概况</div>
          <div class="inducation" ><a href="#" @click="jugeContent = 'inducation'">实验室简介</a></div>
          <div class="team"><a href="#" @click="jugeContent = 'team'">实验室团队</a></div>
          <div class="tech"><a href="#"  @click="jugeContent = 'tech'">师资队伍</a></div>
        </div>
        <div class="mainContent_right">
          <component :is="jugeContent"></component>
        </div>
    </div>
    <fooer_home></fooer_home>
  </div>
</template>

<script>
import nav_home from "@/components/nav_home.vue"
import fooer_home from "@/components/foter_home.vue";
import nav_home_login from '@/components/nav_home_login.vue'
import inducation from "@/components/introduce-content/inducation.vue"
import team from "@/components/introduce-content/team.vue"
import tech from "@/components/introduce-content/tech.vue"
export default {
    data(){
        return{
            navName:'nav_home',
            jugeContent:inducation
        }
    },
    components:{
        nav_home_login,
        fooer_home,
        nav_home,
        inducation,
        team,
        tech
    },
  mounted(){
    //相当于 window.onload 
        this.$nextTick(() =>{

        // 获取token值 判断渲染nav
          const token =localStorage.getItem('token')
        if(token) this.navName = 'nav_home_login'
        else this.navName = 'nav_home'

      })
  },
  updated(){

  },
  methods:{

  }
    
}
</script>

<style lang="less" scoped>
.mainContent{
    width:80vw;
    margin: 10vh auto;
    display: flex;
    justify-content: space-around;
}
.mainContent_left{
  display: flex;
  flex-direction: column;
  width: 15%;
}
.mainContent_right{
  width: 75%;
}
.Overview{
  background-color:#1A68B1;
  color: white;
  text-align: center;
  padding: 2vw;
  font-size: 1.5vw;
}
.inducation,.team,.tech{
  font-size: 1vw;
  padding: 1.0vw;
  border-bottom: 1px dashed #bfbfbf;
  a{
    text-decoration: none;
    color: black;
  }
  a:hover{
    color:#1A68C0;
  }
}
.inducation:hover,.team:hover,.tech:hover{
  background-color: #F4F4F4
}


</style>