# 如何添加html元素的事件处理，有几种方法

 ```text

 html的元素的事件就只用控件自带的的那么几个，
 如onclick,onmousedown等等都是调用脚本执行

 方法：
 1. 在控件上直接激发事件
 2. 在页面加载的时候就调用脚本激发控件的某个事件
 3. 在后台利用后台代码强行执行控件的事件。
   或：
 1. 为HTML元素的事件属性赋值 
 2. 在JS中使用el.on*** = function() {…}
 3. 使用DOM2的添加事件的方法 addEventListener或attachEvent
```
