var q = require('q');
//start promises!
var defer = q.defer();
defer.promise.then(console.log('RESOLVED!'));
