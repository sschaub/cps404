var express = require("express");
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

items = {

    '7141832': {
        'name': 'Chippewa 17-inch Engineer Boot',
        'sku': '7141832',
        'colors': 'Black <abbr>Oil-tanned</abbr>, Black Polishable',
        'price': '$187.00',
        'features': '<abbr>Oil-tanned</abbr> or polishable <abbr>full-grain</abbr> leather uppers. <abbr>Vibram</abbr> sole. <abbr>Goodyear welt</abbr>. Padded insole. Steel safety toe.'
    },
    '7177382': {
        'name': 'Caterpillar Tradesman Work Boot',
        'sku': '7177382',
        'colors': 'Honey, Peanut',
        'price': '$87.00',
        'features': '<abbr>Full-grain</abbr> <abbr>oil-tanned</abbr> leather. Nylon mesh lining. Ortholite sock liner. EVA midsole. T84V Rubberlon outsole.'
    }
};

var sizes = [
    { value: '', caption: 'choose size' },
    { value: '9d', caption: '9 D' },
    { value: '9ee', caption: '9 EE' },
    { value: '95d', caption: '9\u00BD D' },
    { value: '95ee', caption: '9\u00BD EE' },
    { value: '95eee', caption: '9\u00BD EEE' },
    { value: '10ee', caption: '10 EE' },
    { value: '10eee', caption: '10 EEE' },
    { value: '13e', caption: '13 E' }
];

var colors = {
    '7141832': [
        { 'value': 'bk', 'caption': 'Black Oil-tanned' },
        { 'value': 'br', 'caption': 'Black Polishable' }
    ],
    '7177382': [
        { 'value': 'hy', 'caption': 'Honey' },
        { 'value': 'sd', 'caption': 'Peanut' }
    ]
};

app.get('/details', function (req, res) {
    var style = req.query.style;
    var item = items[style];
        
    res.send(item);
    
});

app.get('/sizes', function (req, res) {
    res.send(sizes);
});

app.get('/colors', function (req, res) {
    var style = req.query.style;
    // simulate network delay
    setTimeout(function() {
        res.send(colors[style]);
    }, 2000);    
});


var port = 3000;
app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});