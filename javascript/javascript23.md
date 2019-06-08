# promise原理？

```text
Promise 翻译过来就是承诺的意思，这个承诺会在未来有一个确切的答复，并且该承诺有三种状态，分别是：

等待中（pending）
完成了 （resolved）
拒绝了（rejected）
这个承诺一旦从等待状态变成为其他状态就永远不能更改状态了，也就是说一旦状态变为 resolved 后，就不能再次改变

new Promise((resolve, reject) => {
  resolve('success')
  // 无效
  reject('reject')
})

当我们在构造 Promise 的时候，构造函数内部的代码是立即执行的

new Promise((resolve, reject) => {
  console.log('new Promise')
  resolve('success')
})
console.log('finifsh')
// new Promise -> finifsh
Promise 实现了链式调用，也就是说每次调用 then 之后返回的都是一个 Promise，并且是一个全新的 Promise，原因也是因为状态不可变。如果你在 then 中 使用了 return，那么 return 的值会被 Promise.resolve() 包装

Promise.resolve(1)
  .then(res => {
    console.log(res) // => 1
    return 2 // 包装成 Promise.resolve(2)
  })
  .then(res => {
    console.log(res) // => 2
  })
当然了，Promise 也很好地解决了回调地狱的问题，可以把之前的回调地狱例子改写为如下代码：

ajax(url)
  .then(res => {
      console.log(res)
      return ajax(url1)
  }).then(res => {
      console.log(res)
      return ajax(url2)
  }).then(res => console.log(res))
前面都是在讲述 Promise 的一些优点和特点，其实它也是存在一些缺点的，比如无法取消 Promise，错误需要通过回调函数捕获。
```