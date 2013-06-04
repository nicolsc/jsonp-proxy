var express = require('express');
var request = require('request');
var app = express();

var port = process.env.PORT || 17008;

app.use(express.bodyParser());

app.get('*', function(req, res){
  	console.log('req', req.body, req.query);
	if (!req.query || !req.query.url){
		return res.status(400).send();
	}
	req.query.url = decodeURIComponent(req.query.url);
	if (!req.query.url.match(/^http(s?):\/\//)){
		req.query.url = 'http://'+req.query.url;
	}

	var callback = req.query.callback || 'callback';

	request({url:req.query.url}, function(error, response, body){
		res.header('Content-Type', 'application/javascript');
		res.send(callback+'('+body+');');
	});
});
app.listen(port);
console.log('Listening on port '+port);