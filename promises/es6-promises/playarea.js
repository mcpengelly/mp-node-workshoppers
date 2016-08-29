var fruit = 's';
new Promise(function(resolve, reject){
	if(fruit === 'bananas'){
		resolve('bananas');
	} else {
		reject('not bananas');
	}
}).then(function)
