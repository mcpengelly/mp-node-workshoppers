//demonstrate error handling

var q = require('q');

var parsePromise = function(json) {
	var def = q.defer();
	var parsed;

	try {
		parsed = JSON.parse(json);
	} catch (e) {
		def.reject(e);
	}

	def.resolve(parsed);
	return def.promise;
};

var validJSON = process.argv[2]; //assume json is valid

parsePromise(validJSON)
	.then(null, console.log);
