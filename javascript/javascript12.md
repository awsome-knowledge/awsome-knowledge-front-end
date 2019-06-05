# 在页面中有如下html：
```html
<div id="field">
<input type="text" value="User Name"/>
</div><span class="red"></span>
```
要求用闭包方式写一个JS从文本框中取出值并在标签span中显示出来。


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<div id="firld">
    <input type="text" value="qiufeihong"/>
</div>
<span id="red" class="red"></span>
<span class="red"></span>
<span class="red"></span>
<span class="red"></span>

<script>
    var result = (function () {
        var value = document.getElementById("firld").children[0].value;
        var all = document.getElementsByTagName("span");
        for (let i = 0; i < all.length; i++) {
            if (all[i].className == 'red') {
                all[i].innerHTML = value;
            }
        }
    })();
</script>
</body>
</html>


```