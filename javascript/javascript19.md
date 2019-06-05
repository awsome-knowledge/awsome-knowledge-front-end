# 请给出异步加载js方案，不少于两种？
```html
默认情况javascript是同步加载的，也就是javascript的加载时阻塞的，后面的元素要等待javascript加载完毕后才能进行再加载，对于一些意义不是很大的javascript，如果放在页头会导致加载很慢的话，是会严重影响用户体验的。

(1) defer，只支持IE
defer属性的定义和用法（我摘自w3school网站）
defer 属性规定是否对脚本执行进行延迟，直到页面加载为止。
有的 javascript 脚本 document.write 方法来创建当前的文档内容，其他脚本就不一定是了。

如果您的脚本不会改变文档的内容，可将 defer 属性加入到

(2) async：
async的定义和用法(是HTML5的属性)
async 属性规定一旦脚本可用，则会异步执行。
示例：
复制代码 代码如下:

注释：async 属性仅适用于外部脚本（只有在使用 src 属性时）。
注释：有多种执行外部脚本的方法：
•如果 async="async"：脚本相对于页面的其余部分异步地执行（当页面继续进行解析时，脚本将被执行）
•如果不使用 async 且 defer="defer"：脚本将在页面完成解析时执行
•如果既不使用 async 也不使用 defer：在浏览器继续解析页面之前，立即读取并执行脚本

(3) 创建script，插入到DOM中，加载完毕后callBack，见代码：
复制代码 代码如下:

function loadScript(url, callback){
var script = document.createElement_x("script")
script.type = "text/javascript";
if (script.readyState){ //IE
script.onreadystatechange = function(){
if (script.readyState == "loaded" ||
script.readyState == "complete"){
script.onreadystatechange = null;
callback();
}
};
} else { //Others: Firefox, Safari, Chrome, and Opera
script.onload = function(){
callback();
};
}
script.src = url;
document.body.appendChild(script);
}
```

有关链接：[异步加载js的几种方式](https://www.cnblogs.com/1314-/p/6561475.html)

参考答案：
```html
  默认情况javascript是同步加载的，也就是javascript的加载时阻塞的，后面的元素要等待javascript加载完毕后才能进行再加载，对于一些意义不是很大的javascript，如果放在页头会导致加载很慢的话，是会严重影响用户体验的。

异步加载方式：

(1) defer，只支持IE

(2) async：

(3) 创建script，插入到DOM中，加载完毕后callBack，见代码：function loadScript(url, callback){   var script = document.createElement("script")   script.type = "text/javascript";   if (script.readyState){ //IE      script.onreadystatechange = function(){         if (script.readyState == "loaded" ||            script.readyState == "complete"){            script.onreadystatechange = null;            callback();         }      };   } else { //Others: Firefox, Safari, Chrome, and Opera      script.onload = function(){          callback();      };   }   script.src = url;   document.body.appendChild(script);}
```
