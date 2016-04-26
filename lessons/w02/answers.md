# Node.js - Aula 02 - Exercício

**user:** [icarcal](https://github.com/icarcal)

**autor:** Icaro Caldeira Carreira

## Quais são os 4 verbos que utilizamos para o CRUD?
- C: POST
- R: GET
- U: PUT/PATCH
- D: DELETE

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).
Eles fram criados para a padronização da comunicação entre cliente/servidor, e indicam se uma requisição foi completada.
O status code possui 3 dígitos, sendo separados nos seguintes grupos:

#####Informacional (1xx)
###### 101 - Troca de protocolo
![Http Cat 100](https://http.cat/101)

#####Sucesso (2xx)
###### 204 - Sem conteúdo (indica que a resposta foi sucesso, mas não existe conteúdo na resposta)
![Http Cat 204](https://http.cat/204)

#####Redirecionamento (3xx)
###### 301 - Movido permanentemente
![Http Cat 301](https://http.cat/301)

#####Erro do Cliente (4xx)
###### 404 - Não encontrado
![Http Cat 404](https://http.cat/404)

#####Erro do Servidor (5xx)
###### 500 - Erro interno do servidor
![Http Cat 500](https://http.cat/500)

## Explique o que é cada parâmetro da função recebida no `createServer`.
```js
let http = require('http');

http.createServer((req, res) => {
    res.end();
});
```
- req = *Request*: É a requisição feita do cliente para o servidor
- res = *Response*: É a resposta do servidor para o cliente

## O que é e para que serve a Querystring?
A querystring é o formato para passar dados ao servidor através da URL para o servidor.

O modelo da querystring é o seguinte: *?chave=valor* e para a concatenação de mais de um valor, é utilizado o valor *&*

Exemplo: http://xpto.com*?i=123&a=456*

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
```js
'use strict';

let date = (new Date()).toJSON();

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
    , name: 'Node :D'
    , returned_at: date
  }
  , ERROR = {
      message: "Não encontrado"
  };

const server = http.createServer((req, res) => {
  let parsedURL = url.parse(req.url, true);

  if( URLS.indexOf(parsedURL.pathname) >= 0){
    res.writeHead(200, {"Content-Type": "text/json"});
    res.write( JSON.stringify(SUCCESS));
  } else {
    res.writeHead(404, {"Content-Type": "text/json; charset=utf-8"});
    res.write( JSON.stringify(ERROR));
  }
  res.end();
});

server.listen(3000, () => console.log('Server up') );

```

ref: https://docs.google.com/presentation/d/1_CHh_fTkzgxAnxB3MlZ5WRhTqMLViMk__jkCZiZ3IMA/edit?pref=2&pli=1#slide=id.gec48543f5_0_240
