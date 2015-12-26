var q = require('q');

var def1 = q.defer();
var def2 = q.defer();

var all = function (promise1, promise2) {
	var innerDef = q.defer();
	var counter = 0;
	var value1, value2;

	promise1.then(function(result) {
		value1 = result;
		counter++;
		if (counter >= 2) {
			innerDef.resolve([value1, value2]);
		}
	}).then(null, innerDef.reject);

	promise2.then(function(result) {
		value2 = result;
		counter++;
		if (counter >= 2) {
			innerDef.resolve([value1, value2]);
		}
	}).then(null, innerDef.reject);

	return innerDef.promise;
};

all(def1.promise, def2.promise)
	.then(console.log)
	.done();

setTimeout(function() {
	def1.resolve('PROMISES');
	def2.resolve('FTW');
} , 200);
