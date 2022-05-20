---
icon: react
footer: 夏末秋凉里带一点温热
tag: react
index: 3
---
# Hooks
+ `useState` 能够组件重新渲染时缓存数据
```js
export default function Hooks () {
    const [userInfo, setUserInfo] = useState({
        name: 'xiw',
        age: 1213,
        info: {
            age: 123,
            play:'bbb'
        }
    })
    const [userName, setUserName] = useState('Ming')
    // 也可以接受一个函数 只会第一次加载的时计算
    const [userName, setUserName] = useState(()=>'Ming')
    useLayoutEffect(() => {
        setUserName(userName.toLocaleLowerCase())
    }, [userName])
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = count
    })
    return (
        <div>
            {
                Object.keys(userInfo).map(res => { 
                    return (
                        <div key={res}>
                            name:{res}
                        </div>
                    )
                })
            }
            <div >
                {userInfo.age}
            </div>
            <button onClick={() => {
                setUserInfo({...userInfo,age:1111})
            }}>
                ddddd
            </button>
        </div>
    )
}
```
+ `useEffect` 副作用函数 根据特殊条件执行
  - `useEffect(() => {console.log(1)})` 组件每次渲染都会执行
  - `useEffect(() => {console.log(1)},[])` 组件第一次加载执行
  - `useEffect(() => {console.log(1)},[count])` 依赖的值发生改变后执行

```javascript
export default function Hooks () {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = count
    })
    useEffect(() => {
        document.title = count
        return ()=>{
            console.log('destroy') // 组件销毁时执行
        }
    })
    return (
        <div>
            <h2>{userName}</h2>
            <button onClick={() => {
                setCount(count+1)
            }}>change</button>
        </div>
    )
}
```

+ `memo` 组件中的数据如果没有发生变化 阻止组件更新 类似类组件的`PureComponent`和`shouldComponent`
```javascript
function Mobx() {
  const [count,setCount] = useState(0)
 //父组件更新 并不会重新渲染 Foo 组件
  return (
    <div>
      Mobx
      <div>{count}</div>

      <button onClick={()=>setCount(222)}>+++</button>
      <Foo  />
    </div>
  )
}
const Foo = memo(Son)   
function Son() {
  return <div>
    <button>Son</button>
  </div>
}
```

+ `useCallback`  
  - 防止因为组件重新渲染 导致内部方法被重新创建,起到缓存作用 性能优化 缓存函数
```javascript
function Mobx() {
  let { countStore } = useRootStore()
    {
        // 子组件依赖了change 函数 每次渲染时 change函数都会重新创建 所以用memo 之后仍会子组件仍会渲染
    }
  console.log(countStore)
  const change = () => {
    countStore.addCounter()
  }
  return (
    <div>
      Mobx
      <div>{countStore.count}</div>
      <button onClick={()=>countStore.addCounter()}>+++</button>
      <button onClick={() => countStore.cutCounter()}>---</button>
      <Foo change={change} />
    </div>
  )
}
const Foo = memo(Son)
function Son(props) {
  console.log('Son')
  return <div>
    <button onClick={props.change}>Son</button>
  </div>
}
```

+ `useMemo` 相等于Vue`computed`返回一个计算后的值`  useMemo(() => first, [second])` 根据依赖项返回一个计算后的值
+ `useRef` 获取dom元素对象  还可以保存一些数据 保存的数据更改不会触发组件重新渲染
```js
export default function Ref() {
    const Ref = useRef()
    let a = useRef(0)  //保存变量
    return (
        <div>
            <input type="text" ref={Ref} onChange={() => {
                console.log(Ref.current.value)
            }} />
            <div>
                {a.current}
            </div>
            <button onClick={() => {
                a.current++
                console.log(a.current)
            }}>qqq</button>
        </div>
    )
}
```
+ `useContext` 跨级组件通信
+ `useReduce` 跨级组件通信
```js
const reducer = (preState,action)=>{
    switch (action.type) {
        case 'cut':
            return {count:preState.count-1}
        case 'add':
            return {count:preState.count+1}
        default:
            break;
    }
}
const initState = {
    count:0
}
export default function R() {
    const [state, dispatch] = useReducer(reducer,initState)
    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type:'cut'
                })
            }}>---</button>
            { state.count}
            <button onClick={() => {
                dispatch({
                    type:'add'
                })
            }}>+++</button>

        </div>
    )
}
```