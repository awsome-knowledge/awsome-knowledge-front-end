# [generator](http://es6.ruanyifeng.com/#docs/generator)如何执行？如何让generator自动next（不通过next.next.next）？


```text
Generator 算是 ES6 中难理解的概念之一了，Generator 最大的特点就是可以控制函数的执行。在这一小节中我们不会去讲什么是 Generator，而是把重点放在 Generator 的一些容易困惑的地方。

function *foo(x) {
  let y = 2 * (yield (x + 1))
  let z = yield (y / 3)
  return (x + y + z)
}
let it = foo(5)
console.log(it.next())   // => {value: 6, done: false}
console.log(it.next(12)) // => {value: 8, done: false}
console.log(it.next(13)) // => {value: 42, done: true}

你也许会疑惑为什么会产生与你预想不同的值，接下来就让我为你逐行代码分析原因

首先 Generator 函数调用和普通函数不同，它会返回一个迭代器
当执行第一次 next 时，传参会被忽略，并且函数暂停在 yield (x + 1) 处，所以返回 5 + 1 = 6
当执行第二次 next 时，传入的参数等于上一个 yield 的返回值，如果你不传参，yield 永远返回 undefined。此时 let y = 2 * 12，所以第二个 yield 等于 2 * 12 / 3 = 8
当执行第三次 next 时，传入的参数会传递给 z，所以 z = 13, x = 5, y = 24，相加等于 42
Generator 函数一般见到的不多，其实也于他有点绕有关系，并且一般会配合 co 库去使用。当然，我们可以通过 Generator 函数解决回调地狱的问题，可以把之前的回调地狱例子改写为如下代码：

function *fetch() {
    yield ajax(url, () => {})
    yield ajax(url1, () => {})
    yield ajax(url2, () => {})
}
let it = fetch()
let result1 = it.next()
let result2 = it.next()
let result3 = it.next()

```