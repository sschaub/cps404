'use strict';

var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();

app.engine('hbs', exphbs({defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));

// ----------------- routes --------------------------

app.get('/', function (req, res) {
    res.redirect('/register');
});

app.get('/register', function (req, res) {
    res.render('register');
});

app.post('/register', function (req, res) {
    var username = req.body.username || "";
    var password = req.body.password || "";
    var confirmPassword = req.body.confirmpassword || "";
    var gender = req.body.gender || "";
    var errMsg;

    username = username.trim();
    password = password.trim();
    confirmPassword = confirmPassword.trim();

    if (username == '' || password == '')
    {
        errMsg = "Please supply username and password.";
    }

    if (password != confirmPassword)
    {
        errMsg = "Passwords don't match.";
    }

    if (gender != 'Male' && gender != 'Female')
    {
        errMsg = "Please choose male or female gender.";
    }

    if (errMsg)
        res.render('register', { errmsg: errMsg, username: username, gender: gender });
    else
        res.render('confirm', { username: username, password: password });
});

app.post('/confirm', function (req, res) {
    var username = req.body.username || "";
    var password = req.body.password || "";

    console.log('User ${username} registered with password ${password}.');
    res.render('complete');
});


app.listen(3000, function () {
    console.log('server listening on: 3000');
});
