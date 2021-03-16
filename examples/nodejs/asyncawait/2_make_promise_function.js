// https://nodejs.dev/learn/understanding-javascript-promises

const fs = require('fs')

function getFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        reject(err)  // calling `reject` will cause the promise to fail with or without the error passed as an argument
        return        // and we don't want to go any further
      }
      resolve(data)
    })
  })
}

getFile('../books.json')
.then(data => console.log(data))
.catch(err => console.error(err))