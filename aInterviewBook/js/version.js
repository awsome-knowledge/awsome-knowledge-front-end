arr = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
arr.sort((a, b) => {
    let i = 0;
    console.log('a:',a)
    console.log('b:',b)
//     a: 0.1.1
// b: 2.3.3
// a: 0.1.1
// b: 0.302.1
// a: 2.3.3
// b: 0.302.1
// a: 0.1.1
// b: 4.2
// a: 0.302.1
// b: 4.2
// a: 2.3.3
// b: 4.2
// a: 0.1.1
// b: 4.3.5
// a: 0.302.1
// b: 4.3.5
// a: 2.3.3
// b: 4.3.5
// a: 4.2
// b: 4.3.5
// a: 0.1.1
// b: 4.3.4.5
// a: 0.302.1
// b: 4.3.4.5
// a: 2.3.3
// b: 4.3.4.5
// a: 4.2
// b: 4.3.4.5
// a: 4.3.5
// b: 4.3.4.5
    const arr1 = a.split(".");
    const arr2 = b.split(".");

    while (true) {
        const s1 = arr1[i];
        const s2 = arr2[i];
        i++;
        if (s1 === undefined || s2 === undefined) {
            return arr2.length - arr1.length;
        }

        if (s1 === s2) continue;

        return s2 - s1;
    }
});
console.log(arr);