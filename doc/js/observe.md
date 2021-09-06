---
icon: javascript
footer: 儿时凿壁投了谁家的光 宿昔不梳一苦十年寒窗
tag: js
---
# 发布订阅的与观察者模式
![图片](https://thumbnail0.baidupcs.com/thumbnail/15891adc8r0bb2940f50ce0cf92e73d8?fid=3173409102-250528-298057494930408&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-uKVXUNLWADFMf2JM%2bQo6L8D1P5I%3d&expires=8h&chkbd=0&chkv=0&dp-logid=10060780964208055&dp-callid=0&time=1630940400&size=c1920_u1080&quality=90&vuk=3173409102&ft=image&autopolicy=1)
## 观察者模式
####  观察者（Observer）直接订阅（Subscribe）主题（Subject），而当主题被激活的时候，会触发（Fire Event）观察者里的事件。
## 发布订阅
#### 订阅者（Subscriber）把自己想订阅的事件注册（Subscribe）到调度中心（Event Channel），当发布者（Publisher）发布该事件（Publish Event）到调度中心，也就是该事件触发时，由调度中心统一调度（Fire Event）订阅者注册到调度中心的处理代码。
### 差异
+ 在观察者模式中，观察者是知道 Subject 的，Subject 一直保持对观察者进行记录。然而，在发布订阅模式中，发布者和订阅者不知道对方的存在。它们只有通过消息代理进行通信。
+ 在发布订阅模式中，组件是松散耦合的，正好和观察者模式相反。
+ 观察者模式大多数时候是同步的，比如当事件触发，Subject 就会去调用观察者的方法。而发布-订阅模式大多数时候是异步的（使用消息队列）。
+ 观察者模式需要在单个应用程序地址空间中实现，而发布-订阅更像交叉应用模式