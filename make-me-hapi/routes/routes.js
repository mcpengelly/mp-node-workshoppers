var Hapi = require('hapi');
//create new hapi server
var server = new Hapi.Server();

//listen for connections
server.connection({
	host: 'localhost',
	port: Number(process.argv[2]  || 8080)
});
//print 'hello hapi' when server recieves get request
var sayHello = function(req, reply) {
	reply('Hello ' + encodeURIComponent(req.params.name));//encoding cuz its a user input value
};

server.route({
	path: '/{name}' ,
	method: 'GET' ,
	handler: sayHello
});

server.start(function(){
	console.log('server started', server.info.uri);
});
