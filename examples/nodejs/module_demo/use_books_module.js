let books = require("./books-module");

allBooks = books.loadDefaultBooks();

for (i = 0; i < allBooks.length; ++i) {
    console.log(allBooks[i].author + " wrote " + allBooks[i].title);
}

