function compose(...fn) {
    if (!fn.length) return (v) => v;
    if (fn.length === 1) return fn[0];
    debugger
    return fn.reduce((pre, cur) =>
        (...args) =>
            pre(cur(...args))
    );
}
function a1(x) {
    return 1 * x
}

function a2(x) {
    return 2 * x
}

function a3(x) {
    return 3 * x
}

function a4(x) {
    return 4 * x
}
const c = compose(a1, a2, a3, a4)
console.log(c(1))