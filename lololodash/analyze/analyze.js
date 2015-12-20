var _ = require('lodash');

var worker = function (freelancerList) {
	if(_.isEmpty(freelancerList)) return freelancerList;

	var avg;
	var underperform;
	var overperform;

	freelancerList = _.sortBy(freelancerList, 'income');

	var total = _.reduce(freelancerList, function(sum, item) {
		return sum + item.income;
	}, 0);

	avg = total / freelancerList.length;

	//group freelancers by underpeform (< then avgIncome) and overperform (> then avgIncome)
	underperform = _.filter(freelancerList, function(item){
		return item.income <= avg;
	});

	overperform = _.filter(freelancerList, function(item){
		return item.income > avg;
	});

	return {
		average: avg,
		underperform: underperform,
		overperform: overperform
	};
};

module.exports = worker;

// * Sorts the freelancers within the two groups by their income with the lowest first.
// * Returns an Object in the following form:

//   {
//       "average": 167,
//       "underperform": [
//           { "name": "foobar", "income": 99 },
//           { "name": "dummy", "income": 100 }
//       ],
//       "overperform": [
//           { "name": "foo", "income": 302 }
//       ]
//   }
