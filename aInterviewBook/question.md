# 日常积累的问题
## electron 是什么
Electron是一个使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架。 嵌入 Chromium 和 Node.js 到 二进制的 Electron 允许您保持一个 JavaScript 代码代码库并创建 在Windows上运行的跨平台应用 macOS和Linux——不需要本地开发 经验
##  观察者模式和发布订阅模式的区别
从表面上看：

观察者模式里，只有两个角色 —— 观察者 + 被观察者
而发布订阅模式里，却不仅仅只有发布者和订阅者两个角色，还有一个经常被我们忽略的 —— 经纪人Broker
往更深层次讲：

观察者和被观察者，是松耦合的关系
发布者和订阅者，则完全不存在耦合
从使用层面上讲：

观察者模式，多用于单个应用内部
发布订阅模式，则更多的是一种跨应用的模式(cross-application pattern)，比如我们常用的消息中间件


##  manis项目如何连接 IOS 设备
WebDriverAgent 在 iOS 端实现了一个 WebDriver server ，借助这个 server 我们可以远程控制 iOS 设备。你可以启动、杀死应用，点击、滚动视图，或者确定页面展示是否正确。

细节请看https://github.com/facebookarchive/WebDriverAgent

细节请看https://www.cnblogs.com/zhanggui/p/9239827.html
## no-cache 和 no-store
no-cache 和 no-store 都是 HTTP 协议头 Cache-Control 的值。

区别是：

no-store 彻底禁用缓冲，所有内容都不会被缓存到缓存或临时文件中。

no-cache 在浏览器使用缓存前，会往返对比ETag，如果ETag没变，返回304，则使用缓存。
## 跨域将 cookie 带到后端
前端的 axios 需要配置一个属性，该属性控制“跨域是否携带Cookie”：

axios.defaults.withCredentials = true;前端设置了withCredentials为true后，

必须后端也配合进行设置后端设置：Access-Control-Allow-Credentials 设置为 true后端不能把 Access-Control-Allow-Origin 设置为 “” 或 *，而要设置为客户端发送请求时的IP地址。

ps: 关于指定域名 可以在后端用个array类似的存一个白名单域名列表如果有请求 先判断 Origin 是否在白名单里 然后再动态设置 Access-Control-Allow-Origin

https://www.cnblogs.com/panic404/p/13043964.html
## addEventListener 的形参
event:事件名称,如click

function:指定要事件触发时执行的函数,可以传入事件参数

useCapture:可选。布尔值，指定事件是否在捕获或冒泡阶段执行。

默认false:在冒泡阶段执行指定事件 true:在捕获阶段执行事件


## 事件冒泡和捕获
捕获则和冒泡相反，目标元素被触发后， 会从目标元素的最顶层的祖先元素事件往下执行到目标元素为止。 很明显执行顺序是不同的。

首先，无论是冒泡事件还是捕获事件，元素都会先执行捕获阶段。

从上往下，如有捕获事件，则执行；一直向下到目标元素后，从目标元素开始向上执行冒泡元素，即第三个参数为true表示捕获阶段调用事件处理程序，如果是false则是冒泡阶段调用事件处理程序。
## event.target 和 event.currentTarget
由此可见event.target代表的是触发事件的元素，而event.currentTarget代表的是那个绑定了事件处理函数的元素。
## 这个执行结果是什么
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
```

解析：

第一次循环
1. 进入执行栈执行代码，打印1
2. 遇到setTimeout，将回调放入宏任务队列等待执行
3. promise声明过程是同步的，打印4，resolve又遇到promise的resolve以及.then，然后将() => console.log(8)回调放入微任务，之后遇到.then，将 console.log(data)回调放入微任务
4. 遇到setTimeout，将回调放入宏任务队列等待执行
5. 执行代码，打印7
6. 检查微任务队列是否有可执行代码，有一个第三步放入的任务，打印8，后打印5
7. 第一个循环结束

第二个循环
1. 从宏任务入手，检查宏任务队列，发现有两个宏任务，分别是第一次循环第2步和第一次循环第4步，先执行第一个宏任务，打印2
2. 遇到promise.reolve().then,将其中的回调放入微任务中
3. 第一个宏任务执行完后，检查微任务队列，其中有第二个循环第2步放入的微任务，打印3
4. 第二个循环结束
第三个循环
1. 执行最后一个宏任务，setTimout,打印6
2. 检查微任务，空
3. 第三个循环结束

按序输出为：1-4-7-8-5-2-3-6


## 写一个函数随机返回 min 和 max 的这个闭区间的任意值
```js
Math.random()*(m-n+1)+n
```
针对 `[2,32]` 呢，简单分析一波，random 是 0时，我们希望得到2；假设random可以是1，我们希望得算出一个33才行，这样向下取整就能包含32了。

根据上面的分析，所以我们得让random乘法得到一个31，然后再加一个2，应该这么写：
```js
Math.random() * 31 + 2;
```
[https://blog.csdn.net/a732894380/article/details/103378354](https://blog.csdn.net/a732894380/article/details/103378354)

## electron 主进程向渲染进程通信
自主到从：从Main到Renderer的消息传递，借助BrowerWindow.webContents.send()发送消息。
自从到主：从Renderer到Main的消息传递，借助ipcRender和ipcMain发送/接收消息。
事件机制：无论是BrowerWindow.webContents.send()，还是ipc，其实都是node的事件机制，都是EventEmitter的实例。

细节请看[https://blog.csdn.net/weixin_42762089/article/details/87912222](https://blog.csdn.net/weixin_42762089/article/details/87912222)



## electron 主进程调试
Electron 浏览器窗口中的 DevTools 只能调试 在该窗口中执行的 JavaScript (即 web 页面) 。 为了提供一个可以调试主进程的方法，Electron 提供了 --inspect 和 --inspect-brk 开关。
## canvas 和 webGL 的区别
webgl实际上用了canvas的一个3d渲染上下文，在绘制平面内容时，和canvas 2d相比，webgl更为直接的利用了gpu硬件，在某些场合，几乎可以摆脱cpu的限制，达到性能极致。 简言之，尽管现代浏览器都尽量为dom（比如涉及video、image元素以及像素变换方面）、canvas 2d和webgl提供硬件加速的支持，但webgl在渲染数量众多的元素或像素时，性能毫无疑问的遥遥领先。


细节请看[https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API/Tutorial](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API/Tutorial)

## webpack的hash
在webpack中有三种hash可以配置，分别是hash、chunkhash、contenthash他们是不对的可以针对不同的配置，首相要搞清楚这三种的hash的区别，什么场景下，适合用哪种。

hash 所有文件哈希值相同，只要改变内容跟之前的不一致，所有哈希值都改变，没有做到缓存意义

chunkhash 当有多个chunk，形成多个bundle时，如果只有一个chunk和一个bundle内容变了，其他的bundle的hash都会发生变化，因为大家都是公用的一个hash，这个时候chunkhash的作用就出来了。它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的 chunk，生成对应的哈希值。

contenthash 在打包的时候我们会在js中导入css文件，因为他们是同一个入口文件，如果我只改了js得代码，但是他的css抽取生成css文件时候hash也会跟着变换。这个时候contenthash的作用就出来了。

hash 所有文件哈希值相同；

chunkhash 根据不同的入口文件(Entry)进行依赖文件解析、构建对应的 chunk，生成对应的哈希值；

contenthash 计算与文件内容本身相关，主要用在css抽取css文件时。

作者：blackdous 链接：https://juejin.cn/post/6844903935812059144 来源：稀土掘金 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


## v-model原理
它是 Vue 双向绑定的真正实现，但本质上就是一种语法糖，它即可以支持原生表单元素，也可以支持自定义组件。在组件的实现中，我们是可以配置子组件接收的 prop 名称，以及派发的事件名称。

https://ustbhuangyi.github.io/vue-analysis/v2/extend/v-model.html#%E7%BB%84%E4%BB%B6
## 合成器线程作用
复合是一种分割页面为不同的层，并单独栅格化，随后组合为帧的技术。不同层的组合由 compositor 线程（合成器线程）完成。

https://blog.csdn.net/qq_41499782/article/details/120039980

https://zhuanlan.zhihu.com/p/47407398
## canvas和svg区别，使用场景
HTML5 提供了 Canvas 和 SVG 两种绘图技术，也是多数 Web 图表库使用的渲染技术。Canvas 是基于脚本的，通过 JavaScript 指令来动态绘图。而 SVG 则是使用 XML 文档来描述矢量图。两者有不同的适用场景。

Canvas 提供的绘图能力更底层，适合做到像素级的图形处理，能动态渲染和绘制大数据量的图形。而 SVG 抽象层次更高，声明描述式的接口功能更丰富，内置了大量的图形、滤镜和动画等，方便进行文档元素的维护，也能导出为文件脱离浏览器环境使用。 https://g2.antv.vision/zh/docs/manual/tutorial/renderers/#%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF
##  react 函数式组件 hooks 中模拟类组件中的componentDidMount、componentDidUpdate、componentWillUnmount
> componentDidMount

class 组件访问 componentDidMount
```js
class Example extends React.Component {
  componentDidMount() {
    console.log('I am mounted!');
  }
  render() {
    return null;
  }
}
```
使用 hooks 模拟 componentDidMount
```js
function Example() {
  useEffect(() => console.log('mounted'), []);
  return null;
}
```
useEffect 拥有两个参数，第一个参数作为回调函数会在浏览器布局和绘制完成后调用，因此它不会阻碍浏览器的渲染进程。第二个参数是一个数组

当数组存在并有值时，如果数组中的任何值发生更改，则每次渲染后都会触发回调。
当它不存在时，每次渲染后都会触发回调。
当它是一个空列表时，回调只会被触发一次，类似于 componentDidMount。

> componentDidUpdate

class 组件访问 componentDidUpdate
```js
componentDidMount() {
  console.log('mounted or updated');
}

