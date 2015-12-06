var filterMethod = require('./lsLib');
var pathToDir = process.argv[2];
var extensionName = process.argv[3];

filterMethod(pathToDir, extensionName, function(err, list) {
	if(err) throw err;

	list.forEach(function(item){
		console.log(item);
	});
});
