// Example usage: node readfile_asyncawait2.js data.txt data.txt

const fs = require('fs')

async function demo(filename1, filename2) {
    try {
        const promise1 = fs.promises.readFile(filename1, 'utf-8')
        const promise2 = fs.promises.readFile(filename2, 'utf-8')
        const data1 = await promise1
        const data2 = await promise2
        return data1 + data2
    } catch(e) {
        console.log(`Oops! ${e}`)
    }
}

async function go() {
    const result = await demo(process.argv[2], process.argv[2])
    console.log(result)    
}

async function

go()