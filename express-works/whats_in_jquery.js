var port = process.argv[2]; // provided by exercise

var express = require('express');
var app = express();
app.get('/search', function(req, res){
	console.log(req.query);
	var obj = {
		results: req.query.results,
		type: req.query.type,
		page: req.query.page,
	}
	res.send(JSON.stringify(obj));
});

app.listen(port);
