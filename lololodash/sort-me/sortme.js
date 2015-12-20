// ## Your Mission

// We have an Array of items sold yesterday like this:

//     [{ article: 41,   quantity: 24 },
//      { article: 2323, quantity: 2  },
//      { article: 655,  quantity: 23 }]

// Please write a function that will sort these items by quantity from largest to smallest.

//   >
//   > #### Hint
//   >
//   > Because `sortBy` only sorts from smallest to largest you may need to use the callback function.

// #### Template

// All of your solutions should follow this template:

//     // include the Lo-Dash library
//     var _ = require("lodash");

//     var worker = function(/* arguments */) {
//         // do work; return stuff
//     };

//     // export the worker function as a nodejs module
//     module.exports = worker;


var _ = require('lodash');


var sorter = function (list) {
	return _.sortBy(list, function(item) {
		return -item.quantity;
	});
};

module.exports = sorter;
