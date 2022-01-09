// 类型注解:是一种轻量级的为函数或者变量添加的约束
(function () {
    // str是string类型的
    function showMsg(str) {
        return '床前明月光,' + str;
    }
    var msg = '疑是地上霜';
    // msg是一个数组
    // let msg = [10, 20, 30] 
    // 智能的错误提示信息
    console.log(showMsg(msg));
})();
