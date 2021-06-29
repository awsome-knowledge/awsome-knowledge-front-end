// 构造函数
class _LazyMan {
  constructor(name) {
    this.tasks = [];
    const task = () => {
      console.log(`Hi! This is ${name}`);
      this.next();
    };
    this.tasks.push(task);
    // 把 this.next() 放到调用栈清空之后执行
    setTimeout(() => {
      this.next();
    }, 0);
  }
//   取第一个执行
  next() {
    const task = this.tasks.shift(); // 取第一个任务执行
    // console.log('task：',task)
    task && task();
  }
  sleep(time) {
    this._sleepWrapper(time, false);
    return this; // [链式调用](https://www.cnblogs.com/WindrunnerMax/p/14043455.html)
  }
  sleepFirst(time) {
    this._sleepWrapper(time, true);
    return this;
  }
  _sleepWrapper(time, first) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    };
    if (first) {
        // 先执行sleepFirst()
      this.tasks.unshift(task); // 放到任务队列顶部
    } else {
        // 后执行sleep()
      this.tasks.push(task); // 放到任务队列尾部
    }
  }
  eat(name) {
    const task = () => {
      console.log(`Eat ${name}`);
      this.next();
    };
    this.tasks.push(task);
    // console.log('this.tasks:',this.tasks)
    return this;
  }
}
// 实例化对象
function LazyMan(name) {
  return new _LazyMan(name);
}

// LazyMan('aaa').sleep(10).eat('dinner').sleepFirst(5)

// Wake up after 5
// Hi! This is aaa
// Wake up after 10
// Eat dinner