var port = process.argv[2]; //provided by exercise
var assets = process.argv[3]; //some html and some stylus provided by exercise
var path = require('path');
var express = require('express');

var app = express();

app.use(require('stylus').middleware(assets));
app.use(express.static(assets || path.join(__dirname, 'public')));
app.listen(port);
