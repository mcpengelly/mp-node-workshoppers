var crypto = require('crypto');
var passPhrase = process.argv[2];

var stream = crypto.createDecipher('aes256', passPhrase);
//process.stdin.pipe(stream).pipe(process.stdout);
process.stdin.pipe(stream).pipe(process.stdout);
