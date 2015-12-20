var _ = require('lodash');


var sorter = function (list) {
	return _.sortBy(list, function(item) {
		return -item.quantity;
	});
};

module.exports = sorter;
