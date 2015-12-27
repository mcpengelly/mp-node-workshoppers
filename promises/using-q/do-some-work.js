// 1. Send an HTTP GET request to the session cache on port 7000.  A JSON payload
//    will be returned to you containing a primary key called "id".
// 2. Grab that id from the session response and send an HTTP GET request to
//    your database on port 7001 to the url "localhost:70001/<id>".
// 3. If successfully done, your database will return a user object.  console.log
//    it to win many nerd-points.


var qioHttp = require('q-io/http');
var host = 'http://localhost:';
var port_1 = 7000;
var port_2 = 7001;

var getUserData = function (id) {
	return qioHttp.read(host + port_2 + '/' + id);
};

var parseJSON = function (json) {
	return JSON.parse(json);
};

//get req to session cache
qioHttp.read(host + port_1)
	.then(getUserData)
	.then(parseJSON)
	.then(console.log)
	.catch(null, console.log)
	.done();
