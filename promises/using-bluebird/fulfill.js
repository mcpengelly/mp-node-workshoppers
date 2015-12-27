//bluebird solution
var Promise = require('bluebird');
var deferred = Promise.pending();

deferred.resolve('RESOLVED!');
deferred.promise.then(console.log);
