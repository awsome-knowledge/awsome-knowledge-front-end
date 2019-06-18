# What's the output?
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

A

在JavaScript中，所有对象在彼此相等时通过引用进行交互。首先，变量c持有对象的值。稍后，我们使用与c相同的对象引用分配d。当您更改一个对象时，您将更改所有对象
![avatar](../public/front-end.png)