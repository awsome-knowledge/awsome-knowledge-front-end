Function.prototype.myBind = function (content, ...args1) {
    if (this === Function.prototype) {
        throw new TypeError('error')
    }
    let self = this
    return function fn(...args2) {
        if (this instanceof fn) {
            return new self(...args1, ...args2)
        }
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