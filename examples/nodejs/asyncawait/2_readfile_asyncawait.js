// Example usage: node 2_readfile_asyncawait.js data.txt 

const fs = require('fs')

async function demo(filename) {
    try {
        const data = await fs.promises.readFile(filename, 'utf-8')
        console.log(data)    
    } catch(e) {
        console.log(`Oops! ${e}`)
    }
}

async function go() {
    await demo(process.argv[2])
    console.log("demo() returned")    
}

go()