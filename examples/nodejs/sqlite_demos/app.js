let sqlite3 = require('sqlite3');

// open connection
let sqlitedb = new sqlite3.Database('mydb.sqlite3');

let User = require("./user.js")(sqlitedb);

let toby = new User("Toby", "Mypassword");
console.log("Toby is: ", toby);
toby.save(function(err, savedToby) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Saved toby: ", savedToby);
});

User.findByUsername('fred', function (err, user) {
    if (err) {
        console.log(err);
        return;
    }    
    console.log("Retrieved User: ", user); 

    user.password += "secret";

    user.save(function(err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Updated User Password.');
    });
});

