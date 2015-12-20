var _ = require('lodash');

var worker = function (freelancerList) {
	var totalIncome;
	var freelancerRatings = [];
	//calculate average income across all freelancers
	var avgIncome = _.forEach(freelancerList, function (freelancer) {
		totalIncome += freelancer.income;
	});

	return freelancerRatings.push({
		average: avgIncome
	});

	//group freelancers by underpeform (< then avgIncome) and overperform (> then avgIncome)


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
};

module.exports = worker;
