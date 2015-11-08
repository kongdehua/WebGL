document.writeln('Hello world!');

var empty_object = {};
var stooge = {
	"first-name": "Jerome",
	"last-name": "Howard"
};

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

document.writeln(stooge["first-name"])
document.writeln(flight.arrival.IATA)
document.writeln(flight.arrival.IATAS)

document.writeln(flight.equipment);
//document.writeln(flight.equipment.model);
document.writeln(flight.equipment && flight.equipment.model);

if (typeof Object.beget !== 'function') {
	Object.beget = function(o) {
		var F = function() {};
		F.prototype = o;
		return new F();
	}
}

var another_stooge = Object.beget(stooge);


