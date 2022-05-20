---
icon: javascript
footer: 总有一条蜿蜒在童话镇里七彩的河
tag: js
---
# ES6 
>[阮一峰ES6](https://es6.ruanyifeng.com/)
## let 和 const 命令
> `let` 和 `const` 区别 const声明时必须指定变量 let 不需要   const 声明的变量地址不可改变
```javascript
    1.  //let 不允许重复声明

        let a = 10
        let a = 111 // 报错

    2.  //块级作用域

        {
            let a = 10
        }
        {
            console.log(a)  //报错  
        }

    3.  //暂时性死区 代码块内为声明不能使用

        var tmp = 123;

        if (true) {
        tmp = 'abc'; // ReferenceError
        let tmp;
        }

    3.  //没有变量声明提升

        // var 的情况
        console.log(foo); // 输出undefined
        var foo = 2;

        // let 的情况
        console.log(bar); // 报错ReferenceError
        let bar = 2;

```
## 变量的解构赋值

### 1. 数组的解构赋值

> 数组的解构赋值属于模式匹配

```javascript
    let [foo, [[bar], baz]] = [1, [[2], 3]];
    foo // 1
    bar // 2
    baz // 3

    let [ , , third] = ["foo", "bar", "baz"];
    third // "baz"

    let [x, , y] = [1, 2, 3];
    x // 1
    y // 3

    let [head, ...tail] = [1, 2, 3, 4];
    head // 1
    tail // [2, 3, 4]

    let [x, y, ...z] = ['a'];
    x // "a"
    y // undefined
    z // []

    // 指定默认值

    let [foo = true] = [];
    foo // true

    let [x, y = 'b'] = ['a']; // x='a', y='b'
    let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
```
### 2. 对象的解构赋值
> 对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
> 
> 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
```JavaScript
    let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };  
    // 简写
    let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
    foo // "aaa"
    bar // "bbb"

    let { baz } = { foo: 'aaa', bar: 'bbb' };
    baz // undefined

    //默认值

    var {x = 3} = {};
    x // 3

    var {x, y = 5} = {x: 1};
    x // 1
    y // 5

    var {x: y = 3} = {};
    y // 3

    var {x: y = 3} = {x: 5};
    y // 5

    var { message: msg = 'Something went wrong' } = {};
    msg // "Something went wrong"
```

### 3.字符串的新方法
+ `includes()`：返回布尔值，表示是否找到了参数字符串。
+ `startsWith()`：返回布尔值，表示参数字符串是否在原字符串的头部。
+ `endsWith()`：返回布尔值，表示参数字符串是否在原字符串的尾部。
+ `at()`方法接受一个整数作为参数，返回参数指定位置的字符，支持负索引（即倒数的位置）
+ `replaceAll()` 替换匹配到的字符 返回新的字符串
```JavaScript
    let s = 'Hello world!';

    s.startsWith('Hello') // true
    s.endsWith('!') // true
    s.includes('o') // true

    // 这三个方法都支持第二个参数，表示开始搜索的位置。

    let s = 'Hello world!';

    s.startsWith('world', 6) // true
    s.endsWith('Hello', 5) // true
    s.includes('Hello', 6) // false

    // replaceAll()


```
### 4.Class基本用法
1. 必须使用`new` 关键字构造实例,不存在变量声明提升
2. 一个类必须有`constructor()`方法,如果没有显示定义,一个空的`constructor()`会被默认添加
3. `constructor()`默认返回实例对象(即this)
```javascript
    class Person {
        constructor(age,name){
            this.name = name
            this.age = age
        }
        say(){
            console.log(`我是${this.name}今年${this.age}岁`)
        }
        get prop(){
            return 'prop'
        }
        set prop(value){
            console.log('setter':+value)
        }
    }
    let people = new Person(18,'小明')

    people.hasOwnProperty('name') // true
    people.hasOwnProperty('age') // true
    people.hasOwnProperty('say') // false
    people.__proto__.hasOwnProperty('say') // true

```
4. 实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）
5. get 和 set 可以对某个属性拦截 进行自定义存取
6. 静态属性和方法需要加`static`关键字,就表示该方法不会被实例继承，而是直接通过类来调用,子类可以继承父类静态方法,可以在super对象上调用也可以在子类调用
```JavaScript
class Foo {
  static classMethod() {
    return 'hello';
  }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function
class SonFoo extends Foo{
    constructor(){
        super()
    }
    say(){
        super.classMethod()
    }
}
SonFoo.classMethod()
```
### 5.Class子类
1. `extends`关键字实现继承，让子类继承父类的属性和方法
2. 子类必须在`constructor()`方法中调用`super()`，否则就会报错<br/>
    + 为什么要调用`super()`? <br/>
      **这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，添加子类自己的实例属性和方法。如果不调用super()方法，子类就得不到自己的this对象。**
    + 为什么子类的构造函数，一定要调用`super()`? <br/>
      **原因就在于 ES6 的继承机制，与 ES5 完全不同。ES5 的继承机制，是先创造一个独立的子类的实例对象，然后再将父类的方法添加到这个对象上面，即“实例在前，继承在后”。ES6 的继承机制，则是先将父类的属性和方法，加到一个空的对象上面，然后再将该对象作为子类的实例，即“继承在前，实例在后”。这就是为什么 ES6 的继承必须先调用super()方法，因为这一步会生成一个继承父类的this对象，没有这一步就无法继承父类。**
      `注意，这意味着新建子类实例时，父类的构造函数必定会先运行一次。`
   
