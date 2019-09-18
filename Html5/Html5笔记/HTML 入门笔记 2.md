# HTML重难点标签

## a标签

### 属性
- href (hyper refer)
- target
- download
- `rel=noopener`

### 作用
- 跳转外部页面
- 跳转内部锚点
- 跳转到邮箱或电话

#### href的取值
1. 网址
- https://baidu.com	https协议
- http://baidu.com	http协议
- //baidu.com	无协议
2. 路径
- 根目录/test/test.html	基于根目录的绝对路径
- test/test.html	基于当前地址的相对路径
- index	基于当前地址的相对路径	
- ./index	基于当前目录的绝对路径
3. 伪协议
- javascript:代码	执行一段js代码
- mailto:邮件	通过本地客户端发邮件
- tel：手机号 通过本地客户端打电话
4. id
- `#id` ID跳转到元素

#### target的取值
1. 内置名字
- _blank
- _top
- _parent
- _self

2. 程序员命名
- window.name   Test页面taobao会自动覆盖baidu页面
    `<a href="//baidu.com" target="Test">baidu</a>`
    `<a href="//taobao.com" target="Test">taobao</a>`
- iframe.name 

## iframe标签


## table标签

1. 相关的标签
- table	
- thead	
- tbody	
- tfoot	
- tr
- td
- th

2. 相关的样式
- table-layout 
	- 定义了用于布局表格单元格，行和列的算法
	- auto:表格及单元格的宽度取决于其包含的内容。
	- fixed:表格和列的宽度通过表格的宽度来设置，某一列的宽度仅由该列首行的单元格决定。(内容物可能会超出单元格)
- border-collapse
	- 决定表格的边框是分开的还是合并的。在分隔模式下，相邻的单元格都拥有独立的边框。在合并模式下，相邻单元格共享边框。
	- collapse：相邻的单元格共用同一条边框（采用 collapsed-border 表格渲染模型）。
	- 合并（collapsed ）模式下，表格中相邻单元格共享边框。在这种模式下，CSS属性border-style 的值 inset 表现为槽，值 outset 表现为脊。

- border-spacing：指定相邻单元格边框之间的距离，该属性只适用于 border-collapse 值是 separate 的时候。

## 

