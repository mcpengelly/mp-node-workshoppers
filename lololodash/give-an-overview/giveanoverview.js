var _ = require("lodash");

//add up all order quantities from the order list into an object,
//output a list of unique articles with their total orders
//
var worker = function (orderList) {
	if (_.isEmpty(orderList)) return orderList; // handle empty array input

	var qTotal = 0;
	var articleTotals = [];
	//group articles
	var grouping = _.groupBy(orderList, 'article');

	_.forEach(grouping, function(item, key) {
		var k = parseInt(key);
		// If only one article
		if (item.length === 1) {
				qTotal = item[0].quantity;
			} else {
				//reduce through each item property
				qTotal = _.reduce(item, function(sum, item) {
					return sum + item.quantity;
			}, 0);
		}

		articleTotals.push({
			article: k,
			total_orders: qTotal
		});
		return articleTotals;
	});

//reverse ascending integer sort
	return _.sortBy(articleTotals, function (num) {
		return -num;
	});
};

module.exports = worker;
