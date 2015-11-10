var stooge = {
	"first-name": "Jerome",
	"last-name": "Howard"
};

var properties = [
	'first-name',
	'middle-name',
	'last-name',
	'profession'
];

if (typeof Object.beget !== 'function') {
	Object.beget = function (o) {
		var F = function() {};
		F.prototype = o;
		return new F();
	}
}

var another_stooge = Object.beget(stooge);
stooge.profession = 'actor';
another_stooge.profession

var name ;
document.writeln( 'name is : ' + name + '..');

for (name in stooge) {
	//if (typeof stooge[name] !== 'function') {
	//	document.writeln(name + ': ' + stooge[name]);
	//}
}

for (name in another_stooge) {
	//if (typeof stooge[name] !== 'function') {
	//	document.writeln(name + ': ' + another_stooge[name]);
	//}
}

var a = function aaa(a,b) {
	return a + b;
};

for (name in a)
{
	document.writeln(name + ': ' + a[name]);
};

