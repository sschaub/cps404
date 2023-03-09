// Example usage: node readfile_promise.js data.txt 

const fs = require('fs')

let filename = process.argv[2]

fs.promises.readFile(filename, 'utf-8')
    .then(result => console.log(result))
    .catch(err => console.log(`Oops: ${err}`))

