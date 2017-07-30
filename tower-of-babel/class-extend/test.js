var {expect} = require('chai');
var {Character, Player} = require('./program');

describe('class-extend', function() {
	describe('character', function() {
		const character = new Character(1, 2);

		it('should not be null', function() {
			expect(character).to.be.a('object');
		});
		it('should have properties: x, y, health', function() {
			expect(character).to.have.property('x');
			expect(character).to.have.property('y');
			expect(character).to.have.property('health');
		});
	});
	describe('player', function() {
		const player = new Player(1, 2, 'steve');

		it('should not be null', function() {
			expect(player).to.be.a('object');
		});
		it('should have properties: x, y, health, name', function() {
			expect(player).to.have.property('x');
			expect(player).to.have.property('y');
			expect(player).to.have.property('health');
			expect(player).to.have.property('name');
		});
	});
});
