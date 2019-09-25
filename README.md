# awsome-knowledge-front-end
## 目录
### [JavaScript](https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/javascript#awsome-knowledge-front-end)
### [Vue.js](https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/vue#awsome-knowledge-front-end)
### [Node.js](https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/node#awsome-knowledge-front-end)
### [Webpack](https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/webpack#awsome-knowledge-front-end)
### [CSS](https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/css#awsome-knowledge-front-end)
### [Html](https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/html#awsome-knowledge-front-end)
### [性能优化](https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/optimize#awsome-knowledge-front-end)
1. [项目中使用过哪些优化方法](#项目中使用过哪些优化方法)

### 计算机网络(https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/network#awsome-knowledge-front-end)

### 人事问题(https://github.com/awsome-knowledge/awsome-knowledge-front-end/tree/master/hr#awsome-knowledge-front-end)

## 题目

### Node.js

1. ####  [koa和express？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/node/node1.md)

[[↑] 回到顶部](#awsome-knowledge-front-end)

2. ####  js 中什么类型是引用传递, 什么类型是值传递? 如何将值类型的变量以引用的方式传递? 

<details><summary><b>答案</b></summary>
对象是引用传递，基础类型是值传递，通过将基础类型包装（boxing）可以以引用的方式传递

面试写代码的话, 可以通过 如何编写一个 `json 对象的拷贝函数 `等类似的问题来考察对引用的了解

== 的 === 的区别的了解. 然后再问 [1] == [1] 是 true 还是 false. 如果基础不好的同学可能会被自己对于 == 和 === 的结论影响然后得出错误的结论.
</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

3. ####  js 中， 0.1 + 0.2 === 0.3 是否为 true ? 在不知道浮点数位数时应该怎样判断两个浮点数之和与第三数是否相等？

<details><summary><b>答案</b></summary>
不相等，因为JS浮点数先转2进制再计算再转十进制的原因，会丢失精度，所以false了
尽量避免浮点数比较吧，如果非要比的话，我这边一般两种做法吧
一种是标准做法：
JS里，最大整数和最接近零的小数，分别是2的正负52次方
而最接近0的小数，也可以用Number.EPSILON表示
如果Math.abs((0.1+0.2)-0.3)< Number.EPSILON，就可以说他俩相等了
另外一种做法就，比较野鸡
比如算0.1+0.2，我就会(0.1+0.2).toFixed(15)*1
因为那个最接近0的小数，它其实是0.00..02xx，中间15个零
缺点嘛一方面toFixed肯定性能比人家自带的常量会差一点，而且如果真的有两个15位小数计算，toFixed这个有误差，而EPSILON无误差。优点就方便
实际情况的话，如果我抽成公共方法了，那我就用常量，如果临时写业务，可能就toFixed了，因为读代码比较方便易懂

</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

4. ####  const 定义的 Array 中间元素能否被修改? 如果可以, 那 const 修饰对象的意义是? 

<details><summary><b>答案</b></summary>
其中的值可以被修改. 意义上, 主要保护引用不被修改 (如用 Map 等接口对引用的变化很敏感, 使用 const 保护引用始终如一是有意义的), 也适合用在 immutable 的场景.

能修改，const相当于把栈里的数据锁死了，Array是个引用数据类型，只是锁死了地址，堆里面的数据依然可以随便改
</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

5. ####  JavaScript 中不同类型以及不同环境下变量的内存都是何时释放? 

<details><summary><b>答案</b></summary>
引用类型是在没有引用之后, 通过 v8 的 GC 自动回收, 值类型如果是处于闭包的情况下, 要等闭包没有引用才会被 GC 回收, 非闭包的情况下等待 v8 的新生代 (new space) 切换的时候回收.
你需要了解哪些操作一定会导致内存泄漏, 或者可以崩掉内存. 比如如下代码能否爆掉 V8 的内存?

let arr = [];
while(true)
  arr.push(1);
然后上述代码与下方的情况有什么区别?

let arr = [];
while(true)
  arr.push();
如果 push 的是 Buffer 情况又会有什么区别?

let arr = [];
while(true)
  arr.push(new Buffer(1000));
思考完之后可以尝试找找别的情况如何爆掉 V8 的内存. 以及来聊聊内存泄漏?

function out() {
  const bigData = new Buffer(100);
  inner = function () {
    void bigData;
  }
}
闭包会引用到父级函数中的变量，如果闭包未释放，就会导致内存泄漏。上面例子是 inner 直接挂在了 root 上，从而导致内存泄漏（bigData 不会释放）。详见[《如何分析 Node.js 中的内存泄漏》](https://zhuanlan.zhihu.com/p/25736931)
</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

6. ####  a.js 和 b.js 两个文件互相 require 是否会死循环? 双方是否能导出变量? 如何从设计上避免这种问题?

<details><summary><b>答案</b></summary>
不会, 先执行的导出其 未完成的副本, 通过导出工厂函数让对方从函数去拿比较好避免. 模块在导出的只是 var module = { exports: {...} }; 中的 exports, 以从 a.js 启动为例, a.js 还没执行完会返回一个 a.js 的 exports 对象的 未完成的副本 给 b.js 模块。 然后 b.js 完成加载，并将 exports 对象提供给 a.js 模块。

另外还有非常基础和常见的问题, 比如 module.exports 和 exports 的区别这里也能一并解决了 exports 只是 module.exports 的一个引用

再晋级一点, 众所周知, node 的模块机制是基于 CommonJS 规范的. 对于从前端转 node 的同学, 如果面试官想问的难一点会考验关于 CommonJS 的一些问题. 比如比较 AMD, CMD, CommonJS 三者的区别, 包括询问关于 node 中 require 的实现原理等.

[JavaScript 模块的循环加载](http://www.ruanyifeng.com/blog/2015/11/circular-dependency.html)
</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

7. ####  如果 a.js require 了 b.js, 那么在 b 中定义全局变量 t = 111 能否在 a 中直接打印出来?

<details><summary><b>答案</b></summary>

 每个 .js 能独立一个环境只是因为 node 帮你在外层包了一圈自执行, 所以你使用 t = 111 定义全局变量在其他地方当然能拿到. 情况如下:

```js
// b.js
(function (exports, require, module, __filename, __dirname) {
  t = 111;
})();

// a.js
(function (exports, require, module, __filename, __dirname) {
  // ...
  console.log(t); // 111
})();

```
</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

8. ####  如何在不重启 node 进程的情况下热更新一个 js/json 文件? 这个问题本身是否有问题?

<details><summary><b>答案</b></summary>
可以清除掉 require.cache 的缓存重新 require(xxx), 视具体情况还可以用 VM 模块重新执行.

当然这个问题可能是典型的 X-Y Problem, 使用 js 实现热更新很容易碰到 v8 优化之后各地拿到缓存的引用导致热更新 js 没意义. 当然热更新 json 还是可以简单一点比如用读取文件的方式来热更新, 但是这样也不如从 redis 之类的数据库中读取比较合理.

</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

9. ####  热更新

<details><summary><b>答案</b></summary>
从面试官的角度看, 热更新 是很多程序常见的问题. 对客户端而言, 热更新意味着不用换包, 当然也包含着 md5 校验/差异更新等复杂问题; 对服务端而言, 热更新意味着服务不用重启, 这样可用性较高同时也优雅和有逼格. 问的过程中可以一定程度的暴露应聘程序员的水平.

从 PHP 转 node 的同学可能会有些想法, 比如 PHP 的代码直接刷上去就好了, 并没有所谓的重启. 而 node 重启看起来动作还挺大. 当然这里面的区别, 主要是与同时有 PHP 与 node 开发经验的同学可以讨论, 也是很好的切入点.

在 Node.js 中做热更新代码, 牵扯到的知识点可能主要是 require 会有一个 cache, 有这个 cache 在, 即使你更新了 .js 文件, 在代码中再次 require 还是会拿到之前的编译好缓存在 v8 内存 (code space) 中的的旧代码. 但是如果只是单纯的清除掉 require 中的 cache, 再次 require 确实能拿到新的代码, 但是这时候很容易碰到各地维持旧的引用依旧跑的旧的代码的问题. 如果还要继续推行这种热更新代码的话, 可能要推翻当前的架构, 从头开始从新设计一下目前的框架.

不过热更新 json 之类的配置文件的话, 还是可以简单的实现的, 更新 require 的 cache 可以实现, 不会有持有旧引用的问题, 可以参见我 2 年前写着玩的[例子](https://www.npmjs.com/package/auto-reload), 但是如果旧的引用一直被持有很容易出现内存泄漏, 而要热更新配置的话, 为什么不存数据库? 或者用 zookeeper 之类的服务? 通过更新文件还要再发布一次, 但是存数据库直接写个接口配个界面多爽你说是不是?

所以这个问题其实本身其实是值得商榷的, 可能是典型的 X-Y Problem, 不过聊起来确实是可以暴露水平.
</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

10. ####  上下文

<details><summary><b>答案</b></summary>
如果你已经了解 ①② 那么你也应该了解, 对于 Node.js 而言, 正常情况下只有一个上下文, 甚至于内置的很多方面例如 require 的实现只是在启动的时候运行了内置的函数.

每个单独的 .js 文件并不意味着单独的上下文, 在某个 .js 文件中污染了全局的作用域一样能影响到其他的地方.

而目前的 Node.js 将 VM 的接口暴露了出来, 可以让你自己创建一个新的 js 上下文, 这一点上跟前端 js 还是区别挺大的. 在执行外部代码的时候, 通过创建新的上下文沙盒 (sandbox) 可以避免上下文被污染:
```js
'use strict';
const vm = require('vm');

let code =
`(function(require) {

  const http = require('http');

  http.createServer( (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\\n');
  }).listen(8124);

  console.log('Server running at http://127.0.0.1:8124/');
})`;

vm.runInThisContext(code)(require);
```
这种执行方式与 eval 和 Function 有明显的区别. 关于 VM 更多的一些接口可以先阅读[官方文档 VM (虚拟机)](https://nodejs.org/dist/latest-v6.x/docs/api/vm.html)
</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

11. ####  Promise 中 .then 的第二参数与 .catch 有什么区别?

<details><summary><b>答案</b></summary>
Promise.prototype.catch(onRejected)

添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。当这个回调函数被调用，新 promise 将以它的返回值来resolve，否则如果当前promise 进入fulfilled状态，则以当前promise的完成结果作为新promise的完成结果.

Promise.prototype.then(onFulfilled, onRejected)

添加解决(fulfillment)和拒绝(rejection)回调到当前 promise, 返回一个新的 promise, 将以回调的返回值来resolve.

1、异常捕获
```
getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function funcA(comments) {
// 这里的异常，then的第二个参数捕获不到
  console.log("resolved: ", comments);
}, function funcB(err){
  console.log("rejected: ", err);
});

```
2、冒泡性质

Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。
```
getJSON('/post/1.json').then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前面三个Promise产生的错误
});
```

上面代码中，一共有三个 Promise 对象：一个由getJSON产生，两个由then产生。它们之中任何一个抛出的错误，都会被最后一个catch捕获。

这也是then的第二个参数处理不了的。
</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

12. ####  Eventemitter 的 emit 是同步还是异步?

<details><summary><b>答案</b></summary>

Node.js 中 Eventemitter 的 emit 是同步的. 在官方文档中有说明:

EventListener按注册顺序同步调用所有侦听器。这对于确保事件的正确顺序和避免竞争条件或逻辑错误很重要。

另外, 可以讨论如下的执行结果是输出 hi 1 还是 hi 2?
```js
const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('myEvent', () => {
  console.log('hi 1');
});

emitter.on('myEvent', () => {
  console.log('hi 2');
});

emitter.emit('myEvent');
```
或者如下情况是否会死循环?
```js
const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('myEvent', () => {
  console.log('hi');
  emitter.emit('myEvent');
});

emitter.emit('myEvent');
```
以及这样会不会死循环?
```js
const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('myEvent', function sth () {
  emitter.on('myEvent', sth);
  console.log('hi');
});

emitter.emit('myEvent');
```
使用 emitter 处理问题可以处理比较复杂的状态场景, 比如 TCP 的复杂状态机, 做多项异步操作的时候每一步都可能报错, 这个时候 .emit 错误并且执行某些 .once 的操作可以将你从泥沼中拯救出来.

另外可以注意一下的是, 有些同学喜欢用 emitter 来监控某些类的状态, 但是在这些类释放的时候可能会忘记释放 emitter, 而这些类的内部可能持有该 emitter 的 listener 的引用从而导致内存泄漏.


</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

13. ####  如何判断接口是否异步? 是否只要有回调函数就是异步?

<details><summary><b>答案</b></summary>
开放性问题, 每个写 node 的人都有一套自己的判断方式.

- 看文档
- console.log 打印看看
- 看是否有 IO 操作

单纯使用回调函数并不会异步, IO 操作才可能会异步, 除此之外还有使用 setTimeout 等方式实现异步.
</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

14. ####  nextTick, setTimeout 以及 setImmediate 三者有什么区别?

<details><summary><b>答案</b></summary>

</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

15. ####  如何实现一个 sleep 函数?

<details><summary><b>答案</b></summary>
```js
function sleep(ms) {
  var start = Date.now(), expire = start + ms;
  while (Date.now() < expire) ;
  return;
}
```
而异步, 是使用 libuv 来实现的 (C/C++的同学可以参见 libev 和 libevent) 另一个线程里的事件队列.

如果在线上的网站中出现了死循环的逻辑被触发, 整个进程就会一直卡在死循环中, 如果没有多进程部署的话, 之后的网站请求全部会超时, js 代码没有结束那么事件队列就会停下等待不会执行异步, 整个网站无法响应.
</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

16. ####  如何实现一个异步的 reduce? (注:不是异步完了之后同步 reduce)

<details><summary><b>答案</b></summary>
需要了解 reduce 的情况, 是第 n 个与 n+1 的结果异步处理完之后, 在用新的结果与第 n+2 个元素继续依次异步下去. 
</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

17. ####  有这样一个场景, 你在线上使用 koa 搭建了一个网站, 这个网站项目中有一个你同事写的接口 A, 而 A 接口中在特殊情况下会变成死循环. 那么首先问题是, 如果触发了这个死循环, 会对网站造成什么影响?

<details><summary><b>答案</b></summary>
Node.js 中执行 js 代码的过程是单线程的. 只有当前代码都执行完, 才会切入事件循环, 然后从事件队列中 pop 出下一个回调函数开始执行代码. 所以 ① 实现一个 sleep 函数, 只要通过一个死循环就可以阻塞整个 js 的执行流程. (关于如何避免坑爹的同事写出死循环, 在后面的测试环节有写到.)
</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

18. ####  并行/并发

<details><summary><b>答案</b></summary>

并行 (Parallel) 与并发 (Concurrent) 是两个很常见的概念.

![avatar](https://joearms.github.io/images/con_and_par.jpg)

并发 (Concurrent) = 2 队列对应 1 咖啡机.

并行 (Parallel) = 2 队列对应 2 咖啡机.

Node.js 通过事件循环来挨个抽取事件队列中的一个个 Task 执行, 从而避免了传统的多线程情况下 2个队列对应 1个咖啡机 的时候上下文切换以及资源争抢/同步的问题, 所以获得了高并发的成就.

至于在 node 中并行, 你可以通过 cluster 来再添加一个咖啡机.
</details>


[[↑] 回到顶部](#awsome-knowledge-front-end)

19. ####  进程的当前工作目录是什么? 有什么作用?

<details><summary><b>答案</b></summary>
当前进程启动的目录, 通过 process.cwd() 获取当前工作目录 (current working directory), 通常是命令行启动的时候所在的目录 (也可以在启动时指定), 文件操作等使用相对路径的时候会相对当前工作目录来获取文件.

一些获取配置的第三方模块就是通过你的当前目录来找配置文件的. 所以如果你错误的目录启动脚本, 可能没法得到正确的结果. 在程序中可以通过 process.chdir() 来改变当前的工作目录.
</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

20. ####  child_process.fork 与 POSIX 的 fork 有什么区别?

<details><summary><b>答案</b></summary>

Node.js 的 child_process.fork() 在 Unix 上的实现最终调用了 POSIX fork(2), 而 POSIX 的 fork 需要手动管理子进程的资源释放 (waitpid), child_process.fork 则不用关心这个问题, Node.js 会自动释放, 并且可以在 option 中选择父进程死后是否允许子进程存活.

- spawn() 启动一个子进程来执行命令
- options.detached 父进程死后是否允许子进程存活
- options.stdio 指定子进程的三个标准流
- spawnSync() 同步版的 spawn, 可指定超时, 返回的对象可获得子进程的情况
- exec() 启动一个子进程来执行命令, 带回调参数获知子进程的情况, 可指定进程运行的超时时间
- execSync() 同步版的 exec(), 可指定超时, 返回子进程的输出 (stdout)
- execFile() 启动一个子进程来执行一个可执行文件, 可指定进程运行的超时时间
- execFileSync() 同步版的 execFile(), 返回子进程的输出, 如何超时或者 exit code 不为 0, 会直接 throw Error
- fork() 加强版的 spawn(), 返回值是 ChildProcess 对象可以与子进程交互

其中 exec/execSync 方法会直接调用 bash 来解释命令, 所以如果有命令有外部参数, 则需要注意被注入的情况.


</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

21. ####  父进程或子进程的死亡是否会影响对方? 什么是孤儿进程?

<details><summary><b>答案</b></summary>
子进程死亡不会影响父进程, 不过子进程死亡时（线程组的最后一个线程，通常是“领头”线程死亡时），会向它的父进程发送死亡信号. 反之父进程死亡, 一般情况下子进程也会随之死亡, 但如果此时子进程处于可运行态、僵死状态等等的话, 子进程将被进程1（init 进程）收养，从而成为孤儿进程. 另外, 子进程死亡的时候（处于“终止状态”），父进程没有及时调用 wait() 或 waitpid() 来返回死亡进程的相关信息，此时子进程还有一个 PCB 残留在进程表中，被称作僵尸进程.
</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

22. ####  cluster 是如何保证负载均衡的?

<details><summary><b>答案</b></summary>
</details>

[[↑] 回到顶部](#awsome-knowledge-front-end)

23. ####  什么是守护进程? 如何实现守护进程?

<details><summary><b>答案</b></summary>
</details>


[[↑] 回到顶部](#awsome-knowledge-front-end)

24. ####  在 IPC 通道建立之前, 父进程与子进程是怎么通信的? 如果没有通信, 那 IPC 是怎么建立的?

<details><summary><b>答案</b></summary>
这个问题也挺简单, 只是个思路的问题. 在通过 child_process 建立子进程的时候, 是可以指定子进程的 env (环境变量) 的. 所以 Node.js 在启动子进程的时候, 主进程先建立 IPC 频道, 然后将 IPC 频道的 fd (文件描述符) 通过环境变量 (NODE_CHANNEL_FD) 的方式传递给子进程, 然后子进程通过 fd 连上 IPC 与父进程建立连接.
</details>



[[↑] 回到顶部](#awsome-knowledge-front-end)


### Webpack

1. ####  [webpack和gulp的区别](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack1.md)

[[↑] 回到顶部](#awsome-knowledge-front-end)

2. ####  [webpack的loader和plugin有什么区别](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack2.md)

[[↑] 回到顶部](#awsome-knowledge-front-end)

3. ####  [做项目的时候，用webpack-dev-server起的热刷新和node自己写的http协议搭建服务，这两者有什么区别吗？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack3.md)

[[↑] 回到顶部](#awsome-knowledge-front-end)

4. ####  [用webpack进行哪些性能方面的优化](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack4.md)

[[↑] 回到顶部](#awsome-knowledge-front-end)

5.  ####  [怎么用webpack进行按需加载](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack5.md)

[[↑] 回到顶部](#awsome-knowledge-front-end)

6. ####  [webpack配置：（几个重要参数）](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack6.md)

[[↑] 回到顶部](#awsome-knowledge-front-end)

7. ####  [style-loader和css-loader的区别](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack7.md)


[[↑] 回到顶部](#awsome-knowledge-front-end)

8. ####  你说一下webpack的一些plugin，怎么使用webpack对项目进行优化。
<details><summary><b>答案</b></summary>
构建优化

1. 减少编译体积 ContextReplacementPugin、IgnorePlugin、babel-plugin-import、babel-plugin-transform-runtime。
2. 并行编译 happypack、thread-loader、uglifyjsWebpackPlugin开启并行
3. 缓存 cache-loader、hard-source-webpack-plugin、uglifyjsWebpackPlugin开启缓存、babel-loader开启缓存
4. 预编译 dllWebpackPlugin && DllReferencePlugin、auto-dll-webapck-plugin

性能优化

1. 减少编译体积 Tree-shaking、Scope Hositing。
2. hash缓存 webpack-md5-plugin
3. 拆包 splitChunksPlugin、import()、require.ensure

</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

### CSS

1. ####  [遇到过的兼容性问题？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/css/css1.md)

2. ####  两种以上方式实现已知或者未知宽度的垂直水平居中?（有赞/百度）
<details><summary><b>答案</b></summary>
<pre>
// 1
.wrapper {
  position: relative;
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
  }
}

// 2
.wrapper {
  position: relative;
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

// 3
.wrapper {
  .box {
    display: flex;
    justify-content:center;
    align-items: center;
    height: 100px;
  }
}

// 4
.wrapper {
  display: table;
  .box {
    display: table-cell;
    vertical-align: middle;
  }
}
</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


3. ####  实现效果，点击容器内的图标，图标边框变成border 1px solid red，点击空白处重置?


```html
<div id="box" style="padding:50px;margin:50px;">
  <div class="icon">图标</div>
</div>
```

```js
window.onload = function() {
  const box = document.getElementById("box");
  function isIcon(target) {
    return target.className.includes("icon");
  }
  box.onclick = function(e) {
    e.stopPropagation();
    const target = e.target;
    if (isIcon(target)) {
      target.style.border = "1px solid red";
    }
  };
  const doc = document;
  doc.onclick = function(e) {
    const children = box.children;
    for (let i = 0; i < children.length; i++) {
      if (isIcon(children)) {
        children.style.border = "none";
      }
    }
  };
};

```

---

[[↑] 回到顶部](#awsome-knowledge-front-end)


4. ####  CSS和JS的位置会影响页面效率，为什么？(有赞)
<details><summary><b>答案</b></summary>
<pre>
css在加载过程中不会影响到DOM树的生成，但是会影响到Render树的生成，进而影响到layout，所以一般来说，style的link标签需要尽量放在head里面，因为在解析DOM树的时候是自上而下的，而css样式又是通过异步加载的，这样的话，解析DOM树下的body节点和加载css样式能尽可能的并行，加快Render树的生成的速度。
js脚本应该放在底部，原因在于js线程与GUI渲染线程是互斥的关系，如果js放在首部，当下载执行js的时候，会影响渲染行程绘制页面，js的作用主要是处理交互，而交互必须得先让页面呈现才能进行，所以为了保证用户体验，尽量让页面先绘制出来。

</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


5. ####  图片懒加载怎么实现
<details><summary><b>答案</b></summary>
<pre>
监听浏览器的滚动事件，结合clientHeight、offsetHeight、scrollTop、scrollHeight等等变量计算当前图片是否在可视区域，如果在，则替换src加载图片，当然这个滚动事件要主要节流。

</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


6. ####  假如现在页面里放在head的css文件下载速度很慢，页面会出现什么情况？
<details><summary><b>答案</b></summary>
<pre>
大概页面会等待这个CSS的下载，这个时候页面是白屏状态，然后这个CSS资源会有一个超时时间，假如超过了这个超时时间，这个资源相当于会下载失败，浏览器会直接跳过这个CSS资源，根据已有的CSS资源生成CSS规则树，进而生成Render树，然后渲染页面。
</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


7. ####  假如我现在在页面动态添加了一个CSS文件，页面一定会回流吗？例如页面这个CSS文件中有translate3d呢？
<details><summary><b>答案</b></summary>
<pre>
只要加入的CSS影响到了页面的结构，那么浏览器就会回流。其实我感觉它不会回流，因为translate3d只是变换了自己的位置，不会影响其他元素的位置，但是实际上是会造成回流的。
</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


8. ####  左右布局：左边定宽、右边自适应，不少于3种方法
<details><summary><b>答案</b></summary>
<pre>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        * {
            padding: 0;
            margin: 0;
            color: #fff;
            font-size: 30px;
            font-weight: bold;
            text-align: center;
            box-sizing: border-box;
        }
        aside {
            width: 200px;
            height: 200px;
            padding-top: 75px;
            background: #5A6A94;
        }
        section {
            height: 200px;
            padding-top: 75px;
            background: #BE4F4F;
        }
    </style>
</head>
<body>
    <!-- 左边定宽 -->
    <aside class="left">Left</aside>
    <!-- 右边自适应 -->
    <section class="right">Right</section>
</body>
</html>
</pre>
方法一：左边设置左浮动，右边宽度设置100%
<pre>
          float:left;
</pre>
方法二： 父容器设置 display：flex；Right部分设置 flex：1 
<pre>
    body {
      display: flex;
    }

        section {
      flex: 1;}
</pre>

方法四：使用负margin
<pre>
     <div class="container">
    <section class="right">right</section>
  </div>
  <aside class="left">left</aside>      

    .container {
      float: left;
      width: 100%;
    }

    .right {
      margin-left: 200px;
    }

    .left {
      float: left;
      margin-left: -100%
    }
</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)



9. ####  CSS3用过哪些新特性


<details><summary><b>答案</b></summary>

1. CSS3 选择器（Selector）
<pre> 
E:nth-last-child(n) 
E:nth-of-type(n) 
E:nth-last-of-type(n) 
E:last-child 
E:first-of-type 
E:only-child 
E:only-of-type 
E:empty 
E:checked 
E:enabled 
E:disabled 
E::selection 
E:not(s)
</pre>

2. @Font-face 特性
Font-face 可以用来加载字体样式，而且它还能够加载服务器端的字体文件，让客户端显示客户端所没有安装的字体。
<pre>
@font-face { 
font-family: BorderWeb; 
src:url(BORDERW0.eot); 
} 
@font-face { 
font-family: Runic; 
src:url(RUNICMT0.eot); 
} 
 
.border { FONT-SIZE: 35px; COLOR: black; FONT-FAMILY: "BorderWeb" } 
.event { FONT-SIZE: 110px; COLOR: black; FONT-FAMILY: "Runic" }
</pre>

声明的两个服务端字体，其字体源指向“BORDERW0.eot”和“RUNICMT0.eot”文件，并分别冠以“BorderWeb”和“Runic”的字体名称。声明之后，我们就可以在页面中使用了：“ FONT-FAMILY: "BorderWeb" ” 和 “ FONT-FAMILY: "Runic" ”。

3. Word-wrap & Text-overflow 样式
<pre>
<div style="width:300px; border:1px solid #999999; overflow: hidden"> 
wordwrapbreakwordwordwrapbreakwordwordwrapbreakwordwordwrapbreakword 
</div> 
 
 
<div style="width:300px; border:1px solid #999999; word-wrap:break-word;"> 
wordwrapbreakwordwordwrapbreakwordwordwrapbreakwordwordwrapbreakword 
</div>
</pre>

上述两段代码，加入了“word-wrap: break-word”，设置或检索当当前行超过指定容器的边界时是否断开转行，文字此时已被打散。所以可见如下的差别：

知道了 word-wrap 的原理，我们再来看看 text-overflow，其实它与 word-wrap 是协同工作的，word-wrap 设置或检索当当前行超过指定容器的边界时是否断开转行，而 text-overflow 则设置或检索当当前行超过指定容器的边界时如何显示，

<pre>
.clip{text-overflow:clip; overflow:hidden; white-space:nowrap; 
  width:200px;background:#ccc;} 
.ellipsis{text-overflow:ellipsis; overflow:hidden; white-space:nowrap; 
  width:200px; background:#ccc;} 
 
<div class="clip"> 
 不显示省略标记，而是简单的裁切条
</div> 
 
<div class="ellipsis"> 
 当对象内文本溢出时显示省略标记
</div>
</pre>

这里我们可以看到，ellipsis 的显示方式比较人性化，clip 方式比较传统，我们可以依据需求进行选择。

4. 文字渲染（Text-decoration）
CSS3 里面开始支持对文字的更深层次的渲染
<pre></pre>

5. CSS3 的多列布局（multi-column layout）

<pre>
.multi_column_style{ 
-webkit-column-count: 3; 
-webkit-column-rule: 1px solid #bbb; 
-webkit-column-gap: 2em; 
} 
 
<div class="multi_column_style"> 
................. 
................. 
</div>
</pre>

这里我们还是以 webkit 内核浏览器为例：

Column-count：表示布局几列。

Column-rule：表示列与列之间的间隔条的样式

Column-gap：表示列于列之间的间隔

6. 边框和颜色（color, border）

7. CSS3 的渐变效果（Gradient）
  
8. CSS3 的阴影（Shadow）和反射（Reflect）效果


9.  CSS3 的背景效果


10. CSS3 的盒子模型


11. CSS3 的 Transitions, Transforms 和 Animation


</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)



10.  ####   BFC、IFC
<details><summary><b>答案</b></summary>


1. 块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视化CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

下列方式会创建块格式化上下文：

根元素(<html>)
浮动元素（元素的 float 不是 none）
绝对定位元素（元素的 position 为 absolute 或 fixed）
行内块元素（元素的 display 为 inline-block）
表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）
overflow 值不为 visible 的块元素
display 值为 flow-root 的元素
contain 值为 layout、content或 paint 的元素
弹性元素（display为 flex 或 inline-flex元素的直接子元素）
网格元素（display为 grid 或 inline-grid 元素的直接子元素）
多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。
块格式化上下文包含创建它的元素内部的所有内容.

块格式化上下文对浮动定位（参见 float）与清除浮动（参见 clear）都很重要。浮动定位和清除浮动时只会应用于同一个BFC内的元素。浮动不会影响其它BFC中元素的布局，而清除浮动只能清除同一BFC中在它前面的元素的浮动。外边距折叠（Margin collapsing）也只会发生在属于同一BFC的块级元素之间。

2. IFC布局规则
子元素水平方向横向排列，并且垂直方向起点为元素顶部。
子元素只会计算横向样式空间，【padding、border、margin】，垂直方向样式空间不会被计算，【padding、border、margin】。
在垂直方向上，子元素会以不同形式来对齐（vertical-align）
能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框（line box）。行框的宽度是由包含块（containing box）和与其中的浮动来决定。
IFC中的“line box”一般左右边贴紧其包含块，但float元素会优先排列。
IFC中的“line box”高度由 CSS 行高计算规则来确定，同个IFC下的多个line box高度可能会不同。
当 inline-level boxes的总宽度少于包含它们的line box时，其水平渲染规则由 text-align 属性值来决定。
当一个“inline box”超过父元素的宽度时，它会被分割成多个boxes，这些 oxes 分布在多个“line box”中。如果子元素未设置强制换行的情况下，“inline box”将不可被分割，将会溢出父元素。

</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


11.  ####  对栅格的理解
<details><summary><b>答案</b></summary>

container 容器 ：目的是设置整个栅格化布局的宽度，通常一般这个宽度设置为100%，但是或许你想为屏幕较大的媒体设置一个最大的宽度（max-width）如果box-sizing的值不是border-box,给宽度是百分比的元素设置一个固定的padding值是一个痛苦的事情。好在设置为border-box后，方便了太多。
<pre>
container{width：100%；

box-sizing：border-box；

}
</pre>
row 行：行元素的目的是防止他的内部的列column元素溢出到别的行，为了实现这个目的，我们需要clearfix；来清除浮动
<pre>
.row：bofore，.row：after{

content：“”，

display：table；

clear：both；

}
</pre>
column列：列是栅格系统纵向排布依据，常用的PC端是12列，移动端是6列。列数越多纵向排布内容就可以越细致，但是版面内容就会变的更稠密，内容更碎。

Float inline-block display:table display:flex 这些css中所有的定位的方法.以float为例;当所有的列都是空的话,他们会叠加起来.为了避免这个,我们将会给列设置float属性再设置最小的高度1px
<pre>
[class*='col-']{

    float:left;

    min-height:1px;

}
</pre>
列的宽度:为了得到一个列的宽度我们需要容器(container)的宽度/列的总数;以container的宽度是100%,列的宽度就是100%/6=16.6%
<pre>
[class*='col-']{

    float:left;

    min-height:1px;

   width:16.6%;

}
</pre>
然后呢
<pre>
.col-1{

width:16.6%

}

.col-2{

width:33.33%

}

....

.col-6{

100%

}
</pre>
注意:(这里敲黑板)我们现在是6列为例,自己的项目自己设定的列的总数,自己设置)

每一列的间距

如果box-sizing的值不是border-box,给宽度是百分比的元素设置一个固定的padding值会有问题,但是box-sizing设置后,说明摒弃了ie8的浏览器.

<pre>

container-wrap{

box-sizing:border-box;

}

[class*='col-']{

    float:left;

    min-height:1px;

   width:16.6%;

  padding:10px;

}
</pre>
 
<pre>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    * {
      list-style: none;
    }

    .container-wrap {
      width: 100%;
      box-sizing: border-box;
      min-width: 1200px;
    }

    .row:bofore,
    .row:after {
      content: "";
      display: table;
      clear: both;
    }

    [class*='col-'] {
      float: left;
      min-height: 1px;
      width: 16.6% padding:10px;
    }

    .col-1 {
      width: 16.6%;
    }

    .col-2 {
      width: 33.3%;
    }

    .col-3 {
      width: 50%;
    }

    .outline,
    .outline * {
      outline: 1px solid blue;
    }
  </style>
</head>

<body>
  <div class="container-wrap outline">
    <ul class="row">
      <li class="col-1">col-1</li>
      <li class="col-1">col-1</li>
      <li class="col-1">col-1</li>
      <li class="col-1">col-1</li>
      <li class="col-1">col-1</li>
      <li class="col-1">col-1</li>
    </ul>
    <ul class="row">
      <li class="col-2">col-2</li>
      <li class="col-2">col-2</li>
      <li class="col-2">col-2</li>
    </ul>
    <ul class="row">
      <li class="col-3">col-3</li>
      <li class="col-3">col-3</li>
    </ul>
  </div>
</body>

</html>
</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


12.  #### （水平）居中有哪些实现方式
<details><summary><b>答案</b></summary>
对于行内元素：
<pre>
text-align:center;
</pre>

对于确定宽度的块级元素

margin和width实现水平居中
<pre>
常用(前提：已设置width值)：margin-left:auto; margin-right:auto;
</pre>

绝对定位和margin-left: -(宽度值/2)实现水平居中
<pre>
固定宽度块级元素水平居中，通过使用绝对定位，以及设置元素margin-left为其宽度的一半

.content{

width: 200px;

position: absolute;

left: 50%;

margin-left: -100px; // 该元素宽度的一半，即100px

background-color: aqua;

}
--------------------- 
版权声明：本文为CSDN博主「Deng冬」的原创文章，遵循CC 4.0 by-sa版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/dengdongxia/article/details/80297116
</pre>


position:absolute + （left=0+top=0+right=0+bottom=0） + margin:auto
<pre>
.content{

position: absolute;

width: 200px;

top: 0;

right: 0;

bottom: 0;

left: 0;

margin: auto;

}
</pre>

对于未知宽度的块级元素：


table标签配合margin左右auto实现水平居中

使用table标签（或直接将块级元素设值为display:table），再通过给该标签添加左右margin为auto


inline-block实现水平居中方法
<pre>
display：inline-block;（或display:inline）和text-align:center;实现水平居中
</pre>



绝对定位实现水平居中
<pre>
绝对定位+transform，translateX可以移动本省元素的50%
.content{

position: absolute;

left: 50%;

transform: translateX(-50%); /* 移动元素本身50% */

background: aqua;

}
--------------------- 
版权声明：本文为CSDN博主「Deng冬」的原创文章，遵循CC 4.0 by-sa版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/dengdongxia/article/details/80297116
</pre>


相对定位实现水平居中
<pre>
用float或者display把父元素变成行内块状元素
.contentParent{

display: inline-block; /* 把父元素转化为行内块状元素 */

/*float: left; 把父元素转化为行内块状元素 */

position: relative;

left: 50%;

}

/*目标元素*/

.content{

position: relative;

right: 50%;

background-color:aqua;

}


--------------------- 
版权声明：本文为CSDN博主「Deng冬」的原创文章，遵循CC 4.0 by-sa版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/dengdongxia/article/details/80297116
</pre>


CSS3的flex实现水平居中方法，法一
<pre>
.contentParent{

display: flex;

flex-direction: column;

}

.content{

align-self:center;

}
</pre>


CSS3的flex实现水平居中方法，法二
<pre>
.contentParent{

display: flex;

}

.content{

margin: auto;

}
</pre>


CSS3的fit-content配合左右margin为auto实现水平居中方法


<pre>
.content{

width: fit-content;

margin-left: auto;

margin-right: auto;

}
</pre>



</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


13. ####  1像素边框问题
<details><summary><b>答案</b></summary>
border-image 图片 实现

background-image 渐变实现
除啦用图片，难道纯粹的css就不能实现吗？我的确不想使用图片，感觉制作起来很麻烦，其实百度糯米团首页就是这么做的但是这种方法有个缺点，就是不能实现圆角

viewport+rem实现
这篇文章的解决方案是使用viewport+rem+js来实现的 链接走起 《移动端1像素边框问题的解决方案》，里边还引入了张鑫旭大神的文章 《设备像素比devicePixelRatio简单介绍》，优点是可以直接设置1px就行了，剩下的就交给js了，而且圆角什么的都没问题。


box-shadow 实现
利用阴影我们也可以实现，那么我们来看看阴影，优点是圆角不是问题，缺点是颜色不好控制。

transform: scale(0.5) 实现 推荐相当灵活

1.用height：1px的div，然后根据媒体查询设置transform: scaleY(0.5);，

2.用::after和::befor,设置border-bottom：1px solid #000,然后在缩放-webkit-transform: scaleY(0.5);可以实现两根边线的需求

3.用::after设置border：1px solid #000; width:200%; height:200%,然后再缩放scaleY(0.5); 优点可以实现圆角，京东就是这么实现的，缺点是按钮添加active比较麻烦。

--------------------- 
版权声明：移动web 1像素边框 瞧瞧大公司是怎么做的
原文链接：https://segmentfault.com/a/1190000007604842

</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)



14. #### 添加一个什么css属性可以让div的实际宽度仍然保持在100px

一个div，宽度是100px，此时设置padding是20px，添加一个什么css属性可以让div的实际宽度仍然保持在100px，而不是140px？
<details><summary><b>答案</b></summary>
box-sizing:border-box;
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)


15. #### 清除浮动的方式，提供尽可能多的方案

<details><summary><b>答案</b></summary>
1. 找到父元素添加overflow : hidden

2. 额外标签 clear : both

3. 伪元素

clearfix :after {

content : "" ;

clear : both ;

height : 0;

line-height : 0;

display : block;

visibility :hidden;

}
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)


16. #### 如何让两个div分别以40%和60%的比例排在一行内，提供尽可能多的方案。

<details><summary><b>答案</b></summary>
<pre>
//伪代码
//方法1
father-box{position: relative;}
son-left-box{position: absolute;width: 40%;}
son-right-box{position: absolute;margin-left: 40%;width:60%}

//方法2
father-box{}
son-left-box{float: left;width: 40%;}
son-right-box{float: right;width:60%;}

//方法3
father-box{display:flex}
son-left-box{width: 40%}
son-right-box{width:60%}

//方法4
display : inline-block 注 ： 中间的空白文本元素
</pre>
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)


17. #### 如何用css实现一个div的一秒内向右平滑移动100px的动画。

<details><summary><b>答案</b></summary>
<pre>
transition：1s
 @keyframes myfirst
    {
    from {margin-left: 0;}
    to {margin-left: 100px;}
    }
    .box{
        animation: myfirst 1s;
        -moz-animation: myfirst 5s; /* Firefox */
        -webkit-animation: myfirst 5s;  /* Safari 和 Chrome */
        -o-animation: myfirst 5s;   /* Opera */
        width: 1rem;
        height: 1rem;
        background: red;
    }
</pre>
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

18. #### CSS垂直居中的11种实现方式（海康）

<details><summary><b>答案</b></summary>
11种实现方式分别如下：

1. 使用绝对定位和负外边距对块级元素进行垂直居中
html代码：
<div id="box">
    <div id="child">我是测试DIV</div>
</div>
css代码：

复制代码
#box {
    width: 300px;
    height: 300px;
    background: #ddd;
    position: relative;
}
#child {
    width: 150px;
    height: 100px;
    background: orange;
    position: absolute;
    top: 50%;
    margin: -50px 0 0 0;
    line-height: 100px;
}
复制代码
运行结果如下：



　　这个方法兼容性不错，但是有一个小缺点：必须提前知道被居中块级元素的尺寸，否则无法准确实现垂直居中。
 
2. 使用绝对定位和transform
html代码：
<div id="child">
    我是一串很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本
</div>
css代码：

复制代码
#box {
    width: 300px;
    height: 300px;
    background: #ddd;
    position: relative;
}
#child {
    background: #93BC49;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
}
复制代码
运行结果如下：



　　这种方法有一个非常明显的好处就是不必提前知道被居中元素的尺寸了，因为transform中translate偏移的百分比就是相对于元素自身的尺寸而言的。
 
3. 另外一种使用绝对定位和负外边距进行垂直居中的方式
 html代码：
<div id="box">
    <div id="child">我也是个测试DIV</div>
</div>
css代码：

复制代码
#box {
    width: 300px;
    height: 300px;
    background: #ddd;
    position: relative;
}
#child {
　　width: 50%;
    height: 30%;
    background: pink;
    position: absolute;
    top: 50%;
    margin: -15% 0 0 0;
}
复制代码
运行结果如下：



　　这种方式的原理实质上和前两种相同。补充的一点是：margin的取值也可以是百分比，这时这个值规定了该元素基于父元素尺寸的百分比，可以根据实际的使用场景来决定是用具体的数值还是用百分比。
 
4. 绝对定位结合margin: auto
html代码：
<div id="box">
    <div id="child">呆呆今天退役了(。﹏。)</div>
</div>
css代码：

复制代码
#box {
    width: 300px;
    height: 300px;
    background: #ddd;
    position: relative;
}
#child {
    width: 200px;
    height: 100px;
    background: #A1CCFE;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    line-height: 100px;
}
复制代码
运行结果如下：



　　这种实现方式的两个核心是：把要垂直居中的元素相对于父元素绝对定位，top和bottom设为相等的值，我这里设成了0，当然你也可以设为99999px或者-99999px无论什么，只要两者相等就行，这一步做完之后再将要居中元素的margin设为auto，这样便可以实现垂直居中了。
　　被居中元素的宽高也可以不设置，但不设置的话就必须是图片这种自身就包含尺寸的元素，否则无法实现。
 
5. 使用padding实现子元素的垂直居中
html代码：
<div id="box">
    <div id="child">今天西安的霾严重的吓人，刚看了一眼PM2.5是422</div>
</div>
css代码：

复制代码
#box {
    width: 300px;
    background: #ddd;
    padding: 100px 0;
}
#child {
    width: 200px;
    height: 100px;
    background: #F7A750;
    line-height: 50px;
}
复制代码
运行结果如下：



　　这种实现方式非常简单，就是给父元素设置相等的上下内边距，则子元素自然是垂直居中的，当然这时候父元素是不能设置高度的，要让它自动被填充起来，除非设置了一个正好等于上内边距+子元素高度+下内边距的值，否则无法精确的垂直居中。
　　这种方式看似没有什么技术含量，但其实在某些场景下也是非常好用的。
 
6. 设置第三方基准
html代码：
<div id="box">
    <div id="base"></div>
    <div id="child">今天写了第一篇博客，希望可以坚持写下去！</div>
</div>
css代码：

复制代码
#box {
    width: 300px;
    height: 300px;
    background: #ddd;
}
#base {
    height: 50%;
    background: #AF9BD3;
}
#child {
    height: 100px;
    background: rgba(131, 224, 245, 0.6);
    line-height: 50px;
    margin-top: -50px;
}
复制代码
运行结果如下：



　　这种方式也非常简单，首先设置一个高度等于父元素高度一半的第三方基准元素，那么此时该基准元素的底边线自然就是父元素纵向上的中分线，做完这些之后再给要垂直居中的元素设置一个margin-top，值的大小是它自身高度的一半取负，则实现垂直居中。
 
7. 使用flex布局
html代码：
<div id="box">雾霾天气，太久没有打球了</div>
css代码：

复制代码
#box {
    width: 300px;
    height: 300px;
    background: #ddd;
    display: flex;
    align-items: center;
}
复制代码
运行结果如下：



