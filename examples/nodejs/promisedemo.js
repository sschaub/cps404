let fs = require('fs')


let data = await fs.readFile('promisedemo.js');


console.log(data)