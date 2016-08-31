'use strict'

function attachTitle(name){
	return 'DR. ' + name;
}

var doctorsName = new Promise(function(resolve, reject){
	resolve('MANHATTAN');
});

doctorsName.then(attachTitle).then(console.log);