这种方式同样适用于块级元素：

html代码：

<div id="box">
    <div id="child">
        程序员怎么才能保护好眼睛？
    </div>
</div>
css代码：

复制代码
#box {
    width: 300px;
    height: 300px;
    background: #ddd;
    display: flex;
    align-items: center;
}
#child {
    width: 300px;
    height: 100px;
    background: #8194AA;
    line-height: 100px;
}
复制代码
运行结果如下：



　　flex布局（弹性布局/伸缩布局）里门道颇多，这里先针对用到的东西简单说一下，想深入学习的小伙伴可以去看阮一峰老师的博客。（http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html）
　　flex也就是flexible，意为灵活的、柔韧的、易弯曲的。
　　元素可以通过设置display:flex;将其指定为flex布局的容器，指定好了容器之后再为其添加align-items属性，该属性定义项目在交叉轴（这里是纵向轴）上的对齐方式，可能的取值有五个，分别如下：
　　flex-start:：交叉轴的起点对齐；
　　flex-end：交叉轴的终点对齐；
　　center：交叉轴的中点对齐；
　　baseline：项目第一行文字的基线对齐；
　　stretch（该值是默认值）：如果项目没有设置高度或者设为了auto，那么将占满整个容器的高度。
 
8. 第二种使用弹性布局的方式
html代码：
<div id="box">
    <div id="child">
        答案当然是多用绿色的背景哈哈
    </div>
