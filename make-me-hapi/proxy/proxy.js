var hapi = require('hapi');
var vision = require('vision');
var path = require('path');
var h2o2 = require('h2o2');

var server = new hapi.Server();

server.register(h2o2, function(err) {
	if (err) throw err;
});

server.connection({
	host: 'localhost',
	port: Number(process.argv[2]) || 8080
});

//re-route get requests to port 65535
server.route({
	path: '/proxy',
	method: 'GET',
	handler: { proxy: { host: 'localhost', port: 65535 } }
});

server.start(function(){});
