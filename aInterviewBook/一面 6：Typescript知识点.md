# 一面 6：开发环境相关知识点与高频考题解析

工程师的开发环境决定其开发效率，常用的开发环境配置也是面试考查点之一。

## 知识点梳理

### interface VS type
大家使用 typescript 总会使用到 interface 和 type，官方规范 稍微说了下两者的区别

```
An interface can be named in an extends or implements clause, but a type alias for an object type literal cannot.
An interface can have multiple merged declarations, but a type alias for an object type literal cannot.
```
但是没有太具体的例子。
明人不说暗话，直接上区别。
#### 相同点
都可以描述一个对象或者函数

interface
```ts
interface User {
  name: string
  age: number
}

interface SetUser {
  (name: string, age: number): void;
}
```
type
```ts
type User = {
  name: string
  age: number
};

type SetUser = (name: string, age: number)=> void;
```
都允许拓展（extends）

interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。 虽然效果差不多，但是两者语法不同。

interface extends interface
```ts
interface Name { 
  name: string; 
}
interface User extends Name { 
  age: number; 
}
```
type extends type
```ts
type Name = { 
  name: string; 
}
type User = Name & { age: number  };
```
interface extends type
```ts
type Name = { 
  name: string; 
}
interface User extends Name { 
  age: number; 
}
```
type extends interface
```ts
interface Name { 
  name: string; 
}
type User = Name & { 
  age: number; 
}
```
#### 不同点
type 可以而 interface 不行

type 可以声明基本类型别名，联合类型，元组等类型
```ts
// 基本类型别名
type Name = string

// 联合类型
interface Dog {
    wong();
}
interface Cat {
    miao();
}

type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]

```
type 语句中还可以使用 typeof 获取实例的 类型进行赋值
```ts
// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div');
type B = typeof div
```
其他骚操作
```ts
type StringOrNumber = string | number;  
type Text = string | { text: string };  
type NameLookup = Dictionary<string, Person>;  
type Callback<T> = (data: T) => void;  
type Pair<T> = [T, T];  
type Coordinates = Pair<number>;  
type Tree<T> = T | { left: Tree<T>, right: Tree<T> };
```
interface 可以而 type 不行
interface 能够声明合并
```ts
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

/*
User 接口为 {
  name: string
  age: number
  sex: string 
}
*/
```

## 小结

本小节总结了前端开发环境常考查的知识，这些知识也是前端程序员必须掌握的，否则会影响开发效率。