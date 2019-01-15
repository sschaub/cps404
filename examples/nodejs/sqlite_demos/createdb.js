let sqlite3 = require('sqlite3');

// open connection
let db = new sqlite3.Database('mydb.sqlite3');

db.serialize(function () {
    db.run("create table users (id integer primary key, username text, password text)");

    db.run("create unique index users_username on users(username)");
    db.run("insert into users(username, password) values('fred', 'secret')");
    db.run("insert into users(username, password) values('julie', '123456')");
});
