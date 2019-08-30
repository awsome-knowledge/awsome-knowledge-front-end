    // 获取argument对象 类数组对象 不能调用数组方法
    function test1() {
        console.log('获取argument对象 类数组对象 不能调用数组方法', arguments);
        // arguments.push(1)
        // TypeError: arguments.push is not a function
    }

    // 获取参数数组  可以调用数组方法
    function test2(...args) {
        // args.push(1)
        // [ 1, 2, 3, 1 ]
        console.log('获取参数数组  可以调用数组方法', args);
    }

    // 获取除第一个参数的剩余参数数组
    function test3(first, ...args) {
        console.log('获取argument对象 类数组对象 不能调用数组方法', first, args);
    }

    // 遗传参数
    function test4(first, ...args) {
        fn(...args);
        fn(...arguments);
    }

    function fn() {
        console.log('遗传', ...arguments);
    }

    test1(1, 2, 3);
    test2(1, 2, 3);
    test3(1, 2, 3);
    test4(1, 2, 3);