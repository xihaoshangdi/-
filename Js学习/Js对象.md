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
## Js数组

## Js函数

