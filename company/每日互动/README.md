# 每日互动
## 面试官
1. 自我介绍
2. src herf区别
https://www.cnblogs.com/chri330dj/p/12401719.html
href 指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的联系。href 属性的值可以是任何有效文档的相对或绝对URL，包括片段标识符和JavaScript代码段。若在文档中添加 ，浏览器会识别该文档为 CSS 文件，就会并行下载资源并且不会停止对当前文档的处理。
> href用来建立与网络资源的联系，让当前标签能够链接到目标地址。


src指向外部资源的位置，在请求 src 资源时会将其指向的资源下载并应用到当前文档元素定义的位置(替换当前内容)。在浏览器下载，编译，执行这个文件之前页面的加载和处理会被暂停。
> src用来替换当前元素


3. link 和 @import 区别
4. 事件流
DOM2级事件规定的事件流包括三个阶段： （1）事件捕获阶段 （2）处于目标阶段 （3）事件冒泡阶段

详细请看[https://zhuanlan.zhihu.com/p/114276880](https://zhuanlan.zhihu.com/p/114276880)

5. 如何清除浮动，原理
6. 优雅降级和渐进增强
优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。 降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。

7. 伪数组
伪数组，就是像数组一样有 length 属性，也有 0 、 1 、 2 、 3 等属性的对象，看起来就像数组一样，但不是数组，比如 ? 常见的参数的参数 arguments，DOM 对象列表（比如通过 document.getElementsByTags 得到的列表），jQuery 对象（比如 $ ("div")）。

详细请看[https://www.cnblogs.com/chenpingzhao/p/4764791.html#:~:text=%E4%BC%AA%E6%95%B0%E7%BB%84%EF%BC%8C%E5%B0%B1%E6%98%AF%E5%83%8F%E6%95%B0%E7%BB%84%E4%B8%80%E6%A0%B7%E6%9C%89%20length%20%E5%B1%9E%E6%80%A7%EF%BC%8C%E4%B9%9F%E6%9C%89%200%20%E3%80%81%201%20%E3%80%81%202,%E5%B8%B8%E8%A7%81%E7%9A%84%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%82%E6%95%B0%20arguments%EF%BC%8CDOM%20%E5%AF%B9%E8%B1%A1%E5%88%97%E8%A1%A8%EF%BC%88%E6%AF%94%E5%A6%82%E9%80%9A%E8%BF%87%20document.getElementsByTags%20%E5%BE%97%E5%88%B0%E7%9A%84%E5%88%97%E8%A1%A8%EF%BC%89%EF%BC%8CjQuery%20%E5%AF%B9%E8%B1%A1%EF%BC%88%E6%AF%94%E5%A6%82%20%24%20%28%22div%22%29%EF%BC%89%E3%80%82](https://www.cnblogs.com/chenpingzhao/p/4764791.html#:~:text=%E4%BC%AA%E6%95%B0%E7%BB%84%EF%BC%8C%E5%B0%B1%E6%98%AF%E5%83%8F%E6%95%B0%E7%BB%84%E4%B8%80%E6%A0%B7%E6%9C%89%20length%20%E5%B1%9E%E6%80%A7%EF%BC%8C%E4%B9%9F%E6%9C%89%200%20%E3%80%81%201%20%E3%80%81%202,%E5%B8%B8%E8%A7%81%E7%9A%84%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%82%E6%95%B0%20arguments%EF%BC%8CDOM%20%E5%AF%B9%E8%B1%A1%E5%88%97%E8%A1%A8%EF%BC%88%E6%AF%94%E5%A6%82%E9%80%9A%E8%BF%87%20document.getElementsByTags%20%E5%BE%97%E5%88%B0%E7%9A%84%E5%88%97%E8%A1%A8%EF%BC%89%EF%BC%8CjQuery%20%E5%AF%B9%E8%B1%A1%EF%BC%88%E6%AF%94%E5%A6%82%20%24%20%28%22div%22%29%EF%BC%89%E3%80%82)

7. 伪数组转化为普通数组
Array.from() 可以通过以下方式来创建数组对象：

伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）

详细请看[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

8. 宏任务和微任务
9.  水平垂直居中方式
10. vue 模板编译原理
11. vue diff 算法
12. keep-alive 原理
13. vue 如何检测数组变化
14. 低代码平台，做了什么

## 我的提问
1. 工作模式
双休

2. 部门
做oa、低代码平台，内部用户

3. 面评
基础扎实、vue原理清楚
