# CSS 体系

## CSS 基础

### Html 文档流

`html`的页面展示就像流水一样,文档内的元素从左向右流动,从上向下流动.

- 流动方向
  - `inline`元素从左到右,到达最右边才会换行.剩余宽度不足时,分割内容换行.
  - `blcok`元素从上到下,每一个都单独占据一行.
  - `inline-block`元素超过一行时,自动换行.剩余宽度不足时,整个元素换行.
- 宽度
  - `inline`宽度为内部`inline`元素的和.`width`属性无效.
  - `blcok`默认自动计算宽度.`width`属性有效.**不是 100%,永远不要写宽度 100%**
  - `inline-block`综合前面两部分,`width`属性有效.
- 高度
  - `inline`的高度由`line-height`间接确定,`height`属性无效.
  - `blcok`的高度由`内部文档流元素`决定,`height`属性有效.
  - `inline-block`与`blcok`类似,`height`属性有效.

#### 脱离文档流

- `float`
- `position：absolute/fixed`

##### `float`

float CSS 属性指定一个元素应沿其容器的左侧或右侧放置,允许文本和内联元素环绕它.该元素从网页的正常流动(文档流)中移除,尽管仍然保持部分的流动性.

##### `position`

- absolute
  不为元素预留空间,通过指定元素相对于最近的非 static 定位祖先元素的偏移,来确定元素位置.绝对定位的元素可以设置外边距（margins）,且不会与其他边距合并.
- fixed
  不为元素预留空间,而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置.元素的位置在屏幕滚动时不会改变.打印时,元素会出现在的每页的固定位置.fixed 属性会创建新的层叠上下文.当元素祖先的 transform 属性非 none 时,容器由视口改为该祖先.

### CSS 的权值

CSS 的权值：HTML 标签属性 > 内联样式 > 外部引用样式表 （就近原则）.

### CSS 基本语法

![示例](image\示例.jpg)

> CSS 的样式语法由两部分构成,选择器和声明.

开发者通过`选择器(selector)`选取希望改变样式的`HTML`元素.

`声明(declarations)`则是开发者制定的希望`HTML`改变的元素规则,可以是一条或多条.

声明由两部分组成：属性和值.属性是 CSS 的样式属性,值则是 CSS 的规则具体内容.

#### 样式语法

```css
选择器{
    属性名：属性值;
    /*注释*/
}
```

#### at 语法

##### @charset

@charset 用于定义样式表中使用的字符编码.它必须写在样式表的最开头且前面不可有别的字符.

```css
/* @charset "<charset>"; */
@charset "UTF-8";
```

##### @import

@import 用于导入外部`CSS样式表`文件.

```css
/* @import url; */
/* @import url list-of-media-queries; */
@import url('fineprint.css') print; // 打印
@import url('bluish.css') projection, tv; // 投影或电视
@import 'custom.css';
@import url('chrome://communicator/skin/');
@import 'common.css' screen, projection; //屏幕或投影
@import url('landscape.css') screen and (orientation: landscape); // 屏幕且横屏
```

**url**：这个 URL 可以是绝对路径或者相对路径.
**list-of-media-queries**：是一个逗号分隔的 媒体查询 条件列表,决定通过 URL 引入的 CSS 规则 在什么条件下应用.如果浏览器不支持列表中的任何一条媒体查询条件,就不会引入 URL 指明的 CSS 文件.

##### @media

@media 用于定义在一个或多个**设备类型**、**具体特点**和**环境**的媒体查询来应用样式.

```css
/* @media */
@media screen and (min-width: 900px) {
  h1 {
    color: red;
    font-size: 14px;
  }
}
```

#### 长度单位

1. px
2. em
3. 百分数
4. 整数
5. rem
6. vw|vh

#### 颜色

1. 十六进制
2. RGBA 颜色
3. hsl 颜色

### CSS 盒模型

CSS 将所有元素渲染成一个个矩形的盒子.每个盒子由四部分构成.其效用由它们各自的边界所定义.

