/*
  * Create a function `alwaysThrows` that throws an `Error` withtext `"OH NOES"`;
  * Create a function `iterate` that prints the first argument(an integer) to it and then returns that argument + 1;
  * Create a promise chain that wraps your iterate method using Q's`fcall` then a series of iterations that attempts to perform `iterate`a total of 10 times.
  * Attach `console.log` as a rejection handler at the bottom of yourchain.
  * Insert a call to `alwaysThrows` after your 5th call of `iterate`
 */

function alwaysThrows(){
	throw new Error('OH NOES');
}

function iterate(n){
	console.log(n);
	return n + 1;
}

var promise = new Promise(function(resolve, reject){
	resolve(1);
});

promise.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate) // 5 times
	.then(alwaysThrows)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate) // 5 times
	.then(null, console.log); //err catch
