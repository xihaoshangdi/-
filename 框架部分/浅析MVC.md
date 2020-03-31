## MVC
### MVC 是什么？

MVC (Model-View-Controller) 是一种软件设计模式.它强调分离软件的业务逻辑和显示. 这种“分离”提供了更好的分工和改进的维护. 一些其他的模式也是基于MVC来设计的, 像 MVVM (Model-View-Viewmodel), MTP (Model-View-Presenter), 和 MVW (Model-View-Whatever).

对MVC软件设计模式的三个部分可以被描述如下：

Model: 模型持有所有的数据、状态和程序逻辑.
View: 负责界面的布局和显示.
Controller: 负责模型和界面之间的交互.

### MVC 的数据流动

#### 传统MVC

- Model层定义 数据
- View层定义 基本视图
- Control层定义 Model层数据的操作方法和View层的监听事件

1. 用户操作View层，触发View层的监听Action
2. View层触发Control层的方法，Control层调方法去修改数据，然后重新渲染到View层。

#### 进阶MVC

- Model层定义 数据和修改数据的方法 
- View层定义 基本视图和更新函数
- Control层定义 View层的监听事件

1. 用户操作View层，触发View层的监听Action
2. View层触发Control层的方法，Control层调用Model层方法，然后重新渲染到View层。

```javascript
//通信对象
const eventBus = $(window);

//model 数据
const model = new Model({
  data: {
    result: parseInt(localStorage.getItem('result'))
  },
  update: function(number) {
    Object.assign(model.data, number);
    eventBus.trigger('m:updated');
    localStorage.setItem('result', model.data.result);
  }
});

//view 视图
const view = {
  el: null,
  html: `
  <div>
    <div id="outputAreas">
      <span id="result">{{result}}</span>
    </div>
    <div id="operateArea">
      <button id="add">+1</button>
      <button id="sub">-1</button>
      <button id="mul">×2</button>
      <button id="divide">÷2</button>
    </div>
  </div>
`,
  init(container) {
    view.el = $(container);
  },

  render(number) {
    if (view.el.children.length !== 0) {
      view.el.empty();
    }
    $(view.html.replace('{{result}}', number)).appendTo($(view.el));
  }
};
//control 控制
const control = {
  init(container) {
    view.init(container);
    view.render(model.data.result);
    control.autoBindEvents();
    eventBus.on('m:updated', () => {
      view.render(model.data.result);
    });
  },
  events: {
    'click.#add': 'add',
    'click.#sub': 'sub',
    'click.#mul': 'mul',
    'click.#divide': 'divide'
  },
  add() {
    model.update({ result: model.data.result + 1 });
  },
  sub() {
    model.update({ result: model.data.result - 1 });
  },
  mul() {
    model.update({ result: model.data.result * 2 });
  },
  divide() {
    model.update({ result: model.data.result / 2 });
  },
  autoBindEvents() {
    let key, list;
    for (key in control.events) {
      list = key.split('.');
      view.el.on(list[0], list[1], control[control.events[key]]);
    }
  }
};

```


#### MV

- Model层定义 数据和修改数据的方法 
- View层定义 基本视图和更新函数,监听事件

1. 用户操作View层，View层调用Model层方法。
2. Model层修改完成后触发View层更新函数，更新基本视图

## EventBus 
### EventBus的定义
EventBus其实就是事件的订阅与发布。就是当发布者的数据改变时，那么所有订阅者也会实时做出改变。换言之就是一个主对象的事件被更新，所有监听对象的状态都被更新。
EventBus的优势
- 简化了组件间的通讯。
- 分离了事件的发送者和接受者。
- 避免了复杂的和易错的依赖关系和生命周期问题。
- 使得代码更简洁,性能更好。

### Event Bus接口设计

基于方法： on, off, once, emit(可选trigger/dispatch/publish)

```javascript
// 构造EventBus
function EventBusClass() {
    this.msgQueues = {}
}

EventBusClass.prototype = {
    // 将消息保存到当前的消息队列中
    on: function(msgName, func) {
        if (this.msgQueues.hasOwnProperty(msgName)) {
            if (typeof this.msgQueues[msgName] === 'function') {
                this.msgQueues[msgName] = [this.msgQueues[msgName], func]                
            } else {
                this.msgQueues[msgName] = [...this.msgQueues[msgName], func]    
            }
        } else {
            this.msgQueues[msgName] = func;
        }
    },
    // 消息队列中仅保存一个消息
    one: function(msgName, func) {
        // 无需检查msgName是否存在
        this.msgQueues[msgName] = func;
    },
    // 发送消息
    emit: function(msgName, msg) {
        if (!this.msgQueues.hasOwnProperty(msgName)) {
            return
        }
        if (typeof this.msgQueues[msgName] === 'function') {
            this.msgQueues[msgName](msg)
        } else {
            this.msgQueues[msgName].map((fn) => {
                fn(msg)
            })
        }
    },
    // 移除消息
    off: function(msgName) {
        if (!this.msgQueues.hasOwnProperty(msgName)) {
            return
        }
        delete this.msgQueues[msgName]
    }
}

// 将EventBus放到window对象中
const EventBus = new EventBusClass()
window.EventBus = EventBus
```

### 使用
```javascript
// 订阅消息
function subscribe() {
    EventBus.on('first-event', function(msg) {
        alert(`订阅的消息是：${msg}`);
    });
}

// 发送消息
function emit() {
    const msgInput = document.getElementById("msgInputId")
    EventBus.emit('first-event', msgInput.value)
}

// 移除消息
function off(msgName) {
    EventBus.off(msgName)
}
```












## 表驱动法编程
表驱动法(Table-Driven Approach),简单讲是指用查表的方法获取值。表格驱动的意义在于：逻辑和数据分离。
```javascript
function check(country){//数据和逻辑捆绑，添加数据就意味着增加逻辑判断
    if (country==="China" ){
       return "CHN";
    }else if(country==="America"){
       return "USA";
    }else if(country==="Japan"){
      return "JPN";
    }else{
       return "OTHER";
    }
}
```
进行表驱动重构
```javascript
countryList={
      "China": "CHN",
      "America": "USA",
      "Japan": "JPN",
      "US": "USA",
      "United States of America": "USA",
      "美国": "USA",
    };
function check(country,countryList){
    if(countryList[country]){
      return countryList[country]
    }
    return "Other";
}
```
逻辑与数据分离，就算更新数据，也不影响逻辑结构的判断，不必新加逻辑。

## 模块化思想

### 模块化解决的问题
1. 全局变量的灾难
2. 函数命名冲突
3. 复杂的依赖关系

我理解的模块化思想就是一个模块只负责一个功能只解决一个问题，然后模块只暴露出方法，不暴露变量。每个模块都是独立的，如果需要引入依赖，则在模块内部引入。这样就解决了依赖复杂的问题。
