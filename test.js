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
class test {
    constructor(name) {
        this.name = name
        this.age = 99
        this.say=()=>{
            console.log(this.name, this.age)
        }
    }
}
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
    if(m.length=0) return 0
    let str = m.split('')
    let length=0
    let arr=[]
    for(i=0;i<str.length;i++){
        arr.push(str[i])
        for(j=1;j<str.length-i-1;j++){
            if(str[i]!=str[j]&&!arr.includes(str[j])){
                arr.push(str[j])
            }else{
                if(arr.length>length){
                    length = arr.length
                }
                arr=[]
            }
        }
    }
    return length
}
console.log(te(str))
console.log(te(''))
console.log(te('cccc'))
