console.log(1)

setTimeout(() => {
    console.log(2)
    Promise.resolve().then(() => {
        console.log(3)
    })
});

new Promise((resolve, reject) => {
    console.log(4)
    resolve(5)
    Promise.resolve().then(() => console.log(8))
}).then((data) => {
    console.log(data)
})

setTimeout(() => {
    console.log(6)
});

console.log(7)

// 1
// 4
// 7
// 8
// 5
// 2
// 6
// 3