componentDidUpdate() {
  console.log('mounted or updated');
}
```
使用 hooks 模拟 componentDidUpdate
```js
useEffect(() => console.log('mounted or updated'));
```
值得注意的是，这里的回调函数会在每次渲染后调用，因此不仅可以访问 componentDidUpdate，还可以访问componentDidMount，如果只想模拟 componentDidUpdate，我们可以这样来实现。
```js
const mounted = useRef();
useEffect(() => {
  if (!mounted.current) {
    mounted.current = true;
  } else {
   console.log('I am didUpdate')
  }
});
```
useRef 在组件中创建“实例变量”。它作为一个标志来指示组件是否处于挂载或更新阶段。当组件更新完成后在会执行 else 里面的内容，以此来单独模拟 componentDidUpdate。

> componentWillUnmount
class 组件访问 componentWillUnmount
```js
componentWillUnmount() {
  console.log('will unmount');
}
```
hooks 模拟 componentWillUnmount
```js
useEffect(() => {
  return () => {
    console.log('will unmount');
  }
}, []);
```
当在 useEffect 的回调函数中返回一个函数时，这个函数会在组件卸载前被调用。我们可以在这里面清除定时器或事件监听器。

作者：王二求
链接：https://juejin.cn/post/6844903921442373639
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


## 变量命名规范
在javaScript中，变量名需要遵循以下规则：
1. 首字母必须是字母、下划线（-）或者美元符号（$）。
2. 其他字母可以是下划线（_）、美元符号（$）、字母或者数字。
3. 一般采用驼峰法：第一个字母小写，其余有意义的单词首字母大写。
4. 变量名是区分大小写的，不能是关键字或保留字。
## ts 类型保护和类型断言
> 类型断言

TypeScript 允许你覆盖它的推断，并且能以你任何你想要的方式分析它，这种机制被称为「类型断言」。

TypeScript 类型断言用来告诉编译器你比它更了解这个类型，并且它不应该再发出错误。

它之所以不被称为「类型转换」，是因为转换通常意味着某种运行时的支持。但是，类型断言纯粹是一个编译时语法，同时，它也是一种为编译器提供关于如何分析代码的方法。

https://jkchao.github.io/typescript-book-chinese/typings/typeAssertion.html

> 类型保护

允许你使用更小范围下的对象类型。

1. typeof
TypeScript 熟知 JavaScript 中 instanceof 和 typeof 运算符的用法。如果你在一个条件块中使用这些，TypeScript 将会推导出在条件块中的的变量类型。
```ts
function doSome(x: number | string) {
  if (typeof x === 'string') {
    // 在这个块中，TypeScript 知道 `x` 的类型必须是 `string`
    console.log(x.subtr(1)); // Error: 'subtr' 方法并没有存在于 `string` 上
    console.log(x.substr(1)); // ok
  }

  x.substr(1); // Error: 无法保证 `x` 是 `string` 类型
}
```
2. instanceof
```ts
class Foo {
  foo = 123;
  common = '123';
}

class Bar {
  bar = 123;
  common = '123';
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo); // ok
    console.log(arg.bar); // Error
  }
  if (arg instanceof Bar) {
    console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}

doStuff(new Foo());
doStuff(new Bar());
```

3. in 
in 操作符可以安全的检查一个对象上是否存在一个属性，它通常也被作为类型保护使用
```ts
interface A {
  x: number;
}

interface B {
  y: string;
}

function doStuff(q: A | B) {
  if ('x' in q) {
    // q: A
  } else {
    // q: B
  }
}
```
4. 字面量类型保护
当你在联合类型里使用字面量类型时，你可以检查它们是否有区别
```ts
type Foo = {
  kind: 'foo'; // 字面量类型
  foo: number;
};

type Bar = {
  kind: 'bar'; // 字面量类型
  bar: number;
};

function doStuff(arg: Foo | Bar) {
  if (arg.kind === 'foo') {
    console.log(arg.foo); // ok
    console.log(arg.bar); // Error
  } else {
    // 一定是 Bar
    console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}
```


5. 使用定义的类型保护
JavaScript 并没有内置非常丰富的、运行时的自我检查机制。当你在使用普通的 JavaScript 对象时（使用结构类型，更有益处），你甚至无法访问 instanceof 和 typeof。在这种情景下，你可以创建用户自定义的类型保护函数，这仅仅是一个返回值为类似于someArgumentName is SomeType 的函数

```ts
// 仅仅是一个 interface
interface Foo {
  foo: number;
  common: string;
}

interface Bar {
  bar: number;
  common: string;
}

// 用户自己定义的类型保护！
function isFoo(arg: Foo | Bar): arg is Foo {
  return (arg as Foo).foo !== undefined;
}

// 用户自己定义的类型保护使用用例：
function doStuff(arg: Foo | Bar) {
  if (isFoo(arg)) {
    console.log(arg.foo); // ok
    console.log(arg.bar); // Error
  } else {
    console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}

doStuff({ foo: 123, common: '123' });
doStuff({ bar: 123, common: '123' });
```


https://jkchao.github.io/typescript-book-chinese/typings/typeGuard.html#typeof
## const 定义的对象可以更改属性嘛
const是用来定义常量的，而且定义的时候必须初始化，且定义后不可以修改。 ... 因为对象是引用类型的，P中保存的仅是对象的指针，这就意味着，const仅保证指针不发生改变，修改对象的属性不会改变对象的指针，所以是被允许的。 也就是说const定义的引用类型只要指针不发生改变，其他的不论如何改变都是允许的。
## 如何定义对象不能更改属性
Object.freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。



Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

writable
当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符 (en-US)改变。
```js
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42

```
## promise catch 后面可以 then 吗
Catch 的后续链式操作

有可能会在一个回调失败之后继续使用链式操作，即，使用一个 catch，这对于在链式操作中抛出一个失败之后，再次进行新的操作会很有用。请阅读下面的例子：
```js
new Promise((resolve, reject) => {
    console.log('初始化');

    resolve();
})
.then(() => {
    throw new Error('有哪里不对了');

    console.log('执行「这个」”');
})
.catch(() => {
    console.log('执行「那个」');
})
.then(() => {
    console.log('执行「这个」，无论前面发生了什么');
});
```
输出结果如下：
```
初始化
执行“那个”
执行“这个”，无论前面发生了什么
```
注意：因为抛出了错误 有哪里不对了，所以前一个 执行「这个」 没有被输出。

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises


## .catch(()=>1) 输出什么？可以继续链式调用 then 吗
```js
new Promise((resolve,reject)=>{
    console.log("初始化")
    // reject('nima')
    throw new Error('cao')
})
.catch(()=>{
    1
})
.then(()=>{
    console.log("then")
})
.then(()=>{
    console.log("then")
})

// 初始化
// then
// then
```

```js
new Promise((resolve,reject)=>{
    console.log("初始化")
    // reject('nima')
    throw new Error('cao')
})
.catch((err)=>{
    console.log(err)
    1
})
.then((res)=>{
    console.log(res)
})
.then(()=>{
    console.log("then")
})

// 初始化
// Error: cao
//     at <anonymous>:4:11
//     at new Promise (<anonymous>)
//     at <anonymous>:1:1
// undefined
// then
```
## .catch(()=>Promise.resolve(1)) 输出什么？可以继续链式调用 then 吗
可以链式调用
```js
new Promise((resolve,reject)=>{
    console.log("初始化")
    // reject('nima')
    throw new Error('cao')
})
.catch(()=>{
    Promise.resolve(1)
})
.then(()=>{
    console.log("then")
})
.then(()=>{
    console.log("then")
})
// 初始化
// then
// then
```

```js
new Promise((resolve,reject)=>{
    console.log("初始化")
    // reject('nima')
    throw new Error('cao')
})
.catch(()=>{
    console.log("catch")
    Promise.resolve(1)
})
.then((res)=>{
    console.log(res)
})
.then(()=>{
    console.log("then")
})
// 初始化
// catch
// undefined
// then
```

```js
new Promise((resolve,reject)=>{
    console.log("初始化")
    // reject('nima')
    throw new Error('cao')
})
.catch((err)=>{
    console.log(err)
    Promise.resolve(1)
})
.then((res)=>{
    console.log(res)
})
.then(()=>{
    console.log("then")
})
// 初始化
// Error: cao
// undefined
// then
```


```js
new Promise((resolve,reject)=>{
    console.log("初始化")
    // reject('nima')
    throw new Error('cao')
})
.catch((err)=>{
    console.log(err)
    Promise.resolve(1)
})
.then((res)=>{
    console.log(res)
})
.then(()=>{
    console.log("then")
})
// 初始化
// nima
// undefined
// then
```
## async()=>1
```
a=async()=>1
async()=>1
a
async()=>1
typeof a
'function'
```
## 数据流 vue react
vue与react都是属于单项数据流的，并且都可以实现单项数据绑定与双向数据绑定

![avatar](../../picture/vue-react-数据流向.png)
## Scoped CSS和CSS Modules的比较
- 两者都可以达到将样式只应用在当前组件，而不会影响到其他组件的效果，Scoped CSS是通过使用自定义属性，而CSS Modules是通过修改选择器名
- 两者都有办法将样式传递到子组件中，Scoped CSS是通过使用深度选择器，而CSS Modules是通过传递选择器名
- 在同一组件中使用多个style标签时，后面使用的style标签的样式会覆盖前面style标签的样式，即使CSS Modules中设置了不同的自定义名
- 两者在使用vue cli搭建的项目中都是开箱即可用
##  react实现作用域插槽
React 实现 Vue 插槽和作用域插槽概念

https://zhuanlan.zhihu.com/p/427114998

通过 props 实现插槽；

通过 Render Props 实现 作用域插槽；


作用域插槽：
```js
function Container(props){
  return (
    <>
      {
        props.children('传递给子组件的数据')
      }
    </>
  )
}

function App(){
  return (
    <>
      <Container>
        {/* 通过传递函数实现作用域插槽 */}
        {
          v =>(<div>{v}</div>)
        }
      </Container>
    </>
  )
}

export default App; 
```
## hash模式处理锚点

路由 hash 模式已经将#占用, 页面的锚点功能失效，js 实现替代
```js
/**
 * @description 锚链接滚动过渡
 * @param {String} selector   元素ID or 定位点
 */
const goAnchor = (selector) => {
  // 移动距离
  let top = 0;
  // 当前滚动条位置
  const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  // 若为指定距离
  if (typeof selector === 'number') {
    top = selector - scrollTop;
  } else {
    const anchor = document.querySelector(selector) || { offsetTop: 0 };
    top = anchor.offsetTop - scrollTop;
  }
  window.scrollBy({ top, behavior: 'smooth' });
};
```
https://blog.csdn.net/wildye/article/details/106074290
## tree-shaking原理
利用ES6模块特性：

- 只能作为模块顶层的语句出现
- import的模块名只能是字符串常量
- import binding 是 immutable的，引入的模块不能再进行修改

代码删除：

- uglify：判断程序流，判断变量是否被使用和引用，进而删除代码

实现原理可以简单的概况：

1. ES6 Module引入进行静态分析，故而编译的时候正确判断到底加载了那些模块
2. 静态分析程序流，判断那些模块和变量未被使用或者引用，进而删除对应代码

https://zhuanlan.zhihu.com/p/403901557
## vue3如何支持tree-shaking
在 Vue 3 中，全局和内部 API 都经过了重构，并考虑到了 tree-shaking 的支持。因此，对于 ES 模块构建版本来说，全局 API 现在通过具名导出进行访问。
> api
Vue.nextTick

Vue.observable (用 Vue.reactive 替换)

Vue.version

Vue.compile (仅完整构建版本)

Vue.set (仅兼容构建版本)

Vue.delete (仅兼容构建版本)

> 除了公共 API，许多内部组件/帮助器现在也以具名的方式导出。

> 插件中的用法,在 Vue 3 中，必须显式导入：
```js
import { nextTick } from 'vue'

const plugin = {
  install: app => {
    nextTick(() => {
      // ...
    })
  }
}
```

详细介绍可以阅读[tree-shaking](https://v3.cn.vuejs.org/guide/migration/global-api-treeshaking.html#_2-x-%E8%AF%AD%E6%B3%95)
## markdown和富文本切换组件如何实现
在传统的富文本时代，我们不需要接触任何的标签，我们只用编辑器自带的功能就行，而markdown多了一层标签的概念，而这一层标签的概念被大家无限放大，感觉markdown 是什么神奇的东西。

在富文本编辑器年代，对于引入一个链接，你只要复制这个链接，然后粘贴过去。而在目前部分markdown编辑器，由于设计者默认你懂了markdown的语法就不搞这么一个工具栏而是让你自己手动加入，由于一些完全不知道markdown是什么东西的人来说，就觉得与平常的东西不一样，就感觉markdown是什么神奇的东西。

实际上markdown 一点都不神奇，也没有一点的与众不同，它与大家认知的富文本编辑器实际都一样的，就是一个html解释器在富文本的时候是一个工具栏，在markdown里面是一些标签语法一样。上面说了一些markdown的概念，现在回到这个问题本身，个人认为这两者是没有比较的意义，因为两者都是html的解析器引擎，富文本编辑器操作上面比较简单，但是，markdown一样能做到，就如同segmentfault的编辑器，就有用到markdown，不过可能加了一个工具栏，可能就觉得这是一个富文本编辑器而不是markdown。
————————————————
版权声明：本文为CSDN博主「浮游18岁啦」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_45658814/article/details/112476875
## 题目：将`1234567` 变成 `1,234,567`，即千分位标注

这个题目可以用算法直接来解，如果候选人使用正则来回答，这样主动展现了自己其他方面的优势，即使不是算法解答出来的，面试官一般也不会太难为他。这道题目可以利用正则的「零宽断言」`(?=exp)`，意思是它断言自身出现的位置的后面能匹配表达式 exp。数字千分位的特点是，第一个逗号后面数字的个数是3的倍数，正则：`/(\d{3})+$/`；第一个逗号前最多可以有 1~3 个数字，正则：`/\d{1,3}/`。加起来就是`/\d{1,3}(\d{3})+$/`，分隔符要从前往后加。

对于零宽断言的详细介绍可以阅读「[零宽断言](https://deerchao.net/tutorials/regex/regex.htm#lookaround)」这篇文章。

```
function exchange(num) {
    num += ''; //转成字符串
    if (num.length <= 3) {
        return num;
    }

    num = num.replace(/\d{1,3}(?=(\d{3})+$)/g, (v) => {
        console.log(v)
        return v + ',';
    });
    return num;
}

console.log(exchange(1234567));

```
## 算法：要求输出该字符串中连续且最多的字符及个数
```js
/**
 * 要求输出该字符串中连续且最多的字符及个数
 */
let str = "aaffffccc"

function searchStr(str) {
    let resObj = {
        label: '',
        total: 0
    }

    let map = {}, max = 0

    for (let i = 0; i < str.length; i++) {
        if (map.hasOwnProperty(str[i])) {
            map[str[i]]++
        } else {
            map[str[i]] = 1
        }
    }
    console.log(map)
    for (let m in map) {
        max = Math.max(map[m], max)
        resObj.label = m
        resObj.total = max
    }
    return resObj
}

console.log(searchStr(str))
```
## 技术选型
桌面应用程序，又称为 GUI 程序。
从古到今，开发桌面应用程序有很多种技术，每种技术的优劣，大家可能耳熟能详了：

VB

上古程序员的开发工具，曾经全球第一的开发语言，拖拽式的图形化开发让它成为极佳的桌面开发工具。微软依靠其操作系统的优势，一直压制同时期的竞争对手 delphi。

C++的win32API

其 MFC 方案是基于窗口中组合控件和消息传递机制。这也是 20 多年前的技术，所以 API 设计的不是很友好。几年前微软已经停止维护，简单来说它已经过时了。

Winform

但是从开发体验角度来说自定义、美化控件会比较麻烦。

C#的.net framework

代表就是 WPF，它的原生特性是其他类库无法比拟的：High DPI、Split Screen 以及对 DirectX 的天然优势。但是并不开源，需要依赖 .net 框架，还有就是启动会比较慢。

Java的swing/javaFx

这是一类比较大的阵营，优势是跨平台和流行开发语言 Java 的天然结合，但是界面不太美观。

C++的Qt

这是很多客户端跨平台的首选，因为开源、UI 库和各种功能的类库非常丰富，但是学习成本比较高。

C++的duilib

这是 windows 下开源的 directUI（微软提出的分离 UI 和逻辑的思想）库，它是迎合互联网桌面软件小而美的趋势发展起来的，可能大家对它的关注度比较少。但是用它开发出的产品大名鼎鼎，比如 QQ、微信、爱奇艺等很多知名度高的软件。

Objective-c/swift cocoa

这是 mac 平台下的方案。可以方便调用底层的 API，缺点是不跨平台，文档不友好，UI 库并不丰富。现在这种方式开发的越来越少了。
从 B/S 和 C/S 架构逐渐融合的角度来说，基于 Web 技术进行桌面程序的开发渐渐变成了主流。因为对界面的代码部分可以做到复用。

这类技术早期的方案是用 vb 内嵌 webBrowser 控件，基于 IE 内核，正好很多网页开发也有用 activeX 的需求，但这种方式具有明显的缺陷，就是非常依赖于用户的环境，会因为组件缺失导致程序各种崩溃。
嵌入式网页框架，这类技术主要是基于浏览器引擎实现 UI 渲染。比较典型的就是 appkit 上面 UIWebView 和 CEF （chro-mium embeded framework)。这种方法可以使用网页 HTML5+CSS 实现各种酷炫的效果，但是缺点也比较明显，就是桌面程序里面嵌入了一个类似 Chrome 的浏览器，内存的开销会比较大。

后面出现了 nwjs 和 electron，electron 相比 CEF 有了单独执行 js 的 v8 引擎，可以运行 Node.js 来完成服务器端功能，通过和内部浏览器的 v8 引擎交互可以实现一个独立的客户端，这不同于 CEF 需要寄宿在其他程序内部。

作者：devue
链接：https://juejin.cn/post/6916104370094342157
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
## nginx 缓存配置

当程序调试好上线后，可以开启nginx缓存，节省服务器的带宽流量，减少一些请求，降低服务器的压力。通过配置nginx的配置文件/usr/local/nginx/conf/nginx.conf实现开关效果

#启用缓存
```
#设置缓存上面定义的后缀文件缓存到浏览器的生存时间
expires   3d;
```
#禁用缓存
```
#禁止缓存，每次都从服务器请求
 add_header Cache-Control no-store;
```
#开缓存步骤

1. 找到nginx配置文件 /usr/local/nginx/conf/nginx.conf (具体位置看实际情况)
2. vi /usr/local/nginx/conf/nginx.conf 进入编辑模式、加入相应命令
3. ：wq保存后，systemctl restart nginx 重启nginx即可

#根目录
```
location ^~ /domain/ {    
    root /domain;   
    expires  30d;
}
```
#静态资料目录
```
location ~* \.(gif|jpg|jpeg|bmp|png|ico|txt|js|css)$ 
{    
    root /domain;    
    expires  30d;
}
``` 
#图片缓存时间设置  
```
location ~ .*.(gif|jpg|jpeg|png|bmp|swf)$  
{  
expires 8d;  
}  
``` 
#JS和CSS缓存时间设置  
```
location ~ .*.(js|css)?$  
{  
expires 2h;  
}
```
————————————————
版权声明：本文为CSDN博主「重名8080」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_55560445/article/details/114420069
##  webpack 缓存配置

关于webpack的缓存，官方的大致解释为：开启缓存以后，webpack构建将尝试从缓存中读取数据，以避免每次运行时都需要运行代价高昂的重新编译过程。

那如何在编译代码时开启缓存呢？

1. cacheDirectory

第一种是配置babel-loader的cacheDirectory选项，针对babel-loader开启缓存。
```js
// webpack.config.js
module.exports = {
    entry: {},
    output: {},
    plugin: [],
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory',
                exclude: /node_modules/
            }
        ]
    }
}
```

2. cache-loader

第二种是利用cache-loader。

首先需要对其进行安装：npm install cache-loader --save-dev ；接着在webpack中进行配置：
```js
// webpack.config.js
module.exports = {
    entry: {},
    output: {},
    plugin: [],
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: [
                    'cache-loader',
                    'babel-loader'
                ]
                exclude: /node_modules/
            },
            {
                test: /\.ext$/,
                use: [
                  'cache-loader',
                  // 其他的loader
                  // ...
                ],
            }
        ]
    }
}
```
对于cache-loader官方给出的使用建议为：在一些性能开销较大的loader之前添加此loader，以将结果缓存到磁盘里；保存和读取这些缓存文件会有一些时间开销，所以请只对性能开销较大的loader使用此 loader。

可以简单粗暴的认为如果一个loader在执行过程中处理的任务较多，较为耗时，即判定此loader性能开销较大。我们就可以尝试给该loader开启缓存，当然如果开启缓存以后实际的打包时长并没有降低，则说明开启缓存对该loader的性能影响不大。

更多有关cache-loader的内容可以查看：https://www.webpackjs.com/loaders/cache-loader/

3. hard-source-webpack-plugin

第三种是开启缓存的方式是使用hard-source-webpack-plugin。它是一个webpack插件，安装命令为：npm install --save-dev hard-source-webpack-plugin；最基础的配置如下：
```js
// webpack.config.js
// 引入
const HardSourceWebpackPlugin  =  require('hard-source-webpack-plugin');

