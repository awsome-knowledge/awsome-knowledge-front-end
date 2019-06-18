# What's the output?
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

C

因为在javascript中的事件队列，在循环执行后，`setTimeout`的回调才被调用。变量`i`在第一次循环中用`var`关键词被定义。在循环中，我们每次用一元操作符`++`按步长1来递增`i`。在调用`setTimeout`回调函数时，`i`在第一个例子中就等于`3`。

在第二个循环中，变量`i`被关键词`let`定义：变量被关键词`let`和`const`定义会产生闭包（块局限于`{}`）。在每个迭代中，`i`将有一个新的值，并且在循环内，每个值都是有范围的。