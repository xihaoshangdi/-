# JS基础学习

## Js对象[object]
### 对象的定义
> javascript对象是无序的键值对集合
### 对象的语法
#### 对象的声明
```javascript
let obj={'key':'value'}//简略写法
let obj=new Object({'key':'value'})//标准写法
```
**键名只能是字符串**
#### 对象的属性
##### 属性名与属性值
###### 常量作属性名
每一个key都是对象的属性名，属性名会自动被转化为字符串。
###### 变量作属性名
```javascript
let key='键'
let obj={[key]:'value'}//obj={'键':'value'}
```
$[]$内的值会被识别为变量，获取变量的值之后再转化为字符串，如果$[]$内不是字符串，会先计算后再转化为字符串。
#### 对象属性操作
##### 删除属性
```javascript
delete obj.xxx||delete obj['xxx']
```
##### 查看属性
1. 查看自身所有属性：`Object.keys(obj)`
2. 查看自身+原型包含的属性：`console.dir(obj)`
3. 查看自身是否包含该属性：`'xxx' in obj`
4. 查看一个属性是自身的还是原型的：`obj.hasOwnProperty('key')`
5. 查看属性值：`obj['key'] || obj.key `

##### 修改属性
直接赋值：
```javascript
let obj={'key':'value'}
obj.key='键名' || obj['key']='键名'//两种赋值方法
```
批量赋值：`Object.assign(obj,{'键名':'值','age':18})`

#### 隐藏属性和原型
> JS中每一个对象都有一个隐藏属性`__proto__`.这个隐藏属性存储着其共有属性组成的对象的地址，这个共有属性组成的对象叫做原型。简言之：隐藏属性存储着原型的地址。

> 每一个对象都有原型，原型中存储着对象的共有属性。对象的原型也是对象，所以对象的原型也有原型。存在一个对象的根包含所有对象的共有属性，这个对象既是其他对象的原型，也有自己的原型，只是这个根的原型被人为置null。

隐藏属性包含了这个对象的共有属性，修改隐藏属性也就修改了这个对象的共有属性，换言之，也就修改了这个对象的原型。通过`Object.create()`方法将原型链插入一环。

## Js对象的类
### new关键字
```javascript
function Square(key){
  this.key=key
}//构造函数，将传入的key赋值给this地址所存储的空对象
Square.prototype.getKey=function(){
  return this.key
}
/*将getKey函数写入Square()创建对象的原型中或者说将函数写入到创建的对象的(隐藏属性||__proto__)共有属性中。*/
let square=new Square('key')
/* new Square():
1.自动创建了空对象
2.自动为空对象关联了原型，原型地址为Square.prototype
3.自动将空对象地址作为this的参数运行构造函数Square()
4.自动return this
*/
```
### 如何确定一个对象的原型
`对象.__proto__===对象的构造函数.prototype`
### class语法
```javascript
class Square{
  static x=1 //局部静态
  key=0//声明时初始化
  constructor(key){
    this.key=key
  }
  getKey(){
    return this.key
  }
  getKey:function(){
    return this.key
  }
  get key(){//只读属性
    return this.key
  }
}
```
## Js数组对象
### 数组的定义
> javascript的数组不是典型数组，而是用对象模拟的数组js的数组存储数据类型可以不同，在内存中体现为随机存储，获取数组元素的下标不是数字下标，而是字符串下标。

