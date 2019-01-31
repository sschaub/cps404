'use strict';

var express = require("express");
var fs = require("fs");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/hello', function(req, res) {
  fs.readFile(__dirname + "/helloform.html", function(err, data) {
    if (err) {
      res.send('Oops. Call the server administrator.');      
    } else {
      res.send(data.toString());
    }
  });
});

app.post('/hello', function(req, res) {
  
  let name = req.body.username ||  "world";
  
  res.send("Hello, " + name + "!");
});

var port = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});