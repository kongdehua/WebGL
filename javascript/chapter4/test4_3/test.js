// 创建myobject

document.writeln("------------华丽的分隔线------------");

var myObject = {
	value: 0,
	increment: function(inc) {
		this.value += typeof inc == 'number' ? inc : 1;
	}
};

myObject.double = function (inc) {
		this.value += typeof inc == 'number' ? inc : 1;
	}

var double = function (inc) {
		this.value += typeof inc == 'number' ? inc : 1;
	}

for (name in myObject) {
	//if (typeof stooge[name] !== 'function') {
		document.writeln(name + ': ' + myObject[name]);
	//}
}

myObject.increment();
document.writeln(myObject.value);

myObject.increment(2);
document.writeln(myObject.value);

myObject.double();
document.writeln(myObject.value);

myObject.double(2);
document.writeln(myObject.value);

double();
document.writeln(value);

double(2);
document.writeln(value);
