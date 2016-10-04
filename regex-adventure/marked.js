var marked = require('marked');

module.exports = function(str){
	var markdown = marked(str);
	return markdown.replace(/@@(.+?)@@/g, '<blink>$1</blink>');
};
