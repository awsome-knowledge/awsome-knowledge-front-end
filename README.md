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

24. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript24.md)
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
---


25. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript25.md)
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
---

26. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript26.md)
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
---

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
---

28. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript28.md)
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
---

29. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript29.md)
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
---

30. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript30.md)
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
---

31. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript31.md)
```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
```
---


32. [What happens when we do this?](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript32.md)
```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
A: Nothing, this is totally fine!
B: SyntaxError. You cannot add properties to a function this way.
C: undefined
D: ReferenceError
```
---

33. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript33.md)
```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
A: TypeError
B: SyntaxError
C: Lydia Hallie
D: undefined undefined
```
---

34. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript34.md)
```javascript
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const lydia = new Person('Lydia', 'Hallie')
const sarah = Person('Sarah', 'Smith')

console.log(lydia)
console.log(sarah)
A: Person {firstName: "Lydia", lastName: "Hallie"} and undefined
B: Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}
C: Person {firstName: "Lydia", lastName: "Hallie"} and {}
D:Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError
```
---

35. [事件传播的三个阶段是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript35.md)
```javascript
A: Target > Capturing > Bubbling
B: Bubbling > Target > Capturing
C: Target > Bubbling > Capturing
D: Capturing > Target > Bubbling
```
---

36. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript36.md)
```javascript
function sum(a, b) {
  return a + b
}

sum(1, '2')
A: NaN
B: TypeError
C: "12"
D: 3
```
---

37. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript37.md)
```javascript
let number = 0
console.log(number++)
console.log(++number)
console.log(number)
A: 1 1 2
B: 1 2 2
C: 0 2 2
D: 0 1 2
```
---

38. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript38.md)
```javascript
function getPersonInfo(one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
}

const person = 'Lydia'
const age = 21

getPersonInfo`${person} is ${age} years old`
A: "Lydia" 21 ["", " is ", " years old"]
B: ["", " is ", " years old"] "Lydia" 21
C: "Lydia" ["", " is ", " years old"] 21
```
---

39. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript39.md)
```javascript
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult!')
  } else if (data == { age: 18 }) {
    console.log('You are still an adult.')
  } else {
    console.log(`Hmm.. You don't have an age I guess`)
  }
}

checkAge({ age: 18 })
A: You are an adult!
B: You are still an adult.
C: Hmm.. You don't have an age I guess
```
---

40. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript40.md)
```javascript
function getAge(...args) {
  console.log(typeof args)
}

getAge(21)
A: "number"
B: "array"
C: "object"
D: "NaN"
```
---

41. [所有对象都有原型？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript41.md)
```javascript
A: true
B: false
```
---

42. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript42.md)
```javascript
function getAge() {
  'use strict'
  age = 21
  console.log(age)
}

getAge()
A: 21
B: undefined
C: ReferenceError
D: TypeError
```
---

43. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript43.md)
```javascript
const sum = eval('10*10+5')
A: 105
B: "105"
C: TypeError
D: "10*10+5"
```
---

44. [cool_secret 可访问多长时间？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript44.md)
```javascript
sessionStorage.setItem('cool_secret', 123)
A: 永远，数据不会丢失。
B: 当用户关掉标签页时。
C: 当用户关掉整个浏览器，而不只是关掉标签页。
D: 当用户关闭电脑时。
```
---

45. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript45.md)
```javascript
var num = 8
var num = 10

console.log(num)
A: 8
B: 10
C: SyntaxError
D: ReferenceError
```
---

46. [输出是什么？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/javascript/javascript46.md)
```javascript
const obj = { 1: 'a', 2: 'b', 3: 'c' }
const set = new Set([1, 2, 3, 4, 5])

obj.hasOwnProperty('1')
obj.hasOwnProperty(1)
set.has('1')
set.has(1)
A: false true false true
B: false true true true
C: true true false true
D: true true true true
```
---

47. 输出是什么？

```javascript
const obj = { a: 'one', b: 'two', a: 'three' }
console.log(obj)
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>答案</b></summary>
<p>

#### 答案: C

如果你有两个名称相同的键，则键会被替换掉。它仍然位于第一个键出现的位置，但是值是最后出现那个键的值。

</p>
</details>

---

48. JavaScript 全局执行上下文为你做了两件事：全局对象和 this 关键字。

- A: true
- B: false
- C: it depends

<details><summary><b>答案</b></summary>
<p>

#### 答案: A

基本执行上下文是全局执行上下文：它是代码中随处可访问的内容。

</p>
</details>

---

49. 输出是什么？

```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) continue
  console.log(i)
}
```

- A: `1` `2`
- B: `1` `2` `3`
- C: `1` `2` `4`
- D: `1` `3` `4`

<details><summary><b>答案</b></summary>
<p>

#### 答案: C

如果某个条件返回 `true`，则 `continue` 语句跳过本次迭代。

</p>
</details>

---

50. 输出是什么？

```javascript
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!'
}

const name = 'Lydia'

name.giveLydiaPizza()
```

- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>答案</b></summary>
<p>

#### 答案: A

`String` 是内置的构造函数，我们可以向它添加属性。我只是在它的原型中添加了一个方法。基本类型字符串被自动转换为字符串对象，由字符串原型函数生成。因此，所有 string(string 对象)都可以访问该方法！

</p>
</details>

---

51. 输出是什么？

```javascript
const a = {}
const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 123
a[c] = 456

console.log(a[b])
```

- A: `123`
- B: `456`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>答案</b></summary>
<p>

#### 答案: B

对象的键被自动转换为字符串。我们试图将一个对象 `b` 设置为对象 `a` 的键，且相应的值为 `123`。

然而，当字符串化一个对象时，它会变成 `"[object Object]"`。因此这里说的是，`a["[object Object]"] = 123`。然后，我们再一次做了同样的事情，`c` 是另外一个对象，这里也有隐式字符串化，于是，`a["[object Object]"] = 456`。

然后，我们打印 `a[b]`，也就是 `a["[object Object]"]`。之前刚设置为 `456`，因此返回的是 `456`。

</p>
</details>

---

52. 输出是什么？

```javascript
const foo = () => console.log('First')
const bar = () => setTimeout(() => console.log('Second'))
const baz = () => console.log('Third')

bar()
foo()
baz()
```

- A: `First` `Second` `Third`
- B: `First` `Third` `Second`
- C: `Second` `First` `Third`
- D: `Second` `Third` `First`

<details><summary><b>答案</b></summary>
<p>

#### 答案: B

我们有一个 `setTimeout` 函数，并首先调用它。然而，它是最后打印日志的。

这是因为在浏览器中，我们不仅有运行时引擎，还有一个叫做 `WebAPI` 的东西。`WebAPI` 提供了 `setTimeout` 函数，也包含其他的，例如 DOM。

将 _callback_ 推送到 WebAPI 后，`setTimeout` 函数本身(但不是回调！)将从栈中弹出。

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

现在，`foo` 被调用，打印 `"First"`。

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` 从栈中弹出，`baz` 被调用. 打印 `"Third"`。

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

WebAPI 不能随时向栈内添加内容。相反，它将回调函数推到名为 _queue_ 的地方。

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

这就是事件循环开始工作的地方。一个**事件循环**查看栈和任务队列。如果栈是空的，它接受队列上的第一个元素并将其推入栈。

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` 被调用，打印 `"Second"`，然后它被栈弹出。

</p>
</details>

---

53. 当点击按钮时，event.target是什么？

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: Outer `div`
- B: Inner `div`
- C: `button`
- D: 一个包含所有嵌套元素的数组。

<details><summary><b>答案</b></summary>
<p>

#### 答案: C

导致事件的最深嵌套的元素是事件的 target。你可以通过 `event.stopPropagation` 来停止冒泡。

</p>
</details>

---

54. 当您单击该段落时，日志输出是什么？

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>
```

- A: `p` `div`
- B: `div` `p`
- C: `p`
- D: `div`

<details><summary><b>答案</b></summary>
<p>

#### 答案: A

如果我们点击 `p`，我们会看到两个日志：`p` 和 `div`。在事件传播期间，有三个阶段：捕获、目标和冒泡。默认情况下，事件处理程序在冒泡阶段执行（除非将 `useCapture` 设置为 `true`）。它从嵌套最深的元素向外传播。

</p>
</details>

---

55. 输出是什么？

```javascript
const person = { name: 'Lydia' }

function sayHi(age) {
  console.log(`${this.name} is ${age}`)
}

sayHi.call(person, 21)
sayHi.bind(person, 21)
```

- A: `undefined is 21` `Lydia is 21`
- B: `function` `function`
- C: `Lydia is 21` `Lydia is 21`
- D: `Lydia is 21` `function`

<details><summary><b>答案</b></summary>
<p>

#### 答案: D

使用这两种方法，我们都可以传递我们希望 `this` 关键字引用的对象。但是，`.call` 是**立即执行**的。

`.bind` 返回函数的**副本**，但带有绑定上下文！它不是立即执行的。

</p>
</details>

---

56. 输出是什么？

```javascript
function sayHi() {
  return (() => 0)()
}

typeof sayHi()
```

- A: `"object"`
- B: `"number"`
- C: `"function"`
- D: `"undefined"`

<details><summary><b>答案</b></summary>
<p>

#### 答案: B

`sayHi` 方法返回的是立即执行函数(IIFE)的返回值.此立即执行函数的返回值是 `0`， 类型是 `number`

参考：只有7种内置类型：`null`，`undefined`，`boolean`，`number`，`string`，`object` 和 `symbol`。 ``function`` 不是一种类型，函数是对象，它的类型是``object``。

</p>
</details>

---

57.  下面哪些值是 falsy?

```javascript
0
new Number(0)
;('')
;(' ')
new Boolean(false)
undefined
```

- A: `0`, `''`, `undefined`
- B: `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`
- C: `0`, `''`, `new Boolean(false)`, `undefined`
- D: All of them are falsy

<details><summary><b>答案</b></summary>
<p>

#### 答案: A

只有 6 种 [falsy](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy) 值:



if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")
if (document.all)

`Function` 构造函数, 比如 `new Number` 和 `new Boolean`，是 [truthy](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)。

</p>
</details>

---

58. 输出是什么？

```javascript
console.log(typeof typeof 1)
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>答案</b></summary>
<p>

#### 答案: B

`typeof 1` 返回 `"number"`。
`typeof "number"` 返回 `"string"`。

</p>
</details>

---

59. 输出是什么？

