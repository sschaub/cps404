let sqlite3 = require('sqlite3');

// open connection
let sqlitedb = new sqlite3.Database('mydb.sqlite3');

sqlitedb.all("select * from users", function(err, rows) {
    if (err) {
        console.log(err);
        return;
    }

    rows.forEach(function(row) {
        console.log(row);
    });
    
});

sqlitedb.run("insert into users(username, password) values(?, ?)", "George", "guessme", function(err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("result:", result);
    console.log("New id: ", this.lastID);
});

