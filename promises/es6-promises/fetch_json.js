// Fetch JSON from http://localhost:1337 and console.log it. using q-io

//   * `q-io`'s `http` module has a `read` method which returns a promise
//   for the content of a successful (status 200) HTTP request.
//   * Parse the returned JSON and `console.log` it

//   [https://github.com/kriskowal/q-io](https://github.com/kriskowal/q-io)

var HTTP = require('q-io/http')
var request = {
	url: 'http://localhost:1337'
};

HTTP.read(request)
	.then(function(content){
		return JSON.parse(content);
	})
	.then(console.log)
	.then(null, console.error);