![盒模型](image\box-model.gif)

与盒子的四个组成区域相对应,每个盒子有四个边界：

- _内容边界_ _Content edge_
- _内边距边界_ _Padding Edge_
- _边框边界_ _Border Edge_
- _外边框边界_ _Margin Edge_

#### content-box

`content-box`为标准的盒子模型.盒子的`width`跟`height`只包括盒子本身的`width`与`height`属性.

计算法则：

```
width = width
height = height
```

#### border-box

`border-box`为盒子模型可选的属性之一.盒子的`width`跟`height`包括`content`、`padding`跟`border`.

计算法则：

```
width = width + border + padding
height = height + border + padding
```

#### overflow 溢出

为使 `overflow`有效果,块级容器必须有一个指定的高度（`height`或者`max-height`）或者将`white-space`设置为`nowrap`.

```css
/* 默认值.内容不会被修剪,会呈现在元素框之外 */
overflow: visible;

/* 内容会被修剪,并且其余内容不可见 */
overflow: hidden;

/* 内容会被修剪,浏览器会显示滚动条以便查看其余内容 */
overflow: scroll;

/* 由浏览器定夺,如果内容被修剪,就会显示滚动条 */
overflow: auto;

/* 规定从父元素继承overflow属性的值 */
overflow: inherit;
```

#### margin 合并

块级元素的`margin-top`和`margin-bottom`有时会合并（或折叠）为一个外边距,其大小取其中的最大者,这种行为称为**外边距折叠**（margin collapsing）或**外边距合并**.

**注意`浮动元素`和`绝对定位元素`的外边距不会折叠**

外边距折叠的三种基本情况：

##### 相邻元素之间

毗邻的两个元素之间的外边距会折叠

![相邻元素之间相邻元素之间](C:\Users\xihao\Desktop\Web Study\CSS\image\margin 兄弟合并.png)

##### 父元素与其第一个或最后一个子元素之间

如果在父元素与其第一个子元素之间不存在**边框、内边距、行内内容**,也没有创建[块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)、或者[清除浮动](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear)将两者的 `margin-top`分开；或者在父元素与其最后一个子元素之间不存在**边框、内边距、行内内容、**`height`、`min-height`、`max-height`将两者的`margin-bottom`分开,那么这两对外边距之间会产生折叠.此时子元素的外边距会"溢出"到父元素的外面.

##### 空的块级元素

