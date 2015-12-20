//example input
//
// var comments = [
// 	{ username: "tim", comment: "you are doing a great job!" },
// 	{ username: "tim", comment: "when you have new workshoppers?" },
// 	{ username: "cat_lover", comment: "wtf? where are all the cats gone?" },
// 	{ username: "max", comment: "where have you been on friday? we missed you!" },
// 	{ username: "max", comment: "You don't answer anymore - why?" },
// 	{ username: "cat_lover", comment: "MORE cats!!!" },
// 	{ username: "max", comment: "i really love your site" }
// ];

var _ = require('lodash');

var commentCounter = function (commentList) {
	var obj = [];
	var count;

	var comments = _.groupBy(commentList, 'username');

	_.forEach(comments, function(comment, name) {
			obj.push({
				username: name,
				comment_count: _.size(comment)
			});
	});
	return _.sortBy(obj, function(item) {
		return -item.comment_count;
	});
};

module.exports = commentCounter;
