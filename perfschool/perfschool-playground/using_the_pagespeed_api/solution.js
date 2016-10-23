'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 7777;

//custom
var localtunnel = require('localtunnel');
var psi = require('psi');

app.get('/', home);
app.get('/insights', insights);
app.listen(port, listening);

function listening () {
  console.log('Listening on port', port);
}

function home (req, res) {
  var file = path.join(__dirname, 'index.html');
  var index = fs.readFileSync(file, 'utf8');
  res.send(index);
}

//testing pagespeed whenever the insights endpoint is reached, stats are return
function insights (req, res, next) {
	localtunnel(port, function(err, tunnel) {
		if(err) {
			next(err);
			return;
		}
		psi(tunnel.url).then(function(err, data) {
			tunnel.close();
			if(err) {
				next(err);
				return;
			}
			var resources = {
				js: data.pageStats.numberJsResources,
				css: data.pageStats.numberCssResources,
				total: data.pageStats.totalResources,
				hosts: data.pageStats.hosts
			};
			res.json(resources);
		});
	});
}
