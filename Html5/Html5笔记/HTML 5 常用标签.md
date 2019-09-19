# HTML常用标签

## a标签

### 简述

锚元素可以创建通向其他网页、文件、同一页面内的位置、电子邮件地址或任何其他 URL 的超链接。

### 属性

- href [hyper refer | 超链接]  包含超链接指向的 URL 或 URL 片段。
- target  该属性指定在何处显示链接的资源。
- `rel=noopener`  该属性指定了目标对象到链接对象的关系。
- download  HTML5新属性。

#### href

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
- tel:手机号 通过本地客户端打电话

4. id
- `#id` ID跳转到id对应的元素

#### target

1. 内置名字
- _blank
- _top
- _parent
- _self

2. 程序员命名
- window.name   页面先刷新为百度页面，点击淘宝链接后，淘宝页面覆盖百度页面。
`<a href="//baidu.com" target="Test">baidu</a>`
`<a href="//taobao.com" target="Test">taobao</a>`
- iframe.name 

#### rel

使用 `target=_blank`打开一个新的标签页时，新页面的 window 对象上有一个属性 opener，它指向的是前一个页面的 window 对象。
window.opener可以操作之前的页面的数据。为了防止这种情况，将值置为noopener。

### 作用

- 跳转外部页面
- 跳转内部锚点
- 跳转到邮箱或电话

## iframe标签

### 简述

HTML内联框架元素表示嵌套的browsing context。它能够将另一个HTML页面嵌入到当前页面中。

### 属性

### 作用


## table标签

### 相关的标签

- table	
- thead	
- tbody	
- tfoot	
- tr
- td
- th

### 相关的样式

- table-layout 

1. 定义了用于布局表格单元格，行和列的算法
2. auto:表格及单元格的宽度取决于其包含的内容。
3. fixed:表格和列的宽度通过表格的宽度来设置，某一列的宽度仅由该列首行的单元格决定。(内容物可能会超出单元格)

- border-collapse

1. 决定表格的边框是分开的还是合并的。在分隔模式下，相邻的单元格都拥有独立的边框。在合并模式下，相邻单元格共享边框。
2. collapse：相邻的单元格共用同一条边框（采用 collapsed-border 表格渲染模型）。
3. 合并（collapsed ）模式下，表格中相邻单元格共享边框。在这种模式下，CSS属性border-style 的值 inset 表现为槽，值 outset 表现为脊。

- border-spacing

1. 指定相邻单元格边框之间的距离，该属性只适用于 border-collapse 值是 separate 的时候。

## img标签

### 简述

HTML Image 元素代表文档中的一个图像。

### 作用

发出GET请求，展示一张图片

### 属性

- alt  定义了描述图像的替换文本。
- height
- width
- src
- srcset  以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像。

### 事件

- onload  监听图片加载完成
- onerror  监听图片加载失败

### 响应式

max-width：100%

### 可替换元素

由属性决定元素内容的就是可替换元素，CSS只决定可替换元素的位置和定位方式。

## form标签

### 简述

form 元素表示了文档中的一个区域，此区域包含有交互控制元件，用来向 Web 服务器提交信息。

### 作用

发出GRT/POST请求，然后刷新页面。

### 属性

- action  提交到的处理此表单信息的程序所在的URL。
- autocomplete  提供给用户多个可选择的默认值。
- method  选择提交的 HTTP 方式来提交表单。
- target
- name  表单的名称，一个文档中的多个表单当中，name必须唯一而不仅仅是一个空字符串。

### 事件

- onsubmit  表单提交触发事件

## input标签

### 简述

input元素用于为基于Web的表单创建交互式控件，以便接受来自用户的数据。

### 作用

让用户输入内容。

### 属性

1. 表单 <input> 类型

- button
- checkbox
- color
- date
- datetime-local
- email
- file
- hidden
- image
- month
- number
- password
- radio
- range
- reset
- search
- submit
- tel
- text
- time
- url
- week

2. 属性

- autocomplete  一个字符串，代表如果<input>元素的 type 允许，则会具有自动填充的功能
- autofocus  一个布尔值，如果<input>元素的标签里存在此属性，当表单被呈现在网页上时，焦点会自动落在此<input>元素上
- disabled  此属性放在元素的标签里，此时元素不能被用户手动输入、点选或拖动等
- name  提交整个表单数据时，可以用于区分属于不同`input`的值
- readonly  布尔值，如果为真，表示此`input`元素不能被编辑
- required  布尔值，如果为真，表示只有当此`input`元素有值时，整个表单才能提交
- maxlength  指明了用户最多可以输入的字符个数（按照Unicode编码方式计数）
- multiple  指示用户能否输入多个值，**type属性为email或file的时候生效**
- pattern  检查控件值的正则表达式.。pattern必须匹配整个值，而不仅仅是某些子集.。**型属性的值为text, search, tel, url 或 email时，此属性适用，否则将被忽略。**
- placeholder  提示用户输入框的作用。用于提示的占位符文本不能包含回车或换行。**ype 属性为text, search, tel, url or email时**

### 事件

- onchange
- onfocus
- onblur

### 验证器



## 其他输入标签

### select+option

`select` 元素表示一个控件，提供一个选项菜单，菜单内的选项为`option` , 可以由 `optgroup` 元素分组。选项可以被用户预先选择。

### textarea

`textarea` 元素表示一个多行纯文本编辑控件。 通过CSS的resize属性控制文本域是否可变。

### label

#### 简述

`label` 元素（标签）表示用户界面中某个元素的说明。

#### 属性

- for  
- form 

#### 使用注意

当点击或者触碰（tap）一个与表单控件相关联的 `label` 时，关联的控件的 click 事件也会触发。

### 注意事项

1. 一般不监听input的click事件
2. form中的input要有name
3. form中要有type=submit才能触发submit事件。




## 其他标签

### video
### audio
### canvas
### svg