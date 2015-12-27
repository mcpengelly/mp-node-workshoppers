//demonstrating that promises will not be resovled until the next step in the event loop

var q = require('q');
var def = q.defer();

def.promise.then(console.log);
def.resolve('SECOND');
console.log('FIRST');
