var trumpet = require('trumpet'); // lib that supports creating transform streams from css selector
var tr = trumpet();
var through = require('through2');
var fs = require('fs');

//create stream from only elements w/ loud class
var stream = tr.select('.loud').createStream();

//uppercase the stream, pipe back to trumpet stream
stream.pipe(through(function(chunk, enc, callback){
	this.push(chunk.toString().toUpperCase());
	callback();
})).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);
// fs.createReadStream(__dirname +
// 	'/test.html').pipe(tr).pipe(process.stdout);
