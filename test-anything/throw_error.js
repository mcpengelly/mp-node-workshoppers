var feedCat = require(process.argv[2]);
var tape = require('tape');

tape('feedCat', function(t){
	t.plan(2);
	t.equal(feedCat('food'), 'yum');
	t.throws(function () {
		feedCat('chocolate');
	});
});
