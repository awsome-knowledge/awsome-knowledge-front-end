Function.prototype.myCall = function (content = window, ...args) {
    if (this === Function.prototype) {
        return undefined
    }
    content = content || window
    const fn = Symbol()
    content[fn] = this
    let res = content[fn](...args)
    delete content[fn]
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