```javascript
const numbers = [1, 2, 3]
numbers[10] = 11
console.log(numbers)
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>答案</b></summary>
<p>

#### 答案: C

当你为数组设置超过数组长度的值的时候， JavaScript 会创建名为 "empty slots" 的东西。它们的值实际上是 `undefined`。你会看到以下场景：

`[1, 2, 3, 7 x empty, 11]`

这取决于你的运行环境（每个浏览器，以及 node 环境，都有可能不同）

</p>
</details>

---

60. 输出是什么？

```javascript
;(() => {
  let x, y
  try {
    throw new Error()
  } catch (x) {
    ;(x = 1), (y = 2)
    console.log(x)
  }
  console.log(x)
  console.log(y)
})()
```

- A: `1` `undefined` `2`
- B: `undefined` `undefined` `undefined`
- C: `1` `1` `2`
- D: `1` `undefined` `undefined`

<details><summary><b>答案</b></summary>
<p>

#### 答案: A

`catch` 代码块接收参数 `x`。当我们传递参数时，这与之前定义的变量 `x` 不同 。这个 `x` 是属于 `catch` 块级作用域的。

然后，我们将块级作用域中的变量赋值为 `1`，同时也设置了变量 `y` 的值。现在，我们打印块级作用域中的变量 `x`，值为 `1`。

`catch` 块之外的变量 `x` 的值仍为 `undefined`， `y` 的值为 `2`。当我们在 `catch` 块之外执行 `console.log(x)` 时，返回 `undefined`，`y` 返回 `2`。

</p>
</details>

---


61. 自己开发的框架或者库，如何使用原型？
<details><summary><b>答案</b></summary>

对于 JavaScript 原型的考察，应该算是基础知识的一部分。但是，基础知识考察的只是原型的理论，而高级知识考察的是原型的实际使用。我们使用的绝大部分第三方框架或者库，源码中都有原型的使用。如果你不能熟练使用原型，你能自己写框架或者库？—— 大家应该明白我的意思了吧。

所以，这里要考察的是原型如何在实际的框架和库中去使用。对于这个问题，如果你没有亲自写过框架和库，且对原型不是很熟悉，那么我建议你看一下 jQuery zepto 中是如何使用原型的。这也算是站在巨人的肩膀上吧，毕竟都是如此优秀的库。

jQuery 的资料自己上网去找找吧，给大家推荐一个免费的讲解 zepto 原型的视频资料 [《zepto设计和源码分析》](https://www.imooc.com/learn/745)。
</details>

---

62.  目前 JS 对于异步的解决方案有哪些？
<details><summary><b>答案</b></summary>
异步是 JS 永恒的话题，自动 web 2.0 有了 Ajax 开始，到现在 nodejs 盛行，人们就一直没有停止对异步的讨论。大家有没有考虑过为何异步这么受欢迎？—— 因为异步和业务场景的结合实在太紧密了。在复杂的业务场景中，你要能一眼就识别出来哪些是异步，而且要找到最佳的解决方案，否则这里就是一个坑。

这里没有问“JS 中有哪些场景是异步”，因为这个问题如果只回答“图片加载、ajax”等没有什么意义，异步是要结合实际业务说的。因此这里提问异步的解决方案，我列一下，你来看看自己是否都全部了解。

- deferred （jQuery 或者 zepto 中）—— 注意，这块很多同学不知道，可以多去查查相关资料，因为 jQuery 和 zepto 目前还有很多、很多、很多项目在用！！！
- Promise（ES6 或者第三方库，如 q.js bluebird.js），不仅要知道怎么用，还要熟悉 Promise 的标准
- Generator（从 koa 升级 2.x 之后已经不再常用）
- async/await （ES7 草案）

</details>

---

63.   常用的 ES6 的语法有哪些？

<details><summary><b>答案</b></summary>
不了解 ES6 的同学可以先去看看 《ECMAScript 6 入门》 教程。

虽然目前浏览器对 ES6 兼容性不好，但是 ES6 已经在开发环境很普及了，因此要考察 ES6 的语法。那这个也算是高级知识吗？—— 算！因为 ES6 刚刚普及没多久，总有一些人躺在舒适区、不思进取、不学习新内容，通过 ES6 的考察把他们给刷掉。

看 ES6 的书籍或者博客，内容还是挺多的，但是日常实际使用的功能并没有那么多。这里我列举几个常用的，你对照着去考察自己是否掌握全面

- Module
- Class
- Promise
- 箭头函数
- 搭建 ES6 编译环境
附：最后一项“编辑环境”大家一般都使用 webpack ，但是你知道 rollup 吗？ React vue 都在使用 rollup ，你如果不知道的话，面试就要丢分了。

</details>

---

64. vue 如何解析模板？
<details><summary><b>答案</b></summary>
不了解 vue 的同学可以先去 vue 官网 看一下相关文档。

作为前端从业者你应该很清楚，现在不知道 vue React 别说是跳槽，校招都不一定能通过，因此了解、使用过 vue React 这已经是基础知识的行列了。这块的高级知识应该升级到对 vue React 的实现是否了解（不用精通各个细节，了解过程即可）？—— 例如本题目，是否了解 vue 如何解析模板？

你可能还会疑问：干嘛要问框架的实现，工作中也用不到啊？我会使用框架不就完了吗？ —— 我可以通过一个大家都亲身经历的例子来说服你。

- 例如，大学招生时都想要智商高、学习能力好的学生，怎么办？—— 高考。除了高考，还有其他更公平的方式吗？
- 同理，企业想要招聘编程能力强、总结能力好、热爱且持续学习的员工，怎么办？—— 考察框架原理是一个重要而且简单有效的途径。除此之外，大家想想还有什么其他简单高效的手段？
先摆正思想，然后再看这个题目：是否了解 vue 如何解析模板？简单来说，模板解析分位三步

- 模板就是一段字符串，非结构化的数据，没法分析。因此，第一步是将非结构化的模板字符串，转变成结构化的 JS 对象，抽象语法树，即 AST 。其实就是一个 JS 对象，这样就结构化了。
- 第二步，将 AST 转换成一个 render 函数，步骤是先转换为一段函数体的字符串，然后再用new Function(...)生成函数。
- 第三部，渲染时执行 render 函数，返回虚拟 DOM 对象，然后执行虚拟 DOM 的patch方法，渲染成真正的 html 。
以上过程的细节是非常复杂的，要全部写出来都够出半本书了，因此你也没必要啥细节都知道。面试官如果问到你这个问题，只回答这三步过程即可，不用说的太细，否则太啰嗦太耗费时间。

</details>

---

65. React 的 setState 为何是异步渲染？
<details><summary><b>答案</b></summary>
不了解 React 的同学可以先去 React 官网 看一下文档。虽然目前 vue 比较火，但是 React 也绝对不能放过，国内来看，两者还是各有很多用户群体。

这个问题其实很简单，只是很多同学没有考虑到。答案就是：为了防止一次性执行多次setState而带来的渲染性能问题。即，你如果连续不断执行 100 次setState的话，那么 React 是否有必要渲染 100 次？—— 肯定没必要。第一，浏览器会卡死；第二，用户只需要看到最后的结果即可，不用关心前 99 次的过程。

至于为何好多人考虑不到，我也常常思考这种原因。在我看来，如果你长时间不去主动的看博客、看编程方面的新闻、关注新框架，你就会出现这种思想滞后的问题，即“跟不上节奏”。因此，作为相关从业者，大家还是应该多看，然后多想，多问几个为什么。

</details>

---

66. hybrid 和 h5 有何区别？

<details><summary><b>答案</b></summary>
你每天用微信、支付宝、头条等各种 app 看过的信息，有多少是用前端代码（JS CSS HTML）写出来的界面？你知道吗？—— 至少会占到 50% 以上，是否没想象到？

前端代码（JS CSS HTML）参与到 app 中进行混合开发，是目前 app 开发很常见的方式，其中 hybrid 就是应用最广泛的一种解决方案。很多同学没做过 hybrid 开发，但是没做过不是你不会用且不去学习的理由！

本题目是面试官考察 hybrid 经常问的一道题，最主要的区别在于：

- hybrid 是通过file协议加载的本地文件，h5 是通过http协议加载的网络文件，前者速度快。
- hybrid 是通过为不同版本打包进行更新，而 h5 没有版本的概念，每次都获取服务端的最新版。
- hybrid 更加依赖于客户端的能力，因此会更多的和客户端通讯，而 h5 基本用不到和客户端通讯。
说出这几个区别，该问题基本 OK 。其中的重点是 hybrid 包版本更新的流程，以及 JS 和客户端通讯的原理。这两者详细讲来的话，内容都很多，因此这里不详细展开了。

</details>

---

67. JavaScript 中的一切都是？

A: 基本类型与对象
B: 函数与对象
C: 只有对象
D: 数字与对象
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>

JavaScript 只有基本类型和对象。

基本类型包括 boolean, null, undefined, bigint, number, string, symbol。

</details>

---

68. 输出是什么？
``` js
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur)
  },
  [1, 2]
)
```
A: [0, 1, 2, 3, 1, 2]
B: [6, 1, 2]
C: [1, 2, 0, 1, 2, 3]
D: [1, 2, 6]
<details><summary><b>答案</b></summary>
<p>

#### 答案: C
</p>

[1, 2]是初始值。初始值将会作为首次调用时第一个参数 acc 的值。在第一次执行时， acc 的值是 [1, 2]， cur 的值是 [0, 1]。合并它们，结果为 [1, 2, 0, 1]。 第二次执行， acc 的值是 [1, 2, 0, 1]， cur 的值是 [2, 3]。合并它们，最终结果为 [1, 2, 0, 1, 2, 3]

</details>

---

69. 输出是什么？
```
!!null
!!''
!!1
```
A: false true false
B: false false true
C: false true true
D: true true false

<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>

null 是 falsy。 !null 的值是 true。 !true 的值是 false。

"" 是 falsy。 !"" 的值是 true。 !true 的值是 false。

1 是 truthy。 !1 的值是 false。 !false 的值是 true。

</details>

---

70. setInterval 方法的返回值是什么？
```js
setInterval(() => console.log('Hi'), 1000)
```
A: 一个唯一的id
B: 该方法指定的毫秒数
C: 传递的函数
D: undefined


<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>

setInterval 返回一个唯一的 id。此 id 可被用于 clearInterval 函数来取消定时。

</details>


---

71. 输出是什么？
```js
[...'Lydia']
```
A: ["L", "y", "d", "i", "a"]
B: ["Lydia"]
C: [[], "Lydia"]
D: [["L", "y", "d", "i", "a"]]


<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>

string 类型是可迭代的。扩展运算符将迭代的每个字符映射成一个元素。

</details>

---

72. 输出是什么？
```js
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
```
A: [0, 10], [10, 20]
B: 20, 20
C: 10, 20
D: 0, 10 and 10, 20


<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>

一般的函数在执行之后是不能中途停下的。但是，生成器函数却可以中途“停下”，之后可以再从停下的地方继续。当生成器遇到yield关键字的时候，会生成yield后面的值。注意，生成器在这种情况下不 返回 (return )值，而是 生成 (yield)值。

首先，我们用10作为参数i来初始化生成器函数。然后使用next()方法一步步执行生成器。第一次执行生成器的时候，i的值为10，遇到第一个yield关键字，它要生成i的值。此时，生成器“暂停”，生成了10。

然后，我们再执行next()方法。生成器会从刚才暂停的地方继续，这个时候i还是10。于是我们走到了第二个yield关键字处，这时候需要生成的值是i*2，i为10，那么此时生成的值便是20。所以这道题的最终结果是10,20。

</details>

---

73. 返回值是什么?
```js
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
```
A: "one"
B: "two"
C: "two" "one"
D: "one" "two"


<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>

当我们向Promise.race方法中传入多个Promise时，会进行 优先 解析。在这个例子中，我们用setTimeout给firstPromise和secondPromise分别设定了500ms和100ms的定时器。这意味着secondPromise会首先解析出字符串two。那么此时res参数即为two，是为输出结果。

</details>

[[↑] 回到顶部](#awsome-interview-front-end)

---

74. 输出是什么?
```js
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
```
A: null
B: [null]
C: [{}]
D: [{ name: "Lydia" }]


<details><summary><b>答案</b></summary>
<p>

#### 答案: D

</p>
首先我们声明了一个拥有name属性的对象 person。

![avatar](./public/74-1.png)

然后我们又声明了一个变量members. 将首个元素赋值为变量person。 当设置两个对象彼此相等时，它们会通过 引用 进行交互。但是当你将引用从一个变量分配至另一个变量时，其实只是执行了一个 复制 操作。（注意一点，他们的引用 并不相同!）

![avatar](./public/74-2.png)

接下来我们让person等于null。

![avatar](./public/74-3.png)

我们没有修改数组第一个元素的值，而只是修改了变量person的值,因为元素（复制而来）的引用与person不同。members的第一个元素仍然保持着对原始对象的引用。当我们输出members数组时，第一个元素会将引用的对象打印出来。


</details>


---

75. 输出是什么?
```js
const person = {
  name: "Lydia",
  age: 21
};

for (const item in person) {
  console.log(item);
}
```
A: { name: "Lydia" }, { age: 21 }
B: "name", "age"
C: "Lydia", 21
D: ["name", "Lydia"], ["age", 21]


<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>

在for-in循环中,我们可以通过对象的key来进行迭代,也就是这里的name和age。在底层，对象的key都是字符串（如果他们不是Symbol的话）。在每次循环中，我们将item设定为当前遍历到的key.所以一开始，item是name，之后 item输出的则是age。

</details>


---

76. 输出是什么?
```js
console.log(3 + 4 + "5");
```
A: "345"
B: "75"
C: 12
D: "12"


<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>
当所有运算符的 优先级 相同时，计算表达式需要确定运算符的结合顺序，即从右到左还是从左往右。在这个例子中，我们只有一类运算符+，对于加法来说，结合顺序就死从左到右。

3 + 4首先计算，得到数字7.

由于类型的强制转换，7 + '5'的结果是"75". JavaScript将7转换成了字符串，可以参考问题15.我们可以用+号把两个字符串连接起来。 "7" + "5" 就得到了"75".
</details>


---

77. 输出是什么?
```js
const num = parseInt("7*6", 10);
```
A: 42
B: "42"
C: 7
D: NaN

<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>
只返回了字符串中第一个字母. 设定了 进制 后 (也就是第二个参数，指定需要解析的数字是什么进制: 十进制、十六机制、八进制、二进制等等……),parseInt 检查字符串中的字符是否合法. 一旦遇到一个在指定进制中不合法的字符后，立即停止解析并且忽略后面所有的字符。

*就是不合法的数字字符。所以只解析到"7"，并将其解析为十进制的7. num的值即为7.
</details>


---

78. 输出是什么?
```js
[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});
```
A: []
B: [null, null, null]
C: [undefined, undefined, undefined]
D: [ 3 x empty ]

<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>
对数组进行映射的时候,num就是当前循环到的元素. 在这个例子中，所有的映射都是number类型，所以if中的判断typeof num === "number"结果都是true.map函数创建了新数组并且将函数的返回值插入数组。

但是，没有任何值返回。当函数没有返回任何值时，即默认返回undefined.对数组中的每一个元素来说，函数块都得到了这个返回值，所以结果中每一个元素都是undefined.
</details>

---

79. 输出的是什么?
```js

function getInfo(member, year) {
  member.name = "Lydia";
  year = "1998";
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);

A: { name: "Lydia" }, "1997"
B: { name: "Sarah" }, "1998"
C: { name: "Lydia" }, "1998"
D: { name: "Sarah" }, "1997"
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>

普通参数都是 值 传递的，而对象则不同，是 引用 传递。所以说，birthYear是值传递，因为他是个字符串而不是对象。当我们对参数进行值传递时，会创建一份该值的 复制 。（可以参考问题46）

变量birthYear有一个对"1997"的引用，而传入的参数也有一个对"1997"的引用，但二者的引用并不相同。当我们通过给 year赋值"1998"来更新year的值的时候我们只是更新了year（的引用）。此时birthYear仍然是"1997".

而person是个对象。参数member引用与之 相同的 对象。当我们修改member所引用对象的属性时,person的相应属性也被修改了,因为他们引用了相同的对象. person的 name属性也变成了 "Lydia".
</details>

---


