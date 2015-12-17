var request = require('request');
var protocol = 'http://';
var host = 'localhost';
var port = 8099;
var url = protocol + host + ':' + port + '/';
var r = request.post(url);

//pipe std input to post request
process.stdin.pipe(r).pipe(process.stdout);
