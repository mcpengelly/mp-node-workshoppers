//fulfillment handlers may return a promise OR a value.

var q = require('q');
var deferred = q.defer();

var attachTitle = function (name) {
	return 'DR. ' + name;
};

deferred.promise
	.then(attachTitle)
	.then(console.log);

deferred.resolve('MANHATTAN');
