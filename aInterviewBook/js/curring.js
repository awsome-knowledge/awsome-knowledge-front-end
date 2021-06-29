
function currying(fn, ...args) {
  const length = fn.length;
//   console.log("fn.length:",fn.length)
//   3
  let allArgs = [...args];
//   console.log("allArgs:",allArgs)
// [1]
  const res = (...newArgs) => {
//   console.log("newArgs:",newArgs)
//   [2,3]
    allArgs = [...allArgs, ...newArgs];
    // [1,2,3]
    // 如果传入的参数刚好等于函数需要的长度，返回函数执行结果
    if (allArgs.length === length) {
      return fn(...allArgs);
    } else {
        // 返回res这个函数
      return res;
    }
  };
  return res;
}

// 用法如下：
const add = (a, b, c) => a + b + c;
const a = currying(add, 1);
console.log(a(2,3))