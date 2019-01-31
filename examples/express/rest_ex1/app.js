var express = require("express");
var routes = require("./routes");
var http = require("http");
var path = require("path");
var app = express();
var port = process.env.PORT || 8000;

app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.bodyParser());
app.use(express.methodOverride());
// define the storage area
app.use(function (req, res, next) {
    req.store = __dirname + "/store";
    next();
});
app.use(app.router);
// development only
if ("development" === app.get("env")) {
    app.use(express.errorHandler());
}
routes.mount(app);
http.createServer(app).listen(port, function () {
    console.log("Express server listening on port " + port);
});
