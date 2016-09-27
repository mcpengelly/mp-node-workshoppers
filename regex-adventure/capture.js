// export a module that searches for the string `x=` followed by
// numbers and returns the number found after the equal sign.
module.exports = function(str){
	var regex = /x=([0-9]+)/;
	var sol = regex.exec(str);
	return sol ? sol[1] : null;
};

