let fs = require("fs");

let loadBooks = exports.loadBooks = function (filename) {
    let books = JSON.parse(fs.readFileSync(filename, 'utf8'));
    return books;
}

let loadDefaultBooks = exports.loadDefaultBooks = function() {
    return loadBooks(__dirname + "/data/books.json");
}


