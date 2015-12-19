var combine = require('stream-combiner');
var through = require('through2');
var split = require('split');
var zlib = require('zlib');

module.exports = function () {
	//
	var groupedJson = through(write, end);
	var temp;

	//called for each streamed line
	function write(line, encoding, next) {
		if(line.length === 0) return next();

		var row = JSON.parse(line);

		if(row.type === 'genre') {
			if (temp) {
				this.push(JSON.stringify(temp) + '\n');
			}
			temp = { name: row.name, books: [] };
		} else if (row.type === 'book') {
			temp.books.push(row.name);
		}

		next();
	}
	function end(done) {
		if (temp) {
			this.push(JSON.stringify(temp) + '\n');
		}
		done();
	}

	//stream-combiner streams Readable Streams into writable streams
	//read newline-separated json, group books into genres, then gzip output
	return combine (split(), groupedJson, zlib.createGzip());
};
