//working solution
var Promise = require('bluebird');

var deferred = Promise.pending();

function parsePromised(json) {
	try {
		deferred.resolve(JSON.parse(json));
	} catch (e) {
		deferred.reject(e);
	}
	return deferred.promise;
}

parsePromised(process.argv[2])
	.then(console.log)
	.then(deferred.reject, console.log);
