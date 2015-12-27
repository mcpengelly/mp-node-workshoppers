var q = require('q');
var defer = q.defer();

var error = new Error("REJECTED!");

var printError = function (err) {
	console.log(err.message);
};

//if successful print stuff, if promise rejected print error
defer.promise.then(null, printError);
//not typically how you would reject  promise but illustrates the point
setTimeout(defer.reject, 300, error);
