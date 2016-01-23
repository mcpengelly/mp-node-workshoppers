var hapi = require('hapi');
var inert = require('inert');
var path = require('path');

var server = new hapi.Server();

server.register(inert, function (err) {
	if (err) throw err;
});

//configure server
server.connection({
	host: 'localhost',
	port: Number(process.argv[2]) || 8080
});

//object file handlers courtesy of Inert
//serve html on GET req
server.route({
	method: 'GET',
	path: '/',
	handler: {
		file: path.join(__dirname, '/index.html')
	}
});

server.start(function(){});
