// We have an array of comments from the website:

var comments = [
	{ username: "tim", comment: "you are doing a great job!" },
	{ username: "tim", comment: "when you have new workshoppers?" },
	{ username: "cat_lover", comment: "wtf? where are all the cats gone?" },
	{ username: "max", comment: "where have you been on friday? we missed you!" },
	{ username: "max", comment: "You don't answer anymore - why?" },
	{ username: "cat_lover", comment: "MORE cats!!!" },
	{ username: "max", comment: "i really love your site" }
];
//
//     I want to know how to post the most comments without repeating the same user,
// so please write a function that:

//   * Counts the comments by `username`.
//   * Sorts the return array by the total comment count of each user.

//     [ { username: "foo",    comment_count: 9 },
//       { username: "foobar", comment_count: 2 } ]

var _ = require('lodash');

var commentCounter = function (commentList) {
	var obj = {};
	var count;

	var users = _.groupBy(commentList, 'username');

	_.forEach(users, function(user) {
		obj.username = user;
		console.log(user);
	});

	obj.comment_count =_.size(users.comment); // count is the size of the array that holds comments on user obj0
	return obj;
};

module.exports = commentCounter;
