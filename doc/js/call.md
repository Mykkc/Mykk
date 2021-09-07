---
icon: javascript
footer:  多想听你的话 别太晚回家
tag: javascript
---
# bind call apply 的区别
+ 相同点: 都可以改变`this`指向,不传为undefined 指向window
+ 不同点
  +  bind返回的是一个函数 需要再次调用 接收一个参数列表
  +  call 传参时接收一个参数列表
  +  apply 传参数接收一个参数数组
  +  如果这个返回的新的函数作为构造函数创建一个新的对象，那么此时 this 不再指向传入给 bind 的第一个参数，而是指向用 new 创建的实例
+ 例子
```JavaScript
    const person = {
        name:'小明',
        age:19,
        say:function(school,grade){
            console.log(`${this.name}说我今年${this.age}岁,在${school}小学上${grade}年级`)
        }
    }
    const person2 = {
        name:'老王',
        age:22
    }
    person.say('育才',9)                   //小明说我今年19岁,在育才小学上9年级
    person.say.call(person2,'希望',5)      //老王说我今年22岁,在希望小学上5年级
    person.say.apply(person2,['实验',2])   //老王说我今年22岁,在实验小学上2年级
    person.say.bind(person2,'惠民',6)()    //老王说我今年22岁,在惠民小学上6年级
    // 也可以在调用时传入参数
    person.say.bind(person2)('希望',3)     //老王说我今年22岁,在希望小学上3年级
```
# 防抖和节流
+ 防抖对于短时间内连续触发的事件，防抖的含义就是让某个时间期限内，事件处理函数只执行一次。
  ```JavaScript
    debounce(fn,delay=1000){
        let timer=null
        return function(){
            if(timer){
                clearTimeout(timer)
                timer=setTimeout(fn,delay)
            }else{
                timer = setTimeout(fn,delay)
            }
        }
    }
  ```
+ 节流就是让函数执行一次后，在某个时间段内暂时失效，过了这段时间后再重新激活（类似于技能冷却时间）
```JavaScript
    throttle(fn,delay=100){
        let valid  = true
        return function(){           
            if(!valid){
                return
            }else{
                valid = false
                setTimeout(() => {
                    fn()
                    valid = true;
                }, delay)            
            }
        }
    }
```