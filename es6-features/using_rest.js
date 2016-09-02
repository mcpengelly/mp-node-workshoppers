//export a function that will be called with an arbitrary number of arguments
//and averages the result, returns it
module.exports = function average(...args) {
	var total = 0;
	args.forEach(function(a){
		total = total + a;
	});
	return total / args.length;
};
