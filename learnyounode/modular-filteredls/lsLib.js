var fs = require('fs');
var path = require('path');

function filterDirList (dirName, fileExt, cb) {
	fs.readdir(dirName, function (err, files) {
			if (err) return cb(err);

			var filteredList = files.filter(function(file) {
				return path.extname(file) === '.' + fileExt;
			});

		cb(null, filteredList);
	});
}
module.exports = filterDirList;

