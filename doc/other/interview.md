---
icon: box
footer:  长路漫漫,唯剑作伴
tag: box
---
# test
###  从输入一个 URL 地址到浏览器完成渲染的整个过程
+ 浏览器查找当前 URL 是否存在缓存，并比较缓存是否过期
+ DNS解析域名对应的IP地址
+ 建立TCP/IP链接(三次握手)
+ 发送HTTP请求
+ 服务器接受请求响应数据
+ 浏览器接受数据并渲染页面
+ 关闭链接 (四次挥手)
### 什么是事件代理 (事件委托)
   #### &emsp;&emsp; 事件代理就是在每个子节点的监听放到父节点进行监听减少监听 原理是利用了事件的冒泡来设置每个子节点
+ 捕获阶段: 从window对象传导到目标节点（上层传到底层）称为“捕获阶段”（capture phase），捕获阶段不会响应任何事件
+ 目标阶段: 在目标节点上触发，称为目标阶段
+ 冒泡阶段:从目标节点传导回window对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）
+ 优点: 减少dom的事件监听和操作及内存 提高性能
+ 缺点: 新增加的元素也会触发父节点的事件监听DOM节点过深也会导致性能损失
### bind call apply 的区别
+ 相同点: 三者都可以改变`this`指向
+ 不同点: bind和call一样接收的参数是列表 bind返回的是函数需要再次调用 apply的参数是数组 
### 什么是闭包
#### 闭包就是在一个作用域内部变量能被外部访问
+ 优点:可以利用闭包设置私有变量避免被污染
+ 缺点: 闭包处理不当肯能会照成内存泄漏,因为闭包会存在内存中不会被垃圾回收
+ 实际场景运用: 常见的防抖节流函数
### css 优先级是怎么计算的
+ !important>行内>ID>类名>标签>通配符
### 事件循环 EventLoop
#### JS是单线程运行 分为同步和异步 异步又分为宏任务和微任务 
+ 宏任务:包括整体代码script，setTimeout，setInterval
+ 微任务: Promise.then 
+ 微任务会全部执行按照先入先出的顺序，而宏任务会一个一个来执行
### HTTP常用状态码
+ 200 请求成功
+ 301 请求资源被永久移动
+ 302 请求资源被临时移动
+ 304 请求资源未修改 浏览器会使用缓存
+ 400 请求不被服务器理解 请求失败
+ 401 未授权 需要登录才能获取
+ 403 禁止请求 服务器拒绝链接
+ 404 未找到相关资源
+ 405 请求方法不符合
+ 500 服务器错误
+ 502 错误网关  服务器作为网关或代理，从上游服务器无法收到无效响应
+ 503 服务器暂时不可用
### position 有哪些值，作用分别是什么
+  static(没有定位)是 position 的默认值，元素处于正常的文档流中
+  relative(相对定位)是指给元素设置相对于原本位置的定位，元素并不脱离文档流，因此元素原本的位置会被保留，其他的元素位置不会受到影响
+  fixed 元素总是相对于 body 定位的
+  sticky 设置了 sticky 的元素，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是 top、left 等属性无效），当该元素的位置将要移出偏移范围时
### 垂直水平居中
+ flex布局 display:flex; justify-content:center;algin-items:center;
+ 绝对定位+transform: position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)
### Vue 组件通信的方式
+ props,$emit 父子间数据传递
+ $children, $parent 获取当前父或子组件实例
+ $attrs 和 $listeners  A->B->C。Vue 2.4 开始提供了 $attrs 和 $listeners 来解决这个问题
+ provide,inject 来注入实例和接收
+ $refs 获取组件的实例
+ eventBus 事件传递
+ Vuex 状态管理
### Vue 响应式原理
#### 数据劫持+观察者模式
对象内部通过 defineReactive 方法，使用 Object.defineProperty 将属性进行劫持（只会劫持已经存在的属性），数组则是通过重写数组方法来实现。当页面使用对应属性时，每个属性都拥有自己的 dep 属性，存放他所依赖的 watcher（依赖收集），当属性变化后会通知自己对应的 watcher 去更新(派发更新)。
### Vue的hash和history的区别
hash路由是利用 地址后面的#发送改变 每一次改变 hash（window.location.hash），都会在浏览器的访问历史中增加一个记录 
可以通过`window.addEventListener("hashchange", funcRef, false)`监听hash改变
history路由是利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法来改变url