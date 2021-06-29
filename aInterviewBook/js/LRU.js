// 构造函数
/**
 * get put是原型上的方法
 */
class LRUCache {
  constructor(capacity) {
    //   map对象作为容器
    this.secretKey = new Map();
    // 容器的容量
    this.capacity = capacity;
  }
  get(key) {
    //   如果容器里有对应属性
    if (this.secretKey.has(key)) {
        // 调换位置，将对应属性调换到第一个
      let tempValue = this.secretKey.get(key);
      this.secretKey.delete(key);
      this.secretKey.set(key, tempValue);
      return tempValue;
    } else return -1;
  }
  put(key, value) {
    // key存在，仅修改值
    if (this.secretKey.has(key)) {
        // 删除原来的值
      this.secretKey.delete(key);
    //   设置新值
      this.secretKey.set(key, value);
    }
    // key不存在，cache未满
    else if (this.secretKey.size < this.capacity) {
      this.secretKey.set(key, value);
    }
    // 添加新key，删除旧key
    else {
      this.secretKey.set(key, value);
      // 删除map的第一个元素，即为最长未使用的
      this.secretKey.delete(this.secretKey.keys().next().value);
    }
  }
}
let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log("cache.get(1)", cache.get(1))// 返回  1
cache.put(3, 3);// 该操作会使得密钥 2 作废
console.log("cache.get(2)", cache.get(2))// 返回 -1 (未找到)
cache.put(4, 4);// 该操作会使得密钥 1 作废
console.log("cache.get(1)", cache.get(1))// 返回 -1 (未找到)
console.log("cache.get(3)", cache.get(3))// 返回  3
console.log("cache.get(4)", cache.get(4))// 返回  4