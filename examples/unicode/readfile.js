// Demonstrates reading a file in Node.js using a synchronous call

let fs = require("fs");

console.log("😍");

if (process.argv.length != 3) {
    console.log('Usage: node readfile_sync.js <filename>');
    process.exit(1);
}

let filename = process.argv[2];

let data = fs.readFileSync(filename, 'utf8');

let lines = data.split('\n');
console.log(`There are ${lines.length} lines.`)
for (let i = 0; i < lines.length; ++i) {
    console.log(lines[i]);
}

let line = lines[0]
console.log('Length of first line:', line.length)
for (let i = 0; i < line.length; ++i) {
    console.log(i, line[i]);
}