var _ = require('lodash');

var worker = function(collection) {
	return _.forEach(collection, function(item) {
		if(item.population >= 1.0) {
			item.size = 'big';
		} else if (item.population <= 0.5) {
			item.size = 'small';
		} else  {
			item.size = 'med';
		}
		return item.toString();
	});
};

module.exports = worker;
