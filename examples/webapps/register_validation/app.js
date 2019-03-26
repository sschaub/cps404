'use strict';

var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

app.engine('hbs', exphbs({defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator({
    customValidators: {
        passwordsMatch: function (password, confirmPassword) {
            return password == confirmPassword;
        }
    }
}));

// ----------------- routes --------------------------

app.get('/', function (req, res) {
    res.redirect('/register');
});

app.get('/register', function (req, res) {
    res.render('register');
});

app.post('/register', function (req, res) {

    req.assert('username', 'Username must nonempty and contain only letters and numbers').notEmpty().isAlphanumeric();
    req.assert('password', 'Password must be supplied').notEmpty();
    req.assert('password', 'Passwords do not match').passwordsMatch(confirmPassword);
    req.assert('gender', 'Please select a gender').isInt({min: 0, max: 1});

    var username = req.sanitize('username').trim();
    var password = req.sanitize('password').trim();
    var confirmPassword = req.sanitize('confirmpassword').trim();
    var gender = req.sanitize('gender').toInt();

    req.getValidationResult().then(function (result) {
        if (!result.isEmpty()) {
            res.render('register', { errmsg: result.array(), username: username, gender: gender });
            //res.send('There have been validation errors: ' + util.inspect(result.array()), 400);
            return;
        }

        // DO THIS?
        //res.render('confirm', { username: username, password: password });

        // or this?
        res.redirect('/confirm?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password));
        // or ...?

        req.session.username = username;
        req.session.password = password;
        res.redirect('/confirm')
    });
});

app.post('/confirm', function (req, res) {
    var username = req.body.username || "";
    var password = req.body.password || "";

    console.log('User ${username} registered with password ${password}.');
    res.render('complete', { username: username });
});


app.listen(3000, function () {
    console.log('server listening on: 3000');
});