> 伪数组是指原型链中没有数组原型的数组，即不含有数组公共属性的数组。
#### 数组的操作
##### 数组的创建
```javascript
let arr=new Array(arrayLength)
//新建一个长度为arrayLength的数组
let arr=new Array(1,2,3)|| let arr=[1,2,3]
//新建一个长度为三的数组，数组内容为[1,2,3]
```
##### 数组的转化
```javascript
let arr='123'.split('')
/*
`split() `方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。 
`split() `函数接收两个参数。
第一个为指定的分割字符串。
第二个为分割的次数。
*/
let arr=Array.from('123')
/*
`Array.from() `方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
`Array.from() `函数接收三个参数。
第一个是想要转换成数组的伪数组对象或可迭代对象。
第二个(可选)为新数组中每个元素要执行的回调函数。
第三个(可选)为执行的回调函数的`this`对象。
*/
let arr=[1,2].concat([3])
/*
`concat()`方法创建一个新的数组。
`concat()`函数不会改变this或任何作为参数提供的数组，而是返回一个浅拷贝。原始数组的元素将复制到新数组中。如果元素为对象，则只会复制对象的引用，对对象的修改会影响新数组和原始数组。
*/
let arr=[1,2,3].slice(0)
/*
`slice() `方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝。原始数组不会被改变。
`slice() `函数接收两个可选参数:
第一个是截取的起点
第二个是截取的终点(新数组中不包含end元素)
*/
```
##### 数组的删除
```javascript
let arr=[1,2,3]
let item=arr.shift()
//shift() 方法从数组中删除首部元素，并返回该元素的值。此方法更改数组的长度。
let item=arr.pop()
//pop() 方法从数组中删除尾部元素，并返回该元素的值。此方法更改数组的长度。
let item=arr.splice()
/*
splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
`splice() `函数接收一个必须参数，两个可选参数:
第一个是修改的开始位置
第二个是移除的数组元素的个数
第三个是要添加进数组的元素
*/
```
##### 数组元素遍历
forEach() 方法对数组的每个元素执行一次提供的函数。

```javascript
function foreach(fn) {
  console.log(this);

  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this);
  }
}
foreach.call([1, 2, 3], function(item) {
  console.log(item);
});
```
##### 数组元素检测
```javascript
[1,2,3].indexOf(1)//存在返回索引，不存在返回-1
[1,2,3].find(fn())//存在返回符合fn函数的第一个元素的数组值，不存在返回undefined
[1,2,3].findIndex(fn())//存在返回符合fn函数的第一个元素的索引，不存在返回-1
```
##### 数组元素添加
```javascript
let arr=[1,2,3]
let item=arr.push(item)
//尾部添加元素
let item=arr.unshift()
//头部添加元素
let item=arr.splice()
/*
splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
`splice() `函数接收一个必须参数，两个可选参数:
第一个是修改的开始位置
第二个是移除的数组元素的个数
第三个是要添加进数组的元素
*/
```
###### 数组排序
反转顺序(修改原始数组)：`arr.reverse()`
自定义排序：`a.sort((a,b)=>a-b)`

### 数组变换

#### map
> map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

map 方法会给原数组中的每个元素都按顺序调用一次  callback 函数。callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组。 callback 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。
#### filter
> filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

filter 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或等价于 true 的值的元素创建一个新数组。callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。那些没有通过 callback 测试的元素会被跳过，不会被包含在新数组中。

filter 遍历的元素范围在第一次调用 callback 之前就已经确定了。在调用 filter 之后被添加到数组中的元素不会被 filter 遍历到。如果已经存在的元素被改变了，则他们传入 callback 的值是 filter 遍历到它们那一刻的值。被删除或从来未被赋值的元素不会被遍历到。

#### reduce
> reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

reducer 函数接收4个参数:
Accumulator (acc) (累计器)
Current Value (cur) (当前值)
Current Index (idx) (当前索引)
Source Array (src) (源数组)
## Js函数
### 函数的定义
```javascript
function 函数名(形参){
  return 返回值
}//具名函数

let fn=function(形参){return 返回值}//匿名函数||函数表达式

let f1= (形参,形参)=>{return 返回值}
let f2= (形参,形参)=>({name:x,age,y})
//箭头函数

let fn=new Function(形参,形参,函数体)
//构造函数
```
### 闭包
如果一个函数用到了外部的变量，那么这个函数加这个变量就叫做闭包

### 调用栈

JS引擎再调用一个函数前，会将当前的环境压入栈中中，执行完成后，再弹栈返回上个环境。

### this

### 立即执行函数
