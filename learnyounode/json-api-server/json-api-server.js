var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);

http.createServer(function(req, res){
	function parsetime (time) {
		return {
			"hour": time.getHours(),
			"minute": time.getMinutes(),
			"second": time.getSeconds()
		};
	}
	function unixtime (time) {
		return {
			"unixtime": time.getTime()
		};
	}

	res.writeHead(200, {'Content-Type': 'application/json'});
	var parsedUrl = url.parse(req.url, true);
	var time = new Date(parsedUrl.query.iso);
	var result;

	if(/^\/api\/parsetime/.test(req.url)) {
		result = parsetime(time);
	} else if	(/^\/api\/unixtime/.test(req.url)) {
		result = unixtime(time);
	}

	res.end(JSON.stringify(result));
}).listen(port);
