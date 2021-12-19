# 每日互动

## 一面
### 面试官提问
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

### 我的提问
1. 工作模式
双休

2. 部门
做oa、低代码平台，内部用户

3. 面评
基础扎实、vue原理清楚

## 二面
### 面试官提问
1. 自我介绍
2. 介绍 A 项目
3. A 项目中的投屏原理
4. HTTP、websocket 和 socket 的区别
> Socket

简单理解：Socket = IP地址 + 端口 + 协议。

具体来说，Socket是一套标准，它完成了对TCP/IP的高度封装，屏蔽网络细节以方便开发者更好地进行网络编程。

> WebSocket

WebSocket是一个持久化的协议，它是伴随 HTML5 而出的协议，用来解决 http 不支持持久化连接的问题。

总之，WebSocket 和 Socket 其实是两个东西，Socket 一个是网络编程的标准接口，而 WebSocket 是应用层通信协议。

但是，说 WebSocket 与 Socket 的差异更多说的是：WebSocket 与 HTTP 无状态被动协议的差异，或者说是 WebSocket 与 Ajax 轮询和 long poll 等实现实时信息传输方式的差异，这也是本文需要讨论的问题。

HTTP协议是被动的无状态协议，一个Request对应一个Response，每次Request，客户端都需要重复带上用于鉴别客户端身份的信息到服务端，且服务端无法主动推送消息给客户端。针对HTTP这种效率低、响应不及时、浪费通信带宽和服务端资源的情况，WebSocket应运而生，WebSocket采用一次请求，持久连接方式解决了反复校验客户端身份问题，服务端建立连接后可以主动推送消息给客户端，因此通信效率大大增加，同时也节约了客户端、服务端和网络资源。

详细请看[https://zhuanlan.zhihu.com/p/168140913](https://zhuanlan.zhihu.com/p/168140913)
1. 请求过程中如何保证数据安全
2. https 和 http 区别
- HTTP 明文传输，数据都是未加密的，安全性较差，HTTPS（SSL+HTTP） 数据传输过程是加密的，安全性较好。
- 使用 HTTPS 协议需要到 CA（Certificate Authority，数字证书认证机构） 申请证书，一般免费证书较少，因而需要一定费用。证书颁发机构如：Symantec、Comodo、GoDaddy 和 GlobalSign 等。
- HTTP 页面响应速度比 HTTPS 快，主要是因为 HTTP 使用 TCP 三次握手建立连接，客户端和服务器需要交换 3 个包，而
- HTTPS除了 TCP 的三个包，还要加上 ssl 握手需要的 9 个包，所以一共是 12 个包。
- http 和 https 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者是 443。
- HTTPS 其实就是建构在 SSL/TLS 之上的 HTTP 协议，所以，要比较 HTTPS 比 HTTP 要更耗费服务器资源

7. 介绍 B 项目
8. 小程序渲染原理
9.  给个方案（提交私密数据，既要安全性高，又要效率快，并发高）
他的提示：http、https、RSA、AES结合，定时请求https，将 RSA 和 AES 产生的密钥用http传输。

https://www.cnblogs.com/huanzi-qch/p/10913636.html

> RSA
RSA公开密钥密码体制是一种使用不同的加密密钥与解密密钥，“由已知加密密钥推导出解密密钥在计算上是不可行的”密码体制。

在公开密钥密码体制中，加密密钥（即公开密钥）PK 是公开信息，而解密密钥（即秘密密钥）SK是需要保密的。加密算法 E 和解密算法 D 也都是公开的。虽然解密密钥 SK 是由公开密钥 PK 决定的，但却不能根据 PK 计算出 SK。

> AES
AES的全称是Advanced Encryption Standard，意思是高级加密标准。它的出现主要是为了取代DES加密算法的

AES+RSA结合最佳实践
> 基本要求
- 保证传输数据的安全性
- 保证数据的完整性
- 能够验证客户端的身份
> 加解密流程
- 服务器端(server)和客户端(client)分别生成自己的密钥对
- server和client分别交换自己的公钥
- client生成AES密钥(aesKey)
- client使用自己的RSA私钥(privateKey)对请求明文数据(params)进行数字签名
- 将签名加入到请求参数中，然后转换为json格式
- client使用aesKey对json数据进行加密得到密文(data)
- client使用sever的RSA公钥对aesKey进行加密(encryptkey)
- 分别将data和encryptkey作为参数传输给服务器端
- 服务器端进行请求响应时将上面流程反过来即可

10. 1-3 年的规划
### 我的提问
1. 组织架构
oa 系统（内部）

2. 我可以负责的业务

## 三面
### 面试官提问
1. 自我介绍
2. 介绍 A 项目
3. 项目中结果
4. 在第一家公司的情况
5. 从第一家公司离职的原因
6. 在第二家公司的情况
7. 想从第二家公司离职的原因
8. 你的优点
9. 你的缺点
10. 你的薪资
### 我的提问
1. 组织架构
风控部门
- 审计部门
- xx部门
- 效能部门
3 名产品经理
3 名前端开发、1 名移动端开发
多名后端开发
不包括外包、实习、运维、测试、设计等。

2. 业务项目
- oa 系统
- 聊天软件-推推

