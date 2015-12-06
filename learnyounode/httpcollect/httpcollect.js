var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function(res) {
	res.pipe(bl(function (err, data){
		console.log(data.length);
		console.log(data.toString());
	}));
}).on('error', function (e) {
	return e;
});


// http.get(url, function (res) {
// 	res.setEncoding('utf8');
// 	var result;

// 	res.on('data', function (chunk) { return result += chunk; });
// 	res.on('end', function () {
// 		console.log(result.length);
// 		console.log(result.toString());
// 	});
// }).on('error', function () {
// 	return e;
// });
