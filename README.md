# awsome-interview-front-end

- 欢迎大家将所有面试题都可以放进来，方便总结和反思。

- 欢迎大家都来看看，提供各个阶段的前端爱好者学习和面试的必备题库。

- 欢迎大家将自己面过的题目或看到比较经典的贡献出来，众人拾柴火焰高，相信有很多人都会受到影响和帮助。


## 面试题

### JavaScript

1. [为什么["1","2","3"].map(parseInt) 返回[1,NaN,NaN]](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript1.md)

2. [手写节流和防抖](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript2.md)

3. [介绍下 Set、Map、WeakSet 和 WeakMap 的区别？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript3.md)

4. [JavaScript包括哪些数据类型，请分别编写3种以上类型的判断函数如：isString()？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript4.md)

5. [编写一个JavaScript函数，实时显示当前时间，格式‘年-月-日 时：分：秒’?](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript5.md)

6. [如何显示/隐藏一个DOM元素？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript6.md)

7. [如何添加html元素的事件处理，有几种方法。](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript7.md)

8. [如何控制alert中的换行。](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript8.md)

9. [判断一个字符串中出现次数最多的字符，统计这个次数。](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript9.md)

10. [判断字符串是否是这样组成的，第一个必须是字母，后面可以是字母、数字、下划线，总长度为5-20](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript10.md)

