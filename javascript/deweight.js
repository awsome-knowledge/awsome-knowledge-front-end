// test
let arr = [1, 2, 3, 1, 2, 3, 1]

// Set
let res = [...new Set(arr)]
console.log(res)
// [ 1, 2, 3 ]

let res2 = Array.from(new Set(arr))
console.log(res2)
// [ 1, 2, 3 ]

// Object
let unique = (arr) => {
    var container = {}
    return arr.filter((item, index) => container.hasOwnProperty(item) ? false : (container[item] = true))
}
let res3 = unique(arr)
console.log(res3)
// [ 1, 2, 3 ]

// indexOf+filter
let unique2 = (arr) => arr.filter((item, index) => arr.indexOf(item) === index)
let res4 = unique2(arr)
console.log(res4)
// [ 1, 2, 3 ]

// 排序后左右对比去重
let sort = (a, b) => {
    return a - b
}
let middleArr = arr.sort()
let res5 = []
for (let i = 0; i < middleArr.length; i++) {
    if (middleArr[i] !== middleArr[i + 1]) {
        res5.push(middleArr[i])
    }

}
console.log(res5)
// [ 1, 2, 3 ]


// filter+indexOf+lastIndexOf前后去重
let res6 =arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))
console.log(res6)
// []