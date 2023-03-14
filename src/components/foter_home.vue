<template>
    <div>
        <div class="foter">
            <div class="foter-one">
                <div><img src="@/assets//footer-photo/7-201120093I2B0.jpg" alt=""></div>
                <div class="text">建设单位：中南民族大学</div>
                <div class="text">学校首页：http://www.scuec.edu.cn</div>
                <div class="text">计算机科学学院首页：http://www.scuec.cn/jky/</div>
                <div class="text">
                    <span>建设地址：武汉市洪山区民族大道182号       </span>
                    <span>邮编：4340074</span>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .foter{
        height: 100%;
        background-color:white;
        
    }
    .foter-one{
        
        width: 60vw;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 10vh;
    }
    img{
        height: 100%;
    }
    .foter-one div:nth-child(1){
        height: 40vh;
        display: flex;
        justify-content: center;
    }
    .foter-one .text{
        text-align: center;
        font-size: 14px;
        opacity: 0.5;
        
    }
</style>