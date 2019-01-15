let http = require('http');
let fs = require('fs');

http.createServer(function(req, res) {
  console.log("Serving: " + req.url);
  fs.createReadStream(__dirname + req.url)
    .on('error', function(err) {
        res.statusCode = 500;
        res.end(String(err));
    })
    .pipe(res);
}).listen(8888);