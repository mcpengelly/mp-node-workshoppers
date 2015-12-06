var http = require('http');
var bl = require('bl');
//array to hold returnes
var results = [];
var count = 0;

//function for printing results array
function printResults () {
	for(var i = 0; i < 3; i++) {
		console.log(results[i]);
	}
}

//sends get request to 3 seperate urls provided by learnyounode
//pass in index to iterate throug command line arguments
function httpGet (index) {
	http.get(process.argv[2 + index], function(res) {
		res.setEncoding('utf8');
		//pipe respnse data events to bufferedList, populate results with data obtained from each url
		res.pipe(bl(function(err, data) {
			if(err) throw err;

			results[index] = data.toString();
			count++;

			if(count === 3) {
				printResults();
			}
		}));
	});
}

//code starts here, http get request 3 times passing in the index
for(var i = 0; i < 3; i++) {
	httpGet(i);
}