</div>
css代码：

复制代码
#box {
    width: 300px;
    height: 300px;
    background: #ddd;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#child {
    width: 300px;
    height: 100px;
    background: #08BC67;
    line-height: 100px;
}
复制代码
运行结果如下：



　　这种方式也是首先给父元素设置display:flex，设置好之后改变主轴的方向flex-direction: column，该属性可能的取值有四个，分别如下：
　　row（该值为默认值）：主轴为水平方向，起点在左端；
　　row-reverse：主轴为水平方向，起点在右端；
　　column：主轴为垂直方向，起点在上沿；
　　column-reverse：主轴为垂直方向，起点在下沿。
　　
　　justify-content属性定义了项目在主轴上的对齐方式，可能的取值有五个，分别如下（不过具体的对齐方式与主轴的方向有关，以下的值都是假设主轴为从左到右的）：
　　flex-start（该值是默认值）：左对齐；
　　flex-end：右对齐；
　　center：居中对齐；
　　space-between：两端对齐，各个项目之间的间隔均相等；
　　space-around：各个项目两侧的间隔相等。
 
9. 还有一种在前面已经见到过很多次的方式就是使用 line-height 对单行文本进行垂直居中
html代码：
<div id="box">
    我是一段测试文本
</div>
css代码：

复制代码
#box{
    width: 300px;
    height: 300px;
    background: #ddd;
    line-height: 300px;
}
复制代码
运行结果如下：



　　这里有一个小坑需要大家注意：line-height(行高) 的值不能设为100%，我们来看看官方文档中给出的关于line-height取值为百分比时候的描述：基于当前字体尺寸的百分比行间距。所以大家就明白了，这里的百分比并不是相对于父元素尺寸而言，而是相对于字体尺寸来讲的。
 
10. 使用 line-height 和 vertical-align 对图片进行垂直居中
html代码：
<div id="box">
    <img src="duncan.jpeg">
</div>
css代码：

复制代码
#box{
    width: 300px;
    height: 300px;
    background: #ddd;
    line-height: 300px;
}
#box img {
    vertical-align: middle;
}
复制代码
运行结果如下：



vertical-align并不像看起来那样天真无邪童叟无欺，以后会单独拎出来专门写一篇。
 
11. 使用 display 和 vertical-align 对容器里的文字进行垂直居中
html代码：
<div id="box">
    <div id="child">我也是一段测试文本</div>
</div>
css代码：

复制代码
#box {
    width: 300px;
    height: 300px;
    background: #ddd;
    display: table;
}
#child {
    display: table-cell;
    vertical-align: middle;
}
复制代码
运行结果如下：



　　这里关于vertical-align啰嗦两句：vertical-align属性只对拥有valign特性的html元素起作用，例如表格元素中的<td><th>等等，而像<div><span>这样的元素是不行的。

　　valign属性规定单元格中内容的垂直排列方式，语法：<td valign="value">，value的可能取值有四种：