// 只在生产环境下开启HardSourceWebpackPlugin
if (process.env.NODE_ENV === "production") {
    module.exports.plugins = (module.exports.plugins || []).concat([
         new HardSourceWebpackPlugin()
    ])
}
```
更多有关hard-source-webpack-plugin的用法可以查看：https://github.com/mzgoddard/hard-source-webpack-plugin

以上三种开启缓存的方式虽然各不相同，但只要做了配置就可以在我们的磁盘中看到它们的缓存结果。

## react事件机制
在事件注册阶段，最终所有的事件和事件类型都会保存到 listenerBank中。

那么在事件触发的过程中上面这个对象有什么用处呢？

其实就是用来查找事件回调

大致流程
事件触发过程总结为主要下面几个步骤：

1.进入统一的事件分发函数(dispatchEvent)

2.结合原生事件找到当前节点对应的ReactDOMComponent对象

3.开始 事件的合成

3.1 根据当前事件类型生成指定的合成对象

3.2 封装原生事件和冒泡机制

3.3 查找当前元素以及他所有父级

3.4 在 listenerBank查找事件回调并合成到 event(合成事件结束)

4.批量处理合成事件内的回调事件（事件触发完成 end）
## react setState的同步和异步写法
setState 并不是单纯同步/异步的，它的表现会因调用场景的不同而不同：在 React 钩子函数及合成事件中，它表现为异步；而在 setTimeout、setInterval 等函数中，包括在 DOM 原生事件中，它都表现为同步。 这种差异，本质上是由 React 事务机制和批量更新机制的工作方式来决定的。
##  题目：事件循环
题目描述：写出执行结果，并解释原因（以chrome为准）
```js
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
 
async function async2() {
    console.log('async2');
}
 
console.log('script start');
 
setTimeout(()=>{
    console.log('setTimeout');
},0)
 
async1();
 
new Promise((resolve)=>{
    console.log('promise1');
    resolve();
}).then(()=>{
    console.log('promise2');
});
 