80. 输出的是什么?
```js
function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error!", e);
  }
}

sayHi();
A: "It worked! Hello world!"
B: "Oh no an error: undefined
C: SyntaxError: can only throw Error objects
D: "Oh no an error: Hello world!
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: D

</p>
通过throw语句，我么可以创建自定义错误。 而通过它，我们可以抛出异常。异常可以是一个字符串, 一个 数字, 一个 布尔类型 或者是一个 对象。在本例中，我们的异常是字符串'Hello world'.

通过 catch语句，我们可以设定当try语句块中抛出异常后应该做什么处理。在本例中抛出的异常是字符串'Hello world'. e就是这个字符串，因此被输出。最终结果就是'Oh an error: Hello world'.
</details>

---




81. 输出的是什么?
```js
function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make);
A: "Lamborghini"
B: "Maserati"
C: ReferenceError
D: TypeError
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>
返回属性的时候，属性的值等于 返回的 值，而不是构造函数中设定的值。我们返回了字符串 "Maserati"，所以 myCar.make等于"Maserati".

</details>

---



82. 输出的是什么?
```js
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
A: "undefined", "number"
B: "number", "number"
C: "object", "number"
D: "number", "undefined"
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>
let x = y = 10; 是下面这个表达式的缩写:

y = 10;
let x = y;
我们设定y等于10时,我们实际上增加了一个属性y给全局对象(浏览器里的window, Nodejs里的global)。在浏览器中， window.y等于10.

然后我们声明了变量x等于y,也是10.但变量是使用 let声明的，它只作用于 块级作用域, 仅在声明它的块中有效；就是案例中的立即调用表达式(IIFE)。使用typeof操作符时, 操作值 x没有被定义：因为我们在x声明块的外部，无法调用它。这就意味着x未定义。未分配或是未声明的变量类型为"undefined". console.log(typeof x)返回"undefined".

而我们创建了全局变量y，并且设定y等于10.这个值在我们的代码各处都访问的到。 y已经被定义了，而且有一个"number"类型的值。 console.log(typeof y)返回"number".
</details>

---


83. 输出的是什么?
```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

pet.bark();
A: "Woof I am Mara", TypeError
B: "Woof I am Mara","Woof I am Mara"
C: "Woof I am Mara", undefined
D: TypeError, TypeError
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>
我们可以用delete关键字删除对象的属性，对原型也是适用的。删除了原型的属性后，该属性在原型链上就不可用了。在本例中，函数bark在执行了delete Dog.prototype.bark后不可用, 然而后面的代码还在调用它。

当我们尝试调用一个不存在的函数时TypeError异常会被抛出。在本例中就是 TypeError: pet.bark is not a function，因为pet.bark是undefined.
</details>

---


84. 输出的是什么?
```js
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
A: [1, 1, 2, 3, 4]
B: [1, 2, 3, 4]
C: {1, 1, 2, 3, 4}
D: {1, 2, 3, 4}
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: D

</p>
Set对象手机 独一无二 的值：也就是说同一个值在其中仅出现一次。

我们传入了数组[1, 1, 2, 3, 4]，他有一个重复值1.以为一个集合里不能有两个重复的值，其中一个就被移除了。所以结果是 {1, 2, 3, 4}.
</details>

---


85. 输出的是什么?
```js
// counter.js
let counter = 10;
export default counter;
// index.js
import myCounter from "./counter";

myCounter += 1;

console.log(myCounter);
A: 10
B: 11
C: Error
D: NaN
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>
引入的模块是 只读 的: 你不能修改引入的模块。只有导出他们的模块才能修改其值。

当我们给myCounter增加一个值的时候会抛出一个异常： myCounter是只读的，不能被修改。
</details>

---


86. 输出的是什么?
```js
const name = "Lydia";
age = 21;

console.log(delete name);
console.log(delete age);
A: false, true
B: "Lydia", 21
C: true, true
D: undefined, undefined
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>
delete操作符返回一个布尔值： true指删除成功，否则返回false. 但是通过 var, const 或 let 关键字声明的变量无法用 delete 操作符来删除。

name变量由const关键字声明，所以删除不成功:返回 false. 而我们设定age等于21时,我们实际上添加了一个名为age的属性给全局对象。对象中的属性是可以删除的，全局对象也是如此，所以delete age返回true.
</details>

---


87. 输出的是什么?
```js
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
A: [[1, 2, 3, 4, 5]]
B: [1, 2, 3, 4, 5]
C: 1
D: [1]
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>
我们可以通过解构赋值来解析来自对象的数组或属性的值，比如说：

[a, b] = [1, 2];

a的值现在是1，b的值现在是2.而在题目中，我们是这么做的:

[y] = [1, 2, 3, 4, 5];

也就是说，y等于数组的第一个值就是数字1.我们输出y， 返回1.


</details>

---


88. 输出的是什么?
```js
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
A: { admin: true, user: { name: "Lydia", age: 21 } }
B: { admin: true, name: "Lydia", age: 21 }
C: { admin: true, user: ["Lydia", 21] }
D: { admin: true }
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>
扩展运算符...为对象的组合提供了可能。你可以复制对象中的键值对，然后把它们加到另一个对象里去。在本例中，我们复制了user对象键值对，然后把它们加入到admin对象中。admin对象就拥有了这些键值对，所以结果为{ admin: true, name: "Lydia", age: 21 }.
</details>

---



89. 输出的是什么?
```js
const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));
A: { name: "Lydia", age: 21 }, ["name", "age"]
B: { name: "Lydia", age: 21 }, ["name"]
C: { name: "Lydia"}, ["name", "age"]
D: { name: "Lydia"}, ["age"]
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>
通过defineProperty方法，我们可以给对象添加一个新属性，或者修改已经存在的属性。而我们使用defineProperty方法给对象添加了一个属性之后，属性默认为 不可枚举(not enumerable). Object.keys方法仅返回对象中 可枚举(enumerable) 的属性，因此只剩下了"name".

用defineProperty方法添加的属性默认不可变。你可以通过writable, configurable 和 enumerable属性来改变这一行为。这样的话， 相比于自己添加的属性，defineProperty方法添加的属性有了更多的控制权。
</details>

---


90. 输出的是什么?
```js
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
A: "{"level":19, "health":90}"
B: "{"username": "lydiahallie"}"
C: "["level", "health"]"
D: "{"username": "lydiahallie", "level":19, "health":90}"
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>
JSON.stringify的第二个参数是 替代者(replacer). 替代者(replacer)可以是个函数或数组，用以控制哪些值如何被转换为字符串。

如果替代者(replacer)是个 数组 ，那么就只有包含在数组中的属性将会被转化为字符串。在本例中，只有名为"level" 和 "health" 的属性被包括进来， "username"则被排除在外。 data 就等于 "{"level":19, "health":90}".

而如果替代者(replacer)是个 函数，这个函数将被对象的每个属性都调用一遍。 函数返回的值会成为这个属性的值，最终体现在转化后的JSON字符串中（译者注：Chrome下，经过实验，如果所有属性均返回同一个值的时候有异常，会直接将返回值作为结果输出而不会输出JSON字符串），而如果返回值为undefined，则该属性会被排除在外。
</details>

---

91. 输出的是什么?
```js
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
A: 10, 10
B: 10, 11
C: 11, 11
D: 11, 12
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>
一元操作符 ++ 先返回 操作值, 再累加 操作值。num1的值是10, 因为increaseNumber函数首先返回num的值，也就是10，随后再进行 num的累加。

num2是10因为我们将 num1传入increasePassedNumber. number等于10（num1的值。同样道理，++ 先返回 操作值, 再累加 操作值。） number是10，所以num2也是10.
</details>

---

92. 输出的是什么?
```js
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log(x.number *= 2);
};

multiply();
multiply();
multiply(value);
multiply(value);
A: 20, 40, 80, 160
B: 20, 40, 20, 40
C: 20, 20, 20, 40
D: NaN, NaN, 20, 40
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>
在ES6中，我们可以使用默认值初始化参数。如果没有给函数传参，或者传的参值为 "undefined" ，那么参数的值将是默认值。上述例子中，我们将 value 对象进行了解构并传到一个新对象中，因此 x 的默认值为 {number：10} 。

默认参数在调用时才会进行计算，每次调用函数时，都会创建一个新的对象。我们前两次调用 multiply 函数且不传递值，那么每一次 x 的默认值都为 {number：10} ，因此打印出该数字的乘积值为20。

第三次调用 multiply 时，我们传递了一个参数，即对象value。 *=运算符实际上是x.number = x.number * 2的简写，我们修改了x.number的值，并打印出值20。

第四次，我们再次传递value对象。 x.number之前被修改为20，所以x.number * = 2打印为40。


</details>

---

93. 输出的是什么?
```js
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
A: 1 2 and 3 3 and 6 4
B: 1 2 and 2 3 and 3 4
C: 1 undefined and 2 undefined and 3 undefined and 4 undefined
D: 1 2 and undefined 3 and undefined 4
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: D

</p>
reducer 函数接收4个参数:

Accumulator (acc) (累计器)
Current Value (cur) (当前值)
Current Index (idx) (当前索引)
Source Array (src) (源数组)
reducer 函数的返回值将会分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。

reducer 函数还有一个可选参数initialValue, 该参数将作为第一次调用回调函数时的第一个参数的值。如果没有提供initialValue，则将使用数组中的第一个元素。

在上述例子，reduce方法接收的第一个参数(Accumulator)是x, 第二个参数(Current Value)是y。

在第一次调用时，累加器x为1，当前值“y”为2，打印出累加器和当前值：1和2。

例子中我们的回调函数没有返回任何值，只是打印累加器的值和当前值。如果函数没有返回值，则默认返回undefined。 在下一次调用时，累加器为undefined，当前值为“3”, 因此undefined和3被打印出。

在第四次调用时，回调函数依然没有返回值。 累加器再次为 undefined ，当前值为“4”。 undefined和4被打印出。
</details>

---

94. 使用哪个构造函数可以成功继承Dog类?
```js
class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  // 1 
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4 
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

};
A: 1
B: 2
C: 3
D: 4

```
<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>
在子类中，在调用super之前不能访问到this关键字。 如果这样做，它将抛出一个ReferenceError：1和4将引发一个引用错误。

使用super关键字，需要用给定的参数来调用父类的构造函数。 父类的构造函数接收name参数，因此我们需要将name传递给super。

Labrador类接收两个参数，name参数是由于它继承了Dog，size作为Labrador类的额外属性，它们都需要传递给Labrador的构造函数，因此使用构造函数2正确完成。
</details>

---


95. 输出什么?
```js
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;
A: running index.js, running sum.js, 3
B: running sum.js, running index.js, 3
C: running sum.js, 3, running index.js
D: running index.js, undefined, running sum.js
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>
import命令是编译阶段执行的，在代码运行之前。因此这意味着被导入的模块会先运行，而导入模块的文件会后执行。

这是CommonJS中require（）和import之间的区别。使用require()，您可以在运行代码时根据需要加载依赖项。 如果我们使用require而不是import，running index.js，running sum.js，3会被依次打印。
</details>

---



96. 输出什么?
```js
console.log(Number(2) === Number(2))
console.log(Boolean(false) === Boolean(false))
console.log(Symbol('foo') === Symbol('foo'))
A: true, true, false
B: false, true, false
C: true, false, true
D: true, true, true
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>
每个Symbol都是完全唯一的。传递给Symbol的参数只是给Symbol的一个描述。 Symbol的值不依赖于传递的参数。 当我们测试相等时，我们创建了两个全新的符号：第一个Symbol（'foo'），第二个Symbol（'foo'）, 这两个值是唯一的，彼此不相等，因此返回false。
</details>

---

97. 输出什么?
```js
const name = "Lydia Hallie"
console.log(name.padStart(13))
console.log(name.padStart(2))
A: "Lydia Hallie", "Lydia Hallie"
B: " Lydia Hallie", " Lydia Hallie" ("[13x whitespace]Lydia Hallie", "[2x whitespace]Lydia Hallie")
C: " Lydia Hallie", "Lydia Hallie" ("[1x whitespace]Lydia Hallie", "Lydia Hallie")
D: "Lydia Hallie", "Lyd"

```
<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>
使用padStart方法，我们可以在字符串的开头添加填充。传递给此方法的参数是字符串的总长度（包含填充）。字符串Lydia Hallie的长度为12, 因此name.padStart（13）在字符串的开头只会插入1（13 - 12 = 1）个空格。

如果传递给padStart方法的参数小于字符串的长度，则不会添加填充。
</details>

---


98. 输出什么?
```js
console.log("🥑" + "💻");
A: "🥑💻"
B: 257548
C: A string containing their code points
D: Error

```
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>
使用+运算符，您可以连接字符串。 上述情况，我们将字符串“🥑”与字符串”💻“连接起来，产生”🥑💻“。
</details>

---



99. 如何能打印出console.log语句后注释掉的值？

```js
function* startGame() {
  const answer = yield "Do you love JavaScript?";
  if (answer !== "Yes") {
    return "Oh wow... Guess we're gone here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
A: game.next("Yes").value and game.next().value
B: game.next.value("Yes") and game.next.value()
C: game.next().value and game.next("Yes").value
D: game.next.value() and game.next.value("Yes")

```
<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>
generator函数在遇到yield关键字时会“暂停”其执行。 首先，我们需要让函数产生字符串Do you love JavaScript?，这可以通过调用game.next().value来完成。上述函数的第一行就有一个yield关键字，那么运行立即停止了，yield表达式本身没有返回值，或者说总是返回undefined, 这意味着此时变量 answer 为undefined

