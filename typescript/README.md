# awsome-knowledge-front-end
## 目录
### JavaScript
1. [什么是Typescript?](#什么是Typescript?)

## 题目

### JavaScript

1. ####  什么是Typescript?
TypeScript是一种由微软开发和维护的免费开源编程语言。它是一个强类型的JavaScript超集，可编译为纯JavaScript。它是一种用于应用级JavaScript开发的语言。对于熟悉c#、Java和所有强类型语言的开发人员来说，TypeScript非常容易学习和使用。

TypeScript可以在任何浏览器、主机和操作系统上执行。TypeScript不是直接在浏览器上运行的。它需要一个编译器来编译和生成JavaScript文件。TypeScript是带有一些附加特性的ES6 JavaScript版本。

2. ####  TypeScript和JavaScript有什么不同？
TypeScript与JavaScript的区别如下:

编号|	JavaScript|	TypeScript
--|--|--
1	|它是由网景公司在1995年开发的。	|它是2012年由安德斯·海尔斯伯格(Anders Hejlsberg)开发的。
2	|JavaScript源文件在”.js”扩展。	|TypeScript源文件是”.ts”扩展名。
3	|JavaScript不支持ES6。	|TypeScript 支持ES6。
4	|它不支持强类型或静态类型。	|它支持强类型或静态类型特性。
5	|它只是一种脚本语言。	|它支持面向对象的编程概念，如类、接口、继承、泛型等。
6	|JavaScript没有可选的参数特性。|	TypeScript有可选的参数特性。
7	|它是解释语言，这就是为什么它在运行时突出显示错误。	|它编译代码并在开发期间突出显示错误。
8	|JavaScript不支持模块。|	TypeScript支持模块。
9	|在这里，number和string是对象。|	在这里，number和string是接口。
10	|JavaScript不支持泛型。|	TypeScript支持泛型。

#### 3.我们为什么需要TypeScript？
- TypeScript快速、简单，最重要的是，容易学习。
- TypeScript支持面向对象的编程特性，比如类、接口、继承、泛型等等。
- TypeScript在编译时提供了错误检查功能。它将编译代码，如果发现任何错误，它将在运行脚本之前突出显示这些错误。
- TypeScript支持所有JavaScript库，因为它是JavaScript的超集。
- TypeScript通过使用继承来支持可重用性。
- TypeScript使应用程序开发尽可能的快速和简单，并且TypeScript的工具支持为我们提供了自动完成、类型检查和源文档。
- TypeScript支持最新的JavaScript特性，包括ECMAScript 2015。
- TypeScript提供了ES6的所有优点和更高的生产力。
- TypeScript支持静态类型、强类型、模块、可选参数等。

#### 4.列出Typescript的一些特性
![avatar](./features.png)

#### 5.列出使用Typescript的一些优点?
- 它提供了可选静态类型的优点。在这里，Typescript提供了可以添加到变量、函数、属性等的类型。
- Typescript能够编译出一个能在所有浏览器上运行的JavaScript版本。
- TypeScript总是在编译时强调错误，而JavaScript在运行时指出错误。
- TypeScript支持强类型或静态类型，而这不是在JavaScript中。
- 它有助于代码结构。
- 它使用基于类的面向对象编程。
- 它提供了优秀的工具支持和智能感知，后者在添加代码时提供活动提示。
- 它通过定义模块来定义名称空间概念。

#### 6.Typescript的缺点是什么?
- TypeScript需要很长时间来编译代码。
- TypeScript不支持抽象类。
- 如果我们在浏览器中运行TypeScript应用程序，需要一个编译步骤将TypeScript转换成JavaScript。
- Web开发人员使用了几十年的JavaScript，而TypeScript不是都是新东西。
- 要使用任何第三方库，必须使用定义文件。并不是所有第三方库都有可用的定义文件。
- 类型定义文件的质量是一个问题，即如何确保定义是正确的?

#### 7.TypeScript的不同组件是什么?
TypeScript主要有三个组件。这些都是
![avatar](./components.png)

- 语言language
该语言由新语法、关键字、类型注释等元素组成，允许我们编写TypeScript。

- 编译器compiler
TypeScript编译器是开源的、跨平台的，是用TypeScript编写的。它将用TypeScript编写的代码转换为JavaScript代码。它执行从TypeScript代码到JavaScript代码的解析和类型检查。它还可以帮助将不同的文件连接到单个输出文件，并生成源映射。

- 语言服务language service
语言服务提供信息，帮助编辑器和其他工具提供更好的辅助功能，如自动重构和智能感知。

#### 8.Typescript是谁开发的？
typescript是由Anders Hejlsberg开发的，他也是c#语言开发团队的核心成员之一。typescript于2012年10月1日发布，被标记为0.8版。它是由Microsoft在Apache 2许可下开发和维护的。它是为开发大型应用程序而设计的。

#### 9.说说安装Typescript的最低要求。或者我们如何获得TypeScript并安装它？
TypeScript可以通过npm (node .js包管理器)在node的帮助下进行安装和管理。要安装TypeScript，首先要确保npm安装正确，然后运行以下命令在系统上全局安装TypeScript。
```
$ npm install -g typescript  
```
它安装一个命令行代码“tsc”，它将进一步用于编译我们的Typescript代码。确保检查系统上安装的Typescript版本。

安装TypeScript需要以下步骤:
- 下载并运行节点的.msi安装程序。
- 输入命令“node -v”检查安装是否成功。
- 在终端窗口中输入以下命令安装Typescript: $ npm install -g Typescript

#### 10.列出在Typescript中的内置类型
在Typescript中，内置的数据类型也称为原始数据类型。这些数据如下所示。

![avatar](./data-type.png)

数字类型: 用于表示数字类型值。TypeScript中的所有数字都存储为浮点值。

语法: let标识符:number = value;

字符串类型: 它表示存储为Unicode UTF-16代码的字符序列。我们通过将字符串括在单引号或双引号中来在脚本中包含字符串。

语法: let标识符:字符串= ” “;

布尔类型: 用于表示逻辑值。当我们使用布尔类型时，我们只得到真或假的输出。布尔值是一个真值，它指定条件是否为真。

语法: let标识符:bool =布尔值;

Null类型: Null表示值未定义的变量。不能直接引用空类型值本身。空类型没有用处，因为我们只能为它分配一个空值。

语法: let num: number = null;

未定义类型: 它是未定义字面量的类型。未定义的类型表示所有未初始化的变量。它是没有用的，因为我们只能分配一个未定义的值给它。这种内置类型是所有类型的子类型。

语法: let num: number =未定义;

Void类型: Void是不返回任何类型值的函数的返回类型。如果没有可用的数据类型，则使用它。

语法: let unusable:void =未定义;

#### 11.Typescript中的变量是什么？如何在Typescript中创建变量？
变量是存储位置，用于存储要被程序引用和使用的值/信息。它充当程序中值的容器。可以使用var关键字声明它。它应该在使用前声明。在Typescript中声明变量时，应该遵循某些规则

- 变量名必须是字母或数字。
- 变量名不能以数字开头。
- 变量名不能包含空格和特殊字符，除了下划线(_)和美元($)符号。

我们可以通过以下四种方式之一声明一个变量:
- 在一条语句中声明类型和值。语法:var [identifier]: [type-annotation] = value;
- 声明没有值的类型。语法:var [identifier]: [type-annotation];
- 在没有类型的情况下声明它的值。语法:var [identifier] = value;
- 声明没有值和类型。语法:var(标识符);

#### 12.如何编译Typescript文件？
下面是将Typescript文件编译成JavaScript时所遵循的命令。
```
$ tsc <TypeScript File Name>  
```
例如，编译“hello.ts”。
```
$ tsc helloworld.ts  
```
结果是helloworld.js。

#### 13.是否可以将多个.ts文件合并成一个.js文件？如果是，那么如何做？
是的，有可能。为此，我们需要添加——outFILE [OutputJSFileName]编译选项。
```
tsc --outFile comman.js file1.ts file2.ts file3.ts
```
上面的命令将编译所有这三个.ts文件和结果将存储在一个comman.js文件中，在这种情况下，当我们不提供输出文件名像下面的命令。
```
tsc --outFile file1.ts file2.ts file3.ts
```
然后file2.ts和file3.ts将被编译，并将输出放在file1.ts中，现在是file1.ts包含JavaScript代码。

#### 14.能否自动编译.ts文件，并实时修改.ts文件？
自动实时根据.ts文件变化自动编译.ts文件是可以的。这可以通过使用——watch compiler选项来实现
```
tsc --watch file1.ts
```
上面的命令首先编译file1为file1.js，并注意文件的变化，如果检测到任何更改，它将再次编译文件。这里，我们需要确保在使用——watch选项运行时命令提示符不能关闭。

#### 15.TS的接口是什么意思？参照TS来解释它们。
接口是在我们的应用程序中充当契约的结构。它定义了要遵循的类的语法，这意味着实现接口的类必须实现它的所有成员。它不能被实例化，但是可以被实现它的类对象引用。无论对象是否具有特定的结构，TypeScript编译器都使用接口进行类型检查(也称为“duck typing”鸭子类型或“结构化子类型”)。

语法:
```
interface interface_name{
    //字段声明
    //方法声明
}
```
接口只是声明方法和字段，它不能用来建造任何东西。不需要将接口转换为JavaScript来执行，它们对运行时JavaScript没有任何影响。因此，它们的唯一目的是在开发阶段提供帮助。

#### 16.你如何理解Typescript中的类？列出类的一些特性。
TypeScript是一种面向对象的JavaScript语言，支持OOP编程特性，比如类、接口等。与Java一样，类是用于创建可重用组件的基本实体。它是一组具有公共属性的对象。类是创建对象的模板或蓝图。它是一个逻辑实体。“class”关键字用于在Typescript中声明一个类。

例子:
```js
class Student{
    code:number;
    name:string;
    constructor(code:number,name:string){
        this.name=name
        this.code=code
    }
    getGrade():string{
        return "AAA"
    }
}
```

类的特征是

- 继承
- 封装
- 多态性
- 抽象

#### 17.本地Javascript支持模块吗？
不。目前，本地JavaScript不支持模块。为了在Javascript中创建和使用模块，我们需要一个像CommonJS这样的外部模块。

#### 18.TypeScript支持哪些面向对象的术语？
TypeScript支持以下面向对象的术语。
- 模块
- 类
- 接口
- 继承
- 数据类型
- 成员函数

#### 19.如何从TypeScript的子类调用基类构造函数？
super()函数的作用是: 从子类中调用父类或基类构造函数。

#### 20.如何在TypeScript中实现继承？
继承是一种从另一个类获取一个类的属性和行为的机制。它是OOPs语言的一个重要方面，并且具有从现有类创建新类的能力，继承成员的类称为基类，继承这些成员的类称为派生类。

继承可以通过使用extend关键字来实现。我们可以通过下面的例子来理解它。
```js
class Shape{
    area:number
    constructor(area:number){
        this.area:area
    }
}
class Circle extends Shape{
    display():void{
        console.log("圆的面积"+this.area)
    }
}
var obj=new Circle(555)
obj.display()
```

#### 21.Typescript中的模块是什么？
模块是创建一组相关变量、函数、类和接口等的强大方法。它可以在它们自己的范围内执行，而不是在全局范围内。换句话说，在模块中声明的变量、函数、类和接口不能在模块外部直接访问。

创建一个模块

可以使用export关键字创建模块，也可以在其他模块中使用import关键字。

```js
module module_name{
    class xyz{
        export sum(x,y){
            return x+y
        }
    }
}
```
#### 22.内部模块和外部模块有什么区别？

内部模块|外部模块
--|--
内部模块用于将类、接口、函数和变量逻辑地分组到一个单元中，并可以导出到另一个模块中。|外部模块用于隐藏模块定义的内部语句，并且只显示与声明的变量相关的方法和参数。
内部模块在Typescript的早期版本中。但是在最新版本的TypeScript中使用名称空间仍然支持它们。|外部模块在最新版本的TypeScript中称为模块。
内部模块是其他模块(包括全局模块和外部模块)的本地或导出成员|外部模块是使用外部模块名称引用的单独加载的代码体。
内部模块使用指定其名称和主体的moduledeclaration来声明。|外部模块被编写为一个单独的源文件，其中包含至少一个导入或导出声明。
例子: module Sum {      export function add(a, b) {          console.log(“Sum: ” +(a+b));      }   }|例子: export class Addition{      constructor(private x?: number, private y?: number){      }      Sum(){          console.log(“SUM: ” +(this.x + this.y));      }  }

#### 23.Typescript中的名称空间是什么？如何在Typescript中声明名称空间？
名称空间是用于对功能进行逻辑分组的一种方式。名称空间用于在内部维护typescript的遗留代码。它封装了共享某些关系的特性和对象。名称空间也称为内部模块。名称空间还可以包括接口、类、函数和变量，以支持一组相关功能。

注意: 名称空间可以在多个文件中定义，并允许将每个文件都定义在一个地方。它使代码更容易维护。

用于创建名称空间的语法
```
namespace <namespace_name>{
    export interface I1{}
    export class c1{}
}
```
#### 24.解释在TypeScript中的装饰器？
修饰符是一种特殊类型的声明，可以应用于类、方法、访问器、属性或参数。修饰符只是以@expression符号为前缀的函数，其中表达式必须求值为一个函数，该函数将在运行时用有关修饰声明的信息调用。

TypeScript装饰器以声明的方式将注释和元数据添加到现有代码中。装饰器是为ES7提出的一个实验性特性。它已经被一些JavaScript框架使用，包括Angular 2。装饰器在未来的版本中可能会改变。

要启用对decorator的实验支持，我们必须在命令行或在我们的tsconfig.json中启用experimental aldecorators编译器选项:

命令行
```
tsc --target ES5 --experimentalDecorators
```
tsconfig.json
```
{
    "compilerOptions":{
        "target":"ES5",
        "experimentalDecorators":true
    }
}
```
#### 25.什么是混合mixin？
在Javascript中，mixin是一种从可重用组件构建类的方法，通过组合称为mixin的更简单的部分类来构建它们。

这个想法很简单，不是类a扩展类B来获得它的功能，而是函数B获取类a并返回一个新类，这个类具有这个添加的功能。函数B是一个混合函数。

#### 26.TypeScript类中属性/方法的默认可见性是什么？
Public是TypeScript类中属性/方法的默认可见性。

#### 27.TypeScript是如何在函数中支持可选参数的
与JavaScript不同，如果我们试图调用一个函数而不提供其函数签名中声明的参数的确切数量和类型，那么TypeScript编译器将抛出一个错误。为了克服这个问题，我们可以通过使用问号符号(‘?’)来使用可选参数。这意味着可以或不可以接收值的参数可以附加一个’?”“可选的。
```js
function fn(arg1: number, arg2? :number) {              
}因此，arg1总是必需的，而arg2是一个可选参数  
```

因此，arg1总是必需的，而arg2是一个可选参数。

注意: 可选参数必须遵循要求的参数。如果我们想让arg1成为可选的，而不是arg2，那么我们需要改变顺序，arg1必须放在arg2之后。
```js
function fn(arg2:number,arg1?:number)
```

#### 28.JavaScript不支持函数重载，但TypeScript是否支持函数重载？
JavaScript不支持函数重载，但TypeScript是否支持函数重载？
```js
//带有字符串类型参数的函数  
function add(a:string,b:string):string

//带有数字类型参数的函数
function add(a:number,b:number):number

//函数定义
function add(a:any,b:any):any{
    return a+b
}
```
在上面的例子中，前两行是函数重载声明。它有两次重载，第一个签名的参数类型为string，而第二个签名的参数类型为number。第三个函数包含实际实现并具有any类型的参数。任何数据类型都可以接受任何类型的数据。然后，实现检查所提供参数的类型，并根据供应商参数类型执行不同的代码段。

#### 29.可以调试任何TypeScript文件吗？
是的。要调试任何TypeScript文件，我们需要.js源映射文件。因此，使用—sourcemap标志编译.ts文件以生成源映射文件。
```
tsc -sourcemap file1.ts
```
这将创建file1.js和file1.js.map，而file1.js的最后一行是源映射文件的引用。
```
//# sourceMappingURL=file1.js.map
```
#### 30.什么是TypeScript定义管理器？为什么我们需要它？
TypeScript定义管理器(TSD)是一个包管理器，用于直接从社区驱动的DefinitelyTyped库中搜索和安装TypeScript定义文件。

假设我们想在.ts文件中使用一些jQuery代码。
```
$(document).ready(function(){
    
})
```
现在，当我们尝试使用tsc编译它时，它会给出一个编译时错误: 找不到名称“$”。因此，我们需要通知TypeScript编译器“$”属于jQuery。要做到这一点，TSD就要发挥作用。我们可以下载jQuery类型定义文件并将其包含在.ts文件中。以下是实现这一目标的步骤:

1. 安装TSD
```
npm install tsd -g
```
2. 在ts目录中，通过运行创建一个新的ts项目
```
tsd init
```
3. 安装jQuery的定义文件
```
tsd query jquery --action install
```
4. 上面的命令将下载并创建一个包含以“.d.ts”结尾的jQuery定义文件的新目录。现在，通过更新TypeScript文件以指向jQuery定义来包含定义文件。
```
 <!-- <reference path="typings/jquery/jquery.d.ts" />   -->
$(document).ready(function(){

})
```
现在，再次编译。这次将生成js文件，没有任何错误。因此，TSD的需要帮助我们获得所需框架的类型定义文件。