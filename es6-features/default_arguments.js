//demonstrate es6 default arguments

module.exports = (lowBound = 0, upBound = 1) => (lowBound + upBound) / 2

//this will also work and works the exact same way but is more es5
// module.exports = function midpoint(lowerBound = 0, upperBound = 1){
// 	return (lowerBound + upperBound) / 2;
// };
