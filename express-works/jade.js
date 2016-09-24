var path = require('path');
var express = require('express');
var port = process.argv[2];
var someJade = process.argv[3];
// example...
// h1 Hello World
// p Today is #{date}.


var app = express();

app.set('view engine', 'jade');

app.get('/home', function(req, res){
	res.render(someJade, { date: new Date().toDateString() })
});
app.listen(port);
