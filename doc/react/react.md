---
icon: react
footer: 从前初识这世间 万般流连
tag: react
index: 2
---
# 生命周期
## React插槽
```js
//子组件
export default class Slots extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
//父组件
export default class Father extends Component {
    render() {
        return (
            <div>
                <Slots>
                    <div>
                    name
                    </div>
                </Slots>
            </div>
        )
    }
}

```
## 组件的生命周期
```js
export default class LifeCycle extends Component {
    constructor() {
        super()
        this.state = {
            count:1
        }
    }
    //初始化阶段

    // 将要渲染 无法获取dom节点  已废弃
    componentWillMount() {
        console.log('componentWillMount')
    }
    // 可以访问dom节点
    componentDidMount() {
        console.log('componentDidMount')
        // 数据请求ajax
        
    }

    // 运行中

    // 组件收到父组件数据更新时  已废弃
    componentWillReceiveProps() {
         console.log('componentWillReceiveProps')
    }
    // 新生命周期
    // 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用
    // 它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
    static getDerivedStateFromProps() {
        return {

        }
    }
    // 组件是否要更新
    shouldComponentUpdate(nextProps,nextState) {
        // return true   更新
        // return false  不更新
        console.log(nextProps,nextState)
        return true
    }

    // 数据更新到dom前  已废弃
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    // 新版   render之后调用  必须和componentDidUpdate 一起使用
    static getSnapshotBeforeUpdate() {
        
    }

    //数据更新到dom后
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    // 组件将要销毁时
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        console.log('render')
        return (
            <div>
                <h2>{ this.state.count}</h2>
                <h1 onClick={() => {
                    this.setState({
                        count:this.state.count+1
                    })
                }} >LifeCycle</h1>
            </div>
        )
    }

}
```
### React性能优化
+ 手动优化`shouldComponentUpdate`
+ 组件优化`PureComponent`
