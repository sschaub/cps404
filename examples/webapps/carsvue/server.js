'use strict';

var express = require('express'),
    exphbs  = require('express-handlebars'); // "express-handlebars"
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));


var inventory = [
    { id: 1, make: 'Mazda', model: 'Miata' },
    { id: 2, make: 'Honda', model: 'Accord' },
    { id: 3, make: 'Chevy', model: 'Express 2500' }
];

app.get('/inventory', function(req, res) {
    res.send(inventory)
})

app.post('/delete/:id', function(req, res) {
    var id = req.params.id;
    console.log('You want to delete ', id);
    for (var i = 0; i < inventory.length; ++i) 
    {
        if (inventory[i].id == id)
        {
            inventory.splice(i, 1);
        }
    }
    //res.render('home', { inventory: inventory });
    // res.redirect('/');
    res.send(inventory)
});

var nextId = 4;

app.get('/add', function(req, res) {
    var make = req.query.make;
    var model = req.query.model;
    inventory.push({ id: nextId++, make: make, model: model});
    res.redirect('/');
});

app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});
