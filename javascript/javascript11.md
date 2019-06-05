# 请编写一个JavaScript函数parseQueryString，他的用途是把URL参数解析为一个对象，如：var url=“http://witmax.cn/index.php?key0=0&key1=1&key2=2”；

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<script>
    function parseQueryString(url) {
        var result = {};
        var arr = url.split("?");
        if (arr.length <= 1) {
            return result;
        } else {
            arr = arr[1].split("&");
            arr.forEach(item => {
                let a = item.split('=')
                result[a[0]] = a[1]
            })
            return result;
        }
    }

    var url = "http://witmax.cn/index.php?key0=0&key1=1&key2=2";
    var ps = parseQueryString(url);
    console.log(ps)
</script>
</body>
</html>


```
