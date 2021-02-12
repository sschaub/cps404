let express = require("express");

let mysql = require("mysql");

let dbhost = process.env['DBHOST'] || 'localhost';
let dbPass = process.env['MYSQL_PASSWORD'] || 'mysql';

function getConnection() {
    return mysql.createConnection({
    "host": dbhost,
    "port": 3306,
    "user": "mysql",
    "password": dbPass,
    "database": "mydb"
    });
}

let app = express();

app.get('/hello', function (req, res) {
    let connection = getConnection();
    connection.connect(function (err) {
        if (err) {
            console.log("Problem connecting to database", err);
            res.send("Unable to connect to database! " + err);
            return;
        }
        connection.query("SELECT * FROM Person", function (err, results) {
            res.send(results);
            connection.destroy();
        });
    });    
});

let port = process.env['PORT'] || 8888;
port = parseInt(port)
app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});
