const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭SourceMap文件打包，减少打包文件的体积
  productionSourceMap:false
})
