// write a Node module whose default export is a function that will make a string really
// important. It should do this by adding a bunch of exclamation marks after it. The exact number
// of
// exclamation marks should be configurable, but by default, it should be equal to the length
// of the  string.
module.exports = (str, numberOfExclamation = str.length) => str + '!'.repeat(numberOfExclamation);

/** OR  */

// module.exports = (str, numberOfExclamation = str.length) => {
// 	return str + '!'.repeat(numberOfExclamation);
// }
