const { defineConfig } = require('@vue/cli-service')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭SourceMap文件打包，减少打包文件的体积
  productionSourceMap: false,
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()],
  }
})

function injectCDN(config) {
  // 非生产环境，不启用CDN
  if(process.env.NODE_ENV !== 'production') return

  config.set('externals', assetsCDN.externals)

  config.plugin('html').tap(args => {
      args[0].cdn = assetsCDN
      return args
  })
}
/**
 * 静态CDN文件
 */
const assetsCDN = {
  externals: {
      // 左侧key为项目中引入的名称，右侧value为包对外提供的名称
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      'element-ui': 'ELEMENT'
  },
  css: [
      '//cdn.jsdelivr.net/npm/element-ui@2.15.0/lib/theme-chalk/index.css'
  ],
  js: [
      '//cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js',
      '//cdn.jsdelivr.net/npm/vue-router@3.4.9/dist/vue-router.min.js',
      '//cdn.jsdelivr.net/npm/vuex@3.6.0/dist/vuex.min.js',
      '//cdn.jsdelivr.net/npm/echarts@5.3.0/dist/echarts.min.js',
      '//cdn.jsdelivr.net/npm/element-ui@2.15.0/lib/index.js'
  ]
}
