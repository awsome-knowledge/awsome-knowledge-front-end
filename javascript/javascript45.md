#  输出是什么？

```javascript
var num = 8
var num = 10

console.log(num)
A: 8
B: 10
C: SyntaxError
D: ReferenceError

```
答案: B

使用 var 关键字，你可以用相同的名称声明多个变量。然后变量将保存最新的值。

你不能使用 let 或 const 来实现这一点，因为它们是块作用域的。