'use strict';

var express = require('express');

var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.redirect('/index.html');
});

app.listen(3000, function () {
    console.log('server listening on: 3000');
});
