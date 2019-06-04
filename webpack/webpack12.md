用object.defineProtery把对象转化为get和set，改变数据会触发set函数，set改变数据源后，
会通知一个叫观察者（watch）的东西，watch收到通知后，再进行视图渲染，局部更新。
get和set也可以监听到属性什么时候被改过。