11. [请编写一个JavaScript函数parseQueryString，他的用途是把URL参数解析为一个对象，如：var url=“http://witmax.cn/index.php?key0=0&key1=1&key2=2”；](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript11.md)

12. [在页面中有如下html：<div id="field"><input type="text" value="User Name"/></div><span class="red"></span>要求用闭包方式写一个JS从文本框中取出值并在标签span中显示出来。](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript12.md)

13. [在IE6.0下面是不支持position：fixed的，请写一个JS使用<div id="box"></div>固定在页面的右下角。](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript13.md)

14. [请实现，鼠标移到页面中的任意标签，显示出这个标签的基本矩形轮廓。](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript14.md)

15. [js的基础对象有哪些，window和document的常用的方法和属性列出来](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript15.md)

16. [ JavaScript中如何对一个对象进行深度clone](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript16.md)

17. [ js中如何定义class，如何扩展protope？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript17.md)

18. [ ajax是什么？ajax的交互模型？同步和异步的区别？如何解决跨域问题？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript18.md)

19. [ 请给出异步加载js方案，不少于两种？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript19.md)

20. [ 多浏览器检测通过什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript20.md)

21. [ window.onload()在哪个周期中？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript21.md)

22. [generator如何执行？如何让generator自动next（不通过next.next.next）？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript22.md)

23. [promise原理？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript23.md)

24. [What's the output?](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript24.md)
```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}
sayHi();

A: Lydia and undefined
B: Lydia and ReferenceError
C: ReferenceError and 21
D: undefined and ReferenceError
```


25. [What's the output?](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript25.md)
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
A: 0 1 2 and 0 1 2
B: 0 1 2 and 3 3 3
C: 3 3 3 and 0 1 2
```

26. [What's the output?](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript26.md)
```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

shape.diameter();
shape.perimeter();
A: 20 and 62.83185307179586
B: 20 and NaN
C: 20 and 63
D: NaN and 63
```

27. [Which one is true?](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript27.md)
```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
A: mouse.bird.size is not valid
B: mouse[bird.size] is not valid
C: mouse[bird["size"]] is not valid
D: All of them are valid
```

28. [What's the output?](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript28.md)
```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
A: Hello
B: Hey
C: undefined
D: ReferenceError
E: TypeError
```

29. [What's the output?](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript29.md)
```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
A: true false true
B: false false true
C: true false false
D: false true true
```

30. [What's the output?](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript30.md)
```javascript
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
freddie.colorChange("orange");
A: orange
B: purple
C: green
D: TypeError
```


### Vue.js

1. [v-for中key的作用是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue1.md)

2. [vue组件之间通信，你用到的有哪些？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue2.md)

3. [eventBus（事件总线）进行通信](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue3.md)

4. [父组件直接调子组件里的方法，子组件直接调父组件里的方法，怎么实现？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue4.md)

5. [hash模式和history模式的区别](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue5.md)

6. [history模式刷新就会404，是怎么造成的呢？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue6.md)

7. [比如说，你封装组件的时候，A组件，它的父级组件，对A组件绑定一个v-model，然后子组件的数据变化后，怎么去触发父组件的视图更新渲染。子组件怎么去实现这个v-model？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue7.md)

8. [工作中怎么解决代码复用的问题](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue8.md)

9. [在vue项目中，filter一般是怎么用的](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue9.md)

10. [你们是在组件里注册还是提取到一个公共的文件，然后全局注册这种？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue10.md)

11. [filter传的function带了两个形参，代表什么意思呢？它这个参数是从哪里传进来的？filter第二个形参在使用的时候从哪里传过来？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue11.md)

12. [有没有了解过vue的插件，想写插件的时候怎么去定义](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue12.md)

13. [说一下vuex](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue13.md)

14. [有一些数据，直接存在vue的实例原型链上和通过vuex存，有什么本质的区别？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue14.md)

15. [定义一个动态路由，怎么去获取路由的参数？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue15.md)

16. [获取vue-router两种形式的参数，query、params，这两种有什么区别](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue16.md)

17. [路由有哪几种导航钩子](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue17.md)

18. [在组件里设计导航钩子，组件内的导航钩子用到的有哪些？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue18.md)

19. [MVVM框架的原理](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue19.md)

20. [vue生命周期？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/vue/vue20.md)

### Node.js
1. [koa和express？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/node/node1.md)

### Webpack

1. [webpack和gulp的区别](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack1.md)

2. [webpack的loader和plugin有什么区别](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack2.md)

3. [做项目的时候，用webpack-dev-server起的热刷新和node自己写的http协议搭建服务，这两者有什么区别吗？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack3.md)

4. [用webpack进行哪些性能方面的优化](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack4.md)

5. [怎么用webpack进行按需加载](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack5.md)

6. [webpack配置：（几个重要参数）](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack6.md)

7. [style-loader和css-loader的区别](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack7.md)

### CSS
1. [遇到过的兼容性问题？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/css/css1.md)



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

10. [通过了这次录用，但是工作了一段时间却发现不能胜任这份工作，怎么办？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr10.md)

11. [你的意见和领导或者同事发生冲突和矛盾的时候 怎么办？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr11.md)

12. [跳槽的看法？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr12.md)

13. [现在求职最看重什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr13.md)

14. [你还有什么想要了解的吗？（先谈待遇再谈工作）](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr14.md)

15. [讲一讲自己工作中的优点和缺点？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr15.md)

16. [为何转行？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr16.md)

17. [介绍一下你最近做的一个项目](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/hr/hr17.md)


## 参考文献
[lydiahallie/javascript-questions](https://github.com/lydiahallie/javascript-questions)

[CyC2018/CS-Notes](https://github.com/CyC2018/CS-Notes)

[Snailclimb/JavaGuide](https://github.com/Snailclimb/JavaGuide)

[h5bp/Front-end-Developer-Interview-Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions)

[MaximAbramchuck/awesome-interview-questions](https://github.com/MaximAbramchuck/awesome-interview-questions)

[imhuay/Algorithm_Interview_Notes-Chinese](https://github.com/imhuay/Algorithm_Interview_Notes-Chinese)

[yangshun / front-end-interview-handbook](https://github.com/yangshun/front-end-interview-handbook)

[InterviewMap / CS-Interview-Knowledge-Map](https://github.com/InterviewMap/CS-Interview-Knowledge-Map)

[ElemeFE/node-interview](https://github.com/ElemeFE/node-interview)

[Advanced-Frontend / Daily-Interview-Question](https://github.com/qiufeihong2018?tab=stars&utf8=%E2%9C%93&q=&q=interview)

[30-seconds/30-seconds-of-interviews](https://github.com/30-seconds/30-seconds-of-interviews)

[helloqingfeng/Awsome-Front-End-learning-resource](https://github.com/helloqingfeng/Awsome-Front-End-learning-resource)

[khan4019/front-end-Interview-Questions](https://github.com/khan4019/front-end-Interview-Questions)

[webproblem/learning-article](https://github.com/webproblem/learning-article)

[]()

[]()
