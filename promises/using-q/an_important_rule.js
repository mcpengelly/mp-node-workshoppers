var q = require('q');

var throwMyGod = function () {
	throw new Error('OH NOES');
};

var iterate = function (arg) {
		if(arg === 6) throwMyGod();
		console.log(arg);
		return arg + 1;
};

q.fcall(iterate, 1)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(null, console.log)
	.done();
