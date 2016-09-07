// You will find recursion indispensable when iterating over nested data structures.

  // * arr: An Array to reduce over
  // * fn: Function to use as the reduction step. Like regular Array#reduce, this function must be passed previousValue, currentValue, index and the array we're iterating over.
  // * init: Initial value of the reduction. Unlike Array#reduce, this value is required (and you may assume it will always be supplied).

  //   // Your reduce function should behave the same as a
  //   // regular Array#reduce, but it will take the array
  //   // to operate on as the first argument:

  //   reduce([1,2,3], function(prev, curr, index, arr) {
  //     return prev + curr
  //   }, 0)
  //   // => 6

  // * https://en.wikipedia.org/wiki/Recursion
  // * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

function reduce(arr, fn, initial) {
	if(!arr.length) { return []; }
}

module.exports = reduce;
