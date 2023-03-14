<template>
  <el-row gutter="20">
      <el-col :span="8">
          <el-card shadow="hover">
              <div class="cardOne">
                  <img src="@/assets//admin_photo.png">
                  <div>
                      <p>{{nickname}}</p>
                      <p>超级管理员</p>
                  </div>
              </div>
              <div>
                  <p>上次登陆时间：2022-11-12</p>
                  <p>上次登陆地点：武汉</p>
              </div>
          </el-card>
      </el-col>
  </el-row>
</template>

<script>
export default {
    data(){
        return {
            nickname:'123'
        }
    }
}
</script>

<style lang='less' scoped>
.cardOne img{
    border-radius: 50%;
    width: 100%;
}
</style>