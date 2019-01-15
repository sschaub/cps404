let express = require("express");

let mysql = require("mysql");
let connection = mysql.createConnection({
    "host": "localhost",
    "port": 3306,
    "user": "username",
    "password": "secret",
    "database": "dbname"
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

let port = 3000;
app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});