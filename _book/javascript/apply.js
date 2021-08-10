Function.prototype.myApply = function (content = window, ...args) {
    if (this === Function.prototype) {
        return undefined
    }
    content = content || window
    const fn = Symbol()
    content[fn] = this
    let res
    if (Array.isArray(...args)) {
        res = content[fn](...args)
    } else {
        res = content[fn]()
    }
    delete content[fn]
    return res
}

// 测试

let Shout = ['xiangwang', 'tree']
let Animal = ['1', '2']
Shout.push.myApply(Shout, Animal)
console.log(Shout)
// [ 'xiangwang', 'tree', [ '1', '2' ] ]