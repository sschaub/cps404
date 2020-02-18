let express = require("express");

let mysql = require("mysql");

let dbhost = process.env['DBHOST'] || 'localhost';

let connection = mysql.createConnection({
    "host": dbhost,
    "port": 3306,
    "user": "mysql",
    "password": "mysql",
    "database": "mydb"
});

connection.connect(function (err) {
    if (err) {
        throw err;  // terminate application
    }
});

let app = express();

app.get('/hello', function (req, res) {
    connection.query("SELECT * FROM Person", function (err, results) {
        res.send(results);
    })
});

let port = process.env['PORT'] || 8888;
port = parseInt(port)
app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});
