// generator functions

let fizzbuzz = function* (){
	let pre = 0, curr = 1;
	let val;

	while(pre < process.argv[2]){
		[pre, curr] = [curr, curr + 1];

		if(pre % 3 === 0 && pre % 5 === 0){
			val = 'FizzBuzz';
		}
		else if(pre % 3 === 0){
			val = 'Fizz';
		}
		else if(pre % 5 === 0) {
			val = 'Buzz';
		}
		else {
			val = pre;
		}
		yield val;
	}
}();

for(let n of fizzbuzz){
	console.log(n);
}
