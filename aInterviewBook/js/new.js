function myNew(fn, ...args) {
    // console.log("fn:",fn)
    // // fn: function Parent(name) {
    // //     this.name = name
    // // }
    // console.log("args：", ...args)
    // // hhhh
    let obj = Object.create(fn.prototype)
    // console.log("fn.prototype:",fn.prototype)
    // // Parent { say: [Function] }
    // console.log("obj:",obj)
    // // Parent {}
    let res = fn.call(obj, ...args)
    // console.log("res:",res)
    // // undefined
    if (res && (typeof res === 'object' || typeof res === 'function')) {
        return res
    }
    return obj
}

function Parent(name,age) {
    this.name = name
    this.age = age
}
Parent.prototype.say = () => {
    console.log('say')
}

const child = myNew(Parent, 'hhhh', 1111)

console.log(child.name)
console.log(child.age)
console.log(child.say())