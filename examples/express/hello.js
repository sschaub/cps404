var express = require("express");


var app = express();

app.get('/hello', function(req, res) {
  var name = req.query.fname || "world";
  
  res.send("Hello, " + name + "!");
});

var port = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});