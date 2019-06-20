# What's the output?
```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
A: TypeError
B: SyntaxError
C: Lydia Hallie
D: undefined undefined
```

C
不能像添加常规对象那样向构造函数添加属性。如果您想一次向所有对象添加一个特性，则必须使用原型。在这种情况下，
```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```
将使member.getFullName()起作用。为什么这是有益的?假设我们将这个方法添加到构造函数本身。也许不是每个Person实例都需要这个方法。这将浪费大量内存空间，因为它们仍然具有该属性，这将占用每个实例的内存空间。相反，如果我们只将它添加到原型中，那么它只存在于内存中的一个位置，但是它们都可以访问它!