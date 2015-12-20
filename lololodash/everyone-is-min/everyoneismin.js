var _ = require('lodash');

//example input
//	{ Hamburg:   [14,15,16,14,18,17,20,22,21,18,19,23],
// 		Munich:    [16,17,19,20,21,23,22,21,20,19,24,23],
// 		Madrid:    [24,23,20,24,24,23,21,22,24,20,24,22],
// 		Stockholm: [16,14,12,15,13,14,14,12,11,14,15,14],
// 		Warsaw:    [17,15,16,18,20,20,21,18,19,18,17,20] }

var result = {
	hot: [],
	warm: []
};

var checkTemp = function (temperature) {
	return temperature > 19;
};

var worker = function (collection) {
	_.forEach(collection, function(town, townname) {
		if(_.every(town, checkTemp)) {
			result.hot.push(townname);
		} else if (_.some(town, checkTemp)) {
			result.warm.push(townname);
		}
	});
	return result;
};

module.exports = worker;
