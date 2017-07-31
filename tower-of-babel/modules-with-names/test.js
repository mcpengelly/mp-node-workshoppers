var expect = require('chai').expect;
var { PI, sqrt, square } = require('./Math');
// should();

describe('modules-with-names custom math module', function() {
	describe('custom math module', function() {
		it('should have the correct property types (number, function, function)', function() {
			expect(PI).to.be.a('number');
			expect(sqrt).to.be.a('function')
			expect(square).to.be.a('function')
		});
	});
});
