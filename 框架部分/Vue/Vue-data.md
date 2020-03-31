# 深入了解Vue的Data属性

## Es6 get和set

  通过给对象定义一个虚拟的num属性，并设置读写方法get/set。让数据显得更直观。

```javascript
class Num {
  constructor(num) {
        this._num = num;
  }
  
  get num() {
    return this._num;
  }
  
  set num(num) {
    this._num = num;
  }
  
}

var test = new Num(9);
console.log(test.num);
test.num = 99;
console.log(test.num);
```

## Object.defineProperty() 

Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
这样添加的属性默认是虚拟的属性，不会出现在枚举属性列表中，属性也无法被删除。

```javascript
let o = {}; // 创建一个新对象

// 在对象中添加一个属性与存取描述符
let bValue;
Object.defineProperty(o, "example", {
  get : function(){
    return bValue;
  }
  set : function(newValue){
    bValue = newValue;
  },
  enumerable : true,//当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。默认为 false。
  configurable : true//当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
});

```

## 代理

  通过代理函数，把对`{ data:{n:0} }`这个匿名对象的操作函数全都放到新生成的obj上，也就是说，没有函数可以直接操作匿名对象的数据，只能通过代理对象obj进行数据的修改。

```javascript

proxy({ data:{n:0} }) // 括号里是匿名对象，无法访问

function proxy({data}/* 解构赋值*/){ //{data} => data={ data:{n:0} }.data => data={n:0}
  const obj = {}
  Object.defineProperty(obj, 'n', { //添加虚拟属性n
    get(){
      return data.n
    },
    set(value){
      if(value<0)return
      data.n = value
    }
  })
  return obj // obj 就是代理
}
```

## 监听和代理

  为了阻止原始的Data内的数据被修改，先把原始对象的n复制一份到value上，然后新建一个虚拟的属性n替换原本Data对象内的n。
  这样原始的Data数据的修改也要通过get/set，无法被直接修改，到目前为止，n的属性修改必须通过get和set方法，而无法直接赋值修改。也就说，每一次修改都被监听。

```javascript
let Data = {n:0}//声明匿名数据对象
let data = proxy({ data:Data }) 

function proxy({data}){
  let value = data.n
  Object.defineProperty(data, 'n', {//为data对象添加一个虚拟属性n替换原本的Data对象内的n
    get(){
      return value
    },
    set(newValue){
      if(newValue<0)return
      value = newValue
    }
  })

  const obj = {}
  Object.defineProperty(obj, 'n', {
    get(){
      return data.n
    },
    set(value){
      data.n = value
    }
  })
  return obj 
}
```

## Vue的data
  `let vm = new Vue({data: {数据}})` Vue通过这种方式监听了data内的数据修改，因此，做到了只要data内的数据进行变动，视图层就会自动刷新。
