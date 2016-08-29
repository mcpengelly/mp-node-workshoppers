var promise1 = Promise.reject(new Error('Something went wrong.'))
	.then(function(){
		console.log('this will run if nothing has gone wrong in the promise chain.'
	})
	.catch(function(err){
	console.log('trace: ' + err);
});
