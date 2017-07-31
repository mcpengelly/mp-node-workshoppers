// create a file that exports a Math object with the following methods
	// properties: PI = 3.141592
	// methods: sqrt, square

// definitions
const PI = 3.141592;
var _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
const sqrt = (s) => {
  return _sqrt(s, s/2.0, 0.0);
};
const square = x => x * x;

//export using object value shorthand ES6
// NORMAL
// export default { PI, sqrt, square };
// FOR USAGE WITH MOCHA
module.exports = { PI, sqrt, square };
