var express = require('express');

var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());


app.get('/foo', function (req, res, next) {
    var count = req.cookies.fooCount || 0;
    ++count;
    res.cookie('fooCount', count);
    res.send('you viewed this page ' + count + ' times')
})


app.get('/persist', function (req, res, next) {
    res.cookie('stickaround', '5', { maxAge: 900000 });
    res.send('Cookie set.');
});

app.get('/show', function (req, res, next) {
    res.send(req.cookies);
});

app.listen(3000);