如果一个块级元素中不包含任何内容,并且在其 `margin-top`与`margin-bottom`之间没有边框、内边距、行内内容、`height、`min-height`将两者分开,则该元素的上下外边距会折叠.

- 上述情况的组合会产生更复杂的外边距折叠.
- 即使某一外边距为 0,这些规则仍然适用.因此就算父元素的外边距是 0,第一个或最后一个子元素的外边距仍然会"溢出"到父元素的外面.
- 如果参与折叠的外边距中包含负值,折叠后的外边距的值为最大的正边距与最小的负边距（即绝对值最大的负边距）的和.
- 如果所有参与折叠的外边距都为负,折叠后的外边距的值为最小的负边距的值.这一规则适用于相邻元素和嵌套元素.

## CSS 布局

### CSS 居中实现

#### 水平居中

##### 行内元素

通过对其**父级块元素**做如下处理来使行内元素居中.适用于`inline,inline-block,inline-table,inline-flex`等.

```
.center-children{
  text-align: center;
}
```

##### 块级元素

通过将一个**块级元素**的`margin-left`和`margin-right`同时设置为 auto 来使其居中.**（注意：此时元素必须定义有 width,否则将填满宽度,谈不上水平居中.）**通常由以下简写来定义：

```css
.center-me {
  margin: 0 auto;
  /* 推荐为：不影响纵向margin */
  margin-left: auto;
  margin-right: auto;
}
```

#### 垂直居中

##### 行内元素

1. 单行

- 有时行内元素或文本能够做到垂直居中,仅仅是因为元素上、下的`padding`相等.

```css
.link {
  padding-top: 30px;
  padding-bottom: 30px;
}
```

在某些情况当 `padding` 不适用,并且文字不会换行时,有一个技巧：当`line-height`与`height`相等时,文字垂直居中.

```css
.center-text-trick {
  height: 100px;
  line-height: 100px;
  white-space: nowrap;
}
```

2. 多行

上下 `padding` 相等依旧可以解决这个问题.但当此方法不生效时,可能是元素或文本处于 `table cell` 中,要么是`html`语义中的`table`,要么是 `CSS` 中的设置.

- 这种情况下,使用 `vertical-align` 来完成垂直居中.**注意：此为特殊用法,vertical-align 平时用来处理一行中的元素如何排列.**

- 如果类似 `table`的那些无效时,也许我们应该尝试下 `flex-box`. 在 flex 中,一个子元素可以轻易地在父元素中居中.

```css
flex-center-vertically {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 400px;
}
```

**这种做法仅在父级元素高度固定时(px, %等)才有效.**

- 如果上述两种做法都无效,那么我们可以采用"幽灵元素"技术.在这种做法中,一个伪元素占据父元素的全部高度,然后文本在其中垂直居中.

```css
.ghost-center {
  position: relative;
}
.ghost-center::before {
  content: ' ';
  display: inline-block;
  height: 100%;
  width: 1%;
  vertical-align: middle;
}
.ghost-center p {
  display: inline-block;
  vertical-align: middle;
}
```

##### 块级元素

1. 高度已知时

**盒模型应为`border-box`**

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  height: 100px;
  margin-top: -50px;
}
```

2. 高度未知时

将元素下移父级元素的 50%,再上移自身高度的 50%.

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

#### 同时水平和垂直居中

##### 元素宽高固定时

可以使用绝对定位将元素置于父元素(50%,50%)的位置,之后再通过将 margin 设置为负值.这种方法拥有广泛的浏览器支持.

```css
.parent {
  position: relative;
}

.child {
  width: 300px;
  height: 100px;
  padding: 20px;

  position: absolute;
  top: 50%;
  left: 50%;

  margin: -70px 0 0 -170px;
}
```

##### 元素宽高不固定时

宽高不固定时,我们可以使用`transform`属性来实现将元素在两个方向同时移动 50%.该宽度基于当前元素的宽度.

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

#### 兼容方法

```css
.Absolute-Center {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
```

### float 布局

#### 浮动的定义

使元素脱离文档流,按照指定的方向（左或右发生移动）,直到它的外边缘碰到包含框或另一个浮动框的边框为止.

#### 浮动的代码

```css
.demo {
  float: left;
  float: right;
}
```

#### 浮动的效果

1. 块级元素可以横排显示
2. 行内元素可以设置宽度和高度
3. 元素没有设置宽度和高度时,宽度为内容撑开宽
4. 支持 margin
5. 脱离文档流
6. 提升半层级
7. 不支持 margin:auto;

#### 清除浮动

```css
.clear-fix:after {
  content: '';
  display: block;
  clear: both;
}
```

### flex 布局

Flex 是 Flexible Box 的缩写,意为"弹性布局",用来为盒状模型提供最大的灵活性.

#### 基本概念

采用 Flex 布局的元素,称为 Flex 容器（flex container）,简称"容器".它的所有子元素自动成为容器成员,称为 Flex 项目（flex item）,简称"项目".

