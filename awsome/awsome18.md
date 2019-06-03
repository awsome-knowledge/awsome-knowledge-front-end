动态路由的创建，主要是使用 path 属性过程中，使用动态路径参数，以冒号开头
{
    path: /user/:id
    component: User
}
参数值会被设置到 this.$route.params 下，所以通过这个属性可以获取到动态参数
const User = {
    template: '<div>User {{ $route.params.id }}</div>'
}
