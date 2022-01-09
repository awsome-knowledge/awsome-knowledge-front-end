// 泛型:在定义函数、接口、类的时候不能预先确定要使用的数据的类型,而是在使用函数、接口、类的时候才能确定数据的类型
(() => {
  // 需求:定义一个函数,传入两个参数,第一参数是数据,第二个参数是数量,函数的作用:根据数量产生对应个数的数据,存放在一个数组中
  // 定义一个函数
  // function getArr1(value: number, count: number): number[] {
  //   // 根据数据和数量产生一个数组
  //   const arr: number[] = []
  //   for (let i = 0; i < count; i++) {
  //     arr.push(value)
  //   }
  //   return arr
  // }
  // const arr1 = getArr1(100.123, 3)
  // console.log(arr1)
  // 定义一个函数,同上,只不过传入的是字符串类型
  // function getArr2(value: string, count: number): string[] {
  //   // 根据数据和数量产生一个数组
  //   const arr: string[] = []
  //   for (let i = 0; i < count; i++) {
  //     arr.push(value)
  //   }
  //   return arr
  // }
  // const arr2 = getArr2('abc', 3)
  // console.log(arr2)
  // 需求:可以传入任意类型的数据,返回来的是存储这个任意类型数据的数组
  // function getArr3(value: any, count: number): any[] {
  //   // 根据数据和数量产生一个数组
  //   const arr: any[] = []
  //   for (let i = 0; i < count; i++) {
  //     arr.push(value)
  //   }
  //   return arr
  // }
  // const arr1 = getArr3(100.123, 3)
  // const arr2 = getArr3('abc', 3)
  // console.log(arr1)
  // console.log(arr2)
  // // arr1中存储的是数字类型的数据
  // // arr2中存储的是字符串类型的数据
  // console.log(arr1[0].toFixed(2)) // 没有任何的智能提示的信息(要么有方法名字的提示信息,要么有错误的提示信息)
  // console.log(arr2[0].split('')) // 没有任何的智能提示的信息(要么有方法名字的提示信息,要么有错误的提示信息)


  function getArr4<T>(value: T, count: number): T[] {
    // 根据数据和数量产生一个数组
    // const arr: T[] = []
    const arr: Array<T> = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  const arr1 = getArr4<number>(200.12345, 5)
  const arr2 = getArr4<string>('abcdefg', 5)
  console.log(arr1)
  console.log(arr2)
  console.log(arr1[0].toFixed(3))
  console.log(arr2[0].split(''))
  // // arr1中存储的是数字类型的数据
  // // arr2中存储的是字符串类型的数据
  // console.log(arr1[0].toFixed(2)) // 没有任何的智能提示的信息(要么有方法名字的提示信息,要么有错误的提示信息)
  // console.log(arr2[0].split('')) // 没有


})()