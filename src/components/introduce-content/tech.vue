<template>
  <div>
    <h2>师资队伍</h2>
    <el-divider></el-divider>
    <div class="mainContent">
      <div class="tabAll">
        <el-table :data="tableData" border="true" style="width: 100%">
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="title" label="职称" width="180">
          </el-table-column>
          <el-table-column prop="labor" label="分工"> </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "孔德龙",
          title: "工程师",
          labor: "总设计、需求分析与在线教学服务",
        },
        {
          name: "王黎",
          title: "讲师",
          labor: "程序设计、网站搭建与技术支持",
        },
        {
          name: "张志俊",
          title: "高级工程师",
          labor: "需求分析、交互设计",
        },
        {
          name: "胡万欣",
          title: "讲师",
          labor: "需求分析、原理设计与在线教学服务",
        },
        {
          name: "赵飞宇",
          title: "讲师",
          labor: "程序设计、三维仿真与技术支持",
        },
        {
          name: "田微",
          title: "教授",
          labor: "评价设计、交互设计",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
h2 {
  color: #565656;
}
</style>
