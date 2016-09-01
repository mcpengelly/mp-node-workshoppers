'use strict'

var invalidJSON = process.argv[2];

function parsePromised(){
	new Promise(function(resolve, reject){
		JSON.parse(invalidJSON);
	}).then(null, console.log);
}

parsePromised();
