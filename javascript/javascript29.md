# What's the output?
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

C

new Number()是一个内置函数构造函数。虽然它看起来像一个数字，但它并不是一个真正的数字:它有许多额外的功能，是一个对象。当我们使用==操作符时，它只检查它是否具有相同的值。它们的值都是3，所以返回true。但是，当我们使用===操作符时，值和类型应该是相同的。它不是:new Number()不是一个数字，而是一个对象。返回false。