　　top：对内容进行上对齐
　　middle：对内容进行居中对齐
　　bottom：对内容进行下对齐
　　baseline：基线对齐
 
　　关于baseline值：基线是一条虚构的线。在一行文本中，大多数字母以基线为基准。baseline 值设置行中的所有表格数据都分享相同的基线。该值的效果常常与 bottom 值相同。不过，如果文本的字号各不相同，那么 baseline 的效果会更好。 
 
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

### Html

1. ####  完成一个Dialog组件，说说你设计的思路？它应该有什么功能？（有赞）
<details><summary><b>答案</b></summary>


1. 该组件需要提供hook指定渲染位置，默认渲染在body下面。

2. 然后改组件可以指定外层样式，如宽度等

3. 组件外层还需要一层mask来遮住底层内容，点击mask可以执行传进来的onCancel函数关闭Dialog。

4. 另外组件是可控的，需要外层传入visible表示是否可见。

5. 然后Dialog可能需要自定义头head和底部footer，默认有头部和底部，底部有一个确认按钮和取消按钮，确认按钮会执行外部传进来的onOk事件，然后取

6. 按钮会执行外部传进来的onCancel事件。

7. 当组件的visible为true时候，设置body的overflow为hidden，隐藏body的滚动条，反之显示滚动条。

8. 组件高度可能大于页面高度，组件内部需要滚动条。

9. 只有组件的visible有变化且为ture时候，才重渲染组件内的所有内容。

</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)



2.  ####  svg和canvas各自的优缺点？
<details><summary><b>答案</b></summary>
<pre>
共同点：都是有效的图形工具，对于数据较小的情况下，都很又高的性能，它们都使用 JavaScript 和 HTML；它们都遵守万维网联合会 (W3C) 标准。
svg优点：
矢量图，不依赖于像素，无限放大后不会失真。
以dom的形式表示，事件绑定由浏览器直接分发到节点上。
svg缺点：
dom形式，涉及到动画时候需要更新dom，性能较低。
canvas优点：
定制型更强，可以绘制绘制自己想要的东西。
非dom结构形式，用JavaScript进行绘制，涉及到动画性能较高。
canvas缺点：
事件分发由canvas处理，绘制的内容的事件需要自己做处理。
依赖于像素，无法高效保真，画布较大时候性能较低。

</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)



3. ####  canvas渲染较大画布的时候性能会较低？为什么？
<details><summary><b>答案</b></summary>
<pre>
因为canvas依赖于像素，在绘制过程中是一个一个像素去绘制的，当画布足够大，像素点也就会足够多，那么想能就会足够低。
</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


4. ####   HTML5新增了哪些内容或API，使用过哪些
<details><summary><b>答案</b></summary>
<pre>

1. document.querySelector()和document.querySelectorAll()方法

document.querySelector()：根据css选择器返回第一个匹配的元素，如果没有匹配返回null；

document.querySelectorAll("selector")：querySelectorAll和querySelector作用一样的，只是querySelectorAll返回的是元素数组，querySelector返回的是一个元素。如果querySelectorAll没有匹配的内容返回的是一个空数组。

2. HTML5之classList属性
classList属性没有出现之前js操作元素class都是使用className,但是在开发一个网站的时候标签的class不只是一个，有可能有很多。
这个时候使用className操作多个类就比较麻烦了，需要进行拆分、删除等。

3. HTML5之全屏

为了方便用户的阅读或者观看视频，很多的网站实现了全屏功能。FullScreen API 是一个新的JavaScript API,简单而又强大. FullScreen 让我们可以通过编程的方式来向用户请求全屏显示,如果交互完成,随时可以退出全屏状态.

FullScreen是HTML5的一个新特征，现在主流的浏览器已经支持

4. HTML5之页面可见性(Page Visibility)

所谓页面可见性就是当前页面是处于显示状态还是隐藏状态，页面可见性对于网站的统计非常有用。有的时候我们会统计用户停留在每个页面的时间，这个时间就是：用户打开网页到网页关闭或者最小化之间的时间。

有的时候在视频播放的时候，当用户离开视频播放页面自动暂停视频播放，我们有时候也对那些定期刷新内容的页面进行控制，当该页面不可见则不刷新，可见则刷新。这些都是页面可见性的具体应用。

5. HTML5 之预加载
预加载是一种浏览器机制，使用浏览器空闲时间来预先下载/加载用户接下来很可能会浏览的页面/资源。页面提供给浏览器需要预加载的集合。
浏览器载入当前页面完成后，将会在后台下载需要预加载的页面并添加到缓存中。当用户访问某个预加载的链接时，如果从缓存命中,
页面就得以快速呈现。

a. link的prefetch属性
可以看到兼容效果不是特别的好。考虑到prefetech的兼容，w3c提出了另外一个属性dns-prefetch属性。它的兼容性现在主流浏览器基本都支持。
b. link的dns-prefetch

c. 注意事项

关于链接预加载，有如下注意事项：
- 预加载可以跨域进行，当然，请求时cookie等信息也会被发送。
- 预加载可能破坏网站统计数据，而用户并没有实际访问。
- 浏览器兼容性不是很好


</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)



5. ####   input和textarea的区别
<details><summary><b>答案</b></summary>
<pre>
1. input
text标签是单行文本框，不会换行。
通过size属性指定显示字符的长度，注意：当使用css限定了宽高，那么size属性就不再起作用。
value属性指定初始值，Maxlength属性指定文本框可以输入的最长长度。
可以通过width和height设置宽高，但是也不会增加行数
2. textarea
是多行文本输入框，文本区中可容纳无限数量的文本，其中的文本的默认字体是等宽字体（通常是 Courier），可以通过 cols 和 rows 属性来规定 textarea 的尺寸，不过更好的办法是使用 CSS 的 height 和 width 属性。
</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


6. ####   用一个div模拟textarea的实现
<details><summary><b>答案</b></summary>
<pre>
1. html
<div contenteditable="true">
    .....此处省略.....
</div>

2. css

div {
  width: 400px;
  min-height: 100px;
  max-height: 200px;
  _height: 100px; //IE6
  margin-left: auto;
  margin-right: auto;
  padding: 3px;
  outline: 0;
  border: 1px solid #a0b3d6;
  font-size: 12px;
  word-wrap: break-word;
  overflow-x: hidden;
  overflow-y: auto; //超过最大高度就出现滚动条
  _overflow-y: visible;
}

</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


7. ####   移动设备忽略将页面中的数字识别为电话号码的方法 
<details><summary><b>答案</b></summary>
<pre>
1.标准的电话号码格式是这样的:<a  href="tel:1-408-555-5555">1-408-555-5555</a>，点击后会自动打开电话功能；

2.但有时候不是电话号码的数字也会被浏览器自动解析为电话号码, 并把数字的颜色和样式都改了；

3.如果忽略页面中的数字识别为电话号码, 只要把这个默认行为关闭就行，只要一行代码:

<meta name = "format-detection" content = "telephone=no">

4.这个关闭不会影响真正电话号码的识别；


format-detection翻译成中文的意思是“格式检测”，顾名思义，它是用来检测html里的一些格式的，那关于meta的format-detection属性主要是有以下几个设置：
<meta name="format-detection" content="telephone=no">
<meta name="format-detection" content="email=no">
<meta name="format-detection" content="adress=no">
<meta name="format-detection" content="telephone=no,email=no,adress=no">


--------------------- 
版权声明：本文为CSDN博主「初漾」的原创文章，遵循CC 4.0 by-sa版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/shuidinaozhongyan/article/details/73194556
</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)

### 性能优化

1. ####  项目中使用过哪些优化方法
<details><summary><b>答案</b></summary>
提高前端性能的方法

要优化提升前端性能，有以下两大方法：

①减少页面加载所需时间；

②提升用户角度的观感体验（让用户觉得页面更快）；

减少页面加载所需时间，可以从请求数量、请求并发度及网络传输时间等方面着手；提升用户观感，则主要从让页面尽快展示入手；下面一一介绍：

1、减少网络时间

浏览器从服务端获取HTML文档和资源都需要经历“DNS解析——建立连接——获取连接——断开连接”的过程；如果能减少DNS解析和文件在网络上传输的时间，性能自然能得到提升。

①使用DNS缓存技术

使用DNS缓存技术可以让用户获得更快的DNS解析时间，一般而言，由于浏览器本身就具有一定的DNS缓存机制，所以服务端的DNS缓存并不能带来太大的性能提升。

②减少需要传输的文件尺寸

在网络带宽有限的情况下，减少传输的文件尺寸可以提升很大的性能。常见的有将文件进行压缩的方法，除此之外，还有使用混淆等方法尽量减少JS文件和样式表的大小，从JS文件和

样式表中去除不需要使用的部分等，都可以起到减少需要传输文件尺寸的作用。

③加快文件传输速度

Internet网站的用户通常分布在一个较广阔的区域内，Internet本身的多层次网络结构导致从某一个节点到另一些节点之间的可用带宽和网络传输速度都比较慢；这种情况下使用CDN技术，

让用户尽可能访问到对用户节点而言更快速的服务器就可以加快文件传输速度。

国内而言，移动联通电信三大运营商之间并没有建立良好的互联互通，通常需在三个服务商所在网络中设置GDN服务器；另外，出于地域原因，建立CDN也是种常见的方法。

CDN(Content Delivery Network):内容分发网络。其基本思路是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。

 

2、减少发送的请求数量

在短连接情况下，每个请求都需要经过“建立连接——发送数据——断开连接”的过程，因此减少请求数量可带来显著的性能提升；即使使用持久连接方式，由于浏览器与每个服务器之间的

建立的持久连接数量是有限的，减少必须的请求也可以带来性能提升。

①利用浏览器缓存

为了充分利用浏览器缓存，需要在服务端保证每个可以被缓存的资源在被服务端返回时附带合适的expries头信息；此外，为了保证有尽可能多的内容可以被缓存，也要求网站尽可能将页面

中较少改变的部分提取出来。

△保证服务端返回资源的响应头带有Expires信息，使得资源可以被缓存；

△用引用方式引用样式表和JS脚本。如果使用内嵌的样式表和JS脚本，每次HTML文档的变化都会导致样式表和JS脚本重新加载，无法充分利用缓存；当然，在没有缓存或样式表与JS脚本

经常变动的情况下，引用方式使用样式表和JS脚本反而会导致更多的http请求；

△使用更多的URI可以被缓存。

②使用合并的图片文件

当页面包含很多个小图片文件时，可以考虑将小图片文件合并为一个大的图片文件，在页面使用CSS Sprites技术将大图片显示为分隔开的小图片，在没有缓存的情况下，将许多小图片合并为

大图片文件可以大量减少http请求数。

 
3、提高浏览器下载的并发度

①JS文件放在HTML文档最后

在某些浏览器上，JS文件的下载和执行会阻止其他页面资源文件的下载和执行，之道JS文件下载和执行完，其他资源文件才可以开始下载和执行，因此，将JS文件放在HTML文档最后可以保证

JS文件不会阻止任何其他元素的下载。

②使用多个域名

浏览器对服务器的连接限制是基于域名的。比如S服务器有2个域名a.com和b.com，在浏览器限制最多与同一个域名建立2个连接时，浏览器实际上可以与服务器S建立4个连接；

一般大型网站都拥有几个域名，根据文件类型（静态资源、动态资源、JS脚本等）选择合适的服务器进行部署，也是个很好的做法。

 
4、让页面尽早开始显示

①将样式表的引用放在HTML文档的开头（如放在<Head>标签中），这样可以使样式表在一开始就被下载下来，一旦样式表下载完成，浏览器就可以使用样式表中定义的样式开始在屏幕上

显示页面元素；另外，也避免了新样式表可能带来的屏幕显示的重绘。

②将JS的引用放在HTML文档的最后，这样JS文件的下载和执行会在所有页面都下载完成后，不会阻止其他页面元素的显示。从用户感官上说，JS文件的下载和执行时间完全不会被用户感觉到。

PS：上面几项都是一些提升前端性能的通用方式，除这些之外，还有更多更细致的针对JS文件或样式表的提升性能技巧，后续会不断更新。。。

三、常见的前端性能工具

下面简单介绍下几种常见的前端性能工具，具体使用方法及用途请自行查找资料。

1、Firebug工具

①Firebug工具是一个备受推崇的、强大的web开发工具，它提供了方便的查看页面元素功能，允许用户以鼠标指示、DOM树等方式查看任意页面元素；

②提供了JavaScript控制台，允许用户在控制台直接调试JavaScript；

③提供了可视化的CSS标尺，方便用户调整页面布局；

④提供了网路面板，允许用户获知每个页面被加载过程中的页面元素下载和执行细节；

⑤还提供了良好的扩展，比如YSlow和Page Spend工具就是基于其扩展而建立；

⑥Firebug以Firefox的插件形式存在，需要安装Firebug；

⑦Firebug给出了浏览器请求URL过程中发生的全部HTTP交互，列出每个元素的返回码、大小及按照时间序列给出的页面元素下载时间等信息；

2、HttpWatch工具

①HttpWatch是可以在IE和Firefox下使用的一个商业网页数据分析工具，其提供了一个基于basic的免费版本；

②安装简单，下载安装包后在Windows平台上直接执行即可；

③与Firebug类似，HttpWatch也给出了浏览器请求URL过程中发生的全部HTTP交互，列出每个元素的返回码、大小及按照时间序列给出的页面元素下载时间等信息；

④HttpWatch在Page Event选项卡中给出了Render Start（浏览器开始渲染页面的时间）、Page Load（onload事件触发时间）和HTTP Load时间（最后一个请求发送和接受完毕的时间点）；

⑤以上三个时间对应Firebug中的第一个Paint事件发生时间、onload时间以及收到最后一个HTTP响应的结束时间；

3、Chrome自带的开发工具

①chrome是Google推出的一款浏览器产品，特点是快速、安全、简洁。

②chrome开发工具在对URL的请求过程的发生的HTTP交互信息和Firebug以及HttpWatch很相似；

③chrome开发工具还提供了非常详尽的浏览器时间信息；

4、Page Speed工具

Page Speed是一个基于Firebug工具的前端性能优化工具，由Google创建并发布，其依据一些规则对页面进行检查，查找可优化的地方并给出响应建议。

5、DynaTrace AJAX Edition工具

①DynaTrace AJAX Edition是Windows平台上的免费工具，其提供了非常强大的前端性能测试支持，主要针对Ajax技术的应用而开发；

②DynaTrace AJAX Edition能够给出浏览器访问给定的URL时的许多信息，如页面各元素下载和执行时间点、页面对浏览器的缓存使用情况，并给出一些优化建议；

③DynaTrace AJAX Edition工具最突出的功能是对页面的JavaScript的调优；

 
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


2.  ####  页面的渲染过程
<details><summary><b>答案</b></summary>

1. 解析HTML，构建DOM树

2. 解析CSS，生成CSS规则树

3. 合并DOM树和CSS规则树，生成render树

4. 布局render树

5. 绘制render数、树，即绘制页面像素信息

6. GPU将各层合成，结果呈现在浏览器窗口中。


</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)




3. ####   静态资源或者接口等如何做缓存优化
<details><summary><b>答案</b></summary>

</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)



4. ####  当前页面出现脚本错误 页面DOM节点太多，会出现什么问题？如何优化？
<details><summary><b>答案</b></summary>
会影响加载速度，尤其是不必要的嵌套太深的时候

不利于seo，渲染耗时。
尽量不要嵌套太深层的节点

</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


### 计算机网络

1. #### 从输入URL到看到页面发生的全过程，越详细越好。(有赞)

<details><summary><b>答案</b></summary>
1. 首先浏览器主进程接管，开了一个下载线程
2. 然后进行HTTP请求（DNS查询、IP寻址等等），中间会有三次握手，等待响应，开始下载响应报文
3. 将下载完的内容转交给Renderer进程管理
4. Renderer进程开始解析css rule tree和dom tree，这两个过程是并行的，所以一般我会把link标签放在页面顶部
5. 解析绘制过程中，当浏览器遇到link标签或者script、img等标签，浏览器会去下载这些内容，遇到时候缓存的使用缓存，不适用缓存的重新下载资源
6. css rule tree和dom tree生成完了之后，开始合成render tree，这个时候浏览器会进行layout，开始计算每一个节点的位置，然后进行绘制
7. 绘制结束后，关闭TCP连接，过程有四次挥手
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


