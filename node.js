var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
    var dataAtual = new Date();
    var dataFormatada = dataAtual.toDateString();
  res.end('Ana Julia Reis de Sousa!\nData atual: ' + dataFormatada);
}).listen(8024);
