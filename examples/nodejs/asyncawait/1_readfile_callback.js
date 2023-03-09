const fs = require("fs")

fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)  
      return        
    }
    console.log(data)
})

console.log("readFile completed")