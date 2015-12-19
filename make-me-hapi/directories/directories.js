var hapi = require('hapi');
var inert = require('inert');
var path = require('path');

var server = new hapi.Server();

server.register(inert, function(){});

server.connection({
	host: 'localhost',
	port: process.argv[2] || 8080
});

server.route({
	method: 'GET',
	path: '/foo/bar/baz/{filename}',
	handler: {
		directory: { path: path.join(__dirname, 'public') }
	}
});

server.start(function(){});
