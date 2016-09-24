var port = process.argv[2]; //provided by exercise
var some = process.argv[3];
var path = require('path');
var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded({extended: false})); //To parse x-www-form-urlencoded request bodies
app.post('/form', function (req, res, next) {
  var flippedText = req.body.str.split('').reverse().join('');
  res.send(flippedText);
}).listen(port);


