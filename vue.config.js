let my_proxy = false
if (JSON.parse(process.env.VUE_APP_PROXY)) {
  let my_url = process.env.VUE_APP_BASE_URL
  my_proxy = {
    '/api': {
      target: my_url + "/api", //这里后台的地址模拟的;应该填写你们真实的后台接口
      ws: true,
      changOrigin: true, //允许跨域
      pathRewrite: {
        '^/api': '' //请求的时候使用这个api就可以
      }
    }
  }
}
module.exports = {
  // baseUrl: '/', // 构建好的文件输出到哪里(页面空白的话改为./)
  outputDir: 'dist', // 打包生成目录
  publicPath: './', //同 baseUrl 但比它优先级高
  lintOnSave: true, // 使用带有浏览器内编译器的完整构建版本 
  runtimeCompiler: false, // babel-loader默认会跳过`node_modules`依赖. // 通过这个选项可以显示转译一个依赖
  transpileDependencies: [
    /* string or regex */
  ], // 是否为生产环境构建生成sourceMap?
  productionSourceMap: false, // 调整内部的webpack配置.
  chainWebpack: () => {},
  configureWebpack: () => {}, // CSS 相关选项
  css: {
    // 将组件内部的css提取到一个单独的css文件（只用在生产环境）
    extract: process.env.NODE_ENV !== 'development',
    sourceMap: false,
    loaderOptions: {},
    modules: false
  },
  parallel: require("os").cpus().length > 1,
  pwa: {},
  devServer: {
    open: true, //是否自动在浏览器打开
    host: "0.0.0.0",
    // disableHostCheck:true,//处理host不识别问题
    port: 8088,
    https: false,
    hotOnly: false,
    proxy: my_proxy // string | Object
    // before: app => {}
  }, // 第三方插件配置

  pluginOptions: {
    // 打包时忽略的资源
  }
};