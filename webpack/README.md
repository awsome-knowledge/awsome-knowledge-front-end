# awsome-knowledge-front-end
## 目录
1. [gulp和webpack的区别(海康二面)](#gulp和webpack的区别)
2. [webpack的loader和plugin有什么区别](#webpack的loader和plugin有什么区别)
3. [做项目的时候，用webpack-dev-server起的热刷新和node自己写的http协议搭建服务，这两者有什么区别吗？](#做项目的时候用webpackdevserver起的热刷新和node自己写的http协议搭建服务这两者有什么区别吗)
4. [用webpack进行哪些性能方面的优化](#用webpack进行哪些性能方面的优化)
5. [怎么用webpack进行按需加载](#怎么用webpack进行按需加载)
6. [webpack配置：（几个重要参数）](#webpack配置几个重要参数)
7. [style-loader和css-loader的区别](#loader)
8. [你说一下webpack的一些plugin，怎么使用webpack对项目进行优化](#webpack-optimition)
9. 

## 题目

### Webpack

1. #### gulp和webpack的区别
`gulp` 是以文件流的形式打包，`webpack` 是模块化打包，找到一个入口文件，顺着这个入口文件找到所有依赖模块进行打包。

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

2. #### webpack的loader和plugin有什么区别
`loader` 用于加载某些资源文件。 因为 `webpack` 本身只能打包 `commonjs` 规范的 `js` 文件，
对于其他资源例如 `css`，图片，或者其他的语法集，比如 `jsx`， `coffee`，是没有办法加载的。 
这就需要对应的 `loader` 将资源转化，加载进来。

`plugin` 用于扩展 `webpack` 的功能。功能更加的丰富，不仅局限于资源的加载。

总结：`loader` 用于加载待打包的资源，`plugin` 用于扩展 `webpack`。

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

3. #### 做项目的时候用webpackdevserver起的热刷新和node自己写的http协议搭建服务这两者有什么区别吗
没啥区别。`dev-server` 也是一个轻量级的 `node.js express` 服务器，实际上相当于是一个封装好的 `express` 的 `http` 服务器+调用 `webpack-dev-middleware`。

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

4. #### 用webpack进行哪些性能方面的优化
最好不要回答压缩，`webpack` 本身就是压缩。

可以回答模块异步加载、按需加载（`require.ensure`）

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

5.  #### 怎么用webpack进行按需加载
`require.ensure`

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

6. #### webpack配置几个重要参数
`entry`（入口）
`output`（出口）
加载器 `loader`
插件 `plugin`

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

7. #### <div id="loader"></div>style-loader和css-loader的区别
- `css-loader`: 加载 `.css` 文件

- style-loader:使用 `<style>` 将 `css-loader` 内部样式注入到我们的 `HTML` 页面

`webpack` 的配置文件、怎么打包 `css` 文件
加入 `css` 模块，还需要在前引入相应的 `style-loader`, `css-loader`(关键点)

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

8. ####  <div id="webpack-optimition"></div>你说一下webpack的一些plugin，怎么使用webpack对项目进行优化
- 构建优化
1. 减少编译体积 ContextReplacementPugin、IgnorePlugin、babel-plugin-import、babel-plugin-transform-runtime。
2. 并行编译 happypack、thread-loader、uglifyjsWebpackPlugin开启并行
3. 缓存 cache-loader、hard-source-webpack-plugin、uglifyjsWebpackPlugin开启缓存、babel-loader开启缓存
4. 预编译 dllWebpackPlugin && DllReferencePlugin、auto-dll-webapck-plugin

- 性能优化
1. 减少编译体积 Tree-shaking、Scope Hositing。
2. hash缓存 webpack-md5-plugin
3. 拆包 splitChunksPlugin、import()、require.ensure

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

9. #### 简单说一下项目中webpack plugin的应用
简单说一下项目中webpack plugin的应用(字节跳动)

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

10. #### webpack 打包优化, webpack 哪里打包慢
webpack 打包优化 webpack 哪里打包慢(字节跳动)
[webpack打包优化解决方案](https://segmentfault.com/a/1190000011138081#articleHeader0)

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

1.  #### <div id="chunkHashAndcontentHash"></div>webpack 中 chunkHash 与 contentHash 区别（百度）

chunkHash触发来为每个chunk生成hash。

chunkhash是根据打包过程中当前chunk计算出的hash值。如果Webpack配置是多入口配置，那么通常会生成多个chunk，每个chunk对应的出口filename获得的chunkhash是不一样的。这样可以保证打包后每一个JS文件名都不一样

contenthash有点像chunkhash，是根据打包时CSS内容计算出的hash值。一般在使用提取CSS的插件的时候，我们使用contenthash。

https://www.jiangruitao.com/webpack/hash-chunkhash-contenthash/

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

1.  #### <div id="webpackCss"></div>webpack 将 css 合并成一个（百度）
mini-css-extract-plugin这个插件可以完成该功能

引入插件，const MiniCssExtractPlugin = require('mini-css-extract-plugin');

MiniCssExtractPlugin.loade取代style-loader。作用：提取js中的css成单独文件

```js
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 创建style标签，将样式放入
          // 'style-loader', 
          // 这个loader取代style-loader。作用：提取js中的css成单独文件
          MiniCssExtractPlugin.loader,
          // 将css文件整合到js文件中
          'css-loader'
        ]
      } 
    ]
  },

```
https://blog.csdn.net/weixin_44523860/article/details/105530018

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

5.  #### <div id="webpackImage"></div>webpack 处理 image 是用哪个 loader，限制成 image 大小的是（百度）
webpack 可以用使用url-loader  将静态图片转化为 base64 编码的字符串，并内联在对应的脚本中。大幅度地较少了页面的请求数，所以在开发阶段可以无限制地使用。


控制图片质量，压缩图片大小
为了和 url-loader 配合，引入image-webpack-loader ，同时配置图片的 loader


https://www.jb51.net/article/161272.htm

---

[[↑] 回到顶部](#awsome-knowledge-front-end)
