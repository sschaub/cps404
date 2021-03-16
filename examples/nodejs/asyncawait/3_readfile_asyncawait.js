let fs = require("fs").promises;

async function readBooks(filename) {
    try {
        data = await fs.readFile(filename, 'utf-8')
        let books = JSON.parse(data);
        //data = await requests.get("https://.....")
        console.log("Received:", books)
    } catch (err) {
        console.error("I got an error:", err)
    }
    return data;        
}

// Note - top-level await ... mileage may vary depending on version of node.js ...
books = await readBooks('../books.json')
