# What happens when we do this?
```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
A: Nothing, this is totally fine!
B: SyntaxError. You cannot add properties to a function this way.
C: undefined
D: ReferenceError
```

A

这在JavaScript中是可能的，因为函数是对象!(除了基本类型之外的所有东西都是对象)
函数是对象的一种特殊类型。您自己编写的代码并不是实际的函数。函数是一个带有属性的对象。此属性是可调用的。