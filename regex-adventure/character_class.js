module.exports = function(str){
	var regex = /^[^0-9][^A-Z]/;
	return regex.test(str);
}
