let fs = require("fs");

function loadBooks(filename) {
    let books = JSON.parse(fs.readFileSync(filename, 'utf8'));
    return books;
}

let books = loadBooks("books.json");

for (i = 0; i < books.length; ++i) {
    console.log(books[i].author + " wrote " + books[i].title);
}