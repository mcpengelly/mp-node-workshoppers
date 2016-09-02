// * Send an HTTP GET request to the session cache on port 7000.  A stringwill be returned to you representing a user ID.
// * Grab that ID from the session response and send an HTTP GET request toyour database on port 7001 to the url `localhost:7001/<id>`.
// * If successfully done, your database will return a user object.`console.log` it

var HTTP = require('q-io/http');

var req1 = {
	url: 'http://localhost:7000',
	method: 'GET'
}

HTTP.read(req1)
		.then(function(result){
			return result.toString()
		})
		.then(function(userId){
			var req2 = {
				url: 'http://localhost:7001/' + userId
			}
			return HTTP.read(req2)
		})
		.then(function(user){
			return JSON.parse(user)//.toString();
		})
		.then(console.log)
		.then(null, console.log)//err handling