2.  ####  浏览器的缓存机制（有赞）
<details><summary><b>答案</b></summary>
浏览器缓存机制有两种，一种为强缓存，一种为协商缓存。
对于强缓存，浏览器在第一次请求的时候，会直接下载资源，然后缓存在本地，第二次请求的时候，直接使用缓存。
对于协商缓存，第一次请求缓存且保存缓存标识与时间，重复请求向服务器发送缓存标识和最后缓存时间，服务端进行校验，如果失效则使用缓存。
强缓存方案
Exprires：服务端的响应头，第一次请求的时候，告诉客户端，该资源什么时候会过期。Exprires的缺陷是必须保证服务端时间和客户端时间严格同步。
Cache-control：max-age，表示该资源多少时间后过期，解决了客户端和服务端时间必须同步的问题，
协商缓存方案
If-None-Match/ETag：缓存标识，对比缓存时使用它来标识一个缓存，第一次请求的时候，服务端会返回该标识给客户端，客户端在第二次请求的时候会带上该标识与服务端进行对比并返回If-None-Match标识是否表示匹配。
Last-modified/If-Modified-Since：第一次请求的时候服务端返回Last-modified表明请求的资源上次的修改时间，第二次请求的时候客户端带上请求头If-Modified-Since，表示资源上次的修改时间，服务端拿到这两个字段进行对比。

</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


3.  ####  ETag是这个字符串是怎么生成的？（有赞）
<details><summary><b>答案</b></summary>
通常，使用内容的散列，最后修改时间戳的哈希值，或简单地使用版本号。

</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)




4.  ####  描述二叉树的几种遍历方式？
<details><summary><b>答案</b></summary>
先序遍历：若二叉树非空，访问根结点，遍历左子树，遍历右子树。

中序遍历：若二叉树非空，遍历左子树；访问根结点；遍历右子树。

后序遍历：若二叉树非空，遍历左子树；遍历右子树；访问根结点。

所有遍历是以递归的形似，直到没有子节点。
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)


5.  ####  你记得的所有的排序，他们的原理是什么？
<details><summary><b>答案</b></summary>
冒泡排序：双层遍历，对比前后两个节点，如果满足条件，位置互换，直到遍历结束。
快速排序：去数组中间的那一个数，然后遍历所有数，小于该数的push到一个数组，大于该数的push到另外一个数组，然后递归去排序这两个数组，最后将所有结果连接起来。
选择排序：声明一个数组，每次去输入数组里面找数组中的最大值或者最小值，取出来后push到声明的数组中，直到输入数组为空。

</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


6.  ####  性能优化的方案
<details><summary><b>答案</b></summary>
首先，减少HTTP请求次数，比如说合并CSS和JS文件，但是也不要完全的合并在同一个文件里面，一个域名分散三四个资源，这样方便浏览器去并行下载，当然浏览器对每个域名的并行下载个数有限制，一个域名分配三四个资源虽然增加了HTTP请求数量，但是对比并行下载来说，性价比更高。

</details>

---

7.  ####  CDN的原理
<details><summary><b>答案</b></summary>
首先，浏览器会先请求CDN域名，CDN域名服务器会给浏览器返回指定域名的CNAME，浏览器在对这些CNAME进行解析，得到CDN缓存服务器的IP地址，浏览器在去请求缓存服务器，CDN缓存服务器根据内部专用的DNS解析得到实际IP，然后缓存服务器会向实际IP地址请求资源，缓存服务器得到资源后进行本地保存和返回给浏览器客户端。

</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


8. #### 三次握手，四次挥手（有赞）
<details><summary><b>答案</b></summary>

[​TCP的三次握手和四次挥手](https://zhuanlan.zhihu.com/p/58603455)

[以女朋友为例讲解 TCP/IP 三次握手与四次挥手](https://zhuanlan.zhihu.com/p/35768805)
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)


9. #### 软件版本号规范与命名原则（海康）
<details><summary><b>答案</b></summary>
1. 软件版本阶段说明

* Alpha版: 此版本表示该软件在此阶段主要是以实现软件功能为主，通常只在软件开发者内部交流，一般而言，该版本软件的Bug较多，需要继续修改。
* Beta版: 该版本相对于α版已有了很大的改进，消除了严重的错误，但还是存在着一些缺陷，需要经过多次测试来进一步消除，此版本主要的修改对像是软件的UI。
* RC版: 该版本已经相当成熟了，基本上不存在导致错误的BUG，与即将发行的正式版相差无几。
* Release版: 该版本意味“最终版本”，在前面版本的一系列测试版之后，终归会有一个正式版本，是最终交付用户使用的一个版本。该版本有时也称为标准版。一般情况下，Release不会以单词形式出现在软件封面上，取而代之的是符号(R)。

 

2. 版本命名规范

软件版本号由四部分组成：

第一个1为主版本号

第二个1为子版本号

第三个1为阶段版本号

第四部分为日期版本号加希腊字母版本号

希腊字母版本号共有5种，分别为：base、alpha、beta、RC、release。例如：1.1.1.051021_beta

 

常规：完全的版本号定义，分三项：：<主版本号>.<次版本号>.<修订版本号>，如 1.0.0


3. 版本号定修改规则

* 主版本号(1)：当功能模块有较大的变动，比如增加多个模块或者整体架构发生变化。此版本号由项目决定是否修改。
* 子版本号(1)：当功能有一定的增加或变化，比如增加了对权限控制、增加自定义视图等功能。此版本号由项目决定是否修改。
* 阶段版本号(1)：一般是 Bug 修复或是一些小的变动，要经常发布修订版，时间间隔不限，修复一个严重的bug即可发布一个修订版。此版本号由项目经理决定是否修改。
* 日期版本号(051021):用于记录修改项目的当前日期，每天对项目的修改都需要更改日期版本号。此版本号由开发人员决定是否修改。
* 希腊字母版本号(beta):此版本号用于标注当前版本的软件处于哪个开发阶段，当软件进入到另一个阶段时需要修改此版本号。此版本号由项目决定是否修改。

 

4. 文件命名规范

文件名称由四部分组成：第一部分为项目名称，第二部分为文件的描述，第三部分为当前软件的版本号，第四部分为文件阶段标识加文件后缀，例如：项目外 包平台测试报告1.1.1.051021_beta_b.xls，此文件为项目外包平台的测试报告文档，版本号为：1.1.1.051021_beta。

如果是同一版本同一阶段的文件修改过两次以上，则在阶段标识后面加以数字标识，每次修改数字加1，项目外包平台测试报告1.1.1.051021_beta_b1.xls。

当有多人同时提交同一份文件时，可以在阶段标识的后面加入人名或缩写来区别，例如：项目外包平台测试报告 1.1.1.051021_beta_b_LiuQi.xls。当此文件再次提交时也可以在人名或人名缩写的后面加入序号来区别，例如：项目外包平台测试 报告1.1.1.051021_beta_b_LiuQi2.xls。

 

5. 版本号的阶段标识

软件的每个版本中包括11个阶段，详细阶段描述如下：

阶段名称                            阶段标识
需求控制                               a
设计阶段                               b
编码阶段                               c
单元测试                               d
单元测试修改                       e
集成测试                               f
集成测试修改                       g
系统测试                               h
系统测试修改                       i
验收测试                               j
验收测试修改                       k

https://www.cnblogs.com/scottx/p/5463447.html
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

9. #### 关于http请求，下面说法不正确的是(大搜车)

<details><summary><b>答案</b></summary>

  A. get请求在客户端中能够被缓存
  B. 302状态码表示moved permanently
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

10. #### 关于缓存下面说法不正确的是(大搜车)
A. expires,age,cache-control都是和缓存相关的头
B. 
<details><summary><b>答案</b></summary>


</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)



11. #### Cookie和Session的区别及使用（海康）

<details><summary><b>答案</b></summary>
前言
HTTP是一种无状态的协议，为了分辨链接是谁发起的，需自己去解决这个问题。不然有些情况下即使是同一个网站每打开一个页面也都要登录一下。而Session和Cookie就是为解决这个问题而提出来的两个机制。
应用场景
登录网站，今输入用户名密码登录了，第二天再打开很多情况下就直接打开了。这个时候用到的一个机制就是cookie。
session一个场景是购物车，添加了商品之后客户端处可以知道添加了哪些商品，而服务器端如何判别呢，所以也需要存储一些信息就用到了session。
1.Cookie
通俗讲，是访问某些网站后在本地存储的一些网站相关信息，下次访问时减少一些步骤。更准确的说法是：Cookies是服务器在本地机器上存储的小段文本并随每一个请求发送至同一服务器，是在客户端保持状态的方案。
Cookie的主要内容包括：名字，值，过期时间，路径和域。使用Fiddler抓包就可以看见，比方说我们打开百度的某个网站可以看到Headers包括Cookie，如下：

BIDUPSID: 9D2194F1CB8D1E56272947F6B0E5D47E
PSTM: 1472480791
BAIDUID: 3C64D3C3F1753134D13C33AFD2B38367:FG
ispeed_lsm: 2
MCITY: -131:
pgv_pvi: 3797581824
pgv_si: s9468756992
BDUSS: JhNXVoQmhPYTVENEdIUnQ5S05xcHZMMVY5QzFRNVh5SzZoV0xMVDR6RzV-bEJZSVFBQUFBJCQAAAAAAAAAAAEAAACteXsbYnRfY2hpbGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALlxKVi5cSlYZj
BD_HOME: 1
H_PS_PSSID: 1423_21080_17001_21454_21408_21530_21377_21525_21193_21340
BD_UPN: 123253
sug: 3
sugstore: 0
ORIGIN: 0
bdime: 0

key, value形式。过期时间可设置的，如不设，则浏览器关掉就消失了，存储在内存当中，否则就按设置的时间来存储在硬盘上的，过期后自动清除，比方说开关机关闭再打开浏览器后他都会还存在，前者称之为Session cookie 又叫 transient cookie，后者称之为Persistent cookie 又叫 permenent cookie。路径和域就是对应的域名，a网站的cookie自然不能给b用。
2.Session
存在服务器的一种用来存放用户数据的类HashTable结构。
浏览器第一次发送请求时，服务器自动生成了一HashTable和一Session ID来唯一标识这个HashTable，并将其通过响应发送到浏览器。浏览器第二次发送请求会将前一次服务器响应中的Session ID放在请求中一并发送到服务器上，服务器从请求中提取出Session ID，并和保存的所有Session ID进行对比，找到这个用户对应的HashTable。
一般这个值会有个时间限制，超时后毁掉这个值，默认30分钟。
当用户在应用程序的 Web页间跳转时，存储在 Session 对象中的变量不会丢失而是在整个用户会话中一直存在下去。
Session的实现方式和Cookie有一定关系。建立一个连接就生成一个session id，打开几个页面就好几个了，这里就用到了Cookie，把session id存在Cookie中，每次访问的时候将Session id带过去就可以识别了.
区别
存储数据量方面：session 能够存储任意的 java 对象，cookie 只能存储 String 类型的对象
一个在客户端一个在服务端。因Cookie在客户端所以可以编辑伪造，不是十分安全。
Session过多时会消耗服务器资源，大型网站会有专门Session服务器，Cookie存在客户端没问题。
域的支持范围不一样，比方说a.com的Cookie在a.com下都能用，而www.a.com的Session在api.a.com下都不能用，解决这个问题的办法是JSONP或者跨域资源共享。
session多服务器间共享
服务器实现的 session 复制或 session 共享，如 webSphere或 JBOSS 在搭集群时配置实现 session 复制或 session 共享.致命缺点:不好扩展和移植。
利用成熟技术做session复制，如12306使用的gemfire，如常见内存数据库redis或memorycache，虽较普适但依赖第三方.
将 session维护在客户端，利用 cookie，但客户端存在风险数据不安全，且可以存放的数据量较小，所以将session 维护在客户端还要对 session 中的信息加密。
第二种方案和第三种方案的合体，可用gemfire实现 session 复制共享，还可将session 维护在 redis中实现 session 共享，同时可将 session 维护在客户端的cookie 中，但前提是数据要加密。
这三种方式可迅速切换，而不影响应用正常执行。在实践中，首选 gemfire 或者 redis 作为 session 共享的载体，一旦 session 不稳定出现问题的时候，可以紧急切换 cookie 维护 session 作为备用，不影响应用提供服务

单点登录中，cookie 被禁用了怎么办？（一点登陆，子网站其他系统不用再登陆）
单点登录的原理是后端生成一个 session ID，设置到 cookie，后面所有请求浏览器都会带上cookie，然后服务端从cookie获取 session ID，查询到用户信息。
所以，保持登录的关键不是cookie，而是通过cookie 保存和传输的 session ID，本质是能获取用户信息的数据。
除了cookie，还常用 HTTP 请求头来传输。但这个请求头浏览器不会像cookie一样自动携带，需手工处理
————————————————
版权声明：本文为CSDN博主「成功人士从不写博客」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/liyifan687/article/details/80077928
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

12. #### 有几种方式可以实现存储功能，分别有什么优缺点？什么是 Service Worker？（海康）

<details><summary><b>答案</b></summary>
cookie，localStorage，sessionStorage，indexDB
我们先来通过表格学习下这几种存储方式的区别

特性	cookie	localStorage	sessionStorage	indexDB
数据生命周期	一般由服务器生成，可以设置过期时间	除非被清理，否则一直存在	页面关闭就清理	除非被清理，否则一直存在
数据存储大小	4K	5M	5M	无限
与服务端通信	每次都会携带在 header 中，对于请求性能影响	不参与	不参与	不参与
从上表可以看到，cookie 已经不建议用于存储。如果没有大量数据存储需求的话，可以使用 localStorage 和 sessionStorage 。对于不怎么改变的数据尽量使用 localStorage 存储，否则可以用 sessionStorage 存储。

对于 cookie 来说，我们还需要注意安全性。

属性	作用
value	如果用于保存用户登录态，应该将该值加密，不能使用明文的用户标识
http-only	不能通过 JS 访问 Cookie，减少 XSS 攻击
secure	只能在协议为 HTTPS 的请求中携带
same-site	规定浏览器不能在跨域请求中携带 Cookie，减少 CSRF 攻击
Service Worker
Service Worker 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。使用 Service Worker的话，传输协议必须为 HTTPS。因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全。

Service Worker 实现缓存功能一般分为三个步骤：首先需要先注册 Service Worker，然后监听到 install 事件以后就可以缓存需要的文件，那么在下次用户访问的时候就可以通过拦截请求的方式查询是否存在缓存，存在缓存的话就可以直接读取缓存文件，否则就去请求数据。以下是这个步骤的实现：

// index.js
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('sw.js')
    .then(function(registration) {
      console.log('service worker 注册成功')
    })
    .catch(function(err) {
      console.log('servcie worker 注册失败')
    })
}
// sw.js
// 监听 `install` 事件，回调中缓存所需文件
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll(['./index.html', './index.js'])
    })
  )
})

// 拦截所有请求事件
// 如果缓存中已经有请求的数据就直接用缓存，否则去请求数据
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response) {
        return response
      }
      console.log('fetch source')
    })
  )
})
打开页面，可以在开发者工具中的 Application 看到 Service Worker 已经启动了


在 Cache 中也可以发现我们所需的文件已被缓存


当我们重新刷新页面可以发现我们缓存的数据是从 Service Worker 中读取的


</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

13. #### 浏览器缓存机制 性能优化

<details><summary><b>答案</b></summary>
缓存可以说是性能优化中简单高效的一种优化方式了，它可以显著减少网络传输所带来的损耗。

对于一个数据请求来说，可以分为发起网络请求、后端处理、浏览器响应三个步骤。浏览器缓存可以帮助我们在第一和第三步骤中优化性能。比如说直接使用缓存而不发起请求，或者发起了请求但后端存储的数据和前端一致，那么就没有必要再将数据回传回来，这样就减少了响应数据。

接下来的内容中我们将通过以下几个部分来探讨浏览器缓存机制：

缓存位置
缓存策略
实际场景应用缓存策略
缓存位置
从缓存位置上来说分为四种，并且各自有优先级，当依次查找缓存且都没有命中的时候，才会去请求网络

Service Worker
Memory Cache
Disk Cache
Push Cache
网络请求
Service Worker
在上一章节中我们已经介绍了 Service Worker 的内容，这里就不演示相关的代码了。

Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的。

当 Service Worker 没有命中缓存的时候，我们需要去调用 fetch 函数获取数据。也就是说，如果我们没有在 Service Worker 命中缓存的话，会根据缓存查找优先级去查找数据。但是不管我们是从 Memory Cache 中还是从网络请求中获取的数据，浏览器都会显示我们是从 Service Worker 中获取的内容。

