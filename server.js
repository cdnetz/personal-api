var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 8989;

app.use(bodyParser.json());

app.listen(port);

var me = {
	name: "chris",
	location: "Provo, UT & Oak Creek, WI",
	hobbies: ["sports", "video games", "outdoors", "computers"],
	occupations: ["sandwich artist", "security guard", "pizza driver", "system admin"]
	
};

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods, OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/name', function (req, res) {
	res.send(me.name);
});

app.get('/location', function (req, res) {
	res.send(me.location)
});

app.get('/hobbies', function (req, res) {

	
		var sorted = me.hobbies.sort();
		
		if (req.query.hobbies === 'alpha') {
			res.send(sorted)
		}
		else if (req.query.hobbies === 'alpha.rever'){
		  		var reverse = sorted.reverse();
		  		res.send(reverse);
		}
			 
		else if (req.query.hobbies === ''){ 
			res.send(me.hobbies);
		}
	
});

app.get('/occupations', function (req, res) {
	
		
		var occSorted = me.occupations.sort();
		if (req.query.occupations === 'alpha') {
			res.send(occSorted)
		}
		else if (req.query.occupations === 'alpha.rever'){
		  		var reve = occSorted.reverse();
		  		res.send(reve);
		
		}	 
		else if (req.query.occupations === ''){ 
			res.send(me.occupations);
		}
	
	
});

app.get('/occupations/latest', function (req, res) {
	res.send(me.occupations[me.occupations.length - 1]);
});


