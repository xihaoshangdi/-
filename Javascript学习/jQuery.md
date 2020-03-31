# jQuery设计思想

## jQuery的运行原理

 在jQuery库中实际上定义了一个`jQuery()`方法，它是jQuery库的核心。我们调用该方法并传入指定的参数，就可以返回一个jQuery实例对象，该对象中包含匹配的一个或多个DOM元素。接着，我们就可以使用jQuery对象上的方法来操作它所匹配的DOM元素。

jQuery对象上提供的方法足够我们进行几乎所有的DOM操作。

> 既然获得的是jQuery对象，你就只能使用 **jQuery对象**的方法，而不能在jQuery对象上调用DOM元素(Element对象)自身的方法(比如 *getElementById()*)，除非你已经通过某些方式将它转换成了DOM元素。

此外，为了尽可能地减少代码量，jQuery库还为函数`jQuery`定义了一个别名变量`$`。

## jQuery 选取元素

### jQuery 选择器选取元素，并封装为jQuery对象

jQuery通过传递一个**选择表达式**给构造函数，以得到一个可以操作被选择对象(element)的jquery对象($)

```javascript
//基础选择器
$(".class")
$("#id")
$("tagname")
$("selector1, selector2, selectorN") //混合选择器
```

 当我们使用`$("选择器字符串")`匹配到指定的元素后，将返回一个jQuery对象。该对象就包含匹配到的所有DOM元素。**如果指定的选择器没有匹配到任何元素，将返回一个空的jQuery对象**(不包含任何DOM元素)。

### 将现有的DOM元素封装为jQuery对象

当然，jQuery也可以直接把一个或多个DOM元素直接转换成jQuery对象，以便于我们使用jQuery对象的方法对其进行操作。

```javascript
$( uid ); 
$( ps ); 
$( unames );
$( domsArray );
$( ); // 不传入任何参数，返回空的jQuery对象(不匹配任何元素)
```

### 将HTML字符串封装为jQuery对象

```javascript
$('<span></span>'); // 包含一个临时的span元素
```

### 元素筛选

```javascript
// 以下方法都返回一个新的jQuery对象，他们包含筛选到的元素
$("ul li").eq(1); // 选取ul li中匹配的索引顺序为1的元素(也就是第2个li元素)
$("ul li").first(); // 选取ul li中匹配的第一个元素
$("ul li").last(); // 选取ul li中匹配的最后一个元素
$("ul li").slice(1, 4); // 选取第2 ~ 4个元素
$("ul li").filter(":even"); // 选取ul li中所有奇数顺序的元素
$("div").find("p"); // 选取所有div元素的所有后代p元素
$("div").children(); // 选取所有div元素的所有子代元素
$("div").children("p"); // 选取所有div元素的所有子代p元素
$("span").parent(); // 选取所有span元素的父元素
$("span").parent(".foo.bar"); // 选取所有span元素的带有CSS类名"foo"和"bar"的父元素
$("#uid").prev(); // 选取id为uid的元素之前紧邻的同辈元素
$("#uid").next(); // 选取id为uid的元素之后紧邻的同辈元素
```

## DOM操作的原则

### Get first Set all 原则

在学习jQuery的DOM操作时，我们首先应该了解一下"Get first Set all"原则。**jQuery对象几乎所有的DOM操作方法都遵守"Get first Set all"原则**。简而言之，假设当前jQuery对象匹配多个元素，如果使用jQuery对象的方法来获取数据("读"数据)，则只会获取**第一个匹配元素**的数据；如果使用jQuery对象的方法来设置元素数据("写"数据)，则会对**所有匹配元素**都进行设置操作

### 链式编程风格

`$('div').find('h3').eq(2).html('Hello');`

**jQuery对象的所有实例方法，在没有特殊的返回需求的情况下，一般都会返回该jQuery对象本身(或者其它jQuery对象)**。 链式调用是通过`return this`的形式来实现的。通过对象上的方法最后加上`return this`，把对象再返回回来，对象就可以继续调用方法，实现链式操作了。

