# 所有对象都有原型。

```javascript
A: true
B: false
```

答案: B
除了基础对象（base object），所有对象都有原型。基本对象可以访问一些方法和属性，如.tostring。这就是为什么可以使用内置的javascript方法。所有这些方法在原型上都是可用的。虽然javascript不能直接在对象上找到这些方法，但javascript会沿着原型链找到他们，以便使用。