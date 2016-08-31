'use strict'

first().then(function(data){
	return second(data);
}).then(console.log, null)
