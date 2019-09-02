
## 防抖

防抖（debounce）
所谓防抖，就是指触发事件后在n秒内函数只能执行一次，如果在n秒内又触发了事件，则会重新计算函数执行时间。
防抖函数分为非立即执行版和立即执行版。
- 非立即执行：触发事件后函数不会立即执行，而是在n秒后执行，如果在n秒内又触发了事件，则会重新计算函数执行时间。
```javascript
    function debounce(func, wait) {
        let timeout
        return function () {
            let context = this
            let args = arguments
            if (timeout) clearTimeout(timeout)
            timeout = setTimeout(() => {
                func.apply(context, args)
            }, wait)
        }
    }
```
背景：产生事件时，首先执行立即执行函数setTimeout。
当鼠标移动时，会产生setTimeout，每移动一次就timeout增加一次，
当timeout有值时，就销毁定时器。如果停止移动，就不触发定时器，
那么timeout没有值，那么就执行加一操作。

获取this和参数，为了让debounce函数最终返回的函数this指向不变以及依旧能接受参数。


完整版：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        #con {
            height: 100%;
            width: 100%;
            position: absolute;
            line-height: 600px;
            text-align: center;
            color: #ff0000;
            background-color: #ffff00;
            font-size: 100px;
        }
    </style>
</head>
<body>
<div id="con">
</div>
<script>
    let num = 1
    let con = document.getElementById('con')

    function count() {
        con.innerHTML = num++
    }

    function debounce(func, wait) {
        let timeout
        return function () {
            let context = this
            let args = arguments
            if (timeout) clearTimeout(timeout)
            timeout = setTimeout(() => {
                func.apply(context, args)
            }, wait)
        }
    }

    con.onmousemove = debounce(count, 1000)
</script>
</body>
</html>

```

[在线预览](https://codepen.io/qiufeihong2018/pen/BaBdXvK)

- 立即执行：触发事件后函数会立即执行，然后n秒后不触发事件才能继续执行函数。
```javascript
    function debounce(func, wait) {
        let timeout
        return function () {
            let context = this
            let args = arguments
            if (timeout) clearTimeout(timeout)
            console.log('timeout',timeout)
            let callNow = !timeout
            timeout = setTimeout(() => {
                timeout = null
            }, wait)
            if (callNow) func.apply(context, args)
        }
    }
```
当鼠标移动触发事件，进入debounce方法中。当执行setTimeout方法时，timeout为null，等一秒后再执行。在回到context/args赋值，如果此时timeout为null则不清除定时器。
并且callNow为ture，callNow为ture，那么执行加一操作。

完整版本：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        #con {
            height: 100%;
            width: 100%;
            position: absolute;
            line-height: 600px;
            text-align: center;
            color: #ff0000;
            background-color: #ffff00;
            font-size: 100px;
        }
    </style>
</head>
<body>
<div id="con">
</div>
<script>
    let num = 1
    let con = document.getElementById('con')

    function count() {
        con.innerHTML = num++
    }

    function debounce(func, wait) {
        let timeout
        return function () {
            let context = this
            let args = arguments
            if (timeout) clearTimeout(timeout)
            let callNow = !timeout
            timeout = setTimeout(() => {
                timeout = null
            }, wait)
            if (callNow) func.apply(context, args)
        }
    }

    con.onmousemove = debounce(count, 1000)
</script>
</body>
</html>

```

[在线预览](https://codepen.io/qiufeihong2018/pen/RwbZXvb)

### 双剑合璧
需要立即执行，则加上第三个参数，否则不加。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        #con {
            height: 100%;
            width: 100%;
            position: absolute;
            line-height: 600px;
            text-align: center;
            color: #ff0000;
            background-color: #ffff00;
            font-size: 100px;
        }
    </style>
</head>
<body>
<div id="con">
</div>
<script>
    let num = 1
    let con = document.getElementById('con')

    function count() {
        con.innerHTML = num++
    }

    function debounce(func, wait, immediate) {
        let timeout
        return function () {
            let context = this
            let args = arguments
            if (timeout) clearTimeout(timeout)
            if (immediate) {
                let callNow = !timeout
                timeout = setTimeout(() => {
                    timeout = null
                }, wait)
                if (callNow) func.apply(context, args)
            } else {
                timeout = setTimeout(() => {
                    func.apply(context, args)
                }, wait)
            }
        }
    }

    con.onmousemove = debounce(count, 1000)
