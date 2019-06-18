# Which one is true?
```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
A: mouse.bird.size is not valid
B: mouse[bird.size] is not valid
C: mouse[bird["size"]] is not valid
D: All of them are valid
```

A

在JavaScript中，所有对象键都是字符串(除非它是符号)。尽管我们可能不会将它们作为字符串输入，但它们总是被转换为引擎盖下的字符串。

JavaScript解释(或取消框)语句。当我们使用方括号表示法时，它会看到第一个左方括号[并继续下去，直到找到右方括号]。只有到那时，它才会对语句求值。

mouse.bird.size 没有值 undefined

mouse[bird.size] = true

mouse[bird["size"]] = true