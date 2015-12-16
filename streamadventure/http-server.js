var http = require('http');
var through = require('through2');
var port = Number(process.argv[2]);

function write(buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase());
	next();
}

function end(done) {
	done();
}

http.createServer(function(req, res) {
	//use through2 to uppercase incoming POST requests
	if(req.method === 'POST') {
		req.pipe(through(write, end)).pipe(res);
	}
	//uppercase the request and send it back as the response
}).listen(port);
