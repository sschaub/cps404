'use strict';

var express = require('express'),
    exphbs  = require('express-handlebars'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    { csrfSync } = require("csrf-sync"); 

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: '59B93087-78BC-4EB9-993A-A61FC844F6C9',
    resave: true,
    saveUninitialized: true
  }));

// Configure CSRF protection module
const { csrfSynchronisedProtection } = csrfSync({
    // Retrieve the CSRF token submitted by the user in a form
    getTokenFromRequest: (req) =>  req.body['_csrf']    
})

function isLoggedIn(req, res, next) {
    var username = req.session.username;
    if (username) {
        next();
    } else {
        res.redirect("/login");
    }
}

var inventory = [
    { id: 1, make: 'Mazda', model: 'Miata' },
    { id: 2, make: 'Honda', model: 'Accord' },
    { id: 3, make: 'Chevy', model: 'Express 2500' }
];

app.get('/', function (req, res) {
    res.redirect("/login");
});

app.get('/login', function (req, res) {
    res.render('login');
});

app.post('/login', function (req, res) {
    var username = req.body.username;
    if (username) {
        req.session.username = username;
        res.redirect("/home");
    } else {
        res.render('login');
    }
});

// Register CSRF protection for all routes defined after this point
app.use(csrfSynchronisedProtection)

// Middleware to generate csrftoken for each request
app.use(function(req, res, next) { 
    res.locals.csrftoken = req.csrfToken(true); 
    next(); 
}); 

app.get('/home', isLoggedIn, function (req, res) {
    res.render('home', { inventory: inventory });
});

// csrf does not protect GET routes; CSRF attack possible here
app.get('/delete/:id', isLoggedIn, function(req, res) {
    var id = req.params.id;
    console.log('You want to delete ', id);
    for (var i = 0; i < inventory.length; ++i) 
    {
        if (inventory[i].id == id)
        {
            inventory.splice(i, 1);
        }
    }
    res.redirect('/home');
});

var nextId = 4;

// csrf module prevents CSRF attack here
app.post('/add', function(req, res) {
    var make = req.body.make;
    var model = req.body.model;
    if (make && model) {
        inventory.push({ id: nextId++, make: make, model: model});  
    }
    res.redirect('/home');
});

app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});
