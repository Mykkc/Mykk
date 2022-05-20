const person = {
    name:'小明',
    age:19,
    say:function(school,grade){
        console.log(`${this.name}说我今年${this.age}岁,在${school}小学上${grade}年级`)
    }
}
person.say('育才',9) //小明说我今年19岁,在育才小学上9年级
const person2 = {
    name:'老王',
    age:22
}
person.say.call(person2,'希望',5) //老王说我今年22岁,在希望小学上5年级
person.say.apply(person2,['实验',2]) //老王说我今年22岁,在实验小学上2年级
person.say.bind(person2,'惠民',6)()  //老王说我今年22岁,在惠民小学上6年级
// 也可以在调用时传入参数
person.say.bind(person2)('希望',3)  //老王说我今年22岁,在惠民小学上6年级
class Subscriber{
    static events = {}
    constructor(){
        this.events = {};
    }
    //订阅消息
    on(event,callback){
        if(!this.events[event]){
            this.events[event] = [callback]
        }else{
            this.events[event].push(callback)
        }
    }
    //删除订阅
    off(event,callback){
        if(!this.events[event]) return
        this.events[event] = this.events[event].filter(res=> res!==callback)
    }
    // 一次订阅
    once(event,callback){
        this.on(event, fn);
        function fn() {
            callback();
            this.off(event, fn);
        }
    }
    //触发事件
    emit(event,...rest){
        console.log(this.events)
        this.events[event]&&this.events[event].forEach((fn) => fn.apply(this, rest))
    }
}
const testClick = new Subscriber()
testClick.on('test',(res)=>{
    console.log(2222,res)
})
testClick.on('test',(res)=>{
    console.log(999,res)
})
testClick.on('test',(res)=>{
    console.log(999,res)
})
testClick.emit('test','wwww')
const wwww = new test('cccc')
wwww.say()
function debounce(fn,delay=1000){
    let timer=null
    return function(){
        console.log(11111)
        if(timer){
            clearTimeout(timer)
            timer=setTimeout(fn,delay)
        }else{
            timer = setTimeout(fn,delay)
        }
    }
}
let a = setInterval(debounce(()=>{console.log(999)},500),300)
setTimeout(()=>{
    clearInterval(a)
},5000)

//最长字符串
let str = 'pwwkewm'
function te(m){
    if(m.length===0) return 0
    let str = m
    let length=0
    let arr=[]
    for(i=0;i<str.length;i++){
        arr.push(str[i])
        console.log(arr)
        for(j=1;j<str.length-i-1;j++){
            if(str[i]!=str[j]&&!arr.includes(str[j])){
                arr.push(str[j])
            }else{
                console.log(222)
                if(arr.length>length){
                    length = arr.length
                }
                arr=[]
            }
        }
    }
    return length
}
// console.log(te(str))
console.log(te('c'))
// console.log(te('cccc'))

function getRandomInt(minNum,maxNum){
    return Math.floor(Math.random()*(maxNum-minNum+1)+minNum)
}
function debounce2(fn,time) {
    let timer =null
    return function(){
        if(timer){
            clearTimeout(timer)
            timer=setTimeout(fn,time)
        }else{
            timer=setTimeout(fn,time)
        }
    }
}
function throttle(fn,time){
    let timer = true
    if(!timer){
        return
    }else{
        timer=false
        setTimeout(()=>{
            fn()
            timer = true
        },time)
    }

}
0123

str = "()({))"
w = {
    '(':')',
    '{':'}',
    '[':']',
}
function check(str){
    let s = str
    for(i=0;i<s.length;i++){
        let m = s[i]
        const arr=[]
        switch (m) {
            case '(':
                arr.push(')')
                break;
            case '[':
                arr.push(']')
                break;
            case '{':
                arr.push('}')
                break;
            default:
                if(m != arr.pop()){
                    return false
                }
                break;
        }
        return arr.length===0
    }
}

console.log(check(str))

let obj = {
    a:1,
    b:2,
    c:3,
    d:4
}
for(i in obj){
    console.log(i)
}
num = '512345196'
for(i=0;i<str.length-1;i++){
    const arr = [i]
    let length=0
    for(j=1;j<str.length-i-1;j++){
        if(str[i]!==str[j]){
            arr.push(str[j])
        }else{
            
        }
    }
}