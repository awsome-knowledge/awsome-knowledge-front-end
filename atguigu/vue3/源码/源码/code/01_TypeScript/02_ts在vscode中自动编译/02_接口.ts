// 接口:是一种能力,一种约束而已

(() => {
  // 定义一个接口
  interface IPerson {
    firstName: string // 姓氏
    lastName: string // 名字
  }
  // 输出姓名
  function showFullName(person: IPerson) {
    return person.firstName + '_' + person.lastName
  }
  // 定义的一个对象
  const person = {
    firstName: '东方',
    lastName: '不败'
  }

  console.log(showFullName(person))


})()