//uppercaser server
//make a server that reads takes a request, uppercases it
var http = require('http');
var fs = require('fs');
var port = Number(process.argv[2]);
var map = require('through2-map');

var server = http.createServer(function(req, res) {
	var uppercased = req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(res);
});

server.listen(port);
