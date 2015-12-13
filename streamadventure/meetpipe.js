//recieve file from cmd line args, pipe it to stdout
var fs = require('fs');
var file = process.argv[2];

fs.createReadStream(file).pipe(process.stdout);
