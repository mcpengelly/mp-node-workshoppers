/* global getPromise1, getPromise2 */

'use strict'

function all(promise1, promise2){
	return new Promise(function(resolve, reject){
		var counter = 0;
		var out = [];

		promise1.then(function(val){
			out[0] = val;
			counter++;

			if(counter >= 2) {
				// resolve([promise1, promise2])
				resolve(out)
			}
		});

		promise2.then(function(val){
			out[1] = val;
			counter++;

			if(counter >= 2){
				resolve(out);
			}
		});

	});

all(getPromise1(), getPromise2())
	.then(function(values){
		console.log(values);
	})
	.then(null, console.log)

}

// function getPromise1(){
// 	return new Promise(function(resolve, reject){
// 		resolve(1);
// 	});
// }
// function getPromise2(){
// 	return new Promise(function(resolve, reject){
// 		resolve(2);
// 	});
// }
// var p1 = getPromise1(1);
// var p2 = getPromise2(2);