next方法可以带一个参数，该参数会被当作上一个 yield 表达式的返回值。当我们调用game.next("Yes").value时，先前的 yield 的返回值将被替换为传递给next()函数的参数"Yes"。此时变量 answer 被赋值为 "Yes"，if语句返回false，所以JavaScript loves you back ❤️被打印。
</details>

---

100. 输出什么?

```js
console.log(String.raw`Hello\nworld`);
A: Hello world!
B: Hello 
     world
C: Hello\nworld
D: Hello\n 
     world

```
<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>

String.raw函数是用来获取一个模板字符串的原始字符串的，它返回一个字符串，其中忽略了转义符（\n，\v，\t等）。但反斜杠可能造成问题，因为你可能会遇到下面这种类似情况：
```js
const path = `C:\Documents\Projects\table.html`
String.raw`${path}`

```
这将导致：
```js

"C:DocumentsProjects able.html"
```
直接使用String.raw
```js
String.raw`C:\Documents\Projects\table.html`
```
它会忽略转义字符并打印：C:\Documents\Projects\table.html

上述情况，字符串是Hello\nworld被打印出。
</details>

---


101. 输出什么?

```js
async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data);
A: "I made it!"
B: Promise {<resolved>: "I made it!"}
C: Promise {<pending>}
D: undefined

```
<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>
异步函数始终返回一个promise。await仍然需要等待promise的解决：当我们调用getData()并将其赋值给data，此时data为getData方法返回的一个挂起的promise，该promise并没有解决。

如果我们想要访问已解决的值"I made it!"，可以在data上使用.then()方法：

data.then(res => console.log(res))

这样将打印 "I made it!"
</details>

---



102. 输出什么?

```js
function addToList(item, list) {
  return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);
A: ['apple', 'banana']
B: 2
C: true
D: undefined

```
<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>
push()方法返回新数组的长度。一开始，数组包含一个元素（字符串"banana"），长度为1。 在数组中添加字符串"apple"后，长度变为2，并将从addToList函数返回。

push方法修改原始数组，如果你想从函数返回数组而不是数组长度，那么应该在push item之后返回list。
</details>

---




103. 输出什么?

```js
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;
console.log(shape)
A: { x: 100, y: 20 }
B: { x: 10, y: 20 }
C: { x: 100 }
D: ReferenceError
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>
Object.freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。

Object.freeze使得无法添加、删除或修改对象的属性（除非属性的值是另一个对象）。

当我们创建变量shape并将其设置为等于冻结对象box时，shape指向的也是冻结对象。你可以使用Object.isFrozen检查一个对象是否被冻结，上述情况，Object.isFrozen（shape）将返回true。

由于shape被冻结，并且x的值不是对象，所以我们不能修改属性x。 x仍然等于10，{x：10，y：20}被打印。

注意，上述例子我们对属性x进行修改，可能会导致抛出TypeError异常（最常见但不仅限于严格模式下时）。
</details>

---


104. 输出什么?

```js
const { name: myName } = { name: "Lydia" };

console.log(name);
A: "Lydia"
B: "myName"
C: undefined
D: ReferenceError
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>
当我们从右侧的对象解构属性name时，我们将其值Lydia分配给名为myName的变量。

使用{name：myName}，我们是在告诉JavaScript我们要创建一个名为myName的新变量，并且其值是右侧对象的name属性的值。

当我们尝试打印name，一个未定义的变量时，就会引发`undefined`。
</details>

---



105. 以下是个纯函数么?

```js
function sum(a, b) {
  return a + b;
}
A: Yes
B: No
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>
纯函数一种若输入参数相同，则永远会得到相同输出的函数。

sum函数总是返回相同的结果。 如果我们传递1和2，它将总是返回3而没有副作用。 如果我们传递5和10，它将总是返回15，依此类推，这是纯函数的定义。
</details>

---


106. 输出什么?


```js
const add = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));
A: Calculated! 20 Calculated! 20 Calculated! 20
B: Calculated! 20 From cache! 20 Calculated! 20
C: Calculated! 20 From cache! 20 From cache! 20
D: Calculated! 20 From cache! 20 Error

```
<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>
add函数是一个记忆函数。 通过记忆化，我们可以缓存函数的结果，以加快其执行速度。上述情况，我们创建一个cache对象，用于存储先前返回过的值。

如果我们使用相同的参数多次调用addFunction函数，它首先检查缓存中是否已有该值，如果有，则返回缓存值，这将节省执行时间。如果没有，那么它将计算该值，并存储在缓存中。

我们用相同的值三次调用了addFunction函数：

在第一次调用，num等于10时函数的值尚未缓存，if语句num in cache返回false，else块的代码被执行：Calculated! 20，并且其结果被添加到缓存对象，cache现在看起来像{10：20}。

第二次，cache对象包含10的返回值。 if语句 num in cache 返回true，From cache! 20被打印。

第三次，我们将5 * 2(值为10)传递给函数。 cache对象包含10的返回值。 if语句 num in cache 返回true，From cache! 20被打印。
</details>

---



107. 输出什么?


```js
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

for (let item in myLifeSummedUp) {
  console.log(item)
}

for (let item of myLifeSummedUp) {
  console.log(item)
}
A: 0 1 2 3 and "☕" "💻" "🍷" "🍫"
B: "☕" "💻" "🍷" "🍫" and "☕" "💻" "🍷" "🍫"
C: "☕" "💻" "🍷" "🍫" and 0 1 2 3
D: 0 1 2 3 and {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}

```
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>
通过for-in循环，我们可以遍历一个对象自有的、继承的、可枚举的、非Symbol的属性。 在数组中，可枚举属性是数组元素的“键”， 即它们的索引。 类似于下面这个对象：

{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}

其中键则是可枚举属性，因此 0，1，2，3被记录。

通过for-of循环，我们可以迭代可迭代对象（包括 Array，Map，Set，String，arguments等）。当我们迭代数组时，在每次迭代中，不同属性的值将被分配给变量item, 因此“☕”，“💻“，”🍷”，“🍫“被打印。
</details>

---

108. 输出什么?


```js
const list = [1 + 2, 1 * 2, 1 / 2]
console.log(list)
A: ["1 + 2", "1 * 2", "1 / 2"]
B: ["12", 2, 0.5]
C: [3, 2, 0.5]
D: [1, 1, 1]

```
<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>
数组元素可以包含任何值。 数字，字符串，布尔值，对象，数组，null，undeifned, 以及其他表达式，如日期，函数和计算。

元素将等于返回的值。 1 + 2返回3，1 * 2返回'2，'1 / 2返回0.5。
</details>

---

109. 输出什么?


```js
function sayHi(name) {
  return `Hi there, ${name}`
}

console.log(sayHi())
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

```
<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>
默认情况下，如果不给函数传参，参数的值将为undefined。 上述情况，我们没有给参数name传值。 name等于undefined，并被打印。

在ES6中，我们可以使用默认参数覆盖此默认的undefined值。 例如：

function sayHi（name =“Lydia”）{...}

在这种情况下，如果我们没有传递值或者如果我们传递undefined，name总是等于字符串Lydia


</details>

---


110. 输出什么?


```js
var status = "😎"

setTimeout(() => {
  const status = "😍"

  const data = {
    status: "🥑",
    getStatus() {
      return this.status
    }
  }

  console.log(data.getStatus())
  console.log(data.getStatus.call(this))
}, 0)
A: "🥑" and "😍"
B: "🥑" and "😎"
C: "😍" and "😎"
D: "😎" and "😎"

```
<details><summary><b>答案</b></summary>
<p>

#### 答案: B

</p>
this关键字的指向取决于使用它的位置。 在函数中，比如getStatus，this指向的是调用它的对象，上述例子中data对象调用了getStatus，因此this指向的就是data对象。 当我们打印this.status时，data对象的status属性被打印，即"🥑"。

使用call方法，可以更改this指向的对象。data.getStatus.call(this)是将this的指向由data对象更改为全局对象。在全局对象上，有一个名为status的变量，其值为”😎“。 因此打印this.status时，会打印“😎”。
</details>

---




111. 输出什么?


```js
const person = {
  name: "Lydia",
  age: 21
}

let city = person.city
city = "Amsterdam"

console.log(person)
A: { name: "Lydia", age: 21 }
B: { name: "Lydia", age: 21, city: "Amsterdam" }
C: { name: "Lydia", age: 21, city: undefined }
D: "Amsterdam"
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>
我们将变量city设置为等于person对象上名为city的属性的值。 这个对象上没有名为city的属性，因此变量city的值为undefined。

请注意，我们没有引用person对象本身，只是将变量city设置为等于person对象上city属性的当前值。

然后，我们将city设置为等于字符串“Amsterdam”。 这不会更改person对象：没有对该对象的引用。

因此打印person对象时，会返回未修改的对象。
</details>

---



112. 输出什么?


```js
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young."
  } else {
    const message = "Yay! You're old enough!"
  }

  return message
}

console.log(checkAge(21))
A: "Sorry, you're too young."
B: "Yay! You're old enough!"
C: ReferenceError
D: undefined
```
<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>
const和let声明的变量是具有块级作用域的，块是大括号（{}）之间的任何东西, 即上述情况if / else语句的花括号。 由于块级作用域，我们无法在声明的块之外引用变量，因此抛出ReferenceError。
</details>

---

113. 什么样的信息将被打印?


```js
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res))
A: fetch方法的结果
B: 第二次调用fetch方法的结果
C: 前一个.then()中回调方法返回的结果
D: 总是undefined

```
<details><summary><b>答案</b></summary>
<p>

#### 答案: C

</p>
第二个.then中res的值等于前一个.then中的回调函数返回的值。 你可以像这样继续链接.then，将值传递给下一个处理程序。
</details>

---


114. 哪个选项是将hasName设置为true的方法，前提是不能将true作为参数传递?

```js
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res))
A: fetch方法的结果
B: 第二次调用fetch方法的结果
C: 前一个.then()中回调方法返回的结果
D: 总是undefined

```
<details><summary><b>答案</b></summary>
<p>

#### 答案: A

</p>
使用逻辑非运算符!，将返回一个布尔值，使用!! name，我们可以确定name的值是真的还是假的。 如果name是真实的，那么!name返回false。 !false返回true。

通过将hasName设置为name，可以将hasName设置为等于传递给getName函数的值，而不是布尔值true。

new Boolean（true）返回一个对象包装器，而不是布尔值本身。
```
new Boolean('212121')
Boolean {true}
```
name.length返回传递的参数的长度，而不是布尔值true。
</details>

---


115. 实现一个函数，判断输入是不是回文字符串。

<details><summary><b>答案</b></summary>
<pre>
function BackToString(str){
  if(typeof(str)!=='string')return false
  return str.split('').reverse().join('')===str
}
console.log(BackToString('abccba'))
<!-- true -->
</pre>
</details>

---


116. 实现Storage，使得该对象为单例，并对localStorage进行封装设置值setItem(key,value)和getItem(key)

<details><summary><b>答案</b></summary>
<pre>

var instance = null;

class Storage {
    static getInstance() {
        if (!instance) {
            instance = new Storage();
        }
        return instance;
    }
    setItem = (key, value) => localStorage.setItem(key, value)
    getItem = key => localStorage.getItem(key)
}
</pre>
</details>