![Flex布局](image/Flex布局.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）.主轴的开始位置（与边框的交叉点）叫做 main start,结束位置叫做 main end；交叉轴的开始位置叫做 cross start,结束位置叫做 cross end.

项目默认沿主轴排列.单个项目占据的主轴空间叫做 main size,占据的交叉轴空间叫做 cross size.

##### 容器的属性

| 属性名          | 含义                                | 取值                                                                      |
| --------------- | ----------------------------------- | ------------------------------------------------------------------------- |
| flex-direction  | 主轴的方向（即项目的排列方向）      | `row | row-reverse | column | column-reverse`                             |
| flex-wrap       | 是否换行                            | `nowrap | wrap | wrap-reverse`                                            |
| flex-flow       | `flex-direction`和`flex-wrap`的简写 | -                                                                         |
| justify-content | 项目在主轴上的对齐方式.             | `flex-start | flex-end | center | space-between | space-around`           |
| align-items     | 项目在交叉轴上的对齐方式.           | `flex-start | flex-end | center | baseline | stretch`                     |
| align-content   | 多根轴线的对齐方式                  | `flex-start | flex-end | center | space-between | space-around | stretch` |

1. flex-direction

![flex-direction](image/flex-direction.png)

- row（默认值）：主轴为水平方向,起点在左端.
- row-reverse：主轴为水平方向,起点在右端.
- column：主轴为垂直方向,起点在上沿.
- column-reverse：主轴为垂直方向,起点在下沿.

2. justify-content

![justify-content](image/justify-content.png)

- flex-start（默认值）：左对齐
- flex-end：右对齐
- center： 居中
- space-between：两端对齐,项目之间的间隔都相等.
- space-around：每个项目两侧的间隔相等.所以,项目之间的间隔比项目与边框的间隔大一倍.

##### 项目的属性

| 属性名      | 含义                                                                                         |
| ----------- | -------------------------------------------------------------------------------------------- |
| order       | 定义项目的排列顺序.数值越小,排列越靠前,默认为 0.                                             |
| flex-grow   | 定义项目的放大比例,默认为 0,即如果存在剩余空间,也不放大.                                     |
| flex-shrink | 定义了项目的缩小比例,默认为 1,即如果空间不足,该项目将缩小.                                   |
| flex-basis  | 定义了在分配多余空间之前,项目占据的主轴空间（main size）.它的默认值为 auto,即项目的本来大小. |
| flex        | flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写,默认值为 0 1 auto.后两个属性可选.    |
| align-self  | 性允许单个项目有与其他项目不一样的对齐方式,可覆盖 align-items 属性.                          |

### grid 布局

## CSS 定位

### Div 分层

### 详细了解 position

### 层叠上下文

层叠上下文是 HTML 元素的三维概念,这些 HTML 元素在一条假想的相对于面向（电脑屏幕的）视窗或者网页的用户的 z 轴上延伸,HTML 元素依据其自身属性按照优先级顺序占用层叠上下文的空间.

文档中的层叠上下文由满足以下任意一个条件的元素形成：

- 根元素 (HTML),
- z-index 值不为 "auto"的 **绝对/相对**定位元素
- 固定（fixed） / 沾滞（sticky）定位（沾滞定位适配所有移动设备上的浏览器,但老的桌面浏览器不支持）
- z-index 值不为 "auto"的 flex 子项 (flex item),即：父元素 `display: flex|inline-flex`
- z-index 值不为"auto"的 grid 子项,即：父元素`display：grid`
- opacity 属性值小于 1 的元素
- transform 属性值不为 "none"的元素
- mix-blend-mode 属性值不为 "normal"的元素
- filter 值不为"none"的元素,
- perspective 值不为"none"的元素,
- clip-path 值不为"none"的元素
- mask / mask-image / mask-border 不为"none"的元素
- isolation 属性被设置为 "isolate"的元素
- -webkit-overflow-scrolling 属性被设置 "touch"的元素
- contain 属性值为"layout","paint",或者综合值比如"strict","content"

在层叠上下文中,其子元素同样也按照上面解释的规则进行层叠. 特别值得一提的是,其子元素的 z-index 值只在父级层叠上下文中有意义.子级层叠上下文被自动视为父级层叠上下文的一个独立单元.

简言之，在同一个层叠上下文中，元素的 z-index 比较才有意义，不同的父级层叠上下文，比较无意义。
