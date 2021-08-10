<<<<<<< HEAD
Function.prototype.myCall = function (content = window, ...args) {
    if (this === Function.prototype) {
        return undefined
    }
    content = content || window
    const fn = Symbol()
    content[fn] = this
    let res = content[fn](...args)
    delete content[fn]
=======
// 手写call
/**
 * 
 * @param {*} content Animal {} 传入的方法或对象
 * @param  {...any} args 参数
 * @returns 
 */
Function.prototype.myCall = function (content = window, ...args) {
    // 如果this([Function: Shout])和函数的原型({ [Function] myCall: [Function] })一样，返回undefined，自己绑自己干嘛
    if (this === Function.prototype) {
        return undefined
    }
    // Animal {}
    // this指向这个函数,将这个函数改变成content
    content = content || window
    // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
    const fn = Symbol()
    // this指向调用call的对象,即我们要改变this指向的函数
    content[fn] = this
    // 执行当前函数
    let res = content[fn](...args)
    // 删除我们声明的fn属性
    delete content[fn]
    // 返回函数执行结果
>>>>>>> 958a7e269c2c659158ce3de8efce70631d632c79
    return res
}

// 测试

function Shout(name, place) {
    this.name = name
    this.place = place
}

function Animal(name, place, age) {
    Shout.myCall(this,name, place)
    this.age = age
}

let dog = new Animal('xiaowang', 'tree', 1)

console.log(dog.name, dog.place, dog.age)