---
[[↑] 回到顶部](#awsome-interview-front-end)


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

---

21. NextTick 原理分析

<details><summary><b>答案</b></summary>
nexttick可以让我们在下次DOM更新循环结束之后执行延迟回调,用于获得更新后的DOM

在 Vue 2.4 之前都是使用的 microtasks(微任务)，但是 microtasks(微任务) 的优先级过高，在某些情况下可能会出现比事件冒泡更快的情况，但如果都使用 macrotasks(宏任务) 又可能会出现渲染的性能问题。所以在新版本中，会默认使用 microtasks(微任务)，但在特殊情况下会使用 macrotasks(宏任务)，比如 v-on。

对于实现 macrotasks(宏任务) ，会先判断是否能使用 setImmediate ，不能的话降级为 MessageChannel ，以上都不行的话就使用 setTimeout

```js
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else if (
  typeof MessageChannel !== 'undefined' &&
  (isNative(MessageChannel) ||
    // PhantomJS
    MessageChannel.toString() === '[object MessageChannelConstructor]')
) {
  const channel = new MessageChannel()
  const port = channel.port2
  channel.port1.onmessage = flushCallbacks
  macroTimerFunc = () => {
    port.postMessage(1)
  }
} else {
  /* istanbul ignore next */
  macroTimerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}
```

nextTick 同时也支持 Promise 的使用，会判断是否实现了 Promise

```js
export function nextTick(cb?: Function, ctx?: Object) {
  let _resolve
  // 将回调函数整合进一个数组中
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  if (!pending) {
    pending = true
    if (useMacroTask) {
      macroTimerFunc()
    } else {
      microTimerFunc()
    }
  }
  // 判断是否可以使用 Promise
  // 可以的话给 _resolve 赋值
  // 这样回调函数就能以 promise 的方式调用
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}
```
</details>

---

22. 生命周期分析


<details><summary><b>答案</b></summary>

![avatar](./public/lifecycle.png)


在初始化时，会调用以下代码，生命周期就是通过 callHook 调用的

```js
Vue.prototype._init = function(options) {
  initLifecycle(vm)
  initEvents(vm)
  initRender(vm)
  callHook(vm, 'beforeCreate') // 拿不到 props data
  initInjections(vm)
  initState(vm)
  initProvide(vm)
  callHook(vm, 'created')
}

```

可以发现在以上代码中，beforeCreate 调用的时候，是获取不到 props 或者 data 中的数据的，因为这些数据的初始化都在 initState 中。

接下来会执行挂载函数

```js
export function mountComponent {
    callHook(vm, 'beforeMount')
    // ...
    if (vm.$vnode == null) {
        vm._isMounted = true
        callHook(vm, 'mounted')
    }
}

```

beforeMount 就是在挂载前执行的，然后开始创建 VDOM 并替换成真实 DOM，最后执行 mounted 钩子。这里会有个判断逻辑，如果是外部 new Vue({}) 的话，不会存在 $vnode ，所以直接执行 mounted 钩子了。如果有子组件的话，会递归挂载子组件，只有当所有子组件全部挂载完毕，才会执行根组件的挂载钩子。

接下来是数据更新时会调用的钩子函数

```js
function flushSchedulerQueue() {
  // ...
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index]
    if (watcher.before) {
      watcher.before() // 调用 beforeUpdate
    }
    id = watcher.id
    has[id] = null
    watcher.run()
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' +
            (watcher.user
              ? `in watcher with expression "${watcher.expression}"`
              : `in a component render function.`),
          watcher.vm
        )
        break
      }
    }
  }
  callUpdatedHooks(updatedQueue)
}

function callUpdatedHooks(queue) {
  let i = queue.length
  while (i--) {
    const watcher = queue[i]
    const vm = watcher.vm
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated')
    }
  }
}
```
上图还有两个生命周期没有说，分别为 activated 和 deactivated ，这两个钩子函数是 keep-alive 组件独有的。用 keep-alive 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 deactivated 钩子函数，命中缓存渲染后会执行 actived 钩子函数。

最后就是销毁组件的钩子函数了
```js
Vue.prototype.$destroy = function() {
  // ...
  callHook(vm, 'beforeDestroy')
  vm._isBeingDestroyed = true
  // remove self from parent
  const parent = vm.$parent
  if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
    remove(parent.$children, vm)
  }
  // teardown watchers
  if (vm._watcher) {
    vm._watcher.teardown()
  }
  let i = vm._watchers.length
  while (i--) {
    vm._watchers[i].teardown()
  }
  // remove reference from data ob
  // frozen object may not have observer.
  if (vm._data.__ob__) {
    vm._data.__ob__.vmCount--
  }
  // call the last hook...
  vm._isDestroyed = true
  // invoke destroy hooks on current rendered tree
  vm.__patch__(vm._vnode, null)
  // fire destroyed hook
  callHook(vm, 'destroyed')
  // turn off all instance listeners.
  vm.$off()
  // remove __vue__ reference
  if (vm.$el) {
    vm.$el.__vue__ = null
  }
  // release circular reference (##6759)
  if (vm.$vnode) {
    vm.$vnode.parent = null
  }
}
```
在执行销毁操作前会调用 beforeDestroy 钩子函数，然后进行一系列的销毁操作，如果有子组件的话，也会递归销毁子组件，所有子组件都销毁完毕后才会执行根组件的 destroyed 钩子函数。

</details>

---

23. VueRouter 源码解析

<details><summary><b>答案</b></summary>

1. 重要函数思维导图

以下思维导图罗列了源码中重要的一些函数 
![avatar](./public/vue-router.png)

2.  路由注册

在开始之前，推荐大家 clone 一份源码对照着看。因为篇幅较长，函数间的跳转也很多。

使用路由之前，需要调用 Vue.use(VueRouter)，这是因为让插件可以使用 Vue

```js
export function initUse(Vue: GlobalAPI) {
  Vue.use = function(plugin: Function | Object) {
    // 判断重复安装插件
    const installedPlugins =
      this._installedPlugins || (this._installedPlugins = [])
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }
    const args = toArray(arguments, 1)
    // 插入 Vue
    args.unshift(this)
    // 一般插件都会有一个 install 函数
    // 通过该函数让插件可以使用 Vue
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}
```

接下来看下 install 函数的部分实现
```js
export function install(Vue) {
  // 确保 install 调用一次
  if (install.installed && _Vue === Vue) return
  install.installed = true
  // 把 Vue 赋值给全局变量
  _Vue = Vue
  const registerInstance = (vm, callVal) => {
    let i = vm.$options._parentVnode
    if (
      isDef(i) &&
      isDef((i = i.data)) &&
      isDef((i = i.registerRouteInstance))
    ) {
      i(vm, callVal)
    }
  }
  // 给每个组件的钩子函数混入实现
  // 可以发现在 `beforeCreate` 钩子执行时
  // 会初始化路由
  Vue.mixin({
    beforeCreate() {
      // 判断组件是否存在 router 对象，该对象只在根组件上有
      if (isDef(this.$options.router)) {
        // 根路由设置为自己
        this._routerRoot = this
        this._router = this.$options.router
        // 初始化路由
        this._router.init(this)
        // 很重要，为 _route 属性实现双向绑定
        // 触发组件渲染
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        // 用于 router-view 层级判断
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
      registerInstance(this, this)
    },
    destroyed() {
      registerInstance(this)
    }
  })
  // 全局注册组件 router-link 和 router-view
  Vue.component('RouterView', View)
  Vue.component('RouterLink', Link)
}
```
3. VueRouter 实例化

在安装插件后，对 VueRouter 进行实例化。

```js
const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 3. Create the router
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/', component: Home }, // all paths are defined without the hash.
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})
```

来看一下 VueRouter 的构造函数
```js
constructor(options: RouterOptions = {}) {
    // ...
    // 路由匹配对象
    this.matcher = createMatcher(options.routes || [], this)

    // 根据 mode 采取不同的路由方式
    let mode = options.mode || 'hash'
    this.fallback =
      mode === 'history' && !supportsPushState && options.fallback !== false
    if (this.fallback) {
      mode = 'hash'
    }
    if (!inBrowser) {
      mode = 'abstract'
    }
    this.mode = mode

    switch (mode) {
      case 'history':
        this.history = new HTML5History(this, options.base)
        break
      case 'hash':
        this.history = new HashHistory(this, options.base, this.fallback)
        break
      case 'abstract':
        this.history = new AbstractHistory(this, options.base)
        break
      default:
        if (process.env.NODE_ENV !== 'production') {
          assert(false, `invalid mode: ${mode}`)
        }
    }
  }
```

4. 创建路由匹配对象

```js
export function createMatcher(
  routes: Array<RouteConfig>,
  router: VueRouter
): Matcher {
  // 创建路由映射表
  const { pathList, pathMap, nameMap } = createRouteMap(routes)

  function addRoutes(routes) {
    createRouteMap(routes, pathList, pathMap, nameMap)
  }
  // 路由匹配
  function match(
    raw: RawLocation,
    currentRoute?: Route,
    redirectedFrom?: Location
  ): Route {
    //...
  }

  return {
    match,
    addRoutes
  }
}
```
createMatcher 函数的作用就是创建路由映射表，然后通过闭包的方式让 addRoutes 和 match 函数能够使用路由映射表的几个对象，最后返回一个 Matcher 对象。

接下来看 createMatcher 函数时如何创建映射表的
```js
export function createRouteMap(
  routes: Array<RouteConfig>,
  oldPathList?: Array<string>,
  oldPathMap?: Dictionary<RouteRecord>,
  oldNameMap?: Dictionary<RouteRecord>
): {
  pathList: Array<string>,
  pathMap: Dictionary<RouteRecord>,
  nameMap: Dictionary<RouteRecord>
} {
  // 创建映射表
  const pathList: Array<string> = oldPathList || []
  const pathMap: Dictionary<RouteRecord> = oldPathMap || Object.create(null)
  const nameMap: Dictionary<RouteRecord> = oldNameMap || Object.create(null)
  // 遍历路由配置，为每个配置添加路由记录
  routes.forEach(route => {
    addRouteRecord(pathList, pathMap, nameMap, route)
  })
  // 确保通配符在最后
  for (let i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0])
      l--
      i--
    }
  }
  return {
    pathList,
    pathMap,
    nameMap
  }
}
// 添加路由记录
function addRouteRecord(
  pathList: Array<string>,
  pathMap: Dictionary<RouteRecord>,
  nameMap: Dictionary<RouteRecord>,
  route: RouteConfig,
  parent?: RouteRecord,
  matchAs?: string
) {
  // 获得路由配置下的属性
  const { path, name } = route
  const pathToRegexpOptions: PathToRegexpOptions =
    route.pathToRegexpOptions || {}
  // 格式化 url，替换 /
  const normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict)
  // 生成记录对象
  const record: RouteRecord = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name,
    parent,
    matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props:
      route.props == null
        ? {}
        : route.components
        ? route.props
        : { default: route.props }
  }

  if (route.children) {
    // 递归路由配置的 children 属性，添加路由记录
    route.children.forEach(child => {
      const childMatchAs = matchAs
        ? cleanPath(`${matchAs}/${child.path}`)
        : undefined
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs)
    })
  }
  // 如果路由有别名的话
  // 给别名也添加路由记录
  if (route.alias !== undefined) {
    const aliases = Array.isArray(route.alias) ? route.alias : [route.alias]

    aliases.forEach(alias => {
      const aliasRoute = {
        path: alias,
        children: route.children
      }
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      )
    })
  }
  // 更新映射表
  if (!pathMap[record.path]) {
    pathList.push(record.path)
    pathMap[record.path] = record
  }
  // 命名路由添加记录
  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        `Duplicate named routes definition: ` +
          `{ name: "${name}", path: "${record.path}" }`
      )
    }
  }
}
```
以上就是创建路由匹配对象的全过程，通过用户配置的路由规则来创建对应的路由映射表。


5. 路由初始化
当根组件调用 beforeCreate 钩子函数时，会执行以下代码

```js
beforeCreate () {
// 只有根组件有 router 属性，所以根组件初始化时会初始化路由
  if (isDef(this.$options.router)) {
    this._routerRoot = this
    this._router = this.$options.router
    this._router.init(this)
    Vue.util.defineReactive(this, '_route', this._router.history.current)
  } else {
    this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
  }
  registerInstance(this, this)
}
```
接下来看下路由初始化会做些什么

```js
init(app: any /* Vue component instance */) {
    // 保存组件实例
    this.apps.push(app)
    // 如果根组件已经有了就返回
    if (this.app) {
      return
    }
    this.app = app
    // 赋值路由模式
    const history = this.history
    // 判断路由模式，以哈希模式为例
    if (history instanceof HTML5History) {
      history.transitionTo(history.getCurrentLocation())
    } else if (history instanceof HashHistory) {
      // 添加 hashchange 监听
      const setupHashListener = () => {
        history.setupListeners()
      }
      // 路由跳转
      history.transitionTo(
        history.getCurrentLocation(),
        setupHashListener,
        setupHashListener
      )
    }
    // 该回调会在 transitionTo 中调用
    // 对组件的 _route 属性进行赋值，触发组件渲染
    history.listen(route => {
      this.apps.forEach(app => {
        app._route = route
      })
    })
  }
```
在路由初始化时，核心就是进行路由的跳转，改变 URL 然后渲染对应的组件。接下来来看一下路由是如何进行跳转的。
6. 路由跳转

```js
transitionTo (location: RawLocation, onComplete?: Function, onAbort?: Function) {
  // 获取匹配的路由信息
  const route = this.router.match(location, this.current)
  // 确认切换路由
  this.confirmTransition(route, () => {
    // 以下为切换路由成功或失败的回调
    // 更新路由信息，对组件的 _route 属性进行赋值，触发组件渲染
    // 调用 afterHooks 中的钩子函数
    this.updateRoute(route)
    // 添加 hashchange 监听
    onComplete && onComplete(route)
    // 更新 URL
    this.ensureURL()
    // 只执行一次 ready 回调
    if (!this.ready) {
      this.ready = true
      this.readyCbs.forEach(cb => { cb(route) })
    }
  }, err => {
  // 错误处理
    if (onAbort) {
      onAbort(err)
    }
    if (err && !this.ready) {
      this.ready = true
      this.readyErrorCbs.forEach(cb => { cb(err) })
    }
  })
}
```

在路由跳转中，需要先获取匹配的路由信息，所以先来看下如何获取匹配的路由信息

```js
function match(
  raw: RawLocation,
  currentRoute?: Route,
  redirectedFrom?: Location
): Route {
  // 序列化 url
  // 比如对于该 url 来说 /abc?foo=bar&baz=qux##hello
  // 会序列化路径为 /abc
  // 哈希为 ##hello
  // 参数为 foo: 'bar', baz: 'qux'
  const location = normalizeLocation(raw, currentRoute, false, router)
  const { name } = location
  // 如果是命名路由，就判断记录中是否有该命名路由配置
  if (name) {
    const record = nameMap[name]
    // 没找到表示没有匹配的路由
    if (!record) return _createRoute(null, location)
    const paramNames = record.regex.keys
      .filter(key => !key.optional)
      .map(key => key.name)
    // 参数处理
    if (typeof location.params !== 'object') {
      location.params = {}
    }
    if (currentRoute && typeof currentRoute.params === 'object') {
      for (const key in currentRoute.params) {
        if (!(key in location.params) && paramNames.indexOf(key) > -1) {
          location.params[key] = currentRoute.params[key]
        }
      }
    }
    if (record) {
      location.path = fillParams(
        record.path,
        location.params,
        `named route "${name}"`
      )
      return _createRoute(record, location, redirectedFrom)
    }
  } else if (location.path) {
    // 非命名路由处理
    location.params = {}
    for (let i = 0; i < pathList.length; i++) {
      // 查找记录
      const path = pathList[i]
      const record = pathMap[path]
      // 如果匹配路由，则创建路由
      if (matchRoute(record.regex, location.path, location.params)) {
        return _createRoute(record, location, redirectedFrom)
      }
    }
  }
  // 没有匹配的路由
  return _createRoute(null, location)
}
```
接下来看看如何创建路由
```js
// 根据条件创建不同的路由
function _createRoute(
  record: ?RouteRecord,
  location: Location,
  redirectedFrom?: Location
): Route {
  if (record && record.redirect) {
    return redirect(record, redirectedFrom || location)
  }
  if (record && record.matchAs) {
    return alias(record, location, record.matchAs)
  }
  return createRoute(record, location, redirectedFrom, router)
}

export function createRoute(
  record: ?RouteRecord,
  location: Location,
  redirectedFrom?: ?Location,
  router?: VueRouter
): Route {
  const stringifyQuery = router && router.options.stringifyQuery
  // 克隆参数
  let query: any = location.query || {}
  try {
    query = clone(query)
  } catch (e) {}
  // 创建路由对象
  const route: Route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  }
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery)
  }
  // 让路由对象不可修改
  return Object.freeze(route)
}
// 获得包含当前路由的所有嵌套路径片段的路由记录
// 包含从根路由到当前路由的匹配记录，从上至下
function formatMatch(record: ?RouteRecord): Array<RouteRecord> {
  const res = []
  while (record) {
    res.unshift(record)
    record = record.parent
  }
  return res
}
```
至此匹配路由已经完成，我们回到 transitionTo 函数中，接下来执行 confirmTransition

```js
transitionTo (location: RawLocation, onComplete?: Function, onAbort?: Function) {
  // 确认切换路由
  this.confirmTransition(route, () => {}
}
confirmTransition(route: Route, onComplete: Function, onAbort?: Function) {
  const current = this.current
  // 中断跳转路由函数
  const abort = err => {
    if (isError(err)) {
      if (this.errorCbs.length) {
        this.errorCbs.forEach(cb => {
          cb(err)
        })
      } else {
        warn(false, 'uncaught error during route navigation:')
        console.error(err)
      }
    }
    onAbort && onAbort(err)
  }
  // 如果是相同的路由就不跳转
  if (
    isSameRoute(route, current) &&
    route.matched.length === current.matched.length
  ) {
    this.ensureURL()
    return abort()
  }
  // 通过对比路由解析出可复用的组件，需要渲染的组件，失活的组件
  const { updated, deactivated, activated } = resolveQueue(
    this.current.matched,
    route.matched
  )

  function resolveQueue(
      current: Array<RouteRecord>,
      next: Array<RouteRecord>
    ): {
      updated: Array<RouteRecord>,
      activated: Array<RouteRecord>,
      deactivated: Array<RouteRecord>
    } {
      let i
      const max = Math.max(current.length, next.length)
      for (i = 0; i < max; i++) {
        // 当前路由路径和跳转路由路径不同时跳出遍历
        if (current[i] !== next[i]) {
          break
        }
      }
      return {
        // 可复用的组件对应路由
        updated: next.slice(0, i),
        // 需要渲染的组件对应路由
        activated: next.slice(i),
        // 失活的组件对应路由
        deactivated: current.slice(i)
      }
  }
  // 导航守卫数组
  const queue: Array<?NavigationGuard> = [].concat(
    // 失活的组件钩子
    extractLeaveGuards(deactivated),
    // 全局 beforeEach 钩子
    this.router.beforeHooks,
    // 在当前路由改变，但是该组件被复用时调用
    extractUpdateHooks(updated),
    // 需要渲染组件 enter 守卫钩子
    activated.map(m => m.beforeEnter),
    // 解析异步路由组件
    resolveAsyncComponents(activated)
  )
  // 保存路由
  this.pending = route
  // 迭代器，用于执行 queue 中的导航守卫钩子
  const iterator = (hook: NavigationGuard, next) => {
  // 路由不相等就不跳转路由
    if (this.pending !== route) {
      return abort()
    }
    try {
    // 执行钩子
      hook(route, current, (to: any) => {
        // 只有执行了钩子函数中的 next，才会继续执行下一个钩子函数
        // 否则会暂停跳转
        // 以下逻辑是在判断 next() 中的传参
        if (to === false || isError(to)) {
          // next(false)
          this.ensureURL(true)
          abort(to)
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' &&
            (typeof to.path === 'string' || typeof to.name === 'string'))
        ) {
        // next('/') 或者 next({ path: '/' }) -> 重定向
          abort()
          if (typeof to === 'object' && to.replace) {
            this.replace(to)
          } else {
            this.push(to)
          }
        } else {
        // 这里执行 next
        // 也就是执行下面函数 runQueue 中的 step(index + 1)
          next(to)
        }
      })
    } catch (e) {
      abort(e)
    }
  }
  // 经典的同步执行异步函数
  runQueue(queue, iterator, () => {
    const postEnterCbs = []
    const isValid = () => this.current === route
    // 当所有异步组件加载完成后，会执行这里的回调，也就是 runQueue 中的 cb()
    // 接下来执行 需要渲染组件的导航守卫钩子
    const enterGuards = extractEnterGuards(activated, postEnterCbs, isValid)
    const queue = enterGuards.concat(this.router.resolveHooks)
    runQueue(queue, iterator, () => {
    // 跳转完成
      if (this.pending !== route) {
        return abort()
      }
      this.pending = null
      onComplete(route)
      if (this.router.app) {
        this.router.app.$nextTick(() => {
          postEnterCbs.forEach(cb => {
            cb()
          })
        })
      }
    })
  })
}
export function runQueue (queue: Array<?NavigationGuard>, fn: Function, cb: Function) {
  const step = index => {
  // 队列中的函数都执行完毕，就执行回调函数
    if (index >= queue.length) {
      cb()
    } else {
      if (queue[index]) {
      // 执行迭代器，用户在钩子函数中执行 next() 回调
      // 回调中判断传参，没有问题就执行 next()，也就是 fn 函数中的第二个参数
        fn(queue[index], () => {
          step(index + 1)
        })
      } else {
        step(index + 1)
      }
    }
  }
  // 取出队列中第一个钩子函数
  step(0)
}
```
接下来介绍导航守卫

```js
const queue: Array<?NavigationGuard> = [].concat(
  // 失活的组件钩子
  extractLeaveGuards(deactivated),
  // 全局 beforeEach 钩子
  this.router.beforeHooks,
  // 在当前路由改变，但是该组件被复用时调用
  extractUpdateHooks(updated),
  // 需要渲染组件 enter 守卫钩子
  activated.map(m => m.beforeEnter),
  // 解析异步路由组件
  resolveAsyncComponents(activated)
)
```
第一步是先执行失活组件的钩子函数

```js
function extractLeaveGuards(deactivated: Array<RouteRecord>): Array<?Function> {
  // 传入需要执行的钩子函数名
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}
function extractGuards(
  records: Array<RouteRecord>,
  name: string,
  bind: Function,
  reverse?: boolean
): Array<?Function> {
  const guards = flatMapComponents(records, (def, instance, match, key) => {
    // 找出组件中对应的钩子函数
    const guard = extractGuard(def, name)
    if (guard) {
      // 给每个钩子函数添加上下文对象为组件自身
      return Array.isArray(guard)
        ? guard.map(guard => bind(guard, instance, match, key))
        : bind(guard, instance, match, key)
    }
  })
  // 数组降维，并且判断是否需要翻转数组
  // 因为某些钩子函数需要从子执行到父
  return flatten(reverse ? guards.reverse() : guards)
}
export function flatMapComponents(
  matched: Array<RouteRecord>,
  fn: Function
): Array<?Function> {
  // 数组降维
  return flatten(
    matched.map(m => {
      // 将组件中的对象传入回调函数中，获得钩子函数数组
      return Object.keys(m.components).map(key =>
        fn(m.components[key], m.instances[key], m, key)
      )
    })
  )
}
```
第二步执行全局 beforeEach 钩子函数

```js
beforeEach(fn: Function): Function {
    return registerHook(this.beforeHooks, fn)
}
function registerHook(list: Array<any>, fn: Function): Function {
  list.push(fn)
  return () => {
    const i = list.indexOf(fn)
    if (i > -1) list.splice(i, 1)
  }
}
```

在 VueRouter 类中有以上代码，每当给 VueRouter 实例添加 beforeEach 函数时就会将函数 push 进 beforeHooks 中。

第三步执行 beforeRouteUpdate 钩子函数，调用方式和第一步相同，只是传入的函数名不同，在该函数中可以访问到 this 对象。

第四步执行 beforeEnter 钩子函数，该函数是路由独享的钩子函数。

第五步是解析异步组件。

```js
export function resolveAsyncComponents(matched: Array<RouteRecord>): Function {
  return (to, from, next) => {
    let hasAsync = false
    let pending = 0
    let error = null
    // 该函数作用之前已经介绍过了
    flatMapComponents(matched, (def, _, match, key) => {
      // 判断是否是异步组件
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true
        pending++
        // 成功回调
        // once 函数确保异步组件只加载一次
        const resolve = once(resolvedDef => {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default
          }
          // 判断是否是构造函数
          // 不是的话通过 Vue 来生成组件构造函数
          def.resolved =
            typeof resolvedDef === 'function'
              ? resolvedDef
              : _Vue.extend(resolvedDef)
          // 赋值组件
          // 如果组件全部解析完毕，继续下一步
          match.components[key] = resolvedDef
          pending--
          if (pending <= 0) {
            next()
          }
        })
        // 失败回调
        const reject = once(reason => {
          const msg = `Failed to resolve async component ${key}: ${reason}`
          process.env.NODE_ENV !== 'production' && warn(false, msg)
          if (!error) {
            error = isError(reason) ? reason : new Error(msg)
            next(error)
          }
        })
        let res
        try {
          // 执行异步组件函数
          res = def(resolve, reject)
        } catch (e) {
          reject(e)
        }
        if (res) {
          // 下载完成执行回调
          if (typeof res.then === 'function') {
            res.then(resolve, reject)
          } else {
            const comp = res.component
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject)
            }
          }
        }
      }
    })
    // 不是异步组件直接下一步
    if (!hasAsync) next()
  }
}
```
以上就是第一个 runQueue 中的逻辑，第五步完成后会执行第一个 runQueue 中回调函数
```js
// 该回调用于保存 `beforeRouteEnter` 钩子中的回调函数
const postEnterCbs = []
const isValid = () => this.current === route
// beforeRouteEnter 导航守卫钩子
const enterGuards = extractEnterGuards(activated, postEnterCbs, isValid)
// beforeResolve 导航守卫钩子
const queue = enterGuards.concat(this.router.resolveHooks)
runQueue(queue, iterator, () => {
  if (this.pending !== route) {
    return abort()
  }
  this.pending = null
  // 这里会执行 afterEach 导航守卫钩子
  onComplete(route)
  if (this.router.app) {
    this.router.app.$nextTick(() => {
      postEnterCbs.forEach(cb => {
        cb()
      })
    })
  }
})
```
第六步是执行 beforeRouteEnter 导航守卫钩子，beforeRouteEnter 钩子不能访问 this 对象，因为钩子在导航确认前被调用，需要渲染的组件还没被创建。但是该钩子函数是唯一一个支持在回调中获取 this 对象的函数，回调会在路由确认执行。

```js

beforeRouteEnter (to, from, next) {
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}
```

下面来看看是如何支持在回调中拿到 this 对象的

```js
function extractEnterGuards(
  activated: Array<RouteRecord>,
  cbs: Array<Function>,
  isValid: () => boolean
): Array<?Function> {
  // 这里和之前调用导航守卫基本一致
  return extractGuards(
    activated,
    'beforeRouteEnter',
    (guard, _, match, key) => {
      return bindEnterGuard(guard, match, key, cbs, isValid)
    }
  )
}
function bindEnterGuard(
  guard: NavigationGuard,
  match: RouteRecord,
  key: string,
  cbs: Array<Function>,
  isValid: () => boolean
): NavigationGuard {
  return function routeEnterGuard(to, from, next) {
    return guard(to, from, cb => {
      // 判断 cb 是否是函数
      // 是的话就 push 进 postEnterCbs
      next(cb)
      if (typeof cb === 'function') {
        cbs.push(() => {
          // 循环直到拿到组件实例
          poll(cb, match.instances, key, isValid)
        })
      }
    })
  }
}
// 该函数是为了解决 issus ##750
// 当 router-view 外面包裹了 mode 为 out-in 的 transition 组件
// 会在组件初次导航到时获得不到组件实例对象
function poll(
  cb: any, // somehow flow cannot infer this is a function
  instances: Object,
  key: string,
  isValid: () => boolean
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key])
  } else if (isValid()) {
    // setTimeout 16ms 作用和 nextTick 基本相同
    setTimeout(() => {
      poll(cb, instances, key, isValid)
    }, 16)
  }
}
```

第七步是执行 beforeResolve 导航守卫钩子，如果注册了全局 beforeResolve 钩子就会在这里执行。

第八步就是导航确认，调用 afterEach 导航守卫钩子了。

以上都执行完成后，会触发组件的渲染

```js
history.listen(route => {
  this.apps.forEach(app => {
    app._route = route
  })
})
```

以上回调会在 updateRoute 中调用
```js
updateRoute(route: Route) {
    const prev = this.current
    this.current = route
    this.cb && this.cb(route)
    this.router.afterHooks.forEach(hook => {
      hook && hook(route, prev)
    })
}
```
至此，路由跳转已经全部分析完毕。核心就是判断需要跳转的路由是否存在于记录中，然后执行各种导航守卫函数，最后完成 URL 的改变和组件的渲染。
</details>

---
24. 什么是VueJS?

<details><summary><b>答案</b></summary>
Vue.js是一个开放源码的渐进式JavaScript框架，用于构建旨在逐步采用的用户界面。VueJS的核心库只关注视图层，并且易于与其他库或现有项目进行收集和集成。
</details>

---
25. VueJS的主要特征?

<details><summary><b>答案</b></summary>
以下是Vuejs的一些主要功能
虚拟DOM：它使用的虚拟DOM类似于其他现有框架，如ReactJS、Ember等。虚拟DOM是原始HTML DOM的一种轻型内存树表示，在不影响原始DOM的情况下进行更新。
组件：用于在VueJS应用程序中创建可重用的自定义元素。
模板：Vuejs提供基于HTML的模板，这些模板将DOM与Vue实例数据绑定在一起。
路由：通过Vue路由器实现页面间导航
轻量级：与其他框架相比，Vuejs是轻量级库
</details>

---
26. VueJS生命周期的主要方法是什么?

<details><summary><b>答案</b></summary>
生命周期钩子是一个窗口，可以让您了解如何在幕后使用库。通过使用这些挂钩，您将知道何时创建、添加到DOM、更新或销毁组件。在详细介绍每个生命周期钩子之前，让我们先看看生命周期图

![avatar](./public/lifecycle.png)

i. 创建(初始化):创建挂钩允许您在将组件添加到DOM之前执行操作。如果在客户端呈现和服务器呈现期间都需要在组件中设置内容，则需要使用这些挂钩。与其他钩子不同，创建钩子也在服务器端呈现期间运行。
a. beforeCreate:这个钩子在组件初始化时运行。hook观察组件中的数据和初始化事件。在这里，数据仍然不是反应性的，组件生命周期中发生的事件还没有设置。

```js
 new Vue({
      data: {
       count: 10
      },
      beforeCreate: function () {
        console.log('Nothing gets called at this moment')
        // `this` points to the view model instance
        console.log('count is ' + this.count);
      }
    })
       // count is undefined
```
b. created:当Vue设置事件和数据观察时调用此钩子。在这里，事件是活动的，虽然还没有加载或呈现模板，但是已经启用了对活动数据的访问。

```js
  new Vue({
    data: {
     count: 10
    },
    created: function () {
      // `this` points to the view model instance
      console.log('count is: ' + this.count)
    }
  })
     // count is: 10
```

注意:请记住，您将不能访问create hooks内部的DOM或目标挂载元素(this.$el)


ii. 挂载(DOM插入):挂载钩子通常是最常用的钩子，它们允许您在第一次呈现之前和之后立即访问组件。

a. beforeMount: beforeMount允许您在第一次呈现之前和之后立即访问组件。

```js
 new Vue({
    beforeMount: function () {
      // `this` points to the view model instance
      console.log(`this.$el is yet to be created`);
    }
  })
```
b. mounted:这是一个最常用的钩子，您可以完全访问反应性组件、模板和呈现的DOM(通过this.$el)。最常用的模式是为组件获取数据。

```js
<div id="app">
    <p>I’m text inside the component.</p>
</div>
  new Vue({
    el: ‘#app’,
    mounted: function() {
      console.log(this.$el.textContent); // I'm text inside the component.
    }
  })
```

iii. 更新(Diff & Re-render):每当组件使用的响应性属性发生更改，或者其他原因导致它在更新之前重新呈现时，就会调用更新钩子:
a. beforeUpdate钩子在组件上的数据发生更改之后运行，更新周期开始之后，就在DOM被修补并重新呈现之前运行。
```js
<div id="app">
  <p>{{counter}}</p>
</div>
...// rest of the code
  new Vue({
    el: '#app',
    data() {
      return {
        counter: 0
      }
    },
     created: function() {
      setInterval(() => {
        this.counter++
      }, 1000)
    },

    beforeUpdate: function() {
      console.log(this.counter) // Logs the counter value every second, before the DOM updates.
    }
  })
```

updated:此钩子在组件上的数据更改和DOM重新呈现之后运行。

```js
<div id="app">
  <p ref="dom">{{counter}}</p>
</div>
...//
  new Vue({
    el: '#app',
    data() {
      return {
        counter: 0
      }
    },
     created: function() {
      setInterval(() => {
        this.counter++
      }, 1000)
    },
    updated: function() {
      console.log(+this.$refs['dom'].textContent === this.counter) // Logs true every second
    }
  })
```

iv. 销毁(Teardown):销毁钩子允许您在组件被销毁时执行操作，比如清理或分析发送。
a. beforeDestroy：beforeDestroy在卸载之前被触发。如果您需要清理事件或响应订阅，那么beforeDestroy可能是进行清理的时候了。您的组件仍然是完整的、功能齐全的。

```js
new Vue ({
  data() {
    return {
      message: 'Welcome VueJS developers'
    }
  },

  beforeDestroy: function() {
    this.message = null
    delete this.message
  }
})
```

b. destroyed:在组件被销毁、其指令被解除绑定以及其事件侦听器被删除之后，将调用此钩子。

```js
new Vue ({
    destroyed: function() {
      console.log(this) // Nothing to show here
    }
  })
```
</details>

---

27. 什么是条件指令?

<details><summary><b>答案</b></summary>
VueJS提供了一组指令，用于根据条件显示或隐藏元素。可用的指令有:v-if、v-else、v-else-if和v-show

1. v-if: v-if指令根据给定的表达式添加或删除DOM元素。例如，如果isLoggedIn是否设置为false,下面的按钮不会显示。
   ```js
   <button v-if="isLoggedIn">Logout</button>
   ```
   您还可以使用一个v-if语句控制多个元素，方法是将所有元素包装在一个带有条件的"template"元素中。例如，可以有条件地同时应用标签和按钮，
   ```js
   <template v-if="isLoggedIn">
  <label> Logout </button>
  <button> Logout </button>
  </template>
  ```
2. v-else:这个指令只在v-if附近的表达式解析为false时才显示内容。这类似于任何编程语言中的else块来显示替代内容，它的前面是v-if或v-else-if块。您不需要传递任何值给它。例如，如果isLoggedIn设置为false(未登录)，则使用v-else显示LogIn按钮。
   ```js
   <button v-if="isLoggedIn"> Logout </button>
    <button v-else> Log In </button>
    ```
3. v-else-if:当我们需要检查两个以上的选项时，使用这个指令。例如，当ifLoginDisabled属性被设置为true时，我们希望显示一些文本而不是LogIn按钮。这可以通过v-else语句来实现。
   ```js
   <button v-if="isLoggedIn"> Logout </button>
    <label v-else-if="isLoginDisabled"> User login disabled </label>
    <button v-else> Log In </button>
  ```
4. v-show:这个指令类似于v-if，但它将所有元素呈现给DOM，然后使用CSS display属性显示/隐藏元素。如果频繁地开关这些元素，则建议使用此指令。这就要从性能方面说起，DOM不变的情况下，只是改动CSS属性往往是比重新生成DOM来得快。
   ```js
   <span v-show="user.name">Welcome user,{{user.name}}</span>
   ```
</details>

---


28. v-show和v-if指令之间的区别是什么?

<details><summary><b>答案</b></summary>
下面是v-show和v-if指令之间的一些主要区别，
1. v-if只在表达式传递时将元素呈现给DOM，而v-show将所有元素呈现给DOM，然后使用CSS display属性根据表达式显示/隐藏元素。
2. v-if支持v-else和v-else-if指令，而v-show不支持else指令。
3. v-if具有较高的切换成本，而v-show具有较高的初始呈现成本。如果元素频繁地开关，v-show具有性能优势，而在初始呈现时间方面，v-if具有优势。
4. v-if支持"template"选项卡，但v-show不支持。
   
</details>

---


29. v-for指令的目的是什么?

<details><summary><b>答案</b></summary>
内置的v-for指令允许我们循环数组或对象中的项。您可以迭代数组或对象中的每个元素。

1. Array usage:
```js
<ul id="list">
  <li v-for="(item, index) in items">
    {{ index }} - {{ item.message }}
  </li>
</ul>

var vm = new Vue({
  el: '#list',
  data: {
    items: [
      { message: 'John' },
      { message: 'Locke' }
    ]
  }
})
```
您还可以使用of作为分隔符，而不是in，类似于javascript迭代器。

2. Object usage:
```js
<div id="object">
  <div v-for="(value, key, index) in user">
    {{ index }}. {{ key }}: {{ value }}
  </div>
</div>

var vm = new Vue({
  el: '#object',
  data: {
    user: {
      firstName: 'John',
      lastName: 'Locke',
      age: 30
    }
  }
})
```
</details>

---


30. 什么是vue实例?

<details><summary><b>答案</b></summary>
每个Vue应用程序都使用Vue函数创建一个新的Vue实例。通常，变量vm (ViewModel的缩写)用于引用Vue实例。您可以创建如下的vue实例，
```js
var vm = new Vue({
  // options
})
```
如上面的代码段所述，您需要传递options对象。您可以在API引用中找到完整的选项列表。
</details>

---

31. 如何实现条件元素组?

<details><summary><b>答案</b></summary>
您可以通过在"template"元素上应用v-if指令来实现条件元素组(一次切换多个元素)，该指令作为元素组的不可见包装器(没有呈现)工作。例如，您可以根据有效的用户条件有条件地对用户详细信息进行分组。

```js
<template v-if="condition">
  <h1>Name</h1>
  <p>Address</p>
  <p>Contact Details</p>
</template>
```
</details>

---


32. 如何使用key属性重用元素?

<details><summary><b>答案</b></summary>
Vue总是尽可能高效地呈现元素。因此，它试图重用这些元素，而不是从头开始构建它们。但这种行为在少数情况下可能会导致问题。例如，如果您试图在v-if和v-else块中呈现相同的输入元素，那么它将保留前面的值，如下所示，

```js
<template v-if="loginType === 'Admin'">
  <label>Admin</label>
  <input placeholder="Enter your ID">
</template>
<template v-else>
  <label>Guest</label>
  <input placeholder="Enter your name">
</template>
```


在这种情况下，它不应该重用。我们可以通过应用下面的key属性使两个输入元素分离，
```js
    <template v-if="loginType === 'Admin'">
      <label>Admin</label>
      <input placeholder="Enter your ID" key="admin-id">
    </template>
    <template v-else>
      <label>Guest</label>
      <input placeholder="Enter your name" key="user-name">
    </template>
```
上面的代码确保两个输入都是独立的，不会相互影响。
</details>

---


33. 为什么不应该在同一元素上同时使用if和for指令?

<details><summary><b>答案</b></summary>
建议不要在与v-for相同的元素上使用v-if。因为v-for指令比v-if具有更高的优先级。开发人员尝试使用这种组合的情况有两种，
i. 例如，要过滤列表中的项，如果您尝试使用v-if标记过滤列表，
```js
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  <li>
</ul>
```

可以通过在初始列表上使用computed属性准备过滤列表来避免这种情况
```js
computed: {
  activeUsers: function () {
    return this.users.filter(function (user) {
      return user.isActive
    })
  }
}
...... //
...... //
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id">
    {{ user.name }}
  <li>
</ul>
```
ii. 为了避免在应该隐藏列表的情况下呈现列表，例如，如果您尝试有条件地检查是否要显示或隐藏用户

```js
<ul>
  <li
    v-for="user in users"
    v-if="shouldShowUsers"
    :key="user.id"
  >
    {{ user.name }}
  <li>
</ul>
```

这可以通过将条件移动到父节点来解决，方法是避免对每个用户进行这种检查
```js
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  <li>
</ul>
```
</details>

---


34. 为什么需要使用key属性作为指令?

<details><summary><b>答案</b></summary>
为了跟踪每个节点的标识，从而重用和重新排序现有元素，您需要在v-for迭代中为每个项目提供一个惟一的键属性。key的理想值是每个条目的惟一id。让我们举个例子，
```js
<div v-for="item in items" :key="item.id">
  {{item.name}}
</div>
```
因此，总是建议在可能的情况下为v-for提供一个键，除非迭代的DOM内容很简单。注意:不应该使用对象和数组等非基本值作为v-for键。而是使用字符串或数值。
</details>

---


35. 数组检测突变的方法有哪些?

<details><summary><b>答案</b></summary>
顾名思义，变异方法修改原始数组。下面是触发视图更新的数组变异方法列表。
1. push()
2. pop()
3. shift()
4. unshift()
5. splice()
6. sort()
7. reverse()

如果在列表上执行上述任何一个变异方法，那么它将触发视图更新。例如，数组中名为“items”的push方法触发视图更新，
```js
vm.todos.push({ message: 'Baz' })
```
</details>

---



36. 什么是数组检测非变异方法？

<details><summary><b>答案</b></summary>
不改变原始数组但总是返回新数组的方法称为非突变方法。 以下是非突变方法列表，
1. filter()
2. concat()
3. slice()

例如，让我们拿一个待办事项列表，用新状态替换旧数组，基于状态过滤器，

```js
vm.todos = vm.todos.filter(function (todo) {
  return todo.status.match(/Completed/)
})
```
由于VueJS实现，此方法不会重新呈现整个列表。
</details>

---



37.  数组变化检测的注意事项是什么？

<details><summary><b>答案</b></summary>
在以下两种情况下，Vue无法检测到数组的变化，
1. 直接使用索引设置项目时，例如，
```js
vm.todos[indexOfTodo] = newTodo
```
2. 修改数组的长度时，例如，
```js
vm.todos.length = todosLength
```

您可以使用set和splice方法克服这两个警告，让我们看一下示例中的解决方案，

1. 第一个用例解决方案
```js
// Vue.set
Vue.set(vm.todos, indexOfTodo, newTodoValue)
(or)
// Array.prototype.splice
vm.todos.splice(indexOfTodo, 1, newTodoValue)
```

2. 第二个用例解决方案
```js
vm.todos.splice(todosLength)
```
</details>

---




38.  对象变化检测的注意事项是什么？

<details><summary><b>答案</b></summary>
Vue无法检测属性添加或删除中对象的更改。让我们举一个用户数据更改的示例，

```js
var vm = new Vue({
  data: {
    user: {
      name: 'John'
    }
  }
})

// `vm.name` is now reactive

vm.email = john@email.com // `vm.email` is NOT reactive

```

您可以使用Vue.set（object，key，value）方法或Object.assign（）来克服这种情况，

```js
Vue.set(vm.user, 'email', john@email.com);
(or)
vm.user = Object.assign({}, vm.user, {
  email: john@email.com
})

```
</details>

---




39. 你如何使用范围的v-for指令？

<details><summary><b>答案</b></summary>
您还可以对v-for指令使用整数类型（比如'n'），该指令多次重复该元素。

```js
<div>
  <span v-for="n in 20">{{ n }} </span>
</div>

```

他显示了1-20个数字
</details>

---




40. 你如何在模板上使用v-for指令？

<details><summary><b>答案</b></summary>
与模板上的v-if指令类似，您也可以使用带有v-for指令的"template"标记来呈现多个元素的块。 我们来看一个todo的例子，
```js
<ul>
  <template v-for="todo in todos">
    <li>{{ todo.title }}</li>
    <li class="divider"></li>
  </template>
</ul>
```
</details>

---


41. 请简单实现双向数据绑定mvvm


<details><summary><b>答案</b></summary>
<pre>
```html
<input id="input"/>
```

```js
const data = {};
const input = document.getElementById('input');
Object.defineProperty(data, 'text', {
  set(value) {
    input.value = value;
    this.value = value;
  }
});
input.onchange = function(e) {
  data.text = e.target.value;
  console.log('data',data)
}
```

</pre>
</details>

---

[[↑] 回到顶部](#awsome-interview-front-end)

### Node.js
1. [koa和express？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/node/node1.md)

2. js 中什么类型是引用传递, 什么类型是值传递? 如何将值类型的变量以引用的方式传递? 

<details><summary><b>答案</b></summary>
对象是引用传递，基础类型是值传递，通过将基础类型包装（boxing）可以以引用的方式传递

面试写代码的话, 可以通过 如何编写一个 `json 对象的拷贝函数 `等类似的问题来考察对引用的了解

== 的 === 的区别的了解. 然后再问 [1] == [1] 是 true 还是 false. 如果基础不好的同学可能会被自己对于 == 和 === 的结论影响然后得出错误的结论.
</details>

3. js 中， 0.1 + 0.2 === 0.3 是否为 true ? 在不知道浮点数位数时应该怎样判断两个浮点数之和与第三数是否相等？

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

4. const 定义的 Array 中间元素能否被修改? 如果可以, 那 const 修饰对象的意义是? 

<details><summary><b>答案</b></summary>
其中的值可以被修改. 意义上, 主要保护引用不被修改 (如用 Map 等接口对引用的变化很敏感, 使用 const 保护引用始终如一是有意义的), 也适合用在 immutable 的场景.

能修改，const相当于把栈里的数据锁死了，Array是个引用数据类型，只是锁死了地址，堆里面的数据依然可以随便改
</details>

5. JavaScript 中不同类型以及不同环境下变量的内存都是何时释放? 

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

6. a.js 和 b.js 两个文件互相 require 是否会死循环? 双方是否能导出变量? 如何从设计上避免这种问题?

<details><summary><b>答案</b></summary>
不会, 先执行的导出其 未完成的副本, 通过导出工厂函数让对方从函数去拿比较好避免. 模块在导出的只是 var module = { exports: {...} }; 中的 exports, 以从 a.js 启动为例, a.js 还没执行完会返回一个 a.js 的 exports 对象的 未完成的副本 给 b.js 模块。 然后 b.js 完成加载，并将 exports 对象提供给 a.js 模块。

另外还有非常基础和常见的问题, 比如 module.exports 和 exports 的区别这里也能一并解决了 exports 只是 module.exports 的一个引用

再晋级一点, 众所周知, node 的模块机制是基于 CommonJS 规范的. 对于从前端转 node 的同学, 如果面试官想问的难一点会考验关于 CommonJS 的一些问题. 比如比较 AMD, CMD, CommonJS 三者的区别, 包括询问关于 node 中 require 的实现原理等.

[JavaScript 模块的循环加载](http://www.ruanyifeng.com/blog/2015/11/circular-dependency.html)
</details>

1. 如果 a.js require 了 b.js, 那么在 b 中定义全局变量 t = 111 能否在 a 中直接打印出来?

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

8. 如何在不重启 node 进程的情况下热更新一个 js/json 文件? 这个问题本身是否有问题?

<details><summary><b>答案</b></summary>
可以清除掉 require.cache 的缓存重新 require(xxx), 视具体情况还可以用 VM 模块重新执行.

当然这个问题可能是典型的 X-Y Problem, 使用 js 实现热更新很容易碰到 v8 优化之后各地拿到缓存的引用导致热更新 js 没意义. 当然热更新 json 还是可以简单一点比如用读取文件的方式来热更新, 但是这样也不如从 redis 之类的数据库中读取比较合理.

</details>

9. 热更新

<details><summary><b>答案</b></summary>
从面试官的角度看, 热更新 是很多程序常见的问题. 对客户端而言, 热更新意味着不用换包, 当然也包含着 md5 校验/差异更新等复杂问题; 对服务端而言, 热更新意味着服务不用重启, 这样可用性较高同时也优雅和有逼格. 问的过程中可以一定程度的暴露应聘程序员的水平.

从 PHP 转 node 的同学可能会有些想法, 比如 PHP 的代码直接刷上去就好了, 并没有所谓的重启. 而 node 重启看起来动作还挺大. 当然这里面的区别, 主要是与同时有 PHP 与 node 开发经验的同学可以讨论, 也是很好的切入点.

在 Node.js 中做热更新代码, 牵扯到的知识点可能主要是 require 会有一个 cache, 有这个 cache 在, 即使你更新了 .js 文件, 在代码中再次 require 还是会拿到之前的编译好缓存在 v8 内存 (code space) 中的的旧代码. 但是如果只是单纯的清除掉 require 中的 cache, 再次 require 确实能拿到新的代码, 但是这时候很容易碰到各地维持旧的引用依旧跑的旧的代码的问题. 如果还要继续推行这种热更新代码的话, 可能要推翻当前的架构, 从头开始从新设计一下目前的框架.

不过热更新 json 之类的配置文件的话, 还是可以简单的实现的, 更新 require 的 cache 可以实现, 不会有持有旧引用的问题, 可以参见我 2 年前写着玩的[例子](https://www.npmjs.com/package/auto-reload), 但是如果旧的引用一直被持有很容易出现内存泄漏, 而要热更新配置的话, 为什么不存数据库? 或者用 zookeeper 之类的服务? 通过更新文件还要再发布一次, 但是存数据库直接写个接口配个界面多爽你说是不是?

所以这个问题其实本身其实是值得商榷的, 可能是典型的 X-Y Problem, 不过聊起来确实是可以暴露水平.
</details>

10. 上下文

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

11. Promise 中 .then 的第二参数与 .catch 有什么区别?

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

12. Eventemitter 的 emit 是同步还是异步?

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

13. 如何判断接口是否异步? 是否只要有回调函数就是异步?

<details><summary><b>答案</b></summary>
开放性问题, 每个写 node 的人都有一套自己的判断方式.

- 看文档
- console.log 打印看看
- 看是否有 IO 操作

单纯使用回调函数并不会异步, IO 操作才可能会异步, 除此之外还有使用 setTimeout 等方式实现异步.
</details>

14. nextTick, setTimeout 以及 setImmediate 三者有什么区别?

<details><summary><b>答案</b></summary>

</details>

15. 如何实现一个 sleep 函数?

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

16. 如何实现一个异步的 reduce? (注:不是异步完了之后同步 reduce)

<details><summary><b>答案</b></summary>
需要了解 reduce 的情况, 是第 n 个与 n+1 的结果异步处理完之后, 在用新的结果与第 n+2 个元素继续依次异步下去. 
</details>

17. 有这样一个场景, 你在线上使用 koa 搭建了一个网站, 这个网站项目中有一个你同事写的接口 A, 而 A 接口中在特殊情况下会变成死循环. 那么首先问题是, 如果触发了这个死循环, 会对网站造成什么影响?

<details><summary><b>答案</b></summary>
Node.js 中执行 js 代码的过程是单线程的. 只有当前代码都执行完, 才会切入事件循环, 然后从事件队列中 pop 出下一个回调函数开始执行代码. 所以 ① 实现一个 sleep 函数, 只要通过一个死循环就可以阻塞整个 js 的执行流程. (关于如何避免坑爹的同事写出死循环, 在后面的测试环节有写到.)
</details>

18. 并行/并发

<details><summary><b>答案</b></summary>

并行 (Parallel) 与并发 (Concurrent) 是两个很常见的概念.

![avatar](https://joearms.github.io/images/con_and_par.jpg)

并发 (Concurrent) = 2 队列对应 1 咖啡机.

并行 (Parallel) = 2 队列对应 2 咖啡机.

Node.js 通过事件循环来挨个抽取事件队列中的一个个 Task 执行, 从而避免了传统的多线程情况下 2个队列对应 1个咖啡机 的时候上下文切换以及资源争抢/同步的问题, 所以获得了高并发的成就.

至于在 node 中并行, 你可以通过 cluster 来再添加一个咖啡机.
</details>


19. 进程的当前工作目录是什么? 有什么作用?

<details><summary><b>答案</b></summary>
当前进程启动的目录, 通过 process.cwd() 获取当前工作目录 (current working directory), 通常是命令行启动的时候所在的目录 (也可以在启动时指定), 文件操作等使用相对路径的时候会相对当前工作目录来获取文件.

一些获取配置的第三方模块就是通过你的当前目录来找配置文件的. 所以如果你错误的目录启动脚本, 可能没法得到正确的结果. 在程序中可以通过 process.chdir() 来改变当前的工作目录.
</details>

20. child_process.fork 与 POSIX 的 fork 有什么区别?

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

21. 父进程或子进程的死亡是否会影响对方? 什么是孤儿进程?

<details><summary><b>答案</b></summary>
子进程死亡不会影响父进程, 不过子进程死亡时（线程组的最后一个线程，通常是“领头”线程死亡时），会向它的父进程发送死亡信号. 反之父进程死亡, 一般情况下子进程也会随之死亡, 但如果此时子进程处于可运行态、僵死状态等等的话, 子进程将被进程1（init 进程）收养，从而成为孤儿进程. 另外, 子进程死亡的时候（处于“终止状态”），父进程没有及时调用 wait() 或 waitpid() 来返回死亡进程的相关信息，此时子进程还有一个 PCB 残留在进程表中，被称作僵尸进程.
</details>

22. cluster 是如何保证负载均衡的?

<details><summary><b>答案</b></summary>
</details>

23. 什么是守护进程? 如何实现守护进程?

<details><summary><b>答案</b></summary>
</details>


24. 在 IPC 通道建立之前, 父进程与子进程是怎么通信的? 如果没有通信, 那 IPC 是怎么建立的?

<details><summary><b>答案</b></summary>
这个问题也挺简单, 只是个思路的问题. 在通过 child_process 建立子进程的时候, 是可以指定子进程的 env (环境变量) 的. 所以 Node.js 在启动子进程的时候, 主进程先建立 IPC 频道, 然后将 IPC 频道的 fd (文件描述符) 通过环境变量 (NODE_CHANNEL_FD) 的方式传递给子进程, 然后子进程通过 fd 连上 IPC 与父进程建立连接.
</details>


[[↑] 回到顶部](#awsome-interview-front-end)

### Webpack

1. [webpack和gulp的区别](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack1.md)

2. [webpack的loader和plugin有什么区别](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack2.md)

3. [做项目的时候，用webpack-dev-server起的热刷新和node自己写的http协议搭建服务，这两者有什么区别吗？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack3.md)

4. [用webpack进行哪些性能方面的优化](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack4.md)

5. [怎么用webpack进行按需加载](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack5.md)

6. [webpack配置：（几个重要参数）](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack6.md)

7. [style-loader和css-loader的区别](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/webpack/webpack7.md)

[[↑] 回到顶部](#awsome-interview-front-end)

### CSS
1. [遇到过的兼容性问题？](https://github.com/awsome-interview/awsome-interview-front-end/blob/master/css/css1.md)

2. 两种以上方式实现已知或者未知宽度的垂直水平居中?


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


3. 实现效果，点击容器内的图标，图标边框变成border 1px solid red，点击空白处重置?


<details><summary><b>答案</b></summary>
<pre>
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
</pre>
</details>

---


[[↑] 回到顶部](#awsome-interview-front-end)

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

[[↑] 回到顶部](#awsome-interview-front-end)

## 参考文献
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

[[↑] 回到顶部](#awsome-interview-front-end)
