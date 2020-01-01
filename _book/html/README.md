# awsome-knowledge-front-end
## 目录
1. [完成一个Dialog组件，说说你设计的思路？它应该有什么功能？（有赞）](#完成一个Dialog组件说说你设计的思路它应该有什么功能)
2. [svg和canvas各自的优缺点](#svg和canvas各自的优缺点)
3. [canvas渲染较大画布的时候性能会较低为什么](#canvas渲染较大画布的时候性能会较低为什么)
4. [HTML5新增了哪些内容或API使用过哪些](#HTML5新增了哪些内容或API使用过哪些)
5. [input和textarea的区别](#input和textarea的区别)
6. [用一个div模拟textarea的实现](#用一个div模拟textarea的实现)
7. [移动设备忽略将页面中的数字识别为电话号码的方法](#移动设备忽略将页面中的数字识别为电话号码的方法)


## 题目

### Html

1. #### 完成一个Dialog组件说说你设计的思路它应该有什么功能
完成一个Dialog组件，说说你设计的思路？它应该有什么功能？（有赞）
<details><summary><b>答案</b></summary>


1. 该组件需要提供hook指定渲染位置，默认渲染在body下面。

2. 然后改组件可以指定外层样式，如宽度等

3. 组件外层还需要一层mask来遮住底层内容，点击mask可以执行传进来的onCancel函数关闭Dialog。

4. 另外组件是可控的，需要外层传入visible表示是否可见。

5. 然后Dialog可能需要自定义头head和底部footer，默认有头部和底部，底部有一个确认按钮和取消按钮，确认按钮会执行外部传进来的onOk事件，然后取

6. 按钮会执行外部传进来的onCancel事件。

7. 当组件的visible为true时候，设置body的overflow为hidden，隐藏body的滚动条，反之显示滚动条。

8. 组件高度可能大于页面高度，组件内部需要滚动条。

9. 只有组件的visible有变化且为ture时候，才重渲染组件内的所有内容。

</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)

2. #### svg和canvas各自的优缺点
<details><summary><b>答案</b></summary>
<pre>
共同点：都是有效的图形工具，对于数据较小的情况下，都很又高的性能，它们都使用 JavaScript 和 HTML；它们都遵守万维网联合会 (W3C) 标准。
svg优点：
矢量图，不依赖于像素，无限放大后不会失真。
以dom的形式表示，事件绑定由浏览器直接分发到节点上。
svg缺点：
dom形式，涉及到动画时候需要更新dom，性能较低。
canvas优点：
定制型更强，可以绘制绘制自己想要的东西。
非dom结构形式，用JavaScript进行绘制，涉及到动画性能较高。
canvas缺点：
事件分发由canvas处理，绘制的内容的事件需要自己做处理。
依赖于像素，无法高效保真，画布较大时候性能较低。

</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)



3. #### canvas渲染较大画布的时候性能会较低为什么
<details><summary><b>答案</b></summary>
<pre>
因为canvas依赖于像素，在绘制过程中是一个一个像素去绘制的，当画布足够大，像素点也就会足够多，那么想能就会足够低。
</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


4. #### HTML5新增了哪些内容或API使用过哪些
<details><summary><b>答案</b></summary>
<pre>

1. document.querySelector()和document.querySelectorAll()方法

document.querySelector()：根据css选择器返回第一个匹配的元素，如果没有匹配返回null；

document.querySelectorAll("selector")：querySelectorAll和querySelector作用一样的，只是querySelectorAll返回的是元素数组，querySelector返回的是一个元素。如果querySelectorAll没有匹配的内容返回的是一个空数组。

2. HTML5之classList属性
classList属性没有出现之前js操作元素class都是使用className,但是在开发一个网站的时候标签的class不只是一个，有可能有很多。
这个时候使用className操作多个类就比较麻烦了，需要进行拆分、删除等。

3. HTML5之全屏

为了方便用户的阅读或者观看视频，很多的网站实现了全屏功能。FullScreen API 是一个新的JavaScript API,简单而又强大. FullScreen 让我们可以通过编程的方式来向用户请求全屏显示,如果交互完成,随时可以退出全屏状态.

FullScreen是HTML5的一个新特征，现在主流的浏览器已经支持

4. HTML5之页面可见性(Page Visibility)

所谓页面可见性就是当前页面是处于显示状态还是隐藏状态，页面可见性对于网站的统计非常有用。有的时候我们会统计用户停留在每个页面的时间，这个时间就是：用户打开网页到网页关闭或者最小化之间的时间。

有的时候在视频播放的时候，当用户离开视频播放页面自动暂停视频播放，我们有时候也对那些定期刷新内容的页面进行控制，当该页面不可见则不刷新，可见则刷新。这些都是页面可见性的具体应用。

5. HTML5 之预加载
预加载是一种浏览器机制，使用浏览器空闲时间来预先下载/加载用户接下来很可能会浏览的页面/资源。页面提供给浏览器需要预加载的集合。
浏览器载入当前页面完成后，将会在后台下载需要预加载的页面并添加到缓存中。当用户访问某个预加载的链接时，如果从缓存命中,
页面就得以快速呈现。

a. link的prefetch属性
可以看到兼容效果不是特别的好。考虑到prefetech的兼容，w3c提出了另外一个属性dns-prefetch属性。它的兼容性现在主流浏览器基本都支持。
b. link的dns-prefetch

c. 注意事项

关于链接预加载，有如下注意事项：
- 预加载可以跨域进行，当然，请求时cookie等信息也会被发送。
- 预加载可能破坏网站统计数据，而用户并没有实际访问。
- 浏览器兼容性不是很好


</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)



5. #### input和textarea的区别
<details><summary><b>答案</b></summary>
<pre>
1. input
text标签是单行文本框，不会换行。
通过size属性指定显示字符的长度，注意：当使用css限定了宽高，那么size属性就不再起作用。
value属性指定初始值，Maxlength属性指定文本框可以输入的最长长度。
可以通过width和height设置宽高，但是也不会增加行数
2. textarea
是多行文本输入框，文本区中可容纳无限数量的文本，其中的文本的默认字体是等宽字体（通常是 Courier），可以通过 cols 和 rows 属性来规定 textarea 的尺寸，不过更好的办法是使用 CSS 的 height 和 width 属性。
</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


6. #### 用一个div模拟textarea的实现
<details><summary><b>答案</b></summary>
<pre>
1. html
<div contenteditable="true">
    .....此处省略.....
</div>

2. css

div {
  width: 400px;
  min-height: 100px;
  max-height: 200px;
  _height: 100px; //IE6
  margin-left: auto;
  margin-right: auto;
  padding: 3px;
  outline: 0;
  border: 1px solid #a0b3d6;
  font-size: 12px;
  word-wrap: break-word;
  overflow-x: hidden;
  overflow-y: auto; //超过最大高度就出现滚动条
  _overflow-y: visible;
}

</pre>
</details>


---

[[↑] 回到顶部](#awsome-knowledge-front-end)


7. #### 移动设备忽略将页面中的数字识别为电话号码的方法 
<details><summary><b>答案</b></summary>
<pre>
1.标准的电话号码格式是这样的:<a  href="tel:1-408-555-5555">1-408-555-5555</a>，点击后会自动打开电话功能；

2.但有时候不是电话号码的数字也会被浏览器自动解析为电话号码, 并把数字的颜色和样式都改了；

3.如果忽略页面中的数字识别为电话号码, 只要把这个默认行为关闭就行，只要一行代码:

<meta name = "format-detection" content = "telephone=no">

4.这个关闭不会影响真正电话号码的识别；


format-detection翻译成中文的意思是“格式检测”，顾名思义，它是用来检测html里的一些格式的，那关于meta的format-detection属性主要是有以下几个设置：
<meta name="format-detection" content="telephone=no">
<meta name="format-detection" content="email=no">
<meta name="format-detection" content="adress=no">
<meta name="format-detection" content="telephone=no,email=no,adress=no">


--------------------- 
版权声明：本文为CSDN博主「初漾」的原创文章，遵循CC 4.0 by-sa版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/shuidinaozhongyan/article/details/73194556
</pre>
</details>

---

[[↑] 回到顶部](#awsome-knowledge-front-end)
