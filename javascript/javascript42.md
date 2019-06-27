#  输出是什么？

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

答案: C

使用 "use strict"，你可以确保不会意外地声明全局变量。我们从来没有声明变量 age，因为我们使用 "use strict"，它将抛出一个引用错误。如果我们不使用 "use strict"，它就会工作，因为属性 age 会被添加到全局对象中了。