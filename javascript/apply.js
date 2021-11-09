<<<<<<< HEAD
Function.prototype.myApply = function (content = window, ...args) {
=======
// 手写apply
/**
 * 
 * @param {*} content 传入的第一个参数 [ 'xiangwang', 'tree' ]
 * @param  {...any} args 传入的其余参数 [ '1', '2' ]
 * @returns 
 */
Function.prototype.myApply = function (content = window, ...args) {
    // 如果this([Function: push])和函数的原型({ [Function] myApply: [Function] })一样，返回undefined，自己绑自己干嘛
>>>>>>> 958a7e269c2c659158ce3de8efce70631d632c79
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