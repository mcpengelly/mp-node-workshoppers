var json = {
	"name": {
		"first": "Yosuke",
		"family": process.argv[2]
	},
	"birth": {
		"year": 1982,
		"month": 12,
		"day": process.argv[3]
	}
};

//extract name.family and birth.day
// let familyName = json.name['family'];
// let birthDay = json.birth['day'];

//OR

let {family} = json.name;
let {day} = json.birth;

//OR
// var {name: {family: familyName}, birth: {day: birthDay}} = json;

console.log(family);
console.log(day);
