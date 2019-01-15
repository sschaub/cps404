let fs = require("fs");

function loadBooks(filename, callback) {
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) {
            callback(err);
            return;
        }
        try {
            let books = JSON.parse(data);
            callback(null, books);
        } catch (err) {
            callback(err);
        }
    });
    
    
}

loadBooks("books.json", function(err, books) {
    if (err) {
        console.log("Problem loading books:", err);
        return;
    }
    for (i = 0; i < books.length; ++i) {
        console.log(books[i].author + " wrote " + books[i].title);
    }
});

