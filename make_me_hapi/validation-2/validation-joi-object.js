
// Create a server exposing a login endpoint and reply with "login successful" when
// an HTTP POST request is sent to /login.

// The endpoint will accept following payload variables:

// isGuest       (boolean)
// username      (string)
// accessToken   (alphanumeric)
// password      (alphanumeric)

// Validation should consist of following conditions:

// i)   if isGuest is false, a username is required.
// ii)  password cannot appear together with accessToken.
// iii) if any other parameters than specified above are sent, they should pass the validation.


var hapi = require('hapi');
var joi = require('joi');
var server = new hapi.Server();

server.connection({
	host: 'localhost',
	port: Number(process.argv[2]) || 8080
});

var validationHandler = function(req, reply) {
	reply('login successful');
};

var routeConfig = {
	path: '/login',
	method: 'POST',
	handler: validationHandler,
	config: {
		validate: {
			payload: joi.object({
				username: joi.string(),
				password: joi.string().alphanum(),
				accessToken: joi.string().alphanum(),
				birthyear: joi.number().integer().min(1900).max(2013),
				email: joi.string().email()
			})
			.options({allowUnknown: true})
			.without('password', 'accessToken')
		}
	}
};

server.route(routeConfig);

server.start(function(){});
