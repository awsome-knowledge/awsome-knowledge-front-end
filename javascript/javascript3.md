# 集合 Set

   ES6 新增的一种新的数据结构，类似于数组，但成员是唯一且无序的。
   Set 本身是一种构造函数，用来生成 Set 数据结构。

```javascript
new Set([iterable]);
```

![Screenshot from 2019-05-05 10-58-15](https://user-images.githubusercontent.com/36500514/57187656-e996f100-6f24-11e9-91c3-ddbcb2adcd69.png)                                                                                                                                                                                                                                                            

![Screenshot from 2019-05-05 11-01-34](https://user-images.githubusercontent.com/36500514/57187672-2cf15f80-6f25-11e9-8de7-8af871d42e84.png)                                                                                                                                                                                                                                                            
Set 对象存储原始值或是对象引用的唯一值。
向 Set 加入值的时候，不会发生类型转换，所以 1 和‘1’是两个不同的值。Set 用‘Same-value-zero equality’算法来判断两个值是否不同，它类似于精确相等运算符（===），主要的区别是 NAN 等于自身，而精确相等运算符认为 NaN 不等于自身。

![Screenshot from 2019-05-05 11-09-15](https://user-images.githubusercontent.com/36500514/57187740-3d560a00-6f26-11e9-9d89-889f2724ba3c.png)                                                                                                                                                                                                                                                            

- Set 实例属性
  - constructor：构造函数
  - size：元素数量

![Screenshot from 2019-05-05 11-13-06](https://user-images.githubusercontent.com/36500514/57187784-c705d780-6f26-11e9-904e-d73b04cd0a96.png)                                                                                                                                                                                                                                                                                                                                                

- Set 实例方法

  - 操作方法 - add(value):相当 array 里的 push，新增 - delete(vallue):删除集合中 value - has(value):判断集合是否存在 value - clear():清空集合

    ![Screenshot from 2019-05-05 11-18-25](https://user-images.githubusercontent.com/36500514/57187828-85296100-6f27-11e9-86f9-e71668eeecd9.png)                                                                                                                                                                                                                                                                                                                                                
    ![Screenshot from 2019-05-05 11-21-06](https://user-images.githubusercontent.com/36500514/57188155-6bd6e380-6f2c-11e9-9fc6-8505e81d3f1c.png)                                                                                                                                                                                                                                                                                                                                                

  - 遍历方法（遍历顺序为插入顺序） - keys():返回一个包含集合中所有键的迭代器 - values():返回一个包含集合中所有值的迭代器 - entries():返回一个包含 Set 对象中所有元素的键值对迭代器 - forEach(callback,this):用于对集合成员执行回调操作，如果提供了参数，回调中的 this 就是这个参数，没有返回值

    ![Screenshot from 2019-05-05 11-40-27](https://user-images.githubusercontent.com/36500514/57188028-9cb61900-6f2a-11e9-94d1-def917008ad9.png)                                                                                                                                                                                                                                                                                                                                                
    Set 可默认遍历，默认迭代器生成函数是 values() 方法

    ![Screenshot from 2019-05-05 11-45-00](https://user-images.githubusercontent.com/36500514/57188066-3aa9e380-6f2b-11e9-9422-1dc228dde10e.png)                                                                                                                                                                                                                                                                                                                                                
    所以， Set 可以使用 map、filter 方法

    ![Screenshot from 2019-05-05 11-47-40](https://user-images.githubusercontent.com/36500514/57188099-9aa08a00-6f2b-11e9-9f00-050c9fcce47d.png)                                                                                                                                                                                                                                                                                                                                                
    因此，Set 很容易实现交集（Intersect）、并集（Union）、差集（Difference）

    ![Screenshot from 2019-05-05 11-52-29](https://user-images.githubusercontent.com/36500514/57188141-477b0700-6f2c-11e9-8a97-71ee8961738b.png)                                                                                                                                                                                                                                                                                                                                                
    差集还是有问题的

# WeakSet
   WeakSet 对象允许将弱引用对象储存在一个集合中
   与 Set 的区别：

- 前者只能存储对象引用，不能存放值，而 Set 对象都可以
- 前者对象中存储的对象值都是被弱引用的，即垃圾回收机制不考虑其对该对象的应用，如果没有其他的变量或属性引用这个对象值，则这个对象将会被垃圾回收掉（不考虑改对象还存在于 WeakSet 中）。WeakSet 对象里有多少哥成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致，遍历结束后，有的成员可能取不到了（被垃圾回收），其是无法被遍历的，也没法拿到它的所有元素

- 属性
  - constructor：构造函数，任何一个具有 Iterable 接口的对象，都可以作参数

![Screenshot from 2019-05-05 13-21-40](https://user-images.githubusercontent.com/36500514/57188872-bcecd480-6f38-11e9-875a-d5f505ac6203.png)                                                                                                                                                                                                                                                                                                                                                

- add(value):在 WeakSet 对象中添加一个元素 value
- has(value):判断 WeakSet 对象中是否包含 value
- delete(value):删除元素 value
- clear():清空所有元素

  ![Screenshot from 2019-05-05 13-26-05](https://user-images.githubusercontent.com/36500514/57188898-5ae09f00-6f39-11e9-8777-5da20be804da.png)                                                                                                                                                                                                                                                                                                                                                

# 字典(Map)
   集合和字典的区别：

- 共同点：集合和字典可以存储不重复的值
- 异点：集合是[value,value]的形式储存元素，字典是[key,value]的形式储存

![Screenshot from 2019-05-05 13-32-53](https://user-images.githubusercontent.com/36500514/57188949-4ea91180-6f3a-11e9-94ca-b27d5285f517.png)                                                                                                                                                                                                                                                                                                                                                

任何具有 Iterator 接口且每个成员都是一个双元素的数组的数据结构都可以当作`Map`构造函数的参数

![Screenshot from 2019-05-05 13-38-00](https://user-images.githubusercontent.com/36500514/57188989-076f5080-6f3b-11e9-9119-46764be1f66d.png)                                                                                                                                                                                                                                                                                                                                                
![Screenshot from 2019-05-05 13-38-23](https://user-images.githubusercontent.com/36500514/57189021-65039d00-6f3b-11e9-863b-11a2d6957614.png)                                                                                                                                                                                                                                                                                                                                                

如果读取一个未知的键，则返回 undefined。

![Screenshot from 2019-05-05 13-40-12](https://user-images.githubusercontent.com/36500514/57189015-52896380-6f3b-11e9-8aa8-7bb4c95a17ba.png)                                                                                                                                                                                                                                                                                                                                                
注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。

![Screenshot from 2019-05-05 13-42-57](https://user-images.githubusercontent.com/36500514/57189035-b9a71800-6f3b-11e9-98e7-84209a5345c2.png)                                                                                                                                                                                                                                                            
![Screenshot from 2019-05-05 13-43-03](https://user-images.githubusercontent.com/36500514/57189036-bca20880-6f3b-11e9-9375-9cba418b3745.png)                                                                                                                                                                                                                                                            
上面代码的 set 和 get 方法，表面是针对同一个键，但实际上这是两个值，内存地址是不一样的，因此 get 方法无法读取该键，返回 undefined。

由上可知，Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。

如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，比如 0 和-0 就是一个键，布尔值 true 和字符串 true 则是两个不同的键。另外，undefined 和 null 也是两个不同的键。虽然 NaN 不严格相等于自身，但 Map 将其视为同一个键。

![Screenshot from 2019-05-05 13-48-31](https://user-images.githubusercontent.com/36500514/57189081-7ef1af80-6f3c-11e9-8eda-e68934aa153a.png)                                                                                                                                                                                                                                                            

Map 的属性及方法

- 属性：
  - constructor：构造函数
  - size：返回字典中所包含的元素个数

![Screenshot from 2019-05-05 13-50-59](https://user-images.githubusercontent.com/36500514/57189100-d42dc100-6f3c-11e9-82d8-95c366079193.png)                                                                                                                                                                                                                                                            

- 操作方法：

  - set(key, value)：向字典中添加新元素
  - get(key)：通过键查找特定的数值并返回
  - has(key)：判断字典中是否存在键 key
  - delete(key)：通过键 key 从字典中移除对应的数据
  - clear()：将这个字典中的所有元素删除

- 遍历方法
  - Keys()：将字典中包含的所有键名以迭代器形式返回
  - values()：将字典中包含的所有数值以迭代器形式返回
  - entries()：返回所有成员的迭代器
  - forEach()：遍历字典的所有成员

![Screenshot from 2019-05-05 13-53-44](https://user-images.githubusercontent.com/36500514/57189137-3686c180-6f3d-11e9-99f7-9da09d3c2e7b.png)                                                                                                                                                                                                                                                            
Map 结构的默认遍历器接口（Symbol.iterator 属性），就是 entries 方法。

![Screenshot from 2019-05-05 13-55-01](https://user-images.githubusercontent.com/36500514/57189156-646c0600-6f3d-11e9-9b33-d0895fd8cd89.png)                                                                                                                                                                                                                                                            

Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）。

与其他数据结构的相互转换

- Map 转 Array

  ![Screenshot from 2019-05-05 13-57-58](https://user-images.githubusercontent.com/36500514/57189185-cd537e00-6f3d-11e9-8fb7-2bf8dae67698.png)                                                                                                                                                                                                                                                            
- Array 转 Map

![Screenshot from 2019-05-05 13-59-04](https://user-images.githubusercontent.com/36500514/57189197-f70ca500-6f3d-11e9-9617-664cf8d08204.png)                                                                                                                                                                                                                                                            

- Map 转 Object

  因为 Object 的键名都为字符串，而 Map 的键名为对象，所以转换的时候会把非字符串键名转为字符串键名。

  ![Screenshot from 2019-05-05 14-05-29](https://user-images.githubusercontent.com/36500514/57189259-dbee6500-6f3e-11e9-830d-69ca9b1f403e.png)                                                                                                                                                                                                                                                            
- Object 转 Map

  ![Screenshot from 2019-05-05 14-06-19](https://user-images.githubusercontent.com/36500514/57189263-f88a9d00-6f3e-11e9-9cd5-a501cd3c18d8.png)                                                                                                                                                                                                                                                            
- Map 转 JSON

  ![Screenshot from 2019-05-05 14-07-06](https://user-images.githubusercontent.com/36500514/57189268-15bf6b80-6f3f-11e9-968a-586bbd9f146f.png)                                                                                                                                                                                                                                                            

- JSON 转 Map

  ![Screenshot from 2019-05-05 14-09-41](https://user-images.githubusercontent.com/36500514/57189292-7189f480-6f3f-11e9-94d9-f942efa999b2.png)                                                                                                                                                                                                                                                            

# WeakMap
   是一组键值对的集合，其中的键是弱引用对象，而值可以是任意的。
   注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。
   WeakMap 中，每个键对自己所引用对象的引用都是弱引用，在没有其他引用和该键引用同一对象，这个对象将会被垃圾回收（相应的 key 则变成无效的），所以，WeakMap 的 key 是不可枚举的。

- 属性：
  - constructor：构造函数
- 方法：
  - has(key)：判断是否有 key 关联对象
  - get(key)：返回 key 关联对象（没有则则返回 undefined）
  - set(key)：设置一组 key 关联对象
  - delete(key)：移除 key 的关联对象

# 总结：

- Set
  - 无序且不重复的
  - [value，value]，键值和键名重复
  - 可以遍历，方法有：add、delete、has、clear
- WeakSet
  - 成员都是对象
  - 成员都是弱引用，可以被垃圾回收机制回收，可以用来保存 DOM 节点，不容易造成内存泄漏
  - 不能遍历，方法有：add、delete、has、clear
- Map
  - 本质上是键值对的集合，字典
  - 可以遍历，方法：set、delete、has、get、clear
  - 可以跟各种数据格式转换
- WeakMap
  - 只接受对象作为键名（null 除外），不接受其他类型的值作为键名
  - 键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的
  - 不能遍历，方法有：get、set、has、delete
