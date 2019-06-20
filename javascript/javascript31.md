# What's the output?
```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
```

A

它记录对象，因为我们刚刚在全局对象上创建了一个空对象!当我们把问候语拼错为greetign时，JS解释器实际上把它看作是全局的。greetign ={}(或window)。浏览器中的greetign ={})。为了避免这种情况，我们可以使用“use strict”。这确保您在将变量设置为任何值之前声明了该变量。