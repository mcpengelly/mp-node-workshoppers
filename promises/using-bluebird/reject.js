var Promise = require('bluebird');
var deferred = Promise.pending();

var printErr = function(err) {
	console.log(err);
};

deferred.promise.then(null, printErr);
setTimeout(deferred.reject('REJECTED!'), 300);
