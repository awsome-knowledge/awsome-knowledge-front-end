# vue生命周期？
beforeCreate：此时获取不到prop和data中的数据；
created：可以获取到prop和data中的数据；
beforeMount：获取到了VDOM;
mounted：VDOM解析成了真实DOM;
beforeUpdate：在更新之前调用；
updated：在更新之后调用；
keep-alive：切换组件之后，组件放进activated，之前的组件放进deactivated；
beforeDestory：在组件销毁之前调用，可以解决内存泄露的问题，如setTimeout和setInterval造成的问题。
destory：组件销毁之后调用。