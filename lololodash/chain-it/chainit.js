// ## Your Mission

// We have a list of words that we want to modify.

//     ['Test', 'Hello', 'World', 'Node', 'JavaScript']

// We want to modify each word so that they are all appended with the word Chained, converted to uppercase, and sorted by alphabetical order. The result should look like this:

//     ['HELLOCHAINED', 'JAVASCRIPTCHAINED', 'NODECHAINED', 'TESTCHAINED', 'WORLDCHAINED']

// #### Template

// All of your solutions should follow this template:

//     // include the Lo-Dash library
//     var _ = require("lodash");

//     var worker = function(/* arguments */) {
//         // do work; return stuff
//     };

//     // export the worker function as a nodejs module
//     module.exports = worker;

// lololodash will call your function and test it with different arguments.

var _ = require('lodash');

// take a list of words, sort them alphabetically, append text and uppercase
var chainmail = function(words) {
	if(_.isEmpty(words)) return words;

	return _.chain(words)
		.sortBy()
		.map(function(word) {
			var appended = word.toString() + 'chained';
			return appended.toUpperCase();
		});
};

module.exports = chainmail;
