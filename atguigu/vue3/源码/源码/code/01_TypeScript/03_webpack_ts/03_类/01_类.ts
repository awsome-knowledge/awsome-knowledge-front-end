// 类:可以理解为模版,通过模版可以实例化对象
// 面向对象的编程思想
(() => {
  // ts中类的定义及使用
  class Person {
    // 定义属性
    name: string
    age: number
    gender: string
    // 定义构造函数:为了将来实例化对象的时候,可以直接对属性的值进行初始化
    constructor(name: string='小甜甜', age: number=16, gender: string='女') {
      // 更新对象中的属性数据
      this.name = name
      this.age = age
      this.gender = gender
    }
    // 定义实例方法
    sayHi(str: string) {
      console.log(`大家好,我是${this.name},今年已经${this.age}岁了,是个${this.gender}孩子,`, str)
    }
  }

  // ts中使用类,实例化对象,可以直接进行初始化操作
  const person = new Person('佐助',18,'男')
  person.sayHi('你叫什么名字啊')
})()