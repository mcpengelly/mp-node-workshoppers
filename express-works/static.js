var port = process.argv[2]; //provided by exercise
var someHtml = process.argv[3];
var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(someHtml || path.join(__dirname, 'public')));
app.listen(port);
