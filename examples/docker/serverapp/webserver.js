let http = require('http');
let fs = require('fs');

http.createServer(function(req, res) {
  console.log("Serving: " + req.url + " from " + __dirname);
  fs.readFile(__dirname + req.url, function(err, data) { 
     if (err) {
      res.statusCode = 500;
      res.end(String(err));
    } else {
      res.end(data);
    }
  });
}).listen(8888);

console.log("Server is listening for incoming connections.")