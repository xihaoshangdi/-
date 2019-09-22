# CSS学习-1

## CSS语法

### 基本语法

![示例](C:\Users\xihao\Desktop\Web Study\CSS\image\示例.jpg)

> CSS的样式语法由两部分构成，选择器和声明。

开发者通过`选择器(selector)`选取希望改变样式的`HTML`元素。

`声明(declarations)`则是开发者制定的希望`HTML`改变的元素规则，可以是一条或多条。

声明由两部分组成：属性和值。属性是CSS的样式属性，值则是CSS的规则具体内容。

#### 样式语法

```css
选择器{
    属性名：属性值;
    /*注释*/
}
```

#### at语法



##### @charset

@charset用于定义样式表中使用的字符编码。它必须写在样式表的最开头且前面不可有别的字符。

```css
/* @charset "<charset>"; */
@charset "UTF-8";
```



##### @import

@import用于导入外部`CSS样式表`文件。

```css
/* @import url; */
/* @import url list-of-media-queries; */
@import url("fineprint.css") print; // 打印
@import url("bluish.css") projection, tv; // 投影或电视
@import 'custom.css';
@import url("chrome://communicator/skin/");
@import "common.css" screen, projection;  //屏幕或投影
@import url('landscape.css') screen and (orientation:landscape); // 屏幕且横屏
```

**url**：这个 URL 可以是绝对路径或者相对路径。
**list-of-media-queries**：是一个逗号分隔的 媒体查询 条件列表，决定通过URL引入的 CSS 规则 在什么条件下应用。如果浏览器不支持列表中的任何一条媒体查询条件，就不会引入URL指明的CSS文件。



##### @media

@media用于定义在一个或多个**设备类型**、**具体特点**和**环境**的媒体查询来应用样式。

```css
/* @media */
@media screen and (min-width: 900px) {
h1 {
color:red;
font-size:14px;
}
}
```



### CSS的权值



CSS的权值：HTML标签属性 > 内联样式 > 外部引用样式表  （就近原则）。



#### 文档流

- 流动方向
  - `inline`元素从左到右，到达最右边才会换行。剩余宽度不足时，分割内容换行。
  - `blcok`元素从上到下，每一个都单独占据一行。
  - `inline-block`元素超过一行时，自动换行。剩余宽度不足时，整个元素换行。
- 宽度
  - `inline`宽度为内部`inline`元素的和。`width`属性无效。
  - `blcok`默认自动计算宽度。`width`属性有效。**不是100%，永远不要写宽度 100%**
  - `inline-block`综合前面两部分，`width`属性有效。
- 高度
  - `inline`的高度由`line-height`间接确定，`height`属性无效。
  - `blcok`的高度由`内部文档流元素`决定，`height`属性有效。
  - `inline-block`与`blcok`类似，`height`属性有效。

#### overflow 溢出

为使 `overflow `有效果，块级容器必须有一个指定的高度（`height`或者`max-height`）或者将`white-space`设置为`nowrap`。

```css
/* 默认值。内容不会被修剪，会呈现在元素框之外 */
overflow: visible;

/* 内容会被修剪，并且其余内容不可见 */
overflow: hidden;

/* 内容会被修剪，浏览器会显示滚动条以便查看其余内容 */
overflow: scroll;

/* 由浏览器定夺，如果内容被修剪，就会显示滚动条 */
overflow: auto;

/* 规定从父元素继承overflow属性的值 */
overflow: inherit;
```



#### 脱离文档流

- `float`
- `position：absolute/fixed`



##### `float`

float CSS属性指定一个元素应沿其容器的左侧或右侧放置，允许文本和内联元素环绕它。该元素从网页的正常流动(文档流)中移除，尽管仍然保持部分的流动性。

### CSS盒模型



