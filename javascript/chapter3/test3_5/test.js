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
another_stooge['profession'] = 'profess1'
stooge.profession = 'actor';
stooge.profes = 'actor';
//another_stooge.profession = 'profess'
//another_stooge['profession'] = 'profess1'
//another_stooge['prof']=12;

for (name in stooge) {
	//if (typeof stooge[name] !== 'function') {
		document.writeln(name + ': ' + stooge[name]);
	//}
}

document.writeln("-------------------------");
for (name in another_stooge) {
	//if (typeof stooge[name] !== 'function') {
		document.writeln(name + ': ' + another_stooge[name]);
	//}
}

delete another_stooge.profession
document.writeln("-------------------------");
for (name in another_stooge) {
	//if (typeof stooge[name] !== 'function') {
		document.writeln(name + ': ' + another_stooge[name]);
	//}
}
