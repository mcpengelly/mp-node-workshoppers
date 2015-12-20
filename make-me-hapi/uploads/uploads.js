var hapi = require('hapi');

var server = new hapi.Server();
server.connection({
	host: 'localhost',
	port: Number(process.argv[2]) || 8080
});

var uploadHandler = function(request, reply) {
	var body = '';

	request.payload.file.on('data', function(data) {
		body += data;
	});
	request.payload.file.on('end', function() {
	var result = {
		description: request.payload.description,
		file: {
			data: body,
			filename: request.payload.file.hapi.filename,
			headers: request.payload.file.hapi.headers
		}
	};
	reply(JSON.stringify(result));
	});
};

server.route({
	method: 'POST',
	path: '/upload',
	config: {
		handler: uploadHandler,
		payload: {
			output: 'stream',
			parse: true,
			allow: 'multipart/form-data'
		}
	}
});

server.start(function(){});
