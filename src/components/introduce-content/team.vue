<template>
<div>
    <h2>实验室团队</h2>
    <el-divider></el-divider>
    <div class="team-main">
      <div>
        <p>实验室负责人：王定坤</p>
      </div>
      <div class="team1">
        <div class="team1-photo"><img src="" alt=""></div>
        <div class="team1-content">
          <h3>一、建模组</h3>
          <p>组长：牟俊华</p>
          <p>组员：钱锦、揭棋凯、熊程琛、段春平、李世龙、张浩然、李卓、孙伊辰，陈凌锋</p>
          <div>
            <h4>小组简介</h4>
            <p>建模组主要负责项目的建模，以及模型的贴图，场景搭建，模型材质打包。协助UE4和UNITY小组成员，将模型以及各种材质导入到交互软件里面，即完成项目前的资源准备。</p>
          </div>
        </div>
      </div>
      <div class="team2">
        <div class="team1-photo"><img src="" alt=""></div>
        <div class="team1-content">
          <h3>二、Unity组</h3>
          <p>组长：牟海东</p>
          <p>组员：梅书畅，张婕，毛俊飞，崔家辉，刘少阳</p>
          <div>
            <h4>小组简介</h4>
            <p>unity组主要工作方向是实时3D互动内容创作和运营，包括游戏逻辑开发、渲染、素材管理、场景编辑等</p>
          </div>
        </div>
      </div>
      <div class="team3">
        <div class="team1-photo"><img src="" alt=""></div>
        <div class="team1-content">
          <h3>三、UE4组</h3>
          <p>组长：侯乐航</p>
          <p>组员：陆世、马震洋、符超、郭家泰、李阳</p>
          <div>
            <h4>小组简介</h4>
            <p>Ue4小组是学习以ue4为基础，配合3dmax等建模软件进行开发应用，实现交互和渲染等虚拟仿真技术的技术小组</p>
          </div>
        </div>
      </div>
      <div class="team4">
        <div class="team4-content">
          <div class="team4-photo"><img src="" alt=""></div>
          <h3>四、网站与视频组</h3>
          <p>组长：林卓</p>
          <p>组员：熊耀阳、华杨炼、申骁</p>
          <div>
            <h4>小组简介</h4>
            <p>网站与视频组主要负责实验室网站的建设与维护，以及与实验室其它团队相协作，完成实验室项目、比赛视频、实验室介绍视频的拍摄与剪辑</p>
          </div>
        </div>
      </div>
      
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
h2 {
  color: #565656;
}
h3{
  margin: 0.5vh 0;
}
h4{
  margin-top: 0.5vh;
}
.team-main{
  display: flex;
  flex-direction:column;
  .team1{
    display: flex;
  }
}
</style>