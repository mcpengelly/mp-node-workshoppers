//Demonstrate ECMAScript 6 string templating abilities

var name = process.argv[2];
var lowerName = name.toLowerCase();

console.log(
`Hello, ${name}!
Your name lowercased is "${lowerName}".`
)
