
var mysql = require('mysql');

exports.pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'passw0rd',
    database: 'cps401_library'
});
