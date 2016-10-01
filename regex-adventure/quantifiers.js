module.exports = function(str){
	var regex = /^(0x[a-fA-F\d]{2}\s+){8}$/;
	return regex.test(str);
};
