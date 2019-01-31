var express = require("express");

var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/hello', function(req, res) {
  var name = req.body.fname || "world";
  
  res.send("Hello, " + name + "!");
});

var port = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});