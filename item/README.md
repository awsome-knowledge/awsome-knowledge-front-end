# awsome-knowledge-front-end
## 目录

### 公司项目

1. #### 如果系统中数据过多的情况下，算法能通过吗（知衣科技）


---

[[↑] 回到顶部](#awsome-knowledge-front-end)

2. #### 目前公司的技术栈（知衣科技）
vue+element+node+mongo+es

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

3. #### iframe由于浏览器的同源策略，Navigation获取不到一些防护性高的网站的dom
x-frame-option:dene出现禁止访问

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

4. #### 在xChair-server项目中我不能直接获取到三种生产线状态（关机运行和空转） 
主要是从事后端部分，拿取采集器（记录所有的家具商品的属性）上传的十六进制串，可以解析出某一部分属性，但是需要推导出额外的属性。比如，需要根据商品的现有属性推导出该条生产线的生产状态。
通过比较当前商品的数据和上一个入库的商品的入口量，如果前者大那就是运行
如果后者大，那数据纠错（将上一个数据清除）
如果两者相同，那么又分为两种情况
第一种就是超过了空转时间（约定为5min），这个就是关机
第二种在5min中内，就是空转
但是里面还有细节，比如说设备的跌落和触碰

工人17点下班到第二天7点上班，采集器才有后续数据。这段17点到次日7点的数据在当天看来才能不为空。

为了避免相同的状态被分割，所以这里需要每次执行状态判断方法的时候，需要将相同的状态的结束时间延长至最新状态的时间。

有个接口需要获取当天0点到次日0点的状态和各个状态的时间和，引入node定时包设定0点定时任务，将状态在0点分割。各个状态时间取出求和是简单的。

5. #### 公司怎么自动化部署
##### 题目： 公司怎么自动化部署（个推一面）
1. 搭建gitlab
2. 搭建jenkins，并且为项目配置好任务
3. 上传代码，任务监听到后，执行启动脚本

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

6. #### 型号多种情况
由于操作人员手误，采集器传过来多个例如'aecredafdfafdadfasdfdfasd'解析为'231确定21取消确定',需转化为'231'
'dfasefaweasdfasdfasd'解析为'342121确定确定确定'，需转化为'342121'

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

7. #### ACAO
对于预检请求来说，如果你使用过 Node 来设置 CORS 的话，可能会遇到过这么一个坑。

以下以 express 框架举例：

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
  )
  next()
})
该请求会验证你的 Authorization 字段，没有的话就会报错。

当前端发起了复杂请求后，你会发现就算你代码是正确的，返回结果也永远是报错的。因为预检请求也会进入回调中，也会触发 next 方法，因为预检请求并不包含 Authorization 字段，所以服务端会报错。

想解决这个问题很简单，只需要在回调中过滤 option 方法即可

res.statusCode = 204
res.setHeader('Content-Length', '0')
res.end()

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

8. #### 流量触发规则
小事件触发大规则的难题
状态机方案
小规则触发大规则，则落盘
过期则取消
小事件：aaabbcdcbabc
大规则：ABC

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

9. #### github上的开源项目
navigation的网站收藏和导航平台，解决技术人员和设计人员查找网站的问题

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

10. #### 讲简历中提到的一个项目，并且讲解服务端渲染和前端渲染的优缺点？为什么你的项目会选择服务端渲染？
navigation的网站收藏和导航平台，解决技术人员和设计人员查找网站的问题

---

[[↑] 回到顶部](#awsome-knowledge-front-end)
