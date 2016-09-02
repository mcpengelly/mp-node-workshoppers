//demonstrate the utility of the spread operator in es6

//grab some input values, exclude the first two since its node and those are taken..
var inputs = process.argv.slice(2);

var min = Math.min(...inputs); //calls min w/ as many arguments as there are values in input array
console.log(`The minimum of [${inputs}] is ${min}`);
