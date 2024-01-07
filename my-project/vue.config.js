const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      // 统一请求前缀
      "/dev-api":{
        target:'http://sph-h5-api.atguigu.cn',
        changeOrigin: true,
        // 这里是重写
        pathRewrite:{
          "dev-api":""
        }
      },
      "api":{
        target:'http://sph-h5-api.atguigu.cn',
        changeOrigin: true,
      }
    }
  }
})
