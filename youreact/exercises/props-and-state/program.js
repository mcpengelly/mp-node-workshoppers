var express = require('express');
var app = express();

// setup express server for rendering jsx react views
app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

// babel transforms jsx into optimized js code
require('babel/register')({
  ignore: false
});

app.use('/', function (req, res) {
  res.render('index', '');
});

app.listen(app.get('port'), function () {});
