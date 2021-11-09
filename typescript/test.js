var Student;
(function (Student) {
    Student[Student["xiaoming"] = 0] = "xiaoming";
    Student[Student["xiaoding"] = 1] = "xiaoding";
    Student[Student["xiaohuang"] = 2] = "xiaohuang";
})(Student || (Student = {}));
console.log(Student.xiaoming);
console.log(Student[2]);
