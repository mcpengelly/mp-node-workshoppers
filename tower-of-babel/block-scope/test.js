// testing var vs let vs const
var expect = require('chai').expect;

describe('block-scope', function(){
	describe('var', function(){
		it('should be mutable', function(){
			var a = 'IMMUTABLE';
			try {
				a = 'MUTATED';
			} catch(e) {
				console.log(e);
			}
			expect(a).to.equal('MUTATED');
		});
		it('should NOT use block scoping', function(){
			// var uses function scoping, causing the block declaration to override the init value
			var b = 'initial';
			{
				var b = 'changed';
			}

			expect(b).to.equal('changed');
		});
		it('should use function scoping', function(){
			//TODO
		});
	});
	describe('let', function(){
		it('should be mutable', function(){
			let a = 'IMMUTABLE';
			try {
				a = 'MUTATED';
			} catch(e) {
				console.log(e);
			}

			expect(a).to.equal('MUTATED');
		});
		it('should use block scoping', function(){
			// block scoping
			let a = 'initial';
			{
				let a = 'changed';
			}
			// a in block is out of scope at this time so the original value is correct
			expect(a).to.equal('initial');
		});
	});
	describe('const', function(){
		// if we try to reassign a it should not allow us, fail gracefully using try/catch
		it('should be immutable', function(){
			const a = 'IMMUTABLE';
			try {
				a = 'MUTATED';
			} catch(e) {
				// console.log('const is immutable');
			}
			expect(a).to.equal('IMMUTABLE');
		});

	});
});
