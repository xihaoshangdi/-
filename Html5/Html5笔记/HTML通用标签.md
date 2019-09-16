## 网页的基本标签

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title></title>
</head>
<body>
</body>
</html>
```
### 文档类型声明

<!DOCTYPE> 防止浏览器在渲染文档时，切换到“怪异模式(兼容模式)”的渲染模式。

```javascript
<!DOCTYPE html> 确保浏览器按照最佳的相关规范进行渲染。
```

### 根元素标签

html 元素是网页的顶层容器，也称为根元素（root element），其他元素都是它的子元素。一个网页只能有一个<html>标签。

```javascript
<html lang="en">该标签的lang属性，表示网页内容默认的语言。
```

`lang`属性为全局属性，参与元素语言的定义。简体中文通常取值为`zh-CN`。

#### 文档头部元素

head 元素规定文档相关的配置信息（元数据），包括文档的标题，引用的文档样式和脚本等。可用于<head>元素内的元素有:
- title
- base
- link
- style
- meta
- script
- noscript
- command[已废弃]

##### <meta>

meta 元素表示那些不能由其它HTML元相关元素 (<base>, <link>, <script>, <style> 或 <title>) 之一表示的任何元数据信息。
属性：
1. `charset` 此属性声明当前文档的字符编码，通常为`UTF-8`。
2. `name` 此属性定义文档级元数据的名称。此属性的可能值为：
   - `application-name` 定义正运行在该网页上的网络应用名称。
   - `author` 定义文档的作者名称，格式自由。
   - `description` 定义页面内容的简短介绍和描述。
   - `generator` 定义生成页面的软件的标识符。
   - `keywords` 定义页面内容相关的单词。
   - `referrer` 实验性API，详情查询MDN。
   - `viewport` 定义有关视口初始大小的设置，以提供移动设备服务。
3. `http-equiv` 此枚举属性定义了能改变服务器和用户引擎行为的编译。
   - `content-security-policy`内容安全策略。
   - `refresh` 定义页面的载入时间。
4. `content` 此属性包含`http-equiv`或`name`属性的值,具体取决于所使用的值。

##### <title>

title 元素 定义文档的标题，显示在浏览器的标题栏或标签页上。**<title>标签的内部，不能再放置其他标签，只能放置无格式的纯文本。**

##### <base>

base 元素指定用于一个文档中包含的所有相对`URL`的根`URL`，默认的`target`。一份中只能有一个 <base> 元素。
属性：
1. `href` 定义文档中相对`URL`地址的基础`URL`。
2. `target` 定义了默认的页面刷新位置。
    - `_self` 载入结果到当前HTML5的浏览上下文。
    - `_blank` 载入结果到一个新的窗口。
    - `_parent` 载入到父级窗口，如果没有父级，载入当前窗口。
    - `_top` 载入到顶级窗口。

##### <link>

外部资源链接 元素 规定了当前文档与外部资源的关系。

`<link href="main.css" rel="stylesheet">`

#####  <style>

style 元素包含文档的样式信息或者文档的部分内容。默认情况下，该标签的样式信息通常是CSS的格式。
属性：
1. `type` 该属性以MIME类型定义样式语言。
2. `media` 该属性规定该样式适用于哪个媒体。属性的取值CSS媒体查询，默认值为 all。
3. `scoped` 如果该属性存在，则样式应用于其父元素；如果不存在，则应用于整个文档。
```javascript
<style type="text/css">
body {
  color:red;
}
</style>
```

##### <script> 

script 元素用于嵌入或引用可执行脚本。

`<script src="javascript.js"></script>`

##### <noscript>

noscript 元素定义脚本未被执行时的替代内容。

```javascript
<noscript>
  <a href="########">禁用脚本时的结果</a>
</noscript>
<p>允许脚本时的结果!</p>
```

#### 文档主体元素

body 标签是一个容器标签，用于放置网页的主体内容。浏览器显示的页面内容，都是放置在它的内部。

