var repeater = require(process.argv[2]);
var test = require('tape');

test('repeater should call the callback n times', function (t) {
	t.plan(5);
	repeater(5, function(){
		t.pass('callback called');
	});
});
