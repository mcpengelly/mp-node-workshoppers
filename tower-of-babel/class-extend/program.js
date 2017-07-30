//implement a character class
	//properties: x, y, health
	//methods: damage, getHealth, toString
class Character {
	constructor(x, y){
		this.x = x
		this.y = y
		this.health = 100
	}

	damage(){
		this.health = this.health - 10
	}

	getHealth(){
		return this.health
	}

	toString(){
		return `x: ${this.x} y: ${this.y} health: ${this.getHealth()}`
	}
}

//implement a player class that extends the character class
	//properties: x, y, health, name
	//overrides: toString()
	//additional methods: move
class Player extends Character {
	constructor(x, y, name){
		super(x, y)
		this.name = name
	}

	move(xDistance, yDistance){
		this.x += xDistance
		this.y += yDistance
	}

	toString(){
		return `name: ${name} ${super.toString()}`
	}
}

var x = process.argv[2];
var y = process.argv[3];
var name = process.argv[4];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());
var player = new Player(+x, +y, name);
player.damage();
player.move(7, 8);
console.log(player.toString());

// export classes for tests
module.exports = {Character, Player}
