'use strict';

var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

var app = express();

app.engine('hbs', exphbs({defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressValidator({
//     customValidators: {
//         passwordsMatch: function (password, confirmPassword) {
//             return password == confirmPassword;
//         }
//     }
// }));

// ----------------- routes --------------------------

app.get('/', function (req, res) {
    res.redirect('/register');
});

app.get('/register', function (req, res) {
    res.render('register');
});

function makeRegisterValidationRules() {
    return [
        check('username', 'Username must not be empty').trim().notEmpty(),
        check('username', 'Username must contain only letters and numbers').isAlphanumeric(),
        check('password', 'Password must be supplied').trim().notEmpty(),
        check('confirmpassword', "Passwords do not match.").custom(
            function(confirmPas, { req }) {
                console.log(`cp=${confirmPas}, rbp=${req.body.password}`)
                if (confirmPas == req.body.password) {
                    return true;
                }
            }
        ),
        check('gender', 'Please select a gender').isInt({min: 0, max: 1}).toInt()
    ]
}

app.post('/register', makeRegisterValidationRules(), function (req, res) {

    
    var username = req.body['username'];
    var password = req.body['password'];
    var gender = req.body['gender'];
    console.log(`Username = "${username}"`);
    console.log(gender + 1);

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        res.render('register', { errmsg: errors.array(), username: username, gender: gender });
        //res.send('There have been validation errors: ' + util.inspect(result.array()), 400);
        return;
    }

    // DO THIS?
    res.render('confirm', { username: username, password: password });

    // or this?
    //res.redirect('/confirm?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password));
    // or ...?

    // req.session.username = req.params['username'];
    // req.session.password = req.params['password'];
    //res.redirect('/confirm')

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
