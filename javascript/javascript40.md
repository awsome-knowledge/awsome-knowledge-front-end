# 输出是什么？
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

答案: C
扩展运算符（...args）会返回实参组成的数组。而数组是对象，因此 typeof args 返回 "object"。