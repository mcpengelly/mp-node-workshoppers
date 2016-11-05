// require('stackup');

// var domain = require("domain");

// function doSomethingDangerousAndAsync(cb) {
//   // create a new domain
//   var d = domain.create();

//   // "handle" the error (OMG DON'T DO THIS IN PRODUCTION CODE)
//   d.on("error", cb);

//   // use the domain
//   d.run(function () {
//     doDangerousAsyncThing(cb);
//   });
// }

var readFile = require("fs").readFile;

module.exports = scenario;

function scenario(jsonPath, cb) {
  readFile(jsonPath, {encoding : "utf8"}, function (error, contents) {
    cb(error, JSON.parse(contents));
  });
}
