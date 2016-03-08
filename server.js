 'use strict';

var date = (new Date()).toJSON();

const http = require('http')
  , URLS = [
  	  '/api/v1'
  	, '/api/v2'
  ]
  , SUCCESS = {
  		version: '1.0'
  	,	name: 'Node :D'
  	,	returned_at: date
  }
  , ERROR = {
  		message: "erro na parada"
  };

var server = http.createServer(function(req, res){
	console.log(URLS.indexOf(req.url));
	if( URLS.indexOf(req.url) >= 0){
		res.writeHead(200, {"Content-Type": "text/json"});
		res.write( JSON.stringify(SUCCESS));
	} else {
		res.writeHead(200, {"Content-Type": "text/json"});
		res.write( JSON.stringify(ERROR));
	}
	res.end();
});

server.listen(3000, function(){
	console.log('Server up');
});