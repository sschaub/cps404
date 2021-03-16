let fs = require("fs").promises;

fs.readFile('../books.json', 'utf-8')
.then( data => {
    let books = JSON.parse(data);
    console.log("Got info: ", books)
    //return conn.executeUpdate("insert into ...")
})
.catch(err => console.error("Uh oh: ", err));

