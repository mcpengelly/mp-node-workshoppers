// require('es6-promise');

'use strict'

var promise = new Promise(function(resolve, reject){
	setTimeout(function() {
		resolve('FULFILLED!');
	}, 300);
});

promise.then(console.log);
