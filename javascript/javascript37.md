# 输出是什么？
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

C

一元后自增运算符 ++：

返回值（返回 0）
值自增（number 现在是 1）
一元前自增运算符 ++：

值自增（number 现在是 2）
返回值（返回 2）
结果是 0 2 2.