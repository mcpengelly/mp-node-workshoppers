// make previous lesson more functional w/ lodash
// In particular, you may want to use _.bind, _.compose, or others as you see fit.

var q = require('q');
var qhttp = require('q-io/http');
var _ = require('lodash');

qhttp.read("http://localhost:7000/")
.then(function (id) {
  return qhttp.read("http://localhost:7001/" + id);
})
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done();
