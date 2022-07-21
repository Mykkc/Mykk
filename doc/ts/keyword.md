---
icon: typescript
footer: 我听见风来自地铁和人海
tag: ts
---
# TS泛型
## 泛型介绍
  我们使用泛型对上面的代码进行重构。和我们的定义不同，这里用了一个 类型 T，这个 T 是一个抽象类型，只有在调用的时候才确定它的值，这就不用我们复制粘贴无数份代码了。
  ```typescript
  function identity<T>(arg: T): T {
    return arg;
  }
  ```
  其中 T 代表 Type，在定义泛型时通常用作第一个类型变量名称。但实际上 T 可以用任何有效名称代替。除了 T 之外，以下是常见泛型变量代表的意思：


  + K（Key）：表示对象中的键类型；
  + V（Value）：表示对象中的值类型；
  + E（Element）：表示元素类型。
## 泛型约束
```typescript
function trace<T>(arg: T): T {
  console.log(arg.size); // Error: Property 'size doesn't exist on type 'T'
  return arg;
}
```
T 理论上是可以是任何类型的，不同于 any，你不管使用它的什么属性或者方法都会报错（除非这个属性和方法是所有集合共有的）。那么直观的想法是限定传给 trace 函数的参数类型应该有 size 类型，这样就不会报错了。如何去表达这个类型约束的点呢？实现这个需求的关键在于使用类型约束。 使用 extends 关键字可以做到这一点。简单来说就是你定义一个类型，然后让 T 实现这个接口即可。
```typescript
interface Sizeable {
  size: number;
}
function trace<T extends Sizeable>(arg: T): T {
  console.log(arg.size);
  return arg;
}
```
## 泛型工具类型
为了方便开发者 TypeScript 内置了一些常用的工具类型，比如 Partial、Required、Readonly、Record 和 ReturnType 等。
### 1. typeof
typeof 的主要用途是在类型上下文中获取变量或者属性的类型
```typescript
const Message = {
    name: "jimmy",
    age: 18,
    address: {
      province: '四川',
      city: '成都'   
    }
}
type message = typeof Message;
/*
 type message = {
    name: string;
    age: number;
    address: {
        province: string;
        city: string;
    };
}
*/
```
### 2. keyof
+ `keyof` 操作符是在 TypeScript 2.1 版本引入的，该操作符可以用于获取某种类型的所有键，其返回类型是联合类型。
  ```TypeScript
  interface Person {
    name: string;
    age: number;
  }

  type K1 = keyof Person; // "name" | "age"
  type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join" 
  type K3 = keyof { [x: string]: Person };  // string | number

  ```
+ `keyof` 的作用
  例如:
  ```typescript
  function prop(obj: object, key: string) {
    return (obj as any)[key];
  }
  ```
  该函数用于获取某个对象中指定属性的属性值。因此我们期望用户输入的属性是对象上已存在的属性，那么如何限制属性名的范围呢？这时我们可以利用本文的主角 keyof 操作符：
  ```typescript
  function prop<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }
  ```
  在以上代码中，我们使用了 TypeScript 的泛型和泛型约束。首先定义了 T 类型并使用 extends 关键字约束该类型必须是 object 类型的子类型，然后使用 keyof 操作符获取 T 类型的所有键，其返回类型是联合类型，最后利用 extends 关键字约束 K 类型必须为 keyof T 联合类型的子类型。
  ```typescript
  type Todo = {
    id: number;
    text: string;
    done: boolean;
  }

  const todo: Todo = {
    id: 1,
    text: "Learn TypeScript keyof",
    done: false
  }

  function prop<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  const id = prop(todo, "id"); // const id: number
  const text = prop(todo, "text"); // const text: string
  const done = prop(todo, "done"); // const done: boolean
  ```
### 3. in
`in` 用来遍历枚举类型：
```typescript
type Keys = "a" | "b" | "c"

type Obj =  {
  [p in Keys]: any
} // -> { a: any, b: any, c: any }
```
### 4. infer
在条件类型语句中，可以用 infer 声明一个类型变量并且对它进行使用。
### 5. extends
有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束
## 映射类型
根据旧的类型创建出新的类型, 我们称之为映射类型
### 1. Partial
`Partial<T>` 将类型的属性变成可选
```typescript
interface UserInfo {
    id: string;
    name: string;
}
type NewUserInfo = Partial<UserInfo>;
const xiaoming: NewUserInfo = {
    name: 'xiaoming'
}
// NewUserInfo相当于
interface NewUserInfo {
    id?: string;
    name?: string;
}
```
### 2. Required
`Required<T>`将类型的属性变成必选
### 3. Readonly
`Readonly<T>` 的作用是将某个类型所有属性变为只读属性，也就意味着这些属性不能被重新赋值。
### 4. Pick
`Pick` 从某个类型中挑出一些属性出来
```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```
### 5.Record
`Record<K extends keyof any, T>` 的作用是将 K 中所有的属性的值转化为 T 类型
+ 定义
  ```typescript
  type Record<K extends keyof any, T> = {
    [P in K]: T;
  }
  ```
+ 例子
  ```TypeScript
  interface PageInfo {
  title: string;
  }

  type Page = "home" | "about" | "contact";

  const x: Record<Page, PageInfo> = {
    about: { title: "about" },
    contact: { title: "contact" },
    home: { title: "home" },
  };
  ```
## ReturnType
用来得到一个函数的返回值类型
+ 定义
  ```TypeScript
  type ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]) => infer R? R: any;
  ```
## Exclude
`Exclude<T, U>` 的作用是将某个类型中属于另一个的类型移除掉。
## Extract
`Extract<T, U> `的作用是从 T 中提取出 U。
## Omit
`Omit<T, K extends keyof any>` 的作用是使用 T 类型中除了 K 类型的所有属性，来构造一个新的类型
## NonNullable
`NonNullable<T>` 的作用是用来过滤类型中的 null 及 undefined 类型。
## Parameters
`Parameters<T>` 的作用是用于获得函数的参数类型组成的元组类型。
