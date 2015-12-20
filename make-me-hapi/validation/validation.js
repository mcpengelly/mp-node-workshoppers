var hapi = require('hapi');
var joi = require('joi');
var server = new hapi.Server();

server.connection({
	host: 'localhost',
	port: Number(process.argv[2]) || 8080
});

var chickenHandler = function(req, reply) {
	reply('chicken breed: ' + req.params.breed);
};

var routeConfig = {
	path: '/chickens/{breed}',
	method: 'GET',
	config: {
		handler: chickenHandler,
		validate: {
			params: {
				breed: joi.string().required()
			}
		}
	}
};

server.route(routeConfig);

server.start(function(){});