console.log('script end');
```
答案：
```
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
```
知识点：

考察的是事件循环和回调队列。注意以下几点：

- Promise 优先于 setTimeout 宏任务，所以 setTimeout 回调会最后执行
- Promise 一旦被定义就会立即执行
- Promise 的 resolve 和 reject  是异步执行的回调。所以 resolve() 会被放到回调队列中，在主函数执行完和 setTimeout 之前调用
await 执行完后，会让出线程。async 标记的函数会返回一个 Promise 对象

解析：
- 首先，事件循环从宏任务（macrostack）队列开始，这个时候，宏任务队列中，只有一个 script (整体代码)任务。从宏任务队列中取出一个任务来执行。
- 首先执行 console.log('script start')，输出 ‘script start'
- 遇到 setTimeout 把 console.log('setTimeout') 放到 macrotask 队列中
- 执行 aync1() 输出 ‘async1 start' 和 'async2' ,把 console.log('async1 end') 放到 micro 队列中
- 执行到 promise ，输出 'promise1' ，把 console.log('promise2') 放到  micro 队列中
- 执行 console.log('script end')，输出 ‘script end'
- macrotask 执行完成会执行 microtask ，把 microtask quene 里面的 microtask 全部拿出来一次性执行完，所以会输出 'async1 end' 和 ‘promise2'
- 开始新一轮的事件循环，去除执行一个 macrotask 执行，所以会输出 ‘setTimeout'

原文链接：https://blog.csdn.net/MFWSCQ/article/details/105109727

## async await的运行机制

https://vue3js.cn/interview/es6/generator.html#三、异步解决方案

### 1.明确概念

async函数就是generator函数的语法糖。

async函数，就是将generator函数的*换成async，将yield替换成await。

【async函数对generator的改进】

(1)内置执行器，不需要使用next()手动执行。

(2)await命令后面可以是Promise对象或原始类型的值，yield命令后面只能是Thunk函数或Promise对象。

(3)返回值是Promise。返回非Promise时，async函数会把它包装成Promise返回。(Promise.resolve(value))

### 2.作用

异步编程的终极解决方案。

### 3.通俗理解（个人理解）

async/await，就是异步编程回调函数写法的替代方法。（使代码以同步方式的写法完成异步操作）

链接：https://www.jianshu.com/p/72e36168944f

## 箭头函数和普通函数
```js
var name='aaa' 
var obj1={
    name:'bbb',
    fn1:function(){
        console.log(this.name)
    },
    fn2:()=>{
        console.log(this.name)
    },
    fn3:function(){
        return function(){
        console.log(this.name)
        }
    },
    fn4:()=>{
        return function(){
        console.log(this.name)
        }
    }
}
// this执行调用它的对象，fn1是obj1调用，所以name是bbb
// this是obj1这个对象 {name: 'bbb', fn1: ƒ, fn2: ƒ, fn3: ƒ, fn4: ƒ}
    obj1.fn1() 
// 箭头函数指向window
    obj1.fn2()
// 箭头函数指向window
    obj1.fn3()()
// 箭头函数指向window
    obj1.fn4()()

// 控制台输出结果：this指向window

// bbb
// aaa
// aaa
// aaa

    // node环境输出结果：指向global
