var port = process.argv[2]; //provided by exercise
var file = process.argv[3]; //a file to be read
var fs = require('fs');
var path = require('path');
var express = require('express');

var app = express();

app.get('/books', function(req, res){
	fs.readFile(file, function(err, result){
		if(err) { throw new Error('file input error'); }
		var parsed = JSON.parse(result.toString());

		res.json(parsed);
	});
});
app.listen(port);
