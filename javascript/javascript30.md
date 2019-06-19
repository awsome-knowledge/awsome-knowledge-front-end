# What's the output?
```javascript
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
freddie.colorChange("orange");
A: orange
B: purple
C: green
D: TypeError
```

D

colorChange函数是静态的。静态方法被设计为仅存在于创建它们的构造函数上，并且不能传递给任何子方法。由于freddie是一个子函数，因此函数不会传递下去，并且在freddie实例上不可用:会抛出一个类型错误。