## HTML常见全局属性

全局属性（global attributes）是所有元素都可以使用的属性。

### id

id属性是元素在网页内的唯一标识符。id属性的值必须是全局唯一的，同一个页面不能有两个相同的id属性。另外，id属性的值不得包含空格。

id属性的值还可以在最前面加上#，放到 URL 中作为锚点，定位到该元素在网页内部的位置。
`https://foo.com/index.html#bar` 页面会自动滚动到`bar`。

### clss

class属性用来对网页元素进行分类。如果不同元素的class属性值相同，就表示它们是一类的。

### title

title属性用来为元素添加附加说明。鼠标悬浮在元素上面时，会将title属性值作为浮动提示，显示出来。

### contenteditable

HTML网页的内容默认是用户不能编辑，contenteditable属性允许用户修改内容。
它有两个可能的值。
- true
- false

**属性是枚举属性，不是布尔属性，规范的写法是最好带上属性值。**

### hidden

hidden是一个布尔属性，表示当前的网页元素不再跟页面相关，因此浏览器不会渲染这个元素，所以就不会在网页中看到它。

*CSS的可见>hidden属性*

### spellcheck

浏览器一般会自带拼写检查功能，编辑内容时，拼错的单词下面会显示红色的波浪线。spellcheck属性就表示，是否打开拼写检查。它有两个可能的值。
- true
- false

*该属性只在编辑时生效*
**属性是枚举属性，不是布尔属性，规范的写法是最好带上属性值。**


### CSS：长文本省略

```css
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
```