# Js语法

什么是表达式和语句
标识符的规则
if else 语句
while for 语句
break continue
label
## 表达式和语句

JavaScript 程序的执行单位为行，也就是一行一行地执行。一般情况下，每一行就是一个语句。

语句（statement）是为了完成某种任务而进行的操作。语句以分号结尾，一个分号就表示一个语句结束。多个语句可以写在一行内。分号前面可以没有任何内容，JavaScript 引擎将其视为空语句。

表达式（expression），指一个为了得到返回值的计算式。语句和表达式的区别在于，前者主要为了进行某种操作，一般情况下不需要返回值；后者则是为了得到返回值，一定会返回一个值。凡是 JavaScript 语言中预期为值的地方，都可以使用表达式。

## 标识符的规则

> 标识符（identifier）指的是用来识别各种值的合法名称。

标识符有一套命名规则，不符合规则的就是非法标识符。JavaScript 引擎遇到非法标识符，就会报错。

简单说，标识符命名规则:

- 第一个字符，可以是任意 Unicode 字母（包括英文字母和其他语言的字母），以及美元符号（$）和下划线（_）。
- 第二个字符及后面的字符，除了 Unicode 字母、美元符号和下划线，还可以用数字0-9。

JavaScript 有一些保留字，不能用作标识符：
```
arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。
```
## if-else

if结构先判断一个表达式的布尔值，然后根据布尔值的真伪，执行不同的语句。

## while-for

While语句包括一个循环条件和一段代码块，只要条件为真，就不断循环执行代码块。

## break|continue

break：脱出当前循环
continue：脱出本次循环

## label

JavaScript 语言允许，语句的前面有标签（label），相当于定位符，用于跳转到程序的任意位置，标签的格式如下。标签可以是任意的标识符，但不能是保留字，语句部分可以是任意语句。标签通常与break语句和continue语句配合使用，跳出特定的循环。

## 短路与 | 短路或

&& 如果两个操作数都非零，则条件为真；
|| 如果两个操作数中有任意一个非零，则条件为真。    
