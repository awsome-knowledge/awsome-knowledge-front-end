// 继承:类与类之间的关系
// 继承后类与类之间的叫法:
// A类继承了B这个类,那么此时A类叫子类,B类叫基类
// 子类---->派生类
// 基类---->超类(父类)
// 一旦发生了继承的关系,就出现了父子类的关系(叫法)
(() => {
  // 定义一个类,作为基类(超类/父类)
  class Person {
    // 定义属性
    name: string // 名字
    age: number // 年龄
    gender: string // 性别
    // 定义构造函数
    constructor(name: string='小明', age: number=18, gender: string='男') {
      // 更新属性数据
      this.name = name
      this.age = age
      this.gender = gender
    }
    // 定义实例方法
    sayHi(str: string) {
      console.log(`我是:${this.name},${str}`)
    }
  }
  // 定义一个类,继承自Person
  class Student extends Person {
    constructor(name: string, age: number, gender: string) {
      // 调用的是父类中的构造函数,使用的是super
      super(name, age, gender)
    }

    // 可以调用父类中的方法
    sayHi() {
      console.log('我是学生类中的sayHi方法')
      // 调用父类中的sayHi方法
      super.sayHi('哈哈')
    }
  }

  // 实例化Person
  const person = new Person('大明明',89,'男')
  person.sayHi('嘎嘎')
  // 实例化Student
  const stu = new Student('小甜甜',16,'女')
  stu.sayHi()

  // 总结:类和类之间如果要有继承关系,需要使用extends关键字
  // 子类中可以调用父类中的构造函数,使用的是super关键字(包括调用父类中的实例方法,也可以使用super)
  // 子类中可以重写父类的方法
})()