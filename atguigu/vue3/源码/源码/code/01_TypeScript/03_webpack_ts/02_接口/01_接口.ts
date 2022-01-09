// 接口是对象的状态(属性)和行为(方法)的抽象(描述)
// 接口:是一种类型,是一种规范,是一种规则,是一个能力,是一种约束
(() => {
  // 需求: 创建人的对象, 需要对人的属性进行一定的约束

  // id是number类型, 必须有, 只读的
  // name是string类型, 必须有
  // age是number类型, 必须有
  // sex是string类型, 可以没有

  // 定义一个接口,该接口作为person对象的类型使用,限定或者是约束该对象中的属性数据
  interface IPerson {
    // readonly id是只读的,是number类型,const修饰属性,想要设置该属性是只读的,是不能使用的
    readonly id:  number 
    name: string
    age: number
    // ? 可有可无的
    sex?: string
  }


  // 定义一个对象,该对象的类型就是我定义的接口IPerson
  const person: IPerson = {
    id: 1,
    name: '小甜甜',
    age: 18,
    // sex这个属性没有也是可以的
    // sex: '女'
  }

  console.log(person)
  // id属性此时是可读可写
  // person.id = 100
  person.sex='女'
  // person.money = '123131'
  console.log(person)
})()