var qio = require('q-io');
var url = 'http://localhost:1337';

qio.http(url, function() {

}).then(JSON.parse)
		.catch(null, console.log);
