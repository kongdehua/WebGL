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