</script>
</body>
</html>

```


### 应用场景

#### 窗口大小变化，调整样式
```
window.addEventListener('resize', debounce(handleResize, 200));
```
#### 搜索框，输入后1000毫秒搜索
```
debounce(fetchSelectData, 300);
```
#### 表单验证，输入1000毫秒后验证
```
debounce(validator, 1000);
```

## 节流
连续触发事件，但是在n秒中只执行一次。节流会稀释函数的执行频率。

对于节流，一般有两种方式可以实现，分别是时间戳版和定时器版。
时间戳版：
```javascript
    function throttle(func, wait) {
        var previous = 0
        return function () {
            let now = Date.now()
            let context = this
            let args = arguments
            if (now - previous > wait) {
                func.apply(context, args)
                previous = now
            }
        }
    }
```
在持续触发事件过程中，函数会立即执行，并且每1秒执行一次。

当时间每过去n秒后，执行加一事件。
完整版
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        #con {
            height: 100%;
            width: 100%;
            position: absolute;
            line-height: 600px;
            text-align: center;
            color: #ff0000;
            background-color: #ffff00;
            font-size: 100px;
        }
    </style>
</head>
<body>
<div id="con">
</div>
<script>
    let num = 1
    let con = document.getElementById('con')

    function count() {
        con.innerHTML = num++
    }

    function throttle(func, wait) {
        var previous = 0
        return function () {
            let now = Date.now()
            let context = this
            let args = arguments
            if (now - previous > wait) {
                func.apply(context, args)
                previous = now
            }
        }
    }

    con.onmousemove = throttle(count, 1000)
</script>
</body>
</html>

```

[在线预览](https://codepen.io/qiufeihong2018/pen/xxKLvNQ)

定时器版：
```javascript
    function throttle(func, wait) {
        let timeout
        return function () {
            let context = this
            let args = arguments
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null
                    func.apply(context, args)
                }, wait)
            }
        }
    }
```
持续触发事件时，每当n秒后执行一次，timeout设为空。当为空又开始执行。


在持续触发事件的过程中，函数不会立即执行，并且每 1s 执行一次，在停止触发事件后，函数还会再执行一次。
我们应该可以很容易的发现，其实时间戳版和定时器版的节流函数的区别就是，时间戳版的函数触发是在时间段内开始的时候，而定时器版的函数触发是在时间段内结束的时候。


完整版：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        #con {
            height: 100%;
            width: 100%;
            position: absolute;
            line-height: 600px;
            text-align: center;
            color: #ff0000;
            background-color: #ffff00;
            font-size: 100px;
        }
    </style>
</head>
<body>
<div id="con">
</div>
<script>
    let num = 1
    let con = document.getElementById('con')

    function count() {
        con.innerHTML = num++
    }

    function throttle(func, wait) {
        let timeout
        return function () {
            let context = this
            let args = arguments
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null
                    func.apply(context, args)
                }, wait)
            }
        }
    }

    con.onmousemove = throttle(count, 1000)
</script>
</body>
</html>
```

[在线预览](https://codepen.io/qiufeihong2018/pen/aboyegQ)


双剑合璧版：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        #con {
            height: 100%;
            width: 100%;
            position: absolute;
            line-height: 600px;
            text-align: center;
            color: #ff0000;
            background-color: #ffff00;
            font-size: 100px;
        }
    </style>
</head>
<body>
<div id="con">
</div>
<script>
    let num = 1
    let con = document.getElementById('con')

    function count() {
        con.innerHTML = num++
    }

    function throttle(func, wait, type) {
        if (type === 1) {
            console.log('css')
            // 时间戳版：
            let previous = 0
            return function () {
                let now = Date.now()
                let context = this
                let args = arguments
                if (now - previous > wait) {
                    previous = now
                    func.apply(context, args)
                }
            }
        } else if (type === 2) {
            // 定时器版：
            let timeout
            return function () {
                let context = this
                let args = arguments
                if (!timeout) {
                    timeout = setTimeout(() => {
                        timeout = null
                        func.apply(context, args)
                    }, wait)
                }
            }
        }
    }

    con.onmousemove = throttle(count, 1000, 2)
</script>
</body>
</html>

```

