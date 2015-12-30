var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
	ignore: false
});

app.use('/', function(req, res) {
	//make sure to change below
	//if you want to render a different view.
	res.render('props', '');
});

app.listen(app.get('port'), function() {});
