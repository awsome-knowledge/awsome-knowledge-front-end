# awsome-interview-front-end

- 欢迎大家将所有面试题都可以放进来，方便总结和反思。

- 欢迎大家都来看看，提供各个阶段的前端爱好者学习和面试的必备题库。

- 欢迎大家将自己面过的题目或看到比较经典的贡献出来，众人拾柴火焰高，相信有很多人都会受到影响和帮助。


## 面试题
### 算法

1. 两数之和

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

<details><summary><b>答案</b></summary>
我的思路很简单，先给一个空对象，再遍历数组中的每一个数字，让目标值和每个值做差，然后判断对象中是否有差，如果有则返回对象的该差的value和i，没有则将该下标对应的值和该下标作为key和value塞进对象中
<pre> 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        let tep = target - nums[i]
        let val = map.hasOwnProperty(tep)
        if (val) {
            return [map[tep], i]
        }
        map[nums[i]] = i
    }
};
</pre> 
</details>


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

[这里有一份 JavaScript 高级面试题，请来回答](http://www.imooc.com/article/23647)

[力扣（LeetCode）](https://leetcode-cn.com/problems/)