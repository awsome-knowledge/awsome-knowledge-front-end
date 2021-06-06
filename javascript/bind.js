/**
 * 
 * @param {*} content 接受对象 { x: 42, getX: [Function: getX] }
 * @param  {...any} args1 可以为空
 * @returns 
 */
Function.prototype.myBind = function (content, ...args1) {
    //如果this（[Function: getX]） 和  Function.prototype({ [Function] myBind: [Function] }) 一样，返回undefined，自己绑自己干嘛
    if (this === Function.prototype) {
        throw new TypeError('error')
    }
    let self = this
    return function fn(...args2) {
        // ...args2也可以为空
        console.log(this instanceof fn)
        if (this instanceof fn) {
            return new self(...args1, ...args2)
        }
        // 使用apply实现
        return self.apply(content, args1.concat(args2))
    }
}

// 测试

var module = {
    x: 42,
    getX: function () {
        return this.x;
    }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.myBind(module);
console.log(boundGetX());
// expected output: 42