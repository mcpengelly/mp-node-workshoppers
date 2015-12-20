var hapi = require('hapi');
var vision = require('vision');
var path = require('path');
var server = new hapi.Server();

server.connection({
	host: 'localhost',
	port: process.argv[2] || 8080
});

server.register(vision, function (err){
	if (err) throw err;
});

server.route({
	path: '/',
	method: 'GET',
	handler: { view: 'index.html' }
});

server.views({
	engines: {
		html: require('handlebars')
	},
	path: path.join(__dirname, 'templates')
});

server.start(function(){});

//alternative anonymous function syntax, the following are equivalent
//function(exampleVar) { exampleVar += ' append to end' }
//(exmapleVar) => { exampleVar += ' append to end'}
