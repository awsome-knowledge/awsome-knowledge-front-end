// yield 后是一个 Promise
var fetch = require('node-fetch');
var co = require('co');
 
function* gen() {
    var r1 = yield fetch('http://navigation.qiufeihong.top/api/v1/superAdmin?limit=3&offset=0&category=recommendationFront-end');
    var j1 = yield r1.json()
    var r2 = yield fetch('http://navigation.qiufeihong.top/api/v1/admin?limit=3&offset=0&category=recommendationFront-end');
    var j2 = yield r2.json()
    console.log(j1);
    console.log(j2);
    // { data:
    //     [ { _id: '5d5607ddcba39c04be4aa613',
    //         category: 'recommendationFront-end',
    //         name: 'w3schoolstest',
    //         website: 'http://www.w3schools.com/',
    //         describe: 'WEB初学者教程网站',
    //         logo: 'http://chuangzaoshi.com/assets/images/C/w3schools.png',
    //         created_at: '2019-08-16T01:33:17.234Z',
    //         updated_at: '2019-09-06T08:29:02.243Z',
    //         __v: 0 },
    //       { _id: '5d5607ddcba39c04be4aa615',
    //         category: 'recommendationFront-end',
    //         name: 'codepen',
    //         website: 'http://codepen.io/',
    //         describe: '前端炫酷样式技能效果',
    //         logo: 'http://chuangzaoshi.com/assets/images/C/codepen.png',
    //         created_at: '2019-08-16T01:33:17.234Z',
    //         updated_at: '2019-08-16T01:33:17.234Z',
    //         __v: 0 },
    //       { _id: '5d5607ddcba39c04be4aa616',
    //         category: 'recommendationFront-end',
    //         name: 'Fontawesome',
    //         website: 'http://fontawesome.io/',
    //         describe: '全球著名的前端图标字体库',
    //         logo: 'http://chuangzaoshi.com/assets/images/C/fontawesome.png',
    //         created_at: '2019-08-16T01:33:17.234Z',
    //         updated_at: '2019-08-16T01:33:17.234Z',
    //         __v: 0 } ],
    //    total: 21 }
    //  { data: [], total: 0 }
}
 
co(gen);