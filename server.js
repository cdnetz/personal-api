var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 8989;

app.use(bodyParser.json());

app.listen(port);

var me = {
	name: "chris",
	residence: "Provo, UT & Oak Creek, WI",
	hobbies: ["sports", "video games", "outdoors", "computers"],
	occupations: ["sandwich artist", "security guard", "pizza driver", "system admin"],
	mentions: ["www.google.com", "www.facebook.com", "www.twitter.com"],
	references: ["Joe Bob", "Jimbo Smith", "Bob Dole"],
	skills: [

		{
			index: 1,
			name: 'HTML',
			experience: 'Experienced'
		},

		{
			index: 2,
			name: 'CSS',
			experience: 'Intermediate'
		},

		{
			index: 3,
			name: 'JavaScript',
			experience: 'Beginner'
		},

		{
			index: 4,
			name: 'Chrome',
			experience: 'Experienced'
		}
	]
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

app.get('/residence', function (req, res) {
	res.send(me.residence)
});

app.get('/hobbies', function (req, res) {
		
	if (req.query.sort === 'alpha') {
		res.send(me.hobbies.sort())
	}
	else if (req.query.sort === 'alpha=rever'){
		res.send(me.hobbies.sort().reverse());
	}
			 
	else { 
		res.send(me.hobbies);
	}
	
});

app.get('/occupations', function (req, res) {
	if (req.query.sorted === 'alpha') {
		res.send(me.occupations.sort())
	}
	else if (req.query.sorted === 'alpha=rever'){
		res.send(me.occupations.sort().reverse());
	}	 
	else { 
		res.send(me.occupations);
	}
});

app.get('/occupations/latest', function (req, res) {
	res.send(me.occupations[me.occupations.length - 1]);
});

app.get('/mentions' , function (req, res) {
	res.send(me.mentions);
	
})
app.post('/mentions', function (req, res) {
	me.mentions.push(req.body);
})
app.get('/references', function (req, res) {
	res.send(me.references);
})

app.post('/references', function (req, res) {
	me.references.push(req.body);
})

app.get('/skills', function (req, res) {
	
	var skillsArr = [];
		if (req.query.exp) {
			for (var i = 0; i < me.skills.length; i++) {
				if (req.query.exp === 'beginner' && me.skills[i].experience === 'Beginner') {
					skillsArr.push(me.skills[i]);
				}
				else if (req.query.exp === 'intermediate' && me.skills[i].experience === 'Intermediate') {
					skillsArr.push(me.skills[i]);

				}
				else if (req.query.exp === 'experienced' && me.skills[i].experience === 'Experienced') {
					skillsArr.push(me.skills[i]);
				}
			}
		}
		else {
			res.send(me.skills);
		}
		res.send(skillsArr);
	
	
})



app.post('/skills', function (req, res) {
	me.skills.push(req.body);
})