### 智能DOM操作，静默容错

 jQuery在匹配不到对应元素时将返回一个空的jQuery对象，我们仍然可以调用jQuery对象的方法，而且并不会报错。因为jQuery会智能地处理这种情况。如果该方法用于获取数据，则返回*null*或*undefined*；如果该方法用于设置数据，则忽略设置操作，并返回该空对象本身；如果该方法用于筛选元素，则同样返回一个新的jQuery空对象。 

## DOM操作

### 属性操作

```javascript
// selector 表示具体的选择器

$("selector").val(); // 获取第一个匹配元素的value值(一般用于表单控件)
$("selector").val("Hello"); // 设置所有匹配元素的value值为"Hello"

$("selector").html(); // 获取第一个匹配元素的innerHTML值
$("selector").html("Hello"); // 设置所有匹配元素的innerHTML值为"Hello"

$("selector").text(); // 获取第一个匹配元素的innerText值(jQuery已进行兼容处理)
$("selector").text("Hello"); // 设置所有匹配元素的innerText值为"Hello"

$("selector").attr("class"); // 获取第一个匹配元素class属性
$("selector").attr("class", "code"); // 设置所有匹配元素的class属性为"code"
$("selector").removeAttr("class"); // 移除所有匹配元素的class属性

$("selector").prop("checked"); // 获取第一个匹配元素的checked属性值
$("selector").prop("checked", true); // 设置所有匹配元素的checked属性值为true(意即选中所有匹配的复选框或单选框)
$("selector").removeProp("className"); // 移除所有匹配元素的className属性
```

###文档处理

```javascript
$A.before( $B ); // 在$A之前插入$B
$A.after( $B ); // 在$A之后插入$B

$A.insertBefore( $B ); // 将$A插入到$B之前的位置
$A.insertAfter( $B ); // 将$A插入到$B之后的位置

$A.append( $B ); // 在$A内部的末尾位置追加$B
$A.appendTo( $B ); // 将$A追加到$B内部的末尾位置

$A.prepend( $B ); // 在$A内部的开头位置追加$B
$A.prependTo( $B ); // 将$A追加到$B内部的开头位置

$A.replaceAll( $B ); // 用$A替换$B
$A.replaceWith( $B ); // 用$B替换$A

$A.wrap( $B ); // 在$A的外侧包裹$B
$A.unwrap( ); // 只移除$A的父元素的标签
$A.wrapAll( $B ); // 在整个$A的外侧用单个$B将其包裹起来
$A.wrapInner( $B ); // 在$A的内侧包裹$B

$A.empty(); // 清空$A的所有内容
$A.remove(); // 删除$A及其绑定的事件、附加数据等
$A.detach(); // 删除$A，但保留其绑定的事件、附加数据等

$A.clone(); // 克隆一个$A
```

