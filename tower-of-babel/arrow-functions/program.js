var inputs = process.argv.slice(2);
var result = inputs
				.map((word) => {
					return word[0];
				})
				.reduce((sum, value) => {
					return sum + value;
				});
console.log(result);
