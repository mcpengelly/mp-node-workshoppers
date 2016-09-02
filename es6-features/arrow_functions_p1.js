var args = process.argv.slice(2);

//arrow functions es6
var result = args
	.map(str => str[0])
	.reduce((str, s) => str + s);

//string templating es6
console.log(`[${args}] becomes "${result}"`);


