<template>
  <div>
    <div class="about">
      <div class="about_text">
        <h2>关于实验室</h2>
        <el-divider content-position="center">轨道交通虚拟仿真实验室</el-divider>
        <div>
          随着我国轨道交通行业的快速发展，为适应专门人才需求。《普通高等学校本科专业目录（2012年）》在自动化大类中增设了“轨道交通信号与控制”专业，培养城市轨道交通自动控制领域的高端技能型专门人才。从只有八所铁道高校开设该专业发展为有近百所本科高校陆续开设了该专业。该专业本科实验教育教学面临的问题主要为：
          大多数高校专业开设时间较短，师资短缺、实验资源匮乏；
          真实现场受制于安全因素不对外开放，无法实现校企合作教学；
          实验设备普遍体积较大、价格昂贵，操作具有一定危险性；
          系统应用场景无法在实验室重现，实验效果差；
          已有线上虚拟仿真实验项目尚无城市轨道交通相关内容。
        </div>
      </div>
      <div class="about_video">
        <video
          src="@/assets/UE5制作别墅.mp4"
          style="width: 100%; height: 100%"
          controls="controls"
          loop="loop"
          muted="muted"
        ></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about {
  width: 60vw;
  height: 100%;
  margin: 0 auto;
  margin-top: 20vh;
  margin-bottom: 30vh;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  display: flex;
  padding:20vh 0 30vh 0;
}
.about_text{
    flex:1;
    padding-right: 2vw;
}
.about_text h2{
    font-size: 40px;
}
.about_text>div{
    font-size: 20px;
    color: aqua;
}
.about_video{
    flex:1;
}

</style>
