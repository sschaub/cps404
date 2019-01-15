let express = require("express");

let mysql = require("mysql");
let pool = mysql.createPool({    
    "host": "localhost",
    "user": "username",
    "password": "secret",
    "database": "dbname",
    "connectionLimit": 10
});


let app = express();

app.get('/hello', function (req, res) {
    pool.getConnection(function(err, connection) {
        connection.query("SELECT * FROM Person", function (err, results) {
            res.send(results);
            connection.release();  // release connection
        });
    });
});

let port = 3000;
app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});