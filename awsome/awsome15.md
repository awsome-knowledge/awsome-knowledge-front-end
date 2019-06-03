（1）通过全局方法 Vue.use() 使用插件
（2）添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现（一般不这么操作）
（3）Vue.js 的插件有一个公开方法 install
【声明插件】——【写插件】——【注册插件】——【使用插件】
(1)声明插件
先写一个js文件，这个js文件就是插件文件，里面的基本内容如下：
export default {
    install: function (Vue, options) {
        // 添加的内容写在这个函数里面
    }
};
(2) 注册插件
如果使用过Vue-router，就很好理解，通过import引入后，通过 Vue.use(插件名) 注册插件；
(3) 写插件、使用插件按照官方文档，写插件有四种方法，先给出官方的代码：
//以下内容都是添加到上面install的函数里面的
// 1. 添加全局方法或属性
Vue.myGlobalMethod = function () {
    // 逻辑...
}
// 2. 添加全局资源
Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
        // 逻辑...
    }
    ...
})
// 3. 注入组件
Vue.mixin({
    created: function () {
        // 逻辑...
    }
    ...
})
// 4. 添加实例方法
Vue.prototype.$myMethod = function (options) {
    // 逻辑...
}
