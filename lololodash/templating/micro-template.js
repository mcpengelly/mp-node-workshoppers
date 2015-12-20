var _ = require('lodash');

var templater = function (userinfo) {
	return _.template('Hello <%= user %> (logins: <%= logins %>)')({
		user: userinfo.name,
		logins: _.size(userinfo.login)
	});
};

module.exports = templater;
