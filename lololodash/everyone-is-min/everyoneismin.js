var _ = require('lodash');
var result = {
	hot: [],
	warm: []
};

var sortHot = function (item) {
	return item.temperature >= 19;
};

var sortWarm = function (item) {
	return item.temperature >= 19;
};

var worker = function (collection) {
	console.log(_.every(collection, sortHot));
	if(_.every(collection, sortHot)) {
		result.hot.push('asdasd');
	} else if (_.some(collection, sortWarm)) {
		result.warm.push('dasd');
	}
	return result;
};

module.exports = worker;
