var hapi = require('hapi');
var vision = require('vision');
var path = require('path');

var server = new hapi.Server();

server.register(vision, function (err) {
	if(err) throw err;
});

server.connection({
	host: 'localhost',
	port: Number(process.argv[2]) || 8080
});

server.route({
	path: '/',
	method: 'GET',
	handler: { view: 'index.html' },
});

server.views({
	engines: {
		html: require('handlebars'),
	},
	path: path.join(__dirname, 'templates'),
	helpersPath: path.join(__dirname, 'helpers')
});

server.start(function(){});
