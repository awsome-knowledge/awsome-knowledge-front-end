#  cool_secret 可访问多长时间？

```javascript
sessionStorage.setItem('cool_secret', 123)
A: 永远，数据不会丢失。
B: 当用户关掉标签页时。
C: 当用户关掉整个浏览器，而不只是关掉标签页。
D: 当用户关闭电脑时。

```
答案: B

关闭 tab 标签页 后，sessionStorage 存储的数据才会删除。

如果使用 localStorage，那么数据将永远在那里，除非调用了 localStorage.clear()。