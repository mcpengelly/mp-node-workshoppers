// export a module that searches for the string `x=` followed by
// numbers and returns the number found after the equal sign.
module.exports = function(str){
	var regex = /\bx=([0-9]+\b)/;
	var sol = regex.exec(str);
	return sol ? sol[1] : null;
};