Memory Cache
Memory Cache 也就是内存中的缓存，读取内存中的数据肯定比磁盘快。但是内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。 一旦我们关闭 Tab 页面，内存中的缓存也就被释放了。

当我们访问过页面以后，再次刷新页面，可以发现很多数据都来自于内存缓存


从内存中读取缓存
那么既然内存缓存这么高效，我们是不是能让数据都存放在内存中呢？

先说结论，这是不可能的。首先计算机中的内存一定比硬盘容量小得多，操作系统需要精打细算内存的使用，所以能让我们使用的内存必然不多。内存中其实可以存储大部分的文件，比如说 JSS、HTML、CSS、图片等等。但是浏览器会把哪些文件丢进内存这个过程就很玄学了，我查阅了很多资料都没有一个定论。

当然，我通过一些实践和猜测也得出了一些结论：

对于大文件来说，大概率是不存储在内存中的，反之优先
当前系统内存使用率高的话，文件优先存储进硬盘
Disk Cache
Disk Cache 也就是存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache 胜在容量和存储时效性上。

在所有浏览器缓存中，Disk Cache 覆盖面基本是最大的。它会根据 HTTP Herder 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据。

Push Cache
Push Cache 是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。并且缓存时间也很短暂，只在会话（Session）中存在，一旦会话结束就被释放。

Push Cache 在国内能够查到的资料很少，也是因为 HTTP/2 在国内不够普及，但是 HTTP/2 将会是日后的一个趋势。这里推荐阅读 HTTP/2 push is tougher than I thought 这篇文章，但是内容是英文的，我翻译一下文章中的几个结论，有能力的同学还是推荐自己阅读

所有的资源都能被推送，但是 Edge 和 Safari 浏览器兼容性不怎么好
可以推送 no-cache 和 no-store 的资源
一旦连接被关闭，Push Cache 就被释放
多个页面可以使用相同的 HTTP/2 连接，也就是说能使用同样的缓存
Push Cache 中的缓存只能被使用一次
浏览器可以拒绝接受已经存在的资源推送
你可以给其他域名推送资源

</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

14.  #### 缓存策略

<details><summary><b>答案</b></summary>
通常浏览器缓存策略分为两种：强缓存和协商缓存，并且缓存策略都是通过设置 HTTP Header 来实现的。

强缓存
强缓存可以通过设置两种 HTTP Header 实现：Expires 和 Cache-Control 。强缓存表示在缓存期间不需要请求，state code 为 200。

Expires
Expires: Wed, 22 Oct 2018 08:41:00 GMT
Expires 是 HTTP/1 的产物，表示资源会在 Wed, 22 Oct 2018 08:41:00 GMT 后过期，需要再次请求。并且 Expires 受限于本地时间，如果修改了本地时间，可能会造成缓存失效。

Cache-control
Cache-control: max-age=30
Cache-Control 出现于 HTTP/1.1，优先级高于 Expires 。该属性值表示资源会在 30 秒后过期，需要再次请求。

Cache-Control 可以在请求头或者响应头中设置，并且可以组合使用多种指令


多种指令配合流程图
从图中我们可以看到，我们可以将多个指令配合起来一起使用，达到多个目的。比如说我们希望资源能被缓存下来，并且是客户端和代理服务器都能缓存，还能设置缓存失效时间等等。

接下来我们就来学习一些常见指令的作用


常见指令作用
协商缓存
如果缓存过期了，就需要发起请求验证资源是否有更新。协商缓存可以通过设置两种 HTTP Header 实现：Last-Modified 和 ETag 。

当浏览器发起请求验证资源时，如果资源没有做改变，那么服务端就会返回 304 状态码，并且更新浏览器缓存有效期。


协商缓存
Last-Modified 和 If-Modified-Since
Last-Modified 表示本地文件最后修改日期，If-Modified-Since 会将 Last-Modified 的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来，否则返回 304 状态码。

但是 Last-Modified 存在一些弊端：

如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成 Last-Modified 被修改，服务端不能命中缓存导致发送相同的资源
因为 Last-Modified 只能以秒计时，如果在不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源
因为以上这些弊端，所以在 HTTP / 1.1 出现了 ETag 。

ETag 和 If-None-Match
ETag 类似于文件指纹，If-None-Match 会将当前 ETag 发送给服务器，询问该资源 ETag 是否变动，有变动的话就将新的资源发送回来。并且 ETag 优先级比 Last-Modified 高。

以上就是缓存策略的所有内容了，看到这里，不知道你是否存在这样一个疑问。如果什么缓存策略都没设置，那么浏览器会怎么处理？

对于这种情况，浏览器会采用一个启发式的算法，通常会取响应头中的 Date 减去 Last-Modified 值的 10% 作为缓存时间。

实际场景应用缓存策略
单纯了解理论而不付诸于实践是没有意义的，接下来我们来通过几个场景学习下如何使用这些理论。

频繁变动的资源
对于频繁变动的资源，首先需要使用 Cache-Control: no-cache 使浏览器每次都请求服务器，然后配合 ETag 或者 Last-Modified 来验证资源是否有效。这样的做法虽然不能节省请求数量，但是能显著减少响应数据大小。

代码文件
这里特指除了 HTML 外的代码文件，因为 HTML 文件一般不缓存或者缓存时间很短。

一般来说，现在都会使用工具来打包代码，那么我们就可以对文件名进行哈希处理，只有当代码修改后才会生成新的文件名。基于此，我们就可以给代码文件设置缓存有效期一年 Cache-Control: max-age=31536000，这样只有当 HTML 文件中引入的文件名发生了改变才会去下载最新的代码文件，否则就一直使用缓存。

</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)


14.  #### 插入几万个 DOM，如何实现页面不卡顿？

<details><summary><b>答案</b></summary>
对于这道题目来说，首先我们肯定不能一次性把几万个 DOM 全部插入，这样肯定会造成卡顿，所以解决问题的重点应该是如何分批次部分渲染 DOM。大部分人应该可以想到通过 requestAnimationFrame 的方式去循环的插入 DOM，其实还有种方式去解决这个问题：虚拟滚动（virtualized scroller）。

这种技术的原理就是只渲染可视区域内的内容，非可见区域的那就完全不渲染了，当用户在滚动的时候就实时去替换渲染的内容。
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

15.  #### 浏览器接收到 HTML 文件并转换为 DOM 树的步骤

<details><summary><b>答案</b></summary>
当我们打开一个网页时，浏览器都会去请求对应的 HTML 文件。虽然平时我们写代码时都会分为 JS、CSS、HTML 文件，也就是字符串，但是计算机硬件是不理解这些字符串的，所以在网络中传输的内容其实都是 0 和 1 这些字节数据。当浏览器接收到这些字节数据以后，它会将这些字节数据转换为字符串，也就是我们写的代码。


当数据转换为字符串以后，浏览器会先将这些字符串通过词法分析转换为标记（token），这一过程在词法分析中叫做标记化（tokenization）。


那么什么是标记呢？这其实属于编译原理这一块的内容了。简单来说，标记还是字符串，是构成代码的最小单位。这一过程会将代码分拆成一块块，并给这些内容打上标记，便于理解这些最小单位的代码是什么意思。


当结束标记化后，这些标记会紧接着转换为 Node，最后这些 Node 会根据不同 Node 之前的联系构建为一颗 DOM 树。


以上就是浏览器从网络中接收到 HTML 文件然后一系列的转换过程。


当然，在解析 HTML 文件的时候，浏览器还会遇到 CSS 和 JS 文件，这时候浏览器也会去下载并解析这些文件，接下来就让我们先来学习浏览器如何解析 CSS 文件。

将 CSS 文件转换为 CSSOM 树
其实转换 CSS 到 CSSOM 树的过程和上一小节的过程是极其类似的


在这一过程中，浏览器会确定下每一个节点的样式到底是什么，并且这一过程其实是很消耗资源的。因为样式你可以自行设置给某个节点，也可以通过继承获得。在这一过程中，浏览器得递归 CSSOM 树，然后确定具体的元素到底是什么样式。

如果你有点不理解为什么会消耗资源的话，我这里举个例子

<div>
  <a> <span></span> </a>
</div>
<style>
  span {
    color: red;
  }
  div > a > span {
    color: red;
  }
</style>
对于第一种设置样式的方式来说，浏览器只需要找到页面中所有的 span 标签然后设置颜色，但是对于第二种设置样式的方式来说，浏览器首先需要找到所有的 span 标签，然后找到 span 标签上的 a 标签，最后再去找到 div 标签，然后给符合这种条件的 span 标签设置颜色，这样的递归过程就很复杂。所以我们应该尽可能的避免写过于具体的 CSS 选择器，然后对于 HTML 来说也尽量少的添加无意义标签，保证层级扁平。

生成渲染树
当我们生成 DOM 树和 CSSOM 树以后，就需要将这两棵树组合为渲染树。


在这一过程中，不是简单的将两者合并就行了。渲染树只会包括需要显示的节点和这些节点的样式信息，如果某个节点是 display: none 的，那么就不会在渲染树中显示。

当浏览器生成渲染树以后，就会根据渲染树来进行布局（也可以叫做回流），然后调用 GPU 绘制，合成图层，显示在屏幕上。对于这一部分的内容因为过于底层，还涉及到了硬件相关的知识，这里就不再继续展开内容了。

那么通过以上内容，我们已经详细了解到了浏览器从接收文件到将内容渲染在屏幕上的这一过程。接下来，我们将会来学习上半部分遗留下来的一些知识点。
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

16.  #### 什么情况阻塞渲染

<details><summary><b>答案</b></summary>
首先渲染的前提是生成渲染树，所以 HTML 和 CSS 肯定会阻塞渲染。如果你想渲染的越快，你越应该降低一开始需要渲染的文件大小，并且扁平层级，优化选择器。

然后当浏览器在解析到 script 标签时，会暂停构建 DOM，完成后才会从暂停的地方重新开始。也就是说，如果你想首屏渲染的越快，就越不应该在首屏就加载 JS 文件，这也是都建议将 script 标签放在 body 标签底部的原因。

当然在当下，并不是说 script 标签必须放在底部，因为你可以给 script 标签添加 defer 或者 async 属性。

当 script 标签加上 defer 属性以后，表示该 JS 文件会并行下载，但是会放到 HTML 解析完成后顺序执行，所以对于这种情况你可以把 script 标签放在任意位置。

对于没有任何依赖的 JS 文件可以加上 async 属性，表示 JS 文件下载和解析不会阻塞渲染。
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

17.  #### 重绘（Repaint）和回流（Reflow）

<details><summary><b>答案</b></summary>
重绘和回流会在我们设置节点样式时频繁出现，同时也会很大程度上影响性能。

重绘是当节点需要更改外观而不会影响布局的，比如改变 color 就叫称为重绘
回流是布局或者几何属性需要改变就称为回流。
回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多，改变父节点里的子节点很可能会导致父节点的一系列回流。

以下几个动作可能会导致性能问题：

改变 window 大小
改变字体
添加或删除样式
文字改变
定位或者浮动
盒模型
并且很多人不知道的是，重绘和回流其实也和 Eventloop 有关。

当 Eventloop 执行完 Microtasks 后，会判断 document 是否需要更新，因为浏览器是 60Hz 的刷新率，每 16.6ms 才会更新一次。
然后判断是否有 resize 或者 scroll 事件，有的话会去触发事件，所以 resize 和 scroll 事件也是至少 16ms 才会触发一次，并且自带节流功能。
判断是否触发了 media query
更新动画并且发送事件
判断是否有全屏操作事件
执行 requestAnimationFrame 回调
执行 IntersectionObserver 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好
更新界面
以上就是一帧中可能会做的事情。如果在一帧中有空闲时间，就会去执行 requestIdleCallback 回调。
以上内容来自于 HTML 文档。

既然我们已经知道了重绘和回流会影响性能，那么接下来我们将会来学习如何减少重绘和回流的次数。

减少重绘和回流
使用 transform 替代 top
<div class="test"></div>
<style>
  .test {
    position: absolute;
    top: 10px;
    width: 100px;
    height: 100px;
    background: red;
  }
</style>
<script>
  setTimeout(() => {
    // 引起回流
    document.querySelector('.test').style.top = '100px'
  }, 1000)
</script>
使用 visibility 替换 display: none ，因为前者只会引起重绘，后者会引发回流（改变了布局）

不要把节点的属性值放在一个循环里当成循环里的变量

for(let i = 0; i < 1000; i++) {
    // 获取 offsetTop 会导致回流，因为需要去获取正确的值
    console.log(document.querySelector('.test').style.offsetTop)
}
不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局

动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 requestAnimationFrame

CSS 选择符从右往左匹配查找，避免节点层级过多

将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响别的节点。比如对于 video 标签来说，浏览器会自动将该节点变为图层。


设置节点为图层的方式有很多，我们可以通过以下几个常用属性可以生成新图层

will-change
video、iframe 标签
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

18.  #### 什么是 XSS 攻击？如何防范 XSS 攻击？什么是 CSP？

<details><summary><b>答案</b></summary>
XSS 简单点来说，就是攻击者想尽一切办法将可以执行的代码注入到网页中。

XSS 可以分为多种类型，但是总体上我认为分为两类：持久型和非持久型。

持久型也就是攻击的代码被服务端写入进数据库中，这种攻击危害性很大，因为如果网站访问量很大的话，就会导致大量正常访问页面的用户都受到攻击。

举个例子，对于评论功能来说，就得防范持久型 XSS 攻击，因为我可以在评论中输入以下内容


这种情况如果前后端没有做好防御的话，这段评论就会被存储到数据库中，这样每个打开该页面的用户都会被攻击到。

非持久型相比于前者危害就小的多了，一般通过修改 URL 参数的方式加入攻击代码，诱导用户访问链接从而进行攻击。

举个例子，如果页面需要从 URL 中获取某些参数作为内容的话，不经过过滤就会导致攻击代码被执行

<!-- http://www.domain.com?name=<script>alert(1)</script> -->
<div>{{name}}</div>                                                  
但是对于这种攻击方式来说，如果用户使用 Chrome 这类浏览器的话，浏览器就能自动帮助用户防御攻击。但是我们不能因此就不防御此类攻击了，因为我不能确保用户都使用了该类浏览器。


对于 XSS 攻击来说，通常有两种方式可以用来防御。

转义字符
首先，对于用户的输入应该是永远不信任的。最普遍的做法就是转义输入输出的内容，对于引号、尖括号、斜杠进行转义

