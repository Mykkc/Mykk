---
icon: typescript
footer: 总有一条蜿蜒在童话镇里七彩的河
tag: ts
---
# ts基础
```typescript
enum Days{
    Sunday=3,
    Monday=2,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
console.log(Days['Sunday']);

class Person {
    title = 1
    constructor(public name: string, public age: number) { 
        this.name = name
        this.age = age
        this.title =999
    }
    say() {
        console.log(this.name, this.age)
    }
}
abstract class Person2 {
    title = 1
    constructor(public name: string, public age: number) {
        this.name = name
        this.age = age
        this.title = 999
    }
    abstract say(): void
}
class Student extends Person2 {
    constructor(name: string, age: number) {
        super(name, age)
    }
    say(): void {
        console.log(this.name, this.age)
    }
}
interface Test {
    name: string
    age: number,
    like:string
    say(): void
}
interface Test {
    sex:string
}
class Test2 implements Test {
    name: string;
    age: number;
    like: string;
    sex = ''
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
        this.like = 'like'
    }
    say(): void {
        console.log(this.name, this.age)
    }
}
// 泛型
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

function MM<T>(name: T):T{
    return name
}
MM(123)
// 泛型约束
interface Go{
    name:string
}
function MM2<T extends Go>(name: T): T{  // T extends Go 表示T必须是Go的子类 
    return name
}
MM2({ name: '123', age: 10 })

let ccc:RegExp
ccc = /213/
let mmmm = 'str'
interface q {
    name: string,
    age: number
}
interface w{
    age:string
}
type Useless = q | w;
```