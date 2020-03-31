# 从MDN了解 →初识Promise

> 如果对要学习的新知识存有畏惧，疑惑和不解，那就去读读规范！

## Promises/A+规范

​	多亏了翻译的出现，让规范的阅读变得简单。正因如此，可以一览`Promise`的全貌。

1. 定义

​	 Promise 表示一个异步操作的最终结果，与之进行交互的方式主要是 `then` 方法，该方法注册了两个回调函数，用于接收 promise 的终值或本 promise 不能执行的原因。 

简言之： promise 是一个拥有 `then` 方法的对象或函数，表示一个异步的结果。

2. 状态

   一个 Promise 的当前状态必须为以下三种状态中的一种：

   - **等待态（Pending）**：Promise的初始化状态 

   - **执行态（Fulfilled）**：Promise的执行状态，在此状态时不可中断，必须得到一个**不可变**的终值

	- **拒绝态（Rejected）**：Promise的最终状态，已经得到了一个 **不可变**的据因 
	
3.  Then 方法

    一个 `promise `必须提供一个 `then` 方法以访问其当前值、终值和据因。 

   promise 的 `then` 方法接受两个参数(**参数必须为函数**)：

   ```javascript
   promise.then(onFulfilled, onRejected)
   ```

   对于 `onFulfilled` |`onRejected` 函数

   当 `promise` 执行结束后其必须被调用，其第一个参数为 `promise` 的终值| 据因 

   并返回一个`promise` 对象（**链式调用**）

   ```javascript
   promise2 = promise1.then(onFulfilled, onRejected);   
   ```

	- 如果 `onFulfilled` 或者 `onRejected` 返回一个值 `x` ，则运行下面的 **Promise 解决过程**：`[[Resolve]](promise2, x)`
	- 如果 `onFulfilled` 或者 `onRejected` 抛出一个异常 `e` ，则 `promise2` 必须拒绝执行，并返回拒因 `e`
	- 如果 `onFulfilled` 不是函数且 `promise1` 成功执行， `promise2` 必须成功执行并返回相同的值
	- 如果 `onRejected` 不是函数且 `promise1` 拒绝执行， `promise2` 必须拒绝执行并返回相同的据因
	
	
	
	简言之，Promise是异步操作的最终结果，Promise本身会做一些异步的事情，做完之后会返回成功失败，以方便下一个Promise的执行，当成功的时候，下一个Promise的resolve 会承接这个状态，当失败的时候，下一个Promise的reject会承接这个状态，如果下一个Promise没人会解决这个失败状态（没有错误处理），那么这个Promise的失败状态，就得不到解决。会继续向下一个Promise传递。也就是会把失败的据因传递给后面。后面的Promise去查找设置了解决失败的reject函数，执行解决失败状态。 完成以后会接着返回一个 resolved 的 Promise可以执行调用then继续执行，这样 就是` resolve => throw error ->reject执行=>pending.then()` 执行。

## MDN文档-Promise

### 直接好处：链式调用

 连续执行两个或者多个异步操作是一个常见的需求，在上一个操作执行成功之后，开始下一个的操作，并带着上一步操作所返回的结果。我们可以通过创造一个 **Promise 链**来实现这种需求。 

`then()` 函数会返回一个**全新的 Promise**，和原来的不同：

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

或者

```js
const promise2 = doSomething().then(successCallback, failureCallback);
```

第二个对象（`promise2`）不仅表示 `doSomething()` 函数的完成，也代表了你传入的 `successCallback` 或者 `failureCallback` 的完成，`successCallback` 或 `failureCallback` 有可能返回一个 Promise 对象，从而形成另一个异步操作。这样的话，任何一个 `promise2` 新增的回调函数，都会被依次排在由上一个`successCallback` 或 `failureCallback` 执行后所返回的 Promise 对象的后面。

基本上，每一个 Promise 都代表了链中另一个异步过程的完成。

```js
doSomething().then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```