function escape(str) {
  str = str.replace(/&/g, '&amp;')
  str = str.replace(/</g, '&lt;')
  str = str.replace(/>/g, '&gt;')
  str = str.replace(/"/g, '&quto;')
  str = str.replace(/'/g, '&#39;')
  str = str.replace(/`/g, '&#96;')
  str = str.replace(/\//g, '&#x2F;')
  return str
}
通过转义可以将攻击代码 <script>alert(1)</script> 变成

// -> &lt;script&gt;alert(1)&lt;&#x2F;script&gt;
escape('<script>alert(1)</script>')
但是对于显示富文本来说，显然不能通过上面的办法来转义所有字符，因为这样会把需要的格式也过滤掉。对于这种情况，通常采用白名单过滤的办法，当然也可以通过黑名单过滤，但是考虑到需要过滤的标签和标签属性实在太多，更加推荐使用白名单的方式。

const xss = require('xss')
let html = xss('<h1 id="title">XSS Demo</h1><script>alert("xss");</script>')
// -> <h1>XSS Demo</h1>&lt;script&gt;alert("xss");&lt;/script&gt;
console.log(html)
以上示例使用了 js-xss 来实现，可以看到在输出中保留了 h1 标签且过滤了 script 标签。

CSP
CSP 本质上就是建立白名单，开发者明确告诉浏览器哪些外部资源可以加载和执行。我们只需要配置规则，如何拦截是由浏览器自己实现的。我们可以通过这种方式来尽量减少 XSS 攻击。

通常可以通过两种方式来开启 CSP：

设置 HTTP Header 中的 Content-Security-Policy
设置 meta 标签的方式 <meta http-equiv="Content-Security-Policy">
这里以设置 HTTP Header 来举例

只允许加载本站资源

Content-Security-Policy: default-src ‘self’
只允许加载 HTTPS 协议图片

Content-Security-Policy: img-src https://*
允许加载任何来源框架

Content-Security-Policy: child-src 'none'
当然可以设置的属性远不止这些，你可以通过查阅 文档 的方式来学习，这里就不过多赘述其他的属性了。

对于这种方式来说，只要开发者配置了正确的规则，那么即使网站存在漏洞，攻击者也不能执行它的攻击代码，并且 CSP 的兼容性也不错。
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)


19.  #### 什么是 CSRF 攻击？如何防范 CSRF 攻击？

<details><summary><b>答案</b></summary>
CSRF 中文名为跨站请求伪造。原理就是攻击者构造出一个后端请求地址，诱导用户点击或者通过某些途径自动发起请求。如果用户是在登录状态下的话，后端就以为是用户在操作，从而进行相应的逻辑。

举个例子，假设网站中有一个通过 GET 请求提交用户评论的接口，那么攻击者就可以在钓鱼网站中加入一个图片，图片的地址就是评论接口

<img src="http://www.domain.com/xxx?comment='attack'"/>
那么你是否会想到使用 POST 方式提交请求是不是就没有这个问题了呢？其实并不是，使用这种方式也不是百分百安全的，攻击者同样可以诱导用户进入某个页面，在页面中通过表单提交 POST 请求。

如何防御
防范 CSRF 攻击可以遵循以下几种规则：

Get 请求不对数据进行修改
不让第三方网站访问到用户 Cookie
阻止第三方网站请求接口
请求时附带验证信息，比如验证码或者 Token
SameSite
可以对 Cookie 设置 SameSite 属性。该属性表示 Cookie 不随着跨域请求发送，可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容。

验证 Referer
对于需要防范 CSRF 的请求，我们可以通过验证 Referer 来判断该请求是否为第三方网站发起的。

Token
服务器下发一个随机 Token，每次发起请求时将 Token 携带上，服务器验证 Token 是否有效。
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

20.  #### 什么是点击劫持？如何防范点击劫持？

<details><summary><b>答案</b></summary>
点击劫持是一种视觉欺骗的攻击手段。攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击。


对于这种攻击方式，推荐防御的方法有两种。

X-FRAME-OPTIONS
X-FRAME-OPTIONS 是一个 HTTP 响应头，在现代浏览器有一个很好的支持。这个 HTTP 响应头 就是为了防御用 iframe 嵌套的点击劫持攻击。

该响应头有三个值可选，分别是

DENY，表示页面不允许通过 iframe 的方式展示
SAMEORIGIN，表示页面可以在相同域名下通过 iframe 的方式展示
ALLOW-FROM，表示页面可以在指定来源的 iframe 中展示
JS 防御
对于某些远古浏览器来说，并不能支持上面的这种方式，那我们只有通过 JS 的方式来防御点击劫持了。

<head>
  <style id="click-jack">
    html {
      display: none !important;
    }
  </style>
</head>
<body>
  <script>
    if (self == top) {
      var style = document.getElementById('click-jack')
      document.body.removeChild(style)
    } else {
      top.location = self.location
    }
  </script>
</body>
以上代码的作用就是当通过 iframe 的方式加载页面时，攻击者的网页直接不显示所有内容了。
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

21.  #### 什么是中间人攻击？如何防范中间人攻击？

<details><summary><b>答案</b></summary>
中间人攻击是攻击方同时与服务端和客户端建立起了连接，并让对方认为连接是安全的，但是实际上整个通信过程都被攻击者控制了。攻击者不仅能获得双方的通信信息，还能修改通信信息。

通常来说不建议使用公共的 Wi-Fi，因为很可能就会发生中间人攻击的情况。如果你在通信的过程中涉及到了某些敏感信息，就完全暴露给攻击方了。

当然防御中间人攻击其实并不难，只需要增加一个安全通道来传输信息。HTTPS 就可以用来防御中间人攻击，但是并不是说使用了 HTTPS 就可以高枕无忧了，因为如果你没有完全关闭 HTTP 访问的话，攻击方可以通过某些方式将 HTTPS 降级为 HTTP 从而实现中间人攻击。
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

18.  #### 什么是 XSS 攻击？如何防范 XSS 攻击？什么是 CSP？

<details><summary><b>答案</b></summary>

</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

### 人事问题

1. [自我介绍](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr1.md)

2. [为什么离职？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr2.md)

3. [上家公司在哪？能提供联系方式做背景调查吗？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr3.md)

4. [可以提供工资流水吗？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr4.md)

5. [今天面试的这么多人，你觉得自己的优势在什么地方？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr5.md)

6. [加班的看法？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr6.md)

7. [你期望的薪资？最低能接受多少？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr7.md)

8. [你的职业规划？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr8.md)

9. [上份工作遇到的最大的问题？（如何来解决的）](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr9.md)

10. [通过了这次录用，但是工作了一段时间却发现不能胜任这份工作，怎么办](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr10.md)

11. [你的意见和领导或者同事发生冲突和矛盾的时候 怎么办？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr11.md)

12. [跳槽的看法？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr12.md)

13. [现在求职最看重什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr13.md)

14. [你还有什么想要了解的吗？（先谈待遇再谈工作）](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr14.md)

15. [讲一讲自己工作中的优点和缺点？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr15.md)

16. [为何转行？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr16.md)

17. [介绍一下你最近做的一个项目](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr17.md)

[[↑] 回到顶部](#awsome-knowledge-front-end)

## 参考文献

<details>

[awesome-coding-js](http://www.conardli.top/docs/JavaScript/)

[sudheerj/vuejs-interview-questions](https://github.com/sudheerj/vuejs-interview-questions)

[lydiahallie/javascript-questions](https://github.com/lydiahallie/javascript-questions)

[CyC2018/CS-Notes](https://github.com/CyC2018/CS-Notes)

[Snailclimb/JavaGuide](https://github.com/Snailclimb/JavaGuide)

[h5bp/Front-end-Developer-Interview-Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions)

[MaximAbramchuck/awesome-interview-questions](https://github.com/MaximAbramchuck/awesome-interview-questions)

[imhuay/Algorithm_Interview_Notes-Chinese](https://github.com/imhuay/Algorithm_Interview_Notes-Chinese)

[yangshun / front-end-interview-handbook](https://github.com/yangshun/front-end-interview-handbook)

[InterviewMap / CS-Interview-Knowledge-Map](https://github.com/InterviewMap/CS-Interview-Knowledge-Map)

[ElemeFE/node-interview](https://github.com/ElemeFE/node-interview)

[Advanced-Frontend / Daily-Interview-Question](https://github.com/Advanced-Frontend/Daily-Interview-Question)

[30-seconds/30-seconds-of-interviews](https://github.com/30-seconds/30-seconds-of-interviews)

[helloqingfeng/Awsome-Front-End-learning-resource](https://github.com/helloqingfeng/Awsome-Front-End-learning-resource)

[khan4019/front-end-Interview-Questions](https://github.com/khan4019/front-end-Interview-Questions)

[webproblem/learning-article](https://github.com/webproblem/learning-article)

[这里有一份 JavaScript 高级面试题，请来回答](http://www.imooc.com/article/23647)

[一年半经验，百度、有赞、阿里前端面试总结](https://juejin.im/post/5befeb5051882511a8527dbe)

[前端面试题（2019篇）附答案](http://bbs.itheima.com/thread-468297-1-1.html)

[阿里、网易、滴滴共十次前端面试碰到的问题](https://juejin.im/post/59316e682f301e0058378558)

[[↑] 回到顶部](#awsome-knowledge-front-end)


</details>



### 大搜车


#### 伪元素选择器不包含(大搜车)
last-line
last-letter
behind
first-line
first-letter

#### 关于跨端开发下面说法不正确的是(大搜车)
使用rn或者weex跟使用webview内嵌h5用户体验相差不多
flutter开发的语言是dart
rn跟原生通信，用的是native modules
weex网络请求使用浏览器xxx（不是stream.StreamAPIfetch）的发出


#### 使用正则表达式验证邮箱格式(大搜车)

#### 浏览器实现js多线程提供原生对象是(大搜车)

#### web存储方式(大搜车)

#### spa路由实现的两种方式(大搜车)

#### 获取浏览器的ua(大搜车)

#### 判断数组(大搜车)

#### css伪类清浮动(大搜车)

#### 子div在父div水平垂直居中(大搜车)

#### 跨域方法(大搜车)

#### 实现indexof(大搜车)

#### sass(大搜车)

### 海康

#### vue3.0的变化（海康）

全面改革：解读vue3.0的变化
9月30日，尤雨溪在medium个人博客上发布了vue3.0的开发思路，国内有翻译的版本，见文章最后的参考链接。3.0带了了很大的变化，他讲了一些改进的思路以及整个开发流程的规划。

vue3.0的改进思路
vue最主要的特点就是响应式机制、模板、以及对象式的组件声明语法，而3.0对这三部分都做了更改。


响应式
2.x的响应式是基于Object.defineProperty实现的代理，兼容主流浏览器和ie9以上的ie浏览器，能够监听数据对象的变化，但是监听不到对象属性的增删、数组元素和长度的变化，同时会在vue初始化的时候把所有的Observer都建立好，才能观察到数据对象属性的变化。

针对上面的问题，3.0进行了革命性的变更，采用了ES2015的Proxy来代替Object.defineProperty，可以做到监听对象属性的增删和数组元素和长度的修改，还可以监听Map、Set、WeakSet、WeakMap，同时还实现了惰性的监听，不会在初始化的时候创建所有的Observer，而是会在用到的时候才去监听。但是，虽然主流的浏览器都支持Proxy，ie系列却还是不兼容，所以针对ie11，vue3.0决定做单独的适配，暴露出来的api一样，但是底层实现还是Object.defineProperty，这样导致了ie11还是有2.x的问题。但是绝大部分情况下，3.0带来的好处已经能够体验到了。

响应式方面，vue3.0做了实现机制的变更，采用ES2015的Proxy，不但解决了vue2.x中的问题，还是得性能有了进一步提升。虽然有一些兼容问题，但是通过适配的方式解决掉了。此外，还暴露了observable的api来创建响应式对象，可以替代掉event bus，来做一些跨组件的通信。

2.模板
模板方面没有大的变更，只改了作用域插槽，2.x的机制导致作用域插槽变了，父组件会重新渲染，而3.0把作用于插槽改成了函数的方式，这样只会影响子组件的重新渲染，提升了渲染的性能。

同时，对于render函数的方面，vue3.0也会进行一系列更改来方便习惯直接使用api来生成vdom的开发者。

对象式的组件声明方式

vue2.x中的组件是通过声明的方式传入一系列option，和TypeScript的结合需要通过一些装饰器的方式来做，虽然能实现功能，但是比较麻烦。

3.0修改了组件的声明方式，改成了类式的写法，这样使得和TypeScript的结合变得很容易。

此外，vue的源码也改用了TypeScript来写。其实当代码的功能复杂之后，必须有一个静态类型系统来做一些辅助管理，如React使用的Flow，Angular使用的TypeScript。现在vue3.0也全面改用TypeScript来重写了，更是使得对外暴露的api更容易结合TypeScript。静态类型系统对于复杂代码的维护确实很有必要。

其他的一些东西
vue3.0的改变是全面的，上面只涉及到主要的3个方面，还有一些其他的更改：

支持自定义渲染器，从而使得weex可以通过自定义渲染器的方式来扩展，而不是直接fork源码来改的方式。
支持Fragment（多个根节点）和Protal（在dom其他部分渲染组建内容）组件，针对一些特殊的场景做了处理。
基于treeshaking优化，提供了更多的内置功能。
vue3.0的开发流程规划
vue的开发思路是公开的，尤雨溪说主要的特性会听取一些主要库的开发者的反馈，有比较确定的方案以后公布RFC收集公众的反馈意见，之后才进入开发，同时会同步生态内相关的库和工具的更新。

虽然vue不如react和angular那样有大公司维护，但是借助开源的力量，整个流程都是开源社区参与的，这样vue的稳定程度和开发思路自然也就不会有什么大的问题。

总结
vue3.0对vue的主要3个特点：响应式、模板、对象式的组件声明方式，进行了全面的更改，底层的实现和上层的api都有了明显的变化，基于Proxy重新实现了响应式，基于treeshaking内置了更多功能，提供了类式的组件声明方式。而且源码全部用typescript重写。以及进行了一系列的性能优化。


#### 响应式原理（海康）

Vue.js 最显著的功能就是响应式系统，它是一个典型的 MVVM 框架，模型（Model）只是普通的 JavaScript 对象，修改它则视图（View）会自动更新。这种设计让状态管理变得非常简单而直观，不过理解它的原理也很重要，可以避免一些常见问题。下面让我们深挖 Vue.js 响应式系统的细节，来看一看 Vue.js 是如何把模型和视图建立起关联关系的。

图中的模型（Model）就是 data 方法返回的{times:1}，视图（View）是最终在浏览器中显示的 DOM。模型通过 Observer、Dep、Watcher、Directive 等一系列对象的关联，最终和视图建立起关系。归纳起来，Vue.js 在这里主要做了三件事：

通过 Observer 对 data 做监听，并且提供了订阅某个数据项变化的能力。
把 template 编译成一段 document fragment，然后解析其中的 Directive，得到每一个 Directive 所依赖的数据项和 update 方法。
通过 Watcher 把上述两部分结合起来，即把 Directive 中的数据依赖通过 Watcher 订阅在对应数据的 Observer 的 Dep 上。当数据变化时，就会触发 Observer 的 Dep 上的 notify 方法通知对应的 Watcher 的 update，进而触发 Directive 的 update 方法来更新 DOM 视图，最后达到模型和视图关联起来。
接下来我们就结合 Vue.js 的源码来详细介绍这三个过程。

#### promise.all 如果三个请求中第一个发生错误是会继续执行吗（海康）
Promise.all(iterable) 方法返回一个 Promise 实例，此实例在 iterable 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），失败原因的是第一个失败 promise 的结果。

Promise.all 在任意一个传入的 promise 失败时返回失败。例如，如果你传入的 promise中，有四个 promise 在一定的时间之后调用成功函数，有一个立即调用失败函数，那么 Promise.all 将立即变为失败。

#### 取消promise

概述
在项目开发中离不了的需要进行一些异步操作，这些异步操作在改善用户体验的同时也带来了一些性能隐患。 比如，在某页面进行异步操作，异步操作还没有完成时，该页面已经关闭，这时由于异步操作的存在，导致系统无法及时的回收资源，从而导致性能的降低，甚至出现oom。

总而言之，异步操作在改善用户体验，增强系统灵活性的同时也带来了一些性能隐患，如果使用不当则会带来一些副作用。

那么如何在使用异步操作的同时规避它所带来的副作用呢？

问题不是出在异步操作上，异步操作本没有错，错在异步操作的不合理使用上。比如，页面已经关闭了，而页面的异步操作还在进行等使用问题。 所以我们需要在编程中学会“舍得”，在适当的时候去取消一些异步操作。

为Promise插上可取消的翅膀
Promise是React Native开发过程中用于异步操作的最常用的API，但Promise没有提供用于取消异步操作的方法。为了实现可取消的异步操作，我们可以为Promise包裹一层可取消的外衣。

const makeCancelable = (promise) => {
  let hasCanceled_ = false;
  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then((val) =>
      hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
    );
    promise.catch((error) =>
      hasCanceled_ ? reject({isCanceled: true}) : reject(error)
    );
  });
  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
};  
然后可以这样使用取消操作：

const somePromise = new Promise(r => setTimeout(r, 1000));//创建一个异步操作
const cancelable = makeCancelable(somePromise);//为异步操作添加可取消的功能
cancelable
  .promise
  .then(() => console.log('resolved'))
  .catch(({isCanceled, ...error}) => console.log('isCanceled', isCanceled));
// 取消异步操作
cancelable.cancel();   
上述方法，可以为异步操作添加可取消的功能，但是使用还是不够方便：在每个使用makeCancelable的页面都需要复制粘贴上述代码。
下面我们做一下改进，将上述代码抽离到一个文件中。

/**
* Cancelable
* GitHub:https://github.com/crazycodeboy
* Eamil:crazycodeboy@gmail.com 
* @flow
**/
'use strict'

export default function makeCancelable(promise){
   let hasCanceled_ = false;
   const wrappedPromise = new Promise((resolve, reject) => {
       promise.then((val) =>
           hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
       );
       promise.catch((error) =>
           hasCanceled_ ? reject({isCanceled: true}) : reject(error)
       );
   });

   return {
       promise: wrappedPromise,
       cancel() {
           hasCanceled_ = true;
       },
   };
}
这样在使用的时候只需要将makeCancelable导入到你的相应js文件中就可以了。

import makeCancelable from '../util/Cancelable'
可取消的网络请求fetch
fetch是React Native开发过程中最常用的网络请求API，和Promis一样，fetch也没有提供用于取消已发出的网络请求的API。因为fetch返回的是一个Promise，所以我们可以借助上述方法，�来取消fetch所发出的网络请求。

this.cancelable = makeCancelable(fetch('url')));
        this.cancelable.promise
            .then((response)=>response.json())
            .then((responseData)=> {          
                console.log(responseData);                            
            }).catch((error)=> {
                console.log(error); 
            });
取消网络请求：

this.cancelable.cancel();

在项目中的使用
为了提高React Native应用的性能，我们需要在组件卸载的时候不仅要主动释放掉所持有的资源，也要取消所发出的一些异步请求操作。

componentWillUnmount() {      
  this.cancelable.cancel();
}
#### css实现转圈

https://www.cnblogs.com/futai/p/6730948.html

animation/transform/rotate


#### vue-router的钩子



### 坚果云

#### 介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的？

标准盒子模型：宽度=内容的宽度（content）+ border + padding + margin
低版本IE盒子模型：宽度=内容宽度（content+border+padding）+ margin


####  如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中？
浮动元素的上下左右居中：

```css
border: 1px solid red;
float: left;
position: absolute;
width: 200px;
height: 100px;
left: 50%;
top: 50%;
margin: -50px 0 0 -100px; 
```

绝对定位的左右居中：

```css
border: 1px solid black;
position: absolute;
width: 200px;
height: 100px;
margin: 0 auto;
left: 0;
right: 0; 
```

#### CSS3有哪些新特性？

RGBA和透明度
background-image background-origin(content-box/padding-box/border-box) background-size background-repeat
word-wrap（对长的不可分割单词换行）word-wrap：break-word
文字阴影：text-shadow： 5px 5px 5px #FF0000;（水平阴影，垂直阴影，模糊距离，阴影颜色）
font-face属性：定义自己的字体
圆角（边框半径）：border-radius 属性用于创建圆角
边框图片：border-image: url(border.png) 30 30 round
盒阴影：box-shadow: 10px 10px 5px #888888
媒体查询：定义两套css，当浏览器的尺寸变化时会采用不同的属性

#### 对BFC规范(块级格式化上下文：block formatting context)的理解？

BFC规定了内部的Block Box如何布局。
定位方案：

内部的Box会在垂直方向上一个接一个放置。
Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠。
每个元素的margin box 的左边，与包含块border box的左边相接触。
BFC的区域不会与float box重叠。
BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
计算BFC的高度时，浮动元素也会参与计算。
满足下列条件之一就可触发BFC

根元素，即html
float的值不为none（默认）
overflow的值不为visible（默认）
display的值为inline-block、table-cell、table-caption
position的值为absolute或fixed


#### 如何做响应式布局
通过媒体查询可以为不同大小和尺寸的媒体定义不同的css，适应相应的设备的显示。

<head>里边
<link rel="stylesheet" type="text/css" href="xxx.css" media="only screen and (max-device-width:480px)">

CSS : @media only screen and (max-device-width:480px) {/css样式/}

#### 什么是响应式设计？
响应式网站设计(Responsive Web design)是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。
基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理。
页面头部必须有meta声明的viewport。

<meta name=’viewport’ content=”width=device-width, initial-scale=1. maximum-scale=1,user-scalable=no”>


#### defer和async的区别

先来试个一句话解释仨，当浏览器碰到 script 脚本的时候：

<script src="script.js"></script>

没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。

<script async src="script.js"></script>

有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。

<script defer src="myscript.js"></script>

有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。

然后从实用角度来说呢，首先把所有脚本都丢到 </body> 之前是最佳实践，因为对于旧浏览器来说这是唯一的优化选择，此法可保证非脚本的其他一切元素能够以最快的速度得到加载和解析。

接着，我们来看一张图咯：

![avatar](https://img-blog.csdn.net/20180213144611105?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZnVuY3Rpb25fXw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

蓝色线代表网络读取，红色线代表执行时间，这俩都是针对脚本的；绿色线代表 HTML 解析。

此图告诉我们以下几个要点：

defer 和 async 在网络读取（下载）这块儿是一样的，都是异步的（相较于 HTML 解析）
它俩的差别在于脚本下载完之后何时执行，显然 defer 是最接近我们对于应用脚本加载和执行的要求的
关于 defer，此图未尽之处在于它是按照加载顺序执行脚本的，这一点要善加利用
async 则是一个乱序执行的主，反正对它来说脚本的加载和执行是紧紧挨着的，所以不管你声明的顺序如何，只要它加载完了就会立刻执行
仔细想想，async 对于应用脚本的用处不大，因为它完全不考虑依赖（哪怕是最低级的顺序执行），不过它对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适的，最典型的例子：Google Analytics

https://blog.csdn.net/function__/article/details/79321540

### 知衣科技
#### 解析字符串的值使之变成算式如‘1-10*2+1/4’
当时想的是乘除等高级运算符、加减等低级运算符和数字分别放在三个数组中

先遍历高级数组进行运算操作，然后遍历低级数组进行运算操作。

方法一：使用eval函数计算字符串
```js
let str = '100+5*(120-20)'

console.log(eval(str))
```


#### mongo事务
    MongoDB数据库中操作单个文档总是原子性的，然而，涉及多个文档的操作，通常被作为一个“事务”，而不是原子性的。因为文档可以是相当复杂并且包含多个嵌套文档，单文档的原子性对许多实际用例提供了支持。尽管单文档操作是原子性的，在某些情况下，需要多文档事务。在这些情况下，使用两阶段提交，提供这些类型的多文档更新支持。因为文档可以表示为Pending数据和状态，可以使用一个两阶段提交确保数据是一致的，在一个错误的情况下，事务前的状态是可恢复的。
    事务最常见的例子是以可靠的方式从A账户转账到B账户，在关系型数据库中，此操作将从A账户减掉金额和给B账户增加金额的操作封装在单个原子事务中。在MongoDB中，可以使用两阶段提交达到相同的效果。本文中的所有示例使用mongo shell与数据库进行交互,并假设有两个集合：首先，一个名为accounts的集合存储每个账户的文档数据，另一个名为transactions的集合存储事务本身。

    首先创建两个名为A和B的账户，使用下面的命令：

db.accounts.save({name: "A", balance: 1000, pendingTransactions: []})
db.accounts.save({name: "B", balance: 1000, pendingTransactions: []})
使用find()方法验证这两个操作已经成功：

db.accounts.find()
mongo会返回两个类似下面的文档：

{ "_id" : ObjectId("4d7bc66cb8a04f512696151f"), "name" : "A", "balance" : 1000, "pendingTransactions" : [ ] }
{ "_id" : ObjectId("4d7bc67bb8a04f5126961520"), "name" : "B", "balance" : 1000, "pendingTransactions" : [ ] }
事务过程：
设置事务初始状态initial：

    通过插入下面的文档创建transaction集合，transaction文档持有源(source)和目标(destination)，它们引用自accounts集合文档的字段名，以及value字段表示改变balance字段数量的数据。最后，state字段反映事务的当前状态。

db.transactions.save({source: "A", destination: "B", value: 100, state: "initial"})
验证这个操作已经成功，使用find()：

db.transactions.find()
这个操作会返回一个类似下面的文档：

{ "_id" : ObjectId("4d7bc7a8b8a04f5126961522"), "source" : "A", "destination" : "B", "value" : 100, "state" : "initial" }
切换事务到Pending状态：

    在修改accounts集合记录之前，将事务状态从initial设置为pending。使用findOne()方法将transaction文档赋值给shell会话中的局部变量t：
t = db.transactions.findOne({state: "initial"})
变量t创建后，shell将返回它的值，将会看到如下的输出：

{ "_id" : ObjectId("4d7bc7a8b8a04f5126961522"), "source" : "A", "destination" : "B", "value" : 100, "state" : "initial" }
使用update()改变state的值为pending：

db.transactions.update({_id: t._id}, {$set: {state: "pending"}})
db.transactions.find()
find()操作将返回transaction集合的内容，类似下面：

{ "_id" : ObjectId("4d7bc7a8b8a04f5126961522"), "source" : "A", "destination" : "B", "value" : 100, "state" : "pending" }
将事务应用到两个账户：

    使用update()方法应用事务到两个账户。在update()查询中，条件pendingTransactions:{$ne:t._id}阻止事务更新账户，如果账户的pendingTransaction字段包含事务t的_id：

db.accounts.update(
	{ name: t.source, pendingTransactions: { $ne: t._id } },
	{ $inc: { balance: -t.value }, $push: { pendingTransactions: t._id } }
)
db.accounts.update(
	{ name: t.destination, pendingTransactions: { $ne: t._id } },
	{ $inc: { balance: t.value }, $push: { pendingTransactions: t._id } }
)
db.accounts.find()
find()操作将返回accounts集合的内容，现在应该类似于下面的内容：

{ "_id" : ObjectId("4d7bc97fb8a04f5126961523"), "balance" : 900, "name" : "A", "pendingTransactions" : [ ObjectId("4d7bc7a8b8a04f5126961522") ] }
{ "_id" : ObjectId("4d7bc984b8a04f5126961524"), "balance" : 1100, "name" : "B", "pendingTransactions" : [ ObjectId("4d7bc7a8b8a04f5126961522") ] }
设置事务状态为committed：

    使用下面的update()操作设置事务的状态为committed：

db.transactions.update({_id: t._id}, {$set: {state: "committed"}})
db.transactions.find()
find()操作发回transactions集合的内容，现在应该类似下面的内容：

{ "_id" : ObjectId("4d7bc7a8b8a04f5126961522"), "destination" : "B", "source" : "A", "state" : "committed", "value" : 100 }
移除pending事务：

    使用下面的update()操作从accounts集合中移除pending事务：

db.accounts.update({name: t.source}, {$pull: {pendingTransactions: t._id}})
db.accounts.update({name: t.destination}, {$pull: {pendingTransactions: t._id}})
db.accounts.find()
find()操作返回accounts集合内容，现在应该类似下面内容：

{ "_id" : ObjectId("4d7bc97fb8a04f5126961523"), "balance" : 900, "name" : "A", "pendingTransactions" : [ ] }
{ "_id" : ObjectId("4d7bc984b8a04f5126961524"), "balance" : 1100, "name" : "B", "pendingTransactions" : [ ] }
设置事务状态为done：

    通过设置transaction文档的state为done完成事务：

db.transactions.update({_id: t._id}, {$set: {state: "done"}})
db.transactions.find()
find()操作返回transaction集合的内容，此时应该类似下面：

{ "_id" : ObjectId("4d7bc7a8b8a04f5126961522"), "destination" : "B", "source" : "A", "state" : "done", "value" : 100 }
从失败场景中恢复：
    最重要的部分不是上面的典型例子，而是从各种失败场景中恢复未完成的事务的可能性。这部分将概述可能的失败，并提供方法从这些事件中恢复事务。这里有两种类型的失败：

1、所有发生在第一步（即设置事务的初始状态initial）之后，但在第三步（即应用事务到两个账户）之前的失败。为了还原事务，应用应该获取一个pending状态的transaction列表并且从第二步（即切换事务到pending状态）中恢复。

2、所有发生在第三步之后（即应用事务到两个账户）但在第五步(即设置事务状态为done)之前的失败。为了还原事务，应用需要获取一个committed状态的事务列表，并且从第四步（即移除pending事务）恢复。

    因此应用程序总是能够恢复事务，最终达到一个一致的状态。应用程序开始捕获到每个未完成的事务时运行下面的恢复操作。你可能还希望定期运行恢复操作，以确保数据处于一致状态。达成一致状态所需要的时间取决于应用程序需要多长时间恢复每个事务。

回滚：
     在某些情况下可能需要“回滚”或“撤消”事务，当应用程序需要“取消”该事务时，或者是因为它永远需要恢复当其中一个帐户不存在的情况下，或停止现有的事务。这里有两种可能的回滚操作：

1、应用事务（即第三步）之后，你已经完全提交事务，你不应该回滚事务。相反，创建一个新的事务，切换源(源)和目标(destination)的值。

2、创建事务（即第一步）之后，在应用事务（即第三步）之前，使用下面的处理过程：

设置事务状态为canceling：

    首先设置事务状态为canceling，使用下面的update()操作：

db.transactions.update({_id: t._id}, {$set: {state: "canceling"}})
撤销事务：
    使用下面的操作顺序从两个账户中撤销事务：

db.accounts.update({name: t.source, pendingTransactions: t._id}, {$inc: {balance: t.value}, $pull: {pendingTransactions: t._id}})
db.accounts.update({name: t.destination, pendingTransactions: t._id}, {$inc: {balance: -t.value}, $pull: {pendingTransactions: t._id}})
db.accounts.find()
find()操作返回acounts集合的内容，应该类似下面：

{ "_id" : ObjectId("4d7bc97fb8a04f5126961523"), "balance" : 1000, "name" : "A", "pendingTransactions" : [ ] }
{ "_id" : ObjectId("4d7bc984b8a04f5126961524"), "balance" : 1000, "name" : "B", "pendingTransactions" : [ ] }
设置事务状态为canceled：

     最后，使用下面的update()状态将事务状态设置为canceled：

db.transactions.update({_id: t._id}, {$set: {state: "canceled"}})
参考资料：http://docs.mongodb.org/manual/tutorial/perform-two-phase-commits/
标签:数据库MongoDBNoSQL

https://www.tuicool.com/articles/f6ZBjm

#### 如果系统中数据过多的情况下，算法能通过吗


#### vue源码的考量
回答了vue响应式原理


#### 目前公司的技术栈


### 我最近遇到的难题

#### iframe由于浏览器的同源策略，Navigation获取不到一些防护性高的网站的dom
跨域
#### 在xChair-server项目中我不能直接获取到三种状态（关机运行和空转） 
通过比较当前的minitor和上一个入库的monitor的入口量，如果前者大那就是运行
如果后者大，那数据纠错（将上一个数据清除）
如果两者相同，那么又分为两种情况
第一种就是超过了空转时间（约定为5min），这个就是关机
第二种在5min中内，就是空转

#### 型号多种情况
由于操作人员手误，采集器传过来多个例如'aecredafdfafdadfasdfdfasd'解析为'231确定21取消确定',需转化为'231'
'dfasefaweasdfasdfasd'解析为'342121确定确定确定'，需转化为'342121'


#### ACAO
对于预检请求来说，如果你使用过 Node 来设置 CORS 的话，可能会遇到过这么一个坑。

以下以 express 框架举例：

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
  )
  next()
})
该请求会验证你的 Authorization 字段，没有的话就会报错。

当前端发起了复杂请求后，你会发现就算你代码是正确的，返回结果也永远是报错的。因为预检请求也会进入回调中，也会触发 next 方法，因为预检请求并不包含 Authorization 字段，所以服务端会报错。

想解决这个问题很简单，只需要在回调中过滤 option 方法即可

res.statusCode = 204
res.setHeader('Content-Length', '0')
res.end()

### 我最近遇到的难题

#### iframe由于浏览器的同源策略，Navigation获取不到一些防护性高的网站的dom
跨域
#### 在xChair-server项目中我不能直接获取到三种状态（关机运行和空转） 
通过比较当前的minitor和上一个入库的monitor的入口量，如果前者大那就是运行
如果后者大，那数据纠错（将上一个数据清除）
如果两者相同，那么又分为两种情况
第一种就是超过了空转时间（约定为5min），这个就是关机
第二种在5min中内，就是空转

#### 型号多种情况
由于操作人员手误，采集器传过来多个例如'aecredafdfafdadfasdfdfasd'解析为'231确定21取消确定',需转化为'231'
'dfasefaweasdfasdfasd'解析为'342121确定确定确定'，需转化为'342121'


#### ACAO
对于预检请求来说，如果你使用过 Node 来设置 CORS 的话，可能会遇到过这么一个坑。

以下以 express 框架举例：

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
  )
  next()
})
该请求会验证你的 Authorization 字段，没有的话就会报错。

当前端发起了复杂请求后，你会发现就算你代码是正确的，返回结果也永远是报错的。因为预检请求也会进入回调中，也会触发 next 方法，因为预检请求并不包含 Authorization 字段，所以服务端会报错。

想解决这个问题很简单，只需要在回调中过滤 option 方法即可

res.statusCode = 204
res.setHeader('Content-Length', '0')
res.end()
