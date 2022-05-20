---
icon: react
footer: 为你辗转反侧为你放弃世界有何不可
tag: react
index: 1
---
# React学习
## Class组件
```js
export default class First extends Component {
    render() {
        return (
            <div>
                hello world
            </div>
        )
    }
}
```
## 函数式组件
```js
export default function Fun() {
    let style = {
        color:'red'
    }
    return (
        <div>
            <h1 className="index">这是好</h1>
            <div style={{background:'red'}}>
                我是函数式组件
            </div>
            <b style={style}>哈哈哈</b>
            {10+23}
        </div>
    )
}
```
## React 事件绑定
```js
export default class First extends Component {
    a = 10
    render() {
        return (
            <div className="index">
                <div>firstComponent</div>
                <h2>12312</h2>
                <button onClick={() => {console.log('点击') }}>点击</button>
                <button onClick={this.handle}>点击2</button>
                <button onClick={this.handle2}>点击3</button>
                <button onClick={
                    () => { this.handle3()}
                }>点击3</button>
                <button onClick={this.handle4.bind(this)}>点击4</button>
            </div>
        )
    }
    handle() {
        console.log('click1')
    }
    // 箭头函数
    handle2 = () => { 
        console.log('click2')
    }
    handle3 = () => {
        console.log('click3')
    }
    handle4() {
        console.log('click4')
    }
}
```
+ 事件绑定通过事件代理的方式进行绑定
+ 绑定事件一般采用 `handle2`以及`handle3`的方式进行 不需要改变`this`指向
## State状态
+ React中数据发生改变需要主动调用`setState`函数来使视图重新渲染
+ `setState`函数接收第二个参数为回调函数,状态和dom更新完会触发回调函数
+ `*React18之后仍是异步执行*
+ `setState`函数在同步任务中是异步执行更新状态,在异步任务中是同步执行更新状态
```js
export default class State extends Component {
    state = {
        count:1
    }
    add = () => {
        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count)
        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count)

        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count)

    }
    add2 = () => {
        setTimeout(() => {
            this.setState({
                count:this.state.count+1
            })
            console.log(this.state.count)
            this.setState({
                count:this.state.count+1
            })
            console.log(this.state.count)
            this.setState({
                count:this.state.count+1
            })            
            console.log(this.state.count)
        }, 0);
    }
    render() {
        return (
            <div >
                Center{this.state.count}
                <button onClick={this.add}>add1</button>
                <button onClick={this.add2}>add2</button>
            </div>
        )
    }
}
```
## Ref的使用
+ 通过React.createRef()函数来创建Ref获取dom节点
```js
  export default class Ref extends Component{
    constructor() {
        super()
        this.iptRef = React.createRef()
    }
    ref2 = React.createRef()
    render(){
        return (
            <div>
                <input ref={this.iptRef} />
                <button onClick={() => {
                    console.log(this.iptRef.current)
                }}>点击</button>
                <input ref={this.ref2} />
                <button onClick={() => {
                    console.log(this.ref2.current.value)
                }}>点击</button>
            </div>
        )
    }
}
```
## 组件通讯
+ props

    ```js
    //父组件
    `<Tabla title="First" />
    <Tabla title="Second" />
    <Tabla title="Third"/>`
    //子组件
    export default class Tabla extends Component{
        render() {
        //    let  {title} = this.props
            return (
                <div>
                    props:{this.props.title}
                </div>
            )
        }
    }
    ```
  1. props类型验证及默认属性

    ```js
    import PropTypes from 'prop-types';
    export default class Tabla extends Component{
        // 第二种属性验证
        static propTypes = {
            title: PropTypes.string,
            isShow:PropTypes.bool
        }
        render() {
        //    let  {title} = this.props
            return (
                <div>
                    props:{this.props.title}{this.props.isShow}
                </div>
            )
        } 
    }
    // 第一种属性验证
    // Tabla.propTypes = {
    //     title: PropTypes.string,
    //     isShow:PropTypes.bool
    // }
    Tabla.defaultProps = {
        isShow:false
    }
    ```
+ 函数式组件的props
```js
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
 }
```
+ context通讯方式
```js
//父组件
const GlobalContext = React.createContext()
export {GlobalContext}
export default class Context extends Component {
    state = {
        person: {
            name: '123',
            age:'12312'
        }
    }
    render() {
        return (
            <GlobalContext.Provider value={this.state.person}>
                <div>
                <Context1 />
                </div>
            </GlobalContext.Provider>
        )
    }
}
// 子组件
import { GlobalContext } from "./context";
export default class Context1 extends Component{
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (value) => {
                        console.log(value)
                        return (
                            <div>
                                <div>context1</div>
                                {/* <div>{ value}</div> */}
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}  
```
  
## 受控组件与非受控组件
```js
//受控组件
export default class Form extends Component{
    iptRef = React.createRef()
    state = {
        useName:''
    }
    change = (e) => { 
        this.setState({
            useName:e.target.value
        })
    }
    render() {
        return (
            <div>
                <input value={this.state.useName} onChange={this.change} />
                <button onClick={() => {
                    this.setState({
                        useName:''
                    })
                }}>reset</button>
            </div>
        )
    }
}
// 非受控组件
export default class Form extends Component{
    iptRef = React.createRef()
    render() {
        return (
            <div>
                <input defaultValue={'ck'} type="text" ref={this.iptRef} />
                <button onClick={
                    () => {
                        console.log(this.iptRef.current.value)
                   }
                }>confirm</button>
                <button onClick={() => {
                    this.iptRef.current.value=''
                }}>reset</button>
            </div>
        )
    }
}
```