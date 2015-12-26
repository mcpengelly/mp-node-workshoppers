var fs = require('q-io/http');
var url = 'http://localhost:1337';

fs.read(url)
	.then(JSON.parse)
	.then(console.log)
	.catch(null, console.log);
