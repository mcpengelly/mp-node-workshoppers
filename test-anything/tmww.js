// Write a passing assertion for the function isCoolNumber, that will assure that
// it returns true when passing 42 in it.

// The path of the module exporting the function will be provided through
// process.argv[2].

var mod = require(process.argv[2]);
var assert = require('assert');

assert(mod(42), true);
