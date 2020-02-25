var express = require("express");
var http = require("http");
var app = express();

// setup routes
app.get("/", function(req, res, next) {
  res.send("Hello <strong>home page</strong>");
});
app.get("/foo", function(req, res, next) {
  res.send("Hello <strong>foo</strong>");
});
app.get("/bar", function(req, res, next) {
  res.send("Hello <strong>bar</strong>");
});

// wait for connections
app.listen(8000);
