# 做项目的时候，用webpack-dev-server起的热刷新和node自己写的http协议搭建服务，这两者有什么区别吗？
没啥区别。dev-server也是一个轻量级的node.js express服务器，实际上相当于是一个封装好的express的http服务器+调用webpack-dev-middleware