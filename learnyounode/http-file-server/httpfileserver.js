var http = require('http');
var fs = require('fs');
var port = Number(process.argv[2]);
var pathToFile = process.argv[3];

//create a server that serves the same file to
http.createServer(function(req, res) {
	res.writeHead(200, { 'content-type': 'text/plain' });
	var readStream = fs.createReadStream(pathToFile).pipe(res);
}).listen(port);
