// 1. It gets passed a logger (with at least `log.info()` and
//    `log.error()` functions defined) and a callback.

// 2. When things are working, `cb` should be called at the end with
//    the value 2964. There is something iffy with the operations
//    applied to the value. The program can be fixed by removing one
//    line.

// 3. Log an object containing the value of value and the currently
//    active function *after* EACH time `value` is assigned or changed.
//    Each call should look like this:

//    // "scenario" is the name of the currently executing function
//    log.info({value : value}, "scenario");

// 4. When you figure out what the error is, make a call to
//    log.error() indicating what the problem is *before* logging
//    what `value` is at that point once you've fixed things. You'll
//    want to keep the existing call to log.info:

// 5. Here is a sample runner that will inject a Bunyan logger into your
//    sample program and prints JSON log output you can pipe through bunyan
//    like so: `node bunyan-runner.js scenario.js | bunyan`

//     var resolve = require("path").resolve;

//     var bunyan = require("bunyan");
//     var log = bunyan.createLogger({name : "sample"});

//     var scenario = require(resolve(process.cwd(), process.argv[2]));
//     scenario(log, function (value) {
//       log.info("value at finish is", value);
//     });

module.exports = scenario;

var bunyan = require("bunyan");
var log = bunyan.createLogger({name: "scenario"});

function scenario(log, cb) {
  function start() {
    process.nextTick(thing);
  }

  var value = 97;

  function foo() {
    value *= 13;
    log.info(value);
    cb(value);
  }

  start();

  function racer() {
    value &= 255;
    setTimeout(foo, 0);
  }

  value = 213;

  function thing() {
    value += 131;
    process.nextTick(racer);
  }
}
