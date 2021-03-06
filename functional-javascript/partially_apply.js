var slice = Array.prototype.slice;

function logger(namespace) {
  return function(str){
   console.log.apply(console, [namespace].concat(slice.call(arguments)));
  }
}

module.exports = logger;
