var promise = new Promise(function(fulfill, reject){
	fulfill('I FIRED');
	reject(new Error('I DID NOT FIRE'));
}).then(console.log, console.log);
