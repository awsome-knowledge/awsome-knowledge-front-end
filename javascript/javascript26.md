# What's the output?
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

B

注意，`diameter` 的值是一个正则函数，而`perimeter `的值是一个箭头函数。对于箭头函数，this关键字指的是它当前周围的作用域，这与常规函数不同!这意味着当我们调用`perimeter`时，它不是指向`shape`对象，而是指向它的周围范围(例如`window `)。该对象上没有值`radius`，它返回未定义的值。