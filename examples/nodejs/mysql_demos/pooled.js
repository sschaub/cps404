// Note: If the below fails to connect to MySQL with an error "Client does not support authentication protocol requested by server",
// see https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server

let express = require("express");

let mysql = require("mysql");
let pool = mysql.createPool({    
    "host": "localhost",
    "user": "root",
    "password": "passw0rd",
    "database": "simpledb",
    "connectionLimit": 10
});


let app = express();

app.get('/hello', function (req, res) {
    pool.getConnection(function(err, connection) {
        if (err) {
            res.send("Problem: " + err);
            return;
        }
        connection.query("SELECT * FROM Student", function (err, results) {
            res.send(results);
            connection.release();  // release connection
        });
    });
});

let port = 3000;
app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});