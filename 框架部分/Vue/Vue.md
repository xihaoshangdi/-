# 从零开始接触Vue(0)
## 准备工作
### Vue安装的两个版本
  Vue包含了两个版本即
  - 完整版 vue.js	同时包含编译器和运行时的版本。
  - 只包含运行时版	vue.runtime.js 用来创建 Vue 实例、渲染并处理虚拟 DOM 等的版本。基本上就是除去编译器的其它一切。
  Vue的运行时版本相比完整版体积要小大约 30%。因此也推荐使用运行时版本。
### 具体区别
  Vue的完整版可以将视图直接写在 HTML里或者 template里，由于有 compiler(编译器)的存在，直接就能做到视图层的渲染。
  运行时版则需要用render函数将视图层渲染到页面上。

```javascript
// 完整版需要编译器--compiler将模板内的字符串用render函数转化为Dom结点  
new Vue({
  template: '<div>{{ hi }}</div>'
})

// 不需要编译器
new Vue({
  render (h) {
    return h('div', this.hi)
  }
})
```

### vue-loader
  麻烦的运行时版被选择的原因就是vue-loader的出现，它会把模板内的字符串编译成render函数的版本，因此体积更小的运行时版更好用。

### template 和 render 

template模板在遇到复杂的需求时，会比较生硬，需求是按钮具有多个样式，根据不同的type类型，展示不同的样式和按钮文本
```javascript
<div v-if="type === 'success'">success</div>
<div v-else-if="type === 'error'">error</div>
<div v-else-if="type === 'warm'">warm</div>
<div v-else>default</div>
```
这样写在按钮样式少的时候完全没有问题，但是试想，如果需要的按钮样式有十多个，按钮内的文字根据实际情况而定(如success按钮内的文字可能是OK、GOOD等等)。那么template写死的方式就显得很无力了。遇上类似这样的情况，使用render函数可以说最优选择了。

首先render函数生成的内容相当于template的内容，故使用render函数时，在.vue文件中需要先把template标签去掉。只保留逻辑层。然后将div的渲染用render函数处理，并且将活动的文本和类型的逻辑都放在渲染的render函数中。
```javascript
export default {
  render(h) {
    return h('div',{
      'class': {
        success: this.type === 'success',
        error: this.type === 'error',
        warm: this.type === 'warm',
        default: this.type === 'default'
      },
    })
  }
};
```

### CodeSandbox
  使用CodeSandbox可以初始化一个线上的Vue项目。
  1. 前往CodeSandbox主页-→https://codesandbox.io/ 
  2. 创建一个线上盒子 Create a Sandbox
  3. 选择Vue模板 Official Templates → vue
