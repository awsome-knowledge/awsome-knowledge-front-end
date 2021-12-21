# boss直聘
## 一面
### 面试官的提问
1. 自我介绍
2. electron 是什么
Electron是一个使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架。 嵌入 Chromium 和 Node.js 到 二进制的 Electron 允许您保持一个 JavaScript 代码代码库并创建 在Windows上运行的跨平台应用 macOS和Linux——不需要本地开发 经验。

3. electron 如何通讯
4. electron 如何优化
5. electron 卡顿怎么解决
6. A项目 前端开发人数
7. A项目 中你的定位
8. A项目 项目难点
图片、视频的展示组件的开发
扫描组件的开发
编辑器的开发

9.  B项目 中做了什么
10. B项目 中的技术难点
11. 如何实现深拷贝
https://juejin.cn/post/7013603488315736072

12. JSON.parse(JSON.stringify())实现深拷贝的问题
https://github.com/wengjq/Blog/issues/3

13. 遍历列表为何需要加上 key
14. vue 原理
15. object.defineproperty 方法不能使用的情况
16. 数组重写 push 这个方法在底层逻辑
17. vue 使用最多的设计模式
18. 观察者模式和发布订阅模式的区别
> 从表面上看：
-  观察者模式里，只有两个角色 —— 观察者 + 被观察者
-  而发布订阅模式里，却不仅仅只有发布者和订阅者两个角色，还有一个经常被我们忽略的 —— 经纪人Broker

> 往更深层次讲：
-  观察者和被观察者，是松耦合的关系
-  发布者和订阅者，则完全不存在耦合

> 从使用层面上讲：
-  观察者模式，多用于单个应用内部
-  发布订阅模式，则更多的是一种跨应用的模式(cross-application pattern)，比如我们常用的消息中间件

1.  事件循环
2.  BFC
BFC 即 Block Formatting Contexts (块级格式化上下文)，它属于上述定位方案的普通流。

具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。

通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。

只要元素满足下面任一条件即可触发 BFC 特性：

body 根元素
浮动元素：float 除 none 以外的值
绝对定位元素：position (absolute、fixed)
display 为 inline-block、table-cells、flex
overflow 除了 visible 以外的值 (hidden、auto、scroll)

详细请看[https://zhuanlan.zhihu.com/p/25321647](https://zhuanlan.zhihu.com/p/25321647)
19. 工作模式
20. 实现两栏布局，左侧固定，有几种方式

详细请看[https://blog.csdn.net/weixin_43026567/article/details/102498308](https://blog.csdn.net/weixin_43026567/article/details/102498308)
22. https是什么
HTTPS 协议是由 HTTP 加上 TLS/SSL 协议构建的可进行加密传输、身份认证的网络协议，主要通过数字证书、加密算法、非对称密钥等技术完成互联网数据传输加密，实现互联网传输安全保护。

详细请看[https://baike.baidu.com/item/https/285356](https://baike.baidu.com/item/https/285356)
21. 你的优点
22. 你的缺点
23. 接受加班吗
### 我的提问
1. 我有幸加入，任务规划
2. 杭州研发团队情况
刚成立

3. 工作模式
995弹性
## 二面
### 面试官的提问
1. 介绍 A 项目
2. A 项目难点
编写编辑器组件
4. A 项目如何实现设备投屏
5. A 项目如何连接安卓设备
6. A 项目如何连接 IOS 设备
7. adb 如何控制安卓设备
8. 投屏区域滑动如何实现
9. 投屏区域滑动方向
10. 投屏区域滑动快慢
11. 投屏区域滑动角度
12. 长按操作怎么实现
13. 浏览器请求 url 过程
14. no-cache 和 no-store
15. 跨域将 cookie 带到后端
16. addEventListener 的形参
17. 事件冒泡和捕获
18. event.target 和 event.currentTarget
19. 事件循环
20. promise 中使用闭包吗
21. promise 中哪里使用闭包
22. 这个执行结果是什么
```js
console.log(1)

setTimeout(() => {
    console.log(2)
    Promise.resolve().then(() => {
        console.log(3)
    })
});

new Promise((resolve, reject) => {
    console.log(4)
    resolve(5)
    Promise.resolve().then(() => console.log(8))
}).then((data) => {
    console.log(data)
})

setTimeout(() => {
    console.log(6)
});

console.log(7)

// 1
// 4
// 7
// 8
// 5
// 2
// 6
// 3
```

23. 写一个函数随机返回 min 和 max 的这个闭区间的任意值
```js
Math.random()*(m-n+1)+n
```
针对 `[2,32]` 呢，简单分析一波，random 是 0时，我们希望得到2；假设random可以是1，我们希望得算出一个33才行，这样向下取整就能包含32了。

根据上面的分析，所以我们得让random乘法得到一个31，然后再加一个2，应该这么写：
```js
Math.random() * 31 + 2;
```
[https://blog.csdn.net/a732894380/article/details/103378354](https://blog.csdn.net/a732894380/article/details/103378354)

1.  做桌面应用的技术选型
qt electron sw.js 
14. electron 主进程向渲染进程通信
15. electron 多窗口通信
16. electron 通信优化
17. electron 主进程调试
18. electron 主进程异常捕获
19. canvas 和 webGL 的区别
20. 重绘和回流
21. 跨域方式
22. flex 实现三个 div 平铺在一个父容器中，第一个和第二个靠左，第三个靠右，中间留白
23. 实现两个 div 垂直放在一个父容器中，第一个居中自适应，第二个贴底，用多种方式实现，哪种方式性能好
### 我的提问
1. 团队情况
需要新组建杭州分公司，10名前端，一个前端leader

2. 工作模式
10-10-5

3. 业务
开发 toB 项目，技术栈（electron、qt、vue、node、sqlite等），作为boss客户端给其他公司提供办公软件（视频面试、团队管理等）

4. 本职位具体工作
开发客户端

5. 工作规划
未来几年就是客户端的迭代开发

6. 培训机会
内部大前端视频培训

7. 晋升机会
职级跟薪资不挂钩

8. 杭州团队是否会有异动
不会
