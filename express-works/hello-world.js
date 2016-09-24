var port = process.argv[2]; //supplied by exercise

var express = require('express');
var app = express();

app.get('/home', function(req, res){
	res.end('Hello World!');
});
app.listen(port);
