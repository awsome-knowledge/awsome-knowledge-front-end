# awsome-knowledge-front-end
## 目录
1. [前端性能优化(海康二面)](#项目中使用过哪些优化方法)
2. [页面的渲染过程](#页面的渲染过程)
3. [静态资源或者接口等如何做缓存优化](#静态资源或者接口等如何做缓存优化)
4. [当前页面出现脚本错误,页面DOM节点太多，会出现什么问题？如何优化？](#当前页面出现脚本错误页面DOM节点太多会出现什么问题如何优化)
5. [大数据量性能优化怎么做到的（海康二面）](#大数据量性能优化)
6. [echarts如果做到10000条数据展示不能用滚动轴（海康二面）](#echarts如果做到10000条数据展示不能用滚动轴)
## 题目

### 性能优化

1. #### 项目中使用过哪些优化方法
前端性能优化(海康二面/字节跳动)

减少前端的请求，避免轮询

<details><summary><b>答案</b></summary>
提高前端性能的方法

要优化提升前端性能，有以下两大方法：

1. 减少页面加载所需时间；

2. 提升用户角度的观感体验（让用户觉得页面更快）；

减少页面加载所需时间，可以从请求数量、请求并发度及网络传输时间等方面着手；提升用户观感，则主要从让页面尽快展示入手；下面一一介绍：

##### 减少网络请求时间

浏览器从服务端获取HTML文档和资源都需要经历“DNS解析——建立连接——获取连接——断开连接”的过程；如果能减少DNS解析和文件在网络上传输的时间，性能自然能得到提升。

①使用DNS缓存技术

使用DNS缓存技术可以让用户获得更快的DNS解析时间，一般而言，由于浏览器本身就具有一定的DNS缓存机制，所以服务端的DNS缓存并不能带来太大的性能提升。

②减少需要传输的文件尺寸

在网络带宽有限的情况下，减少传输的文件尺寸可以提升很大的性能。常见的有将文件进行压缩的方法，除此之外，还有使用混淆等方法尽量减少js文件和样式表的大小，从js文件和

样式表中去除不需要使用的部分等，都可以起到减少需要传输文件尺寸的作用。

③加快文件传输速度

Internet网站的用户通常分布在一个较广阔的区域内，Internet本身的多层次网络结构导致从某一个节点到另一些节点之间的可用带宽和网络传输速度都比较慢；这种情况下使用CDN技术，

让用户尽可能访问到对用户节点而言更快速的服务器就可以加快文件传输速度。

国内而言，移动联通电信三大运营商之间并没有建立良好的互联互通，通常需在三个服务商所在网络中设置GDN服务器；另外，出于地域原因，建立CDN也是种常见的方法。

CDN(Content Delivery Network):内容分发网络。其基本思路是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。

 

##### 减少发送的请求数量

在短连接情况下，每个请求都需要经过“建立连接——发送数据——断开连接”的过程，因此减少请求数量可带来显著的性能提升；即使使用持久连接方式，由于浏览器与每个服务器之间的

建立的持久连接数量是有限的，减少必须的请求也可以带来性能提升。

①利用浏览器缓存

为了充分利用浏览器缓存，需要在服务端保证每个可以被缓存的资源在被服务端返回时附带合适的expries头信息；此外，为了保证有尽可能多的内容可以被缓存，也要求网站尽可能将页面中较少改变的部分提取出来。

△保证服务端返回资源的响应头带有Expires信息，使得资源可以被缓存；

△用引用方式引用样式表和js脚本。如果使用内嵌的样式表和js脚本，每次HTML文档的变化都会导致样式表和js脚本重新加载，无法充分利用缓存；当然，在没有缓存或样式表与js脚本

经常变动的情况下，引用方式使用样式表和js脚本反而会导致更多的http请求；

△使用更多的URI可以被缓存。

②使用合并的图片文件

当页面包含很多个小图片文件时，可以考虑将小图片文件合并为一个大的图片文件，在页面使用CSS Sprites技术将大图片显示为分隔开的小图片，在没有缓存的情况下，将许多小图片合并为

大图片文件可以大量减少http请求数。

 
##### 提高浏览器下载的并发度

①js文件放在HTML文档最后

在某些浏览器上，js文件的下载和执行会阻止其他页面资源文件的下载和执行，之道js文件下载和执行完，其他资源文件才可以开始下载和执行，因此，将js文件放在HTML文档最后可以保证

js文件不会阻止任何其他元素的下载。

②使用多个域名

浏览器对服务器的连接限制是基于域名的。比如S服务器有2个域名a.com和b.com，在浏览器限制最多与同一个域名建立2个连接时，浏览器实际上可以与服务器S建立4个连接；

一般大型网站都拥有几个域名，根据文件类型（静态资源、动态资源、js脚本等）选择合适的服务器进行部署，也是个很好的做法。

 
##### 让页面尽早开始显示

①将样式表的引用放在HTML文档的开头（如放在<Head>标签中），这样可以使样式表在一开始就被下载下来，一旦样式表下载完成，浏览器就可以使用样式表中定义的样式开始在屏幕上

显示页面元素；另外，也避免了新样式表可能带来的屏幕显示的重绘。

②将js的引用放在HTML文档的最后，这样js文件的下载和执行会在所有页面都下载完成后，不会阻止其他页面元素的显示。从用户感官上说，js文件的下载和执行时间完全不会被用户感觉到。

PS：上面几项都是一些提升前端性能的通用方式，除这些之外，还有更多更细致的针对js文件或样式表的提升性能技巧，后续会不断更新。。。

三、常见的前端性能工具

下面简单介绍下几种常见的前端性能工具，具体使用方法及用途请自行查找资料。

1、Firebug工具

①Firebug工具是一个备受推崇的、强大的web开发工具，它提供了方便的查看页面元素功能，允许用户以鼠标指示、DOM树等方式查看任意页面元素；

②提供了JavaScript控制台，允许用户在控制台直接调试JavaScript；

③提供了可视化的CSS标尺，方便用户调整页面布局；

④提供了网路面板，允许用户获知每个页面被加载过程中的页面元素下载和执行细节；

⑤还提供了良好的扩展，比如YSlow和Page Spend工具就是基于其扩展而建立；

⑥Firebug以Firefox的插件形式存在，需要安装Firebug；

⑦Firebug给出了浏览器请求URL过程中发生的全部HTTP交互，列出每个元素的返回码、大小及按照时间序列给出的页面元素下载时间等信息；

2、HttpWatch工具

①HttpWatch是可以在IE和Firefox下使用的一个商业网页数据分析工具，其提供了一个基于basic的免费版本；

②安装简单，下载安装包后在Windows平台上直接执行即可；

③与Firebug类似，HttpWatch也给出了浏览器请求URL过程中发生的全部HTTP交互，列出每个元素的返回码、大小及按照时间序列给出的页面元素下载时间等信息；

④HttpWatch在Page Event选项卡中给出了Render Start（浏览器开始渲染页面的时间）、Page Load（onload事件触发时间）和HTTP Load时间（最后一个请求发送和接受完毕的时间点）；

⑤以上三个时间对应Firebug中的第一个Paint事件发生时间、onload时间以及收到最后一个HTTP响应的结束时间；

3、Chrome自带的开发工具

①chrome是Google推出的一款浏览器产品，特点是快速、安全、简洁。

②chrome开发工具在对URL的请求过程的发生的HTTP交互信息和Firebug以及HttpWatch很相似；

③chrome开发工具还提供了非常详尽的浏览器时间信息；

4、Page Speed工具

Page Speed是一个基于Firebug工具的前端性能优化工具，由Google创建并发布，其依据一些规则对页面进行检查，查找可优化的地方并给出响应建议。

5、DynaTrace AJAX Edition工具

①DynaTrace AJAX Edition是Windows平台上的免费工具，其提供了非常强大的前端性能测试支持，主要针对Ajax技术的应用而开发；

②DynaTrace AJAX Edition能够给出浏览器访问给定的URL时的许多信息，如页面各元素下载和执行时间点、页面对浏览器的缓存使用情况，并给出一些优化建议；

③DynaTrace AJAX Edition工具最突出的功能是对页面的JavaScript的调优；

</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

2. #### 页面的渲染过程
<details><summary><b>答案</b></summary>

1. 解析HTML，构建DOM树

2. 解析CSS，生成CSS规则树

3. 合并DOM树和CSS规则树，生成render树

4. 布局render树

5. 绘制render树，即绘制页面像素信息

6. GPU将各层合成，结果呈现在浏览器窗口中。

</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)




3. #### 静态资源或者接口等如何做缓存优化
<details><summary><b>答案</b></summary>
对于页面中静态资源（html/js/css/img/webfont），理想中的效果：

页面以最快的速度获取到所有必须静态资源，渲染飞快；
服务器上静态资源未更新时再次访问不请求服务器；
服务器上静态资源更新时请求服务器最新资源，加载又飞快。
总结下来也就是2个指标：

静态资源加载速度
页面渲染速度

静态资源加载速度引出了我们今天的主题，因为最直接的方式就是将静态资源进行缓存。页面渲染速度建立在资源加载速度之上，但不同资源类型的加载顺序和时机也会对其产生影响，所以也留给了我们更多的优化空间。

当然除了速度，缓存还有另外2大功效，减少用户请求的带宽和减少服务器压力。

![](https://images.qiufeihong.top/v2-d7ae9c99073bb4f2c2961fff7bdadbfc_r.jpg)

常见缓存类型
1、浏览器缓存

对于前端而言，这可能是我们最容易忽略的缓存类型，原因在于大部分设置都在服务器运维层面上进行，不属于前端开发的维护范围。但静态资源的内容更新时机其实前端是最清楚的，如果能在理解浏览器缓存策略的基础上合理配置效果最佳。

浏览器缓存策略一般通过资源的Response Header来定义，html文件在很早之前的规范里也可以通过Meta标签的http-equiv来定义。

![](https://images.qiufeihong.top/v2-79a7cbb2b75bdedd3627f4462ecef75a_hd.jpg)
可在w3c的官方文档中查看所有HTTP Response Header字段的定义，跟缓存相关的主要有上图中被圈出来的几个：

Cache-Control：
public：响应被缓存，并且在多用户间共享。
private：默认值，响应只能够作为私有的缓存(e.g., 在一个浏览器中)，不能再用户间共享；
no-cache：响应不会被缓存,而是实时向服务器端请求资源。
max-age：数值，单位是秒，从请求时间开始到过期时间之间的秒数。基于请求时间（Date字段）的相对时间间隔，而不是绝对过期时间；
注：HTTP/1.0 没有实现 Cache-Control，所以为了兼容HTTP/1.0出现了Pragma字段。

Pragma: 只有一个用法Pragma: no-cache，它和Cache-Control:no-cache作用一模一样。（Cache-Control: no-cache是http 1.1才提供的， 因此Pragma: no-cache可以使no-cache应用到http 1.0 和http 1.1。）
Expires：指定了在浏览器上缓冲存储的页距过期还有多少时间，等同Cache-control中的max-age的效果，如果同时存在，则被Cache-Control的max-age覆盖。若把其值设置为0，则表示页面立即过期。并且若此属性在页面当中被设置了多次，则取其最小值。
注：这个规则允许源服务器，对于一个给定响应，向 HTTP/1.1（或之后）缓存比 HTTP/1.0 提供一个更长的过期时间。

Date：生成消息的具体时间和日期；
Last-Modified/If-Modified-Since：本地文件在服务器上的最后一次修改时间。缓存过期时把浏览器端缓存页面的最后修改时间发送到服务器去，服务器会把这个时间与服务器上实际文件的最后修改时间进行对比，如果时间一致，那么返回304，客户端就直接使用本地缓存文件。
Etag/If-None-Match：(EntityTags)是URL的tag，用来标示URL对象是否改变，一般为资源实体的哈希值。和Last-Modified类似，如果服务器验证资源的ETag没有改变（该资源没有更新），将返回一个304状态告诉客户端使用本地缓存文件。Etag的优先级高于Last-Modified，Etag主要为了解决 Last-Modified 无法解决的一些问题。
文件也许会周期性的更改，但是他的内容并不改变，不希望客户端重新get；
If-Modified-Since能检查到的粒度是s级；
某些服务器不能精确的得到文件的最后修改时间。


缓存策略执行过程

![](https://images.qiufeihong.top/v2-d7104809009c0561050ca9056b24bd4a_hd.jpg)
本地缓存过期后，浏览器会像服务器发送请求，request中会携带以下两个字段：

If-Modified-Since：值为之前response中Last-Modified；
If-None-Match：值为之前response中Etag（如果存在的话）；
其中在图右侧的“file modified?”判断中，服务器会读取请求头这两个值，判断出客户端缓存的资源是否最新，如果是的话服务器就会返回HTTP/304 Not Modified响应头，但没有响应体。客户端收到304响应后,就会从缓存中读取对应的资源；否则返回HTTP/200和响应体。



Html Meta

meta是html语言head区的一个辅助性标签，其中的http-equiv字段定义了服务器和用户代理的一些行为。在之前的规范中，meta的http-equiv字段中有以下值与http header缓存相关的字段功能类似。

Cache-Control
Pragma
Expires
使用方法：

<meta http-equiv="Cache-Control" content="no-cache" /> <!-- HTTP 1.1 -->
<meta http-equiv="Pragma" content="no-cache" /> <!-- 兼容HTTP1.0 -->
<meta http-equiv="Expires" content="0" /> <!-- 资源到期时间设为0 -->
但现在w3c的规范字段中这些值已经被移除，一个很好的理由是：

Putting caching instructions into meta tags is not a good idea, because although browsers may read them, proxies won't. For that reason, they are invalid and you should send caching instructions as real HTTP headers.
其实也很好理解，写在meta标签中代表必须解析读取html的内容，但代理服务器是不会去读取的。大多浏览器已经不再支持，会忽略这样的写法，所以缓存还是通过HTTP headers去设置。

注：HTTP Headers中的缓存设置优先级比meta中http-equiv更高一些。



2、HTML5 Application Cache

Application Cache是html5引入的本地存储方案之一，可以构建离线缓存。目前除IE10-外其他浏览器均支持。

使用方法

a、增加manifest文件

application cache是通过mannifest文件来管理的，manifest文件是简单的文本文件，内容是需要被缓存供离线使用的文件列表，及不需要被缓存或读取缓存失败的文件控制。

文件的第一行必须是 CACHE MANIFEST
＃开头的行作为注释语句
网站的缓存不能超过5M
文件资源路径可以使用绝对路径也可以使用相对路径
文件列表中任意一个缓存失败都会导致整个缓存失效
既可以站点使用同一个minifest文件，也可以每个页面使用一个
文件包含3个指令

CACHE：需要缓存的资源文件,浏览器会自动缓存带有manifest属性的html页面；
NETWORK：不需要缓存的文件，可以使用通配符；
FALLBACK：无法访问缓存文件的备选文件，可以使用通配符。
b、服务器配置

mannifest文件可以使用任意拓展名，但需要在服务器中添加MIME类型匹配，使用apache比较简单，如果使用.manifest作为拓展名在apache配置文件中添加。

AddType text/cache-manifest .appcache
c、html中引用

<html lang="zh" manifest="main.manifest">
注：千万不要把manifest文件本身放在缓存文件列表中，不然浏览器无法更新manifest文件文件，最好在manifest文件的http headers中设置其立即过期。



缓存加载及更新过程

1、事件

cached/checking/downloading/error/noupdate/obsolete/progress/updateready
2、执行过程

第一次加载：

Creating Application Cache with manifest（访问到带manifest属性的html文件，将manifest文件存储，加载html文件及其他资源文件）；
Application Cache Checking event（检查要缓存的文件列表）
Application Cache Downloading event（开始下载缓存文件）
Application Cache Progress event (0 of 4)（依次下载缓存文件）
……
Application Cache Progress event (4 of 4)
Application Cache Cached event（文件缓存完毕）
第二次加载：

Document was loaded from Application Cache with manifest（从缓存中读取html文件和其他静态资源文件，供页面展示）
Application Cache Checking event（获取新的manifest文件，检查是否更新）
是：重新下载缓存文件，供下次访问使用（不会影响当前浏览器展示内容）
Application Cache Downloading event（开始下载缓存文件）
Application Cache Progress event (0 of 4)（依次下载缓存文件）
……
Application Cache Progress event (4 of 4)
Application Cache UpdateReady event（缓存文件更新完毕）
否
Application Cache NoUpdate event（啥也不做）
删除html中manifest文件引用

Document was loaded from Application Cache with manifest（从缓存中读取html文件和其他静态资源文件，供页面展示）
Application Cache Checking event（获取新的manifest文件，检查是否更新）
Application Cache Obsolete event（删除本地缓存中的所有文件，不再使用缓存）


一些问题

Application Cache会默认缓存引用manifest文件的HTML文档，对于动态更新的html页面来说是个坑（可以使用tricky的iframe嵌入方式来避免）；
只要缓存列表中的一个资源加载失败，所有文件都将缓存失败；
如果资源没有被缓存，而又没有设置NETWORK的情况下，将会无法加载，所以Network中必须使用通配符配置；
缓存更新后第一次只能加载manifest文件，其他静态资源需要第二次加载才能看到最新效果；
缓存文件清单中的文件本身更新浏览器是不会重新缓存，那怎么告诉浏览器缓存需要更新了呢？
更新manifest文件：修改注释的版本号或者日期。
通过Application Cache提供的接口（window.applicationCache.swapCache）来检查更新。
还有最后一个问题，该标准已经从 Web 标准中删除……

该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。在此刻使用这里描述的应用程序缓存功能高度不鼓励; 它正在处于从Web平台中被删除的过程。请改用Service Workers 代替。


3、PWA(Service Worker)

PWA全称为“Progressive Web Apps”，渐进式网页应用，Service Worker是其几大核心技术之一。

Service worker is a programmable network proxy, allowing you to control how network requests from your page are handled.
没错，这就是官方建议替代Application Cache的方案。早在2014年，W3C就公布了Service Worker的草案。它作为一个独立的线程，是一段在后台运行的脚本。它的出现使得web app也可以具有类似native app的离线使用、消息推送、后台自动更新等能力。

不过它有以下限制：

不能访问 DOM
不能使用同步 API
需要HTTPS协议(http://localhost 或 http://127.0.0.1也可)
虽然现在其浏览器支持情况并不是很广泛，但以后应该会大面积支持。本文做简单介绍，具体使用方法可以参考官方文档《The Offline Cookbook》。

简单使用

1、首先，要使用Service Worker，需要添加一个Service Worker的js的文件，然后在我们的html页面中注册对这个文件的引用。

index.html
```js
<script>
navigator.serviceWorker
    .register('./sw.js')
   .then(function (registration) {
       // 注册成功
   });
</script>
```

2、其次，我们在js文件中补充Service Worker的生命周期事件。Service Worker生命周期有三部曲：注册，安装和激活。
![](https://images.qiufeihong.top/v2-b4e3e6f7863c74d291182906b35df7e9_hd.jpg)
一般来说我们需要注册的有3个事件：

self.addEventListener('install', function(event) { 
  /* 安装后... */
  // cache.addAll：把缓存文件加进来，如a.css,b.js
});

self.addEventListener('activate', function(event) {
 /* 激活后... */
 // caches.delete ：更新缓存文件
});

self.addEventListener('fetch', function(event) {
  /* 请求资源后... */ 
  // cache.put 拦截请求直接返回缓存数据
});
对于获取文件和缓存文件，Service worker依赖了两个 API：Fetch (通过网络重新获取内容的标准方式) 和 Cache（应用数据的内容存储，此缓存独立于浏览器缓存和网络状态）。

React脚手架create-react-app中已经内置了PWA功能，我们来看下打包后的build文件夹下的文件结构：


index.html文件中引用了static/js/main.js，main.js中注册了service-worker.js。service-worker.js中我们可以看到有 precacheConfig（缓存列表）和 cacheName（版本号）两个变量。断开网络，我们看到precacheConfig列表中的文件仍能从本地加载。


更新机制

以注册文件为service-worker.js为例，每次访问ServiceWorker控制的页面，浏览器都会加载最新的service-worker.js文件，跟当前service-worker.js文件对比，只要内容有任何不同，浏览器都会获取并安装新文件。但是不会立即生效，原有的ServiceWorker还是会运行，只有当ServiceWorker控制的页面全部关闭后，新的ServiceWorker才会被激活。



4、LocalStorage

LocalStorage虽是浏览器端缓存一种，但有多少人会用它来缓存文件呢？首先缓存读取需要依靠js的执行，所以前提条件就是能够读取到html及js代码段；其次文件的版本更新控制会带来更多的代码层面的维护成本，所以LocalStorage更适合关键的业务数据而非静态资源。



5、CDN缓存

这是一种以空间换时间的方案，减少了用户的访问延时，也减少的源站的负载。

客户端浏览器先检查是否有本地缓存是否过期，如果过期，则向CDN边缘节点发起请求，CDN边缘节点会检测用户请求数据的缓存是否过期，如果没有过期，则直接响应用户请求，此时一个完成HTTP请求结束；如果数据已经过期，那么CDN还需要向源站发出回源请求。

更新机制

CDN边缘节点缓存策略因服务商不同而不同，但一般都会遵循http标准协议，通过http响应头中的Cache-control: max-age的字段来设置CDN边缘节点数据缓存时间。另外可通过CDN服务商提供的“刷新缓存”接口来更新缓存。

prebrowsing
预加载是浏览器对将来可能被使用资源的一种暗示，一些资源可以在当前页面使用到，一些可能在将来的某些页面中被使用。作为开发人员，我们比浏览器更加了解我们的应用，所以我们可以对我们的核心资源使用该技术。
通过prebrowsing可以提前缓存部分文件，可作为一种静态资源加载优化的手段。prebrowsing有以下几种：

dns-prefetch：DNS预解析，告诉浏览器未来我们可能从某个特定的 URL 获取资源，当浏览器真正使用到该域中的某个资源时就可以尽快地完成 DNS 解析。多在使用第三方资源时使用。
preconnect：预连接，完成 DNS 预解析同时还将进行 TCP 握手和建立传输层协议。
prerender：预渲染，预先加载文档的所有资源，类似于在一个隐藏的 tab 页中打开了某个链接 – 将下载所有资源、创建 DOM 结构、完成页面布局、应用 CSS 样式和执行 JavaScript 脚本等。
prefetch：预获取，使用 prefetch 声明的资源是对浏览器的提示，暗示该资源可能『未来』会被用到，适用于对可能跳转到的其他路由页面进行资源缓存。被 prefetch 的资源的加载时机由浏览器决定，一般来说优先级较低，会在浏览器『空闲』时进行下载。
preload：预加载，主动通知浏览器获取本页的关键资源，只是预加载，加载资源后并不会执行；
prefetch & preload

对于前面三种不少浏览器已经内部默认做了优化，而prefetch & preload需要开发者根据情况代码手动设置。

兼容性

从prefetch和preload的浏览器支持情况来看，prefetch除了safari外基本浏览器都有所支持，但preload作为新出的规范，兼容性差些，但safari正慢慢支持这一标准，如在iOS的safari高级选项的试验性Webkit功能中已经有Link Preload这一选项。

优先级

preload 是声明式的 fetch，可以强制浏览器请求资源，同时不阻塞文档 onload 事件，是对浏览器指示预先请求当前页需要的资源（关键的脚本，字体，主要图片）。

prefetch 提示浏览器这个资源将来可能需要，但是把决定是否和什么时间加载这个资源的决定权交给浏览器。prefetch 应用场景稍微有些不同 —— 用户将来可能在其他部分（比如视图或页面）使用到的资源。

从以上的描述可以看出，对于preload和prefetch声明，preload明显高于prefetch。

注：prebrowsing 好用但千万不要乱用，除非你非常明确会加载要prebrowsing的文件，不然会加重浏览器负担适得其反。

应用

接触过Next.js的同学都知道，next.js提供了一个具有预获取功能的模块：next/prefetch，看起来功能与prefetch类似，但其优先级与preload类似。

<Link prefetch href='/'><a>Home</a></Link>

<Link prefetch href='/features'> <a>Features</a></Link>

{ /* we imperatively prefetch on hover */ }
<Link href='/about'>
  <a onMouseEnter={() => { Router.prefetch('/about'); console.log('prefetching /about!') }}>About</a>
</Link>

<Link href='/contact'><a>Contact (<small>NO-PREFETCHING</small>)</a> </Link>

由于features链接设置了prefetch，访问Index页面时浏览器会在页面加载完毕后从服务器取feature.js的文件，在index页面访问features页面时不会再从服务器请求features.js文件，直接从本地缓存中读取；contact没有做处理，从index访问contact时会从服务器请求concact.js文件。

我们还可以发现，在next.js打包出来的html文件头中，都会将index.js / error.js / app.js 3个文件作为preload加载，因为这3个文件是本页面中必须用到的资源。


优化尝试
不同文件类型

1、HTML文件

虽然大多数html只会在每次发布上线时才会改变，如更新js/css资源的引用地址，所以一般将HTTP Headers中设置一个比较短的max-age值，如cache-control: max-age=300，除此之外建议服务器开启Etag。

但以实时内容为主的网站（如金融类）为了页面的打开速度，会采取后台服务生产的方式 ，将所有首页数据全部生成到html中，省去用户首次加载时的后台接口请求等待时间。一般会设置cache-control: no-cache。



2、js/css/img文件

现在一般都通过文件名进行版本控制。Webpack打包命名可根据文件内容生成文件名的hash值，每次打包只有当内容改才重新生成hash值。此种情况之下，可以在HTTP Headers设置一个较大的缓存时间，如max-age=2592000，尽量避免304请求和服务器进行请求连接。

// js
output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
}
// css
new ExtractTextPlugin({
    filename: utils.assetsPath('css/[name].[contenthash].css'),
}),
3、webfont

webfont文件比较特殊，正如这篇文章中所说：

浏览器在DOMNode的CSS选择器中发现@font-face时才会下载web fonts文件，这个时候浏览器已经下载完成html/css/js文件；
如果在浏览器发现需要加载font文件之前就告诉浏览器下载font文件，会加快文件下载和页面加载速度。
其实不同浏览器下载font文件的时间不太一样，有的碰到css的声明就会加载，有的会等到dom节点匹配css声明时加载。



优化实践

根据以上罗列的缓存建议，对当前的一个移动端项目进行优化。项目背景如下：

React + + Mobx + Webpack
React-Router 单页 / bundle-loader动态加载 / 使用较大的webfont文件
1、缓存配置

对静态资源文件进行如上的HTTP Headers缓存配置；
所有的静态资源文件通过Service Worker进行缓存控制和离线化加载，示范如上不再赘述；
2、其他优化

以其中一个单页为例，页面效果如下：


动态加载的js

这个单页页面会打开几个小的页面（红色圈部分），通过webpack打包之后大概这个样子：

index.ef15ea073fbcadd2d690.js
static/js/0.1280b2229fe8e5582ec5.js
static/js/1.f3077ec7560cd38684db.js
static/js/2.39ecea8ad91ddda09dd0.js
static/js/3.d7ecc3abc72a136e8dc1.js
其中第一个index.js会在页面初次加载，其他4个js会在路由切换时动态加载。考虑下这个页面的业务场景，只要进入到这个页面，其他几个路由是一定会访问到的。所以如果在页面加载完成之后，趁户思考之际就主动把剩下几个js加载好，岂不完美。

在此选用了preload-webpack-plugin这个插件，它可以打包将动态路由进行预加载。

webpackConfig.plugins.push(new PreloadWebpackPlugin({
    rel: 'prefetch',
}));
rel属性还可以选择preload / prefetch模式。打包出来是这样：


访问页面可以看到，在不影响dom加载的情况下，浏览器预先加载了另外几个后面将会用到的js，当切换到对应路由时，也会直接从缓存取，不从服务器请求资源。



css文件

非动态加载(路由)页面的css会单独打包，在html文件中进行引用。除了使用一些打包插件优化代码体积外，可将css更细粒度拆分，如首页的css+弹窗css+页面标签切换的css等。除首页css外的先预加载，然后动态获取。但一般来说一个页面的css大小在合理的代码情况下经过gzip压缩后都不会过大，所以优化的效果并不会太明显。

动态加载路由中css没有单独拆分而是在路由的js中，所以只能随着js优化了。



webfont文件

对于font文件，除了减少文件大小，设置缓存时间之外，也可以通过预加载的方式提前让浏览器下载来提高首屏渲染速度。预加载webfont需要与webpack的html-webpack-plugin结合，打包时将制定的字体插入到html中。网上找了一圈没有找到现成的插件，自己来写一个。

1、写插件

fontpreload-webpack-plugin

2、用插件

安装插件
npm install fontpreload-webpack-plugin --save-dev
在webpack的config文件的HtmlWebpackPlugin插件之后增加：
const FontPreloadWebpackPlugin = require('fontpreload-webpack-plugin');

webpackConfig.plugins.push(new FontPreloadWebpackPlugin({
    rel: 'prefetch',
    fontNameList: ['fontawesome-webfont'],
    crossorigin: true,
}));
3、打包效果

</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

4. #### 当前页面出现脚本错误页面DOM节点太多会出现什么问题如何优化
当前页面出现脚本错误,页面DOM节点太多，会出现什么问题？如何优化？
<details><summary><b>答案</b></summary>
会影响加载速度，尤其是不必要的嵌套太深的时候

不利于seo，渲染耗时。
尽量不要嵌套太深层的节点

</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

5. #### 大数据量性能优化
大数据量性能优化怎么做到的（海康二面）

通过`vue-virtual-scroll-list`降低了浏览器的压力
优势：
- 整洁而且小巧
- 高性能的数剧列表
- 支持固定高度和可变高度
- 支持将滚动索引和偏移设置为任意
- 可以检测到滚动到顶部和底部的事件

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

6. #### echarts如果做到10000条数据展示不能用滚动轴
echarts如果做到10000条数据展示不能用滚动轴（海康二面）

用图片代替canvas画图，避免dom不必要的消耗。

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

7. #### 长列表优化
##### 题目:长列表优化(字节跳动)


长列表
- 分页渲染列表
通俗的说就是滚动加载，当检测滚动到页面底部的时候，请求分页数据。前端携带分页参数去请求后端数据，通过每次渲染少量数据的形式去实现长列表加载

实现思路：监听父元素的 scroll 事件，通过父元素的 scrollTop 判断是否到了页面是否到了页面底部，如果到了页面底部，就加载下一页的数据
```html
<template>
    <div ref="scroll" class="test-scroll" @scroll="testScroll">
        <div class="s-item" v-for="(item, index) in list" :key="index">{{item}}</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            list: []
        };
    },
    mounted () {
        for (let i = 0; i < 20; i++) {
            this.list.push(i);
        }
    },
    methods: {
        testScroll () {
            // 以window为滚动对象时
            // const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            // const clientHeight = window.innerHeight;
            // const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
            const { scrollHeight, clientHeight, scrollTop } = this.$refs.scroll;
            if (scrollHeight - 20 < scrollTop + clientHeight) {
                const len = this.list.length;
                for (let i = len; i < len + 20; i++) {
                    this.list.push(i);
                }
            }
        }
    }
};
</script>
<style lang="less" scoped>
.test-scroll{
    height: 500px;
    overflow-y: scroll;
}
</style>
```
- 可视区域渲染
数据不支持分页，一次性从后端获取大量数据，通过前端控制可视区

设置一个父容器，固定高
在父容器中添加一个用于撑开父容器的不可见容器，高度 = array长度 * 每个列表高度
在不可见容器中添加内容区域，绝对定位，记录startIndex = 父容器的scrollTop / 每个列表高度
计算当前父容器可视区可以承载列表的个数， 记录visibleCount = 父容器clientHeight / 每个列表高度
计算父容器底部列表的位置endIndex = startIndex + visibleCount
可视区域数据为visibleList = dataList.slice(startIndex, endIndex)
对内容区域做transform位移，startIndex * 每个列表高度
```html
<template>
<div class="scroll-content">
    <div
        class="list-view"
        ref="listView"
        @scroll="handleScroll">
        <div
        class="list-view-phantom"
        :style="{
            height: contentHeight
        }">
        </div>
        <div
            ref="content"
            class="list-view-content">
            <div
                class="list-view-item"
                :style="{
                height: itemHeight + 'px'
                }" :key="index"
                v-for="(item, index) in visibleData">
                {{ item.value }}
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            list: [],
            visibleData: [],
            dataList: [],
            itemHeight: 30
        };
    },
    computed: {
        contentHeight () {
            return this.dataList.length * this.itemHeight + 'px';
        }
    },
    mounted () {
        for (let i = 0; i < 100000; i++) {
            this.dataList.push({
                value: `长列表-${i}`
            });
        }
        this.updateVisibleData();
    },
    methods: {
        updateVisibleData (scrollTop) {
            scrollTop = scrollTop || 0;
            const visibleCount = Math.ceil(this.$refs.listView.clientHeight / this.itemHeight);
            const start = Math.floor(scrollTop / this.itemHeight);
            const end = start + visibleCount;
            this.visibleData = this.dataList.slice(start, end);
            this.$refs.content.style.webkitTransform = `translate3d(0, ${start * this.itemHeight}px, 0)`;
        },
        handleScroll () {
            const scrollTop = this.$refs.listView.scrollTop;
            this.updateVisibleData(scrollTop);
        }
    }
};
</script>
<style lang="less" scoped>
.list-view {
    height: 300px;
    overflow-y: scroll;
    position: relative;
    border: 1px solid #aaa;
}

.list-view-phantom {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
}

.list-view-content {
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
}

.list-view-item {
    padding: 5px;
    font-size: 14px;
    color: #666;
    line-height: 30px;
    box-sizing: border-box;
}
</style>
```
[再谈前端虚拟列表的实现](https://zhuanlan.zhihu.com/p/34585166)

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

4. #### 怎么实现gzip的功能适用性基于怎么样的加密方式
##### 题目： 怎么实现gzip的功能，适用性，基于怎么样的加密方式（个推一面）

---

[[↑] 回到顶部](#awsome-knowledge-front-end)
