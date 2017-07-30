// ES6 iterator for-of
// any object can be iterable if given Symbol.iterator w
// which can be imlpemented like a generator function
const max = process.argv[2];
let FizzBuzz = {
	[Symbol.iterator]() {

		let pre = 0, curr = 1;
		let val;
		return {
			next(){
				if(pre < process.argv[2]){
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
					return { done: false, value: val };
				}
				return { done: true };
			}
		}
	}
}

for (var n of FizzBuzz) {
	console.log(n);
}
