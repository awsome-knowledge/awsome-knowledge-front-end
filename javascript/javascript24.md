# What's the output?
```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();

A: Lydia and undefined
B: Lydia and ReferenceError
C: ReferenceError and 21
D: undefined and ReferenceError
```

在函数中，我们首先用关键词`var`声明`name`变量。这意味着这个变量提升（内存空间是在创建阶段被设置的），其默认值是`undefined`,直到我们真正到达定义变量的那一行。我们还没有在试图记录name变量的行上定义变量，所以它仍然保留undefined的值。

用`let` 和`const`关键词定义的变量被提升，但是不像`var`，不会获得初始值。在我们定义（初始化）他们之前，他们是不被接受的。这被叫做“暂时性死区”。在他们被声明之前,我们试图去获得这个变量，javascript是会抛出`ReferenceError`。