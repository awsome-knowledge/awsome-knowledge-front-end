全局、单个路由独享的导航钩子、组件内
全局：beforeEach（to, from, next）
单独：它是在路由配置上直接进行定义的
 routes: [
   {
    path: '/file',
 
component: File,

 beforeEnter: (to, from ,next) => {
 // do someting
  }
  }
 ]
