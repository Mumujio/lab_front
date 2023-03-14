<template>
  <div>
    <el-carousel indicator-position="outside" arrow="always" :interval="4000">
      <el-carousel-item v-for="(item,inedx) in imgwrap" :key="inedx">
        <img v-lazy="item.url"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    data(){
        return{
            imgwrap:[
              {url:"http://119.23.189.220:666/photo/智能安防.png"},
                {url:"http://119.23.189.220:666/photo/home_radio_photo2.png"},
                {url:"http://119.23.189.220:666/photo/home_radio_photo3.png"},
                {url:"http://119.23.189.220:666/photo/home_radio_photo6.png"},
                {url:"http://119.23.189.220:666/photo/home_radio_photo7.png"}
            ]
        }
    }

};
</script>

<style lang='less' scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

img{
 
    width: 100%;
    height: 100%;
}
/deep/ .el-carousel__container{
height: 100vh;
}
/deep/ .el-carousel__button { // 默认按钮的颜色大小等
  width: 36px;
  height: 8px;
  border: none;
  border-radius: 20px;
  background: #b1a8a8;
  opacity: 1;
}
/deep/ .is-active .el-carousel__button { // 选中图片的颜色
  background: #8d0510;
  opacity: 1;
}
/deep/ .el-carousel__indicators--outside{
  background-color: rgb(255, 255, 255);
}



</style>
