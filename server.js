 'use strict';

var date = (new Date()).toJSON();

const http = require('http')
  , url = require('url')
  , URLS = [
  	  '/api/pokemons/create'
  	, '/api/pokemons/read'
  	, '/api/pokemons/update'
  	, '/api/pokemons/delete'
  ]
  , SUCCESS = {
  		version: '1.0'
  	,	name: 'Node :D'
  	,	returned_at: date
  }
  , ERROR = {
  		message: "Não encontrado"
  };

var server = http.createServer(function(req, res){
	var parsedURL = url.parse(req.url, true);

	if( URLS.indexOf(parsedURL.pathname) >= 0){
		res.writeHead(200, {"Content-Type": "text/json"});
		res.write( JSON.stringify(SUCCESS));
	} else {
		res.writeHead(404, {"Content-Type": "text/json; charset=utf-8"});
		res.write( JSON.stringify(ERROR));
	}
	res.end();
});

server.listen(3000, function(){
	console.log('Server up');
});