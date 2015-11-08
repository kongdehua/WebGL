#3 对象
JavasScript的简单类型包括数字、字符串、布耳值、null值和undefined值。其它所有的值都是对象。数字、字符串、布尔值 **貌似** 对象，因为他们拥有方法，但它们是不可变的。JavaScript中的对象是可变的键控集合（keyed collections）。在JavaScript中，数组是对象、函数是对象、正则表达式是对象，当然，对象自然也是对象。

对象是属性的容器，其中每个属性都拥有名字和值。属性的名字可以是包括空字符串在内的任意字符串。属性值可以是除undefined值之外的任何值。

JavaScript中的对象是无类别（class-free）。它对新属性的名字和值没有约束。对象适合用于收集和管理数据。对象可以包含其他对象，所以它们可以容易地表示成树形或图形结构。

JavaScript包括一个原型链特性，允许对象继承另一对象的属性。正确使用它能减少对象初始化的时间和内存消耗。


## 3.1 对象字面量
对象字面量提供了一种非常方便地创建新对象值的表示发。一个对象字面量就是包围在一堆花括号中的零或多个“名/值”对。对象字面量可以出现在任何允许表达式出现的地方。

	var empty_object = {};
	var stooge = {
		"first-name": "Jerome",
		"last-name": "Howard"
	};

属性名可以是包括空字符串在内的任何字符串。在对象字面量中，如果属性名是一个合法的JavaScript标识符，且不是保留字，并不强制要求用引号扩住属性名。所以用引号扩住“first-name”是必须的，但是扩住`first_name`则是可选的。逗号用来分隔多个“名/值”对。

属性的值可以从包括另一个对象字面量在内的任意表达式中获得。对象是可嵌套的：

	var flight = {
		airline: "Oceanic",
		number: 815,
		departure: {
			IATA: "SYD",
			time: "2004-09-23",
			city: "Sydney"
		},
		arrival: {
			IATA: "LAX",
			time: "2004-09-22",
			city: "Los Angleles"
		}
	};


## 3.2 检索
要检索对象中包含的值，可以采用`[]`后缀中括住一个字符串表达式的方式。如果字符串表达式是一个常数，而且它是一个合法的JavaScript标识符而并非保留字，那么也可以用`.`表示法来代替。优先考虑使用`.`表示法，因为它更紧凑且可读性更好。

	stooge["first-name"]
	flight.departure.ISAT

如果你尝试检索一个并不存在的成员元素的值，将会返回一个undefined值。

	stooge["middle-name"]; //undefined
	flight.status;         //undefined

`||`运算符可以用来填充默认值：

	var middle = stooge["middle-name"] || "(none)";
	var statue = flight.status || "unknown";

尝试检索一个undeined的值将会导致TypeError异常。这可以通过`&&`运算符来避免错误。

	flight.equipment
	flight.equipment.model
	flight.equipment && flight.equipment.model

## 3.3 更新
对象中的值可以通过赋值语句来更新。如果属性名已经存在与对象中，那么这个属性的值被替换。

	stooge['first-name'] = 'Jerome';

如果对象之前并没有拥有那个属性名，那么该属性就被扩充到该对象中。

	stooge['middle-name'] = 'Lester';
	stooge.nickname = 'Curly';
	flight.equipment = {
		model: 'Boeing 777';
	};
	flight.status = 'overdue';

## 3.4 引用
对象通过引用来传递。它们永远不会被拷贝;

	var x = stooge;
	x.nickname = 'Curly';
	var nick = stooge.nickname;
		// 因为x和stooge是指向同一个对象的引用，所以nick是'Curly'
	
	var a = {}, b = {}, c = {};
		// a b c 每个都引用不同的对象

	a = b = c = {};
		// a b c 都引用相同的对象


## 3.5 原型
每个对象都链接到一个原型对象，并且它可以从中继承属性。所有对象字面量创建的对象都链接到Object.prototype这个JavaScript中标准的对象。

当你创建一个对象时，你可以选择某个对象作为它的原型。JavaScript提供的实现机制杂乱而复杂，但其实可以被明显地简化。我们将给Object增加一个beget方法。这个beget方法创建一个使用原对象作为其原型的新对象。下一张有更多关于函数的内容。

	if (typeof Object.beget !== 'function')
	{
		Object.beget = function(o) {
			var F = function() {};
			F.prototype = o;
			return new F();
		}
	}

	var another_stooge = Object.beget(stooge);

原型连接在更新时是不起作用的。当我们对某个对象作出改变时，不会触及到该对象的原型：
	
	another_stooge['first-name'] = 'Harry';
	another_stooge['middle-name'] = 'Mouses';
	another_stooge.nickname = 'Moe';

原型连接只有在检索值的时候才被用到。如果我们尝试去获取对象的某个属性值，且该对象没有此属性名，那么JavaScript会试着从原型对象中获取属性值。如果那个原型对象也没有该属性值，那么再从它的原型中寻找，依次类推，知道该过程最后到达终点Object.prototype。如果想要的属性完全不存在于原型链中，那么结果就是undefined值。这个过程成为`委托`。
