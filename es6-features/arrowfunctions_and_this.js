//arrow functions in es6 lexically bind the surrounding 'this' to the containing block
var foot = {
	kick: () => {
		this.yelp = 'Ouch!';
		setImmediate(() => {
			console.log(this.yelp);
		});
	}
};
foot.kick();

// for example the above code has the same behaviour as below
// set 'that' to the current value of this ('this' will be undefined within the kick function)
// var that = this;
// var foot = {
// 	kick: function() {
// 		that.yelp = 'Ouch!';
// 		setImmediate(function() {
// 			console.log(that.yelp);
// 		});
// 	}
// };
// foot.kick();

