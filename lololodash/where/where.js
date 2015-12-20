var _ = require('lodash');

var worker = function(list) {
	if(_.isEmpty(list)) { return []; }

	var filteredList = _.where(list, { active: true });
	return filteredList
};

// export the worker function as a nodejs module
module.exports = worker;
