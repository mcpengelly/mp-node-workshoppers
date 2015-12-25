var q = require('q');

var deferred = q.defer();

deferred.promise.then(console.log, console.log);
deferred.resolve("I FIRED");
deferred.reject("I DID NOT FIRE");
