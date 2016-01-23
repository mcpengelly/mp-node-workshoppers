var hapi = require('hapi');
var boom = require('boom');
var server = new hapi.Server();

server.connection({
	port: Number(process.argv[2]) || 8080,
	host: 'localhost'
});

//restrict doman to localhost
//ttl = time to expire in milliseconds
server.state('session', {
	path: '/',
	encoding: 'base64json',
	ttl: 10,
	domain: 'localhost'
});

//set cookies session key to makemehapi
var setCookieHandler = function (req, reply) {
	return reply({ message: 'success'})
		.state( 'session', { key: 'makemehapi' } );
};

//fetch cookie data set by /set-cookie
var getCookieHandler = function (req, reply) {
	var session = req.state.session;
	var result;

	if(session){
		result = { user: 'hapi' };
	} else {
		//optional portion
		result = boom.unauthorized('you dont have the correct authorization');
	}

	reply(result);
};

server.route([{
	path: '/set-cookie',
	method: 'GET',
	config: {
		handler: setCookieHandler,
		state: {
			parse: true,
			failAction: 'log'
		}
	}
},
{
	path: '/check-cookie',
	method: 'GET',
	handler: getCookieHandler
}]);

server.start(function() {});
