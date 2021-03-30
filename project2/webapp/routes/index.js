var express = require('express');
var router = express.Router();

var Item = require('../models/item');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');    
});


module.exports = router;
