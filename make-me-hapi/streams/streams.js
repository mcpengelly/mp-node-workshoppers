var hapi = require('hapi');
var path = require('path');
var fs = require('fs');
var rot13 = require('rot13-transform');
var server = new hapi.Server();

server.connection({
	host: 'localhost',
	port: Number(process.argv[2]) || 8080
});

server.route({
	path: '/',
	method: 'GET',
	handler: function(req, reply) {
		var stream = fs.createReadStream(path.join(__dirname, 'hapiness.txt'));

		reply(stream.pipe(rot13()));
	}
});

server.start(function(){});

