'use strict';

var express = require('express'),
    exphbs  = require('express-handlebars'); // "express-handlebars"

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
//app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    let data = { 
        'date': new Date().toString()
    }
    res.render('home', data);
});

app.get('/work', function (req, res) {
    let data = { 
        'message': 'Here is a <b>great</b> message.'
    }
    res.render('work', data);
});

app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});
