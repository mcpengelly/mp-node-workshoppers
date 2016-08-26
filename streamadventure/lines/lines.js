var split = require('split');
var through2 = require('through2');
var lineCount = 0;

process.stdin.pipe(split()).pipe(through2(function(line, _, next) {
	if (lineCount % 2 === 0) {
			this.push(line.toString().toLowerCase() + '\n');
		} else {
			this.push(line.toString().toUpperCase() + '\n');
	}
	lineCount++;
	next();
})).pipe(process.stdout);