### CSS操作

 几乎所有的CSS操作都可以通过jQuery的[css()](https://codeplayer.vip/p/j7spk)方法来进行。 

### 动画效果

```javascript
$("selector").show(); // 显示隐藏的元素，默认不带过渡动画效果
$("selector").show( 400 ); // 显示隐藏的元素，带有400毫秒的过渡动画效果
$("selector").show( "fast" ); // 显示隐藏的元素，带有200毫秒的过渡动画效果
$("selector").show( "slow" ); // 显示隐藏的元素，带有600毫秒的过渡动画效果

$("selector").hide(); // 隐藏显示的元素，其用法与show()相同
$("selector").toggle(); // 切换显示/隐藏元素(如果显示就隐藏，隐藏就显示)，其用法与show()类似

/* 下面的slide*、fade*系列方法与上面的show()、hide()、toggle()等方法作用相同，
 * 用法也类似，只是带有不同的动画效果
 */

$("selector").slideDown(); // 显示隐藏的元素，带有向下滑动的过渡动画效果
$("selector").slideUp(); // 隐藏显示的元素，带有向上滑动的过渡动画效果
$("selector").slideToggle(); // 切换显示/隐藏的元素，带有向上/下滑动的过渡动画效果

$("selector").fadeIn(); // 显示隐藏的元素，带有淡入的过渡动画效果
$("selector").fadeOut(); // 隐藏显示的元素，带有淡出的过渡动画效果
$("selector").fadeToggle(); // 隐藏显示的元素，带有淡出的过渡动画效果

// 设置所有匹配元素的css样式"width: 200px; height: 100px"，并执行一个当前样式到指定样式的过渡动画效果
// 动画的执行时间为 1000 毫秒
$("selector").animate( { width: "200px", height: "100px" }, 1000 );
```



## 事件处理

### 绑定默认事件

```javascript
function handler( event ){
	// 事件处理函数的执行代码
	// 参数event表示当前事件对象，该对象已经过jQuery封装标准化处理
	// 函数内的this表示触发事件的当前DOM元素(不是jQuery对象)


     // 如果函数的返回值为false，可以阻止事件冒泡和元素的默认事件行为。
     // 例如：a标签的click事件的默认跳转行为；form标签的submit事件的默认表单提交行为
}

// 以下方法均可为所有匹配元素的click事件绑定处理函数
$("selector").click( handler );
$("selector").bind( "click", handler );
$(document).delegate( "selector", "click", handler );
$("selector").on( "click", handler );
$("selector").one( "click", handler ); // 用于绑定一次性事件，第一次触发后就自动解除绑定
```

### 绑定自定义事件

```javascript
$("selector").bind( "dblclick", handler );
$("selector").bind( "keyup", handler );
$("selector").bind( "mouseout", handler );

// bind()等事件方法均支持为多个事件(以空格隔开)绑定同一个处理函数
$("selector").bind( "mouseenter mouseleve", function(event){
	if(event.type == "mouseenter"){
		// mouseenter事件的执行代码
	}else if(event.type == "mouseleve"){
		// mouseleve事件的执行代码		
	}
} );

// 事件名称可以带有命名空间
$("selector").bind( "mouseout.foo", handler );
```

### 解绑事件

```javascript
//主要用于解除通过click()、dblclick()等直接事件方法以及bind()、one()等方法绑定的处理函数
$("selector").unbind("click");
//主要用于解除通过live()方法绑定的处理函数
$("selector").die("click");
//主要用于解除通过delegate()方法绑定的处理函数
$(document).undelegate("selector", "click");
//主要用于解除通过on()方法绑定的处理函数
$("selector").off("click");
```

## Ajax

```javascript
$.ajax({
	url: "ajax.php?action=add",
	type: "post",
	data: "username=hello&password=123456", // 附加的请求数据，也可以为对象格式
	dataType: "json",
	success: function(data){
		// 这是Ajax请求成功后执行的回调函数
		// 因为dataType为json，如果服务器返回的是JSON格式数据，jQuery会将其转为对应的JS对象

		// 假设data为{ msg: "Ajax请求成功", uid: 2 }
		alert( data.msg );
	}
});
```

```javascript
// 以GET方式发送Ajax请求
$.get("ajax.php", { username: "hello", password: "123456" }, function(data){
	// 这是Ajax请求成功后执行的回调函数，就是上面$.ajax中的success选项
});

// 以POST方式发送Ajax请求
$.post("ajax.php", { username: "hello", password: "123456" }, function(data){
	// 这是Ajax请求成功后执行的回调函数，就是上面$.ajax中的success选项
});
```

## DOM元素和jQuery对象的相互转换

jQuery对象是一个**类数组**对象。它将匹配的所有DOM元素都依次存储在数字索引形式的属性中，并用*length*属性存储DOM元素的个数。jQuery提供了一个[get()](https://codeplayer.vip/p/j7sne)方法，用于获取对应索引的DOM元素。