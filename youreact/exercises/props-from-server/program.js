var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
	ignore: false
});

var arg1 = process.argv[3];
var arg2 = process.argv[4];

// data the server is going to send the client
var data = [
	{
		title: 'Shopping',
		detail: arg1
	},
	{
		title: 'Hair cut',
		detail: arg2
	}
];

app.use('/', function(req, res) {
	res.render('props-from-server', {data: data});
});

app.listen(app.get('port'), function() {});
