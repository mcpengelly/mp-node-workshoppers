var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
var concat = require('concat-stream');

var cipherName = process.argv[2];
var cipherPass = process.argv[3];

var parser = tar.Parse();

parser.on('entry', function (e) {
	if (e.type !== 'File') return;

	var h = crypto.createHash('md5', { encoding: 'hex' });
	e.pipe(h).pipe(concat(function (hash) {
		console.log(hash + ' ' + e.path);
	}));
});

var decrypt = crypto.createDecipher(cipherName, cipherPass);
var gUnzip = zlib.createGunzip();
// feed stdin to tar unzipper, decipher, parser, then stdout
process.stdin
	.pipe(decrypt)
	.pipe(gUnzip)
	.pipe(parser);
