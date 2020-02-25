var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  console.log("Serving: " + __dirname + request.url);
  fs.readFile(__dirname + request.url, function(err, data) { 
     if (err) {
         if (err.code == 'ENOENT') {
            response.statusCode = 404;
            response.setHeader('Content-Type', 'text/html');
            response.end('<html><body>FILE NOT FOUND</body></html>');
         } else {
            response.statusCode = 500;
            response.end(String(err));
        }
    } else {
      response.setHeader('Content-Type', 'text/html');
      response.end(data);
    }
  });
}).listen(8888);

