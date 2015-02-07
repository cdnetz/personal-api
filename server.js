var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 8989;

app.use(bodyParser.json());

app.listen(port);

var me = {
	name: "chris",
	location: "Provo, UT & Oak Creek, WI",
	hobbies: ["computers", "sports", "video games", "outdoors"];
	occupations: ["sandwich artist", "security guard", "pizza driver"];
	occupationsLatest: "System Admin";
};

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods, OPTIONS, GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/name', function (req, res) {
	res.send(me.name);
});

app.get('/location', function (req, res) {
	res.send(me.location)
});

app.get('/hobbies', function (req, res) {
	for (var i = 0; i < me.hobbies.length; i++) {
		res.send(me.hobbies[i]);
	};
});

app.get('/occupations', function (req, res) {
	for (var i = 0; i < me.occupations.length; i++) {
		res.send(me.occupations[i]);
	};
});

app.get('/occupations/latest', function (req, res) {
	res.send(me.occupationsLatest);
});