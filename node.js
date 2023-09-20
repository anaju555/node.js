var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Ana Julia Reis de Sousa-20/09/2023');
}).listen(8024);
