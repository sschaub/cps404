const fs = require("fs")

function getFileAsync(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) {
              reject(err) 
              return        
            }
            resolve(data)
        })
    })
}

async function demo(filename) {
    try {
        const result = await getFileAsync(filename)
        return result
    } catch (e) {
        console.log(`${e}`)
    }
}

// getFileAsync(process.argv[2])
// .then(data => console.log(data))
// .catch(err => console.log(`Oopsie! ${err}`))

demo(process.argv[2]).then(data => console.log(data))

