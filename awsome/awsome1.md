## 开始
![Screenshot from 2019-04-18 09-48-49](https://user-images.githubusercontent.com/36500514/56331706-124a8700-61c0-11e9-9ed6-8dac78d596ae.png)

答案是肯定的，那为什么不是[1,2,3]呢？

## 知识
首先看看官网上：

[paserInt的用法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

parseInt() 函数解析一个字符串参数，通过基数解析，返回一个整数或者NAN

parseInt() 的两个参数分别是string和radix

string就是要解析的字符串，radix就是基数

注意：
- 基数不在2-36之间，则返回值就是NAN

map
遍历数组，将数组中的每一个元素调用定义的回调函数，返回包含结果的数组

map()的第一个参数是回调函数，回调函数的三个参数分别是currentValue/index/arr

currentValue是当前值，index当前值的索引，arr当前元素属于的数组对象

## 解析
那么回到这道题中，['1','2','3'].map(parseInt)就可以等于

['1','2','3'].map(function('1',0))，

['1','2','3'].map(function('2',1))，

['1','2','3'].map(function('3',2))

接着

parseInt('1',0),

parseInt('2',1),

parseInt('3',2)

那么，第一个字符串‘1’基于基数0也就是10进制返回值是1

第二个的基数是1小于2，返回值为NAN

第三个中3是没有2进制的，返回值为NAN



## 延伸
```javascript
function part(fn) {
    return (...rest) => {
        return fn.call(this, rest[0])
    }
}
let a = ['1', '2', '3']
a.map(part(parseInt))
//  [1, 2, 3]
```
为什么加个函数就返回没问题了呢

## 解析
```javascript
function part(fn) {
    return (...rest) => {
        // console.log('rest', rest)
        // rest (3) ["1", 0, Array(3)]
        // rest (3) ["2", 1, Array(3)]
        // rest (3) ["3", 2, Array(3)]

        // console.log('rest[0]', rest[0])
        // rest 1
        // rest 2
        // rest 3

        // console.log(fn)
        // parseInt() { [native code] }

        // console.log('fn.call(this, rest[0])', fn.call(this, rest[0]))
        //fn.call(this, rest[0]) 1 
        //fn.call(this, rest[0]) 2 
        //fn.call(this, rest[0]) 3
        return fn.call(this, rest[0])
    }
}
let a = ['1', '2', '3']
a.map(part(parseInt))
//  [1, 2, 3]
```
1. 先`...rest`获取全部参数，即rest
2. 再获取每个参数中的索引为0的值，即rest[0]
3. fn就是`parseInt()`函数
4. 接着fn用`call`继承`rest[0]`，执行函数就简化为`parserInt('1'),parserInt('2'),parserInt('3')`
5. 最后返回的值就是[1,2,3]
## 参考文献
[为什么["1","2","3"].map(parseInt) 返回[1,NaN,NaN]？](https://juejin.im/post/5b7298de51882561126f0389)