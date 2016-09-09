var slice = Array.prototype.slice;

function logger(namespace) {
  // SOLUTION GOES HERE
  return function(str){
   console.log.apply(console, [namespace].concat(slice.call(arguments)));
  }
}

module.exports = logger;
