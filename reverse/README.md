# awsome-knowledge-front-end
## 目录
1. [前端性能优化(海康二面)](#项目中使用过哪些优化方法)
2. [页面的渲染过程](#页面的渲染过程)
3. [静态资源或者接口等如何做缓存优化](#静态资源或者接口等如何做缓存优化)
4. [当前页面出现脚本错误，页面DOM节点太多，会出现什么问题？如何优化？](#script_error)
5. [大数据量性能优化怎么做到的（海康二面）](#large_data_performance_optimization)
6. [echarts如果做到10000条数据展示不能用滚动轴（海康二面）](#echarts_10000_question)
## 题目

1. #### 项目中使用过哪些优化方法
参阅[前端性能优化 24 条建议（2020）](https://segmentfault.com/a/1190000022205291)

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

2. #### 页面的渲染过程
参阅[浏览器渲染页面过程与页面优化](https://segmentfault.com/a/1190000010298038)

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

3. #### 静态资源或者接口等如何做缓存优化
静态资源优化方案，基本上要实现这么几个东西：
- 配置超长时间的本地缓存 —— 节省带宽，提高性能
- 采用内容摘要作为缓存更新依据 —— 精确的缓存控制
- 静态资源CDN部署 —— 优化网络请求
- 更资源发布路径实现非覆盖式发布 —— 平滑升级

参阅[Web静态资源缓存及优化](https://zhuanlan.zhihu.com/p/30780216)

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

4. #### <div id="script_error"></div>当前页面出现脚本错误，页面DOM节点太多，会出现什么问题？如何优化？
- 重复利用dom结构，创建虚拟列表
- 使用事件委托，将监听事件绑定到父元素上

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

5. #### <div id="large_data_performance_optimization"></div>大数据量性能优化怎么做到的（海康二面）
虚拟列表

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

6. #### <div id="echarts_10000_question"></div>echarts如果做到10000条数据展示不能用滚动轴（海康二面）
使用图片替代

---

[[↑] 回到顶部](#awsome-knowledge-front-end)
