module.exports = function(str){
	var regex = /[0-9]\.jpe?g$/;
	return regex.test(str);
}
