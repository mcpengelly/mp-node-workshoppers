var Hapi = require('hapi');
//create new hapi server
var server = new Hapi.Server();

//listen for connections
server.connection({
	host: 'localhost',
	port: Number(process.argv[2]  || 8080)
});

var sayHello = function(req, reply) {
	reply('Hello hapi');
};

server.route({ path: '/' ,	method: 'GET' ,	handler: sayHello });

server.start(function(){
	console.log('server started', server.info.uri);
});