//     bbb
// undefined
// undefined
// undefined
```
##  babel
简单的总结babel工作原理就是：

ES6代码输入 ==》
babylon进行解析 》 
得到AST》 
plugin用babel-traverse对AST树进行遍历转译 ==》 
得到新的AST树==》 
用babel-generator通过AST树生成ES5代码
##  微前端
https://zhuanlan.zhihu.com/p/141530392

什么是微前端？

微前端（Micro-Frontends）是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将 Web 应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。各个前端应用还可以独立运行、独立开发、独立部署。微前端不是单纯的前端框架或者工具，而是一套架构体系，这个概念最早在2016年底被提出，可以参考在Google上搜索Micro-Frontends, 排名靠前的https://micro-frontends.org的博客文章，提出了早期的微前端模型。

为什么会有微前端

任何新技术的产生都是为了解决现有场景和需求下的技术痛点，微前端也不例外：

拆分和细化：当下前端领域，单页面应用（SPA）是非常流行的项目形态之一，而随着时间的推移以及应用功能的丰富，单页应用变得不再单一而是越来越庞大也越来越难以维护，往往是改一处而动全身，由此带来的发版成本也越来越高。微前端的意义就是将这些庞大应用进行拆分，并随之解耦，每个部分可以单独进行维护和部署，提升效率。

整合历史系统：在不少的业务中，或多或少会存在一些历史项目，这些项目大多以采用老框架类似（Backbone.js，Angular.js 1）的B端管理系统为主，介于日常运营，这些系统需要结合到新框架中来使用还不能抛弃，对此我们也没有理由浪费时间和精力重写旧的逻辑。而微前端可以将这些系统进行整合，在基本不修改来逻辑的同时来同时兼容新老两套系统并行运行。

实现微前端有哪些方案

![avatar](../../picture/微前端.jpg)

单纯根据对概念的理解，很容易想到实现微前端的重要思想就是将应用进行拆解和整合，通常是一个父应用加上一些子应用，那么使用类似Nginx配置不同应用的转发，或是采用iframe来将多个应用整合到一起等等这些其实都属于微前端的实现方案，他们之间的对比如下图：

上述方案中，每种都有自己的优劣，最原始的Nginx配置反向代理是从接入层的角度来将系统进行分离，但是需要运维配置，而iframe嵌套是最简单和最快速的方案，但是iframe的弊端也是无法避免的，而Web Components的方案则需要大量的改造成本，最后的组合式应用路由分发方案改造成本中等并且能满足大部分需求，也不影响各前端应用的体验，是当下各个业务普遍采用的一种方案，本文后面的内容也是主要基于这种方案进行阐述。
##  defer和async的区别
先来试个一句话解释仨，当浏览器碰到 script 脚本的时候：

1. 
```
<script src="script.js"></script>
```
没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。

2. 
```
<script async src="script.js"></script>
```
有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。

3. 
```
<script defer src="myscript.js"></script>
```
有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。

然后从实用角度来说呢，首先把所有脚本都丢到` </body> `之前是最佳实践，因为对于旧浏览器来说这是唯一的优化选择，此法可保证非脚本的其他一切元素能够以最快的速度得到加载和解析。

接着，我们来看一张图咯：

![avatar](../../picture/async-defer.jpg)

请输入图片描述

蓝色线代表网络读取，红色线代表执行时间，这俩都是针对脚本的；绿色线代表 HTML 解析。

此图告诉我们以下几个要点：

1. defer 和 async 在网络读取（下载）这块儿是一样的，都是异步的（相较于 HTML 解析）
2. 它俩的差别在于脚本下载完之后何时执行，显然defer 是最接近我们对于应用脚本加载和执行的要求的
3. 关于 defer，此图未尽之处在于它是按照加载顺序执行脚本的，这一点要善加利用
4. async 则是一个乱序执行的主，反正对它来说脚本的加载和执行是紧紧挨着的，所以不管你声明的顺序如何，只要它加载完了就会立刻执行
5. 仔细想想，async 对于应用脚本的用处不大，因为它完全不考虑依赖（哪怕是最低级的顺序执行），不过它对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适的，最典型的例子：Google Analytics
##  node前端捕获错误
https://juejin.cn/post/6941576023645356069

https://cloud.tencent.com/developer/article/1477500
## 图片懒加载如何做的
https://zhuanlan.zhihu.com/p/55311726
## Vue.use() 干了啥（没答上来）
在我们以后编写插件的时候可以有两种方式。

一种是将这个插件的逻辑封装成一个对象最后将最后在install编写业务代码暴露给Vue对象。这样做的好处是可以添
加任意参数在这个对象上方便将install函数封装得更加精简，可拓展性也比较高。

还有一种则是将所有逻辑都编写成一个函数暴露给Vue。

其实两种方法原理都一样，无非第二种就是将这个插件直接当成install函数来处理。

https://segmentfault.com/a/1190000012296163
## npm 和 yarn 区别
npm 是按照队列执行每个 package，也就是说必须要等到当前 package 安装完成之后，才能继续后面的安装。 而 Yarn 是同步执行所有任务，提高了性能。 离线模式：如果之前已经安装过一个软件包，用Yarn再次安装时之间从缓存中获取，就不用像npm那样再从网络下载了。

https://www.sitepoint.com/yarn-vs-npm/

## ui自动化测试实现原理
UI自动化测试，即通过模拟手动操作用户UI界面的方式，以代码方式实现自动操作和验证的一种自动化测试手段。. 在十年前，那时候还是PC web的天下，以Selenium驱动web UI的自动化测试还是主流。. 五年前，当测试人员逐渐熟悉了Selenium API编写UI自动化用例时，互联网的主战场已经从web端逐渐过渡到了app端。. 现在，app在UI自动化方面的框架已经比较成熟，例如我们已经使用了三年多的appium，还有诸如uiautomator、espresso、robotium等等。.
## UI变动多怎么办
UI 自动化的本质：

定位元素

操作元素

模拟页面动作

断言结果

生成报告

> 适合UI自动化测试的场景

对此，可以参考以下的标准辅助判断：

1. 项目的需求不会频繁变动
2. 页面的 UI 已经进入稳定阶段
3. 项目周期足够长
4. 大量回归的测试任务

https://segmentfault.com/a/1190000023474856

## bigint注意事项
BigInt是一种新的数据类型，用于当整数值大于Number数据类型支持的范围时。这种数据类型允许我们安全地对大整数执行算术操作，表示高分辨率的时间戳，使用大整数id，等等，而不需要使用库。
重要的是要记住，不能使用Number和BigInt操作数的混合执行算术运算，需要通过显式转换其中的一种类型。 此外，出于兼容性原因，不允许在BigInt上使用一元加号（+）运算符。
https://zhuanlan.zhihu.com/p/75754896

## requestAnimationFrame
https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame
要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

浏览器渲染帧率快，那么这个api执行更多次
## ui渲染进程和js执行进程是同一个线程吗
是的
## [算法]数组sort方法用的是哪种排序算法
sort使用的是插入排序和快速排序结合的排序算法。数组长度不超过10时，使用插入排序。长度超过10使用快速排序。在数组较短时插入排序更有效率。
https://www.cnblogs.com/xiaocuncheng/p/10646735.html

## clearfix清除浮动实现双栏布局
```html
<div class="father clearfix">   <div class="child1 child">儿子1</div>   <div class="child2 child">儿子3</div> </div>
```
```css
.child{   float:left; } .clearfix::after{   content:'';   display:block;   clear:both; } .father{   border:1px solid black; } .child1{   width:30%;//   background:red; } .child2{    background:yellow;   width:70%;// }
```
## css加载顺序
内联 > ID选择器 > 类选择器 > 标签选择器
## css如何围绕着一个点旋转成圆
https://blog.csdn.net/musclemen/article/details/78728563
## 项目在Windows和Linux下部署的差异以及需要注意点
1. Linux下路径和文件名都是区分大小写的

abc/bcd/aa.jpg和abc/Bcd/aa.jpg是两个不同的文件路径，window访问没问题，Linux大小写敏感会导致找不到文件
2. 盘符及目录分隔符的区别

父子目录及目录与文件的分隔符，Windows是\，而Linux是/，java编码最好使用File.separator（能够自动识别Widow或者Linux，使用想用的分隔符）

两个不同路径分隔符，window下；，Linux下为：，java编码最好使用File.pathSeparator
3. 个人实践
```
File file = new File("C:\download/pic/1.jpg")
```
可以被java识别，因此web项目中properties文件中配置文件存放根路径，

Windows下为C:\download,Linux下为/download，数据库中仅存放/pic/1.jpg这样的文件访问路径（这种分隔符也符合web资源的请求）

4. 在linux 下java 的默认的文件写入权限仅局限在执行目录之下。如果需要在其他目录写入文件或者文件夹 需要手动设置以下权限。
```
File f=new File("/home/sxl/out");
f.setWritable(true, false);
```
## ngnix负载均衡
负载均衡配置

我们使用 nginx 中的 upstream模块 来实现nginx将跨越单机的限制，完成网络数据的接收、处理和转发。我们主要使用提到的转发功能进行调度分发。

我定义的 upstream 模块名称是 guwenjie_http （最好定义一个有意义的，这个就很不好 _），我配置了两个IP端口，到时候nginx分发的视乎就往这两个服务器上分发。

```
//举例，以下IP，端口无效
 upstream test{ 
      server 11.22.333.11:6666 weight=1; 
      server 11.22.333.22:8888 down; 
      server 11.22.333.33:8888 backup;
      server 11.22.333.44:5555 weight=2; 
}
//down 表示单前的server临时不參与负载.
//weight 默觉得1.weight越大，负载的权重就越大
//backup： 其他全部的非backup机器down或者忙的时候，请求backup机器。所以这台机器压力会最轻 
```

后面的 weight=1，weight=2 是表示权重的意思，数字越大，权重越高，在该例中 8811 这个端口权重就是 8855 的两倍，比如三次请求，大概就是两次分发给 8811 一次分发给 8855 ，其实这个是不需要写的，upstream 模块默认就是轮询法，每个ip分发一次，设置权重（加权轮询法）的意义上面已经解释过了，可以看下。

————————————————
版权声明：本文为CSDN博主「millet109」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/gu_wen_jie/article/details/82149003


## node高并发
Node可以在不新增额外线程的情况下，依然可以对任务进行并发处理 —— Node.js是单线程的。它通过事件循环（event loop）来实现并发操作，对此，我们应该要充分利用这一点 —— 尽可能的避免阻塞操作，取而代之，多使用非阻塞操作。

> node单线程实现高并发原理

众所周知nodejs是单线程且支持高并发的脚本语言。可为什么单线程的nodejs可以支持高并发呢？很多人都不明白其原理，下面我来谈谈我的理解：

node的优点：I/O密集型处理是node的强项，因为node的I/O请求都是异步的（如：sql查询请求、文件流操作操作请求、http请求...）

1. 什么是异步？

异步：发出操作指令，然后就可以去做别的事情了（主线程不需要等待），所有操作完成后再执行回调

```js
// 第一步：定义变量
let a = 1;

// 第二步：发出指令，然后把回调函数加入事件队列（回调函数并没有执行）
setTimeout(() => {
    console.log(a);
}, 0)
// 第三步：赋值，回调函数没有执行
a = 2;
// 第四步：发出指令，然后把回调函数加入异步队列（回调函数并没有执行）
setTimeout(() => {
    console.log(a);
}, 0)
// 第五步：赋值，回调函数没有执行
a = 3;
// 当所有代码执行完毕，cpu空闲下来了，就会开始遍历执行事件队列里面的回调函数
// 所以最后控制台输出：3 3
```

2. 拥有异步I/O的node为什么可以支持高并发呢？

因为I/O操作是由node的工作线程去执行的（nodejs底层的libuv是多线程的线程池用来并行io操作），且主线程是不需要等待结果返回的，只要发出指令马上就可以去忙其他事情了。

3. 虽然nodejs的I/O操作开启了多线程，但是所有线程都是基于node服务进程开启的，并不能充分利用cpu资源

pm2进程管理器可以解决这个问题

pm2 是一个带有负载均衡功能的Node应用的进程管理器.

4.  cpu核数与线程之间的关系

在过去单CPU时代，单任务在一个时间点只能执行单一程序。之后发展到多任务阶段，计算机能在同一时间点并行执行多任务或多进程。

虽然并不是真正意义上的“同一时间点”，而是多个任务或进程共享一个CPU，并交由操作系统来完成多任务间对CPU的运行切换，以使得每个任务都有机会获得一定的时间片运行。而现在多核CPU的情况下，同一时间点可以执行多个任务，具体到这个任务在CPU哪个核上运行，这个就跟操作系统和CPU本身的设计相关了。


## src herf区别
https://www.cnblogs.com/chri330dj/p/12401719.html

href 指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的联系。href 属性的值可以是任何有效文档的相对或绝对URL，包括片段标识符和JavaScript代码段。若在文档中添加 ，浏览器会识别该文档为 CSS 文件，就会并行下载资源并且不会停止对当前文档的处理。

> href用来建立与网络资源的联系，让当前标签能够链接到目标地址。


src指向外部资源的位置，在请求 src 资源时会将其指向的资源下载并应用到当前文档元素定义的位置(替换当前内容)。在浏览器下载，编译，执行这个文件之前页面的加载和处理会被暂停。

> src用来替换当前元素
## 如何清除浮动，原理
1. 利用clear样式
```css
.textDiv {
    color: blue;
    border: 2px solid blue;

    clear: left;
}
```
2. 父元素结束标签之前插入清除浮动的块级元素
```html
<div class="topDiv">
    <div class="textDiv">...</div>
    <div class="floatDiv">float left</div>
    <div class="blankDiv"></div>
</div>
<div class="bottomDiv">...</div>
```

```css
.topDiv {
    width: 500px;
    border: 2px solid black;
}
.floatDiv {
    width: 100px;
    height: 100px;
    border: 2px dotted red;
    color: red;
    margin: 4px;
    float: left;
}
.bottomDiv {
    width: 500px;
    height: 100px;
    margin: 5px 0;
    border: 2px dotted black;
}
.textDiv {
    color: blue;
    border: 2px solid blue;
}
// 区别在这里
.blankDiv {
    clear: both; // or left
}
```
3. 利用伪元素（clearfix）
```html
<div class="topDiv clearfix">
    <div class="textDiv">...</div>
    <div class="floatDiv">float left</div>
</div>
<div class="bottomDiv">...</div>
```

```css
// 省略基本的样式
// 区别在这里
.clearfix:after {
    content: '.';
    height: 0;
    display: block;
    clear: both;
}
```
4. 利用overflow清除浮动
```html
<div class="topDiv">
    <div class="floatDiv">float left</div>
    <div class="textDiv">...</div>
</div>
<div class="bottomDiv">...</div>
```
```css
.topDiv {
    width: 500px;
    padding: 4px;
    border: 2px solid black;

    // 区别在这里
    overflow: auto;
}
.floatDiv {
    width: 100px;
    height: 100px;
    border: 2px dotted red;
    color: red;
    margin: 4px;
    float: left;
}
.bottomDiv {
    width: 500px;
    height: 100px;
    margin: 5px 0;
    border: 2px dotted black;
    clear: both;
}
.textDiv {
    color: blue;
    border: 2px solid blue;
}
```
https://juejin.cn/post/6844903504545316877

## 优雅降级和渐进增强
优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。 降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。
##  伪数组
伪数组，就是像数组一样有 length 属性，也有 0 、 1 、 2 、 3 等属性的对象，看起来就像数组一样，但不是数组，比如 ? 常见的参数的参数 arguments，DOM 对象列表（比如通过 document.getElementsByTags 得到的列表），jQuery 对象（比如 $ ("div")）。

详细请看[https://www.cnblogs.com/chenpingzhao/p/4764791.html#:~:text=%E4%BC%AA%E6%95%B0%E7%BB%84%EF%BC%8C%E5%B0%B1%E6%98%AF%E5%83%8F%E6%95%B0%E7%BB%84%E4%B8%80%E6%A0%B7%E6%9C%89%20length%20%E5%B1%9E%E6%80%A7%EF%BC%8C%E4%B9%9F%E6%9C%89%200%20%E3%80%81%201%20%E3%80%81%202,%E5%B8%B8%E8%A7%81%E7%9A%84%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%82%E6%95%B0%20arguments%EF%BC%8CDOM%20%E5%AF%B9%E8%B1%A1%E5%88%97%E8%A1%A8%EF%BC%88%E6%AF%94%E5%A6%82%E9%80%9A%E8%BF%87%20document.getElementsByTags%20%E5%BE%97%E5%88%B0%E7%9A%84%E5%88%97%E8%A1%A8%EF%BC%89%EF%BC%8CjQuery%20%E5%AF%B9%E8%B1%A1%EF%BC%88%E6%AF%94%E5%A6%82%20%24%20%28%22div%22%29%EF%BC%89%E3%80%82](https://www.cnblogs.com/chenpingzhao/p/4764791.html#:~:text=%E4%BC%AA%E6%95%B0%E7%BB%84%EF%BC%8C%E5%B0%B1%E6%98%AF%E5%83%8F%E6%95%B0%E7%BB%84%E4%B8%80%E6%A0%B7%E6%9C%89%20length%20%E5%B1%9E%E6%80%A7%EF%BC%8C%E4%B9%9F%E6%9C%89%200%20%E3%80%81%201%20%E3%80%81%202,%E5%B8%B8%E8%A7%81%E7%9A%84%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%82%E6%95%B0%20arguments%EF%BC%8CDOM%20%E5%AF%B9%E8%B1%A1%E5%88%97%E8%A1%A8%EF%BC%88%E6%AF%94%E5%A6%82%E9%80%9A%E8%BF%87%20document.getElementsByTags%20%E5%BE%97%E5%88%B0%E7%9A%84%E5%88%97%E8%A1%A8%EF%BC%89%EF%BC%8CjQuery%20%E5%AF%B9%E8%B1%A1%EF%BC%88%E6%AF%94%E5%A6%82%20%24%20%28%22div%22%29%EF%BC%89%E3%80%82)
## 伪数组转化为普通数组
Array.from() 可以通过以下方式来创建数组对象：

伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）

详细请看[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
## HTTP、websocket 和 socket 的区别
> Socket

简单理解：Socket = IP地址 + 端口 + 协议。

具体来说，Socket是一套标准，它完成了对TCP/IP的高度封装，屏蔽网络细节以方便开发者更好地进行网络编程。

> WebSocket

WebSocket是一个持久化的协议，它是伴随 HTML5 而出的协议，用来解决 http 不支持持久化连接的问题。

总之，WebSocket 和 Socket 其实是两个东西，Socket 一个是网络编程的标准接口，而 WebSocket 是应用层通信协议。

但是，说 WebSocket 与 Socket 的差异更多说的是：WebSocket 与 HTTP 无状态被动协议的差异，或者说是 WebSocket 与 Ajax 轮询和 long poll 等实现实时信息传输方式的差异，这也是本文需要讨论的问题。

HTTP协议是被动的无状态协议，一个Request对应一个Response，每次Request，客户端都需要重复带上用于鉴别客户端身份的信息到服务端，且服务端无法主动推送消息给客户端。针对HTTP这种效率低、响应不及时、浪费通信带宽和服务端资源的情况，WebSocket应运而生，WebSocket采用一次请求，持久连接方式解决了反复校验客户端身份问题，服务端建立连接后可以主动推送消息给客户端，因此通信效率大大增加，同时也节约了客户端、服务端和网络资源。

详细请看[https://zhuanlan.zhihu.com/p/168140913](https://zhuanlan.zhihu.com/p/168140913)
## 小程序渲染原理
　　小程序的框架包含两部分，分别是渲染层和AppService逻辑层，渲染层的界面使用了WebView 进行渲染；逻辑层采用JsCore线程运行JS脚本，进行逻辑处理、数据请求及接口调用等，一个小程序存在多个界面，所以渲染层存在多个WebView线程，这两个线程的通信会经由微信客户端进行中转，逻辑层把数据变化通知到渲染层，触发渲染层页面更新，渲染层把触发的事件通知到逻辑层进行业务处理。
  
  　　解析（从下往上看）：

　　1、最底层是微信，当我们发版时小程序开发工具会把我们的代码和框架一起进行打包，当我们在微信里打开小程序时其实微信会把打包好的代码下载到微信app里，这样我们就可以像在开发工具里一样在微信里运行我们的小程序了。

　　2、native层就是小程序的框架，这个框架里封装了ui层组件和逻辑层组件，这些组件可以通过微信app提供的接口调用手机硬件信息。

　　3、最上层的两个框，是我们真正需要进行操作的视图层和逻辑层，视图层和逻辑层的交互是通过数据经由native层进行交互的。视图层和逻辑层都可以调用native框架里封装好的组件和方法。
## 给个方案（提交私密数据，既要安全性高，又要效率快，并发高）
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

## webpack如何转化es ts
webpack 2 支持原生的 ES6 模块语法，意味着你无须额外引入 babel 这样的工具，就可以使用 import 和 export。但是注意，如果使用其他的 ES6+ 特性，仍然需要引入 babel。

https://webpack.docschina.org/api/module-methods/
## 怎么做性能优化
上面提到的都是性能优化的单个点，性能优化项目具体实施起来，应该按照下面步骤推进：
1. 建立性能数据收集平台，摸底当前性能数据，通过性能打点，将上述整个页面打开过程消耗时间记录下来
2. 分析耗时较长时间段原因，寻找优化点，确定优化目标
3. 开始优化
4. 通过数据收集平台记录优化效果
5. 不断调整优化点和预期目标，循环2~4步骤
性能优化是个长期的事情，不是一蹴而就的，应该本着先摸底、再分析、后优化的原则逐步来做。
## 二叉树的深度优先搜索和广度优先搜索
> 深度优先搜索：

前序遍历，访问节点顺序：根节点--->左子节点--->右子节点（根节点在最前面被访问）

中序遍历，访问节点顺序：左子节点--->根节点--->右子节点（根节点在最中间被访问）

后续遍历，访问节点顺序：左子节点--->右子节点--->根节点（根节点在最后面被访问）

> 广度优先搜索：

按照二叉树中的层次从左到右依次遍历每层中的结点
##  是否有音视频的项目经验
浏览器中的音视频知识总结v1.0(工作中需要和视频打交道必看！)

https://juejin.cn/post/7002288264413446157#heading-35
## 虚拟列表实现原理
https://juejin.cn/post/6844903982742110216


## 图片懒加载实现原理
https://juejin.cn/post/6844903482164510734
## 数组中哪些是有副作用的
有副作用的（改变原数组）
1. push()
2. shift()
3. unshift()
4. splice()
5. pop()
6. reverse()
7. sort()
8. fill()

无副作用 （不改变原数组）
1. concat（）
2. join()
3. indexOf() , lastIndexOf()
4. slice()
5. entries()
6. keys()
7. values()
8. every()
9. filter()
10. forEach()
11. includes()
12. some()
13. reducer()
14. map()
15. find() , findIndex()
16. flat()
## promise是同步还是异步
promise构造函数是同步执行的，then方法是异步执行的
##  Google V8 引擎
https://blog.csdn.net/xiangzhihong8/article/details/74996757


> V8的前世今生

V8是JavaScript渲染引擎，第一个版本随着Chrome的发布而发布(具体时间为2008年9月2日)。在运行JavaScript之前，相比其它的JavaScript的引擎转换成字节码或解释执行，V8将其编译成原生机器码（IA-32, x86-64, ARM, or MIPS CPUs），并且使用了如内联缓存（inline caching）等方法来提高性能。V8可以独立运行，也可以嵌入到C++应用程序中运行。

随着Web技术的快速发展，JavaScript所要承担的工作也越来越多，早就超越了“表单验证”的范畴，这就更需要快速的解析和执行JavaScript脚本。V8引擎就是为解决这一问题而生，在Node中也采用该引擎来解析JavaScript。

那么，V8是如何使得实现对JavaScript的解析，又是如何实现高性能的呢？下面从几个方面来分析下V8是如何渲染页面的。

> 渲染引擎与网页渲染

>> 编程分类
编程语言分为编译型语言和解释型语言两类，编译型语言在执行之前要先进行完全编译，而解释型语言一边编译一边执行，很明显解释型语言的执行速度是慢于编译型语言的，而JavaScript就是一种解释型脚本语言，支持动态类型、弱类型、基于原型的语言，内置支持类型。

>> 网页渲染

浏览器自从上世纪80年代后期90年代初期诞生以来，已经得到了长足的发展，其功能也越来越丰富，包括网络、资源管理、网页浏览、多页面管理、插件和扩展、书签管理、历史记录管理、设置管理、下载管理、账户和同步、安全机制、隐私管理、外观主题、开发者工具等。而在这之中，最重要的莫过于网页渲染。

>> 渲染引擎

渲染引擎：所谓渲染引擎，就是将HTML/CSS/JavaScript等文本或图片等信息转换成图像结果的转换程序。在浏览器的发展过程中，不同的厂商开发了不同的渲染引擎，如Tridend(IE)、Gecko(FF)、WebKit(Safari,Chrome,Andriod浏览器)等。而在这里面不得不提下WebKit，一个由苹果发起的一个开源项目，如今它在移动端占据着垄断地位，更有基于WebKit的web操作系统不断涌现(如：Chrome OS、Web OS)。

WebKit内部结构大体如下(来自网络)：

![avatar](./20170711212539052.png)

上图中实线框内模块是所有移植的共有部分，虚线框内不同的厂商可以自己实现。由上图可知，WebKit主要有操作系统、WebCore 、WebKit嵌入式接口和第三方库组成。

- 操作系统：是管理和控制计算机硬件与软件资源的计算机程序，是直接运行在“裸机”上的最基本的系统软件，任何其他软件都必须在操作系统的支持下才能运行。WebKit也是在操作系统上工作的。
- WebCore：本部分包含各个浏览器使用的共享部分，包括HTML解析器、CSS解析器、DOM和SVG等。JavaScriptCore是WebKit的默认引擎，在谷歌系列产品中被替换为V8引擎。WebKit Ports是WebKit中的非共享部分，由于平台差异、第三方库和需求的不同等原因，导致不同浏览器性能和功能差异的关键部分。
- WebKit嵌入式接口：该接口主要供浏览器调用，与移植密切相关，不同的移植有不同的接口规范。
- 第三方库：主要是诸如图形库、网络库、视频库、数据存储库等第三方库。

> 网页渲染流程简析

对于一个网页，要经历怎样的过程，才能呈现在用户面前呢？或许下面的一张图可以给你提供答案。

![avatar](./20170711213832415.png)

首先，系统将网页输入到HTML解析器，HTML解析器解析，然后构建DOM树，在这期间如果遇到JavaScript代码则交给JavaScript引擎处理；如果遇到CSS样式信息，则构建一个内部绘图模型。该模型由布局模块计算模型内部各个元素的位置和大小信息，最后由绘图模块完成从该模型到图像的绘制。

对于网页的绘制过程，大体可以分为3个阶段：

>> 从输入URL到生成DOM树

在这个阶段中，主要会经历一下几个步骤：

1. 地址栏输入URL，WebKit调用资源加载器加载相应资源；
2. 加载器依赖网络模块建立连接，发送请求并接收答复；
3. WebKit接收各种网页或者资源数据，其中某些资源可能同步或异步获取；
4. 网页交给HTML解析器转变为词语；
5. 解释器根据词语构建节点，形成DOM树；
6. 如果节点是JavaScript代码，调用JavaScript引擎解释并执行；
7. JavaScript代码可能会修改DOM树结构；
8. 如果节点依赖其他资源，如图片、视频等，调用资源加载器加载它们，但这些是异步加载的，不会阻碍当前DOM树继续创建；如果是JavaScript资源URL（没有标记异步方式），则需要停止当前DOM树创建，直到JavaScript加载并被JavaScript引擎执行后才继续DOM树的创建。

>> 从DOM树到构建WebKit绘图上下文

在这个阶段，主要完成一下几个操作：

1. CSS文件被CSS解释器解释成内部表示；
2. CSS解释器完成工作后，在DOM树上附加样式信息，生成RenderObject树；
3. RenderObject节点在创建的同时，WebKit会根据网页层次结构构建RenderLayer树，同时构建一个虚拟绘图上下文。

>> 绘图上下文内容并呈现图像内容

在这个阶段，主要完成一下操作：

1. 绘图上下文是一个与平台无关的抽象类，它将每个绘图操作桥接到不同的具体实现类，也就是绘图具体实现类；
2. 绘图实现类也可能有简单的实现，也可能有复杂的实现，软件渲染、硬件渲染、合成渲染等；
3. 绘图实现类将2D图形库或者3D图形库绘制结果保存，交给浏览器界面进行展示。

> JavaScript引擎

JavaScript本质上是一种解释型语言，与编译型语言不同的是它需要一遍执行一边解析，而编译型语言在执行时已经完成编译。
那么对于JavaScript这种解释性语言来讲，如何提高解析速度就是当务之急。JavaScript引擎和渲染引擎的关系如下图所示.

![avatar](./20170711214942371.png)

为了提高性能，JavaScript引入了Java虚拟机和C++编译器中的众多技术。而一个完整JavaScript引擎的执行过程大致流程如下：源代码-→抽象语法树-→字节码-→JIT-→本地代码。一个典型的抽象语法树如下图所示：

![avatar](./20170711215256338.png)

为了节约将抽象语法树通过JIT技术转换成本地代码的时间，V8放弃了生成字节码阶段的性能优化。而通过Profiler采集一些信息，来优化本地代码。

在2017年4月底，v8 发布了5.9 版本，在此版本中新增了一个 Ignition 字节码解释器，并默认开启。做出这一改变的原因为：（主要动机）减轻机器码占用的内存空间，即牺牲时间换空间；提高代码的启动速度；对 v8 的代码进行重构，降低 v8 的代码复杂度（详细介绍请查阅：JS 引擎与字节码的不解之缘）


## 算法
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]

输入：nums = []
输出：[]

输入：nums = [0]
输出：[]

```js
var treeNums = function (nums) {
    let arr = []
    if (nums.length < 3) {
        return []
    }
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        
        for (let j = i + 1, k = nums.length - 1; j < k;) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                arr.push([nums[i], nums[j], nums[k]])
                j++
                k--
                while (j < k && nums[j] === nums[j - 1]) {
                    j++
                }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                // 值大的情况下，往前走
                k--
            } else {
                j++
            }
        }
    }
    return arr
}
console.log(treeNums([-1, 0, 1, 2, -1, -4]))
```
## 手写题
```js
const time = (timer) => { 
    return new Promise(resolve => { setTimeout(() => { resolve() }, timer) })
} 
const ajax1 = () => time(2000).then(() => { console.log(1); return 1 }) 
const ajax2 = () => time(1000).then(() => { console.log(2); return 2 }) 
const ajax3 = () => time(1000).then(() => { console.log(3); return 3 }) 
function mergePromise () { 
  // 在这里写代码 
} 
mergePromise([ajax1, ajax2, ajax3]).then(data => { console.log("done"); 
                                                  
console.log(data); // data 为 [1, 2, 3] });
```

我当时的回答
```js
const time = (timer) => { 
    return new Promise(resolve => { setTimeout(() => { resolve() }, timer) })
} 
const ajax1 = () => time(2000).then(() => { console.log(1); return 1 }) 
const ajax2 = () => time(1000).then(() => { console.log(2); return 2 }) 
const ajax3 = () => time(1000).then(() => { console.log(3); return 3 }) 
function mergePromise (arr) { 
  // 在这里写代码 
let count=0
let 
return new Promise((resolve,reject)=>{
    // 循环执行数组
    for(let i=0;i<arr.length;i++){
     Promise(arr[i])
     count++
     if(count===arr.length){
         resolve()
     }       
    }
})
} 
mergePromise([ajax1, ajax2, ajax3]).then(data => { console.log("done"); 
                                                  
console.log(data); // data 为 [1, 2, 3] });
```
## loader.pitch
https://webpack.docschina.org/api/loaders/#pitching-loader

- Pitching Loader
loader 总是 从右到左被调用。有些情况下，loader 只关心 request 后面的 元数据(metadata)，并且忽略前一个 loader 的结果。在实际（从右到左）执行 loader 之前，会先 从左到右 调用 loader 上的 pitch 方法。

> Tip
loader 可以通过 request 添加或者禁用内联前缀，这将影响到 pitch 和执行的顺序。更多详情请查阅 Rule.enforce。

对于以下 use 配置：
```js
module.exports = {
  //...
  module: {
    rules: [
      {
        //...
        use: ['a-loader', 'b-loader', 'c-loader'],
      },
    ],
  },
};
```
将会发生这些步骤：
```
|- a-loader `pitch`
  |- b-loader `pitch`
    |- c-loader `pitch`
      |- requested module is picked up as a dependency
    |- c-loader normal execution
  |- b-loader normal execution
|- a-loader normal execution
```
那么，为什么 loader 可以利用 "pitching" 阶段呢？

首先，传递给 pitch 方法的 data，在执行阶段也会暴露在 this.data 之下，并且可以用于在循环时，捕获并共享前面的信息。
```js
module.exports = function (content) {
  return someSyncOperation(content, this.data.value);
};

module.exports.pitch = function (remainingRequest, precedingRequest, data) {
  data.value = 42;
};
```
其次，如果某个 loader 在 pitch 方法中给出一个结果，那么这个过程会回过身来，并跳过剩下的 loader。在我们上面的例子中，如果 b-loader 的 pitch 方法返回了一些东西：
```js
module.exports = function (content) {
  return someSyncOperation(content);
};

module.exports.pitch = function (remainingRequest, precedingRequest, data) {
  if (someCondition()) {
    return (
      'module.exports = require(' +
      JSON.stringify('-!' + remainingRequest) +
      ');'
    );
  }
};
```
上面的步骤将被缩短为：
```
|- a-loader `pitch`
  |- b-loader `pitch` returns a module
|- a-loader normal execution
The Loader Context
```
## useMemo与useCallback使用指南
https://blog.csdn.net/sinat_17775997/article/details/94453167

在介绍一下这两个hooks的作用之前，我们先来回顾一下react中的性能优化。在hooks诞生之前，如果组件包含内部state，我们都是基于class的形式来创建组件。当时我们也知道，react中，性能的优化点在于：

1. 调用setState，就会触发组件的重新渲染，无论前后的state是否不同
2. 父组件更新，子组件也会自动的更新

基于上面的两点，我们通常的解决方案是：使用immutable进行比较，在不相等的时候调用setState；在shouldComponentUpdate中判断前后的props和state，如果没有变化，则返回false来阻止更新。

在hooks出来之后，我们能够使用function的形式来创建包含内部state的组件。但是，使用function的形式，失去了上面的shouldComponentUpdate，我们无法通过判断前后状态来决定是否更新。而且，在函数组件中，react不再区分mount和update两个状态，这意味着函数组件的每一次调用都会执行其内部的所有逻辑，那么会带来较大的性能损耗。因此useMemo 和useCallback就是解决性能问题的杀手锏。

> 对比
我们先简单的看一下useMemo和useCallback的调用签名：
```js
function useMemo<T>(factory: () => T, deps: DependencyList | undefined): T; function useCallback<T extends (...args: any[]) => any>(callback: T, deps: DependencyList): T;
```
useCallback和useMemo的参数跟useEffect一致，他们之间最大的区别有是useEffect会用于处理副作用，而前两个hooks不能。

useMemo和useCallback都会在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行；并且这两个hooks都返回缓存的值，useMemo返回缓存的变量，useCallback返回缓存的函数。

> useMemo

我们来看一个反例：
```js
import React from 'react';
 
 
export default function WithoutMemo() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
 
    function expensive() {
        console.log('compute');
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }
 
    return <div>
        <h4>{count}-{val}-{expensive()}</h4>
        <div>
            <button onClick={() => setCount(count + 1)}>+c1</button>
            <input value={val} onChange={event => setValue(event.target.value)}/>
        </div>
    </div>;
}
```

这里创建了两个state，然后通过expensive函数，执行一次昂贵的计算，拿到count对应的某个值。我们可以看到：无论是修改count还是val，由于组件的重新渲染，都会触发expensive的执行(能够在控制台看到，即使修改val，也会打印)；但是这里的昂贵计算只依赖于count的值，在val修改的时候，是没有必要再次计算的。在这种情况下，我们就可以使用useMemo，只在count的值修改时，执行expensive计算：

```js
export default function WithMemo() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
    const expensive = useMemo(() => {
        console.log('compute');
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }, [count]);
 
    return <div>
        <h4>{count}-{expensive}</h4>
        {val}
        <div>
            <button onClick={() => setCount(count + 1)}>+c1</button>
            <input value={val} onChange={event => setValue(event.target.value)}/>
        </div>
    </div>;
}
```
上面我们可以看到，使用useMemo来执行昂贵的计算，然后将计算值返回，并且将count作为依赖值传递进去。这样，就只会在count改变的时候触发expensive执行，在修改val的时候，返回上一次缓存的值。

> useCallback

讲完了useMemo，接下来是useCallback。useCallback跟useMemo比较类似，但它返回的是缓存的函数。我们看一下最简单的用法：
```js
const fnA = useCallback(fnB, [a])
```

上面的useCallback会将我们传递给它的函数fnB返回，并且将这个结果缓存；当依赖a变更时，会返回新的函数。既然返回的是函数，我们无法很好的判断返回的函数是否变更，所以我们可以借助ES6新增的数据类型Set来判断，具体如下：

```js

import React, { useState, useCallback } from 'react';
 
const set = new Set();
 
export default function Callback() {
    const [count, setCount] = useState(1);
    const [val, setVal] = useState('');
 
    const callback = useCallback(() => {
        console.log(count);
    }, [count]);
    set.add(callback);
 
 
    return <div>
        <h4>{count}</h4>
        <h4>{set.size}</h4>
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <input value={val} onChange={event => setVal(event.target.value)}/>
        </div>
    </div>;
}
```
我们可以看到，每次修改count，set.size就会+1，这说明useCallback依赖变量count，count变更时会返回新的函数；而val变更时，set.size不会变，说明返回的是缓存的旧版本函数。

知道useCallback有什么样的特点，那有什么作用呢？

使用场景是：有一个父组件，其中包含子组件，子组件接收一个函数作为props；通常而言，如果父组件更新了，子组件也会执行更新；但是大多数场景下，更新是没有必要的，我们可以借助useCallback来返回函数，然后把这个函数作为props传递给子组件；这样，子组件就能避免不必要的更新。

```js
import React, { useState, useCallback, useEffect } from 'react';
function Parent() {
    const [count, setCount] = useState(1);
    const [val, setVal] = useState('');
 
    const callback = useCallback(() => {
        return count;
    }, [count]);
    return <div>
        <h4>{count}</h4>
        <Child callback={callback}/>
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <input value={val} onChange={event => setVal(event.target.value)}/>
        </div>
    </div>;
}
 
function Child({ callback }) {
    const [count, setCount] = useState(() => callback());
    useEffect(() => {
        setCount(callback());
    }, [callback]);
    return <div>
        {count}
    </div>
}
```
不仅是上面的例子，所有依赖本地状态或props来创建函数，需要使用到缓存函数的地方，都是useCallback的应用场景。

> 多谈一点

useEffect、useMemo、useCallback都是自带闭包的。也就是说，每一次组件的渲染，其都会捕获当前组件函数上下文中的状态(state, props)，所以每一次这三种hooks的执行，反映的也都是当前的状态，你无法使用它们来捕获上一次的状态。对于这种情况，我们应该使用ref来访问。

## js的number类型最大值
9007199254740992 2的53次方

主要是存储二进制时小数点的偏移量最大为52位，最多可以表达的位数是2^53=9007199254740992，对应科学计数尾数是 9.007199254740992，这也是 JS 最多能表示的精度
##  js 遍历对象的方法
https://blog.csdn.net/qq_40413670/article/details/105902866


Js遍历对象的方法主要有for in、Object.keys()、Object.getOwnPropertyNames()、Reflect.ownKeys()、Object.getOwnPropertySymbols()。

> for in

for in语句以任意顺序迭代对象的可枚举属性，包括原型链上的可枚举属性，不包括Symbol属性。

```js
var obj = {
    2: "11",
    1: "1",
    b: "1111",
    a: "111",
    [Symbol()]: "11111"
}
Object.prototype.c = "111111"; // 在原型链上增加一个可枚举属性
Object.defineProperty(obj, "d", {value:"1111111", enumerable:false}); // 在obj上增加一个不可枚举属性
console.log(obj); // {1: "1", 2: "11", b: "1111", a: "111", d: "1111111", Symbol(): "11111"}
for( let unit in obj ){
    console.log(unit, obj[unit]);
}
/* 
 1 1
 2 11
 b 1111
 a 111
 c 111111
*/
/*
 对于迭代时的顺序：
 1. 如果属性名的类型是Number，那么属性的迭代顺序是按照key从小到大排序。
 2. 如果属性名的类型是String，那么属性的迭代顺序是按照属性被创建的时间升序排序。
 3. 如果属性名的类型是Symbol，那么逻辑同String相同。
*/
```

> Object.keys

Object.keys()方法会返回一个由一个指定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用for...in循环遍历该对象时返回的顺序一致。类似的，Object.entries()方法返回一个指定对象自身可枚举属性的键值对数组，Object.values()方法返回一个指定对象自身的所有可枚举属性值的数组。

```js
var obj = {
    2: "11",
    1: "1",
    b: "1111",
    a: "111",
    [Symbol()]: "11111"
}
Object.prototype.c = "111111"; // 在原型链上增加一个可枚举属性
Object.defineProperty(obj, "d", {value:"1111111", enumerable:false}); // 在obj上增加一个不可枚举属性
console.log(obj); // {1: "1", 2: "11", b: "1111", a: "111", d: "1111111", Symbol(): "11111"}

var propertyArr = Object.keys(obj);
for( let unit of propertyArr ){
    console.log(unit, obj[unit]);
}
/* 
 1 1
 2 11
 b 1111
 a 111
*/
console.log(Object.entries(obj)); // [["1", "1"],["2", "11"],["b", "1111"],["a", "111"]]
console.log(Object.values(obj)); // ["1", "11", "1111", "111"]
```

> Object.getOwnPropertyNames

Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名，包括不可枚举属性但不包括Symbol值作为名称的属性组成的数组。

```js
var obj = {
    2: "11",
    1: "1",
    b: "1111",
    a: "111",
    [Symbol()]: "11111"
}
Object.prototype.c = "111111"; // 在原型链上增加一个可枚举属性
Object.defineProperty(obj, "d", {value:"1111111", enumerable:false}); // 在obj上增加一个不可枚举属性
console.log(obj); // {1: "1", 2: "11", b: "1111", a: "111", d: "1111111", Symbol(): "11111"}

var propertyArr = Object.getOwnPropertyNames(obj);
for( let unit of propertyArr ){
    console.log(unit, obj[unit]);
}
/* 
 1 1
 2 11
 b 1111
 a 111
 d 1111111
*/

```
> Object.getOwnPropertySymbols

Object.getOwnPropertySymbols()方法返回一个指定对象自身的所有Symbol属性的数组。

```js
var obj = {
    2: "11",
    1: "1",
    b: "1111",
    a: "111",
    [Symbol()]: "11111"
}
Object.prototype.c = "111111"; // 在原型链上增加一个可枚举属性
Object.defineProperty(obj, "d", {value:"1111111", enumerable:false}); // 在obj上增加一个不可枚举属性
console.log(obj); // {1: "1", 2: "11", b: "1111", a: "111", d: "1111111", Symbol(): "11111"}

var propertyArr = Object.getOwnPropertySymbols(obj);
for( let unit of propertyArr ){
    console.log(unit, obj[unit]);
}
/* 
 Symbol() "11111"
*/

```

> Reflect.ownKeys

```js
var obj = {
    2: "11",
    1: "1",
    b: "1111",
    a: "111",
    [Symbol()]: "11111"
}
Object.prototype.c = "111111"; // 在原型链上增加一个可枚举属性
Object.defineProperty(obj, "d", {value:"1111111", enumerable:false}); // 在obj上增加一个不可枚举属性
console.log(obj); // {1: "1", 2: "11", b: "1111", a: "111", d: "1111111", Symbol(): "11111"}

var propertyArr = Reflect.ownKeys(obj);
for( let unit of propertyArr ){
    console.log(unit, obj[unit]);
}
/* 
 1 1
 2 11
 b 1111
 a 111
 d 1111111
 Symbol() "11111"
*/

```
## for of可以遍历对象吗
for...of 语句创建一个循环来迭代可迭代的对象。在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach() ，并支持新的迭代协议。for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等。
## 瀑布流布局原理
https://www.cnblogs.com/lamian77/p/11596698.html

瀑布流 又称瀑布流式布局，是比较流行的一种网站页面布局方式。即多行等宽元素排列，后面的元素依次添加到其后，等宽不等高，根据图片原比例缩放直至宽度达到我们的要求，依次按照规则放入指定位置。

瀑布流布局在我们现在的前端页面中经常会用的到，它可以有效的降低页面的复杂度，节省很多的空间，对于整个页面不需要太多的操作，只需要下拉就可以浏览用户需要看到的数据；并且，在当前这个APP至上的时代，瀑布流可以提供很好的用户体验，通过结合下拉刷新，上拉加载进行数据的懒加载等操作，对于用户的体验感来说是接近于满分的！


> JS代码实现

实现思路：
1. 设定每一列图片的宽度和间距
2. 获取当前窗口的总宽度，从而根据图片宽度去判断分成几列
3. 获取所有图片元素，定义一个空数组来保存高度
4. 遍历所有容器，开始判断　　
5. 当页面加载完成，或页面宽度发生变化时，调用函数。
6. 如果当前处于第一行时： 直接设置图片位置【 即 top为间距的大小，left为（当前图片的宽度+间距） * 当前图片的值+间距大小 】，并保存当前元素高度。
7. 如果当前不处于第一行时：进行高度对比，通过遍历循环，拿到最小高度和相对应的索引，设置图片位置【 即 top为最小高度值+间距*2，left为 （当前图片的宽度+间距） * 索引 值+间距大小）】，并修改当前索引的高度为当前元素高度。
8. 当页面加载完成，或页面宽度发生变化时，调用函数。
 

代码实现
```js
<script type="text/javascript">
    // 定义瀑布流算法函数
    function fall() {
        const minGap = 20; // 最小间距，让每一列的最小空隙可以自定义，避免太过拥挤的情况发生。但是，会通过计算得到真实的间距。
        const itemWidth = 300; // 每一项的宽度，即当前每一个图片容器的宽度。保证每一列都是等宽不等高的。
        const scrollBarWidth = getScrollbarWidth();    // 获取滚动条的宽度
        const pageWidth = window.innerWidth - scrollBarWidth; // 获取当前页面的宽度 = window.innerWidth - 滚动条的宽度
        const column = Math.floor(pageWidth / (itemWidth + minGap)); // 实际列数=页面宽度/(图片宽度+最小间距)
        const gap = (pageWidth - itemWidth * column) / column/2; // 计算真实间距 = (页面宽度- 图片宽度*实际列数)/实际列数/2
        const items = document.querySelectorAll('img'); // 获取所有的外层元素
        const heightArr = []; // 定义一个空数组，保存最低高度。

        // 获取滚动条的宽度
        function getScrollbarWidth() {
            const oDiv = document.createElement('div');//创建一个div
            // 给div设置样式。随便定义宽高，只要能获取到滚动条就可以
            oDiv.style.cssText = `width: 50px;height: 50px;overflow: scroll;`
            document.body.appendChild(oDiv);//把div添加到body中
            const scrollbarWidth = oDiv.offsetWidth - oDiv.clientWidth;// 使最大宽度和可视宽度相减，获得到滚动条宽度。
            oDiv.remove();//移除创建的div
            return scrollbarWidth;//返回滚动条宽度
        }


        for (let i = 0; i < items.length; i++) {
            // 遍历所有的外层容器
            const height = items[i].offsetHeight;
            // 如果当前处在第一行
            if (i < column) {
                // 直接设置元素距离上部的位置和距离左边的距离。
                items[i].style.cssText = `top: ${gap}px;left: ${(itemWidth + gap) * i + gap}px`;
                // 保存当前元素的高度。
                heightArr.push(height);
            } else {
                // 不是第一行的话，就进行比对。
                let minHeight = heightArr[0]; // 先保存第一项的高度
                let minIndex = 0; // 保存第一项的索引值
                for (let j = 0; j < heightArr.length; j++) {
                    // 通过循环遍历比对，拿到最小值和最小值的索引。
                    if (minHeight > heightArr[j]) {
                        minHeight = heightArr[j];
                        minIndex = j;
                    }
                }
                // 通过最小值为当前元素设置top值，通过索引为当前元素设置left值。
                items[i].style.cssText = `top: ${minHeight + gap *2}px; left: ${(itemWidth + gap) * minIndex + gap}px`;
                // 并修改当前索引的高度为当前元素的高度
                heightArr[minIndex] = minHeight + gap + height;
            }
        }
    }
    // 页面加载完成调用一次。
    window.onload = fall;
    // 页面尺寸发生改变再次调用。
    window.onresize = fall;
</script>
```
### 总结
1. 设置图片宽度一致
2. 根据浏览器宽度以及每列宽度计算出列表个数，列表默认0
3. 当图片加载完成，所有图片依次放置在最小的列数下面
4. 父容器高度取列表数组的最大值


## 如何展示ui组件库示例文档
md-html

我们的需求很多明确：实现 md-loader，把 Markdown 转化成 Vue 组件。一个典型的单文件组件包括三块：template，script 与 style。对于 Element 的文档来说，demo 中 style 是不提取的。那么接下的重点就是如何拼凑出 template 与 script 的内容。

使用 markdown-it 可以很方便地把普通的 Markdown 文本转换成 HTML。但要如何处理 demo 自定义容器与其包含的代码片段呢？

● 对于 demo 自定义容器，无非是自定义它的渲染策略，比如把该容器转化一个 demo-block 组件。

● 对于容器包含的代码片段，要多做一些处理。它除了被转换成 HTML 片段，还要提取出来作为一个组件去渲染。

markdown-it 处理后的内容构成 template，容器内的代码片段被转化成组件，构成 script。整个转换过程如下图所示：

![avatar](./md-html.png)

下面开始讲解一下具体的实现。

https://juejin.cn/post/6994721311624970254#heading-1

## vue和react diff区别
https://juejin.cn/post/6878892606307172365#heading-1


传统Diff算法是循环递归每一个节点：

传统diff

如上图所示，从左侧a节点依次进行对比：a->d、a->e、a->b、a->a、a->c, 剩下的其他节点也是与右侧树每个节点进行对比。

将两颗树中所有的节点一一对比需要O(n²)的复杂度，在对比过程中发现旧节点在新的树中未找到，那么就需要把旧节点删除，删除一棵树的一个节点(找到一个合适的节点放到被删除的位置)的时间复杂度为O(n),同理添加新节点的复杂度也是O(n),合起来diff两个树的复杂度就是O(n³)

传统Diff算法复杂度太高， vue2.x加入了 Virtual Dom和react拥有相同的diff优化原则（将算法复杂度降为O(n)）。

两者流程思路上是类似的：

不同的组件产生不同的 DOM 结构。当type不相同时，对应DOM操作就是直接销毁老的DOM，创建新的DOM。

同一层次的一组子节点，可以通过唯一的 key 区分。

网络上看到一张图挺形象的图：

但是在源码实现上又完全不同：

React的Diff算法核心实现

react首先对新集合进行遍历，for( name in nextChildren)。

通过唯一key来判断老集合中是否存在相同的节点。如果没有的话创建

如果有的话，if (preChild === nextChild )

会将节点在新集合中的位置和在老集合中lastIndex进行比较

如果if (child._mountIndex < lastIndex) 进行移动操作，否则不进行移动操作。

如果遍历的过程中，发现在新集合中没有，但在老集合中有的节点，会进行删除操作

Vue的Diff算法核心实现

updateChildren是vue diff的核心, 过程可以概括为：

旧children和新children各有两个头尾的变量StartIdx和EndIdx，它们的2个变量相互比较，一共有4种比较方式。

如果4种比较都没匹配，如果设置了key，就会用key进行比较，在比较的过程中，变量会往中间靠，一旦StartIdx>EndIdx表明旧children和新children至少有一个已经遍历完了，就会结束比较。

可以用下图来描述在一次比较过程中四个步骤：

Vue2的核心Diff算法采用了双端比较（双指针法）的算法，同时从新旧children的两端开始进行比较，借助key值找到可复用的节点，再进行相关操作。相比React的Diff算法，同样情况下可以减少移动节点次数，减少不必要的性能损耗，更加的优雅。

————————————————
版权声明：本文为CSDN博主「傲娇的koala」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/xgangzai/article/details/115301290

