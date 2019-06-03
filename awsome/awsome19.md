params：/router1/:id ，/router1/123，/router1/789 ,这里的id叫做params
query：/router1?id=123 ,/router1?id=456 ,这里的id叫做query
传参是this.$router,接收参数是this.$route
$router为VueRouter实例，想要导航到不同URL，则使用$router.push方法
$route为当前router跳转对象，里面可以获取name、path、query、params等
this.$router.push({
       path:'/openAccount',
       query:{id:id}
     });
this.$router.push({
     name:'/openAccount',
     params:{
       id: id
     }
   })
params传参，push里面只能是 name:'xxxx',不能是path:'/xxx',因为params只能用name来引入路由，
如果这里写成了path，接收参数页面会是undefined！！！
query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，
而params相当于post请求，参数不会再地址栏中显示
