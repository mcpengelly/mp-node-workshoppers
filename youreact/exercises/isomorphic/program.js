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

app.use('/bundle.js', function (req, res) {
res.setHeader('content-type', 'application/javascript');

browserify({ debug: true })
	.transform(babelify.configure({
		presets: ["react", "es2015"]
	}))
	.require("./app.js", { entry: true })
	.bundle()
	.pipe(res);
});

app.use('/', function (req, res) {
var initialData = JSON.stringify(data);
var markup = ReactDOMServer.renderToString(React.createElement(TodoBox, {data: data}));

res.setHeader('Content-Type', 'text/html');

var html = ReactDOMServer.renderToStaticMarkup(body(null,
	div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}),
	script({
		id: 'initial-data',
		type: 'text/plain',
		'data-json': initialData
	}),
	script({src: '/bundle.js'})
));

	res.end(html);
});

app.listen(app.get('port'), function() {});
