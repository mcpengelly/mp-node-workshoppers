var hapi = require('hapi');
var auth = require('hapi-auth-basic');
var server = new hapi.Server();

var user = { name: 'hapi', password: 'auth'};

server.connection({
	host: 'localhost',
	port: Number(process.argv[2]) || 8080
});

//check if username matches existing,
var validate = function (req, username, password, callback) {
	var isValid = username === user.name && password === user.password;

	return callback(null, isValid, { name: user.name });
};

server.register(auth, function(err) {
	if(err) throw err;

	server.auth.strategy('simple', 'basic', { validateFunc: validate });

	server.route({
		method: 'GET',
		path: '/',
		config: {
			auth: 'simple',
			handler: function(req, reply) {
				reply();
			}
		}
	});

	server.start(function(){});
});

