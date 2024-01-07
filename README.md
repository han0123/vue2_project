# Vue2后台项目

- 使用脚手架搭建项目的时候就是要使用node+webpack+淘宝镜像来进行搭建

  - 使用模板

  ~~~
  git clone https://gitee.com/panjiachen/vue-admin-template.git
  ~~~

  

- 了解文件包名

  - build:这个是webpack配置文件（一般很少修改这个文件）
  - mock：mock数据的文件夹，模拟的是家的mock数据，所以实际开发的时候，使用的是真的数据
  - node_modules文件夹：项目所依赖的包名
  - public：这个文件一般是放置的就是静态的文件，如果是webpack的话，那么就是将资源原封不动的打包到dist里面
  - src：文件夹（程序员源代码文件夹）
    - api：就是表示发送和请求的函数
    - assets文件夹：一般是放静态资源的
    - components文件夹：一般放置的是非路由组件（比如说头部公共组件）
    - App.vue:唯一的根组件，也就是vue当中的组件
    - main.js:程序的入口文件，也就是整个程序最先执行的文件
    - icons这个文件夹里面放置的是svg矢量图
    - layout：这里面放的是一些组件和混入（这个是页面的一个展示结构）
    - router：这个文件是路由相关的
    - store：这个是和vuex相关的文件
    - style：和样式有关
    - utils，一般是request.js是axios二次封装文件
    - views文件夹：里面放置的是路由组件
  - App.vue:根文件
  - main.js:入口文件
  - permission.js:和导航守卫有关
  - settings：项目配置项文件
  - babel.config.js：配置文件（babel相关）
  - package.json文件，就是项目名，项目启动方式，依赖文件
  - package.lock.json：这个是缓存文件
  - .env.production
  - .env.development

- 特殊的配置

  - src变成@

  ~~~
  //在jscongfig.js里面编写
  {
    "compilerOptions": {
      "target": "es5",
      "module": "esnext",
      "baseUrl": "./",
      "moduleResolution": "node",
      "paths": {
        "@/*": [
          "src/*"
        ]
      },
      "lib": [
        "esnext",
        "dom",
        "dom.iterable",
        "scripthost"
      ]
    }
  }
  ~~~

  - 关闭lint

  ~~~
  //在vue.config.js中编写
  lintOnSave:false,
  ~~~

  - babel

  ~~~
  //在babel.config.js
  
  module.exports = {
    presets: [
      '@vue/cli-plugin-babel/preset'
    ]
  }
  
  ~~~

  

  





- 首先是开始搭建项目的时候，就是使用cli（脚手架搭建）

~~~
npm create '项目名称'
//在下面勾选vue2
~~~

## vue-router

- 然后下载vue-router

~~~
npm i vue-router@3.5.3 //防止版本过高和vue不符
~~~

### vue-router的基本使用

- 







## vuex

- 下载vuex

~~~
npm i vuex@3
//这里要注意的是vue2是要使用的是vuex@3
//vue3下载的版本是4版本
~~~



- 开始定义接口，axios

- 开始搭建结构
- 